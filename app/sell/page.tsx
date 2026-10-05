import Link from "next/link";

const listingCards = [
  { title: "Daily animal listings", description: "Promote healthy livestock, poultry, and specialty breeds with clear care details." },
  { title: "Fresh produce availability", description: "List seasonal produce, pricing, and pickup windows for local customers." },
  { title: "Seller analytics", description: "Monitor order volume, conversion rate, and best-performing products." },
];

export default function SellPage() {
  return (
    <div className="container py-16">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Sell on Harvest Haven</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-900">Grow your farm business online.</h1>
        <p className="mt-4 text-lg text-stone-600">
          Connect directly with families, chefs, and local shoppers looking for fresh farm goods.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {listingCards.map((card) => (
          <div key={card.title} className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-stone-900">{card.title}</h2>
            <p className="mt-3 text-stone-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/signup" className="rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-700">
          Create seller account
        </Link>
        <Link href="/admin" className="rounded-full border border-stone-300 bg-white px-6 py-3.5 font-semibold text-stone-800 transition hover:border-stone-400">
          View dashboard
        </Link>
      </div>
    </div>
  );
}
