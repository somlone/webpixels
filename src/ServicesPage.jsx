import React from 'react';

const ServicesPage = () => {
  const systems = [
    {
      id: 'cctv',
      title: 'Video Surveillance System (CCTV)',
      subtitle: 'ระบบกล้องวงจรปิดอัจฉริยะ',
      description: 'โซลูชันรักษาความปลอดภัยที่มากกว่าการบันทึกภาพ ด้วยระบบ AI วิเคราะห์พฤติกรรม ตรวจจับใบหน้า และอ่านป้ายทะเบียนรถ (LPR) อย่างแม่นยำ',
      logos: ['Hikvision', 'Dahua', 'Digiaver', 'Axis'], // รายชื่อแบรนด์
      features: ['ความละเอียดคมชัดระดับ 4K', 'ดูออนไลน์ได้ทุกที่ 24 ชม.', 'ระบบแจ้งเตือนผ่านมือถือทันที'],
      icon: '🛡️'
    },
    {
      id: 'access-control',
      title: 'Access Control & Time Attendance',
      subtitle: 'ระบบควบคุมการเข้า-ออก และลงเวลาอัจฉริยะ',
      description: 'เพิ่มความปลอดภัยให้พื้นที่ส่วนบุคคลด้วยเทคโนโลยี Biometric ขั้นสูง ทั้งการสแกนใบหน้า ลายนิ้วมือ และการจัดการสิทธิ์ผ่านระบบ Cloud',
      logos: ['ZKTeco', 'HIP', 'HID', 'Suprema', 'Hikvision'],
      features: ['รองรับการสแกนแม้สวมหน้ากาก', 'ดึงรายงานสรุปเวลาทำงานอัตโนมัติ', 'เชื่อมต่อกับระบบ Fire Alarm'],
      icon: '🔑'
    },
    {
      id: 'gate-barrier',
      title: 'Parking & Gate Barrier System',
      subtitle: 'ระบบบริหารจัดการที่จอดรถและไม้กั้นอัตโนมัติ',
      description: 'ยกระดับการเข้า-ออกโครงการหรืออาคาร ด้วยระบบไม้กั้นอัตโนมัติที่เชื่อมต่อกับระบบอ่านป้ายทะเบียน หรือ Long Range RFID',
      logos: ['HIP', 'Hikvision', 'ZKTeco'],
      features: ['ไม้กั้นความเร็วสูง ทนทานต่อการใช้งานหนัก', 'ระบบป้องกันไม้กั้นตีรถ (Loop Detector)', 'เชื่อมต่อระบบคิดเงินค่าจอดรถ'],
      icon: '🚧'
    },
    {
      id: 'network',
      title: 'Network Infrastructure & Server',
      subtitle: 'ระบบโครงสร้างเครือข่ายและเซิร์ฟเวอร์',
      description: 'วางรากฐานการสื่อสารที่มีเสถียรภาพด้วยระบบ Fiber Optic, Wi-Fi 6 และการจัดระเบียบ Server Rack มาตรฐานวิศวกรรม',
      logos: ['Cisco', 'DLink', 'TPLink', 'Linksys'],
      features: ['ออกแบบระบบ Network เฉพาะทาง', 'ติดตั้งและเข้าหัว Fiber Optic', 'ระบบสำรองข้อมูล (Backup)'],
      icon: '🌐'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">สินค้าและบริการอัจฉริยะ</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            เราคัดสรรเฉพาะอุปกรณ์มาตรฐานสากล พร้อมการออกแบบระบบที่ตอบโจทย์ธุรกิจทุกระดับ
          </p>
        </div>

        {/* Systems Grid */}
        <div className="space-y-20">
          {systems.map((item, index) => (
            <div key={item.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Text Content */}
              <div className="flex-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">{item.title}</h3>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">{item.subtitle}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {item.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <span className="text-green-500 mr-2">✔</span> {feat}
                    </li>
                  ))}
                </ul>
                
                {/* Brand Logos Placeholder */}
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-4">Trusted Brands:</p>
                  <div className="flex flex-wrap gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {item.logos.map((logo) => (
                      <span key={logo} className="font-black text-lg text-slate-400 border border-gray-200 px-3 py-1 rounded">
                        {logo}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="flex-1 w-full h-[350px] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex items-center justify-center text-gray-400 italic">
                {/* คุณสามารถเปลี่ยนเป็นรูปภาพจริงของระบบนั้นๆ ได้ที่นี่ */}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
