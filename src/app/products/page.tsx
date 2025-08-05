import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | RSI Chicory',
  description: 'Explore our full range of B2B chicory products, including raw roots, roasted cubes, liquid extract, granules, and powder. Sourced and processed for industrial use.',
};

export default function ProductsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Our Chicory Products</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We provide a complete portfolio of chicory products, manufactured to the highest quality standards for our B2B partners in the food, beverage, and coffee industries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
