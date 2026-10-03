"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  return <header className="site-header"><nav className="navigation container" aria-label="Primary navigation"><Link className="wordmark" href="/" aria-label="Rijul Raj home">Rijul Raj<span aria-hidden="true">.</span></Link><ul className="navigation-links">{navigationItems.map(({ href, label }) => <li key={href}><Link href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link></li>)}</ul></nav></header>;
}
