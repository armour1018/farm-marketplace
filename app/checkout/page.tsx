"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { products } from "@/lib/products";

export default function CheckoutPage() {
  const { items, cartTotal } = useCart();

  const cartItems = items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean) as Array<(typeof products)[number] & { quantity: number }>;

  return (
    <div className="container py-16">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Checkout</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-900">Complete your order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-stone-900">Shipping details</h2>

          <form className="mt-6 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-stone-700">
                First name
                <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="Ava" />
              </label>
              <label className="text-sm font-medium text-stone-700">
                Last name
                <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="Reed" />
              </label>
            </div>

            <label className="text-sm font-medium text-stone-700">
              Email address
              <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="ava@example.com" />
            </label>

            <label className="text-sm font-medium text-stone-700">
              Street address
              <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="123 Green Valley Lane" />
            </label>

            <div className="grid gap-5 sm:grid-cols-3">
              <label className="text-sm font-medium text-stone-700">
                City
                <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="Sunnydale" />
              </label>
              <label className="text-sm font-medium text-stone-700">
                State
                <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="CA" />
              </label>
              <label className="text-sm font-medium text-stone-700">
                ZIP
                <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="90210" />
              </label>
            </div>

            <label className="text-sm font-medium text-stone-700">
              Payment method
              <select className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400">
                <option>Credit card</option>
                <option>Bank transfer</option>
                <option>Cash on delivery</option>
              </select>
            </label>
          </form>
        </div>

        <aside className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-stone-900">Order review</h2>

          <div className="mt-6 space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-stone-600">Your cart is empty. Add items before checkout.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3 rounded-2xl bg-stone-50 p-3">
                  <div>
                    <p className="font-semibold text-stone-900">{item.name}</p>
                    <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-brand-700">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 space-y-3 border-t border-stone-200 pt-5 text-sm text-stone-600">
            <div className="flex justify-between"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
            <div className="flex justify-between"><span>Taxes</span><span>Calculated</span></div>
          </div>

          <div className="mt-6 flex items-center justify-between text-xl font-black text-stone-900">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <button className="mt-8 w-full rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-700">
            Place order
          </button>

          <Link href="/shop" className="mt-4 block text-center text-sm font-semibold text-brand-700 hover:text-brand-800">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
