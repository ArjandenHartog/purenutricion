"use client";

import { useState } from "react";
import { Product } from "../../data/products";

const categoryLabels: Record<Product["category"], string> = {
  shakes: "Maaltijdshakes",
  supplements: "Supplementen",
  snacks: "Snacks",
  sport: "Sport",
};

export default function ProductTabs({ product }: { product: Product }) {
  const [tab, setTab] = useState<"beschrijving" | "voedingswaarden" | "reviews">("beschrijving");

  const tabs = [
    { id: "beschrijving", label: "Beschrijving" },
    { id: "voedingswaarden", label: "Voedingswaarden" },
    { id: "reviews", label: `Reviews (${product.reviewCount.toLocaleString("nl")})` },
  ] as const;

  return (
    <div>
      {/* Tab nav */}
      <div className="flex border-b border-black/10">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-6 py-3 text-xs font-black uppercase tracking-widest transition-colors border-b-2 -mb-px ${
              tab === t.id
                ? "border-[#c2f500] text-[#111111]"
                : "border-transparent text-[#111111]/40 hover:text-[#111111]/70"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="py-8">
        {tab === "beschrijving" && (
          <div className="max-w-2xl space-y-6">
            <p className="text-[#111111]/70 leading-relaxed">{product.description}.</p>
            {product.features && (
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 rounded-full bg-[#c2f500] flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="#0d0d0d" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-sm text-[#111111]/80">{f}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-black/5">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#111111]/30 mb-1">Categorie</p>
                <p className="text-sm font-bold text-[#111111]">{categoryLabels[product.category]}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#111111]/30 mb-1">Merk</p>
                <p className="text-sm font-bold text-[#111111]">{product.brand}</p>
              </div>
              {product.weight && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#111111]/30 mb-1">Inhoud</p>
                  <p className="text-sm font-bold text-[#111111]">{product.weight}</p>
                </div>
              )}
              {product.servings && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#111111]/30 mb-1">Porties</p>
                  <p className="text-sm font-bold text-[#111111]">{product.servings} stuks</p>
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "voedingswaarden" && (
          <div className="max-w-md">
            <p className="text-xs text-[#111111]/40 uppercase tracking-widest mb-4">
              Voedingswaarden per portie (indicatief)
            </p>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-black/5">
                {[
                  { label: "Energie", value: product.category === "shakes" ? "230 kcal" : product.category === "snacks" ? "210 kcal" : "15 kcal" },
                  { label: "Eiwitten", value: product.category === "shakes" ? "20g" : product.category === "snacks" ? "20g" : product.category === "supplements" ? "0g" : "—" },
                  { label: "Koolhydraten", value: product.category === "shakes" ? "24g" : product.category === "snacks" ? "22g" : "1g" },
                  { label: "waarvan suikers", value: product.category === "shakes" ? "8g" : product.category === "snacks" ? "3g" : "0g" },
                  { label: "Vetten", value: product.category === "shakes" ? "6g" : product.category === "snacks" ? "7g" : "1g" },
                  { label: "waarvan verzadigd", value: product.category === "shakes" ? "2g" : "2g" },
                  { label: "Vezels", value: product.category === "shakes" ? "5g" : product.category === "snacks" ? "4g" : "0g" },
                  { label: "Zout", value: "0,3g" },
                ].map((row) => (
                  <tr key={row.label}>
                    <td className="py-2 text-[#111111]/60">{row.label}</td>
                    <td className="py-2 font-bold text-[#111111] text-right">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[10px] text-[#111111]/30 mt-4">
              * Voedingswaarden zijn indicatief. Raadpleeg de verpakking voor exacte informatie.
            </p>
          </div>
        )}

        {tab === "reviews" && (
          <div className="max-w-2xl space-y-5">
            {[
              { name: "Sanne V.", rating: 5, date: "12 mrt 2026", text: "Geweldig product! Merk echt dat ik meer energie heb en minder snel honger. Aanrader voor iedereen die serieus bezig is met afvallen." },
              { name: "Lars de B.", rating: 4, date: "2 feb 2026", text: "Goede kwaliteit en snel geleverd. De smaak is prima, al had ik hem iets zoeter gewild. Zou het opnieuw bestellen." },
              { name: "Marieke T.", rating: 5, date: "18 jan 2026", text: "Al jarenlang klant en dit is weer een topper. Makkelijk in gebruik en het werkt gewoon. Top service ook van Pure Nutricion!" },
            ].map((review) => (
              <div key={review.name} className="border border-black/5 p-5 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#c2f500] flex items-center justify-center font-black text-xs text-[#0d0d0d]">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#111111]">{review.name}</p>
                      <p className="text-[10px] text-[#111111]/30">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className={`w-3 h-3 ${s <= review.rating ? "text-[#c2f500]" : "text-black/10"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#111111]/70 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
