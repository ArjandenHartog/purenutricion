"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= Math.round(rating) ? "text-[#c2f500]" : "text-[#111111]/10"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type Props = {
  title: string;
  category: string;
};

// Per-product urgentie stats, gegenereerd client-side om hydration mismatches te vermijden
type ProductStats = { viewers: number; stock: number };

function useProductStats(count: number) {
  const [stats, setStats] = useState<ProductStats[]>([]);

  useEffect(() => {
    setStats(
      Array.from({ length: count }, () => ({
        viewers: randomBetween(11, 48),
        stock: randomBetween(2, 9),
      }))
    );

    // Viewers fluctueren elke 8-15 seconden
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((s) => ({
          ...s,
          viewers: Math.max(8, s.viewers + randomBetween(-3, 3)),
        }))
      );
    }, randomBetween(8000, 15000));

    return () => clearInterval(interval);
  }, [count]);

  return stats;
}

export default function ProductGrid({ title, category }: Props) {
  const products = getProductsByCategory(category);
  const displayed = products.slice(0, 4);
  const { addItem } = useCart();
  const productStats = useProductStats(displayed.length);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black text-[#111111] uppercase tracking-tight">{title}</h2>
        <button className="text-[#c2f500] text-xs font-bold uppercase tracking-widest hover:text-[#111111] transition-colors flex items-center gap-1">
          Bekijk alles
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5">
        {displayed.map((product, i) => {
          const stats = productStats[i];
          return (
          <div
            key={product.id}
            className="bg-white overflow-hidden hover:bg-[#fafafa] transition-colors cursor-pointer group"
          >
            {/* Image area */}
            <div className="bg-[#f5f5f5] h-44 relative border-b border-black/5 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-[#c2f500] text-[#0d0d0d] text-[10px] font-black uppercase tracking-wider px-2 py-0.5">
                  {product.badge}
                </span>
              )}
              <button className="absolute top-3 right-3 w-7 h-7 bg-white border border-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-[#c2f500] hover:text-[#c2f500] text-[#111111]/40">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-[10px] text-[#c2f500] uppercase tracking-widest font-bold mb-1">{product.brand}</p>
              <h3 className="text-sm font-bold text-[#111111] leading-tight mb-1 line-clamp-2">{product.name}</h3>
              <p className="text-xs text-[#111111]/30 mb-3 line-clamp-1">{product.description}</p>

              <div className="flex items-center gap-1.5 mb-3">
                <StarRating rating={product.rating} />
                <span className="text-xs text-[#111111]/30">({product.reviewCount.toLocaleString("nl")})</span>
              </div>

              {/* Urgentie labels */}
              {stats && (
                <div className="space-y-1 mb-3">
                  {/* Kijkers */}
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c2f500] animate-pulse" />
                    <span className="text-[10px] text-[#111111]/50 font-bold">
                      {stats.viewers} mensen bekijken dit nu
                    </span>
                  </div>
                  {/* Voorraad */}
                  {stats.stock <= 5 && (
                    <p className="text-[10px] font-black text-red-500 uppercase tracking-wide">
                      ⚠ Nog maar {stats.stock} op voorraad!
                    </p>
                  )}
                </div>
              )}

              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-black text-[#111111]">
                      €{product.price.toFixed(2).replace(".", ",")}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#111111]/25 line-through">
                        €{product.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => addItem(product)}
                  className="bg-[#c2f500] hover:bg-[#d4ff00] transition-colors text-[#0d0d0d] w-9 h-9 flex items-center justify-center shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
