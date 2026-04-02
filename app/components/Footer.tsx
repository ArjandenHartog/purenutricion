export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2f500] mb-4">Klantenservice</h3>
            <ul className="space-y-2.5 text-sm text-[#111111]/40">
              <li><a href="#" className="hover:text-[#111111] transition-colors">Veelgestelde vragen</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Neem contact op</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Bestelstatus</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Retourneren</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2f500] mb-4">Producten</h3>
            <ul className="space-y-2.5 text-sm text-[#111111]/40">
              <li><a href="#" className="hover:text-[#111111] transition-colors">Eiwitten & Shakes</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Creatine</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Pre-workout</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Vitamines</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2f500] mb-4">Over ons</h3>
            <ul className="space-y-2.5 text-sm text-[#111111]/40">
              <li><a href="#" className="hover:text-[#111111] transition-colors">Over Pure Nutricion</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Onze missie</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Privacybeleid</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Algemene voorwaarden</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c2f500] mb-4">Volg ons</h3>
            <ul className="space-y-2.5 text-sm text-[#111111]/40">
              <li><a href="#" className="hover:text-[#111111] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#c2f500] px-2.5 py-0.5">
              <span className="text-[#0d0d0d] font-black text-sm uppercase tracking-tight">pure</span>
            </div>
            <span className="text-[#111111]/30 text-xs font-bold tracking-widest uppercase">nutricion</span>
          </div>
          <p className="text-xs text-[#111111]/20 text-center">
            © 2026 Pure Nutricion. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#111111]/30 font-medium">
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
