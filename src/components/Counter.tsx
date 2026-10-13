"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  // Određivanje boje i teksta na osnovu vrednosti stanja
  let statusText = "Broj je nula";
  let statusColor = "bg-gray-200 text-gray-800";

  if (count > 0) {
    statusText = "Broj je pozitivan";
    statusColor = "bg-green-100 text-green-700 border-green-300";
  } else if (count < 0) {
    statusText = "Broj je negativan";
    statusColor = "bg-red-100 text-red-700 border-red-300";
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto my-6 border border-gray-100 text-gray-800">
      <h3 className="text-xl font-bold mb-4 text-center text-slate-800">
        React State Brojač (Client Component)
      </h3>

      {/* Prikaz trenutne vrednosti */}
      <div className="text-center my-4">
        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
          Trenutna vrednost
        </p>
        <span
          className={`text-6xl font-extrabold inline-block my-2 transition-colors duration-200 ${
            count > 0
              ? "text-green-600"
              : count < 0
              ? "text-red-600"
              : "text-gray-700"
          }`}
        >
          {count}
        </span>
      </div>

      {/* Uslovno renderovani bedž za status broja */}
      <div className="flex justify-center mb-6">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColor}`}
        >
          {statusText}
        </span>
      </div>

      {/* Dugmad za interakciju sa stanjem */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg shadow transition active:scale-95"
        >
          -1 Smanji
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-lg shadow transition active:scale-95"
        >
          Reset (0)
        </button>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 rounded-lg shadow transition active:scale-95"
        >
          +1 Povećaj
        </button>
      </div>

      {/* Brzi skokovi */}
      <div className="flex justify-center gap-3 mt-3">
        <button
          onClick={() => setCount((prev) => prev - 5)}
          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-md transition cursor-pointer"
        >
          -5
        </button>
        <button
          onClick={() => setCount((prev) => prev + 5)}
          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-md transition cursor-pointer"
        >
          +5
        </button>
      </div>
    </div>
  );
}
