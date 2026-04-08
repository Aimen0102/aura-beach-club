const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// الاتصال بقاعدة البيانات (اختياري حالياً)
// mongoose.connect(process.env.MONGODB_URI);

// مسار استقبال بيانات المشتركين
app.post("/api/register", (req, res) => {
  // استقبال الاسم ورقم الجوال من الواجهة
  const { name, phone } = req.body;

  console.log(`🎉 تم استلام طلب اشتراك جديد!`);
  console.log(`الاسم: ${name} | الجوال: ${phone}`);

  // هنا يتم الحفظ في قاعدة البيانات لاحقاً
  res
    .status(200)
    .json({
      success: true,
      message: "تم استلام طلبك وسيتواصل معك فريق أورا قريباً!",
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 السيرفر يعمل على المنفذ ${PORT}`));
