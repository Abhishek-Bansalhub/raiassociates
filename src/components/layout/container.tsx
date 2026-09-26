import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>{children}</div>;
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-xs font-medium uppercase tracking-mark text-gold", className)}>
      {children}
    </p>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <span className={cn("block h-px w-12 bg-gold", className)} aria-hidden="true" />;
}
