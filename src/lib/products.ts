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
    name: "Hand Cut Chicory Roots",
    slug: "hand-cut-chicory-roots",
    image: "https://images.unsplash.com/photo-1606856843374-4dd99b3fa24a?q=80&w=600",
    aiHint: "chopped vegetables",
    description: "Carefully selected and hand-cut chicory roots, ensuring uniform size for consistent drying and roasting. Produced via contract farming with French-origin chicory seeds, our supply chain is batch-tested and fully traceable. This product is ready for export, and we are seeking distributors, importers, and partners in the global coffee and food ingredient sectors.",
    origin: "India",
    processing: "Hand-cut and sun-dried at farm level, then cleaned and packed at our Etah facility following hygienic protocols.",
    applications: [
      "Premium coffee blends",
      "Functional food/ingredient processing (e.g., inulin extraction)",
      "Herbal infusions",
      "Artisanal beverage manufacture"
    ],
    specs: {
      color: "Beige to light brown",
      form: "Hand-cut pieces",
      shelfLife: "12 months",
    },
    packaging: "Standard: 35kg PP bags. Bulk and custom packaging available on request to meet customer requirements.",
    moq: "20 tons (negotiable for larger contracts)",
    price: "Contact us for custom pricing",
  },
  {
    name: "Roasted Chicory Cubes (NRC)",
    slug: "roasted-chicory-cubes-nrc",
    image: "https://images.unsplash.com/photo-1605941833825-78363787324c?q=80&w=600&light",
    aiHint: "roasted coffee beans",
    description: "Normal Roast Chicory (NRC) cubes, uniformly roasted to produce a mild, balanced flavor with pleasant, caramel notes. Produced from French chicory seeds via a contract farming model; batch-tested for consistent quality and full traceability. Cubes are uniformly roasted and packaged in food-grade lined polypropylene (PP) bags at our Etah facility to preserve aroma and freshness. Ready for export—seeking new global partners in coffee, food, and beverage sectors.",
    origin: "India",
    processing: "Dried chicory cubes are put through a normal roast cycle using advanced technology to achieve a consistent golden-brown color and a mild flavor profile. Sun-dried and processed in hygienic, facility-controlled environments.",
    applications: [
      "Coffee blending (bulk/instant/blended)",
      "Instant coffee manufacturing",
      "Food ingredient and flavoring",
      "Functional/health beverage formulations",
      "Inulin extraction",
      "Chicory-based prebiotic blends",
      "Herbal beverage flavoring"
    ],
    specs: {
      color: "Golden brown",
      form: "Cubes (approx. 8-12mm)",
      shelfLife: "24 months",
    },
    packaging: "Standard packaging: 35kg lined PP bags. Custom and bulk packaging available to suit industrial requirements.",
    moq: "20 tons (negotiable for long-term or bulk supply contracts)",
    price: "Contact us for custom pricing",
  },
  {
    name: "Roasted Chicory Cubes (DRC)",
    slug: "roasted-chicory-cubes-drc",
    image: "https://images.unsplash.com/photo-1605941833825-78363787324c?q=80&w=600&dark",
    aiHint: "dark roasted coffee",
    description: "Dark Roast Chicory (DRC) cubes, expertly roasted for a robust, rich, and coffee-like flavor. Perfect for creating strong, dark blends and for applications requiring a deep color and intense taste. Produced from French-origin chicory via contract farming; batch-tested; fully traceable from farm to factory. Uniform drum-roasted, cooled, and packed at our Etah facility to lock in aroma and deep color. Ready for export — partners invited in coffee and food ingredients.",
    origin: "India",
    processing: "Dried chicory cubes are roasted longer or at higher temperatures to develop a dark, rich color and a strong, robust flavor, characteristic of a dark roast. Uniform drum-roasted, cooled, and packed at our Etah facility to lock in aroma and deep color.",
    applications: ["Coffee blending (instant/espresso/dark roasts)", "Ingredient & flavor systems", "Prebiotic blends", "Inulin-based and herbal beverages"],
    specs: {
      color: "Dark brown to black",
      form: "Cubes (approx. 8-12mm)",
      shelfLife: "24 months",
    },
    packaging: "35kg lined PP/HDPE bags with inner liner; batch no., net wt., MFG month printed; custom/bulk packing on request.",
    moq: "20 tons (negotiable for annual/contract supplies)",
    price: "Contact us for custom pricing",
  },
  {
    name: "Dried Chicory Cubes",
    slug: "dried-chicory-cubes",
    image: "https://images.unsplash.com/photo-1525203139896-77880291bb6f?q=80&w=600",
    aiHint: "dried herbs",
    description: "Sun-dried or machine-dried chicory cubes, with low moisture content, ready for roasting or extraction. Produced from French-origin chicory via contract farming; batch-tested; fully traceable from farm to factory. A stable, storable intermediate product for large-scale industrial use. Ready for export — partners invited in coffee and food ingredients.",
    origin: "India",
    processing: "Washed, diced, sun-dried 48–72h, graded and hygienically packed at our Etah facility.",
    applications: ["Roasting and extraction base", "Instant coffee manufacturing", "Prebiotic/inulin blends", "Herbal beverage formulations"],
    specs: {
      color: "Cream to light brown",
      form: "Cubes (approx. 8-16mm)",
      shelfLife: "18 months",
    },
    packaging: "35kg lined PP/HDPE bags with inner LDPE liner; custom/bulk packing available.",
    moq: "20 tons (negotiable for annual/contract supplies)",
    price: "Contact us for custom pricing",
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
    moq: "20 Ton",
    price: "Contact us for custom pricing",
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
    moq: "20 Ton",
    price: "Contact us for custom pricing",
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
    moq: "20 Ton",
    price: "Contact us for custom pricing",
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
