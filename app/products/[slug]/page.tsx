import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return (
    <div className="container py-16">
      <div className="mb-10 text-sm text-stone-600">
        <Link href="/shop" className="font-semibold text-brand-700 hover:text-brand-800">
          ← Back to shop
        </Link>
      </div>

      <div className="grid gap-12 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft md:grid-cols-2 md:p-10">
        <div className="overflow-hidden rounded-[1.5rem] bg-stone-100">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-700">
            {product.category}
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-stone-900">{product.name}</h1>
          <p className="mt-4 text-3xl font-black text-brand-700">${product.price}</p>
          <p className="mt-4 text-stone-600">{product.description}</p>

          <div className="mt-6 flex items-center gap-3 text-sm text-stone-600">
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-700">{product.stock}</span>
            <span>Per {product.unit}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/cart" className="rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-700">
              Buy now
            </Link>
            <a href="/shop" className="rounded-full border border-stone-200 px-6 py-3.5 font-semibold text-stone-700 transition hover:border-stone-300">
              Continue shopping
            </a>
          </div>

          <div className="mt-8 rounded-2xl bg-stone-100 p-5 text-sm text-stone-700">
            <p className="font-semibold text-stone-900">Includes</p>
            <ul className="mt-3 space-y-2">
              <li>• Freshly prepared and inspected</li>
              <li>• Farm-direct pricing</li>
              <li>• Pickup and local delivery available</li>
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-black tracking-tight text-stone-900">Related items</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
