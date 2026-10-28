"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { navigationItems } from "@/lib/navigation";
import { closeMobileNavigation, toggleMobileNavigation } from "@/store/slices/ui-slice";

export function SiteHeader() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isMobileMenuOpen = useAppSelector((state) => state.ui.mobileNavigationOpen);

  useEffect(() => {
    dispatch(closeMobileNavigation());
  }, [dispatch, pathname]);

  return (
    <header className="site-header">
      <nav className="navigation container" aria-label="Primary navigation">
        <Link className="wordmark" href="/" aria-label="Rijul Raj home">
          Rijul Raj<span aria-hidden="true">.</span>
        </Link>
        <div className="navigation-actions">
          <ThemeToggle />
          <button
            className="mobile-menu-toggle"
            type="button"
            onClick={() => dispatch(toggleMobileNavigation())}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation-links"
          >
            <span aria-hidden="true">{isMobileMenuOpen ? "Close" : "Menu"}</span>
            <span className="sr-only">{isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}</span>
          </button>
        </div>
        <ul id="primary-navigation-links" className={`navigation-links${isMobileMenuOpen ? " is-open" : ""}`}>
          {navigationItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => dispatch(closeMobileNavigation())}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
