import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, ShieldCheck, Truck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

const featureList = [
  {
    icon: Leaf,
    title: "Sustainably raised",
    text: "Our animals and crops are grown with regenerative practices and transparent care standards.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted quality",
    text: "Every item is carefully inspected before it reaches your home, farm, or restaurant.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    text: "Flexible pickup and delivery options for fresh produce and healthy farm animals.",
  },
];

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      <section className="bg-hero">
        <div className="container grid items-center gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-brand-100 bg-white/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-brand-700">
              Fresh from the farm
            </span>
            <h1 className="mt-6 section-title text-stone-900">
              Farm animals and produce your family can trust.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-700">
              Source healthy livestock, organic produce, and premium farm goods in one beautifully simple marketplace built for modern families and local food lovers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/shop" className="rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-soft transition hover:bg-brand-700">
                Shop now
              </Link>
              <Link href="/about" className="rounded-full border border-stone-200 bg-white px-6 py-3.5 font-semibold text-stone-800 transition hover:border-stone-300">
                Learn more
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-stone-700">
              <div>
                <div className="text-3xl font-black text-brand-700">1.4k+</div>
                <div>Happy buyers</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-700">98%</div>
                <div>Repeat orders</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-700">24/7</div>
                <div>Farm support</div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-4 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80"
              alt="Farm produce and livestock"
              className="h-[540px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Why choose us</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-stone-900">A marketplace built around trust</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featureList.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-stone-200 bg-white p-7 shadow-soft">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-stone-900">{title}</h3>
              <p className="text-stone-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-900 py-20 text-white">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-100">Featured goods</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Farm favorites</h2>
            </div>
            <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-100 hover:text-white">
              Browse all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Our promise</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-stone-900">
              A healthier food system from field to table.
            </h2>
            <ul className="mt-6 space-y-4 text-stone-700">
              {[
                "Certified, transparent farm partners",
                "Clean handling and humane animal care",
                "Direct-to-customer pricing and seasonal freshness",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] bg-stone-100 p-6">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa52ac9a9f94?auto=format&fit=crop&w=1200&q=80"
              alt="Farm field"
              className="h-[280px] w-full rounded-[1rem] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
