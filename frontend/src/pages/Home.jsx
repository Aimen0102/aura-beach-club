import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const services = [
    { title: "سياحي", icon: "fa-umbrella-beach", path: "/tourism" },
    { title: "رياضي", icon: "fa-dumbbell", path: "/sports" },
    { title: "طبي", icon: "fa-staff-snake", path: "/medical" },
    { title: "ترفيهي", icon: "fa-gamepad", path: "/entertainment" },
    { title: "تعليمي", icon: "fa-user-graduate", path: "/education" },
    { title: "استثماري", icon: "fa-chart-line", path: "/investment" },
  ];

  return (
    <div className="antialiased flex flex-col min-h-screen bg-[#0d0e12]">
      {/* ناف بار */}
      <nav className="fixed w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-cairo font-black text-2xl gold-text tracking-wider">
              AURA
            </span>
            <i className="fa-solid fa-water text-3xl gold-text"></i>
          </Link>
          <button className="gold-bg px-8 py-2 rounded-full font-bold hover:scale-105 transition-transform hidden md:block text-black">
            انضم للنخبة
          </button>
        </div>
      </nav>

      {/* هيرو */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e12]/90 via-[#0d0e12]/60 to-[#0d0e12]"></div>
          <img
            src="https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2000"
            alt="Aura"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <i className="fa-solid fa-water text-6xl md:text-8xl gold-text mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"></i>
          <h1 className="text-7xl md:text-9xl font-black font-cairo gold-text mb-2 tracking-wide">
            AURA
          </h1>
          <h2 className="text-2xl md:text-4xl tracking-[0.4em] font-bold text-white mb-8">
            BEACH CLUB
          </h2>
          <p className="text-xl md:text-3xl font-extrabold mb-6 text-gray-300">
            أول نادي متكامل في المملكة
          </p>

          {/* التعديل صار هنا: تحول إلى زر ينقلك لصفحة الجديد */}
          <Link
            to="/blog-details"
            className="inline-flex items-center justify-center gap-3 border border-[#d4af37]/50 bg-[#15171c]/80 backdrop-blur px-8 py-3 rounded-full text-[#d4af37] font-bold text-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
          >
            للتعمق أكثر في تجربة أورا
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </Link>
        </div>
      </section>

      {/* قسم الخدمات (الخانات) */}
      <section className="py-24 px-6 bg-[#0d0e12]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-cairo text-4xl font-black gold-text mb-12">
            اكتشف عوالم أورا
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-[#15171c] border border-[#d4af37]/20 rounded-2xl p-6 hover:border-[#d4af37] transition-all duration-300 cursor-pointer hover:-translate-y-2 shadow-lg block text-center"
              >
                <i
                  className={`fa-solid ${service.icon} text-4xl gold-text mb-4`}
                ></i>
                <h3 className="font-cairo font-black text-xl gold-text">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
