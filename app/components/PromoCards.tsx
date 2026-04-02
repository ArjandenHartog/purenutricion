import { ReactNode } from "react";

type Promo = {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  bg: string;
  iconColor: string;
  icon: ReactNode;
};

const promos: Promo[] = [
  {
    title: "Tot 20% korting",
    subtitle: "op maaltijdvervangers",
    badge: "Korting*",
    badgeColor: "bg-red-600",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
  },
  {
    title: "Gratis voedingsplan",
    subtitle: "bij aankoop vanaf €40",
    badge: "Actie",
    badgeColor: "bg-green-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    title: "2+1 gratis",
    subtitle: "op proteïne supplementen",
    badge: "2+1 gratis",
    badgeColor: "bg-[#0000a4]",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Nieuw: Detox thee",
    subtitle: "ondersteunt het spijsverteringsstelsel",
    badge: "Nieuw",
    badgeColor: "bg-purple-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1Z" />
      </svg>
    ),
  },
];

export default function PromoCards() {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {promos.map((promo) => (
          <div
            key={promo.title}
            className={`${promo.bg} rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow border border-white group`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-bold text-gray-800 text-sm leading-tight">
                  {promo.title}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{promo.subtitle}</p>
              </div>
              <span
                className={`${promo.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ml-2`}
              >
                {promo.badge}
              </span>
            </div>
            <div className="flex items-end justify-between">
              <span className={promo.iconColor}>{promo.icon}</span>
              <button className="bg-[#0000a4] text-white rounded-full w-7 h-7 flex items-center justify-center group-hover:bg-[#0000c4] transition-colors flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
