"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

const tips = [
  {
    num: "1/5",
    text: 'Check weetwaarjekoopt.nl of bekijk de slider.',
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
    text: "Bescherm je ticket: deel nooit een afbeelding van je ticket met barcode.",
  },
  {
    num: "5/5",
    text: "Koop je via Marktplaats? Lees tips",
  },
];

function PolitieLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-[#154273] rounded-full flex items-center justify-center shadow-md">
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="white">
          <polygon points="20,3 37,12 37,28 20,37 3,28 3,12" fill="#154273" stroke="white" strokeWidth="1.5" />
          <polygon points="20,7 33,14 33,26 20,33 7,26 7,14" fill="#1a5296" />
          <text x="20" y="24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="sans-serif">NL</text>
        </svg>
      </div>
      <span className="text-xs font-bold text-[#154273] mt-1 tracking-wide">POLITIE</span>
    </div>
  );
}

function FraudehelpdeskLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center shadow-md border-2 border-[#2e7d32]">
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <circle cx="20" cy="20" r="17" fill="#2e7d32" />
          <path d="M12 20l6 6 10-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-xs font-bold text-[#2e7d32] mt-1 tracking-wide text-center leading-tight">FRAUDE<br/>HELPDESK</span>
    </div>
  );
}

export default function FraudRevealModal() {
  const { isFraudOpen, closeFraud } = useCart();
  const [tipIndex, setTipIndex] = useState(0);

  if (!isFraudOpen) return null;

  const currentTip = tips[tipIndex];

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8 pb-16">

        {/* Logos */}
        <div className="flex items-center justify-center gap-10 mb-8">
          <PolitieLogo />
          <FraudehelpdeskLogo />
        </div>

        {/* Main message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 mb-3">
            Ai&hellip; je trapte er (bijna) in.
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
            Dit is geen echte website, maar een bewustmakingsactie van de politie
            en de Fraudehelpdesk. Goed dat je het nu weet! Lees verder hoe je dit
            in het vervolg kan voorkomen.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-[#154273] text-white rounded-2xl p-5 text-center">
            <p className="text-xs uppercase tracking-wider opacity-80 mb-1">
              Jaarlijks ontvangt de politie zo&apos;n
            </p>
            <p className="text-5xl font-black my-2">50.000</p>
            <p className="text-sm opacity-90">aangiftes van online oplichting.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-5 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
              Concert ticket
            </p>
            <p className="text-5xl font-black text-[#154273] my-2">10%</p>
            <p className="text-sm text-gray-600">
              gaat over tot aankoop van tickets.
            </p>
          </div>
        </div>

        {/* What happened */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Wat is er net gebeurd?
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Omdat we zien hoe slim en overtuigend oplichters te werk gaan, hebben
            we deze nepwebsite opgezet. Niet om te misleiden, maar om je bewust te
            maken. Want dit kan iedereen overkomen, ook jou.
          </p>
        </div>

        {/* How do fraudsters work */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Hoe gaan oplichters te werk?
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Oplichters spelen slim: dat ene felbegeerde kaartje lijkt ineens
            tóch beschikbaar. Je wilt snel toeslaan, en juist dát moment
            gebruiken zij om toe te slaan.
          </p>
        </div>

        {/* Prevention tips slider */}
        <div className="bg-[#f0f4ff] border border-[#c7d3f0] rounded-2xl p-5 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Hoe kun je oplichting zo veel mogelijk voorkomen?
          </h2>
          <div className="bg-white rounded-xl p-4 min-h-[80px] flex items-center mb-4 shadow-sm">
            <p className="text-sm text-gray-800 leading-relaxed">
              {currentTip.text}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setTipIndex((i) => Math.max(0, i - 1))}
              disabled={tipIndex === 0}
              className="w-9 h-9 rounded-full bg-[#154273] text-white flex items-center justify-center disabled:opacity-30 hover:bg-[#1a5296] transition-colors"
              aria-label="Vorige tip"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <span className="text-sm font-semibold text-[#154273]">
              {currentTip.num}
            </span>
            <button
              onClick={() => setTipIndex((i) => Math.min(tips.length - 1, i + 1))}
              disabled={tipIndex === tips.length - 1}
              className="w-9 h-9 rounded-full bg-[#154273] text-white flex items-center justify-center disabled:opacity-30 hover:bg-[#1a5296] transition-colors"
              aria-label="Volgende tip"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-3">
            {tips.map((_, i) => (
              <button
                key={i}
                onClick={() => setTipIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === tipIndex ? "bg-[#154273]" : "bg-gray-300"
                }`}
                aria-label={`Tip ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Toch opgelicht */}
        <div className="bg-[#154273] text-white rounded-2xl p-5 mb-8 text-center">
          <h2 className="text-lg font-bold mb-2">Toch opgelicht?</h2>
          <p className="text-sm opacity-90 mb-4 leading-relaxed">
            Lees en volg de stappen op de website van politie.nl en ontdek hoe je
            betrouwbare webshops herkent via fraudehelpdesk.nl.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.politie.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#154273] font-bold px-6 py-2.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Naar politie.nl
            </a>
            <a
              href="https://www.fraudehelpdesk.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors border border-white/40"
            >
              fraudehelpdesk.nl
            </a>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={closeFraud}
          className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-full hover:bg-gray-50 transition-colors text-sm"
        >
          Sluiten en terug naar de site
        </button>
      </div>
    </div>
  );
}
