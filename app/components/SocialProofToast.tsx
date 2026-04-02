"use client";

import { useState, useEffect } from "react";

const NAMES = [
  "Lisa", "Daan", "Emma", "Finn", "Noor", "Luca", "Sara", "Tim",
  "Isa", "Bram", "Roos", "Max", "Eline", "Jasper", "Fleur", "Niels",
];

const CITIES = [
  "Amsterdam", "Rotterdam", "Utrecht", "Den Haag", "Eindhoven",
  "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen", "Leiden",
];

const PRODUCTS = [
  "Whey Protein Chocolade",
  "Creatine Monohydraat",
  "Pre-Workout Tropical",
  "BCAA Recovery Mix",
  "Omega-3 Capsules",
  "Multivitamine Sport",
  "Maaltijdshake Vanille",
  "Collageen Peptiden",
];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNotification() {
  return {
    name: randomFrom(NAMES),
    city: randomFrom(CITIES),
    product: randomFrom(PRODUCTS),
    minutesAgo: randomBetween(1, 12),
    id: Math.random(),
  };
}

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState(generateNotification);

  useEffect(() => {
    // Eerste toast na 4-8 seconden
    const initialDelay = randomBetween(4000, 8000);

    const show = () => {
      setNotification(generateNotification());
      setVisible(true);

      // Verberg na 5 seconden
      const hideTimer = setTimeout(() => {
        setVisible(false);

        // Volgende toast na 12-25 seconden
        const nextDelay = randomBetween(12000, 25000);
        const nextTimer = setTimeout(show, nextDelay);
        return () => clearTimeout(nextTimer);
      }, 5000);

      return () => clearTimeout(hideTimer);
    };

    const firstTimer = setTimeout(show, initialDelay);
    return () => clearTimeout(firstTimer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-4 z-50 max-w-[280px] bg-white border border-black/10 shadow-xl p-3 flex items-start gap-3 animate-in slide-in-from-bottom-4 duration-300">
      {/* Groen bolletje */}
      <div className="shrink-0 mt-0.5 w-8 h-8 bg-[#c2f500] flex items-center justify-center">
        <svg className="w-4 h-4 text-[#0d0d0d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-black text-[#111111] uppercase tracking-tight">
          {notification.name} uit {notification.city}
        </p>
        <p className="text-[11px] text-[#111111]/60 leading-snug mt-0.5">
          kocht zojuist <span className="font-bold text-[#111111]">{notification.product}</span>
        </p>
        <p className="text-[10px] text-[#111111]/30 mt-1 uppercase tracking-widest">
          {notification.minutesAgo} minuten geleden
        </p>
      </div>

      <div className="shrink-0 w-2 h-2 rounded-full bg-[#c2f500] mt-1 animate-pulse" />
    </div>
  );
}
