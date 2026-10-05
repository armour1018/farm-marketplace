export default function ContactPage() {
  return (
    <div className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Contact</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-900">Let’s talk farm-to-market.</h1>
          <p className="mt-4 text-stone-600">
            Whether you’re buying livestock, planning a local order, or becoming a farm partner, our team is ready to help.
          </p>

          <div className="mt-8 space-y-4 text-stone-700">
            <p><strong>Phone:</strong> (555) 218-4531</p>
            <p><strong>Email:</strong> hello@harvesthaven.com</p>
            <p><strong>Address:</strong> 455 Green Valley Road, Sunnydale, CA</p>
          </div>
        </div>

        <form className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-stone-700">
              Full name
              <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-brand-400" placeholder="Jane Smith" />
            </label>
            <label className="text-sm font-medium text-stone-700">
              Email
              <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-brand-400" placeholder="jane@example.com" />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-stone-700">
            Subject
            <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-brand-400" placeholder="Bulk farm produce order" />
          </label>

          <label className="mt-5 block text-sm font-medium text-stone-700">
            Message
            <textarea className="mt-2 min-h-[140px] w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none transition focus:border-brand-400" placeholder="Tell us about your order or partnership request..." />
          </label>

          <button className="mt-6 w-full rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-700">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
