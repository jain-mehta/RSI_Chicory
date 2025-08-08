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
    description: "Produced via contract farming with French-origin chicory seeds; farmer hand-cut and sun-dried; batch-tested and fully traceable from farm to factory. Ready for export — partners invited in coffee and food ingredients.",
    origin: "India",
    processing: "On receipt at our Etah facility, roots are cleaned, graded, and hygienically packed.",
    applications: [
      "Roasting and extraction base",
      "Milling to powder",
      "Herbal infusions",
      "Ingredient processing"
    ],
    specs: {
      color: "Beige to light brown",
      form: "Hand-cut pieces",
      shelfLife: "12 months when stored ≤25°C in a cool, dry place away from sunlight; keep bags sealed.",
    },
    packaging: "Standard: 35kg lined PP/HDPE bags with inner LDPE liner; custom/bulk packing available.",
    moq: "20 tons (negotiable for larger contracts)",
    price: "Contact us for custom pricing",
  },
  {
    name: "Roasted Chicory Cubes (NRC)",
    slug: "roasted-chicory-cubes-nrc",
    image: "https://images.unsplash.com/photo-1605941833825-78363787324c?q=80&w=600&light",
    aiHint: "roasted coffee beans",
    description: "Normal Roast Chicory (NRC) cubes, uniformly roasted to produce a mild, balanced flavor with pleasant, caramel notes. Produced from French chicory seeds via a contract farming model; batch-tested for consistent quality and full traceability. Ready for export—seeking new global partners in coffee, food, and beverage sectors.",
    origin: "India",
    processing: "Drum-roasted uniformly, cooled on trays, screened and graded; packed in food-grade lined PP/HDPE bags at our Etah facility.",
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
      shelfLife: "24 months when stored ≤25°C in a cool, dry place away from sunlight; keep sealed.",
    },
    packaging: "Standard: 35kg lined PP/HDPE bags with inner LDPE liner; custom/bulk packing available.",
    moq: "20 tons (negotiable for long-term/bulk contracts)",
    price: "Contact us for custom pricing",
  },
  {
    name: "Roasted Chicory Cubes (DRC)",
    slug: "roasted-chicory-cubes-drc",
    image: "https://images.unsplash.com/photo-1605941833825-78363787324c?q=80&w=600&dark",
    aiHint: "dark roasted coffee",
    description: "Dark Roast Chicory (DRC) cubes, expertly roasted for a robust, rich, and coffee-like flavor. Perfect for creating strong, dark blends and for applications requiring a deep color and intense taste. Produced from French-origin chicory via contract farming; batch-tested; fully traceable from farm to factory. Ready for export — partners invited in coffee and food ingredients.",
    origin: "India",
    processing: "Uniform drum-roasted, cooled, and packed at our Etah facility to lock in aroma and deep color.",
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
    description: "Sun-dried or machine-dried chicory cubes, with low moisture content, ready for roasting or extraction. Produced from French-origin chicory via contract farming; batch-tested; fully traceable from farm to factory. Ready for export — partners invited in coffee and food ingredients.",
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
    description: "Prepared from roasted chicory cubes via hot-water extraction, filtered and concentrated in falling-film evaporators; packed hot in food-grade HDPE drums to preserve quality. Ready for export — partners invited in coffee and food ingredients.",
    origin: "India",
    processing: "Hot-water extraction from roasted chicory, followed by filtration and concentration.",
    applications: [
      "Instant coffee manufacturing and 3-in-1 premixes",
      "Beverage and confectionery flavor/colour systems",
      "Stand-alone chicory drink bases",
      "Food ingredient formulations",
    ],
    specs: {
      color: "Dark brown",
      form: "Viscous liquid",
      shelfLife: "12 months when stored ≤25°C in a cool, dry place away from sunlight; use clean, dry transfer lines.",
    },
    packaging: "35kg HDPE carboys or 285–300kg HDPE drums with inner liner; batch no., net wt., Brix, and month of packing printed; bulk tanker supply on request.",
    moq: "20 Ton",
    price: "Contact us for custom pricing",
  },
  {
    name: "Roasted Chicory Granules",
    slug: "roasted-chicory-granules",
    image: "https://images.unsplash.com/photo-1495474472287-4d713b22e8b4?q=80&w=600",
    aiHint: "instant coffee",
    description: "Soluble chicory granules made from roasted chicory roots. Produced from French-origin chicory via contract farming; batch-tested; fully traceable from farm to factory. Designed for use in vending machines and instant coffee preparations, offering excellent solubility and consistent flavor. Ready for export — partners invited in coffee and food ingredients.",
    origin: "India",
    processing: "Uniformly roasted, granulated from roasted cubes, cooled and packed in food-grade lined bags at our Etah facility.",
    applications: ["Instant coffee and 3-in-1 premixes", "Vending premix manufacture", "Chicory-coffee blends", "Beverage flavor systems"],
    specs: {
      color: "Brown to dark brown",
      form: "Granules",
      shelfLife: "24 months when stored ≤25°C in a cool, dry place away from sunlight; keep sealed.",
    },
    packaging: "Standard: 25kg multi-wall paper bags with inner LDPE liner; optional 35kg PP/HDPE lined bags; custom/bulk packing available.",
    moq: "20 Ton",
    price: "Contact us for custom pricing",
  },
  {
    name: "Roasted Chicory Powder",
    slug: "roasted-chicory-powder",
    image: "https://images.unsplash.com/photo-1572432185265-32a843997298?q=80&w=600",
    aiHint: "brown powder spices",
    description: "A fine powder produced by grinding roasted chicory cubes. Produced from French-origin chicory via contract farming; batch-tested; fully traceable from farm to factory. Its fine texture allows for seamless blending in coffee filter powders and various food applications, delivering consistent flavor and color. Ready for export — partners invited in coffee and food ingredients.",
    origin: "India",
    processing: "Roasted cubes milled to a fine powder; cooled and packed in food-grade lined bags at our Etah facility to preserve aroma and color.",
    applications: ["Filter and instant coffee blends", "3-in-1 premixes", "Beverage flavor systems", "Bakery/cooking uses"],
    specs: {
      color: "Brown to dark brown",
      form: "Fine powder",
      shelfLife: "18 months when stored ≤25°C in a cool, dry place away from sunlight; keep sealed.",
    },
    packaging: "Standard: 25kg multi-wall paper bags with inner liner; optional 35–40kg PP/HDPE lined bags; custom/bulk packing available.",
    moq: "20 Ton",
    price: "Contact us for custom pricing",
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
