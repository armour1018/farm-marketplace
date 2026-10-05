import Link from "next/link";
import { ProductBrowser } from "@/components/product-browser";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <div className="container py-16">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Farm marketplace</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-900">Shop our fresh selections</h1>
        </div>
        <Link href="/" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
          Back to home
        </Link>
      </div>

      <ProductBrowser initialProducts={products} />
    </div>
  );
}
