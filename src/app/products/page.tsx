
'use client';

import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/product-card';
import { products, Product } from '@/lib/products';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { Metadata } from 'next';

// Note: Metadata export is still supported in Client Components,
// but it needs to be defined and exported from a Server Component.
// In this case, since we are converting the whole page, we can't export it directly.
// For a real app, you might move metadata to layout.tsx or a parent Server Component.
// For this exercise, we will remove it as this is a client component.

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercasedTerm) ||
        product.description.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Our Chicory Products</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            We provide a complete portfolio of chicory products, manufactured to the highest quality standards for our B2B partners in the food, beverage, and coffee industries.
          </p>
        </div>

        <div className="mx-auto mt-8 mb-12 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full bg-secondary py-6 pl-12 pr-4 text-base"
            />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
