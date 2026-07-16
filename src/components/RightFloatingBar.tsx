import React, { useState } from "react";
import { MessageCircle, Phone, Instagram, Download, ChevronLeft, ChevronRight, Check, Facebook } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function RightFloatingBar() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    
    // Simulate brochure download
    const brochureText = `
=========================================
ADARSH COMPUTER EDUCATION & IT INSTITUTE
=========================================
Our World-Class Computer Curriculum & Programmes:

1. Office Automation (Basic) - 2 Months
2. DTP (Desktop Publishing) - 3 Months
3. Tally Prime with GST - 3 Months
4. Web Designing (HTML, CSS, Flash MX) - 3 Months
5. Spoken English - 3 Months
6. DCA (Diploma in Computer Applications) - 6 Months
7. ADCA (Advanced Diploma in Computer Applications) - 1 Year
8. Digital Marketing - 3 Months
9. C Programming - 2 Months
10. C++ Programming - 2 Months
11. Core Java - 3 Months
12. Python - 3 Months
13. MySQL - 2 Months
14. DSA (Data Structures & Algorithms) - 3 Months
15. Under-Graduate Degrees (BCA, B.Sc CS, B.Com) - 3 Years
16. Post-Graduate Degrees (MCA, M.Sc CS, MBA IT) - 2 Years

Contact Helpline: ${CONTACT_INFO.phone}
Email: ${CONTACT_INFO.email}
Address: ${CONTACT_INFO.address}
=========================================
Join the Legacy of Professional Excellence!
`;
    
    const blob = new Blob([brochureText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Adarsh_Institute_Brochure_2026.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  if (isCollapsed) {
    return (
      <button
        onClick={() => setIsCollapsed(false)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary-950 text-white p-2.5 rounded-l-xl shadow-2xl border-l border-t border-b border-primary-800 hover:bg-primary-900 transition-all duration-300 flex items-center justify-center cursor-pointer"
        title="Show Quick Sidebar"
        id="btn-sidebar-expand"
      >
        <ChevronLeft className="w-5 h-5 animate-pulse" />
      </button>
    );
  }

  return (
    <div 
      id="right-sticky-sidebar" 
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end font-sans transition-all duration-300"
    >
      {/* Collapse button above the items */}
      <button
        onClick={() => setIsCollapsed(true)}
        className="bg-slate-900/90 text-white p-1 rounded-tl-lg border-l border-t border-slate-700 hover:bg-slate-800 transition-colors mr-0 mb-1 cursor-pointer"
        title="Hide Sidebar"
        id="btn-sidebar-collapse"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Main Action Stack */}
      <div className="flex flex-col shadow-2xl border-l border-t border-b border-slate-200/20 dark:border-slate-800 overflow-hidden rounded-l-2xl">
        
        {/* 1. WhatsApp Button (Teal-Green) */}
        <a
          href={CONTACT_INFO.whatsappGroup}
          target="_blank"
          rel="noopener"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all duration-300 cursor-pointer"
          title="WhatsApp Enquiry"
          id="sidebar-whatsapp"
        >
          {/* Slide-out tooltip label */}
          <span className="absolute right-14 top-0 h-full px-4 bg-[#25D366] text-white text-xs font-bold items-center justify-center hidden group-hover:flex transition-all duration-300 rounded-l-xl whitespace-nowrap shadow-md border-r border-white/10">
            WhatsApp Chat
          </span>
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366] group-hover:scale-110 transition-transform" />
        </a>

        {/* 2. Phone Call Button (Golden Yellow/Orange) */}
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
          className="group relative flex items-center justify-center w-14 h-14 bg-[#F2A900] hover:bg-[#d49400] text-white transition-all duration-300 cursor-pointer"
          title="Call Admission Helpline"
          id="sidebar-phone"
        >
          {/* Slide-out tooltip label */}
          <span className="absolute right-14 top-0 h-full px-4 bg-[#F2A900] text-white text-xs font-bold items-center justify-center hidden group-hover:flex transition-all duration-300 rounded-l-xl whitespace-nowrap shadow-md border-r border-white/10">
            Call support
          </span>
          <Phone className="w-5 h-5 fill-white text-[#F2A900] group-hover:scale-110 transition-transform" />
        </a>

        {/* 3. Instagram Button (Brand Gradient) */}
        <a
          href={CONTACT_INFO.instagram}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white transition-all duration-300 cursor-pointer"
          title="Follow Instagram"
          id="sidebar-instagram"
        >
          {/* Slide-out tooltip label */}
          <span className="absolute right-14 top-0 h-full px-4 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white text-xs font-bold items-center justify-center hidden group-hover:flex transition-all duration-300 rounded-l-xl whitespace-nowrap shadow-md border-r border-white/10">
            Instagram Page
          </span>
          <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>

        {/* 4. Facebook Button (Facebook Blue #1877F2) */}
        <a
          href="https://www.facebook.com/share/1DTAQXq9eC/"
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#1877F2] hover:bg-[#166fe5] text-white transition-all duration-300 cursor-pointer"
          title="Follow Facebook"
          id="sidebar-facebook"
        >
          {/* Slide-out tooltip label */}
          <span className="absolute right-14 top-0 h-full px-4 bg-[#1877F2] text-white text-xs font-bold items-center justify-center hidden group-hover:flex transition-all duration-300 rounded-l-xl whitespace-nowrap shadow-md border-r border-white/10">
            Facebook Page
          </span>
          <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform fill-white text-[#1877F2]" />
        </a>

        {/* 4. Download Syllabus/Brochure (Red) */}
        <button
          onClick={handleDownloadBrochure}
          className="group relative flex items-center justify-center w-14 h-14 bg-[#D32F2F] hover:bg-[#b71c1c] text-white transition-all duration-300 cursor-pointer"
          title="Download Institute Brochure"
          id="sidebar-download"
        >
          {/* Slide-out tooltip label */}
          <span className="absolute right-14 top-0 h-full px-4 bg-[#D32F2F] text-white text-xs font-bold items-center justify-center hidden group-hover:flex transition-all duration-300 rounded-l-xl whitespace-nowrap shadow-md border-r border-white/10">
            {downloadSuccess ? "Brochure Ready!" : "Download Syllabus"}
          </span>
          {downloadSuccess ? (
            <Check className="w-5 h-5 text-white animate-bounce" />
          ) : (
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
          )}
        </button>

      </div>
    </div>
  );
}
