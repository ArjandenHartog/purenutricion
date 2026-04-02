import Image from "next/image";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import PromoCards from "./components/PromoCards";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans">
      <Header />
      <main>
        <HeroBanner />
        <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
          <PromoCards />
          <ProductGrid
            title="Bestsellers"
            category="all"
          />
          <ProductGrid
            title="Eiwitten & Shakes"
            category="shakes"
          />
          <ProductGrid
            title="Supplementen & Vitamines"
            category="supplements"
          />

          {/* Lifestyle sectie */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-[#111111] uppercase tracking-tight">Jouw lifestyle</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5">
              <div className="relative h-72 overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&q=80&auto=format&fit=crop"
                  alt="Gym training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-black text-lg uppercase tracking-tight">Train harder</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest">Pre-workout & Creatine</p>
                </div>
              </div>
              <div className="relative h-72 overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=400&q=80&auto=format&fit=crop"
                  alt="Fitness lifestyle"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-black text-lg uppercase tracking-tight">Recover faster</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest">Eiwitten & Aminozuren</p>
                </div>
              </div>
              <div className="relative h-72 overflow-hidden group cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&q=80&auto=format&fit=crop"
                  alt="Running athlete"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-white font-black text-lg uppercase tracking-tight">Go further</p>
                  <p className="text-white/60 text-xs uppercase tracking-widest">Energie & Uithoudingsvermogen</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
