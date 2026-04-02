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
          <div className="flex-1 flex items-center justify-center py-8 md:py-0 gap-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: "🥗", label: "Gezonde voeding", color: "bg-green-100" },
                { emoji: "💊", label: "Supplementen", color: "bg-blue-100" },
                { emoji: "🏃", label: "Beweging", color: "bg-orange-100" },
                { emoji: "⚖️", label: "Gewichtsbeheer", color: "bg-purple-100" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.color} rounded-2xl p-5 flex flex-col items-center gap-2 shadow-sm hover:scale-105 transition-transform cursor-pointer`}
                >
                  <span className="text-4xl">{item.emoji}</span>
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
