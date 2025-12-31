import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // เลื่อนขึ้นบนสุดเมื่อเปิดหน้านี้
  }, []);

  // ข้อมูลโครงการ
  const projectList = [
    {
      id: 1,
      title: "อาคารสำนักงานใหญ่ XYZ",
      location: "กรุงเทพมหานคร",
      systems: ["CCTV (AI)", "Access Control (Face Scan)", "Gate Barrier"],
      description: "โครงการติดตั้งระบบรักษาความปลอดภัยครบวงจรสำหรับอาคารสำนักงานขนาดใหญ่ โดยเน้นการผสานเทคโนโลยี AI เพื่อการวิเคราะห์ภาพและควบคุมการเข้าออกอย่างมีประสิทธิภาพ",
      images: [
        "/assets/projects/project-1-main.jpg",
        "/assets/projects/project-1-install-1.jpg",
        "/assets/projects/project-1-install-2.jpg",
        "/assets/projects/project-1-install-3.jpg",
      ]
    },
    {
      id: 2,
      title: "โครงการหมู่บ้านจัดสรร Modern Home",
      location: "นนทบุรี",
      systems: ["Gate Barrier (RFID)", "CCTV (LPR)", "Smart Home Integration"],
      description: "พัฒนาระบบไม้กั้นรถยนต์อัจฉริยะที่เชื่อมต่อกับระบบ RFID และกล้องอ่านป้ายทะเบียน (LPR) เพื่อการจัดการการเข้าออกของลูกบ้านและผู้มาติดต่ออย่างรวดเร็วและปลอดภัย",
      images: [
        "/assets/projects/project-2-main.jpg",
        "/assets/projects/project-2-install-1.jpg",
        "/assets/projects/project-2-install-2.jpg",
      ]
    },
    {
      id: 3,
      title: "โรงงานอุตสาหกรรม FoodTech",
      location: "สมุทรปราการ",
      systems: ["Access Control (Fingerprint)", "Time Attendance", "CCTV"],
      description: "ติดตั้งระบบควบคุมการเข้าออกด้วยลายนิ้วมือและระบบบันทึกเวลาทำงาน เพื่อเพิ่มความปลอดภัยและประสิทธิภาพในการบริหารจัดการบุคลากรภายในโรงงาน",
      images: [
        "/assets/projects/project-3-main.jpg",
        "/assets/projects/project-3-install-1.jpg",
        "/assets/projects/project-3-install-2.jpg",
      ]
    },
    {
      id: 4,
      title: "คอนโดมิเนียมใจกลางเมือง The Loft",
      location: "กรุงเทพมหานคร",
      systems: ["Smart CCTV", "Turnstile", "Visitor Management System"],
      description: "ยกระดับความปลอดภัยในคอนโดมิเนียมด้วยกล้องวงจรปิดอัจฉริยะ ระบบ Turnstile และระบบจัดการผู้มาติดต่อที่ทันสมัย",
      images: [
        "/assets/projects/project-4-main.jpg",
        "/assets/projects/project-4-install-1.jpg",
        "/assets/projects/project-4-install-2.jpg",
      ]
    },
    {
      id: 5,
      title: "คลังสินค้าขนาดใหญ่ Logistics Hub",
      location: "อยุธยา",
      systems: ["CCTV (Perimeter Alert)", "Access Control", "Gate Barrier"],
      description: "ระบบกล้องวงจรปิดพร้อมแจ้งเตือนการบุกรุกพื้นที่ ระบบควบคุมการเข้าออกและไม้กั้นสำหรับรถขนส่ง เพื่อความปลอดภัยสูงสุดของสินค้า",
      images: [
        "/assets/projects/project-5-main.jpg",
        "/assets/projects/project-5-install-1.jpg",
        "/assets/projects/project-5-install-2.jpg",
      ]
    },
    {
      id: 6,
      title: "สถานศึกษา Future Kids School",
      location: "ปทุมธานี",
      systems: ["Access Control (Face Scan)", "CCTV", "Emergency Button"],
      description: "เสริมสร้างความปลอดภัยให้กับนักเรียนและบุคลากร ด้วยระบบสแกนใบหน้าเข้า-ออก กล้องวงจรปิด และปุ่มแจ้งเหตุฉุกเฉิน",
      images: [
        "/assets/projects/project-6-main.jpg",
        "/assets/projects/project-6-install-1.jpg",
        "/assets/projects/project-6-install-2.jpg",
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* HEADER */}
      <section 
  className="relative w-full h-[450px] flex items-center justify-center text-white overflow-hidden"
  style={{
    // ใช้ Linear Gradient เพื่อทำให้ตัวหนังสืออ่านง่ายขึ้นบนภาพ
    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.4)), url('/assets/projects/header-bg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="container mx-auto px-6 relative z-10 text-left">
    <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
    <p className="text-xl text-gray-200 max-w-xl">
      สัมผัสประสบการณ์ความปลอดภัยระดับมาตรฐานสากล 
      ผ่านผลงานการติดตั้งที่ได้รับความไว้วางใจจากองค์กรชั้นนำ
    </p>
  </div>
</section>

      {/* PROJECT GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projectList.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Component ย่อยสำหรับแต่ละ Project Card
const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % project.images.length
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
      {/* Image Slider */}
      <div className="relative w-full md:w-1/2 flex-shrink-0">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} - ${currentImageIndex + 1}`}
          className="w-full h-64 md:h-full object-cover"
        />
        {project.images.length > 1 && (
          <>
            <button 
              onClick={goToPrevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75 transition"
            >
              &#10094;
            </button>
            <button 
              onClick={goToNextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none hover:bg-opacity-75 transition"
            >
              &#10095;
            </button>
          </>
        )}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
          {project.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-75'}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-blue-800">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.systems.map((system, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                {system}
              </span>
            ))}
          </div>
        </div>
        <a 
          href={`#project-${project.id}`} // หรือจะลิงก์ไปหน้า detail แยกทีหลัง
          className="mt-4 self-start bg-gray-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
        >
          ดูรายละเอียดเพิ่มเติม &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;