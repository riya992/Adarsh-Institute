import React, { useState } from "react";
import { BookOpen, Globe, GraduationCap, Trophy, BookCheck, ArrowRight, ArrowLeft, Plus, Minus, Calendar, Users, Award, Shield } from "lucide-react";
import { COURSE_CATALOG_DATA, CatalogCategory, CourseDetail } from "../courseCatalogData";

export default function Eligibility() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("diploma");
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail | null>(null);

  // States for sub-selections within B.Tech and MBA
  const [selectedBtechStream, setSelectedBtechStream] = useState<string>("Computer Science & Engineering");
  const [selectedMbaSpecialization, setSelectedMbaSpecialization] = useState<string>("Financial Management");

  // Get active category
  const activeCategory = COURSE_CATALOG_DATA.find(cat => cat.id === activeCategoryId) || COURSE_CATALOG_DATA[0];

  const getCategoryIcon = (id: string, active: boolean) => {
    const baseClass = "w-7 h-7 transition-all duration-300";
    const activeColorClass = active ? "text-white" : "";
    
    switch (id) {
      case "diploma":
        return <BookCheck className={`${baseClass} ${activeColorClass || "text-amber-500 group-hover:text-amber-400"}`} />;
      case "regular":
        return <BookOpen className={`${baseClass} ${activeColorClass || "text-red-500 group-hover:text-red-400"}`} />;
      case "distance":
        return <Globe className={`${baseClass} ${activeColorClass || "text-emerald-500 group-hover:text-emerald-400 animate-pulse"}`} />;
      case "ug":
        return <GraduationCap className={`${baseClass} ${activeColorClass || "text-rose-500 group-hover:text-rose-400"}`} />;
      case "pg":
        return <Trophy className={`${baseClass} ${activeColorClass || "text-sky-500 group-hover:text-sky-400"}`} />;
      default:
        return <BookCheck className={`${baseClass} ${activeColorClass || "text-amber-500"}`} />;
    }
  };

  // Helper to handle course click from the sidebar
  const handleCourseClick = (courseName: string, detail: CourseDetail) => {
    setSelectedCourse(detail);
    // Scroll to the course container
    setTimeout(() => {
      document.getElementById("programmes-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Define B.Tech streams lists and MBA specializations lists
  const btechStreams = [
    "Aerospace Engineering",
    "Aeronautical Engineering",
    "Aircraft Maintenance Engineering",
    "Civil Engineering",
    "Computer Science & Engineering",
    "AI & ML",
    "Cyber Security",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Electronics & Communication Engineering"
  ];

  const mbaSpecializations = [
    "Aviation Management",
    "Financial Management",
    "Human Resource Management",
    "Marketing Management",
    "Operations Management"
  ];

  return (
    <section id="programmes-section" className="py-24 bg-slate-900 dark:bg-slate-950 relative transition-colors duration-300 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Course Catalog Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-primary-500 dark:text-red-400 uppercase tracking-widest bg-primary-950/40 border border-primary-900/60 px-4 py-2 rounded-full">
            Technical & Professional Education Legacy
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            Programmes & Courses
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Unlock your potential with our multi-layered curriculum dashboard. Transition between study modes and engineering pathways.
          </p>
        </div>

        {/* Dashboard Sequence Controller */}
        {!selectedCourse ? (
          /* LAYER 1 & 2: CATEGORY DASHBOARD AND SIDEBAR MENU */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="catalog-dashboard-container">
            
            {/* Left Column (lg:col-span-6): 5 Dashboard Category Cards */}
            <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                  Select Educational Stream (Layer 1)
                </h3>
                
                {COURSE_CATALOG_DATA.map((category) => {
                  const isActive = activeCategoryId === category.id;
                  return (
                    <div
                      key={category.id}
                      onMouseEnter={() => setActiveCategoryId(category.id)}
                      onClick={() => setActiveCategoryId(category.id)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group relative overflow-hidden ${
                        isActive
                          ? "bg-slate-800/80 border-primary-500/80 shadow-lg shadow-primary-950/30 translate-x-1.5"
                          : "bg-slate-900/40 hover:bg-slate-800/40 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {/* Left accent bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                        isActive ? "bg-primary-500" : "bg-transparent group-hover:bg-slate-700"
                      }`} />

                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? "bg-primary-600 shadow-md shadow-primary-950/20" 
                            : "bg-slate-900 dark:bg-slate-950"
                        }`}>
                          {getCategoryIcon(category.id, isActive)}
                        </div>
                        <div>
                          <h4 className={`font-display font-bold text-sm transition-colors ${
                            isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                          }`}>
                            {category.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 group-hover:text-slate-350 mt-1 max-w-sm line-clamp-1">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md transition-all ${
                          isActive
                            ? "bg-primary-950/60 text-accent-400 border border-primary-900"
                            : "bg-slate-900/80 text-slate-400 border border-slate-800 group-hover:border-slate-750"
                        }`}>
                          {category.courses.length} {category.courses.length === 1 ? "Program" : "Programs"}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                          isActive ? "text-primary-400 translate-x-1" : "text-slate-500 group-hover:text-slate-350 group-hover:translate-x-0.5"
                        }`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Call Counselor bar inside left column */}
              <div className="p-5 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-850 border border-slate-800/80 flex items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-850 p-2.5 rounded-xl text-primary-400 border border-slate-750">
                    <BookCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-white">Need help choosing a program?</h5>
                    <p className="text-[10px] text-slate-400">Speak directly with our counselor at the helpdesk.</p>
                  </div>
                </div>
                <a
                  href="tel:+919212621301"
                  className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-[10px] uppercase tracking-wider transition-colors shrink-0"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Column (lg:col-span-6): Dedicated Vertical Sidebar Menu */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary-950/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-6">
                  {/* Sidebar Title */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-500">
                        Active Sidebar Menu (Layer 2)
                      </span>
                      <h4 className="font-display font-black text-xl text-white mt-0.5">
                        {activeCategory.title} Index
                      </h4>
                    </div>
                    <div className="bg-slate-850/80 px-3 py-1.5 rounded-xl border border-slate-750 text-[10px] text-slate-450 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Dynamic Sync
                    </div>
                  </div>

                  {/* Course Index List */}
                  <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                    {activeCategory.courses.map((course) => (
                      <button
                        key={course.name}
                        onClick={() => handleCourseClick(course.name, course.detail)}
                        className="w-full text-left p-4 bg-slate-950/40 hover:bg-slate-900 border border-slate-850 hover:border-slate-700/80 rounded-xl transition-all duration-300 flex items-center justify-between group/item cursor-pointer"
                      >
                        <div className="space-y-1">
                          <span className="font-bold text-xs text-slate-200 group-hover/item:text-white transition-colors block">
                            {course.name}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] text-slate-450 flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-slate-500" /> {course.detail.duration}
                            </span>
                            <span className="text-[10px] text-slate-450">• {course.detail.modeOfStudy}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {course.badge && (
                            <span className="bg-emerald-950/60 text-emerald-400 border border-emerald-900/50 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded">
                              {course.badge}
                            </span>
                          )}
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-white group-hover/item:translate-x-1 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Eligibility Summary Footer */}
                <div className="mt-8 pt-4 border-t border-slate-800/40 bg-slate-950/30 p-4 rounded-2xl border border-slate-850 text-xs flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-primary-500">
                      Standard Eligibility Requirement
                    </span>
                    <span className="font-bold text-slate-200 block mt-0.5">
                      {activeCategory.eligibilitySummary}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-450 shrink-0">Click course to view syllabus</span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* LAYER 3: INDIVIDUAL COURSE INNER PAGE DEEP-DIVE TEMPLATE */
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500" id="course-deepdive-container">
            
            {/* Back Button */}
            <div className="flex justify-start">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 transition-all font-bold text-xs uppercase tracking-wider cursor-pointer flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Catalog Dashboard
              </button>
            </div>

            {/* Course Hero Header (Distinct bold dark-blue stylized title) */}
            <div className="bg-gradient-to-r from-blue-950/90 to-slate-900 rounded-3xl p-6 sm:p-8 border border-blue-900/60 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />
              
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-800/40 px-3 py-1 rounded-full inline-block">
                  {activeCategory.title} Catalog (Layer 3)
                </span>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-blue-100 tracking-tight">
                  {selectedCourse.name}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  Comprehensive academic catalog profile, objectives, highlights, and semester breakdown syllabus.
                </p>
              </div>
            </div>

            {/* Quick-Facts Summary Card (Crisp white / ultra-light solid bg, sharp dark charcoal text) */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg text-slate-900">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-slate-400" /> Course Specifications & Metadata
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="p-2.5 rounded-xl bg-slate-200/50 text-slate-800">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 block">Course Duration</span>
                    <span className="font-black text-sm text-slate-900">{selectedCourse.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="p-2.5 rounded-xl bg-slate-200/50 text-slate-800">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 block">Mode of Study</span>
                    <span className="font-black text-sm text-slate-900">{selectedCourse.modeOfStudy}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="p-2.5 rounded-xl bg-slate-200/50 text-slate-800">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 block">Seat Intake & Batches</span>
                    <span className="font-black text-sm text-slate-900">{selectedCourse.seatIntake}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* B.Tech Sub-Streams or MBA Specializations tab section if applicable */}
            {selectedCourse.name.includes("B.Tech") && (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    Select B.Tech Specialization Stream (10 Sub-streams Available):
                  </h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Toggle streams to load targeted curriculum profiles.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {btechStreams.map(stream => (
                    <button
                      key={stream}
                      onClick={() => setSelectedBtechStream(stream)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold tracking-wide transition-all cursor-pointer border ${
                        selectedBtechStream === stream
                          ? "bg-primary-600 text-white border-transparent shadow-md"
                          : "bg-slate-950/40 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {stream}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedCourse.name === "Master of Business Administration (MBA)" && (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    Select MBA Specialization (5 Tracks Available):
                  </h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Toggle tracks to explore dedicated curriculum focus.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mbaSpecializations.map(spec => (
                    <button
                      key={spec}
                      onClick={() => setSelectedMbaSpecialization(spec)}
                      className={`px-3.5 py-2 rounded-xl text-[11px] font-bold tracking-wide transition-all cursor-pointer border ${
                        selectedMbaSpecialization === spec
                          ? "bg-primary-600 text-white border-transparent shadow-md"
                          : "bg-slate-950/40 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Four-Tier Expandable Accordion System (ELIGIBILITY, COURSE OBJECTIVE, PROGRAMME HIGHLIGHTS, PROGRAMME SYLLABUS) */}
            <div className="space-y-4" id="course-accordions-group">
              
              {/* Accordion 1: ELIGIBILITY */}
              <DeepDiveAccordionItem 
                title="ELIGIBILITY" 
                defaultOpen={true}
              >
                <div className="space-y-3">
                  <span className="inline-block text-[9px] font-black uppercase tracking-widest text-slate-500 bg-slate-200/50 px-2.5 py-1 rounded">
                    Board Requirements & Cut-offs
                  </span>
                  <p className="text-xs text-slate-700 font-bold leading-relaxed">
                    {selectedCourse.name.includes("B.Tech") 
                      ? `Minimum 60% aggregate marks in 10+2 with Physics, Chemistry, and Mathematics (PCM) as compulsory subjects. Admission via JEE Main ranking or college entrance test for ${selectedBtechStream}.` 
                      : selectedCourse.name === "Master of Business Administration (MBA)"
                      ? `Minimum 50% aggregate marks in Graduation in any stream from a recognized university. Valid scores in national exams like CAT, MAT, CMAT, or equivalent required for ${selectedMbaSpecialization}.`
                      : selectedCourse.eligibility}
                  </p>
                </div>
              </DeepDiveAccordionItem>

              {/* Accordion 2: COURSE OBJECTIVE */}
              <DeepDiveAccordionItem title="COURSE OBJECTIVE">
                <p className="text-xs text-slate-750 font-medium leading-relaxed">
                  {selectedCourse.name.includes("B.Tech")
                    ? `Our B.Tech in ${selectedBtechStream} aims to build deep, state-of-the-art computational and engineering capabilities. Students undergo intensive sandbox training, design analysis, and laboratory validation protocols targeting modern technical positions.`
                    : selectedCourse.name === "Master of Business Administration (MBA)"
                    ? `The objective of this program is to build top-tier strategic management capabilities tailored for the ${selectedMbaSpecialization} domain, developing leadership skills, analytical problem solving, and global business models.`
                    : selectedCourse.objective}
                </p>
              </DeepDiveAccordionItem>

              {/* Accordion 3: PROGRAMME HIGHLIGHTS */}
              <DeepDiveAccordionItem title="PROGRAMME HIGHLIGHTS">
                <ul className="space-y-3 list-none pl-0">
                  {selectedCourse.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-750 font-medium leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-slate-200/50 text-slate-800 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                  {selectedCourse.name.includes("B.Tech") && (
                    <li className="flex items-start gap-3 text-xs text-slate-750 font-medium leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-slate-200/50 text-slate-800 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                        {selectedCourse.highlights.length + 1}
                      </span>
                      <span>Focused specialization labs and industry training for <strong>{selectedBtechStream}</strong>.</span>
                    </li>
                  )}
                  {selectedCourse.name === "Master of Business Administration (MBA)" && (
                    <li className="flex items-start gap-3 text-xs text-slate-750 font-medium leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-slate-200/50 text-slate-800 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                        {selectedCourse.highlights.length + 1}
                      </span>
                      <span>Hands-on case studies and industry mentorship specifically for <strong>{selectedMbaSpecialization}</strong>.</span>
                    </li>
                  )}
                </ul>
              </DeepDiveAccordionItem>

              {/* Accordion 4: PROGRAMME SYLLABUS */}
              <DeepDiveAccordionItem title="PROGRAMME SYLLABUS">
                <div className="space-y-5">
                  <div className="p-3 bg-slate-100 rounded-xl border border-slate-200/40 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">
                    Curriculum Timeline & Semester Breakdown
                  </div>

                  <div className="space-y-4">
                    {/* Render active syllabus based on selected stream/spec if BTech/MBA */}
                    {selectedCourse.name.includes("B.Tech") ? (
                      <div className="space-y-4">
                        <div className="text-xs text-slate-800 font-bold mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                          Curriculum Track: B.Tech in {selectedBtechStream}
                        </div>
                        {selectedCourse.syllabus.map((sem, idx) => (
                          <div key={idx} className="bg-slate-50 border border-slate-150 rounded-2xl p-4">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">
                              {sem.semester}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {/* Inject stream-specific topics for sem 3-8, else general */}
                              {idx >= 2 ? (
                                <>
                                  {sem.subjects.filter(s => !s.includes("Sub-Stream")).map(sub => (
                                    <span key={sub} className="bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-lg text-[11px] font-bold">
                                      {sub}
                                    </span>
                                  ))}
                                  <span className="bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-lg text-[11px] font-black">
                                    {selectedBtechStream} - Core Practice
                                  </span>
                                  <span className="bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-lg text-[11px] font-black">
                                    {selectedBtechStream} - Elective Project
                                  </span>
                                </>
                              ) : (
                                sem.subjects.map(sub => (
                                  <span key={sub} className="bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-lg text-[11px] font-bold">
                                    {sub}
                                  </span>
                                ))
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : selectedCourse.name === "Master of Business Administration (MBA)" ? (
                      <div className="space-y-4">
                        <div className="text-xs text-slate-800 font-bold mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                          Curriculum Track: MBA in {selectedMbaSpecialization}
                        </div>
                        {selectedCourse.syllabus.map((sem, idx) => (
                          <div key={idx} className="bg-slate-50 border border-slate-150 rounded-2xl p-4">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">
                              {sem.semester}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {idx >= 2 ? (
                                <>
                                  {sem.subjects.filter(s => !s.includes("Specialization")).map(sub => (
                                    <span key={sub} className="bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-lg text-[11px] font-bold">
                                      {sub}
                                    </span>
                                  ))}
                                  <span className="bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-lg text-[11px] font-black">
                                    {selectedMbaSpecialization} Specialization I
                                  </span>
                                  <span className="bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-lg text-[11px] font-black">
                                    {selectedMbaSpecialization} Specialization II
                                  </span>
                                </>
                              ) : (
                                sem.subjects.map(sub => (
                                  <span key={sub} className="bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-lg text-[11px] font-bold">
                                    {sub}
                                  </span>
                                ))
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      selectedCourse.syllabus.map((sem, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-150 rounded-2xl p-4">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">
                            {sem.semester}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {sem.subjects.map(sub => (
                              <span key={sub} className="bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-lg text-[11px] font-bold">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </DeepDiveAccordionItem>

            </div>

            {/* Back Button Bottom */}
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 transition-all font-bold text-xs uppercase tracking-wider cursor-pointer flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function DeepDiveAccordionItem({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-800 rounded-2xl overflow-hidden transition-all bg-slate-950/40">
      
      {/* Header bar (Dark theme) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex justify-between items-center text-xs font-black tracking-widest text-slate-200 hover:text-white hover:bg-slate-900/60 transition-all cursor-pointer"
      >
        <span>[+] {title}</span>
        <span className="text-primary-500 dark:text-red-400 shrink-0">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      {/* Expansion Body (Crisp white bg, dark charcoal font weights) */}
      <div 
        className={`transition-all duration-350 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1200px] border-t border-slate-200" : "max-h-0"
        }`}
      >
        <div className="p-6 sm:p-8 bg-white text-slate-800 font-medium">
          {children}
        </div>
      </div>
    </div>
  );
}
