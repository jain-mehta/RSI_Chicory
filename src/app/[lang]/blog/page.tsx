
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Rss } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';

export const metadata: Metadata = {
  title: 'Blog | RSI Chicory',
  description: 'B2B blog focused on chicory processing, export trends, industry news, and insights for the food and beverage sector.',
};

// Mock blog posts data
const blogPosts = [
  {
    slug: 'global-chicory-market-trends-2025',
    title: 'Global Chicory Market Trends to Watch in 2025',
    description: 'An analysis of the key drivers, challenges, and opportunities shaping the international B2B chicory market.',
    date: 'July 15, 2025',
    category: 'Industry News',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600',
    aiHint: 'market graph',
  },
  {
    slug: 'optimizing-coffee-blends-with-roasted-chicory',
    title: 'Optimizing Coffee Blends with Roasted Chicory',
    description: 'A technical guide for coffee processors on leveraging roasted chicory to enhance flavor, color, and cost-effectiveness.',
    date: 'July 01, 2025',
    category: 'Processing',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600',
    aiHint: 'coffee beans chicory',
  },
  {
    slug: 'the-rise-of-contract-farming-in-indian-agriculture',
    title: 'The Rise of Contract Farming in Indian Agriculture',
    description: 'How the contract farming model is revolutionizing quality and traceability for agricultural exports like chicory.',
    date: 'June 20, 2025',
    category: 'Sourcing',
    image: 'https://images.unsplash.com/photo-1617633285116-42f216f21c21?q=80&w=600',
    aiHint: 'farmer handshake',
  },
];

export default async function BlogPage({ params: { lang } }: { params: { lang: Language['code'] } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.BlogPage;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </div>

      <Card className="my-12 bg-primary/10">
        <CardContent className="flex flex-col items-center justify-between gap-6 p-8 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-2xl font-bold">{t.aiGeneratorTitle}</h2>
            <p className="mt-2 text-muted-foreground">
              {t.aiGeneratorDesc}
            </p>
          </div>
          <Button asChild className="shrink-0" size="lg">
            <Link href={`/${lang}/blog/ai-topic-generator`}>
              {t.launchGenerator} <Rss className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="p-0">
                <Image
                    src={post.image}
                    alt={post.title}
                    data-ai-hint={post.aiHint}
                    width={400}
                    height={240}
                    className="h-60 w-full object-cover"
                />
            </CardHeader>
            <CardContent className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-sm text-muted-foreground">{post.category} - {post.date}</p>
                <CardTitle className="mb-2 text-xl">{post.title}</CardTitle>
                <CardDescription className="flex-grow">{post.description}</CardDescription>
                <Button asChild variant="link" className="mt-4 self-start p-0 text-accent">
                    {/* In a real app, this would link to /blog/[slug] */}
                    <Link href="#"> 
                        {t.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
