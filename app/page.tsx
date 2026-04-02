import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import PromoCards from "./components/PromoCards";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import AwarenessBanner from "./components/AwarenessBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans">
      <Header />
      <main>
        <HeroBanner />
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
          <PromoCards />
          <ProductGrid
            title="Populaire producten tegen overgewicht"
            category="all"
          />
          <ProductGrid
            title="Maaltijdvervangers &amp; shakes"
            category="shakes"
          />
          <ProductGrid
            title="Supplementen &amp; vitamines"
            category="supplements"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
