
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | RSI Chicory',
  description: 'B2B blog focused on chicory processing, export trends, industry news, and insights for the food and beverage sector.',
};

// Mock blog posts data
const blogPosts = [
  {
    slug: 'the-ancient-roots-of-chicory-a-journey-through-time',
    title: 'The Ancient Roots of Chicory: A Journey Through Time',
    description: 'Explore the rich history of chicory, from its use in ancient Egypt to its role as a coffee substitute in 19th-century France.',
    date: 'July 25, 2025',
    category: 'History',
    image: 'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=600',
    aiHint: 'ancient scroll map',
  },
  {
    slug: 'beyond-the-blend-top-5-industrial-applications-of-chicory',
    title: 'Beyond the Blend: Top 5 Industrial Applications of Chicory',
    description: 'Discover the versatile uses of chicory in the food and beverage industry, from flavor enhancement to functional fiber.',
    date: 'July 22, 2025',
    category: 'Applications',
    image: 'https://images.unsplash.com/photo-1579684385127-6f7f6f9b8a53?q=80&w=600',
    aiHint: 'food laboratory',
  },
  {
    slug: 'chicory-and-coffee-the-perfect-partnership',
    title: 'Chicory and Coffee: The Perfect Partnership for B2B',
    description: 'A deep dive into why chicory is the ideal partner for coffee, enhancing flavor, reducing costs, and improving solubility.',
    date: 'July 18, 2025',
    category: 'Processing',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600',
    aiHint: 'coffee chicory beans',
  },
  {
    slug: 'from-farm-to-factory-the-chicory-production-cycle',
    title: 'From Farm to Factory: The Chicory Production Cycle',
    description: 'An inside look at the journey of chicory, from contract farming and harvesting to drying, roasting, and exporting.',
    date: 'July 15, 2025',
    category: 'Sourcing',
    image: 'https://images.unsplash.com/photo-1617633285116-42f216f21c21?q=80&w=600',
    aiHint: 'farm field',
  },
  {
    slug: 'the-health-benefits-of-inulin-chicorys-super-fiber',
    title: "The Health Benefits of Inulin: Chicory's Super Fiber",
    description: 'Learn about inulin, the prebiotic fiber found in chicory, and its growing importance in the health and wellness market.',
    date: 'July 10, 2025',
    category: 'Health & Nutrition',
    image: 'https://images.unsplash.com/photo-1517855073937-218a47a17c12?q=80&w=600',
    aiHint: 'healthy food ingredients',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Industry Insights</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          B2B articles on chicory processing, export trends, and market news.
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="p-0">
                <Image
                    src={post.image}
                    alt={post.title}
                    data-ai-hint={post.aiHint}
                    width={400}
                    height={240}
                    className="h-60 w-full object-cover"
                />
            </CardHeader>
            <CardContent className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-sm text-muted-foreground">{post.category} - {post.date}</p>
                <CardTitle className="mb-2 text-xl">{post.title}</CardTitle>
                <CardDescription className="flex-grow">{post.description}</CardDescription>
                <Button asChild variant="link" className="mt-4 self-start p-0 text-accent">
                    {/* In a real app, this would link to /blog/[slug] */}
                    <Link href="#"> 
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
