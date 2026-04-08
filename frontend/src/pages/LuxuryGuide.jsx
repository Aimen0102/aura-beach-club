import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LuxuryGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0e12] font-cairo text-right rtl overflow-x-hidden">
      {/* الناف بار */}
      <nav className="fixed w-full z-50 glass-nav border-b border-[#d4af37]/10 bg-[#0d0e12]/95 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center flex-row-reverse">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <span className="font-bold text-sm text-gray-300 group-hover:text-[#d4af37] transition-colors">
              العودة للرئيسية
            </span>
            <i className="fa-solid fa-arrow-left text-xl text-[#d4af37] animate-pulse"></i>
          </Link>
          <Link to="/" className="flex items-center gap-3 flex-row-reverse">
            <span className="font-black text-3xl text-[#d4af37] tracking-wider drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
              AURA
            </span>
            <i className="fa-solid fa-water text-4xl text-[#d4af37]"></i>
          </Link>
        </div>
      </nav>

      {/* الهيرو */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c0d129df?q=80&w=1920"
            alt="Concierge Service"
            className="w-full h-full object-cover opacity-30 scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e12]/90 via-[#0d0e12]/50 to-[#0d0e12]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up mt-20">
          <span className="inline-block bg-[#d4af37]/15 text-[#d4af37] py-2 px-6 rounded-full text-sm font-bold border border-[#d4af37]/30 mb-6">
            دليل حصري
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#d4af37] leading-tight mb-6">
            دليل الأعضاء الفاخر: كيفية تعظيم استفادتك من خدماتنا المخصصة
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <span>
              <i className="fa-regular fa-calendar-alt ml-1"></i> 12 أبريل 2026
            </span>
            <span>|</span>
            <span>
              <i className="fa-solid fa-pen-nib ml-1"></i> إدارة خدمات الأعضاء
            </span>
          </div>
        </div>
      </div>

      {/* المحتوى */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="prose prose-invert prose-xl max-w-none text-gray-300 leading-loose">
          <p className="text-2xl font-bold text-white mb-8 border-r-4 border-[#d4af37] pr-6 bg-[#15171c] py-4 rounded-l-lg">
            الوقت هو أثمن ما تملك، وفي أورا بيتش كلوب، صممنا خدمة المساعد الشخصي
            (Concierge) لضمان ألا تضيع ثانية واحدة من وقتك في ترتيب التفاصيل، بل
            في عيش التجربة.
          </p>

          <h2 className="text-3xl font-black text-[#d4af37] mt-12 mb-6">
            قوة كلمة "نعم"
          </h2>
          <p>
            فريق الكونسيرج لدينا مدرب على أعلى المعايير الفندقية العالمية. من
            تأمين طاولة في مطعم محجوز بالكامل، إلى ترتيب رحلة يخت مفاجئة عند
            الغروب، نحن هنا لنجعل المستحيل ممكناً. السر يكمن في التواصل المبكر
            معنا.
          </p>

          <div className="my-10 p-8 border border-[#d4af37]/20 rounded-2xl bg-gradient-to-tr from-[#1a1c23] to-[#0d0e12]">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">
              أمثلة لما يمكننا تقديمه لك:
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <i className="fa-solid fa-plane text-[#d4af37] mt-1"></i>{" "}
                <span>ترتيبات السفر الخاصة والتنقلات بالطائرات المروحية.</span>
              </li>
              <li className="flex gap-4">
                <i className="fa-solid fa-gift text-[#d4af37] mt-1"></i>{" "}
                <span>شراء وتغليف الهدايا النادرة والفخمة لضيوفك.</span>
              </li>
              <li className="flex gap-4">
                <i className="fa-solid fa-ticket text-[#d4af37] mt-1"></i>{" "}
                <span>تأمين تذاكر VIP للفعاليات المغلقة في المملكة.</span>
              </li>
            </ul>
          </div>
          <p className="text-center font-bold text-[#d4af37] mt-10">
            تذكر دائماً: في أورا، خيالك هو الحد الوحيد لتجربتك.
          </p>
        </div>
      </div>
    </div>
  );
}
