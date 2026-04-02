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
        </div>
      </main>
      <Footer />
    </div>
  );
}
