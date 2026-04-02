"use client";

import { useCart } from "../context/CartContext";

export default function CartModal() {
  const { items, removeItem, totalCount, isCartOpen, closeCart, openFraud } =
    useCart();

  const total = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col border-l border-black/5">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/5">
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-[#c2f500]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <h2 className="text-sm font-black text-[#111111] uppercase tracking-widest">
              Winkelwagen
              <span className="ml-2 text-[#c2f500]">({totalCount})</span>
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center border border-black/10 hover:border-[#c2f500] hover:text-[#c2f500] text-[#111111]/40 transition-colors"
            aria-label="Sluiten"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
            <div className="w-16 h-16 border border-black/5 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#111111]/10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-[#111111]/40 uppercase tracking-widest">Winkelwagen leeg</p>
            <button
              onClick={closeCart}
              className="mt-1 text-xs text-[#c2f500] hover:text-[#111111] transition-colors font-bold uppercase tracking-widest"
            >
              Verder winkelen
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-px bg-[#f5f5f5]">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-start gap-3 bg-white p-3 border border-black/5"
                >
                  {/* Product icon placeholder */}
                  <div className="w-12 h-12 bg-[#f5f5f5] border border-black/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#111111]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-[#c2f500] uppercase tracking-widest font-bold mb-0.5">{product.brand}</p>
                    <p className="text-sm font-bold text-[#111111] leading-snug line-clamp-2">
                      {product.name}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black text-[#111111]">
                        €{(product.price * quantity).toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-xs text-[#111111]/30 font-bold">x{quantity}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="shrink-0 w-7 h-7 flex items-center justify-center border border-black/5 hover:border-red-300 text-[#111111]/20 hover:text-red-400 transition-colors"
                    aria-label="Verwijderen"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-black/5 bg-white space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#111111]/40 uppercase tracking-widest">Subtotaal</span>
                <span className="text-sm font-bold text-[#111111]">
                  €{total.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#111111]/40 uppercase tracking-widest">Verzendkosten</span>
                <span className="text-sm font-bold text-[#c2f500]">
                  {total >= 25 ? "Gratis" : "€4,95"}
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-black/5">
                <span className="text-xs font-black text-[#111111] uppercase tracking-widest">Totaal</span>
                <span className="text-xl font-black text-[#111111]">
                  €{(total >= 25 ? total : total + 4.95).toFixed(2).replace(".", ",")}
                </span>
              </div>
              <button
                onClick={() => {
                  closeCart();
                  openFraud();
                }}
                className="w-full bg-[#c2f500] hover:bg-[#d4ff00] active:scale-[.98] transition-all text-[#0d0d0d] font-black py-4 text-sm uppercase tracking-widest"
              >
                Bestellen
              </button>
              <p className="text-center text-xs text-[#111111]/20 uppercase tracking-widest">
                Veilig betalen · iDEAL · Visa · Mastercard
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
