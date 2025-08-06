
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
import { CheckCircle } from 'lucide-react';

type Props = {
  params: { slug: string };
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
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

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
             {product.options && (
              <Card>
                <CardHeader><CardTitle>{product.options.title}</CardTitle></CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                    {product.options.values.map((opt) => (
                        <li key={opt} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span className="text-muted-foreground">{opt}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
              </Card>
            )}
            <Card>
              <CardHeader><CardTitle>Applications</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <Badge key={app} variant="secondary">{app}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Processing</CardTitle></CardHeader>
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
              <CardHeader><CardTitle>Product Specifications</CardTitle></CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow><TableCell className="font-semibold">Origin</TableCell><TableCell>{product.origin}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">Color</TableCell><TableCell>{product.specs.color}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">Form</TableCell><TableCell>{product.specs.form}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">Shelf Life</TableCell><TableCell>{product.specs.shelfLife}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">Packaging</TableCell><TableCell>{product.packaging}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">Price</TableCell><TableCell className="font-bold text-primary">{product.price}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">MOQ</TableCell><TableCell className="font-bold">{product.moq}</TableCell></TableRow>
                  </TableBody>
                </Table>
                <Button asChild size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={`/contact?inquiry=sample&product=${product.slug}`}>Request a Sample</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enquire Now</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm
                  sourcePage={`Product Page: ${product.name}`}
                  defaultMessage={`I am interested in ${product.name}. Please provide a quote for an estimated quantity of...`}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
