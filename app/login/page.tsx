export default function LoginPage() {
  return (
    <div className="container flex justify-center py-20">
      <div className="w-full max-w-md rounded-[2rem] border border-stone-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-700">Welcome back</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-stone-900">Log in</h1>

        <form className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-stone-700">
            Email
            <input className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="you@example.com" />
          </label>

          <label className="block text-sm font-medium text-stone-700">
            Password
            <input type="password" className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:border-brand-400" placeholder="••••••••" />
          </label>

          <button className="w-full rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white transition hover:bg-brand-700">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
