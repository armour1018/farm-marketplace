export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-bold text-stone-900">Harvest Haven</h3>
          <p className="max-w-xs text-sm text-stone-600">
            Fresh farm animals, eggs, fruits, grains, and produce directly from trusted local growers.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-stone-600">Quick links</h4>
          <ul className="space-y-2 text-sm text-stone-600">
            <li><a href="/shop" className="hover:text-brand-700">Shop</a></li>
            <li><a href="/about" className="hover:text-brand-700">About</a></li>
            <li><a href="/contact" className="hover:text-brand-700">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-stone-600">Visit us</h4>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>455 Green Valley Road</li>
            <li>Sunnydale, CA</li>
            <li>(555) 218-4531</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
