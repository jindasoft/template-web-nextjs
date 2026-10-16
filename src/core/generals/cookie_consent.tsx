"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "cookie-consent";
export const OPEN_COOKIE_CONSENT_EVENT = "open-cookie-consent";

type ConsentValue = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(value: ConsentValue) {
  window.gtag?.("consent", "update", { analytics_storage: value });
}

export default function CookieConsent() {
  const t = useTranslations("cookie_consent");
  const [visible, setVisible] = useState(false);
  const [currentConsent, setCurrentConsent] = useState<ConsentValue | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "granted" || stored === "denied") {
      setCurrentConsent(stored);
      updateConsent(stored);
    } else {
      setVisible(true);
    }

    const handleReopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_CONSENT_EVENT, handleReopen);
    return () => window.removeEventListener(OPEN_COOKIE_CONSENT_EVENT, handleReopen);
  }, []);

  function handleChoice(value: ConsentValue) {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
    updateConsent(value);
    setCurrentConsent(value);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 rounded-xl border border-slate-700 bg-slate-900 p-4 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-5 dark:border-slate-600 dark:bg-slate-950">
        <div>
          <p className="text-sm text-slate-100">{t("message")}</p>
          {currentConsent && (
            <p className="text-xs text-slate-400">
              {t("current_status", { status: t(currentConsent) })}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleChoice("denied")}
            className="rounded border border-slate-600 px-4 py-2 text-sm text-slate-100 transition-colors hover:bg-slate-800"
          >
            {currentConsent === "granted" ? t("revoke") : t("decline")}
          </button>
          <button
            type="button"
            onClick={() => handleChoice("granted")}
            className="rounded bg-white px-4 py-2 text-sm text-slate-900 transition-colors hover:bg-slate-200"
          >
            {currentConsent === "granted" ? t("ok") : t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
