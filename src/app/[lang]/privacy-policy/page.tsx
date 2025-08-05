
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';

export const metadata: Metadata = {
  title: 'Privacy Policy | RSI Chicory',
  description: 'Privacy Policy for RSI Chicory.',
};

export default async function PrivacyPolicyPage({ params: { lang } }: { params: { lang: Language['code'] } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.PrivacyPolicyPage;
  
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="prose lg:prose-xl mx-auto">
        <h1 className="font-headline">{t.h1}</h1>
        <p><em>{t.lastUpdated}</em></p>

        <h2>{t.h2_1}</h2>
        <p>
          {t.p1}
        </p>

        <h2>{t.h2_2}</h2>
        <p>
          {t.p2}
        </p>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t.li1 }} />
          <li dangerouslySetInnerHTML={{ __html: t.li2 }} />
        </ul>

        <h2>{t.h2_3}</h2>
        <p>
          {t.p3}
        </p>
        <ul>
            <li>{t.li3}</li>
            <li>{t.li4}</li>
            <li>{t.li5}</li>
            <li>{t.li6}</li>
        </ul>

        <h2>{t.h2_4}</h2>
        <p>
          {t.p4}
        </p>

        <h2>{t.h2_5}</h2>
        <p>
          {t.p5}
        </p>

        <h2>{t.h2_6}</h2>
        <p>
         {t.p6}
        </p>
      </div>
    </div>
  );
}
