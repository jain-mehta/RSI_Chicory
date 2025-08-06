
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

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-ancient-roots-of-chicory-a-journey-through-time',
    title: 'The Ancient Roots of Chicory: A Journey Through Time',
    description: 'Explore the rich history of chicory, from its use in ancient Egypt to its role as a coffee substitute in 19th-century France.',
    date: 'July 25, 2025',
    category: 'History',
    image: 'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=600',
    aiHint: 'ancient scroll map',
    content: `The story of chicory is a fascinating thread woven through human history. Its use dates back thousands of years to ancient Egypt, where it was cultivated for its medicinal properties. The Romans used it as a vegetable and in salads. However, its most famous role began in 19th-century France during a coffee shortage caused by Napoleon\'s Continental Blockade. The French began roasting and grinding chicory root to use as a coffee extender or substitute, a practice that quickly spread across Europe and to Louisiana in the United States. This resilience and adaptability have cemented chicory\'s place in global culinary traditions.`
  },
  {
    slug: 'beyond-the-blend-top-5-industrial-applications-of-chicory',
    title: 'Beyond the Blend: Top 5 Industrial Applications of Chicory',
    description: 'Discover the versatile uses of chicory in the food and beverage industry, from flavor enhancement to functional fiber.',
    date: 'July 22, 2025',
    category: 'Applications',
    image: 'https://images.unsplash.com/photo-1579684385127-6f7f6f9b8a53?q=80&w=600',
    aiHint: 'food laboratory',
    content: `While well-known as a coffee additive, chicory\'s applications extend far beyond the morning cup. Here are five key industrial uses: 1. **Flavor Enhancer:** Roasted chicory provides deep, rich, and slightly sweet notes to products like baked goods, sauces, and dark beers. 2. **Natural Coloring:** It can be used as a natural brown food coloring. 3. **Functional Fiber:** Chicory root is a primary source of inulin, a prebiotic fiber that promotes gut health and is widely used in yogurts, health bars, and dietary supplements. 4. **Cost-Effective Filler:** It can be used as a filler in various food products, reducing the cost of more expensive ingredients. 5. **Solubility Improvement:** In instant beverage mixes, chicory can improve solubility and mouthfeel.`
  },
  {
    slug: 'chicory-and-coffee-the-perfect-partnership',
    title: 'Chicory and Coffee: The Perfect Partnership for B2B',
    description: 'A deep dive into why chicory is the ideal partner for coffee, enhancing flavor, reducing costs, and improving solubility.',
    date: 'July 18, 2025',
    category: 'Processing',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600',
    aiHint: 'coffee chicory beans',
    content: `For B2B coffee producers, chicory is a strategic ingredient. Blending roasted chicory with coffee offers several advantages. Firstly, it enhances the flavor profile, adding body and a subtle sweetness that mellows the acidity of some coffees. Secondly, it is a cost-effective way to extend coffee grounds, providing significant savings in raw material costs without compromising on taste. Thirdly, it improves the solubility of instant coffee products, creating a smoother, more satisfying beverage for the end consumer. Our roasted chicory cubes and powders are specifically processed to ensure perfect integration with coffee blends.`
  },
  {
    slug: 'from-farm-to-factory-the-chicory-production-cycle',
    title: 'From Farm to Factory: The Chicory Production Cycle',
    description: 'An inside look at the journey of chicory, from contract farming and harvesting to drying, roasting, and exporting.',
    date: 'July 15, 2025',
    category: 'Sourcing',
    image: 'https://images.unsplash.com/photo-1617633285116-42f216f21c21?q=80&w=600',
    aiHint: 'farm field',
    content: `Our commitment to quality begins in the field. We operate on a contract farming model, partnering with local farmers to whom we provide high-quality seeds. After the harvest, the roots are transported to our facility where they are washed, cubed, and then either sun-dried or machine-dried. The dried cubes are then expertly roasted in our advanced roasting machines to develop their characteristic flavor. Finally, the chicory is processed into its final form—be it cubes, powder, or liquid extract—packaged, and prepared for export to our global partners. This complete oversight ensures full traceability and consistent quality.`
  },
  {
    slug: 'the-health-benefits-of-inulin-chicorys-super-fiber',
    title: "The Health Benefits of Inulin: Chicory's Super Fiber",
    description: 'Learn about inulin, the prebiotic fiber found in chicory, and its growing importance in the health and wellness market.',
    date: 'July 10, 2025',
    category: 'Health & Nutrition',
    image: 'https://images.unsplash.com/photo-1517855073937-218a47a17c12?q=80&w=600',
    aiHint: 'healthy food ingredients',
    content: `Chicory root is one of the best natural sources of inulin, a type of soluble fiber with powerful prebiotic properties. Prebiotics act as food for the beneficial bacteria in your gut, such as Bifidobacteria and Lactobacilli. A healthy gut microbiome is linked to numerous benefits, including improved digestion, enhanced absorption of nutrients like calcium, and a stronger immune system. As consumers become more health-conscious, the demand for products fortified with inulin is skyrocketing. Chicory offers a natural, plant-based way for food manufacturers to tap into this growing market.`
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find((p) => p.slug === slug);
};
