"use client";

import { useCart } from "../context/CartContext";

export default function FloatingCartButton() {
  const { totalCount, openCart } = useCart();

  if (totalCount === 0) return null;

  return (
    <button
      onClick={openCart}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#c2f500] text-[#0d0d0d] font-bold px-4 py-3 rounded-full shadow-lg hover:bg-[#aedd00] active:scale-95 transition-all"
      aria-label="Open winkelwagen"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span>{totalCount} {totalCount === 1 ? "item" : "items"}</span>
    </button>
  );
}
