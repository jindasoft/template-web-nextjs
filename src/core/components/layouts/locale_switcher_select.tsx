"use client";

import clsx from "clsx";
import { Locale } from "next-intl";
import { useState, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Lineicons } from '@lineiconshq/react-lineicons';
import { Globe1Outlined, ChevronDownOutlined } from '@lineiconshq/free-icons';

type Props = {
  readonly value: string;
  readonly label: string;
  readonly options: readonly { value: string; label: string }[];
};

export default function LocaleSwitcherSelect({ value, label, options }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const selectedOption = options.find((option) => option.value === value);

  function onSelectChange(nextLocale: string) {
    setIsOpen(false);

    const currentPath =
      pathname && !pathname.includes("[") ? pathname : window.location.pathname;
    const localePattern = new RegExp(`^/(${routing.locales.join("|")})(?=/|$)`);
    const cleanPath = currentPath.replace(localePattern, "") || "/";
    const search = window.location.search || "";

    startTransition(() => {
      router.replace(`${cleanPath}${search}` as never, { locale: nextLocale as Locale });
    });
  }

  return (
    <div
      className={clsx(
        "relative inline-flex size-9 items-center justify-center text-slate-800 dark:text-white md:size-auto md:justify-start",
        isPending && "transition-opacity disabled:opacity-30",
      )}
    >
      <p className="sr-only">{label}</p>
      <button
        type="button"
        className="inline-flex size-9 items-center justify-center gap-1 rounded bg-transparent transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 md:h-auto md:w-auto md:items-baseline md:justify-start md:bg-(--background-primary) md:px-2 md:py-2"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        disabled={isPending}
        onClick={() => setIsOpen((open) => !open)}
      >
        <Lineicons icon={Globe1Outlined} size={20} className="md:hidden" aria-hidden="true" />
        <span className="hidden md:inline">{selectedOption?.label}</span>
        <Lineicons
          icon={ChevronDownOutlined}
          size={12}
          className="hidden md:inline-flex md:translate-y-0.5"
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 top-full z-50 mt-2 min-w-32 rounded border border-black/10 bg-(--background-primary) p-1 text-(--foreground) shadow-lg dark:border-white/10"
          role="menu"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={clsx(
                "block w-full rounded px-3 py-2 text-left text-sm hover:bg-(--background-secondary)",
                option.value === value && "font-semibold",
              )}
              role="menuitem"
              onClick={() => onSelectChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
