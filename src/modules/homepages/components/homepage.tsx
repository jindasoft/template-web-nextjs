import { getTranslations } from "next-intl/server";


type Props = Readonly<{
  locale: string;
}>;

export default async function Explore({ locale }: Props) {
  const tHomepage = await getTranslations({ locale, namespace: "home_page" });

  return (
    <main className="min-h-full bg-(--background-secondary)">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {tHomepage('title')}
      </section>
    </main>
  );
}
