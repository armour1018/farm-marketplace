export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  image: string;
  stock: string;
};

export const products: Product[] = [
  {
    id: "organic-eggs",
    name: "Organic Eggs",
    slug: "organic-eggs",
    category: "Produce",
    price: 6,
    unit: "dozen",
    description: "Free-range, vitamin-rich eggs collected daily from happy hens.",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=900&q=80",
    stock: "In stock",
  },
  {
    id: "grass-fed-cow",
    name: "Grass-Fed Cow",
    slug: "grass-fed-cow",
    category: "Animals",
    price: 1450,
    unit: "animal",
    description: "Healthy dairy cow bred for high-quality milk and calm temperament.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80",
    stock: "Ready for pickup",
  },
  {
    id: "heritage-chicken",
    name: "Heritage Chicken",
    slug: "heritage-chicken",
    category: "Animals",
    price: 42,
    unit: "bird",
    description: "Pasture-raised chickens with rich flavor and excellent egg-laying traits.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=80",
    stock: "Limited stock",
  },
  {
    id: "farm-fresh-tomatoes",
    name: "Farm Fresh Tomatoes",
    slug: "farm-fresh-tomatoes",
    category: "Produce",
    price: 8,
    unit: "basket",
    description: "Sun-ripened tomatoes grown in nutrient-rich soil with no spray residue.",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80",
    stock: "Fresh harvest",
  },
  {
    id: "sweet-honey",
    name: "Wildflower Honey",
    slug: "wildflower-honey",
    category: "Produce",
    price: 14,
    unit: "jar",
    description: "Golden, raw honey harvested from local flowering fields and wild meadow blooms.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80",
    stock: "Seasonal batch",
  },
  {
    id: "alpaca-fleece",
    name: "Alpaca Fleece",
    slug: "alpaca-fleece",
    category: "Animals",
    price: 68,
    unit: "bundle",
    description: "Naturally soft fleece from well-cared-for alpacas, ideal for warm knitwear.",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    stock: "Available now",
  },
  {
    id: "root-vegetable-box",
    name: "Root Vegetable Box",
    slug: "root-vegetable-box",
    category: "Produce",
    price: 19,
    unit: "box",
    description: "A colorful mix of carrots, beets, and parsnips from the field this week.",
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80",
    stock: "Weekly harvest",
  },
  {
    id: "sheep-lamb",
    name: "Sheep Lamb",
    slug: "sheep-lamb",
    category: "Animals",
    price: 285,
    unit: "lamb",
    description: "Ethically raised pasture lamb for premium meat and exceptional flavor.",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=900&q=80",
    stock: "New arrivals",
  },
];
