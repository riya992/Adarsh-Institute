import React from "react";
import { BookCheck, Calendar, ShieldCheck, Layers, FileText, ClipboardList } from "lucide-react";

export default function Academia() {
  const ACADEMIC_PILLARS = [
    {
      title: "Quarterly Evaluation Systems",
      desc: "Regular tests and practical sandboxing ensure that learning remains consistent, with comprehensive feedback loops for parents and students.",
      icon: <ClipboardList className="w-6 h-6 text-primary-600" />
    },
    {
      title: "Interactive Digital Syllabus",
      desc: "Our syllabus undergoes annual audits with premium technology partners, keeping pace with updates in Prime ERPs, web standards, and cloud systems.",
      icon: <Layers className="w-6 h-6 text-accent-500" />
    },
    {
      title: "Standard Lab Certifications",
      desc: "Every physical workstation run-time is tested and vetted by cybersecurity protocols, ensuring a clean and safe learning space for students.",
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <section id="academia-section" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-primary-600 dark:text-red-400 uppercase tracking-widest bg-primary-100 dark:bg-red-950/40 px-3 py-1.5 rounded-full">
            Scholastic Frameworks
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Academic Infrastructure
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Our systematic collegiate structures guarantee that computer legacy education is delivered with highest standards of precision and accountability.
          </p>
        </div>

        {/* Info Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Statistics Display (Left side) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm text-center space-y-2 hover:shadow-md transition-all">
              <span className="block font-display font-extrabold text-3xl text-primary-600 dark:text-red-400">8000+</span>
              <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Exam Cleared</span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Certified candidates clearing standard national evaluation boards.</p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm text-center space-y-2 hover:shadow-md transition-all">
              <span className="block font-display font-extrabold text-3xl text-primary-600 dark:text-red-400">1:1</span>
              <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Node Allocation</span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Every single student gets an independent high-spec workstation.</p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm text-center space-y-2 hover:shadow-md transition-all">
              <span className="block font-display font-extrabold text-3xl text-primary-600 dark:text-red-400">24/7</span>
              <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Digital Portal</span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Instant access to lecture materials, task checklists, and class videos.</p>
            </div>

            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm text-center space-y-2 hover:shadow-md transition-all">
              <span className="block font-display font-extrabold text-3xl text-primary-600 dark:text-red-400">100%</span>
              <span className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Internal Lab Vetting</span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">All student projects are peer-reviewed in on-campus sandbox hubs.</p>
            </div>

          </div>

          {/* Core academic pillars (Right side) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-2xl text-slate-800 dark:text-slate-100">
              Upholding Scholastic Legacy Voids
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Adarsh Institute structures semesters to emphasize conceptual design as well as high-performance practical assignments. By standardizing evaluation frameworks, we maintain an unmatched level of pedagogical quality.
            </p>

            <div className="space-y-4 pt-4">
              {ACADEMIC_PILLARS.map((pillar) => (
                <div key={pillar.title} className="bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 p-4 rounded-2xl flex gap-4 items-start shadow-sm transition-all">
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-xl shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-slate-800 dark:text-slate-200">{pillar.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
