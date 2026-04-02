const promos = [
  {
    title: "Tot 20% korting",
    subtitle: "Op maaltijdvervangers",
    badge: "Korting",
    accent: "#c2f500",
    badgeText: "#0d0d0d",
  },
  {
    title: "Gratis shaker",
    subtitle: "Bij aankoop vanaf €50",
    badge: "Actie",
    accent: "#111111",
    badgeText: "#ffffff",
  },
  {
    title: "2+1 gratis",
    subtitle: "Op alle eiwitpoeders",
    badge: "2+1",
    accent: "#c2f500",
    badgeText: "#0d0d0d",
  },
  {
    title: "Nieuw: Creatine HCL",
    subtitle: "Maximale opname, minimale dosis",
    badge: "Nieuw",
    accent: "#111111",
    badgeText: "#ffffff",
  },
];

export default function PromoCards() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5">
        {promos.map((promo) => (
          <div
            key={promo.title}
            className="bg-white p-5 cursor-pointer hover:bg-[#f5f5f5] transition-colors group relative overflow-hidden"
          >
            <span
              className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 mb-3 inline-block"
              style={{ color: promo.badgeText, backgroundColor: promo.accent }}
            >
              {promo.badge}
            </span>
            <p className="font-black text-[#111111] text-base leading-tight uppercase">{promo.title}</p>
            <p className="text-[#111111]/40 text-xs mt-1">{promo.subtitle}</p>
            <div className="mt-4 flex items-center gap-1 text-[#c2f500] text-xs font-bold uppercase tracking-wider">
              <span>Bekijk</span>
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
