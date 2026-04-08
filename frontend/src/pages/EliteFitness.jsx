import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function EliteFitness() {
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
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="font-bold text-sm text-gray-300">
              العودة للرئيسية
            </span>
            <i className="fa-solid fa-arrow-left text-xl text-[#d4af37]"></i>
          </Link>
          <Link to="/" className="flex items-center gap-3 flex-row-reverse">
            <span className="font-black text-3xl text-[#d4af37] tracking-wider">
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
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920"
            alt="Elite Fitness"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl font-black text-[#d4af37] leading-tight mb-6">
            منظور جديد للياقة النخبوية: حوار حصري مع كبير مدربي أورا
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <span>
              <i className="fa-regular fa-calendar-alt ml-1"></i> 8 أبريل 2026
            </span>
            <span>|</span>
            <span>
              <i className="fa-solid fa-microphone ml-1"></i> قسم الصحة والرياضة
            </span>
          </div>
        </div>
      </div>

      {/* المحتوى */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-invert prose-xl max-w-none text-gray-300 leading-loose">
          <p className="text-xl mb-10">
            جلسنا اليوم مع الكابتن والخبير الرياضي الدولي، مدير قسم اللياقة في
            أورا بيتش كلوب، لنتعرف على الفلسفة المختلفة التي يقدمها النادي
            لأعضائه، وكيف يتم دمج التكنولوجيا بالصحة البدنية.
          </p>

          <div className="space-y-12">
            {/* سؤال وجواب 1 */}
            <div className="bg-[#15171c] p-8 rounded-2xl border border-gray-800 border-r-4 border-r-[#d4af37]">
              <h3 className="text-2xl font-black text-white mb-4">
                أورا: ما الذي يميز النادي الرياضي هنا عن أي نادٍ آخر؟
              </h3>
              <p className="text-[#d4af37] font-bold mb-2">الكابتن:</p>
              <p>
                نحن لا نبيع "عضويات أجهزة رياضية". نحن نقدم نظاماً متكاملاً
                (Bio-hacking). عندما ينضم العضو، نقوم بعمل فحص شامل للتمثيل
                الغذائي وتكوين الجسم، وبناءً عليه نصمم خطة تجمع بين التغذية
                الدقيقة، التدريب البدني، وجلسات التعافي في السبا الخاص بنا.
              </p>
            </div>

            {/* سؤال وجواب 2 */}
            <div className="bg-[#15171c] p-8 rounded-2xl border border-gray-800 border-r-4 border-r-[#d4af37]">
              <h3 className="text-2xl font-black text-white mb-4">
                أورا: كيف تتعاملون مع الأعضاء ذوي الجداول المزدحمة؟
              </h3>
              <p className="text-[#d4af37] font-bold mb-2">الكابتن:</p>
              <p>
                أعضاؤنا هم من قادة الأعمال وأصحاب الوقت الضيق. لذلك تقنية
                التدريب لدينا تعتمد على "الكفاءة العالية". جلسة مدتها 30 دقيقة
                في غرف (الهايبوكسيك) التي تحاكي المرتفعات تعادل تدريباً لساعتين
                في الظروف العادية.
              </p>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000"
            alt="Personal Training"
            className="w-full h-96 object-cover rounded-3xl mt-12 border border-[#d4af37]/20 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
