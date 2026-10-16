"use client";

import clsx from "clsx";
import { ComponentProps } from "react";
import { Link, usePathname } from "@/i18n/navigation";

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-2 py-3 transition-colors",
        isActive
          ? "text-slate-900 dark:text-white"
          : "text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-gray-200"
      )}
      href={href}
      {...rest}
    />
  );
}
