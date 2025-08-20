
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { ArrowRight } from 'lucide-react';
// import type { Metadata } from 'next';
// import Image from 'next/image';
// import Link from 'next/link';
// import { blogPosts } from '@/lib/blog';

// export const metadata: Metadata = {
//   title: 'Blog | RSI Chicory',
//   description: 'B2B blog focused on chicory processing, export trends, industry news, and insights for the food and beverage sector.',
// };

// export default function BlogPage() {
//   return (
//     <div className="container mx-auto px-4 py-12 md:py-20">
//       <div className="text-center">
//         <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">Industry Insights</h1>
//         <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
//           B2B articles on chicory processing, export trends, and market news.
//         </p>
//       </div>
      
//       <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {blogPosts.map((post) => (
//           <Card key={post.slug} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
//             <CardHeader className="p-0">
//                 <Image
//                     src={post.image}
//                     alt={post.title}
//                     data-ai-hint={post.aiHint}
//                     width={400}
//                     height={240}
//                     className="h-60 w-full object-cover"
//                 />
//             </CardHeader>
//             <CardContent className="flex flex-1 flex-col p-6">
//                 <p className="mb-2 text-sm text-muted-foreground">{post.category} - {post.date}</p>
//                 <CardTitle className="mb-2 text-xl">{post.title}</CardTitle>
//                 <CardDescription className="flex-grow">{post.description}</CardDescription>
//                 <Button asChild variant="link" className="mt-4 self-start p-0 text-accent">
//                     <Link href={`/blog/${post.slug}`}> 
//                         Read More <ArrowRight className="ml-2 h-4 w-4" />
//                     </Link>
//                 </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
export default function BlogPage() {  
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <p className="mt-4 text-lg text-muted-foreground">
        The blog page is in  progress. Please check back later for updates.
      </p>
    </div>
  );
}
