// This file acts as a mock database for product information.

export type Product = {
  name: string;
  slug: string;
  image: string;
  aiHint: string;
  description: string;
  origin: string;
  processing: string;
  applications: string[];
  specs: {
    color: string;
    form: string;
    shelfLife: string;
  };
  packaging: string;
  moq: string; // Minimum Order Quantity
  price: string; // Price per unit
};

export const products: Product[] = [
  {
    name: "Raw Chicory Roots",
    slug: "raw-chicory-roots",
    image: "https://images.unsplash.com/photo-1621037580931-e8535a391515?q=80&w=600",
    aiHint: "chicory roots",
    description: "High-quality raw chicory roots sourced directly from our network of contract farms. Cleaned and graded for further processing, providing a pure starting material for various chicory products.",
    origin: "India, from select French seed lineage.",
    processing: "Cultivated under contract farming agreements, harvested at peak maturity, and carefully cleaned and graded at our facility.",
    applications: ["Base material for all chicory products", "Herbal infusions"],
    specs: {
      color: "Light brown / Beige",
      form: "Whole roots",
      shelfLife: "6 months when stored properly",
    },
    packaging: "Packed in breathable PP bags, typically 35kg.",
    moq: "1 Metric Ton",
    price: "₹15,000 / Metric Ton",
  },
  {
    name: "Hand Cut Chicory Roots",
    slug: "hand-cut-chicory-roots",
    image: "https://images.unsplash.com/photo-1558694434-d023a5a7ED4a?q=80&w=600",
    aiHint: "cut vegetable roots",
    description: "Carefully selected and hand-cut chicory roots, ensuring uniform size for consistent drying and roasting. Ideal for artisanal and specialized applications requiring precise control over the production process.",
    origin: "India",
    processing: "Raw roots are sorted and cut by hand to specific dimensions, followed by a preliminary sun-drying process to reduce moisture.",
    applications: ["Premium coffee blends", "Specialty food ingredients"],
    specs: {
      color: "Beige to light brown",
      form: "Hand-cut pieces",
      shelfLife: "12 months",
    },
    packaging: "35kg PP bags or as per customer requirement.",
    moq: "1 Metric Ton",
    price: "₹20,000 / Metric Ton",
  },
  {
    name: "Roasted Chicory Cubes (Dark Roast)",
    slug: "roasted-chicory-cubes-dark-roast",
    image: "https://images.unsplash.com/photo-1551030173-1d5bdda332c9?q=80&w=600",
    aiHint: "dark roasted coffee",
    description: "Uniformly roasted chicory cubes with a deep, dark color and a robust, coffee-like flavor. Our state-of-the-art roasting process ensures a consistent, high-quality product for superior coffee blends.",
    origin: "India",
    processing: "Dried chicory cubes are roasted in-house using advanced roasting technology to achieve a specific dark roast profile.",
    applications: ["Coffee blending (imparts dark color and strong flavor)", "Instant coffee manufacturing"],
    specs: {
      color: "Dark brown to black",
      form: "Cubes (approx. 8-12mm)",
      shelfLife: "24 months",
    },
    packaging: "Lined PP bags to preserve freshness, 35kg standard.",
    moq: "500 kg",
    price: "₹75 / kg",
  },
  {
    name: "Roasted Chicory Cubes (Light Roast)",
    slug: "roasted-chicory-cubes-light-roast",
    image: "https://images.unsplash.com/photo-1620379237668-3168853a03c0?q=80&w=600",
    aiHint: "light roasted coffee",
    description: "Lightly roasted chicory cubes that offer a milder, more subtle flavor with caramel notes. Perfect for applications where a less intense chicory flavor is desired, complementing the primary ingredients.",
    origin: "India",
    processing: "Dried chicory cubes are carefully roasted to a lighter profile, preserving delicate flavors and achieving a golden-brown color.",
    applications: ["Specialty coffee blends", "Food flavoring", "Health beverages"],
    specs: {
      color: "Golden brown",
      form: "Cubes (approx. 8-12mm)",
      shelfLife: "24 months",
    },
    packaging: "35kg lined PP bags.",
    moq: "500 kg",
    price: "₹70 / kg",
  },
  {
    name: "Dried Chicory Cubes",
    slug: "dried-chicory-cubes",
    image: "https://images.unsplash.com/photo-1506990425218-08a8f15e8e82?q=80&w=600",
    aiHint: "dried vegetable",
    description: "Sun-dried or machine-dried chicory cubes, with low moisture content, ready for roasting or extraction. A stable, storable intermediate product for large-scale industrial use.",
    origin: "India",
    processing: "Fresh chicory roots are washed, cubed, and then dried using natural sun-drying or industrial dryers to achieve optimal moisture levels.",
    applications: ["Raw material for roasting", "Base for chicory extract"],
    specs: {
      color: "Cream to light brown",
      form: "Cubes (approx. 8-16mm)",
      shelfLife: "18 months",
    },
    packaging: "Standard 35kg PP bags.",
    moq: "1 Metric Ton",
    price: "₹25,000 / Metric Ton",
  },
  {
    name: "Liquid Chicory Extract",
    slug: "liquid-chicory-extract",
    image: "https://images.unsplash.com/photo-1594631252845-382734185af3?q=80&w=600",
    aiHint: "dark liquid",
    description: "A concentrated, viscous liquid extract made from roasted chicory. It provides a convenient, easy-to-mix solution for adding chicory flavor and color to a wide range of food and beverage products.",
    origin: "India",
    processing: "Produced through a hot water extraction process from roasted chicory, followed by filtration and concentration to achieve desired solids content.",
    applications: ["Instant beverages", "Syrups and sauces", "Confectionery", "Dairy products"],
    specs: {
      color: "Dark brown",
      form: "Viscous liquid",
      shelfLife: "12 months",
    },
    packaging: "Food-grade HDPE carboys (35kg) or drums (285kg).",
    moq: "100 kg",
    price: "₹120 / kg",
  },
  {
    name: "Roasted Chicory Granules",
    slug: "roasted-chicory-granules",
    image: "https://images.unsplash.com/photo-1563588973-9533a6914c62?q=80&w=600",
    aiHint: "brown granules",
    description: "Soluble chicory granules made from roasted chicory roots. Designed for use in vending machines and instant coffee preparations, offering excellent solubility and consistent flavor.",
    origin: "India",
    processing: "Roasted chicory is ground and processed into uniform granules, optimized for quick dissolution in hot water.",
    applications: ["Vending machines", "3-in-1 coffee mixes", "Instant coffee production"],
    specs: {
      color: "Brown to dark brown",
      form: "Granules",
      shelfLife: "24 months",
    },
    packaging: "25kg multi-wall paper bags with inner liner.",
    moq: "250 kg",
    price: "₹85 / kg",
  },
  {
    name: "Roasted Chicory Powder",
    slug: "roasted-chicory-powder",
    image: "https://images.unsplash.com/photo-1511082525149-d34fec538c82?q=80&w=600",
    aiHint: "brown powder",
    description: "A fine powder produced by grinding roasted chicory cubes. Its fine texture allows for seamless blending in coffee filter powders and various food applications, delivering consistent flavor and color.",
    origin: "India",
    processing: "Roasted chicory cubes are milled to a fine, uniform powder using industrial grinders.",
    applications: ["Filter coffee powder blending", "Bakery products", "Spice mixes", "Herbal remedies"],
    specs: {
      color: "Brown to dark brown",
      form: "Fine powder",
      shelfLife: "18 months",
    },
    packaging: "25kg multi-wall paper bags.",
    moq: "250 kg",
    price: "₹80 / kg",
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
