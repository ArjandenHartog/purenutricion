"use client";

import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[#c2f500] text-[#0d0d0d] text-xs py-1.5 font-semibold">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-6">
            <span>Gratis verzending vanaf €40,-</span>
            <span>Vandaag besteld, morgen in huis</span>
            <span>Gratis retourneren</span>
          </div>
          <div className="flex gap-4 text-[#0d0d0d]/70">
            <span className="hover:text-[#0d0d0d] cursor-pointer transition-colors">Klantenservice</span>
            <span className="hover:text-[#0d0d0d] cursor-pointer transition-colors">Bestelstatus</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-[#111111] border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-[#c2f500] px-3 py-1">
              <span className="text-[#0d0d0d] font-black text-xl leading-none tracking-tight uppercase">
                pure
              </span>
            </div>
            <span className="text-white font-black text-sm tracking-widest uppercase hidden sm:block">
              nutricion
            </span>
          </a>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="flex rounded-none overflow-hidden border border-white/10 focus-within:border-[#c2f500]/60 transition-colors">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek producten, supplementen, eiwitten..."
                className="flex-1 px-4 py-2.5 text-sm outline-none text-white bg-[#1a1a1a] placeholder-white/30"
              />
              <button className="bg-[#c2f500] hover:bg-[#d4ff00] transition-colors px-5 py-2.5 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#0d0d0d]"
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
          <div className="flex items-center gap-5 shrink-0">
            <button className="flex flex-col items-center text-xs gap-0.5 text-white/60 hover:text-[#c2f500] transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span>Account</span>
            </button>
            <button className="flex flex-col items-center text-xs gap-0.5 text-white/60 hover:text-[#c2f500] transition-colors relative">
              <div className="relative">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-[#c2f500] text-[#0d0d0d] text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  0
                </span>
              </div>
              <span>Winkelwagen</span>
            </button>
          </div>
        </div>

        {/* Nav */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {[
              "Alle producten",
              "Eiwitten",
              "Pre-workout",
              "Creatine",
              "Vitamines",
              "Maaltijdvervangers",
              "Snacks",
              "Aanbiedingen",
            ].map((item, i) => (
              <button
                key={item}
                className={`whitespace-nowrap text-sm py-3 px-4 transition-colors border-b-2 ${
                  i === 0
                    ? "text-[#c2f500] border-[#c2f500] font-bold"
                    : "text-white/50 border-transparent hover:text-white hover:border-white/20"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
