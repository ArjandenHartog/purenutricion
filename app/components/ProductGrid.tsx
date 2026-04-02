import { getProductsByCategory } from "../data/products";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type Props = {
  title: string;
  category: string;
};

export default function ProductGrid({ title, category }: Props) {
  const products = getProductsByCategory(category);
  const displayed = category === "all" ? products.slice(0, 4) : products.slice(0, 4);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <button className="text-[#0000a4] text-sm font-semibold hover:underline flex items-center gap-1">
          Bekijk alles
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {displayed.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group border border-gray-100"
          >
            {/* Image area */}
            <div className="bg-gray-50 h-40 flex items-center justify-center relative">
              <span className="text-7xl">{product.emoji}</span>
              {product.badge && (
                <span
                  className={`absolute top-2 left-2 ${product.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}
                >
                  {product.badge}
                </span>
              )}
              <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="text-xs text-gray-400 mb-0.5">{product.brand}</p>
              <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-1 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 mb-2 line-clamp-1">{product.description}</p>

              <div className="flex items-center gap-1.5 mb-2">
                <StarRating rating={product.rating} />
                <span className="text-xs text-gray-500">({product.reviewCount.toLocaleString("nl")})</span>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-gray-900">
                      €{product.price.toFixed(2).replace(".", ",")}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        €{product.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">Incl. BTW</p>
                </div>
                <button className="bg-[#0000a4] hover:bg-[#0000c4] transition-colors text-white rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
