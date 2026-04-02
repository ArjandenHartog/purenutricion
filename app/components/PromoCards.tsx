const promos = [
  {
    title: "Tot 20% korting",
    subtitle: "op maaltijdvervangers",
    badge: "Korting*",
    badgeColor: "bg-red-600",
    bg: "bg-yellow-50",
    emoji: "🥤",
  },
  {
    title: "Gratis voedingsplan",
    subtitle: "bij aankoop vanaf €40",
    badge: "Actie",
    badgeColor: "bg-green-600",
    bg: "bg-green-50",
    emoji: "📋",
  },
  {
    title: "2+1 gratis",
    subtitle: "op proteïne supplementen",
    badge: "2+1 gratis",
    badgeColor: "bg-[#0000a4]",
    bg: "bg-blue-50",
    emoji: "💪",
  },
  {
    title: "Nieuw: Detox thee",
    subtitle: "ondersteunt het spijsverteringsstelsel",
    badge: "Nieuw",
    badgeColor: "bg-purple-600",
    bg: "bg-purple-50",
    emoji: "🍵",
  },
];

export default function PromoCards() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {promos.map((promo) => (
          <div
            key={promo.title}
            className={`${promo.bg} rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow border border-white group`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-bold text-gray-800 text-sm leading-tight">
                  {promo.title}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{promo.subtitle}</p>
              </div>
              <span
                className={`${promo.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ml-2`}
              >
                {promo.badge}
              </span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl">{promo.emoji}</span>
              <button className="bg-[#0000a4] text-white rounded-full w-7 h-7 flex items-center justify-center group-hover:bg-[#0000c4] transition-colors flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            {promo.badge.includes("korting") || promo.subtitle.includes("meest") ? (
              <p className="text-[10px] text-gray-400 mt-2">*op de meest getoonde prijs</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
