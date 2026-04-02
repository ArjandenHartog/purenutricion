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
      <svg viewBox="0 0 190 70" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="#004682" points="178.9,50.1 178.9,44.4 188.1,44.4 188.1,39.6 178.9,39.6 178.9,34.4 188.8,34.4 188.8,29.7 172.2,29.7 172.2,54.8 188.9,54.8 188.9,50.1"/>
        <rect x="150.1" y="29.7" fill="#004682" width="6.7" height="25.2"/>
        <polygon fill="#004682" points="118.9,34.6 125.1,34.6 125.1,54.8 131.8,54.8 131.8,34.6 138,34.6 138,29.7 118.9,29.7"/>
        <rect x="100.1" y="29.7" fill="#004682" width="6.7" height="25.2"/>
        <polygon fill="#004682" points="79.8,29.7 73.1,29.7 73.1,54.8 89.3,54.8 89.3,49.9 79.8,49.9"/>
        <path fill="#004682" d="M9.5,44.1l-1.7,0v-9.7h1.7c2.3,0,4.4,2.2,4.4,4.8C13.9,41.9,11.9,44.1,9.5,44.1 M9.1,29.7h-8v25.2h6.7v-5.6l2,0c6.7,0.2,10.7-4.7,10.6-9.9C20.3,33.6,16.8,29.7,9.1,29.7"/>
        <path fill="#004682" d="M51,50.9c0.9,1.2,1.4,2.7,1.4,4.2c0,4-3.2,7.2-7.2,7.2s-7.2-3.2-7.2-7.2c0-1.6,0.5-3,1.4-4.2l-5.2-4.3c-1.8,2.4-2.9,5.3-2.9,8.5c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14c0-3.2-1.1-6.2-2.9-8.6L51,50.9z"/>
        <path fill="#BE965A" d="M44.3,37.6c-0.4-1.3-0.6-1.8-0.6-3.5c0-3.3,3.5-6,3.5-6c2.4-2.1,4-4,4.3-5.9c0.3-1.8-0.5-4.2-0.5-4.2c0.9,0.3,1.3,0.6,1.7,1.1c0.4,0.4,0.8,1.1,0.8,1.1c0.5-1.6,0.4-2.8,0.1-3.9c-0.3-1.2-0.8-2.3-2-3.4c-1.4-1.2-2.5-1.5-2.5-1.5c0.3,0.6,0.5,1.5,0.4,3.3c-0.2,1.8-0.6,2.9-1.9,4.5c-1.1,1.6-3.5,3.4-4.8,5.3c-1.3,1.7-1.8,3.3-1.9,4.7c-0.1,2.1,0.7,4.3,0.7,4.3c-0.8-0.5-1.8-1.3-2.4-2.5c-0.7-1.3-1-2.5-1.1-4.7c0-1.9,0.7-4.7,2.2-6.6c1.1-1.3,3.7-3.9,4.7-5.9c1-2,0.8-3.1,0.8-3.9s-0.4-2-0.4-2C46,7.9,46.8,8.4,47,8.7c0.4,0.4,0.8,0.7,0.8,0.7c0.1-0.6,0.2-1.7-0.1-3.1C47.3,4.2,46.3,3,44.9,2c-1.5-1.2-2.8-1.1-2.8-1.1c0.6,0.8,1,1.6,1.2,2.8c0.2,1.2,0.2,2.5-0.4,4c-0.7,1.7-2.7,3.2-4.2,4.7c-1.5,1.5-2.8,3-3.8,5.1c-1.2,2.5-1.3,4.4-0.9,6.9c0.5,2.9,2.1,4.7,2.1,4.7c-1.2-0.4-2.2-1.2-2.9-1.9c-0.7-0.8-1.1-1.6-1.4-2.3l-7.8,5.3l0,8l21,17.7l21.1-17.7v-2.7L45.2,53v-2.7l20.9-17.5v-2.4l-11.5-7.6c0.2,0.8,0.4,2.7-0.7,5c-1.4,2.9-4.8,5.3-5.9,5.9c-1.3,0.8-2,1.6-2.2,2.4c-0.1,0.4-0.3,1-0.1,1.7l0,0c1.4,0.3,2.5,1.5,2.5,3.1c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2C41.7,39.2,42.8,37.9,44.3,37.6L44.3,37.6z"/>
      </svg>
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
