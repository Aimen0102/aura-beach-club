import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. استيراد كل الصفحات بحرف كبير (Capital) لتجنب الأخطاء
import Home from "./pages/Home";
import LuxuryGuide from "./pages/LuxuryGuide";
import EliteFitness from "./pages/EliteFitness";
import Success from "./pages/Success";
import Tourism from "./pages/Tourism";
import Sports from "./pages/Sports";
import Investment from "./pages/Investment";
import Entertainment from "./pages/Entertainment";
import BlogDetails from "./pages/BlogDetails";
import Education from "./pages/Education";
import Medical from "./pages/Medical";
import Register from "./pages/Register"; // 👈 استيراد صفحة التسجيل

function App() {
  return (
    <Router>
      <Routes>
        {/* 2. المسارات (paths) يجب أن تكون بحروف صغيرة لتتطابق مع الروابط */}
        <Route path="/" element={<Home />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/luxury-guide" element={<LuxuryGuide />} />
        <Route path="/elite-fitness" element={<EliteFitness />} />

        <Route path="/Blog-details" element={<BlogDetails />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/education" element={<Education />} />
        <Route path="/medical" element={<Medical />} />

        {/* 3. مسار صفحة التسجيل لكي تعمل الأزرار */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
