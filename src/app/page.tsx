import Counter from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  // Primeti: Ova komponenta NEMA "use client" na vrhu!
  // To znači da je ovo Server Component koja se izvršava na serveru.
  // Samo je komponenta <Counter /> klijentska komponenta ("use client").

  return (
    <div className="space-y-6">
      {/* Originalni blok iz vežbi sa asistentskim oznakama */}
      <div className="bg-blue-600 text-white p-4 rounded-xl shadow">
        <p className="font-semibold text-lg">
          Ovo je page.tsx na pocetnoj stranici (Server Component)
        </p>
        <p className="text-blue-100 text-sm mt-1">
          Ruta: <code>/</code> | Server-rendered
        </p>
      </div>

      {/* Izdvojena klijentska komponenta sa kompletnim brojačem */}
      <Counter />

      {/* Edukativna kartica sa objašnjenjima ključnih koncepata */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-gray-800 space-y-3">
        <h3 className="font-bold text-lg text-slate-800">
          📚 Ključni koncepti obrađeni na ovom primeru:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>
            <strong>Server vs Client Components:</strong> <code>page.tsx</code> je ostao Server Component jer mu ne treba state. Samo <code>Counter.tsx</code> ima <code>"use client"</code> jer koristi <code>useState</code> i <code>onClick</code>.
          </li>
          <li>
            <strong>Next.js SPA rutiranje:</strong> Za prelazak između stranica koristi se <code>&lt;Link href="..."&gt;</code> umesto klasičnog <code>&lt;a&gt;</code> taga, što omogućava instant navigaciju bez ponovnog učitavanja cele stranice.
          </li>
          <li>
            <strong>Reaktivnost stanja:</strong> Promena vrednosti kroz funkciju <code>setCount</code> okida re-render, dok obična promenljiva (npr. <code>let broj = 0</code>) to ne bi uradila.
          </li>
        </ul>

        <div className="pt-3 border-t flex flex-wrap gap-3">
          <Link
            href="/strana2"
            className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-md font-medium transition"
          >
            Idi na Stranu 2 →
          </Link>
          <Link
            href="/o-nama"
            className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-md font-medium transition"
          >
            Idi na O nama →
          </Link>
          <Link
            href="/kontakt"
            className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-md font-medium transition"
          >
            Idi na Kontakt →
          </Link>
        </div>
      </div>
    </div>
  );
}
