import React from "react";
import { Link } from "react-router-dom";

export default function Medical() {
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
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="خلفية طبية"
          />
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <i className="fa-solid fa-staff-snake text-6xl gold-text mb-6"></i>
          <h1 className="text-5xl md:text-6xl font-black font-cairo gold-text mb-4">
            القسم الطبي
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-bold leading-relaxed">
            رعاية صحية استثنائية لك ولعائلتك. عيادات متخصصة، برامج استجمام،
            وعلاج طبيعي بأعلى المعايير العالمية داخل النادي.
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
            <i className="fa-solid fa-stethoscope text-4xl gold-text mb-4"></i>
            <h3 className="font-cairo font-black text-2xl mb-3">
              عيادات النخبة المتخصصة
            </h3>
            <p className="text-gray-400 font-bold leading-loose">
              كادر طبي متميز متواجد على مدار الساعة لتقديم الاستشارات، الفحوصات
              الدورية، والرعاية الطبية الفورية لأعضاء النادي بكل خصوصية.
            </p>
          </div>

          <div className="bg-[#15171c] border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37] transition-colors duration-300 hover:-translate-y-2">
            <i className="fa-solid fa-spa text-4xl gold-text mb-4"></i>
            <h3 className="font-cairo font-black text-2xl mb-3">
              الاستجمام والعلاج الطبيعي
            </h3>
            <p className="text-gray-400 font-bold leading-loose">
              مراكز متطورة للتعافي والتأهيل، مساج علاجي، وعلاج مائي مخصص لتجديد
              النشاط والتخلص من ضغوط الحياة اليومية.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 animate-fade-in delay-400 opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            <h2 className="font-cairo font-black text-4xl gold-text mb-6">
              الصحة.. ثروتك الحقيقية
            </h2>
            <p className="text-gray-300 font-bold leading-loose text-lg text-justify">
              في أورا بيتش، نؤمن بأن العقل السليم في الجسم السليم. لذلك وفرنا
              بيئة صحية متكاملة تضمن لك ولأسرتك الوصول لأفضل الخدمات الطبية دون
              الحاجة لمغادرة أجواء النادي المريحة.
            </p>
            <p className="text-gray-300 font-bold leading-loose text-lg text-justify">
              برامجنا الطبية مصممة للوقاية قبل العلاج، حيث نقدم خطط تغذية مخصصة،
              وتقييمات شاملة للياقة البدنية، وبرامج تعافي للرياضيين.
            </p>

            <ul className="space-y-4 mt-6 text-gray-400 font-bold">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10">
                  <i className="fa-solid fa-heart-pulse"></i>
                </span>
                متابعة صحية دورية وملفات طبية سرية للأعضاء
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10">
                  <i className="fa-solid fa-truck-medical"></i>
                </span>
                استجابة لحالات الطوارئ وخدمة إسعاف فوري
              </li>
            </ul>
          </div>

          <div
            className="relative h-[400px] group animate-fade-in delay-400 opacity-0 mt-10 lg:mt-0"
            style={{ animationFillMode: "forwards" }}
          >
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800"
              alt="مركز استجمام"
              className="absolute top-0 right-0 w-[70%] h-64 object-cover rounded-2xl border-2 border-[#d4af37]/50 shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:-rotate-2 group-hover:z-20 brightness-75 group-hover:brightness-100"
            />

            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800"
              alt="رعاية طبية"
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
            خدماتنا الطبية
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
