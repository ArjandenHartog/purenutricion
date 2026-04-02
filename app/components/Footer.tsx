export default function Footer() {
  return (
    <footer className="bg-[#f0f0f0] border-t border-gray-200 mt-12">
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
            © 2026 Pure Nutricion. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              Veilig
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
              Betrouwbaar
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              Gezond
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
