import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getProductById, getProductsByCategory } from "../../data/products";
import AddToCartSection from "./AddToCartSection";
import ProductTabs from "./ProductTabs";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) notFound();

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="border-b border-black/5 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-[11px] text-[#111111]/40 uppercase tracking-widest">
            <Link href="/" className="hover:text-[#111111] transition-colors">Home</Link>
            <span>/</span>
            <span className="capitalize">{product.category}</span>
            <span>/</span>
            <span className="text-[#111111]/70 truncate max-w-xs">{product.name}</span>
          </div>
        </div>

        {/* Product detail */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 mb-12">
            {/* Image */}
            <div className="bg-white relative" style={{ minHeight: 480 }}>
              <div className="sticky top-4">
                <div className="relative h-[480px] overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-[#c2f500] text-[#0d0d0d] text-[10px] font-black uppercase tracking-wider px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                  {discount && (
                    <span className="absolute top-4 right-4 bg-[#111111] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1">
                      -{discount}%
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-white p-8 md:p-10">
              <p className="text-[10px] text-[#c2f500] font-black uppercase tracking-[0.2em] mb-2">
                {product.brand}
              </p>
              <h1 className="text-2xl md:text-3xl font-black text-[#111111] uppercase tracking-tight leading-tight mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= Math.round(product.rating) ? "text-[#c2f500]" : "text-[#111111]/10"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-[#111111]">{product.rating}</span>
                <span className="text-xs text-[#111111]/30">({product.reviewCount.toLocaleString("nl")} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-black/5">
                <span className="text-4xl font-black text-[#111111]">
                  €{product.price.toFixed(2).replace(".", ",")}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-[#111111]/25 line-through">
                    €{product.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                )}
                {discount && (
                  <span className="text-sm font-black text-[#c2f500]">Je bespaart {discount}%</span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#111111]/60 leading-relaxed mb-6">
                {product.description}.
                {product.weight && ` Inhoud: ${product.weight}.`}
                {product.servings && ` Goed voor ${product.servings} porties.`}
              </p>

              <AddToCartSection product={product} />
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white border border-black/5 p-6 md:p-10 mb-12">
            <ProductTabs product={product} />
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-[#111111] uppercase tracking-tight">Gerelateerde producten</h2>
                <Link href="/" className="text-[#c2f500] text-xs font-bold uppercase tracking-widest hover:text-[#111111] transition-colors flex items-center gap-1">
                  Bekijk alles
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.id}`}
                    className="bg-white overflow-hidden hover:bg-[#fafafa] transition-colors group"
                  >
                    <div className="h-44 relative border-b border-black/5 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      {p.badge && (
                        <span className="absolute top-3 left-3 bg-[#c2f500] text-[#0d0d0d] text-[10px] font-black uppercase tracking-wider px-2 py-0.5">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] text-[#c2f500] uppercase tracking-widest font-bold mb-1">{p.brand}</p>
                      <h3 className="text-sm font-bold text-[#111111] leading-tight mb-2 line-clamp-2">{p.name}</h3>
                      <span className="text-lg font-black text-[#111111]">
                        €{p.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
