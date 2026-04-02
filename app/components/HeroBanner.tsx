const heroCards = [
  {
    label: "Gezonde voeding",
    color: "bg-green-100",
    iconColor: "text-green-600",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1Z" />
      </svg>
    ),
  },
  {
    label: "Supplementen",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    label: "Beweging",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "Gewichtsbeheer",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
      </svg>
    ),
  },
];

export default function HeroBanner() {
  return (
    <div className="bg-[#e8f5e9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center min-h-[300px]">
          {/* Text */}
          <div className="flex-1 py-10 md:py-0">
            <p className="text-[#0000a4] font-semibold text-sm mb-2 uppercase tracking-wide">
              Bewust leven begint hier
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-[#0000a4] leading-tight mb-4">
              Zet de eerste stap
              <br />
              naar een{" "}
              <span className="text-green-600">gezonder</span> gewicht
            </h1>
            <p className="text-gray-600 mb-6 max-w-md">
              Ontdek bewezen middelen, supplementen en maaltijdplannen die je helpen overgewicht aan te pakken — op een verantwoorde manier.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#0000a4] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0000c4] transition-colors">
                Bekijk alle producten
              </button>
              <button className="border-2 border-[#0000a4] text-[#0000a4] font-semibold px-6 py-3 rounded-full hover:bg-[#0000a4]/5 transition-colors">
                Gratis advies lezen
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 flex items-center justify-center py-8 md:py-0">
            <div className="grid grid-cols-2 gap-3">
              {heroCards.map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} rounded-2xl p-5 flex flex-col items-center gap-2 shadow-sm hover:scale-105 transition-transform cursor-pointer`}
                >
                  <span className={item.iconColor}>{item.icon}</span>
                  <span className="text-xs font-semibold text-gray-700 text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
