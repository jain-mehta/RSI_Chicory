import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.slug}`} className="block h-[450px]"> {/* Fixed height container */}
      <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full">
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
          <CardTitle className="mb-2 text-xl line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="flex-grow line-clamp-3">{product.description}</CardDescription>
          <div className="mt-4 flex items-center text-accent">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
