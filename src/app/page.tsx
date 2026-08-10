import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('home_page');
  return <h1>{t('title')}</h1>;
}