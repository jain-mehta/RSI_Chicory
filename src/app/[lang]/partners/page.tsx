
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';

export const metadata: Metadata = {
  title: 'Our Partners | RSI Chicory',
  description: 'A showcase of our trusted B2B partners and client testimonials in the food and beverage industry.',
};

const testimonials = [
  {
    name: 'John D., Procurement Manager',
    company: 'Global Coffee Co.',
    avatar: 'JD',
    rating: 5,
    quote: 'RSI Chicory has been a game-changer for our supply chain. Their roasted chicory cubes are of exceptional quality and consistency, which has significantly improved our final product. Their professionalism and on-time delivery are unmatched.',
  },
  {
    name: 'Maria S., R&D Lead',
    company: 'Artisan Beverage Creators',
    avatar: 'MS',
    rating: 5,
    quote: "We switched to RSI for their liquid chicory extract, and the results were immediate. The flavor profile is rich and clean, allowing us to create innovative new beverages. The team's technical support during integration was invaluable.",
  },
  {
    name: 'Chen W., Head of Sourcing',
    company: 'East Asia Food Traders',
    avatar: 'CW',
    rating: 4,
    quote: "As a major importer, we rely on partners who understand export documentation and logistics. RSI Chicory's team is incredibly efficient and knowledgeable, making every shipment smooth and hassle-free. A reliable and trustworthy supplier.",
  },
];

const partners = [
    { name: 'Global Coffee Co.', logo: 'https://images.unsplash.com/photo-1621235654522-c2e3a1f87309?q=80&w=160', aiHint: 'company logo' },
    { name: 'Artisan Beverage Creators', logo: 'https://images.unsplash.com/photo-1559897335-a3a6d4a2a1b9?q=80&w=160', aiHint: 'company logo' },
    { name: 'East Asia Food Traders', logo: 'https://images.unsplash.com/photo-1588600494458-76a7e9282b5e?q=80&w=160', aiHint: 'company logo' },
    { name: 'Euro Ingredients Inc.', logo: 'https://images.unsplash.com/photo-1628198595449-55e9cde69389?q=80&w=160', aiHint: 'company logo' },
    { name: 'American Blends Corp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=160', aiHint: 'company logo' },
    { name: 'Premium Foods Ltd.', logo: 'https://images.unsplash.com/photo-1615996025078-7b4c6e866819?q=80&w=160', aiHint: 'company logo' },
]

export default async function PartnersPage({ params: { lang } }: { params: { lang: Language['code'] } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.PartnersPage;

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{t.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </div>
      
      {/* Testimonials Section */}
      <section className="mt-16">
        <h2 className="text-center font-headline text-3xl font-bold">{t.testimonialsTitle}</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted-foreground/50'}`} />
                    ))}
                  </div>
                  <p className="mt-4 text-muted-foreground">"{testimonial.quote}"</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold">{t.partnersTitle}</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            {t.partnersSubtitle}
        </p>
        <div className="mt-10">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {partners.map((partner) => (
                    <Image
                        key={partner.name}
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        data-ai-hint={partner.aiHint}
                        width={160}
                        height={80}
                        className="object-contain grayscale transition-all hover:grayscale-0"
                    />
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
