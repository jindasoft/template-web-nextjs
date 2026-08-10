import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

type Props = Readonly<{
  params: Promise<{ locale: Locale }>;
}>;

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about_page" });

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}