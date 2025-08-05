
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <Image
          src={product.image}
          alt={product.name}
          data-ai-hint={product.aiHint}
          width={400}
          height={300}
          className="h-56 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6">
        <CardTitle className="mb-2 text-xl">{product.name}</CardTitle>
        <CardDescription className="flex-grow">{product.description}</CardDescription>
        <Button asChild variant="link" className="mt-4 self-start p-0 text-accent">
          <Link href={`/products/${product.slug}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
