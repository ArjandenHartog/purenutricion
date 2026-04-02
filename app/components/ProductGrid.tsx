"use client";

import { getProductsByCategory, Product } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductIcon({ category }: { category: Product["category"] }) {
  if (category === "shakes") {
    return (
      <svg className="w-12 h-12 text-[#111111]/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 0 1 .45 1.328V19.5a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25v-3.172a2.25 2.25 0 0 1 .45-1.328L5 14.5m14.8.5-3.2-3.2M5 14.5l3.45-3.45" />
      </svg>
    );
  }
  if (category === "snacks") {
    return (
      <svg className="w-12 h-12 text-[#111111]/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    );
  }
  if (category === "sport") {
    return (
      <svg className="w-12 h-12 text-[#111111]/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    );
  }
  // supplements (default)
  return (
    <svg className="w-12 h-12 text-[#111111]/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
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

export default function ProductGrid({ title, category }: Props) {
  const products = getProductsByCategory(category);
  const displayed = products.slice(0, 4);
  const { addItem } = useCart();

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
        {displayed.map((product) => (
          <div
            key={product.id}
            className="bg-white overflow-hidden hover:bg-[#fafafa] transition-colors cursor-pointer group"
          >
            {/* Image area */}
            <div className="bg-[#f5f5f5] h-44 flex items-center justify-center relative border-b border-black/5">
              <ProductIcon category={product.category} />
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
        ))}
      </div>
    </section>
  );
}
