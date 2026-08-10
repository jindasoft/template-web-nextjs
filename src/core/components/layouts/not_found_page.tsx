import { useTranslations } from "next-intl";
import PageLayout from "./layout_page";
import NavigationLink from "./navigation_link";

export default function NotFoundPage() {
  const t = useTranslations("not_found_page");

  return (
    <PageLayout>
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p>{t("description")}</p>
        <div className="mt-12">
          <NavigationLink
            href="/"
            className="border rounded px-4 py-2  hover:bg-slate-800 transition"
          >
            {t("link_to_home")}
          </NavigationLink>
        </div>
      </section>
    </PageLayout>
  );
}