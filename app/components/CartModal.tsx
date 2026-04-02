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
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-[#0000a4] text-white">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <h2 className="text-base font-bold">Winkelwagen ({totalCount})</h2>
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
            aria-label="Sluiten"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-gray-400 p-8">
            <svg className="w-16 h-16 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <p className="font-medium text-gray-500">Je winkelwagen is leeg</p>
            <button
              onClick={closeCart}
              className="mt-2 text-sm text-[#0000a4] hover:underline font-semibold"
            >
              Verder winkelen
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400 mb-0.5">{product.brand}</p>
                    <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                      {product.name}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-bold text-gray-900">
                        €{(product.price * quantity).toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-xs text-gray-400">x{quantity}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-50 text-gray-300 hover:text-red-400 transition-colors"
                    aria-label="Verwijderen"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-white space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Subtotaal</span>
                <span className="text-sm text-gray-800">
                  €{total.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Verzendkosten</span>
                <span className="text-sm text-green-600 font-semibold">
                  {total >= 25 ? "Gratis" : "€4,95"}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="font-bold text-gray-800">Totaal</span>
                <span className="font-bold text-xl text-gray-900">
                  €{(total >= 25 ? total : total + 4.95).toFixed(2).replace(".", ",")}
                </span>
              </div>
              <button
                onClick={() => {
                  closeCart();
                  openFraud();
                }}
                className="w-full bg-[#0000a4] hover:bg-[#0000c4] active:scale-[.98] transition-all text-white font-bold py-3.5 rounded-full text-base shadow-md"
              >
                Bestellen
              </button>
              <p className="text-center text-xs text-gray-400">
                Veilig betalen met iDEAL, Visa, Mastercard
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
