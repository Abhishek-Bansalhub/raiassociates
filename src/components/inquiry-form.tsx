import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { desks } from "@/data/desks";
import { forums } from "@/data/forums";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const STORAGE_KEY = "rai-instructions";

type Values = {
  name: string;
  email: string;
  phone: string;
  city: string;
  forum: string;
  desk: string;
  matter: string;
  accord: boolean;
};

const empty: Values = {
  name: "",
  email: "",
  phone: "",
  city: "",
  forum: "",
  desk: "",
  matter: "",
  accord: false,
};

export function InquiryForm() {
  const [values, setValues] = useState<Values>(empty);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});

  function set<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate(v: Values) {
    const next: Partial<Record<keyof Values, string>> = {};
    if (!v.name.trim()) next.name = "Please give your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) next.email = "A working email is required.";
    if (v.phone && v.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a complete number, or leave blank.";
    if (!v.matter.trim() || v.matter.trim().length < 30)
      next.matter =
        "A short note of the forum, the next date and the papers will do — at least a paragraph.";
    if (!v.accord) next.accord = "Please confirm you are writing of your own accord.";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length) {
      toast.error("The note is incomplete. Please look at the marked fields.");
      return;
    }
    const payload = { ...values, at: new Date().toISOString() };
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([payload, ...prev].slice(0, 20)));
    } catch {
      /* preview storage is best-effort */
    }
    setSent(true);
    toast.success("Your note has been received.");
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-line bg-paper px-6 py-10">
        <p className="text-xs font-medium uppercase tracking-mark text-gold">Received</p>
        <h2 className="mt-3 font-display text-3xl text-navy">The note is with chambers.</h2>
        <p className="mt-4 max-w-lg text-stone">
          We will write to {values.email} on whether the matter can be taken, and on what terms. A
          lawyer-client relationship begins only on a written engagement — not on this form.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => {
            setValues(empty);
            setSent(false);
          }}
        >
          Send another note
        </Button>
      </div>
    );
  }

  const field = "space-y-2";
  const selectClass =
    "flex h-11 w-full rounded-md border border-line bg-paper px-3.5 text-sm text-ink focus-visible:border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40";

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-line bg-paper p-5 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div className={field}>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
          />
          {errors.name ? <p className="text-xs text-navy">{errors.name}</p> : null}
        </div>
        <div className={field}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors.email ? <p className="text-xs text-navy">{errors.email}</p> : null}
        </div>
        <div className={field}>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          {errors.phone ? <p className="text-xs text-navy">{errors.phone}</p> : null}
        </div>
        <div className={field}>
          <Label htmlFor="city">City</Label>
          <Input id="city" value={values.city} onChange={(e) => set("city", e.target.value)} />
        </div>
        <div className={field}>
          <Label htmlFor="forum">Forum</Label>
          <select
            id="forum"
            className={selectClass}
            value={values.forum}
            onChange={(e) => set("forum", e.target.value)}
          >
            <option value="">Select if known</option>
            {forums.map((f) => (
              <option key={f.name} value={f.name}>
                {f.name}
              </option>
            ))}
            <option value="Other">Other / not yet filed</option>
          </select>
        </div>
        <div className={field}>
          <Label htmlFor="desk">Desk</Label>
          <select
            id="desk"
            className={selectClass}
            value={values.desk}
            onChange={(e) => set("desk", e.target.value)}
          >
            <option value="">Select if known</option>
            {desks.map((d) => (
              <option key={d.slug} value={d.title}>
                {d.title}
              </option>
            ))}
          </select>
        </div>
        <div className={`${field} md:col-span-2`}>
          <Label htmlFor="matter">Note of the matter</Label>
          <Textarea
            id="matter"
            rows={7}
            placeholder="Forum, next date if any, and a short account of the papers that already exist."
            value={values.matter}
            onChange={(e) => set("matter", e.target.value)}
          />
          {errors.matter ? <p className="text-xs text-navy">{errors.matter}</p> : null}
        </div>
        <div className="md:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-stone">
            <input
              type="checkbox"
              className="mt-1 size-4 rounded-xs border-line accent-navy"
              checked={values.accord}
              onChange={(e) => set("accord", e.target.checked)}
            />
            <span>
              I am seeking this information of my own accord. I understand that this note does not
              create a lawyer-client relationship and is not a substitute for a brief.
            </span>
          </label>
          {errors.accord ? <p className="mt-2 text-xs text-navy">{errors.accord}</p> : null}
        </div>
      </div>
      <div className="mt-7">
        <Button type="submit" size="lg">
          Send to chambers
        </Button>
      </div>
    </form>
  );
}
