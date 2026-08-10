import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about_page");

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}