import {
  Banknote,
  Briefcase,
  Building2,
  FileText,
  Handshake,
  House,
  Landmark,
  Scale,
  ScrollText,
  Search,
  Shield,
  Umbrella,
  type LucideIcon,
} from "lucide-react";
import type { Desk } from "@/data/desks";
import { cn } from "@/lib/utils";

const icons: Record<Desk["icon"], LucideIcon> = {
  banknote: Banknote,
  building: Building2,
  landmark: Landmark,
  scale: Scale,
  handshake: Handshake,
  file: FileText,
  briefcase: Briefcase,
  house: House,
  umbrella: Umbrella,
  shield: Shield,
  search: Search,
  scroll: ScrollText,
};

export function DeskIcon({
  name,
  className,
}: {
  name: Desk["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={cn("size-5", className)} strokeWidth={1.6} />;
}
