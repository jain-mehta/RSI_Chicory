import { getProductBySlug, products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { ContactForm } from '@/components/shared/contact-form';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ProductCard } from '@/components/product-card';

type Props = {
  params: { slug: string };
};

// Update the function call to handle async
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await params.slug;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - RSI Chicory`,
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

  const relatedProducts = products
    .filter((p) => p.slug !== product.slug) // Exclude the current product
    .slice(0, 3); // Get first 3 other products

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        
        {/* Left Column - Product Details */}
        <div className="lg:col-span-3">
          <div className="space-y-8">
            <div>
              <h1 className="font-headline text-4xl font-bold">{product.name}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
            </div>
            
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
                    <TableRow><TableCell className="font-semibold">Price</TableCell><TableCell>{product.price}</TableCell></TableRow>
                    <TableRow><TableCell className="font-semibold">MOQ</TableCell><TableCell className="font-bold">{product.moq}</TableCell></TableRow>
                  </TableBody>
                </Table>
                 <Button asChild className="mt-6 w-full" size="lg">
                    <Link href={`/contact?inquiry=bulk_quote_for_${product.slug}`}>Request Bulk Quote</Link>
                </Button>
              </CardContent>
            </Card>

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
              <CardHeader>
                <CardTitle>Enquire Now</CardTitle>
                <CardDescription>Get a quote or request a sample for {product.name}.</CardDescription>
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

        {/* Right Column - Product Image */}
        <div className="lg:col-span-2">
          <div className="sticky top-24">
            <Card className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  data-ai-hint={product.aiHint}
                  width={600}
                  height={600}
                  className="w-full object-cover aspect-square"
                />
            </Card>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-20">
        <Separator className="my-12" />
        <h2 className="text-center font-headline text-3xl font-bold">Related Products</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Explore other chicory solutions we offer.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>

    </div>
  );
}
