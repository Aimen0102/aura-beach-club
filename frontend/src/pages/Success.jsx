import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen bg-[#0d0e12] flex flex-col items-center justify-center font-cairo p-6 text-center relative overflow-hidden">
      {/* توهج ذهبي في الخلفية */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[500px] h-[500px] bg-[#d4af37] rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-lg bg-[#0d0e12]/80 backdrop-blur-sm border border-[#d4af37]/30 p-10 rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.15)] animate-fade-in">
        <i className="fa-regular fa-circle-check text-7xl text-[#d4af37] mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] animate-bounce"></i>

        <h1 className="text-4xl font-black text-[#d4af37] mb-4">
          تم استلام طلبك بنجاح!
        </h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed font-bold">
          شكراً لاختيارك الانضمام لنخبة أورا. سيقوم فريقنا بالتواصل معك في أقرب
          وقت لتأكيد حجزك وإتمام الإجراءات.
        </p>

        <Link
          to="/"
          className="inline-block w-full bg-gradient-to-r from-[#d4af37] to-[#e6c86a] text-black font-black text-lg py-3 rounded-lg hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.4)]"
        >
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
