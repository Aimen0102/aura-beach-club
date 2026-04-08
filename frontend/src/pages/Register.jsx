import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [emotion, setEmotion] = useState("sad");

  // تفعيل أداة الانتقال
  const navigate = useNavigate();

  // مراقبة الحقول لتغيير مشاعر الشخصية
  useEffect(() => {
    if (formData.name.length > 2 && formData.phone.length === 10) {
      setEmotion("excited");
    } else if (formData.name.length > 0 || formData.phone.length > 0) {
      setEmotion("happy");
    } else {
      setEmotion("sad");
    }
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // إرسال البيانات (الاسم ورقم الجوال) إلى السيرفر
      const response = await fetch(
        "https://aura-backend-wmnl.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        // تفريغ الحقول لتعود الشخصية لحالة الانتظار
        setFormData({ name: "", phone: "" });

        // الانتقال لصفحة النجاح مباشرة
        navigate("/success");
      } else {
        alert("حدث خطأ أثناء إرسال البيانات، يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error("خطأ في الاتصال بالسيرفر:", error);
      alert("تعذر الاتصال بالسيرفر، يرجى التأكد من تشغيله.");
    }
  };

  return (
    <div className="antialiased min-h-screen bg-[#0d0e12] flex flex-col font-cairo">
      {/* الناف بار بنفس ألوانك */}
      <nav className="fixed w-full z-50 glass-nav border-b border-[#d4af37]/10 bg-[#0d0e12]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <i className="fa-solid fa-arrow-right text-xl text-[#d4af37]"></i>
            <span className="font-bold text-sm text-gray-300">
              العودة للرئيسية
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-black text-2xl text-[#d4af37] tracking-wider">
              AURA
            </span>
            <i className="fa-solid fa-water text-3xl text-[#d4af37]"></i>
          </Link>
        </div>
      </nav>

      {/* قسم الشاشة المقسومة */}
      <div className="flex-grow flex flex-col lg:flex-row pt-20">
        {/* النصف الأيمن: الفخامة والنصوص */}
        <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 border-l border-[#d4af37]/20">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000"
              alt="Aura Luxury"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12] via-[#0d0e12]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 space-y-6 max-w-lg text-right animate-fade-in delay-200">
            <i className="fa-solid fa-crown text-6xl text-[#d4af37] mb-4"></i>
            <h1 className="font-black text-5xl text-[#d4af37] leading-tight">
              قرار حكيم يضعك <br /> في قلب النخبة
            </h1>
            <p className="text-gray-300 font-bold leading-loose text-xl">
              أهلاً بك في عالم أورا النخبوي! قرارك بالانضمام إلينا هو خطوة
              استثنائية نحو تجربة من الرفاهية المطلقة والتميز.
            </p>
          </div>
        </div>

        {/* النصف الأيسر: الفورم والشخصية التفاعلية */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
            <div className="w-[400px] h-[400px] bg-[#d4af37] rounded-full filter blur-[120px]"></div>
          </div>

          <div className="relative z-10 w-full max-w-md bg-[#0d0e12] border border-[#d4af37]/40 rounded-2xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            {/* قسم الشخصية التفاعلية */}
            <div className="flex flex-col items-center mb-6 h-28 justify-end transition-all duration-500">
              {emotion === "sad" && (
                <div className="text-center animate-pulse">
                  <i className="fa-solid fa-face-smile text-5xl text-[#d4af37]/50 drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]"></i>
                  <p className="text-[#d4af37]/70 text-sm mt-2 font-bold">
                    بانتظار بياناتك...
                  </p>
                </div>
              )}
              {emotion === "happy" && (
                <div className="text-center">
                  <i className="fa-solid fa-face-smile-beam text-5xl text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"></i>
                  <p className="text-[#d4af37] text-sm mt-2 font-bold animate-bounce">
                    خطوة ممتازة!
                  </p>
                </div>
              )}
              {emotion === "excited" && (
                <div className="text-center animate-bounce">
                  <i className="fa-solid fa-face-grin-stars text-5xl text-[#d4af37] drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]"></i>
                  <p className="text-[#d4af37] text-sm mt-2 font-black">
                    أنت جاهز للانضمام!
                  </p>
                </div>
              )}
            </div>

            <div className="text-center mb-8">
              <i className="fa-solid fa-gem text-4xl text-[#d4af37] mb-3"></i>
              <h2 className="text-2xl font-black text-[#d4af37] mb-2">
                انضم لنخبة أورا
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed">
                سجل بياناتك الآن وسيقوم فريق المبيعات بالتواصل معك في أقرب وقت
                لتأكيد حجزك.
              </p>
            </div>

            {/* الفورم */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 font-bold mb-2 text-sm text-right">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <i className="fa-solid fa-user text-[#d4af37]/60"></i>
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    className={`w-full bg-[#0d0e12] border ${formData.name ? "border-[#d4af37]" : "border-[#d4af37]/30"} rounded-lg py-3 pr-12 pl-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors text-right`}
                    placeholder="أدخل اسمك الكريم"
                    onChange={(e) => {
                      const onlyLetters = e.target.value.replace(
                        /[^a-zA-Z\u0600-\u06FF\s]/g,
                        "",
                      );
                      setFormData({ ...formData, name: onlyLetters });
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-2 text-sm text-right">
                  رقم الجوال
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <i className="fa-solid fa-phone text-[#d4af37]/60"></i>
                  </div>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    minLength={10}
                    maxLength="10"
                    value={formData.phone}
                    className={`w-full bg-[#0d0e12] border ${formData.phone.length === 10 ? "border-[#d4af37]" : "border-[#d4af37]/30"} rounded-lg py-3 pr-12 pl-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors text-right placeholder-gray-700`}
                    placeholder="05XXXXXXXX"
                    onChange={(e) => {
                      const onlyNums = e.target.value.replace(/[^0-9]/g, "");
                      setFormData({ ...formData, phone: onlyNums });
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#e6c86a] text-black font-black text-lg py-3 rounded-lg hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.4)] mt-4"
              >
                تأكيد وإرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
