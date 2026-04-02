const stats = [
  { value: "50.000+", label: "Tevreden klanten" },
  { value: "200+", label: "Producten" },
  { value: "4.8★", label: "Gemiddelde score" },
  { value: "100%", label: "Kwaliteitsgarantie" },
];

export default function HeroBanner() {
  return (
    <div className="bg-[#111111] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <p className="text-[#c2f500] font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Pure Nutricion — Sport & Voeding
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] uppercase tracking-tight mb-6">
              Voed je
              <br />
              <span className="text-[#c2f500]">prestatie</span>
            </h1>
            <p className="text-white/50 text-base mb-8 max-w-md leading-relaxed">
              Topkwaliteit eiwitten, creatine, pre-workout en supplementen voor sporters die het verschil willen maken.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#c2f500] text-[#0d0d0d] font-black text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#d4ff00] transition-colors">
                Shop nu
              </button>
              <button className="border border-white/20 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 hover:border-white/40 hover:bg-white/5 transition-colors">
                Bekijk aanbiedingen
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1 grid grid-cols-2 gap-px bg-white/5 border border-white/5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#111111] p-8 flex flex-col items-center justify-center text-center hover:bg-[#1a1a1a] transition-colors"
              >
                <span className="text-3xl font-black text-[#c2f500] mb-1">{stat.value}</span>
                <span className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
