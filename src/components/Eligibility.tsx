import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Globe, 
  GraduationCap, 
  Trophy, 
  BookCheck, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Calendar, 
  Users, 
  Award, 
  Shield, 
  Check, 
  ChevronRight,
  Sparkles,
  School,
  HeartPulse,
  Wrench,
  BookMarked
} from "lucide-react";
import { CATEGORIES_DATA, getCourseDetails, CourseCategory, CourseBrief } from "../courseCatalogData";
import { ActiveTab } from "../types";

type CurrentView = 
  | { type: "programs" }
  | { type: "category"; categoryId: string }
  | { type: "course"; categoryId: string; courseId: string; courseName: string };

export default function Eligibility({ setActiveTab }: { setActiveTab?: (tab: ActiveTab) => void }) {
  const [currentView, setCurrentView] = useState<CurrentView>({ type: "programs" });

  // Scroll to the main section top whenever the view changes
  useEffect(() => {
    document.getElementById("programmes-section")?.scrollIntoView({ behavior: "smooth" });
  }, [currentView]);

  // Categories mapping to quickly find category titles
  const categoriesMap: Record<string, string> = {
    "skill-india": "Computer Education Skill India Program",
    regular: "Regular Courses",
    distance: "Distance Learning",
    ug: "Undergraduate (UG) Programmes",
    pg: "Postgraduate (PG) Programmes",
    diploma: "Diploma Programmes"
  };

  // Get active category object based on state
  const activeCategory = currentView.type !== "programs" 
    ? CATEGORIES_DATA.find(cat => cat.id === currentView.categoryId)
    : null;

  const getCategoryIcon = (id: string) => {
    const baseClass = "w-8 h-8 transition-colors duration-300";
    switch (id) {
      case "skill-india":
        return <Sparkles className={`${baseClass} text-amber-500 animate-pulse`} />;
      case "regular":
        return <BookOpen className={`${baseClass} text-red-500`} />;
      case "distance":
        return <Globe className={`${baseClass} text-emerald-500 animate-pulse`} />;
      case "ug":
        return <GraduationCap className={`${baseClass} text-rose-500`} />;
      case "pg":
        return <Trophy className={`${baseClass} text-sky-500`} />;
      case "diploma":
        return <BookCheck className={`${baseClass} text-amber-500`} />;
      default:
        return <BookCheck className={`${baseClass} text-amber-500`} />;
    }
  };

  const getHighlightIcon = (index: number) => {
    const baseClass = "w-5 h-5";
    switch (index) {
      case 0: return <School className={`${baseClass} text-amber-500`} />;
      case 1: return <BookMarked className={`${baseClass} text-blue-500`} />;
      case 2: return <Sparkles className={`${baseClass} text-purple-500`} />;
      case 3: return <Users className={`${baseClass} text-rose-500`} />;
      case 4: return <Award className={`${baseClass} text-emerald-500`} />;
      case 5: return <Wrench className={`${baseClass} text-sky-500`} />;
      case 6: return <Shield className={`${baseClass} text-red-500`} />;
      case 7: return <Calendar className={`${baseClass} text-indigo-500`} />;
      default: return <Sparkles className={`${baseClass} text-amber-500`} />;
    }
  };

  return (
    <section id="programmes-section" className="py-24 bg-slate-900 dark:bg-slate-950 relative transition-colors duration-300 overflow-hidden min-h-[700px]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation (For Step 2 and 3) */}
        {currentView.type !== "programs" && (
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8 select-none bg-slate-950/20 w-fit px-4 py-2 rounded-xl border border-slate-800/40">
            <button 
              onClick={() => setCurrentView({ type: "programs" })}
              className="hover:text-primary-500 dark:hover:text-red-400 transition-colors cursor-pointer"
            >
              Programs
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-650" />
            <button 
              onClick={() => setCurrentView({ type: "category", categoryId: currentView.categoryId })}
              className={`hover:text-primary-500 dark:hover:text-red-400 transition-colors cursor-pointer ${
                currentView.type === "category" ? "text-white pointer-events-none font-bold" : ""
              }`}
            >
              {categoriesMap[currentView.categoryId]}
            </button>
            {currentView.type === "course" && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-650" />
                <span className="text-white font-bold">{currentView.courseName}</span>
              </>
            )}
          </nav>
        )}

        {/* ---------------------------------------------------- */}
        {/* STEP 1: LANDING PAGE VIEW (5 Category Cards Only) */}
        {currentView.type === "programs" && (
          <div className="space-y-16 animate-in fade-in duration-500">
            
            {/* Section Heading */}
            <div className="text-center space-y-4">
              <span className="text-xs font-bold text-primary-500 dark:text-red-400 uppercase tracking-widest bg-primary-950/50 border border-primary-900/60 px-4 py-2 rounded-full">
                Course Catalog & Pathways
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                Eligibility Criteria & Programmes
              </h2>
            </div>

            {/* 6 Cards Grid (Skill India, Regular, Distance, UG, PG, Diploma) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="eligibility-cards-grid">
              {CATEGORIES_DATA.map((category) => (
                <div
                  key={category.id}
                  onClick={() => setCurrentView({ type: "category", categoryId: category.id })}
                  className="bg-slate-900/40 hover:bg-slate-800/60 rounded-2xl p-6 border border-slate-800 hover:border-primary-500/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
                  id={`eligibility-card-${category.id}`}
                >
                  {/* Top border line gradient on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-4">
                    {/* Visual Icon */}
                    <div className="bg-slate-950 p-3.5 rounded-xl inline-block group-hover:bg-primary-950/40 transition-colors border border-slate-800">
                      {getCategoryIcon(category.id)}
                    </div>

                    {/* Card Title */}
                    <h3 className="font-display font-bold text-base text-slate-200 group-hover:text-white transition-colors">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-slate-400 leading-relaxed min-h-[50px]">
                      {category.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="mt-6 w-full py-2.5 rounded-xl text-xs font-semibold text-primary-400 group-hover:text-white bg-slate-950 hover:bg-primary-600 transition-all duration-300 text-center border border-slate-850">
                    Explore courses <ArrowRight className="w-3.5 h-3.5 inline-block ml-1 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* STEP 2: CATEGORY VIEW (Courses List under Category) */}
        {currentView.type === "category" && activeCategory && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  {getCategoryIcon(activeCategory.id)}
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl text-white">
                    {activeCategory.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {activeCategory.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCurrentView({ type: "programs" })}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
              >
                <ArrowLeft className="w-4 h-4" /> All Programs
              </button>
            </div>

            {/* Courses listing */}
            {activeCategory.subGroups ? (
              /* If Category has Subgroups (like Diploma) */
              <div className="space-y-12">
                {activeCategory.subGroups.map((group) => (
                  <div key={group.name} className="space-y-5">
                    <h4 className="font-display font-extrabold text-sm uppercase tracking-widest text-primary-500 dark:text-red-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                      {group.name}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.courses.map((course) => (
                        <div
                          key={course.id}
                          onClick={() => setCurrentView({ type: "course", categoryId: activeCategory.id, courseId: course.id, courseName: course.name })}
                          className="bg-slate-900/30 hover:bg-slate-800/40 border border-slate-850 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group"
                        >
                          <div className="space-y-2">
                            <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors block">
                              {course.name}
                            </span>
                            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                              {course.description}
                            </p>
                          </div>
                          
                          <div className="mt-4 flex items-center text-[11px] font-semibold text-primary-400 group-hover:text-white transition-colors w-fit pt-2 border-t border-slate-850/60 w-full justify-between">
                            <span>View Details</span>
                            <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Normal Flat Grid (for UG, PG, Regular, Distance) */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory.courses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => setCurrentView({ type: "course", categoryId: activeCategory.id, courseId: course.id, courseName: course.name })}
                    className="bg-slate-900/30 hover:bg-slate-800/40 border border-slate-850 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="space-y-2">
                      <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors block">
                        {course.name}
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                    
                    <div className="mt-4 flex items-center text-[11px] font-semibold text-primary-400 group-hover:text-white transition-colors w-fit pt-2 border-t border-slate-850/60 w-full justify-between">
                      <span>View Details</span>
                      <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* STEP 3: COURSE INFORMATION VIEW (Detailed Page Template) */}
        {currentView.type === "course" && (
          (() => {
            const courseDetails = getCourseDetails(currentView.courseId, currentView.categoryId, currentView.courseName);
            return (
              <div className="space-y-8 animate-in fade-in zoom-in-98 duration-500" id="course-details-template-view">
                
                {/* Back Link Row */}
                <div className="flex justify-start">
                  <button
                    onClick={() => setCurrentView({ type: "category", categoryId: currentView.categoryId })}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-850 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to {categoriesMap[currentView.categoryId]} Index
                  </button>
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-950/80 to-slate-900 rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />
                  
                  <div className="space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-900/50 px-3.5 py-1.5 rounded-full inline-block">
                      {categoriesMap[currentView.categoryId]}
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-4xl text-blue-100 tracking-tight">
                      {courseDetails.name}
                    </h2>
                    <div className="h-0.5 w-12 bg-primary-500 my-2" />
                    <p className="text-xs sm:text-sm font-bold text-slate-350 tracking-wide uppercase italic">
                      "{courseDetails.tagline}"
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mt-2 font-medium">
                      {courseDetails.introduction}
                    </p>
                  </div>
                </div>

                {/* Split Details Row (About & Duration Card) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* About the Course (Crisp white bg, dark text) */}
                  <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md text-slate-900">
                    <h3 className="font-display font-black text-base uppercase tracking-wider mb-4 text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary-600" /> About the Course
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                      {courseDetails.about}
                    </p>
                  </div>

                  {/* Duration Card (Crisp white bg, dark text) */}
                  <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md text-slate-900 flex flex-col justify-center min-h-[150px]">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Duration & Structure</span>
                    <h4 className="font-display font-black text-2xl text-slate-900">
                      {courseDetails.duration.split(" (")[0]}
                    </h4>
                    <span className="text-[11px] font-bold text-slate-500 mt-1 block">
                      {courseDetails.duration.split(" (")[1]?.replace(")", "") || "Full Academic Track"}
                    </span>
                  </div>

                </div>

                {/* Eligibility & Highlights Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Eligibility Card / Course Highlights Box (Crisp white bg, dark text) */}
                  <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md text-slate-900">
                    <h3 className="font-display font-black text-base uppercase tracking-wider mb-4 text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary-600" /> {currentView.categoryId === "skill-india" ? "Course Highlights & Objectives" : "Eligibility Criteria"}
                    </h3>
                    {currentView.categoryId === "skill-india" ? (
                      <div className="space-y-3">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">This Program Highlights:</p>
                        <ul className="space-y-2 list-none pl-0">
                          {courseDetails.eligibility.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                              <Check className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" strokeWidth={3} />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <ul className="space-y-3 list-none pl-0">
                        {courseDetails.eligibility.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                            <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" strokeWidth={3} />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Highlights Grid (lg:col-span-7) */}
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary-500" /> Course Highlights
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                      {courseDetails.highlights.slice(0, 4).map((highlight, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-slate-900 flex flex-col justify-between hover:shadow-md transition-shadow">
                          <div className="bg-slate-100 p-2 rounded-xl text-primary-600 inline-block w-fit mb-3 border border-slate-100">
                            {getHighlightIcon(idx)}
                          </div>
                          <span className="text-xs font-bold text-slate-800 leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Additional Highlights Cards (remaining 4) */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {courseDetails.highlights.slice(4, 8).map((highlight, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-slate-900 flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div className="bg-slate-100 p-2 rounded-xl text-primary-600 inline-block w-fit mb-3 border border-slate-100">
                          {getHighlightIcon(idx + 4)}
                        </div>
                        <span className="text-xs font-bold text-slate-800 leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="space-y-5">
                  <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-350 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-500" /> Career Opportunities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {courseDetails.careerOpportunities.map((career, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-slate-900 hover:shadow-md transition-shadow flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-650 shrink-0" />
                        <span className="text-xs font-bold text-slate-800">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs (Accordion System at the bottom) */}
                <div className="space-y-5 pt-8 border-t border-slate-800/80">
                  <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-350 flex items-center gap-2">
                    <BookCheck className="w-5 h-5 text-primary-500" /> Course FAQs
                  </h3>
                  <div className="space-y-3">
                    {courseDetails.faqs.map((faq, index) => (
                      <CourseFaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>

                {/* Enrollment Call to Action */}
                <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Ready to take the next step? Fill out the online registration form or call our support desk to finalize admissions.
                  </p>
                  <button
                    onClick={() => {
                      if (setActiveTab) {
                        setActiveTab("enroll");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        document.getElementById("enrollment-section")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold text-xs uppercase tracking-wider hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md cursor-pointer self-start sm:self-auto"
                  >
                    Enroll Now
                  </button>
                </div>

              </div>
            );
          })()
        )}

      </div>
    </section>
  );
}

function CourseFaqItem({ question, answer }: { question: string; answer: string; key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-800 rounded-2xl overflow-hidden transition-all bg-slate-905/30 dark:bg-slate-900/20">
      
      {/* Header bar (Dark theme) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center text-xs font-black tracking-widest text-slate-200 hover:text-white hover:bg-slate-800/40 transition-colors cursor-pointer gap-4"
      >
        <span>Q. {question}</span>
        <span className="text-primary-500 dark:text-red-400 transition-transform duration-300 shrink-0">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      {/* Expansion Body (Crisp white bg, dark charcoal font weights) */}
      <div 
        className={`transition-all duration-350 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] border-t border-slate-250" : "max-h-0"
        }`}
      >
        <div className="p-6 bg-white text-slate-800 text-xs font-semibold leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
