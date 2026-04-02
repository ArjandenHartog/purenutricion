"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

const tips = [
  {
    num: "1/5",
    text: "Check weetwaarjekoopt.nl of bekijk de slider.",
  },
  {
    num: "2/5",
    text: "Controleer de reviews op onder andere Trustpilot.",
  },
  {
    num: "3/5",
    text: "Check de verkoper op politie.nl",
  },
  {
    num: "4/5",
    text: "Bescherm je gegevens: deel nooit zomaar je bankgegevens met een onbekende webshop.",
  },
  {
    num: "5/5",
    text: "Koop je via Marktplaats? Lees de tips op marktplaats.nl/veiligkopen.",
  },
];

function PolitieLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-[#154273] flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="white">
          <polygon points="20,3 37,12 37,28 20,37 3,28 3,12" fill="#154273" stroke="white" strokeWidth="1.5" />
          <polygon points="20,7 33,14 33,26 20,33 7,26 7,14" fill="#1a5296" />
          <text x="20" y="24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="sans-serif">NL</text>
        </svg>
      </div>
      <span className="text-[10px] font-black text-[#154273] mt-1 tracking-widest uppercase">Politie</span>
    </div>
  );
}

function FraudehelpdeskLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 bg-[#2e7d32] flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
          <path d="M12 20l6 6 10-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-[10px] font-black text-[#2e7d32] mt-1 tracking-widest uppercase text-center leading-tight">Fraude<br/>helpdesk</span>
    </div>
  );
}

export default function FraudRevealModal() {
  const { isFraudOpen, closeFraud } = useCart();
  const [tipIndex, setTipIndex] = useState(0);

  if (!isFraudOpen) return null;

  const currentTip = tips[tipIndex];

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#f9f9f9]">
      {/* Top bar in Pure Nutrition stijl */}
      <div className="bg-[#c2f500] py-2">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="text-[#0d0d0d] text-xs font-black uppercase tracking-widest">
            Bewustmakingsactie · Politie &amp; Fraudehelpdesk
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10 pb-20">

        {/* Logos */}
        <div className="flex items-center justify-center gap-10 mb-10">
          <PolitieLogo />
          <div className="w-px h-12 bg-black/10" />
          <FraudehelpdeskLogo />
        </div>

        {/* Main message */}
        <div className="mb-10">
          <p className="text-[10px] text-[#c2f500] uppercase tracking-widest font-black mb-2">Let op</p>
          <h1 className="text-4xl font-black text-[#111111] uppercase tracking-tight leading-none mb-4">
            Ai&hellip; je trapte er<br />(bijna) in.
          </h1>
          <p className="text-[#111111]/60 leading-relaxed">
            Dit is geen echte website, maar een bewustmakingsactie van de politie
            en de Fraudehelpdesk. Goed dat je het nu weet! Lees verder hoe je dit
            in het vervolg kan voorkomen.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-px bg-black/10 mb-10">
          <div className="bg-[#0d0d0d] text-white p-6 text-center">
            <p className="text-[10px] uppercase tracking-widest text-white/50 mb-3">
              Jaarlijks ontvangt de politie zo&apos;n
            </p>
            <p className="text-5xl font-black text-[#c2f500] my-2">50.000</p>
            <p className="text-xs text-white/70 uppercase tracking-wide">aangiftes van online oplichting</p>
          </div>
          <div className="bg-white p-6 text-center">
            <p className="text-[10px] uppercase tracking-widest text-[#111111]/40 mb-3">
              Voedingssupplementen
            </p>
            <p className="text-5xl font-black text-[#111111] my-2">10%</p>
            <p className="text-xs text-[#111111]/50 uppercase tracking-wide">
              van shoppers trapt in nepwebshops
            </p>
          </div>
        </div>

        {/* What happened */}
        <div className="border-l-4 border-[#c2f500] bg-white p-5 mb-4">
          <h2 className="text-sm font-black text-[#111111] uppercase tracking-tight mb-2">
            Wat is er net gebeurd?
          </h2>
          <p className="text-sm text-[#111111]/60 leading-relaxed">
            Omdat we zien hoe slim en overtuigend oplichters te werk gaan, hebben
            we deze nepwebsite opgezet. Niet om te misleiden, maar om je bewust te
            maken. Want dit kan iedereen overkomen, ook jou.
          </p>
        </div>

        {/* How fraudsters work */}
        <div className="border-l-4 border-red-500 bg-white p-5 mb-4">
          <h2 className="text-sm font-black text-[#111111] uppercase tracking-tight mb-2">
            Hoe gaan oplichters te werk?
          </h2>
          <p className="text-sm text-[#111111]/60 leading-relaxed">
            Oplichters spelen slim in op schaarste en haast: dat ene product lijkt
            ineens tóch beschikbaar voor een spotprijs. Je wilt snel toeslaan, en
            juist dát moment gebruiken zij om toe te slaan.
          </p>
        </div>

        {/* Tips slider */}
        <div className="bg-white p-5 mb-4 border border-black/5">
          <h2 className="text-sm font-black text-[#111111] uppercase tracking-tight mb-4">
            Hoe kun je oplichting zo veel mogelijk voorkomen?
          </h2>

          <div className="bg-[#f5f5f5] p-4 min-h-[72px] flex items-center mb-4">
            <p className="text-sm text-[#111111]/80 leading-relaxed">
              {currentTip.text}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setTipIndex((i) => Math.max(0, i - 1))}
              disabled={tipIndex === 0}
              className="w-9 h-9 bg-[#0d0d0d] text-white flex items-center justify-center disabled:opacity-20 hover:bg-[#c2f500] hover:text-[#0d0d0d] transition-colors"
              aria-label="Vorige tip"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <span className="text-xs font-black text-[#111111]/40 tracking-widest uppercase">
              {currentTip.num}
            </span>
            <button
              onClick={() => setTipIndex((i) => Math.min(tips.length - 1, i + 1))}
              disabled={tipIndex === tips.length - 1}
              className="w-9 h-9 bg-[#0d0d0d] text-white flex items-center justify-center disabled:opacity-20 hover:bg-[#c2f500] hover:text-[#0d0d0d] transition-colors"
              aria-label="Volgende tip"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {tips.map((_, i) => (
              <button
                key={i}
                onClick={() => setTipIndex(i)}
                className={`w-2 h-2 transition-colors ${
                  i === tipIndex ? "bg-[#c2f500]" : "bg-black/15"
                }`}
                aria-label={`Tip ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Toch opgelicht */}
        <div className="bg-[#0d0d0d] text-white p-6 mb-8">
          <h2 className="text-sm font-black uppercase tracking-tight mb-1">Toch opgelicht?</h2>
          <p className="text-xs text-white/50 uppercase tracking-widest mb-4">Onderneem actie</p>
          <p className="text-sm text-white/70 leading-relaxed mb-5">
            Lees en volg de stappen op de website van politie.nl en ontdek hoe je
            betrouwbare webshops herkent via fraudehelpdesk.nl.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.politie.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c2f500] text-[#0d0d0d] font-black px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#d4ff00] transition-colors text-center"
            >
              Naar politie.nl
            </a>
            <a
              href="https://www.fraudehelpdesk.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 text-white font-black px-6 py-3 text-xs uppercase tracking-widest hover:bg-white/10 transition-colors text-center"
            >
              fraudehelpdesk.nl
            </a>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={closeFraud}
          className="w-full border border-black/10 text-[#111111]/50 font-bold py-3 text-xs uppercase tracking-widest hover:border-[#c2f500] hover:text-[#111111] transition-colors"
        >
          Sluiten en terug naar de site
        </button>

      </div>
    </div>
  );
}
