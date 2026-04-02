"use client";

// Replace TRUSTPILOT_BUSINESS_UNIT_ID with your real Trustpilot business unit ID
// to activate the live widget. Until then, a static placeholder is shown.
const TRUSTPILOT_BUSINESS_UNIT_ID = "";

export default function TrustpilotWidget() {
  if (!TRUSTPILOT_BUSINESS_UNIT_ID) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-xs text-white/40 font-medium">Uitstekend</span>
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          ))}
        </div>
        <span className="text-xs text-white/40">4.8 / 5 · 238 reviews</span>
        <span className="text-xs font-black text-[#00b67a] tracking-tight">Trustpilot</span>
      </div>
    );
  }

  return (
    <div
      className="trustpilot-widget"
      data-locale="nl-NL"
      data-template-id="5419b6a8b0d04a076446a9ad"
      data-businessunit-id={TRUSTPILOT_BUSINESS_UNIT_ID}
      data-style-height="24px"
      data-style-width="100%"
      data-theme="dark"
    >
      <a
        href="https://nl.trustpilot.com/review/purenutricion.nl"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  );
}
