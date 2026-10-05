"use client";

import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/components/cart-provider";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group overflow-hidden rounded-3xl border border-stone-200 bg-white card-shadow transition duration-200 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-stone-100">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700">
          {product.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-stone-900">{product.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
          </div>
          <span className="text-xl font-black text-brand-700">${product.price}</span>
        </div>

        <p className="text-sm leading-6 text-stone-600">{product.description}</p>

        <div className="flex items-center justify-between gap-3">
          <Link href={`/products/${product.slug}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
            View details
          </Link>

          <button
            onClick={() => addItem(product)}
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
