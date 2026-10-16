"use client";

// import { MoonHalfRight5Outlined, Sun1Outlined } from "@lineiconshq/free-icons";
// import { Lineicons } from "@lineiconshq/react-lineicons";
import { startTransition, useEffect, useState } from "react";

const THEME_STORAGE_KEY = "theme";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    let nextTheme: Theme = "light";
    if (stored === "dark" || stored === "light") {
      nextTheme = stored;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      nextTheme = "dark";
    }
    applyTheme(nextTheme);
    startTransition(() => setTheme(nextTheme));
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex size-9 items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-700"
    >
      {/* <Lineicons
        icon={theme === "dark" ? Sun1Outlined : MoonHalfRight5Outlined}
        size={20}
        aria-hidden="true"
      /> */}
    </button>
  );
}
