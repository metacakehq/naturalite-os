"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./icons";

export function NavItem({ href, label, soon, icon }: { href: string; label: string; soon?: boolean; icon?: string }) {
  const p = usePathname();
  const active = href === "/" ? p === "/" : p.startsWith(href);
  return (
    <Link className={"item" + (active ? " active" : "")} href={href} aria-current={active ? "page" : undefined}>
      {icon ? <Icon name={icon} /> : null}
      {label}{soon ? <span className="soon">soon</span> : null}
    </Link>
  );
}
