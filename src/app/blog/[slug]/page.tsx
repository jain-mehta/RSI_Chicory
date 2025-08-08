
import { getBlogPostBySlug, blogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Calendar, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | RSI Chicory Blog`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <article className="prose lg:prose-xl mx-auto">
            {/* Post Header */}
            <div className="mb-8 border-b pb-4">
                <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
                <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        <Badge variant="secondary">{post.category}</Badge>
                    </div>
                </div>
            </div>

            {/* Post Image */}
            <div className="relative my-8 aspect-video w-full overflow-hidden rounded-lg">
                 <Image
                    src={post.image}
                    alt={post.title}
                    data-ai-hint={post.aiHint}
                    fill
                    className="object-cover"
                />
            </div>
            
            {/* Post Content */}
            <p className="lead text-xl text-muted-foreground">{post.description}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

        </article>
    </div>
  );
}
