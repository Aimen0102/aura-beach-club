import React from "react";
import { Link } from "react-router-dom";

export default function Tourism() {
  return (
    <div className="antialiased flex flex-col min-h-screen bg-[#0d0e12]">
      {/* الناف بار العلوي */}
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

      {/* الهيرو - واجهة القسم السياحي */}
      <section className="relative pt-32 pb-20 flex items-center justify-center border-b border-[#d4af37]/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d0e12]/85"></div>
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="خلفية سياحية"
          />
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <i className="fa-solid fa-umbrella-beach text-6xl gold-text mb-6"></i>
          <h1 className="text-5xl md:text-6xl font-black font-cairo gold-text mb-4">
            القسم السياحي
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-bold leading-relaxed">
            استكشف جمال المملكة بلمسة من الرفاهية. صممنا لك برامج سياحية متكاملة
            تجمع بين سحر الطبيعة وخصوصية العائلة.
          </p>
        </div>
      </section>

      {/* تفاصيل القسم السياحي - كروت الخدمات */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex-grow">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in delay-200 opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="bg-[#15171c] border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37] transition-all duration-300 hover:-translate-y-2 shadow-lg">
            <i className="fa-solid fa-map-location-dot text-4xl gold-text mb-4"></i>
            <h3 className="font-cairo font-black text-2xl mb-3 text-white">
              رحلات المعالم والآثار
            </h3>
            <p className="text-gray-400 font-bold leading-loose">
              جولات حصرية لأهم الوجهات السياحية والأثرية في المملكة مع مرشدين
              سياحيين مخصصين لضمان تجربة تعليمية وترفيهية فريدة.
            </p>
          </div>

          <div className="bg-[#15171c] border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37] transition-all duration-300 hover:-translate-y-2 shadow-lg">
            <i className="fa-solid fa-hotel text-4xl gold-text mb-4"></i>
            <h3 className="font-cairo font-black text-2xl mb-3 text-white">
              إقامات فندقية فاخرة
            </h3>
            <p className="text-gray-400 font-bold leading-loose">
              استمتع بأرقى الفلل والمنتجعات المطلة على البحر مباشرة، والمجهزة
              بكافة سبل الراحة والخصوصية التي تليق بنخبة أعضاء أورا.
            </p>
          </div>
        </div>

        {/* شبكة الصور والمحتوى التفصيلي */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 animate-fade-in delay-400 opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            <h2 className="font-cairo font-black text-4xl gold-text mb-6">
              سياحة عالمية على أرض سعودية
            </h2>
            <p className="text-gray-300 font-bold leading-loose text-lg text-justify">
              تماشياً مع رؤية المملكة 2030، يهدف القسم السياحي في أورا بيتش إلى
              تقديم تجربة سياحية لا تُنسى. نحن نهتم بأدق التفاصيل، من لحظة وصولك
              وحتى مغادرتك، لنضمن لك ولعائلتك ذكريات تدوم طويلاً في بيئة آمنة
              وراقية.
            </p>

            <ul className="space-y-4 mt-6 text-gray-400 font-bold">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10">
                  <i className="fa-solid fa-check"></i>
                </span>
                تخطيط مخصص للرحلات العائلية والجماعية
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10">
                  <i className="fa-solid fa-check"></i>
                </span>
                خدمات نقل VIP وسيارات فارهة تحت تصرفك
              </li>
            </ul>
          </div>

          {/* عرض الصور السياحية المتداخلة */}
          <div
            className="relative h-[400px] group animate-fade-in delay-400 opacity-0 mt-10 lg:mt-0"
            style={{ animationFillMode: "forwards" }}
          >
            <img
              src="https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=800"
              alt="شاطئ أورا"
              className="absolute top-0 right-0 w-[70%] h-64 object-cover rounded-2xl border-2 border-[#d4af37]/50 shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:-rotate-2 group-hover:z-20 brightness-75 group-hover:brightness-100"
            />
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800"
              alt="استجمام"
              className="absolute bottom-0 left-0 w-[70%] h-64 object-cover rounded-2xl border-2 border-[#d4af37] shadow-[0_10px_40px_rgba(212,175,55,0.2)] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-2 z-10 brightness-90 group-hover:brightness-100"
            />
          </div>
        </div>

        {/* زر التفاعل */}
        <div
          className="text-center mt-24 animate-fade-in delay-400 opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <Link
            to="/register"
            className="gold-bg px-10 py-4 rounded-full font-black text-lg hover:opacity-90 transition-transform duration-300 hover:scale-105 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-black"
          >
            <i className="fa-solid fa-file-signature"></i> اكتشف المزيد عن
            برامجنا السياحية
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
