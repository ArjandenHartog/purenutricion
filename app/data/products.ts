export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  emoji: string;
  image: string;
  badge?: string;
  category: "shakes" | "supplements" | "snacks" | "sport";
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "SlimFast Maaltijdshake Chocolade",
    brand: "SlimFast",
    price: 24.99,
    originalPrice: 32.99,
    rating: 4.3,
    reviewCount: 1284,
    emoji: "🥤",
    image: "https://images.unsplash.com/photo-1622484212850-eb596d769e83?w=400&h=350&q=80&auto=format&fit=crop",
    badge: "Bestseller",
    category: "shakes",
    description: "Complete maaltijdvervanger met 20g proteïne, rijk aan vezels",
  },
  {
    id: 2,
    name: "Groene Thee Extract 500mg",
    brand: "NaturFit",
    price: 14.95,
    rating: 4.1,
    reviewCount: 863,
    emoji: "🌿",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=350&q=80&auto=format&fit=crop",
    category: "supplements",
    description: "Ondersteunt de vetverbranding en stofwisseling",
  },
  {
    id: 3,
    name: "Proteïne Poeder Vanille 1kg",
    brand: "PureProtein",
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviewCount: 2341,
    emoji: "💪",
    image: "https://images.unsplash.com/photo-1593095948401-b9b955a2b808?w=400&h=350&q=80&auto=format&fit=crop",
    badge: "20% korting",
    category: "supplements",
    description: "Whey isolaat met 25g eiwit per portie, laag in suiker",
  },
  {
    id: 4,
    name: "Omega-3 Visolie Capsules 90st",
    brand: "OceanHealth",
    price: 18.50,
    rating: 4.4,
    reviewCount: 1105,
    emoji: "🐟",
    image: "https://images.unsplash.com/photo-1584308666744-de53e7c3c8aa?w=400&h=350&q=80&auto=format&fit=crop",
    category: "supplements",
    description: "Ondersteunt een gezond hart en helpt bij vetafbraak",
  },
  {
    id: 5,
    name: "Maaltijdvervanger Soep Tomaat",
    brand: "LeanLine",
    price: 21.95,
    originalPrice: 27.95,
    rating: 3.9,
    reviewCount: 432,
    emoji: "🍲",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=350&q=80&auto=format&fit=crop",
    badge: "Nieuw",
    category: "shakes",
    description: "Hartige maaltijdvervanger met slechts 200 kcal",
  },
  {
    id: 6,
    name: "CLA Afslankpillen 90 capsules",
    brand: "BodyTrim",
    price: 29.95,
    rating: 3.7,
    reviewCount: 678,
    emoji: "💊",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=350&q=80&auto=format&fit=crop",
    category: "supplements",
    description: "Geconjugeerd linolzuur ter ondersteuning van lichaamssamenstelling",
  },
  {
    id: 7,
    name: "Eiwitrepen Variety Pack 12st",
    brand: "FitBar",
    price: 27.99,
    originalPrice: 33.99,
    rating: 4.5,
    reviewCount: 1876,
    emoji: "🍫",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=350&q=80&auto=format&fit=crop",
    badge: "Populair",
    category: "snacks",
    description: "Laag in suiker, hoog in proteïne – ideaal als tussendoortje",
  },
  {
    id: 8,
    name: "Detox & Cleanse Theepakket",
    brand: "HerbalPure",
    price: 12.99,
    rating: 4.0,
    reviewCount: 543,
    emoji: "🌱",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=350&q=80&auto=format&fit=crop",
    category: "supplements",
    description: "14-daags programma ter ondersteuning van spijsvertering",
  },
];

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
