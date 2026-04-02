export default function Footer() {
  return (
    <footer className="bg-[#f0f0f0] border-t border-gray-200 mt-12">
      {/* Disclaimer */}
      <div className="bg-amber-50 border-t-2 border-amber-400 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-amber-800 text-center">
            <strong>Bewustwordingswebsite:</strong> Pure Nutricion is een fictieve webshop gemaakt om bewustzijn te creëren rondom overgewicht en gezonde voeding. Dit is <em>geen echte winkel</em> — er kunnen geen producten worden gekocht. Raadpleeg altijd een gecertificeerde diëtist of huisarts voor persoonlijk advies.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-800 mb-3 text-sm">Klantenservice</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#0000a4]">Veelgestelde vragen</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">Neem contact op</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">Bestelstatus</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">Retourneren</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3 text-sm">Gezondheidsadvies</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#0000a4]">Wat is overgewicht?</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">BMI berekenen</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">Gezond afvallen</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">Voedingsadvies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3 text-sm">Over Pure Nutricion</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#0000a4]">Over ons</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">Onze missie</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">Disclaimer</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">Privacybeleid</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3 text-sm">Volg ons</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#0000a4]">Instagram</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">Facebook</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">YouTube</a></li>
              <li><a href="#" className="hover:text-[#0000a4]">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#0000a4] text-white rounded-lg px-2 py-0.5">
              <span className="font-black text-sm">pure</span>
            </div>
            <span className="text-gray-600 text-xs font-medium">nutricion</span>
          </div>
          <p className="text-xs text-gray-400 text-center">
            © 2026 Pure Nutricion — Bewustwordingswebsite. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">🔒 Veilig</span>
            <span className="flex items-center gap-1">✅ Betrouwbaar</span>
            <span className="flex items-center gap-1">💚 Gezond</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
