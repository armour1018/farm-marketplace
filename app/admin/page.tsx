import Link from "next/link";

const stats = [
  { label: "Revenue", value: "$42,860", change: "+18.4%" },
  { label: "Orders", value: "1,284", change: "+12.8%" },
  { label: "Visitors", value: "24.1k", change: "+9.2%" },
  { label: "Fulfilled", value: "96.5%", change: "+2.1%" },
];

const orders = [
  { id: "#1042", customer: "Maya Patel", item: "Organic Eggs", status: "Packed", total: "$26.00" },
  { id: "#1048", customer: "Noah Brooks", item: "Grass-Fed Cow", status: "Awaiting pickup", total: "$1,450.00" },
  { id: "#1071", customer: "Ava Chen", item: "Farm Fresh Tomatoes", status: "Delivered", total: "$18.00" },
  { id: "#1093", customer: "Lucas Reed", item: "Wildflower Honey", status: "In transit", total: "$28.00" },
];

export default function AdminDashboardPage() {
  return (
    <div className="container py-16">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Seller dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-900">Farm admin overview</h1>
        </div>
        <Link href="/sell" className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
          Manage listings
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-stone-500">{stat.label}</p>
            <div className="mt-4 flex items-end justify-between">
              <span className="text-3xl font-black text-stone-900">{stat.value}</span>
              <span className="text-sm font-semibold text-emerald-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-black text-stone-900">Recent orders</h2>
            <span className="text-sm text-stone-500">Last 7 days</span>
          </div>

          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-stone-900">{order.customer}</p>
                  <p className="text-sm text-stone-600">{order.item}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{order.status}</span>
                  <span className="font-bold text-stone-900">{order.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-stone-900">Inventory snapshot</h2>
          <div className="mt-6 space-y-5">
            {[
              { name: "Organic Eggs", stock: "92 dozen" },
              { name: "Heritage Chicken", stock: "18 birds" },
              { name: "Farm Tomatoes", stock: "71 baskets" },
              { name: "Wildflower Honey", stock: "28 jars" },
            ].map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between text-sm text-stone-600">
                  <span>{item.name}</span>
                  <span>{item.stock}</span>
                </div>
                <div className="h-2 rounded-full bg-stone-200">
                  <div className="h-2 rounded-full bg-brand-600" style={{ width: `${Math.min(100, item.stock.length * 6)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
