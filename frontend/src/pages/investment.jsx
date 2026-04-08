import React from "react";
import { Link } from "react-router-dom";

export default function Investment() {
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

      {/* الهيرو - الواجهة الرئيسية للقسم */}
      <section className="relative pt-32 pb-20 flex items-center justify-center border-b border-[#d4af37]/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d0e12]/85"></div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="خلفية استثمارية"
          />
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <i className="fa-solid fa-chart-line text-6xl gold-text mb-6"></i>
          <h1 className="text-5xl md:text-6xl font-black font-cairo gold-text mb-4">
            القسم الاستثماري
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-bold leading-relaxed">
            نادي أورا بيتش ليس مجرد وجهة للرفاهية، بل هو أصل استثماري يضمن لك
            عوائد مالية مجزية وفرصاً لا حصر لها لبناء شراكات استراتيجية.
          </p>
        </div>
      </section>

      {/* تفاصيل الاستثمار */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex-grow">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in delay-200 opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="bg-[#15171c] border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37] transition-colors duration-300 hover:-translate-y-2">
            <i className="fa-solid fa-building-user text-4xl gold-text mb-4"></i>
            <h3 className="font-cairo font-black text-2xl mb-3">
              استثمار ليالي الإقامة
            </h3>
            <p className="text-gray-400 font-bold leading-loose">
              يمنحك الاشتراك 5 ليالي فندقية فاخرة سنوياً. يمكنك استخدامها
              للاستمتاع مع عائلتك، أو استثمارها وتأجيرها لتحقيق عائد مادي سنوي
              مضمون.
            </p>
          </div>

          <div className="bg-[#15171c] border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37] transition-colors duration-300 hover:-translate-y-2">
            <i className="fa-solid fa-handshake-angle text-4xl gold-text mb-4"></i>
            <h3 className="font-cairo font-black text-2xl mb-3">
              مجتمع أعمال النخبة
            </h3>
            <p className="text-gray-400 font-bold leading-loose">
              الانضمام للنادي يفتح لك أبواب التواصل مع نخبة المجتمع ورجال
              الأعمال، مما يوفر منصة مثالية لعقد شراكات تجارية وإطلاق مشاريع
              واعدة.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 animate-fade-in delay-400 opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            <h2 className="font-cairo font-black text-4xl gold-text mb-6">
              ذكاء الاستثمار للمواطن السعودي
            </h2>
            <p className="text-gray-300 font-bold leading-loose text-lg text-justify">
              لقد تم تصميم النموذج المالي في نادي أورا بيتش ليكون فريداً من
              نوعه. نحن نعتبر أعضاءنا شركاء نجاح وليسوا مجرد عملاء. قيمة عضويتك
              في النادي ترتفع بمرور الوقت مع التوسع المستمر في الفروع والخدمات.
            </p>
            <p className="text-gray-300 font-bold leading-loose text-lg text-justify">
              سواء كنت تتطلع لتأمين مستقبل مالي إضافي من خلال الاستثمار العقاري
              الفندقي، أو البحث عن بيئة خصبة للاستثمار في الشركات والمشاريع
              المنبثقة من النادي، فإن أورا بيتش هي وجهتك الأولى.
            </p>

            <ul className="space-y-4 mt-6 text-gray-400 font-bold">
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </span>
                زيادة متوقعة في قيمة العضوية بمرور الزمن
              </li>
              <li className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#d4af37] text-[#d4af37] bg-[#d4af37]/10">
                  <i className="fa-solid fa-users-viewfinder"></i>
                </span>
                لقاءات دورية وندوات لرجال الأعمال والمستثمرين
              </li>
            </ul>
          </div>

          <div
            className="relative h-[400px] group animate-fade-in delay-400 opacity-0 mt-10 lg:mt-0"
            style={{ animationFillMode: "forwards" }}
          >
            <img
              src="https://imgs.search.brave.com/UzuSJwVxjr-Q0vRXwab2gNTEnO12kvrFoUdbydn__nk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/MTU5ODY1OC9waG90/by9idXNpbmVzc21h/bi10cmFkaW5nLW9u/bGluZS1zdG9jay1t/YXJrZXQtb24tdGVi/bGV0LXNjcmVlbi1k/aWdpdGFsLWludmVz/dG1lbnQtY29uY2Vw/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SFlsSUoxVkZm/bUhQd0drTTNEdFZJ/Rk5MUzVlamZNTXpF/UTgxa281MzRhaz0"
              alt="اجتماعات أعمال"
              className="absolute top-0 right-0 w-[70%] h-64 object-cover rounded-2xl border-2 border-[#d4af37]/50 shadow-2xl transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:-rotate-2 group-hover:z-20 brightness-75 group-hover:brightness-100"
            />

            <img
              src="https://imgs.search.brave.com/wENsUQtc0C3sDHSmlszBfuxKur4scEv33QbbYjQwLlY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3JwY2RpZ2l0/YWwuY29tL3N0eWxl/cy8xMDM3eGF1dG8v/cHVibGljLzIwMjIv/MTAvMjQvMTY2NjYx/NTE2NTA0MzI2MDEw/MC5qcGcud2VicA"
              alt="استثمار عقاري"
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
            <i className="fa-solid fa-file-signature"></i> اطلب استشارة
            استثمارية
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
