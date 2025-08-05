
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/products';
import { ArrowRight } from 'lucide-react';
import type { Language } from '@/lib/languages';

type ProductCardProps = {
  product: Product;
  lang: Language['code'];
  dictionary: any;
};

export const ProductCard = ({ product, lang, dictionary }: ProductCardProps) => {
  const t = dictionary.HomePage;
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
          <Link href={`/${lang}/products/${product.slug}`}>
            {t.viewDetails} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
