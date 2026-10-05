"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { products } from "@/lib/products";

export default function CartPage() {
  const { items, cartTotal, updateQuantity, removeItem, clearCart } = useCart();

  const cartItems = items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return null;
      return { ...product, quantity: item.quantity };
    })
    .filter(Boolean) as Array<(typeof products)[number] & { quantity: number }>;

  return (
    <div className="container py-16">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Your basket</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-900">Cart</h1>
        </div>
        {cartItems.length > 0 && (
          <button onClick={clearCart} className="text-sm font-semibold text-stone-600 hover:text-stone-900">
            Clear cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-stone-300 bg-white p-10 text-center shadow-soft">
          <ShoppingBag className="mx-auto h-12 w-12 text-stone-300" />
          <h2 className="mt-4 text-2xl font-black text-stone-900">Your cart is empty</h2>
          <p className="mt-3 text-stone-600">Add a few farm favorites to get started.</p>
          <Link href="/shop" className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-700">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-5 rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-soft sm:flex-row">
                <div className="h-28 w-full overflow-hidden rounded-2xl bg-stone-100 sm:w-28">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900">{item.name}</h3>
                      <p className="text-sm text-stone-600">{item.category}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-stone-400 hover:text-red-500" aria-label={`Remove ${item.name}`}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 rounded-full border border-stone-200 bg-stone-50 px-2 py-1.5">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-full p-1 hover:bg-stone-200" aria-label={`Decrease quantity for ${item.name}`}>
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-6 text-center text-sm font-semibold text-stone-800">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full p-1 hover:bg-stone-200" aria-label={`Increase quantity for ${item.name}`}>
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-xl font-black text-brand-700">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black text-stone-900">Order summary</h2>
            <div className="mt-6 space-y-4 text-sm text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Included</span>
              </div>
            </div>

            <div className="mt-6 border-t border-stone-200 pt-5">
              <div className="flex items-center justify-between text-lg font-black text-stone-900">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-8 w-full rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-700">
              Proceed to checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
