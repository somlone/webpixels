import React, { useState } from 'react';
import './index.css';
import AboutPage from './AboutPage'; // มั่นใจว่ามีไฟล์ AboutPage.jsx อยู่ในโฟลเดอร์ src
import ProjectsPage from './ProjectsPage';

const App = () => {
  // สร้าง State สำหรับควบคุมการสลับหน้า
  const [currentPage, setCurrentPage] = useState('home');

  // ทำปุ่ม Hamburger Menu สำหรับมือถือ
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // สร้าง Pop-up ติดต่อเราสำเร็จ
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- 2. ฟังก์ชันจัดการการส่งฟอร์ม (วางตรงนี้เลยครับ) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      // เปลี่ยน your_id_here เป็น ID จริงของคุณจาก Formspree
      const response = await fetch("https://formspree.io/f/xojqgzgr", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true); // สั่งให้ Popup แสดงผล
        form.reset();         // ล้างข้อมูลในช่องกรอก
      } else {
        alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
      }
    } catch (error) {
      console.error("Submission Error:", error); // นำตัวแปร error มาใช้งานตรงนี้
      alert("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้");
    }
  };

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
          {/* LOGO */}
        <div 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={() => { navigateTo('home'); setIsMenuOpen(false); }}
        >
          <img src="/assets/logo.png" alt="Logo" className="h-10 md:h-12 w-auto" />
          <div className="text-lg md:text-xl font-bold text-blue-900 leading-tight block">
            PIXELS INTELLIGENCE CO., LTD.
          </div>
        </div>

        {/*ปุ่ม HAMBURGER (แสดงเฉพาะมือถือ) */}
        <button 
          className="md:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isMenuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        )}
      </svg>
    </button>

    {/* เมนูสำหรับ DESKTOP (ซ่อนในมือถือ) */}
    <div className="hidden md:flex space-x-8 font-medium items-center">
      <button onClick={() => navigateTo('home')} className={`hover:text-blue-600 ${currentPage === 'home' ? 'text-blue-600' : ''}`}>หน้าแรก</button>
      <a href="#services" onClick={() => currentPage !== 'home' && navigateTo('home')} className="hover:text-blue-600">สินค้าและบริการ</a>
      <button onClick={() => navigateTo('projects')} className={`hover:text-blue-600 ${currentPage === 'projects' ? 'text-blue-600' : ''}`}>ผลงานของเรา</button>
      <button onClick={() => navigateTo('about')} className={`hover:text-blue-600 ${currentPage === 'about' ? 'text-blue-600' : ''}`}>เกี่ยวกับเรา</button>
      <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">ติดต่อเรา</a>
    </div>
  </div>

  {/* เมนูสำหรับ MOBILE (แสดงเมื่อกดปุ่ม Hamburger เท่านั้น) */}
  {isMenuOpen && (
    <div className="md:hidden bg-white border-t border-gray-100 flex flex-col font-medium overflow-hidden animate-fade-in-down">
      <button 
        onClick={() => { navigateTo('home'); setIsMenuOpen(false); }} 
        className="px-6 py-4 text-left border-b border-gray-50 hover:bg-gray-50"
      >หน้าแรก</button>
      <a 
        href="#services" 
        onClick={() => { if(currentPage !== 'home') navigateTo('home'); setIsMenuOpen(false); }} 
        className="px-6 py-4 text-left border-b border-gray-50 hover:bg-gray-50"
      >สินค้าและบริการ</a>
      <button 
        onClick={() => { navigateTo('projects'); setIsMenuOpen(false); }} 
        className="px-6 py-4 text-left border-b border-gray-50 hover:bg-gray-50"
      >ผลงานของเรา</button>
      <button 
        onClick={() => { navigateTo('about'); setIsMenuOpen(false); }} 
        className="px-6 py-4 text-left border-b border-gray-50 hover:bg-gray-50"
      >เกี่ยวกับเรา</button>
      <a 
        href="#contact" 
        onClick={() => setIsMenuOpen(false)}
        className="px-6 py-4 text-blue-600 font-bold bg-blue-50"
      >ติดต่อเรา</a>
    </div>
  )}
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
            <div className="p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">ติดต่อเรา</h2>
                <p className="opacity-80 mb-6">ปรึกษาและประเมินหน้างานฟรี</p>
                <div className="space-y-3 text-sm mb-8">
                  <p className="flex items-center">
                    <span className="mr-3">📞</span> 061-776-2583, 084-795-4954
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">📧</span> sales@pixelsintelligence.com
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">📍</span> 311/60 ถนนเทิดราชัน แขวงสีกัน เขตดอนเมือง กทม. 10210
                  </p>
                </div>
              </div>

              {/* เพิ่มส่วน Social Media & Line QR Code ด้านล่าง */}
              <div className="pt-6 border-t border-blue-800">
                <p className="text-sm font-semibold mb-4 text-blue-200">ช่องทางออนไลน์</p>
                <div className="flex items-center space-x-6">
                  {/* Line QR Code */}
                  <div className="text-center">
                    <img 
                      src="/assets/line-qr.jpg" 
                      alt="Line QR Code" 
                      className="w-24 h-24 rounded-lg bg-white p-1 mb-2"
                    />
                    <p className="text-[10px] opacity-70">สแกนเพิ่มเพื่อน</p>
                  </div>

                  {/* Facebook Link */}
                  <div className="flex flex-col space-y-3">
                    <a 
                      href="https://facebook.com/pixelsintelligence" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-full transition text-xs"
                    >
                      <img src="/assets/icons/facebook.svg" alt="FB" className="w-5 h-5" />
                      <span>Pixels Intelligence</span>
                    </a>
                    <div className="text-[10px] opacity-60 ml-2">
                      ติดตามข่าวสารและผลงานล่าสุด
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT SECTION */}
            <div className="p-10 bg-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* ... ช่อง Input ต่างๆ เหมือนเดิมแต่ต้องมี name ทุกช่อง ... */}
                <input name="name" required className="w-full border px-4 py-2 rounded-lg" placeholder="ชื่อ" type="text" />
                <input name="email" required className="w-full border px-4 py-2 rounded-lg" placeholder="อีเมล / โทรศัพท์" type="text" />
                <textarea name="message" required className="w-full border px-4 py-2 rounded-lg h-32" placeholder="รายละเอียด"></textarea>
    
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                ส่งข้อความหาเรา
                </button>
              </form>
            </div>

            {/* --- ส่วนของ POPUP (วางไว้ก่อนปิด </div> สุดท้ายของ App) --- */}
            {isSubmitted && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
                <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-bounce-short">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">ส่งข้อความสำเร็จ!</h3>
                  <p className="text-gray-600 mb-6">เราได้รับข้อมูลของท่านแล้ว และจะติดต่อกลับโดยเร็วที่สุด</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
                  >
                    ตกลง
                  </button>
                </div>
              </div>
            )}
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