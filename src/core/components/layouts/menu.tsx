"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Container from "./container";
import NavigationLink from "./navigation_link";

const MENU_ITEMS = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
] as const;

export default function Menu() {
  const t = useTranslations("navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block">
        {MENU_ITEMS.map((item) => (
          <NavigationLink key={item.href} href={item.href}>
            {t(item.labelKey)}
          </NavigationLink>
        ))}
      </div>
      <button
        type="button"
        className="order-3 inline-flex size-9 items-center justify-center rounded md:order-0 md:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="flex flex-col gap-1" aria-hidden="true">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </span>
      </button>
      <div
        id="mobile-navigation"
        className={
          isMenuOpen
            ? "absolute left-0 right-0 top-full border-t border-black/10 bg-(--background-primary) dark:border-white/10 md:hidden"
            : "hidden"
        }
      >
        <Container className="flex flex-col py-2">
          {MENU_ITEMS.map((item) => (
            <NavigationLink key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {t(item.labelKey)}
            </NavigationLink>
          ))}
        </Container>
      </div>
    </>
  );
}
