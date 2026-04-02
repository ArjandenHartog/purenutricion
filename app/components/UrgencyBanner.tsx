"use client";

import { useState, useEffect } from "react";

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function UrgencyBanner() {
  const [seconds, setSeconds] = useState<number | null>(null);

  useEffect(() => {
    // Start tussen 1u20 en 2u30 — ziet er "toevallig" uit
    setSeconds(randomBetween(4800, 9000));
  }, []);

  useEffect(() => {
    if (seconds === null) return;
    if (seconds <= 0) {
      setSeconds(randomBetween(4800, 9000));
      return;
    }
    const timer = setInterval(() => setSeconds((s) => (s ?? 1) - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const fmt = (n: number) => String(n).padStart(2, "0");
  const h = seconds !== null ? Math.floor(seconds / 3600) : 0;
  const m = seconds !== null ? Math.floor((seconds % 3600) / 60) : 0;
  const s = seconds !== null ? seconds % 60 : 0;

  return (
    <div className="bg-[#c2f500] text-[#0d0d0d] py-2 px-4">
      <p className="text-center text-[11px] font-black uppercase tracking-widest">
        ⚡ FLASH DEAL — 20% EXTRA KORTING — Eindigt over{" "}
        <span className="font-mono tabular-nums">
          {fmt(h)}:{fmt(m)}:{fmt(s)}
        </span>{" "}
        · Gratis verzending vanaf €25
      </p>
    </div>
  );
}
