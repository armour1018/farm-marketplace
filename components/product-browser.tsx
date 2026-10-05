"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/lib/products";

export function ProductBrowser({ initialProducts }: { initialProducts: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(initialProducts.map((product) => product.category))];

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return initialProducts.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, initialProducts, query]);

  return (
    <>
      <div className="mb-8 rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-soft">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products or produce"
              className="w-full rounded-full border border-stone-200 bg-stone-50 py-3 pl-11 pr-4 text-sm text-stone-700 outline-none transition focus:border-brand-400"
            />
          </div>

          <div className="flex items-center gap-3 text-sm text-stone-600">
            <SlidersHorizontal className="h-4 w-4" />
            <span>{filteredProducts.length} items</span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                category === item
                  ? "bg-brand-600 text-white shadow-soft"
                  : "border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-[1.75rem] border border-dashed border-stone-300 bg-white p-10 text-center shadow-soft">
          <p className="text-xl font-bold text-stone-900">No products match your search.</p>
          <p className="mt-2 text-stone-600">Try another keyword or switch category filters.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
