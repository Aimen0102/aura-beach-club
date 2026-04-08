import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function BlogDetails() {
  // تفعيل التمرير السلس للصفحة عند تحميلها
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0e12] font-cairo text-right rtl overflow-x-hidden">
      {/* 1. شريط التنقل (الناف بار) */}
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

      {/* 2. الهيرو الكبير والعميق (Full-ish Screen Hero) */}
      <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        {/* الخلفية مع تأثير حركة بسيط */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920"
            alt="Aura Deep Experience"
            className="w-full h-full object-cover opacity-30 scale-105 animate-subtle-zoom"
          />
          {/* تدرج عميق للون الخلفية */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e12]/90 via-transparent to-[#0d0e12]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80"></div>
        </div>

        {/* المحتوى المركزي للهيرو */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in-up mt-20">
          <div className="flex justify-center mb-6">
            <span className="flex items-center gap-2 bg-[#d4af37]/15 text-[#d4af37] py-2 px-6 rounded-full text-base font-bold border border-[#d4af37]/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <i className="fa-solid fa-crown text-sm"></i>
              تجربة أورا النخبوية
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#d4af37] leading-tight mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            أورا بيتش كلوب: <br /> ليس مجرد مكان، بل هو انعكاس لذاتك الطموحة
          </h1>

          <p className="text-2xl md:text-3xl font-extrabold text-white/90 max-w-3xl mx-auto mb-10 leading-normal">
            اكتشف العمق الحقيقي للرفاهية حيث تلتقي فخامة التصميم بصفاء الروح
            وتكامل المجتمع.
          </p>

          <div className="flex items-center justify-center gap-6 text-gray-400 text-base font-medium border-t border-[#d4af37]/20 pt-6 inline-flex">
            <span>
              <i className="fa-regular fa-calendar-alt ml-2 text-[#d4af37]"></i>{" "}
              15 أبريل 2026
            </span>
            <span className="text-[#d4af37]/30">|</span>
            <span>
              <i className="fa-solid fa-pen-nib ml-2 text-[#d4af37]"></i> بقلم:
              فريق رؤية أورا
            </span>
          </div>
        </div>

        {/* مؤشر التمرير لأسفل */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <i className="fa-solid fa-angle-down text-3xl text-[#d4af37]/50 hover:text-[#d4af37] cursor-pointer"></i>
        </div>
      </div>

      {/* 3. محتوى المقال العميق + الشريط الجانبي الأنيق */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row-reverse gap-16 relative">
        {/* خلفية جمالية خفيفة خلف المحتوى */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full filter blur-[100px] pointer-events-none"></div>

        {/* القسم الأيمن: محتوى المقال الأعمق (يمثل 70% من الشاشة) */}
        <div className="w-full lg:w-3/4 space-y-12 relative z-10">
          <div className="prose prose-invert prose-2xl max-w-none text-gray-200 font-medium">
            <p className="text-3xl leading-relaxed font-black text-white bg-gradient-to-r from-[#d4af37]/20 to-transparent p-6 rounded-xl border-r-4 border-[#d4af37] shadow-lg">
              نحن نؤمن أن الرفاهية ليست مجرد خدمات استثنائية، بل هي حالة ذهنية
              وشعور عميق بالانتماء لبيئة تقدر التميز. في أورا بيتش كلوب، صممنا
              كل تفصيلة لتكون بوابة لتجربة أعمق للحياة النخبوية في المملكة.
            </p>

            {/* الفاصل الذهبي الرقيق */}
            <div className="w-40 h-1 bg-gradient-to-r from-[#d4af37] to-transparent my-16 rounded-full"></div>

            <h2 className="text-4xl font-black text-[#d4af37] mt-16 mb-6 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.2)]">
              <i className="fa-solid fa-briefcase text-3xl"></i> استثمار في
              أصولك الاجتماعية
            </h2>
            <p className="leading-loose text-xl text-gray-300">
              الانضمام إلى أورا هو قرار استراتيجي يتجاوز الترفيه. أنت لا تشتري
              مجرد "دخول لنادي"، بل تستثمر في الوصول إلى بيئة خصبة لعلاقات عمل
              استثنائية. مجتمعنا يضم قادة الفكر ورجال الأعمال الأكثر تأثيراً،
              مما يجعل كل زيارة فرصة لتوسيع آفاقك المهنية والاجتماعية في أجواء
              من الخصوصية المطلقة.
            </p>

            {/* قسم معرض لمحات بصري أعمق */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800"
                alt="Aura Exclusive Connections"
                className="w-full h-80 object-cover rounded-2xl border border-[#d4af37]/20 shadow-xl"
              />
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800"
                  alt="Aura Luxury Events"
                  className="w-full h-[45%] object-cover rounded-2xl border border-[#d4af37]/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800"
                  alt="Aura Spa Deep Wellness"
                  className="w-full h-[45%] object-cover rounded-2xl border border-[#d4af37]/10"
                />
              </div>
            </div>

            <h2 className="text-4xl font-black text-[#d4af37] mt-16 mb-6 flex items-center gap-3 drop-shadow-[0_0_5px_rgba(212,175,55,0.2)]">
              <i className="fa-solid fa-heart-pulse text-3xl"></i> الرفاهية
              الشمولية: عمق الصحة والجمال
            </h2>
            <p className="leading-loose text-xl text-gray-300">
              في أقسامنا الطبية والرياضية، لا نقدم مجرد تدريبات أو علاجات
              تقليدية. فريقنا من الخبراء الدوليين يتبنى نهجاً شمولياً مخصصاً لكل
              عضو. نحن نغوص في احتياجاتك الصحية والجسدية الدقيقة لبرمجة تجارب
              تعيد تعريف الشباب والحيوية، مما يضمن لك أداءً فائقاً في كافة جوانب
              حياتك.
            </p>

            {/* قسم الاقتباس الفخم والأعمق */}
            <blockquote className="my-16 border-r-0 border-l-0 p-10 bg-[#15171c] border-2 border-[#d4af37]/30 rounded-3xl relative">
              <i className="fa-solid fa-quote-right absolute top-6 right-6 text-6xl text-[#d4af37]/20"></i>
              <p className="text-3xl font-black text-[#d4af37] leading-tight text-center relative z-10 drop-shadow-[0_0_5px_rgba(212,175,55,0.2)]">
                "في أورا، نحن لا نبيع الوقت، بل نصقل التجربة البشرية لتكون في
                أبهى صورها."
              </p>
              <cite className="block text-center mt-6 text-xl text-gray-400 font-bold">
                - رؤيتنا التأسيسية
              </cite>
            </blockquote>

            {/* قائمة منسقة فخمة وأكبر */}
            <div className="my-16 p-10 bg-gradient-to-br from-[#1a1c23] to-[#0d0e12] border border-[#d4af37]/40 rounded-3xl shadow-[0_0_25px_rgba(212,175,55,0.1)]">
              <h3 className="text-3xl font-black text-white mb-8 border-b-2 border-[#d4af37] pb-4 inline-block">
                امتيازات تعمق تجربتك يوماً بعد يوم
              </h3>
              <ul className="list-none space-y-6 text-xl">
                <li className="flex items-start gap-4">
                  <i className="fa-solid fa-circle-check text-2xl text-[#d4af37] mt-1"></i>
                  <span>
                    <strong>أولوية الوصول العالمية:</strong> دخول حصري لشبكتنا
                    من الأندية الزميلة حول العالم.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fa-solid fa-circle-check text-2xl text-[#d4af37] mt-1"></i>
                  <span>
                    <strong>تجارب مصممة هندسياً:</strong> كل فعالية، كل عشاء،
                    صمم ليكون تجربة بصرية وشعورية لا تُنسى.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <i className="fa-solid fa-circle-check text-2xl text-[#d4af37] mt-1"></i>
                  <span>
                    <strong>الخصوصية التامة:</strong> بيئة آمنة تماماً تضمن لك
                    الاسترخاء وإجراء نقاشاتك الهامة بعيداً عن الأضواء.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-2xl leading-relaxed text-gray-300 font-bold border-t border-[#d4af37]/20 pt-10">
              القرار الآن بيدك. هل تكتفي بالرفاهية التقليدية، أم أنك مستعد للغوص
              في عمق تجربة أورا التي صُممت لتعكس مكانتك الحقيقية؟ فريقنا بانتظار
              تواصلك لبدء هذه الرحلة الاستثنائية.
            </p>
          </div>
        </div>

        {/* القسم الأيسر: الشريط الجانبي الأكبر والمثبت الأنيق (Sidebar) */}
        <div className="w-full lg:w-1/4 space-y-10 sticky top-28 h-fit relative z-10 mt-16 lg:mt-0">
          {/* صندوق دعوة للتسجيل الأعمق والأفخم */}
          <div className="bg-gradient-to-b from-[#1a1c23] to-[#0d0e12] border-2 border-[#d4af37] p-10 rounded-3xl text-center shadow-[0_0_30px_rgba(212,175,55,0.2)] animate-pulse-slow">
            <i className="fa-solid fa-gem text-5xl text-[#d4af37] mb-6 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"></i>
            <h3 className="text-3xl font-black text-white mb-4">
              خطوتك القادمة نحو النخبة
            </h3>
            <p className="text-base text-gray-300 mb-8 leading-relaxed">
              تجاوز حدود المألوف. سجل بياناتك الآن لترتيب لقاء تعريفي خاص
              واستكشاف عمق امتيازات عضوية أورا المخصصة لك.
            </p>
            <Link
              to="/register"
              className="block w-full bg-gradient-to-r from-[#d4af37] to-[#e6c86a] text-black font-black text-lg py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"
            >
              اطلب موعداً خاصاً الآن
            </Link>
          </div>

          {/* مقالات ذات صلة بتصميم أعمق */}
          <div className="bg-[#15171c]/80 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl space-y-6 shadow-xl">
            <h3 className="text-2xl font-black text-[#d4af37] border-b border-gray-700 pb-4 flex items-center gap-3">
              <i className="fa-solid fa-clapperboard text-[#d4af37]/70"></i>{" "}
              تعمق أكثر في عوالمنا
            </h3>
            <div className="space-y-6">
              <Link to="/luxury-guide" className="group block space-y-1">
                <h4 className="text-lg font-bold text-gray-100 group-hover:text-[#d4af37] transition-colors leading-snug line-clamp-2">
                  دليل الأعضاء الفاخر: كيفية تعظيم استفادتك من الخدمات المخصصة
                  (Concierge)
                </h4>
                <span className="text-xs text-gray-500 font-medium block">
                  12 أبريل 2026
                </span>
              </Link>
              <div className="w-full h-[1px] bg-gray-800/50"></div>
              <Link to="/elite-fitness" className="group block space-y-1">
                <h4 className="text-lg font-bold text-gray-100 group-hover:text-[#d4af37] transition-colors leading-snug line-clamp-2">
                  منظور جديد لللياقة النخبوية: حوار حصري مع كبير مدربي أورا
                  الرياضيين
                </h4>
                <span className="text-xs text-gray-500 font-medium block">
                  8 أبريل 2026
                </span>
              </Link>
            </div>
          </div>

          {/* قسم وصول الأعضاء Teaser */}
          <div className="bg-[#1a1c23] border border-gray-800 p-8 rounded-3xl text-center shadow-inner opacity-80">
            <i className="fa-solid fa-lock text-3xl text-gray-600 mb-4"></i>
            <h4 className="text-xl font-bold text-gray-400">بوابة الأعضاء</h4>
            <p className="text-sm text-gray-500 mt-2">
              تسجيل الدخول للخدمات الرقمية الحصرية قريباً.
            </p>
          </div>
        </div>
      </div>

      {/* تذييل الصفحة البسيط والأنيق */}
      <footer className="border-t border-gray-800 mt-20 py-10 bg-[#0a0b0f]">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm">
          &copy; 2026 أورا بيتش كلوب. جميع الحقوق محفوظة. تجربة الرفاهية المطلقة
          في المملكة.
        </div>
      </footer>

      {/* أنماط CSS مخصصة للحركات (تأكد من إضافتها لملف index.css أو Tailwind config) */}
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        @keyframes pulse-slow {
          0%, 100% { box-shadow: 0 0 30px rgba(212,175,55,0.2); }
          50% { box-shadow: 0 0 40px rgba(212,175,55,0.3); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}
