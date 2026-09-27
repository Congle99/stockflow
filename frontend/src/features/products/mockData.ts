import type { Product } from "./types";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Gaming Mouse",
    sku: "GM-001",
    category: "Accessories",
    price: 39.99,
    stock: 120,
    status: "active",
    description: "High precision gaming mouse.",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    sku: "MK-001",
    category: "Accessories",
    price: 89.99,
    stock: 45,
    status: "active",
    description: "Mechanical keyboard with RGB lighting.",
  },
  {
    id: "3",
    name: "Gaming Monitor",
    sku: "MN-001",
    category: "Monitors",
    price: 249.99,
    stock: 8,
    status: "active",
    description: "24-inch gaming monitor.",
  },
  {
    id: "4",
    name: "USB-C Hub",
    sku: "HB-001",
    category: "Accessories",
    price: 29.99,
    stock: 3,
    status: "active",
    description: "Multi-port USB-C hub.",
  },
];