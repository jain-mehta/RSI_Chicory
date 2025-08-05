
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/products';
import { ArrowRight, Leaf, Package, Globe, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';

export default async function Home({ params: { lang } }: { params: { lang: Language['code'] } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.HomePage;
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-primary/20">
        <Image
          src="https://images.unsplash.com/photo-1589732380879-bf11597ac7de?q=80&w=1920"
          alt="Chicory farm landscape with a beautiful sunrise"
          data-ai-hint="chicory farm"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            {t.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={`/${lang}/products`}>{t.viewProducts}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={`/${lang}/contact?inquiry=sample`}>{t.requestSample}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center font-headline text-3xl font-bold">{t.productsTitle}</h2>
          <p className="mb-10 max-w-3xl mx-auto text-center text-muted-foreground">
            {t.productsSubtitle}
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.slug} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="p-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    data-ai-hint={product.aiHint}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-xl">{product.name}</CardTitle>
                  <CardDescription className="mb-4 h-20 overflow-hidden">{product.description}</CardDescription>
                  <Button asChild variant="link" className="p-0 text-accent">
                    <Link href={`/${lang}/products/${product.slug}`}>
                      {t.viewDetails} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href={`/${lang}/products`}>{t.exploreAllProducts}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-headline text-3xl font-bold">{t.qualityTitle}</h2>
              <p className="mb-6 text-muted-foreground">
                {t.qualityDescription}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">{t.localSourcing}</h4>
                    <p className="text-muted-foreground">{t.localSourcingDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">{t.strictStandards}</h4>
                    <p className="text-muted-foreground">{t.strictStandardsDesc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">{t.exportReady}</h4>
                    <p className="text-muted-foreground">{t.exportReadyDesc}</p>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-8" size="lg">
                <Link href={`/${lang}/about`}>{t.learnMore}</Link>
              </Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1579693910433-e4c76a59e9aa?q=80&w=600"
                alt="Industrial processing of chicory"
                data-ai-hint="food processing"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* B2B Partner Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-headline text-3xl font-bold">{t.partnerTitle}</h2>
          <p className="mx-auto mb-10 max-w-3xl text-muted-foreground">
            {t.partnerSubtitle}
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.contractFarming}</h3>
              <p className="text-muted-foreground">{t.contractFarmingDesc}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Package className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.bulkOrders}</h3>
              <p className="text-muted-foreground">{t.bulkOrdersDesc}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t.globalExports}</h3>
              <p className="text-muted-foreground">{t.globalExportsDesc}</p>
            </div>
          </div>
          <div className="mt-12">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={`/${lang}/contact?inquiry=bulk`}>{t.enquireBulk}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
