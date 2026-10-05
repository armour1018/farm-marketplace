export default function AboutPage() {
  return (
    <div className="container py-16">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Our story</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-900">Growing healthier food and stronger communities.</h1>
        </div>
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
          alt="Farm field"
          className="h-[280px] w-full rounded-[2rem] object-cover lg:w-[420px]"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Local-first sourcing",
            text: "We partner with ethical producers who raise animals humanely and grow crops with care.",
          },
          {
            title: "Seasonal transparency",
            text: "Our inventory changes with the harvest, so customers always receive what is freshest.",
          },
          {
            title: "Community impact",
            text: "We support rural farms, neighborhood kitchens, and sustainable livelihoods across the region.",
          },
        ].map((card) => (
          <div key={card.title} className="rounded-[1.5rem] border border-stone-200 bg-white p-7 shadow-soft">
            <h2 className="mb-4 text-xl font-bold text-stone-900">{card.title}</h2>
            <p className="text-stone-600">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
