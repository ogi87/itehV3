import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITEH Čas 03 - Next.js & React Osnove",
  description: "Vežbe 3. nedelja - Internet Tehnologije",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        {/* Prikaz iz asistentskog koda da se vidi početak RootLayout-a */}
        <p className="bg-red-500 text-white font-bold text-center py-1 text-sm tracking-wide">
          Ovo je pocetak Layout fajla
        </p>

        {/* Globalna navigacija pomoću Next.js Link komponente (SPA klijentsko rutiranje) */}
        <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-emerald-400 hover:text-emerald-300 transition">
              ITEH 2026 • Čas 03
            </Link>
            <nav className="flex gap-5 text-sm font-medium">
              <Link href="/" className="hover:text-emerald-300 transition">
                Početna
              </Link>
              <Link href="/strana2" className="hover:text-emerald-300 transition">
                Strana 2
              </Link>
              <Link href="/o-nama" className="hover:text-emerald-300 transition">
                O nama
              </Link>
              <Link href="/kontakt" className="hover:text-emerald-300 transition">
                Kontakt
              </Link>
            </nav>
          </div>
        </header>

        {/* Dinamički sadržaj trenutne stranice */}
        <main className="flex-1 max-w-4xl w-full mx-auto p-4">
          {children}
        </main>

        {/* Prikaz iz asistentskog koda da se vidi kraj RootLayout-a */}
        <p className="bg-red-500 text-white font-bold text-center py-1 text-sm tracking-wide mt-auto">
          Ovo je kraj Layout fajla
        </p>
      </body>
    </html>
  );
}
