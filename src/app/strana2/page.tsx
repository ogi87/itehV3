import Link from "next/link";

export default function Page2() {
  return (
    <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl my-4 text-gray-800">
      <h2 className="text-xl font-bold text-amber-900 mb-2">
        Ovo je strana 2, fajl page.tsx
      </h2>
      <p className="text-amber-800 text-sm mb-4">
        Ruta: <code>/strana2</code>. Primetite kako se iznad i ispod ovog sadržaja nalaze poruke iz <code>strana2/layout.tsx</code>, a oko svega toga i globalni <code>RootLayout</code>!
      </p>

      <div className="flex gap-3">
        <Link
          href="/"
          className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition inline-block"
        >
          ← Vrati se na početnu
        </Link>
        <Link
          href="/o-nama"
          className="bg-amber-100 hover:bg-amber-200 text-amber-900 text-sm font-medium px-4 py-2 rounded-lg transition inline-block"
        >
          O nama →
        </Link>
      </div>
    </div>
  );
}
