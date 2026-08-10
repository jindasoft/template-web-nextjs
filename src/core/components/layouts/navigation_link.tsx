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
    <>
      {/* <div>++{pathname}</div>
      <div>{typeof href === "string" ? href : JSON.stringify(href)}</div>
      <div>--{isActive}</div>
      ++++++++++ */}
      <Link
        aria-current={isActive ? "page" : undefined}
        className={clsx(
          "inline-block px-2 py-3 transition-colors",
          isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
        )}
        href={href}
        {...rest}
      />
    </>
  );
}