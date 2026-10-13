import Link from "next/link";

export default function ONamaPage() {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md border border-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-slate-800">
        O nama — Internet Tehnologije
      </h1>
      <p className="text-gray-600 mb-4 leading-relaxed">
        Ova stranica demonstrira <strong>rutiranje u Next.js App Router-u</strong>.
        Folder <code className="bg-gray-100 px-2 py-0.5 rounded text-sm text-pink-600 font-mono">src/app/o-nama</code>{" "}
        sa fajlom <code className="bg-gray-100 px-2 py-0.5 rounded text-sm text-pink-600 font-mono">page.tsx</code>{" "}
        automatski kreira rutu <code className="bg-gray-100 px-2 py-0.5 rounded text-sm text-pink-600 font-mono">/o-nama</code>.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6 text-sm text-blue-900">
        <p className="font-semibold mb-1">💡 Server Component:</p>
        <p>
          Ova komponenta ne koristi <code>"use client"</code> jer je statična i ne koristi klijentske hook-ove.
          Next.js je automatski renderuje na serveru.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
        >
          ← Nazad na početnu
        </Link>
        <Link
          href="/kontakt"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition"
        >
          Idi na Kontakt →
        </Link>
      </div>
    </div>
  );
}
