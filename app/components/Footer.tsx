import TrustpilotWidgetLoader from "./TrustpilotWidgetLoader";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2f500] mb-4">Klantenservice</h3>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Veelgestelde vragen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Neem contact op</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bestelstatus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retourneren</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2f500] mb-4">Producten</h3>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Eiwitten & Shakes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Creatine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pre-workout</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vitamines</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2f500] mb-4">Over ons</h3>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Over Pure Nutrition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Onze missie</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacybeleid</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Algemene voorwaarden</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2f500] mb-4">Volg ons</h3>
            <ul className="space-y-2.5 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mb-6">
          <TrustpilotWidgetLoader />
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-6 text-xs text-white/30">
          <div>
            <p className="font-semibold text-white/50 mb-1">Pure Nutrition B.V.</p>
            <p>Sportlaan 42</p>
            <p>1234 AB Amsterdam</p>
            <p>Nederland</p>
          </div>
          <div>
            <p><span className="text-white/20">KvK:</span> 12345678</p>
            <p><span className="text-white/20">BTW:</span> NL123456789B01</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#c2f500] px-2.5 py-0.5">
              <span className="text-[#0d0d0d] font-black text-sm uppercase tracking-tight">pure</span>
            </div>
            <span className="text-white/30 text-xs font-bold tracking-widest uppercase">nutrition</span>
          </div>
          <p className="text-xs text-white/20 text-center">
            © 2026 Pure Nutrition. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30 font-medium">
            <span>Veilig betalen</span>
            <span>|</span>
            <span>Gratis retour</span>
            <span>|</span>
            <span>Snelle levering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
