import { getTranslations } from "next-intl/server";
import type { Locale } from "next-intl";

type Props = Readonly<{
  locale: Locale;
}>;

export default async function AboutPage({ locale }: Props) {
  const tAbout = await getTranslations({ locale, namespace: "about_page" });

  return (
    <main className="w-full overflow-x-clip">
      {tAbout("title")}
    </main>
  );
}
