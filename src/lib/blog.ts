
// This file acts as a mock database for blog posts.

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  aiHint: string;
  content: string; // Adding a longer content field
};

export const blogPosts: BlogPost[] = [];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find((p) => p.slug === slug);
};
