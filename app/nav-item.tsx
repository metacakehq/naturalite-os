"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({ href, label, soon }: { href: string; label: string; soon?: boolean }) {
  const p = usePathname();
  const active = href === "/" ? p === "/" : p.startsWith(href);
  return (
    <Link className={"item" + (active ? " active" : "")} href={href}>
      {label}{soon ? <span className="soon">soon</span> : null}
    </Link>
  );
}
