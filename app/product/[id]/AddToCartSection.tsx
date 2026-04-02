"use client";

import { useState } from "react";
import { Product } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function AddToCartSection({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors?.[0] ?? null);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAdd() {
    for (let i = 0; i < qty; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="space-y-5">
      {/* Flavor selector */}
      {product.flavors && product.flavors.length > 0 && (
        <div>
          <p className="text-xs font-bold text-[#111111] uppercase tracking-widest mb-2">
            Smaak: <span className="text-[#c2f500]">{selectedFlavor}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.flavors.map((flavor) => (
              <button
                key={flavor}
                onClick={() => setSelectedFlavor(flavor)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide border transition-colors ${
                  selectedFlavor === flavor
                    ? "bg-[#c2f500] text-[#0d0d0d] border-[#c2f500]"
                    : "bg-white text-[#111111]/60 border-black/15 hover:border-black/30"
                }`}
              >
                {flavor}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <p className="text-xs font-bold text-[#111111] uppercase tracking-widest mb-2">Aantal</p>
        <div className="flex items-center gap-0">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-10 h-10 border border-black/15 flex items-center justify-center text-[#111111]/60 hover:bg-black/5 transition-colors font-bold text-lg"
          >
            −
          </button>
          <span className="w-12 h-10 border-y border-black/15 flex items-center justify-center text-sm font-black text-[#111111]">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-10 h-10 border border-black/15 flex items-center justify-center text-[#111111]/60 hover:bg-black/5 transition-colors font-bold text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        className={`w-full py-4 font-black text-sm uppercase tracking-wider transition-colors ${
          added
            ? "bg-[#111111] text-white"
            : "bg-[#c2f500] text-[#0d0d0d] hover:bg-[#d4ff00]"
        }`}
      >
        {added ? "✓ Toegevoegd aan winkelwagen" : "In winkelwagen"}
      </button>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-3 pt-2 border-t border-black/5">
        {[
          { icon: "🚚", label: "Gratis verzending", sub: "Vanaf €40" },
          { icon: "↩", label: "30 dagen retour", sub: "Zonder gedoe" },
          { icon: "🔒", label: "Veilig betalen", sub: "iDEAL & Klarna" },
        ].map((badge) => (
          <div key={badge.label} className="text-center">
            <div className="text-lg mb-1">{badge.icon}</div>
            <div className="text-[10px] font-bold text-[#111111] uppercase tracking-wide leading-tight">{badge.label}</div>
            <div className="text-[10px] text-[#111111]/40">{badge.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
