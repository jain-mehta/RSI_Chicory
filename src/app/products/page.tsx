
import { ProductCard } from '@/components/product-card';
import { products, Product } from '@/lib/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | RSI Chicory',
  description: 'Explore our complete portfolio of high-quality chicory products, including roasted cubes, granules, liquid extract, and hand-cut roots for the B2B food and beverage industry.',
};

export default function ProductsPage() {
    const allProducts: Product[] = products;

    return (
        <div className="bg-background">
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Our Chicory Products</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                We provide a complete portfolio of chicory products, manufactured to the highest quality standards for our B2B partners in the food, beverage, and coffee industries.
            </p>
            </div>

            <div className="mt-12">
                {allProducts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {allProducts.map((product) => (
                        <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-xl text-muted-foreground">No products found.</p>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
}
