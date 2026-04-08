import React from "react";
import { Link } from "react-router-dom";

export default function Entertainment() {
  return (
    <div className="antialiased flex flex-col min-h-screen bg-[#0d0e12]">
      {/* الناف بار */}
      <nav className="fixed w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <i className="fa-solid fa-arrow-right text-xl gold-text"></i>
            <span className="font-bold text-sm text-gray-300">
              العودة للرئيسية
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-cairo font-black text-2xl gold-text tracking-wider">
              AURA
            </span>
            <i className="fa-solid fa-water text-3xl gold-text"></i>
          </Link>
        </div>
      </nav>

      {/* الهيرو */}
      <section className="relative pt-32 pb-20 flex items-center justify-center border-b border-[#d4af37]/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d0e12]/85"></div>
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="خلفية ترفيهية"
          />
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <i className="fa-solid fa-masks-theater text-6xl gold-text mb-6"></i>
          <h1 className="text-5xl md:text-6xl font-black font-cairo gold-text mb-4">
            القسم الترفيهي
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-bold leading-relaxed">
            أوقات مليئة بالفرح والمرح لجميع أفراد العائلة. إيفنتات، حفلات،
            ومهرجانات مستمرة طوال العام لتصنع أجمل الذكريات.
          </p>
        </div>
      </section>

      {/* تفاصيل القسم */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex-grow">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in delay-200 opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="bg-[#15171c] border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37] transition-colors duration-300 hover:-translate-y-2">
            <i className="fa-solid fa-music text-4xl gold-text mb-4"></i>
            <h3 className="font-cairo font-black text-2xl mb-3">
              مهرجانات وفعاليات حية
            </h3>
            <p className="text-gray-400 font-bold leading-loose">
              تنظيم مهرجانات دورية، عروض مسرحية، وفعاليات ثقافية تناسب جميع
              الأعمار، مع استضافة نخبة من الفنانين في أجواء عائلية راقية.
            </p>
          </div>

          <div className="bg-[#15171c] border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37] transition-colors duration-300 hover:-translate-y-2">
            <i className="fa-solid fa-cake-candles text-4xl gold-text mb-4"></i>
            <h3 className="font-cairo font-black text-2xl mb-3">
              مناسبات خاصة وحفلات
            </h3>
            <p className="text-gray-400 font-bold leading-loose">
              قاعات مجهزة بالكامل وتنسيق احترافي لإقامة مناسباتكم الخاصة مثل
              حفلات الزفاف، أعياد الميلاد، والاحتفالات العائلية الخاصة بالأعضاء.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 animate-fade-in delay-400 opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            <h2 className="font-cairo font-black text-4xl gold-text mb-6">
              مرح لا ينتهي لكل العائلة
            </h2>
            <p className="text-gray-300 font-bold leading-loose text-lg text-justify">
              يلتزم نادي أورا بيتش بتقديم تجربة ترفيهية لا تضاهى، حيث تجتمع
              العائلة في بيئة راقية وآمنة للاستمتاع بأوقات مليئة بالبهجة
              والسعادة. نحن نؤمن بأن الترفيه هو جزء أساسي من جودة الحياة.
            </p>
            <p className="text-gray-300 font-bold leading-loose text-lg text-justify">
              من مناطق اللعب المخصصة للأطفال بأعلى معايير السلامة، إلى الحفلات
              الكبرى والعروض الحية، نضمن لكم جدولاً حافلاً بالفعاليات المتجددة
              التي تلبي كافة الأذواق.
            </p>

            <ul className="space-y-4 mt-6 text-gray-400 font-bold">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10">
                  <i className="fa-solid fa-child-reaching"></i>
                </span>
                برامج ترفيهية مخصصة ومبتكرة للأطفال
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10">
                  <i className="fa-solid fa-ticket"></i>
                </span>
                أولوية الحضور وخصومات خاصة للأعضاء
              </li>
            </ul>
          </div>

          <div
            className="relative h-[400px] group animate-fade-in delay-400 opacity-0 mt-10 lg:mt-0"
            style={{ animationFillMode: "forwards" }}
          >
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800"
              alt="فعاليات كبرى"
              className="absolute top-0 right-0 w-[70%] h-64 object-cover rounded-2xl border-2 border-[#d4af37]/50 shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:-rotate-2 group-hover:z-20 brightness-75 group-hover:brightness-100"
            />

            <img
              src="https://imgs.search.brave.com/5NbnYLYwvJCAoA6QRfXLNK--9bXgz4C9vUJWnSWk7mU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmJheXV0LnNhL3Vw/bG9hZHMvMjAyNS8w/MS9Cb2R5XzAxLTIw/MjUtMDEtMjlUMTYx/MDM1Ljg2NS0xMDI0/eDY0MC5qcGc"
              alt="مناسبات خاصة"
              className="absolute bottom-0 left-0 w-[70%] h-64 object-cover rounded-2xl border-2 border-[#d4af37] shadow-[0_10px_40px_rgba(212,175,55,0.2)] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-2 z-10 brightness-90 group-hover:brightness-100"
            />
          </div>
        </div>

        <div
          className="text-center mt-24 animate-fade-in delay-400 opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <Link
            to="/register"
            className="gold-bg px-10 py-4 rounded-full font-black text-lg hover:opacity-90 transition-transform duration-300 hover:scale-105 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-black"
          >
            <i className="fa-solid fa-file-signature"></i> اكتشف المزيد عن
            فعالياتنا
          </Link>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-black border-t border-[#d4af37]/30 py-8 text-gray-500 font-bold text-sm mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center">
          Aura Beach Club © 2026 | أول نادي متكامل في المملكة
        </div>
      </footer>
    </div>
  );
}
