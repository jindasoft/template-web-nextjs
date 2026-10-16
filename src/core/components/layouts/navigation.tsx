"use client";

import Image from "next/image";
import Container from "./container";
import LocaleSwitcher from "./locale_switcher";
import Menu from "./menu";
import ThemeToggle from "./theme_toggle";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Navigation() {
  const tMeta = useTranslations("meta");

  return (
    <div className="bg-(--background-primary)">
      <nav className="relative text-slate-800 dark:text-white">
        <Container className="flex items-center gap-2 py-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <Image src="/logo/tripgator.png" alt={tMeta("title")} width={32} height={32} priority />
            <span>{tMeta("title")}</span>
          </Link>
          <Menu />
          <div className="order-2 ml-auto flex items-center gap-2 md:order-0">
            <ThemeToggle />
            <LocaleSwitcher />
          </div>
        </Container>
      </nav>
    </div>
  );
}
