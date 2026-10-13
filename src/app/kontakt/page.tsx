import Link from "next/link";

export default function KontaktPage() {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-md border border-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-slate-800">
        Kontakt stranica
      </h1>
      <p className="text-gray-600 mb-6">
        Primer rute <code>/kontakt</code> sa jednostavnom formom i kontakt podacima.
      </p>

      <form className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ime i prezime
          </label>
          <input
            type="text"
            placeholder="Petar Petrović"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email adresa
          </label>
          <input
            type="email"
            placeholder="student@fon.bg.ac.rs"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Poruka
          </label>
          <textarea
            rows={3}
            placeholder="Vaša poruka..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition"
        >
          Pošalji poruku
        </button>
      </form>

      <div className="border-t pt-4">
        <Link
          href="/"
          className="inline-block text-blue-600 hover:underline font-medium text-sm"
        >
          ← Povratak na početnu stranicu
        </Link>
      </div>
    </div>
  );
}
