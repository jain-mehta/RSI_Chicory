
import { getProductBySlug, products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { ContactForm } from '@/components/shared/contact-form';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import type { Language } from '@/lib/languages';
import { i18n } from '@/i18n.config';

type Props = {
  params: { slug: string; lang: Language['code'] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | RSI Chicory`,
    description: product.description,
  };
}

export async function generateStaticParams() {
    const locales = i18n.locales;
    const productSlugs = products.map((product) => product.slug);
  
    return locales.flatMap((lang) =>
      productSlugs.map((slug) => ({
        lang,
        slug,
      }))
    );
}

export default async function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  const dictionary = await getDictionary(params.lang);
  const t = dictionary.ProductDetailsPage;

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Product Images and Details */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="font-headline text-4xl font-bold">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
          </div>
          <Card className="overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              data-ai-hint={product.aiHint}
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </Card>
          <div className="mt-8 space-y-8">
            <Card>
              <CardHeader><CardTitle>{t.applications}</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <Badge key={app} variant="secondary">{app}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>{t.processing}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.processing}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Specs and Inquiry Form */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 space-y-8">
            <Card>
              <CardHeader><CardTitle>{t.specifications}</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow><TableCell className="font-semibold">{t.origin}</TableCell><TableCell>{product.origin}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">{t.color}</TableCell><TableCell>{product.specs.color}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">{t.form}</TableCell><TableCell>{product.specs.form}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">{t.shelfLife}</TableCell><TableCell>{product.specs.shelfLife}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">{t.packaging}</TableCell><TableCell>{product.packaging}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">{t.price}</TableCell><TableCell className="font-bold text-primary">{product.price}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">{t.moq}</TableCell><TableCell className="font-bold">{product.moq}</TableCell></TableRow>
                  </TableBody>
                </Table>
                <Button asChild size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={`/${params.lang}/contact?inquiry=sample&product=${product.slug}`}>{t.requestSample}</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t.enquireNow}</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm
                  sourcePage={`Product Page: ${product.name}`}
                  defaultMessage={`I am interested in ${product.name}. Please provide a quote for an estimated quantity of...`}
                  dictionary={dictionary}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
