
import { TopicGeneratorForm } from './components/topic-generator-form';
import type { Metadata } from 'next';
import { Rss } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';

export const metadata: Metadata = {
  title: 'AI Blog Topic Generator | RSI Chicory',
  description: 'Generate B2B blog topic ideas for the food and beverage industry using our AI-powered tool.',
};

export default async function AiTopicGeneratorPage({ params: { lang } }: { params: { lang: Language['code'] } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.AiTopicGeneratorPage;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <Rss className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{t.title}</h1>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
            {t.subtitle}
            </p>
        </div>
      <div className="mt-12">
        <TopicGeneratorForm dictionary={dictionary} />
      </div>
    </div>
  );
}
