import React, { useState, useEffect } from "react";
import {
  BookOpen, Globe, GraduationCap, Trophy, BookCheck,
  ArrowRight, ArrowLeft, Plus, Minus, Calendar, Users,
  Award, Shield, Check, ChevronRight, Sparkles,
  School, HeartPulse, Wrench, BookMarked
} from "lucide-react";
import { CATEGORIES_DATA, getCourseDetails } from "../courseCatalogData";
import { ActiveTab } from "../types";

// ─── View State ───────────────────────────────────────────────────────────────
type CurrentView =
  | { type: "programs" }
  | { type: "sub-select"; parentId: string }
  | { type: "category"; categoryId: string; parentId?: string; filteredCourseIds?: string[] }
  | { type: "course"; categoryId: string; courseId: string; courseName: string; parentId?: string; filteredCourseIds?: string[] };

// ─── Sub-category definitions ─────────────────────────────────────────────────
const REGULAR_SUBS = [
  {
    id: "diploma",
    label: "Diploma Programmes",
    description: "3-year engineering, technical & healthcare diploma programs with direct employment pathways.",
    icon: "diploma",
  },
  {
    id: "ug",
    label: "Undergraduate (UG) Programmes",
    description: "BCA, BBA, B.Com, BA and other undergraduate degree programs with placement support.",
    icon: "ug",
  },
  {
    id: "pg",
    label: "Postgraduate (PG) Programmes",
    description: "MBA, MCA, M.Com, MA and other postgraduate degree programs for advanced careers.",
    icon: "pg",
  },
];

const DISTANCE_SUBS = [
  {
    id: "distance-ug",
    label: "Distance UG Programmes",
    description: "Flexible self-paced undergraduate programs — BA, BCA, BBA, B.Com.",
    icon: "ug",
    filteredIds: ["dist-ba", "dist-bcom", "dist-bba", "dist-bca"],
  },
  {
    id: "distance-pg",
    label: "Distance PG Programmes",
    description: "Flexible self-paced postgraduate programs — MA, MCA, MBA, M.Com.",
    icon: "pg",
    filteredIds: ["dist-ma", "dist-mcom", "dist-mba", "dist-mca"],
  },
];

// ─── Label map ────────────────────────────────────────────────────────────────
const LABELS: Record<string, string> = {
  "skill-india": "Computer Education Skill India Program",
  regular: "Regular Course Program",
  distance: "Distance Learning Program",
  ug: "Undergraduate (UG) Programmes",
  pg: "Postgraduate (PG) Programmes",
  diploma: "Diploma Programmes",
  "distance-ug": "Distance UG Programmes",
  "distance-pg": "Distance PG Programmes",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getCategoryIcon(id: string) {
  const cls = "w-8 h-8 transition-colors duration-300";
  switch (id) {
    case "skill-india": return <Sparkles className={`${cls} text-amber-500 animate-pulse`} />;
    case "regular":     return <BookOpen  className={`${cls} text-red-500`} />;
    case "distance":    return <Globe     className={`${cls} text-emerald-500 animate-pulse`} />;
    case "ug":          return <GraduationCap className={`${cls} text-rose-500`} />;
    case "pg":          return <Trophy    className={`${cls} text-sky-500`} />;
    case "diploma":     return <BookCheck className={`${cls} text-amber-500`} />;
    default:            return <BookCheck className={`${cls} text-amber-500`} />;
  }
}

function getHighlightIcon(index: number) {
  const cls = "w-5 h-5";
  switch (index) {
    case 0: return <School    className={`${cls} text-amber-500`} />;
    case 1: return <BookMarked className={`${cls} text-blue-500`} />;
    case 2: return <Sparkles  className={`${cls} text-purple-500`} />;
    case 3: return <Users     className={`${cls} text-rose-500`} />;
    case 4: return <Award     className={`${cls} text-emerald-500`} />;
    case 5: return <Wrench    className={`${cls} text-sky-500`} />;
    case 6: return <Shield    className={`${cls} text-red-500`} />;
    case 7: return <Calendar  className={`${cls} text-indigo-500`} />;
    default: return <Sparkles className={`${cls} text-amber-500`} />;
  }
}

// Shared course card
function CourseCard({ course, onClick }: { key?: React.Key; course: { id: string; name: string; description: string }; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-slate-900/30 hover:bg-slate-800/40 border border-slate-850 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className="space-y-2">
        <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors block">{course.name}</span>
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{course.description}</p>
      </div>
      <div className="mt-4 flex items-center text-[11px] font-semibold text-primary-400 group-hover:text-white transition-colors pt-2 border-t border-slate-850/60 w-full justify-between">
        <span>View Details</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Eligibility({ setActiveTab }: { setActiveTab?: (tab: ActiveTab) => void }) {
  const [currentView, setCurrentView] = useState<CurrentView>({ type: "programs" });

  useEffect(() => {
    document.getElementById("programmes-section")?.scrollIntoView({ behavior: "smooth" });
  }, [currentView]);

  // Resolve the actual CATEGORIES_DATA entry (distance-ug/pg → "distance")
  const resolveCategory = (categoryId: string) =>
    CATEGORIES_DATA.find(c => c.id === (categoryId.startsWith("distance-") ? "distance" : categoryId));

  // Filtered courses for a category view
  const getFilteredCourses = (categoryId: string, filteredIds?: string[]) => {
    const cat = resolveCategory(categoryId);
    if (!cat) return [];
    if (filteredIds) return cat.courses.filter(c => filteredIds.includes(c.id));
    return cat.courses;
  };

  // ── Breadcrumb ──
  const Breadcrumb = () => {
    if (currentView.type === "programs") return null;
    return (
      <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-8 select-none bg-slate-950/20 w-fit px-4 py-2 rounded-xl border border-slate-800/40">
        <button onClick={() => setCurrentView({ type: "programs" })} className="hover:text-primary-500 transition-colors cursor-pointer">
          Programs
        </button>

        {currentView.type === "sub-select" && (
          <><ChevronRight className="w-3.5 h-3.5" /><span className="text-white font-bold">{LABELS[currentView.parentId]}</span></>
        )}

        {currentView.type === "category" && (
          <>
            {currentView.parentId && (
              <><ChevronRight className="w-3.5 h-3.5" />
              <button onClick={() => setCurrentView({ type: "sub-select", parentId: currentView.parentId! })} className="hover:text-primary-500 transition-colors cursor-pointer">
                {LABELS[currentView.parentId]}
              </button></>
            )}
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-bold">{LABELS[currentView.categoryId] ?? currentView.categoryId}</span>
          </>
        )}

        {currentView.type === "course" && (
          <>
            {currentView.parentId && (
              <><ChevronRight className="w-3.5 h-3.5" />
              <button onClick={() => setCurrentView({ type: "sub-select", parentId: currentView.parentId! })} className="hover:text-primary-500 transition-colors cursor-pointer">
                {LABELS[currentView.parentId]}
              </button></>
            )}
            <ChevronRight className="w-3.5 h-3.5" />
            <button
              onClick={() => setCurrentView({ type: "category", categoryId: currentView.categoryId, parentId: currentView.parentId, filteredCourseIds: currentView.filteredCourseIds })}
              className="hover:text-primary-500 transition-colors cursor-pointer"
            >
              {LABELS[currentView.categoryId] ?? currentView.categoryId}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-bold">{currentView.courseName}</span>
          </>
        )}
      </nav>
    );
  };

  // ── Back button label ──
  const backLabel = (view: CurrentView) => {
    if (view.type === "category") return view.parentId ? LABELS[view.parentId] : "All Programs";
    if (view.type === "course")   return LABELS[view.categoryId] ?? "Courses";
    return "All Programs";
  };

  return (
    <section id="programmes-section" className="py-24 bg-slate-900 dark:bg-slate-950 relative transition-colors duration-300 overflow-hidden min-h-[700px]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumb />

        {/* ══ STEP 1: Main 3 Cards ══════════════════════════════════════════ */}
        {currentView.type === "programs" && (
          <div className="space-y-16 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold text-primary-500 dark:text-red-400 uppercase tracking-widest bg-primary-950/50 border border-primary-900/60 px-4 py-2 rounded-full">
                Course Catalog &amp; Pathways
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                Eligibility Criteria &amp; Programmes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="eligibility-cards-grid">
              {CATEGORIES_DATA.filter(c => ["skill-india", "regular", "distance"].includes(c.id)).map((cat) => (
                <div
                  key={cat.id}
                  onClick={() =>
                    ["regular", "distance"].includes(cat.id)
                      ? setCurrentView({ type: "sub-select", parentId: cat.id })
                      : setCurrentView({ type: "category", categoryId: cat.id })
                  }
                  className="bg-slate-900/40 hover:bg-slate-800/60 rounded-2xl p-6 border border-slate-800 hover:border-primary-500/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
                  id={`eligibility-card-${cat.id}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-4">
                    <div className="bg-slate-950 p-3.5 rounded-xl inline-block group-hover:bg-primary-950/40 transition-colors border border-slate-800">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-200 group-hover:text-white transition-colors">{cat.title}</h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed min-h-[50px]">{cat.description}</p>
                  </div>
                  <div className="mt-6 w-full py-2.5 rounded-xl text-xs font-semibold text-primary-400 group-hover:text-white bg-slate-950 hover:bg-primary-600 transition-all duration-300 text-center border border-slate-850">
                    Explore courses <ArrowRight className="w-3.5 h-3.5 inline-block ml-1 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ STEP 2: Sub-select (Diploma / UG / PG) ═══════════════════════ */}
        {currentView.type === "sub-select" && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  {getCategoryIcon(currentView.parentId)}
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl text-white">{LABELS[currentView.parentId]}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Select a programme category to explore courses</p>
                </div>
              </div>
              <button
                onClick={() => setCurrentView({ type: "programs" })}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
              >
                <ArrowLeft className="w-4 h-4" /> All Programs
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(currentView.parentId === "regular" ? REGULAR_SUBS : DISTANCE_SUBS).map((sub) => (
                <div
                  key={sub.id}
                  onClick={() => {
                    if (currentView.parentId === "regular") {
                      setCurrentView({ type: "category", categoryId: sub.id, parentId: currentView.parentId });
                    } else {
                      const ds = DISTANCE_SUBS.find(d => d.id === sub.id);
                      setCurrentView({ type: "category", categoryId: sub.id, parentId: currentView.parentId, filteredCourseIds: ds?.filteredIds });
                    }
                  }}
                  className="bg-slate-900/40 hover:bg-slate-800/60 rounded-2xl p-6 border border-slate-800 hover:border-primary-500/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-4">
                    <div className="bg-slate-950 p-3.5 rounded-xl inline-block group-hover:bg-primary-950/40 transition-colors border border-slate-800">
                      {getCategoryIcon(sub.icon)}
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-200 group-hover:text-white transition-colors">{sub.label}</h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed min-h-[50px]">{sub.description}</p>
                  </div>
                  <div className="mt-6 w-full py-2.5 rounded-xl text-xs font-semibold text-primary-400 group-hover:text-white bg-slate-950 hover:bg-primary-600 transition-all duration-300 text-center border border-slate-850">
                    View Courses <ArrowRight className="w-3.5 h-3.5 inline-block ml-1 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ STEP 3: Course List ═══════════════════════════════════════════ */}
        {currentView.type === "category" && (() => {
          const cat = resolveCategory(currentView.categoryId);
          if (!cat) return null;
          const label = LABELS[currentView.categoryId] ?? cat.title;

          return (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    {getCategoryIcon(currentView.categoryId.replace("distance-", ""))}
                  </div>
                  <div>
                    <h3 className="font-display font-black text-2xl text-white">{label}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    currentView.parentId
                      ? setCurrentView({ type: "sub-select", parentId: currentView.parentId })
                      : setCurrentView({ type: "programs" })
                  }
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <ArrowLeft className="w-4 h-4" /> {backLabel(currentView)}
                </button>
              </div>

              {/* With subGroups (diploma) and no forced filter */}
              {cat.subGroups && !currentView.filteredCourseIds ? (
                <div className="space-y-12">
                  {cat.subGroups.map((group) => (
                    <div key={group.name} className="space-y-5">
                      <h4 className="font-display font-extrabold text-sm uppercase tracking-widest text-primary-500 dark:text-red-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
                        {group.name}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.courses.map((course) => (
                          <CourseCard
                            key={course.id}
                            course={course}
                            onClick={() => setCurrentView({ type: "course", categoryId: currentView.categoryId, courseId: course.id, courseName: course.name, parentId: currentView.parentId, filteredCourseIds: currentView.filteredCourseIds })}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Flat grid (ug, pg, distance-ug, distance-pg) */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getFilteredCourses(currentView.categoryId, currentView.filteredCourseIds).map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onClick={() => setCurrentView({ type: "course", categoryId: currentView.categoryId, courseId: course.id, courseName: course.name, parentId: currentView.parentId, filteredCourseIds: currentView.filteredCourseIds })}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })()}

        {/* ══ STEP 4: Course Detail ═════════════════════════════════════════ */}
        {currentView.type === "course" && (() => {
          const effectiveCatId = currentView.categoryId.startsWith("distance-") ? "distance" : currentView.categoryId;
          const courseDetails = getCourseDetails(currentView.courseId, effectiveCatId, currentView.courseName);
          const label = LABELS[currentView.categoryId] ?? currentView.categoryId;

          return (
            <div className="space-y-8 animate-in fade-in zoom-in-98 duration-500" id="course-details-template-view">

              <div className="flex justify-start">
                <button
                  onClick={() => setCurrentView({ type: "category", categoryId: currentView.categoryId, parentId: currentView.parentId, filteredCourseIds: currentView.filteredCourseIds })}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-850 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to {label}
                </button>
              </div>

              {/* Hero */}
              <div className="bg-gradient-to-r from-blue-950/80 to-slate-900 rounded-3xl p-6 sm:p-8 border border-blue-900/40 shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none" />
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 bg-blue-950/80 border border-blue-900/50 px-3.5 py-1.5 rounded-full inline-block">{label}</span>
                  <h2 className="font-display font-black text-2xl sm:text-4xl text-blue-100 tracking-tight">{courseDetails.name}</h2>
                  <div className="h-0.5 w-12 bg-primary-500 my-2" />
                  <p className="text-xs sm:text-sm font-bold text-slate-350 tracking-wide uppercase italic">"{courseDetails.tagline}"</p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mt-2 font-medium">{courseDetails.introduction}</p>
                </div>
              </div>

              {/* About & Duration */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md text-slate-900">
                  <h3 className="font-display font-black text-base uppercase tracking-wider mb-4 text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary-600" /> About the Course
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">{courseDetails.about}</p>
                </div>
                <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md text-slate-900 flex flex-col justify-center min-h-[150px]">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Duration &amp; Structure</span>
                  <h4 className="font-display font-black text-2xl text-slate-900">{courseDetails.duration.split(" (")[0]}</h4>
                  <span className="text-[11px] font-bold text-slate-500 mt-1 block">
                    {courseDetails.duration.split(" (")[1]?.replace(")", "") || "Full Academic Track"}
                  </span>
                </div>
              </div>

              {/* Eligibility & Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md text-slate-900">
                  <h3 className="font-display font-black text-base uppercase tracking-wider mb-4 text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-600" /> {effectiveCatId === "skill-india" ? "Course Highlights & Objectives" : "Eligibility Criteria"}
                  </h3>
                  <ul className="space-y-3 list-none pl-0">
                    {courseDetails.eligibility.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary-500" /> Course Highlights
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {courseDetails.highlights.slice(0, 4).map((h, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-slate-900 flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div className="bg-slate-100 p-2 rounded-xl inline-block w-fit mb-3 border border-slate-100">{getHighlightIcon(idx)}</div>
                        <span className="text-xs font-bold text-slate-800 leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* More Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {courseDetails.highlights.slice(4, 8).map((h, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-slate-900 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="bg-slate-100 p-2 rounded-xl inline-block w-fit mb-3 border border-slate-100">{getHighlightIcon(idx + 4)}</div>
                    <span className="text-xs font-bold text-slate-800 leading-snug">{h}</span>
                  </div>
                ))}
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

              {/* FAQs */}
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

              {/* Enrollment CTA */}
              <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ready to take the next step? Fill out the online registration form or call our support desk to finalize admissions.
                </p>
                <button
                  onClick={() => {
                    if (setActiveTab) { setActiveTab("enroll"); window.scrollTo({ top: 0, behavior: "smooth" }); }
                    else { document.getElementById("enrollment-section")?.scrollIntoView({ behavior: "smooth" }); }
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold text-xs uppercase tracking-wider hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md cursor-pointer self-start sm:self-auto"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function CourseFaqItem({ question, answer }: { question: string; answer: string; key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-800 rounded-2xl overflow-hidden transition-all bg-slate-905/30 dark:bg-slate-900/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center text-xs font-black tracking-widest text-slate-200 hover:text-white hover:bg-slate-800/40 transition-colors cursor-pointer gap-4"
      >
        <span>Q. {question}</span>
        <span className="text-primary-500 dark:text-red-400 transition-transform duration-300 shrink-0">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] border-t border-slate-250" : "max-h-0"}`}>
        <div className="p-6 bg-white text-slate-800 text-xs font-semibold leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}
