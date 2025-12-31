import React, { useEffect } from 'react';

const AboutPage = () => {
  // เลื่อนขึ้นไปบนสุดเมื่อเปิดหน้านี้
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* ================= HERO ================= */}
      <section 
        className="relative py-32 bg-slate-900"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/about/about.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-6 relative z-10 text-white max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            เกี่ยวกับ Pixels Intelligence
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            เราเชื่อว่าความปลอดภัยที่ดี 
            ต้องมาพร้อมเทคโนโลยีที่เข้าใจการใช้งานจริง 
            และสามารถเติบโตไปพร้อมกับธุรกิจ
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                แนวคิดใหม่ของระบบรักษาความปลอดภัย
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pixels Intelligence ให้บริการออกแบบและบูรณาการ
                ระบบรักษาความปลอดภัยอัจฉริยะ
                โดยผสานเทคโนโลยี AI เข้ากับโซลูชันที่ใช้งานได้จริง
              </p>
              <p className="text-gray-600 leading-relaxed">
                เรามุ่งเน้นระบบที่มีความยืดหยุ่น
                ดูแลรักษาง่าย และรองรับการขยายในอนาคต
                เหมาะสำหรับธุรกิจที่ต้องการความปลอดภัย
                โดยไม่เพิ่มความซับซ้อนเกินความจำเป็น
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Practical Design", desc: "ออกแบบระบบจากการใช้งานจริง ไม่ซับซ้อน และคุ้มค่า" },
                { title: "AI-Driven", desc: "ใช้ AI เพื่อเพิ่มประสิทธิภาพ และลดภาระการดูแลระบบ" },
                { title: "Scalable System", desc: "รองรับการเติบโตของธุรกิจ ในระยะยาว" },
                { title: "Professional Team", desc: "ทีมงานที่เข้าใจทั้งเทคโนโลยี และความต้องการของลูกค้า" }
              ].map((item, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50">
                  <p className="text-blue-600 font-semibold text-lg mb-2">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">
            ความปลอดภัยที่ออกแบบมาเพื่อธุรกิจของคุณ
          </h2>
          <button 
            onClick={() => window.location.href = '/#contact'}
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            ติดต่อเรา
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
