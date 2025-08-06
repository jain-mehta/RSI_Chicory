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
  options?: { title: string; values: string[] };
};

export const products: Product[] = [
  {
    name: "Raw Chicory Roots",
    slug: "raw-chicory-roots",
    image: "https://images.unsplash.com/photo-1598950433232-7236c5395103?q=80&w=600",
    aiHint: "vegetable roots",
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
    image: "https://images.unsplash.com/photo-1606856843374-4dd99b3fa24a?q=80&w=600",
    aiHint: "chopped vegetables",
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
    name: "Roasted Chicory Cubes",
    slug: "roasted-chicory-cubes",
    image: "https://images.unsplash.com/photo-1605941833825-78363787324c?q=80&w=600",
    aiHint: "roasted coffee beans",
    description: "Uniformly roasted chicory cubes available in both light and dark roasts. Our state-of-the-art roasting process ensures a consistent, high-quality product for superior coffee blends and food applications.",
    origin: "India",
    processing: "Dried chicory cubes are roasted in-house using advanced technology. We offer distinct roast profiles to meet diverse flavor requirements, from milder, caramel notes (light roast) to a robust, coffee-like flavor (dark roast).",
    applications: ["Coffee blending", "Instant coffee manufacturing", "Food flavoring", "Health beverages"],
    specs: {
      color: "Golden brown to dark brown",
      form: "Cubes (approx. 8-12mm)",
      shelfLife: "24 months",
    },
    packaging: "Lined PP bags to preserve freshness, 35kg standard.",
    moq: "500 kg",
    price: "From ₹70-75 / kg",
    options: {
      title: "Available Roast Levels",
      values: ["Light Roast", "Dark Roast"],
    }
  },
  {
    name: "Dried Chicory Cubes",
    slug: "dried-chicory-cubes",
    image: "https://images.unsplash.com/photo-1525203139896-77880291bb6f?q=80&w=600",
    aiHint: "dried herbs",
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
    image: "https://images.unsplash.com/photo-1600727036683-e006e534444b?q=80&w=600",
    aiHint: "dark syrup",
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
    image: "https://images.unsplash.com/photo-1495474472287-4d713b22e8b4?q=80&w=600",
    aiHint: "instant coffee",
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
    image: "https://images.unsplash.com/photo-1572432185265-32a843997298?q=80&w=600",
    aiHint: "brown powder spices",
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
