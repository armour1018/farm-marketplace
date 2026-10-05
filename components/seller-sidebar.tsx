import { Home, Store, DollarSign, Users, Package, Settings } from "lucide-react";

const links = [
  { icon: Home, label: "Overview", href: "/admin" },
  { icon: Store, label: "Products", href: "/shop" },
  { icon: DollarSign, label: "Orders", href: "/checkout" },
  { icon: Users, label: "Customers", href: "/contact" },
  { icon: Package, label: "Inventory", href: "/sell" },
  { icon: Settings, label: "Settings", href: "/about" },
];

export default function SellerSidebar() {
  return (
    <aside className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-soft">
      <h2 className="text-xl font-black text-stone-900">Seller tools</h2>
      <div className="mt-5 space-y-2">
        {links.map(({ icon: Icon, label, href }) => (
          <a key={label} href={href} className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100">
            <Icon className="h-4 w-4 text-brand-700" />
            {label}
          </a>
        ))}
      </div>
    </aside>
  );
}
