"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SaleLink } from "@/components/SaleLink";

type NavItem = { label: string; href: string };

/**
 * Primary navigation: inline links on desktop, a disclosure menu on mobile.
 * The only client component in the shell; it adds active-page state and the
 * mobile toggle (button + aria-expanded, Escape to close, closes on navigation).
 */
export function HeaderNav({ items, ctaLabel }: { items: NavItem[]; ctaLabel: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedOn, setOpenedOn] = useState(pathname);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close when the route changes (state adjusted during render, no effect needed).
  if (open && openedOn !== pathname) setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href;

  return (
    <>
      <nav className="nav-desktop" aria-label="Primary">
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <SaleLink className="btn btn--outline btn--sm nav-desktop-cta">{ctaLabel}</SaleLink>

      <button
        ref={buttonRef}
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          setOpenedOn(pathname);
          setOpen((v) => !v);
        }}
      >
        <span className="nav-toggle__bars" aria-hidden="true" />
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      <nav id={menuId} className="nav-mobile" aria-label="Primary mobile" hidden={!open}>
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <SaleLink className="btn btn--primary">{ctaLabel}</SaleLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
