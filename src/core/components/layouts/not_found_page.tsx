import { useTranslations } from "next-intl";
import PageLayout from "./layout_page";
import NavigationLink from "./navigation_link";

export default function NotFoundPage() {
  const t = useTranslations("not_found_page");

  return (
    <PageLayout>
      <section className="mx-auto flex min-h-[60vh] max-w-4xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl border border-slate-200/80 bg-(--background-primary) p-8 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-slate-700/70 dark:shadow-none sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a0523e] dark:text-[#d99b82]">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            {t("description")}
          </p>
          <div className="mt-8">
            <NavigationLink
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-(--background-primary) px-5 py-3 text-sm font-medium text-slate-900 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-800 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-700"
            >
              {t("link_to_home")}
            </NavigationLink>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
