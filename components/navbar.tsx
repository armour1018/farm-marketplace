import Link from "next/link";
import { ShoppingCart, Leaf, Menu, Search } from "lucide-react";
import { useCart } from "@/components/cart-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/sell", label: "Sell" },
  { href: "/admin", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/90 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Harvest Haven home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft">
            <Leaf className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-stone-800">Harvest Haven</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Farm Market</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-stone-700 transition hover:text-brand-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-stone-200 bg-white p-2.5 text-stone-600 md:flex" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>

          <Link href="/login" className="hidden rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-stone-300 md:inline-flex">
            Login
          </Link>

          <Link href="/cart" className="relative flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
            <ShoppingCart className="h-4 w-4" />
            Cart
            <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-[11px] font-bold text-brand-700">
              {cartCount}
            </span>
          </Link>

          <button className="rounded-full border border-stone-200 bg-white p-2.5 text-stone-700 md:hidden" aria-label="Open menu">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
