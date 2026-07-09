import React, { useState } from "react";
import { BookOpen, Globe, GraduationCap, Trophy, HelpCircle, Check, X, ShieldAlert, BookCheck, DollarSign, Calendar } from "lucide-react";
import { COURSE_CATEGORIES } from "../data";
import { CourseCategory, Course } from "../types";

export default function Eligibility() {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Assign distinct aesthetic icons to each category card
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "regular":
        return <BookOpen className="w-8 h-8 text-red-600" />;
      case "distance":
        return <Globe className="w-8 h-8 text-emerald-600 animate-pulse" />;
      case "ug":
        return <GraduationCap className="w-8 h-8 text-rose-600" />;
      case "pg":
        return <Trophy className="w-8 h-8 text-accent-500" />;
      default:
        return <BookCheck className="w-8 h-8 text-emerald-500" />;
    }
  };

  return (
    <section id="programmes-section" className="py-20 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-primary-600 dark:text-red-400 uppercase tracking-widest bg-primary-100 dark:bg-red-950/40 px-3 py-1.5 rounded-full">
            Course Catalog & Pathways
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Eligibility Criteria & Programmes
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Choose from our highly specialized technical routes. Review basic criteria, study structures, and unlock your potential.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="eligibility-cards-grid">
          {COURSE_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className="bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
              id={`eligibility-card-${category.id}`}
            >
              {/* Card top border line gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Visual Icon */}
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-xl inline-block group-hover:bg-primary-50 dark:group-hover:bg-red-950/20 transition-colors">
                  {getCategoryIcon(category.id)}
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-primary-600 dark:group-hover:text-red-400 transition-colors">
                  {category.title}
                </h3>

                {/* Summary / Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {category.description}
                </p>

                {/* Eligibility criteria highlight */}
                <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                  <span className="block font-semibold text-[10px] uppercase tracking-wider text-primary-700 dark:text-red-400 mb-0.5">
                    Eligibility Requirement
                  </span>
                  {category.eligibilitySummary}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setSelectedCategory(category)}
                className="mt-6 w-full py-2.5 rounded-xl text-xs font-semibold text-primary-600 dark:text-red-400 bg-primary-50 dark:bg-red-950/30 hover:bg-primary-600 dark:hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer text-center border border-transparent dark:border-red-900/40"
                id={`btn-know-more-${category.id}`}
              >
                Know More & Syllabus
              </button>
            </div>
          ))}
        </div>

        {/* Trust Badges / Note */}
        <div className="mt-16 bg-gradient-to-tr from-primary-950 to-primary-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-primary-800">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-xl text-accent-400">
              <BookCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base">Unsure about your criteria or choice?</h4>
              <p className="text-xs text-blue-200/70">Connect with our admissions desk or try our 24/7 AI legacy chatbot at the bottom-right corner.</p>
            </div>
          </div>
          <a
            href="tel:+919212621301"
            className="px-6 py-3 rounded-xl bg-white text-primary-950 font-semibold text-xs uppercase tracking-wider hover:bg-rose-50 transition-colors shadow-lg cursor-pointer shrink-0"
          >
            Call counselor
          </a>
        </div>

      </div>

      {/* Category Details Modal Popup */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col relative animate-in fade-in zoom-in-95 duration-300">
            
            {/* Header */}
            <div className="bg-primary-950 px-6 py-4 text-white flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-lg">{selectedCategory.title} Catalog</h3>
                <p className="text-xs text-blue-300">{selectedCategory.eligibilitySummary}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedCourse(null);
                }}
                className="p-1 rounded-lg hover:bg-white/10 text-white transition-colors cursor-pointer"
                id="close-category-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content body split */}
            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Courses list (Left / Top) */}
              <div className="md:col-span-5 space-y-3 border-r border-slate-100 dark:border-slate-800 pr-0 md:pr-4">
                <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                  Available Programs ({selectedCategory.courses.length})
                </h4>
                {selectedCategory.courses.map((course) => (
                  <button
                    key={course.name}
                    onClick={() => setSelectedCourse(course)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all duration-200 cursor-pointer flex flex-col gap-1.5 ${
                      selectedCourse?.name === course.name
                        ? "bg-primary-50 dark:bg-red-950/40 border-primary-300 dark:border-red-900/50 shadow-sm"
                        : "bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-50 dark:hover:bg-slate-950/40 border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    <span className="font-bold text-slate-800 dark:text-slate-200">{course.name}</span>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-primary-500 dark:text-red-400" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-0.5 font-bold text-primary-600 dark:text-red-400">
                        {course.fee}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Course syllabus & details display (Right) */}
              <div className="md:col-span-7 bg-slate-50/60 dark:bg-slate-950/20 rounded-xl p-5 border border-slate-200/50 dark:border-slate-800 flex flex-col justify-between min-h-[300px]">
                {selectedCourse ? (
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">{selectedCourse.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{selectedCourse.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-xs">
                      <div>
                        <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase">Duration</span>
                        <span className="font-medium text-slate-800 dark:text-slate-200">{selectedCourse.duration}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase">Eligibility</span>
                        <span className="font-medium text-slate-800 dark:text-slate-200 text-[11px]">{selectedCourse.eligibility}</span>
                      </div>
                      <div className="col-span-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase">Standard Fees</span>
                        <span className="font-bold text-primary-600 dark:text-red-400 text-sm">{selectedCourse.fee}</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-display font-bold text-xs text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Syllabus Highlights
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedCourse.syllabus.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-12 text-slate-400 dark:text-slate-500 space-y-3 my-auto">
                    <BookOpen className="w-10 h-10 text-slate-300 dark:text-slate-700 animate-bounce" />
                    <div>
                      <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300">Select a program on the left</h4>
                      <p className="text-xs">Click any program to explore syllabus schedules, fees, and requirements.</p>
                    </div>
                  </div>
                )}

                {/* Modal actions */}
                {selectedCourse && (
                  <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800 mt-6 flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedCourse(null);
                        // Open admission scroll
                        document.getElementById("enrollment-section")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer shadow-md"
                    >
                      Enquire about this course
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Footer */}
            <div className="bg-slate-50 dark:bg-slate-950 px-6 py-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedCourse(null);
                }}
                className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-850 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs cursor-pointer"
              >
                Close Catalog
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
