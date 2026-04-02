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
  features?: string[];
  flavors?: string[];
  weight?: string;
  servings?: number;
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
    // Deze Unsplash-afbeelding gaf in de dev-log een 404. Gebruik een andere bestaande Unsplash-afbeelding.
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=350&q=80&auto=format&fit=crop",
    badge: "Bestseller",
    category: "shakes",
    description: "Complete maaltijdvervanger met 20g proteïne, rijk aan vezels",
    features: [
      "20g hoogwaardige proteïne per portie",
      "Rijk aan vezels voor een verzadigd gevoel",
      "Slechts 230 kcal per shake",
      "Verrijkt met 24 vitaminen en mineralen",
      "Glutenvrij en geschikt voor vegetariërs",
    ],
    flavors: ["Chocolade", "Vanille", "Aardbei", "Banaan"],
    weight: "438g",
    servings: 12,
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
    features: [
      "500mg gestandaardiseerd groene thee extract",
      "Hoog EGCG-gehalte (98% polyfenolen)",
      "Ondersteunt vetverbranding en metabolisme",
      "Rijk aan antioxidanten",
      "Cafeïnevrije variant beschikbaar",
    ],
    weight: "60 capsules",
    servings: 60,
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
    // Deze Unsplash-afbeelding gaf in de dev-log een 404. Gebruik een andere bestaande Unsplash-afbeelding.
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=350&q=80&auto=format&fit=crop",
    badge: "20% korting",
    category: "supplements",
    description: "Whey isolaat met 25g eiwit per portie, laag in suiker",
    features: [
      "25g whey isolaat eiwit per portie",
      "Slechts 1,5g suiker per portie",
      "Snel opneembaar voor na de training",
      "Geen kunstmatige kleurstoffen",
      "Gemakkelijk oplosbaar in water of melk",
    ],
    flavors: ["Vanille", "Chocolade", "Hazelnoot", "Cookies & Cream"],
    weight: "1000g",
    servings: 40,
  },
  {
    id: 4,
    name: "Omega-3 Visolie Capsules 90st",
    brand: "OceanHealth",
    price: 18.50,
    rating: 4.4,
    reviewCount: 1105,
    emoji: "🐟",
    // Deze Unsplash-afbeelding gaf in de dev-log een 404. Gebruik een andere bestaande Unsplash-afbeelding.
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=350&q=80&auto=format&fit=crop",
    category: "supplements",
    description: "Ondersteunt een gezond hart en helpt bij vetafbraak",
    features: [
      "1000mg visolie per capsule (EPA + DHA)",
      "Ondersteunt hart- en vaatgezondheid",
      "Helpt bij het reguleren van triglyceriden",
      "Molvriendelijk visolie certificaat",
      "Geen visgeur dankzij enterisch omhulsel",
    ],
    weight: "90 capsules",
    servings: 45,
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
    features: [
      "Slechts 200 kcal per portie",
      "15g eiwit per portie",
      "Hoog vezelgehalte voor verzadiging",
      "Klaar in 2 minuten met warm water",
      "Verrijkt met vitaminen B, C en D",
    ],
    flavors: ["Tomaat", "Groenten", "Champignon"],
    weight: "350g",
    servings: 10,
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
    features: [
      "1000mg CLA per capsule",
      "Ondersteunt spieropbouw en vetverlies",
      "Gemaakt van safloerolie",
      "Zonder jodium en gluten",
      "Klinisch onderzochte dosering",
    ],
    weight: "90 capsules",
    servings: 30,
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
    features: [
      "20g eiwit per reep",
      "Slechts 2-4g suiker per reep",
      "12 verschillende smaken in één pack",
      "Geschikt als pre- of post-workout snack",
      "Geen kunstmatige zoetstoffen",
    ],
    flavors: ["Chocolade Peanut", "Cookies & Cream", "Caramel", "Vanilla Almond"],
    weight: "12 × 60g",
    servings: 12,
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
    features: [
      "Gecertificeerde biologische kruiden",
      "Combinatie van brandnetel, venkel en gember",
      "Ondersteunt spijsvertering en darmgezondheid",
      "Cafeïnevrij en geschikt voor 's avonds",
      "14-daags programma voor optimaal resultaat",
    ],
    weight: "28 theezakjes",
    servings: 28,
  },
  {
    id: 9,
    name: "Peptides Creatine HCL",
    brand: "Peptides",
    price: 19.99,
    rating: 4.0,
    reviewCount: 543, 
    emoji: "💪",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=350&q=80&auto=format&fit=crop",
    category: "sport",
    description: "Peptides Creatine HCL is een creatine peptide die opname van creatine in de spieren helpt versnellen.",
    features: [
      "Peptides Creatine HCL is een creatine peptide die opname van creatine in de spieren helpt versnellen.",
      "Peptides Creatine HCL is een creatine peptide die opname van creatine in de spieren helpt versnellen.",
    ],
    weight: "1000mg",
    servings: 1000,
  },
  {
    id: 9,
    name: "De Beste Steroiden",
    brand: "Steroiden",
    price: 19.99,
    rating: 4.0,
    reviewCount: 543, 
    emoji: "💊",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=350&q=80&auto=format&fit=crop",
    category: "sport",
    description: "Steroiden zijn een groep van steroïden die opname van creatine in de spieren helpt versnellen.",
  },
];

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
