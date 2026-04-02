import Image from "next/image";
import Link from "next/link";

type TopProduct = {
  id: number;
  name: string;
};

type Testimonial = {
  name: string;
  age: number;
  photo: string;
  quote: string;
  topProducts: TopProduct[];
};

const testimonials: Testimonial[] = [
  {
    name: "Michael",
    age: 23,
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&q=80&auto=format&fit=crop&crop=face",
    quote:
      "Met behulp van Pure Nutrition heb ik in 3 maanden tijd 8 kilo aan spiermassa opgebouwd. De kwaliteit van de producten is echt op een ander niveau — ik train nu harder dan ooit.",
    topProducts: [
      { id: 3, name: "Proteïne Poeder Vanille 1kg" },
      { id: 9, name: "Peptides Creatine HCL" },
      { id: 7, name: "Eiwitrepen Variety Pack 12st" },
    ],
  },
  {
    name: "Sarah",
    age: 28,
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&q=80&auto=format&fit=crop&crop=face",
    quote:
      "Ik was sceptisch over supplementen, maar Pure Nutrition heeft me overtuigd. De shakes zijn heerlijk en ik merk echt verschil in mijn herstel na het sporten.",
    topProducts: [
      { id: 1, name: "SlimFast Maaltijdshake Chocolade" },
      { id: 4, name: "Omega-3 Visolie Capsules 90st" },
      { id: 6, name: "CLA Afslankpillen 90 capsules" },
    ],
  },
  {
    name: "Lars",
    age: 31,
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&q=80&auto=format&fit=crop&crop=face",
    quote:
      "Als marathonloper heb ik de beste voeding nodig. Pure Nutrition levert precies dat — topkwaliteit, eerlijke prijzen en razendsnel bezorgd. Niet meer bij een andere winkel.",
    topProducts: [
      { id: 3, name: "Proteïne Poeder Vanille 1kg" },
      { id: 2, name: "Groene Thee Extract 500mg" },
      { id: 8, name: "Detox & Cleanse Theepakket" },
    ],
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black text-[#111111] uppercase tracking-tight">
          Wat onze klanten zeggen
        </h2>
        <span className="text-xs text-[#111111]/40 uppercase tracking-widest font-bold">
          Echte ervaringen
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-black/5 p-6 flex flex-col gap-5"
          >
            {/* Profiel */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#c2f500]">
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-black text-[#111111] text-base leading-tight">
                  {t.name}
                </p>
                <p className="text-[#111111]/40 text-xs uppercase tracking-widest">
                  {t.age} jaar
                </p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-[#111111]/70 text-sm leading-relaxed border-l-2 border-[#c2f500] pl-4">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Top 3 producten */}
            <div>
              <p className="text-[10px] font-black text-[#111111]/40 uppercase tracking-[0.15em] mb-2">
                {t.name}&apos;s top 3 producten
              </p>
              <ol className="flex flex-col gap-1.5">
                {t.topProducts.map((product, index) => (
                  <li key={product.id} className="flex items-center gap-2">
                    <span className="text-[#c2f500] font-black text-xs w-4 flex-shrink-0">
                      {index + 1}.
                    </span>
                    <Link
                      href={`/product/${product.id}`}
                      className="text-xs font-bold text-[#111111] hover:text-[#c2f500] transition-colors underline underline-offset-2 decoration-black/10 hover:decoration-[#c2f500] truncate"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
