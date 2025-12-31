import React, { useState } from 'react';
import './index.css';
import AboutPage from './AboutPage'; // มั่นใจว่ามีไฟล์ AboutPage.jsx อยู่ในโฟลเดอร์ src
import ProjectsPage from './ProjectsPage';

const App = () => {
  // สร้าง State สำหรับควบคุมการสลับหน้า
  const [currentPage, setCurrentPage] = useState('home');

  // ฟังก์ชันช่วยเลื่อนจอขึ้นบนสุดเวลาเปลี่ยนหน้า
  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
    window.scrollTo(0, 0);
  };

  // --- ส่วนประกอบของหน้าแรก (Landing Page Content) ---
  const LandingPageContent = () => (
    <>
      {/* HERO SECTION */}
      <header 
        className="h-[600px] flex items-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ยกระดับความปลอดภัยทางธุรกิจ<br />
            ด้วยเทคโนโลยีอัจฉริยะ
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl">
            ผู้นำด้านการออกแบบและติดตั้งระบบ CCTV, Access Control และ Gate Barrier ครบวงจร
          </p>
          <a 
            href="#services" 
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            ดูบริการของเรา
          </a>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">บริการหลักของเรา</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon="/assets/icons/cctv.svg" title="CCTV" color="text-blue-800" desc="ระบบกล้อง IP Camera พร้อม AI วิเคราะห์ใบหน้าและป้ายทะเบียน" />
            <ServiceCard icon="/assets/icons/acs.svg" title="Access Control" color="text-teal-700" desc="ควบคุมการเข้า-ออกด้วยใบหน้า ลายนิ้วมือ และระบบลงเวลา" />
            <ServiceCard icon="/assets/icons/turnstile.svg" title="Turnstile" color="text-slate-700" desc="เครื่องกั้นทางเดินอัตโนมัติสำหรับอาคารสำนักงาน" />
            <ServiceCard icon="/assets/icons/barrier.svg" title="Gate Barrier" color="text-orange-900" desc="ระบบไม้กั้นรถ เชื่อม RFID และอ่านป้ายทะเบียน" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img 
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80" 
            alt="Security System" 
            loading="lazy" 
            className="rounded-xl shadow-2xl" 
          />
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">ทำไมต้องเลือก Pixels Intelligence?</h2>
            <ul className="space-y-4 text-lg">
              <li>✔ ออกแบบระบบโดยวิศวกรมืออาชีพ</li>
              <li>✔ ใช้อุปกรณ์มาตรฐานระดับสากล</li>
              <li>✔ บริการหลังการขายและดูแลระยะยาว</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );

  // Component ย่อยสำหรับ Card บริการ
  const ServiceCard = ({ icon, title, desc, color }) => (
    <div className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition bg-white">
      <div className="mb-4 flex justify-center">
        <img src={icon} alt={title} className="h-12 w-12" />
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${color}`}>{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => navigateTo('home')}
          >
            <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto" />
            <div className="text-xl font-bold text-blue-900 leading-tight hidden sm:block">
              PIXELS INTELLIGENCE
            </div>
          </div>

          <div className="hidden md:flex space-x-8 font-medium items-center">
            <button onClick={() => navigateTo('home')} className={`hover:text-blue-600 ${currentPage === 'home' ? 'text-blue-600' : ''}`}>หน้าแรก</button>
            <a href="#services" onClick={() => currentPage !== 'home' && navigateTo('home')} className="hover:text-blue-600">สินค้าและบริการ</a>
            <button onClick={() => navigateTo('projects')} className={`hover:text-blue-600 ${currentPage === 'projects' ? 'text-blue-600' : ''}`}>ผลงานของเรา</button>
            <button onClick={() => navigateTo('about')} className={`hover:text-blue-600 ${currentPage === 'about' ? 'text-blue-600' : ''}`}>เกี่ยวกับเรา</button>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              ติดต่อเรา
            </a>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT Area */}
      <main>
        {currentPage === 'home' && <LandingPageContent />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'projects' && <ProjectsPage />}
      </main>

      {/* CONTACT SECTION (แสดงทุกหน้า) */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-blue-900 rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">
            <div className="p-10 text-white">
              <h2 className="text-3xl font-bold mb-4">ติดต่อเรา</h2>
              <p className="opacity-80 mb-6">ปรึกษาและประเมินหน้างานฟรี</p>
              <div className="space-y-3 text-sm">
                <p>📞 061-776-2583, 084-795-4954</p>
                <p>📧 sales@pixelsintelligence.com</p>
                <p>📍 311/60 ถนนเทิดราชัน แขวงสีกัน เขตดอนเมือง กทม. 10210</p>
              </div>
            </div>
            <div className="p-10 bg-white">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full border px-4 py-2 rounded-lg" placeholder="ชื่อ" type="text" />
                <input className="w-full border px-4 py-2 rounded-lg" placeholder="อีเมล / โทรศัพท์" type="text" />
                <textarea className="w-full border px-4 py-2 rounded-lg h-32" placeholder="รายละเอียด"></textarea>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">ส่งข้อความ</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-8">
        © 2025 Pixels Intelligence Co., Ltd. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;