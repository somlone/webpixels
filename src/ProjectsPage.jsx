import React, { useEffect } from 'react';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectList = [
    {
      id: 1,
      title: "ติดตั้งระบบ CCTV อาคารสำนักงาน",
      category: "CCTV",
      image: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?q=80&w=800",
      description: "ติดตั้งกล้อง AI ตรวจจับใบหน้ากว่า 50 จุด ทั่วทั้งอาคาร"
    },
    {
      id: 2,
      title: "ระบบไม้กั้นรถยนต์อัตโนมัติ (RFID)",
      category: "Gate Barrier",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800",
      description: "โซลูชันเข้า-ออกโครงการหมู่บ้านด้วยระบบ Easy Pass"
    },
    {
      id: 3,
      title: "Access Control โรงงานอุตสาหกรรม",
      category: "Access Control",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
      description: "ควบคุมเวลาเข้างานด้วยการสแกนใบหน้าและวัดอุณหภูมิ"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* HEADER */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">ผลงานของเรา</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ความภาคภูมิใจที่เราได้รับความไว้วางใจจากลูกค้าหลากหลายกลุ่มธุรกิจ 
            ตั้งแต่โครงการหมู่บ้านไปจนถึงโรงงานอุตสาหกรรมขนาดใหญ่
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectList.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;mm
