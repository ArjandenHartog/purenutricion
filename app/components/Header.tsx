"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { totalCount, openCart } = useCart();

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[#0a0a6e] text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-6">
            <span>
              <strong className="text-green-400">Gratis</strong> verzending
              vanaf €25,-
            </span>
            <span>Bezorging dezelfde dag, &apos;s avonds of in het weekend*</span>
            <span>
              <strong className="text-green-400">Gratis</strong> retourneren
            </span>
          </div>
          <div className="flex gap-4">
            <span>Klantenservice</span>
            <span>Bestelstatus</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-[#0000a4] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center gap-1">
            <div className="bg-white rounded-lg px-3 py-1">
              <span className="text-[#0000a4] font-black text-xl leading-none">
                pure
              </span>
            </div>
            <span className="text-white font-bold text-sm ml-1 hidden sm:block">
              nutricion
            </span>
          </a>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="flex rounded-full overflow-hidden border-2 border-transparent focus-within:border-white/40 transition-colors">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek gezonde producten..."
                className="flex-1 px-4 py-2.5 text-sm outline-none text-gray-800"
              />
              <button className="bg-[#f7a800] hover:bg-[#e09900] transition-colors px-5 py-2.5 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#0000a4]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-white flex-shrink-0">
            <button className="flex flex-col items-center text-xs gap-0.5 hover:text-yellow-300 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span>Inloggen</span>
            </button>
            <button className="flex flex-col items-center text-xs gap-0.5 hover:text-yellow-300 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span>Verlanglijst</span>
            </button>
            <button
              onClick={openCart}
              className="flex flex-col items-center text-xs gap-0.5 hover:text-yellow-300 transition-colors relative"
            >
              <div className="relative">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-[#f7a800] text-[#0000a4] text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  {totalCount}
                </span>
              </div>
              <span>Winkelwagen</span>
            </button>
          </div>
        </div>

        {/* Secondary nav */}
        <div className="bg-[#0606b8] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {[
              "Categorieën",
              "Aanbiedingen",
              "Afslanken",
              "Eiwitten",
              "Supplementen",
              "Maaltijdvervangers",
              "Sport & Beweging",
              "Gezonde Snacks",
              "Advies",
            ].map((item, i) => (
              <button
                key={item}
                className={`whitespace-nowrap text-white text-sm py-2.5 px-3 hover:bg-white/10 transition-colors rounded-sm ${i === 0 ? "font-semibold" : ""}`}
              >
                {item}
                {(i === 0 || i === 1) && (
                  <svg
                    className="inline ml-1 w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
