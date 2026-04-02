import Image from "next/image";

const stats = [
  { value: "50.000+", label: "Tevreden klanten" },
  { value: "200+", label: "Producten" },
  { value: "4.8★", label: "Gemiddelde score" },
  { value: "100%", label: "Kwaliteitsgarantie" },
];

export default function HeroBanner() {
  return (
    <div className="bg-white border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <p className="text-[#c2f500] font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Pure Nutrition — Sport & Voeding
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-[#111111] leading-[0.95] uppercase tracking-tight mb-6">
              Voed je
              <br />
              <span className="text-[#c2f500]">prestatie</span>
            </h1>
            <p className="text-[#111111]/50 text-base mb-8 max-w-md leading-relaxed">
              Topkwaliteit eiwitten, creatine, pre-workout en supplementen voor sporters die het verschil willen maken.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <button className="bg-[#c2f500] text-[#0d0d0d] font-black text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#d4ff00] transition-colors">
                Shop nu
              </button>
              <button className="border border-black/20 text-[#111111] font-bold text-sm uppercase tracking-wider px-8 py-4 hover:border-black/40 hover:bg-black/5 transition-colors">
                Bekijk aanbiedingen
              </button>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 md:flex md:gap-6 gap-4 border-t border-black/5 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-xl font-black text-[#c2f500]">{stat.value}</div>
                  <div className="text-[10px] text-[#111111]/40 uppercase tracking-widest mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-1 relative h-52 md:h-[520px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&q=85&auto=format&fit=crop"
              alt="Atleet in de gym"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
