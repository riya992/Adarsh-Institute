import React from "react";
import { 
  ArrowRight, 
  GraduationCap, 
  Trophy, 
  Sparkles, 
  Award, 
  Laptop, 
  Volume2,
  CheckCircle2,
  Users,
  Building
} from "lucide-react";
import { ActiveTab } from "../types";

const adarshClassroomProjector = new URL("../assets/images/adarsh_classroom_projector_1783592164564.jpg", import.meta.url).href;

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
  isLoggedIn: boolean;
}

export default function Hero({ setActiveTab, isLoggedIn }: HeroProps) {
  return (
    <section 
      id="hero-section" 
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-12 pb-16 md:pt-16 md:pb-24 flex flex-col items-center transition-colors duration-300"
    >
      {/* Subtle, High-Quality Background Details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" id="hero-bg-embellishments">
        {/* Fine, modern dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] bg-[size:24px_24px] opacity-60" />
        
        {/* Soft, warm ambient branding color glows */}
        <div className="absolute top-[10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-red-100/30 dark:from-red-900/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-gradient-to-tr from-emerald-100/30 dark:from-emerald-900/10 to-transparent blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full space-y-12">
        
        {/* Split Grid for Modern layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Copy, Value Proposition, & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Elegant Branding Badge with Wiggle and Pulsing/Rotating Star */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-150 dark:border-red-900/40 text-xs text-[#e31e24] dark:text-red-400 font-extrabold tracking-wider uppercase shadow-sm animate-wiggle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Admissions Open 2026-2027</span>
              <Sparkles className="w-4.5 h-4.5 text-amber-500 dark:text-amber-400 animate-star-spin-pulse" />
            </div>

            {/* Display Typography Heading */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              Empowering Minds Through <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e31e24] via-red-500 to-[#008744]">
                Modern Computer Literacy
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong className="text-slate-800 dark:text-slate-200">Adarsh Computer Education</strong>, Narela's premier technical learning destination. We bridge the gap between academic theory and practical software mastery through structured, expert-led courses.
            </p>

            {/* Core Vows / Fast Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#008744] shrink-0" />
                <span>1:1 Guaranteed Workspace Lab Nodes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#008744] shrink-0" />
                <span>Government & Board Certified Syllabus</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#008744] shrink-0" />
                <span>Experienced Faculty & Accountants</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#008744] shrink-0" />
                <span>Robust Placement & Skill Assistance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <button
                onClick={() => setActiveTab(isLoggedIn ? "programmes" : "enroll")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-extrabold tracking-wider uppercase text-white bg-gradient-to-r from-[#e31e24] to-red-600 hover:from-red-600 hover:to-red-750 shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer border border-white/10 animate-wiggle"
                id="hero-enroll-btn"
              >
                <span>{isLoggedIn ? "Go to Programmes" : "Enquiry Now"}</span>
                <Sparkles className="w-4.5 h-4.5 text-amber-300 animate-star-spin-pulse" />
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => {
                  setActiveTab("programmes");
                  setTimeout(() => {
                    document.getElementById("programmes-section")?.scrollIntoView({ behavior: "smooth" });
                  }, 150);
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                id="hero-explore-btn"
              >
                <span>Explore Courses</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean, Framed Academic Graphic with Floating Glassmorphic Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Styled Image Frame */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
              <img
                src={adarshClassroomProjector}
                alt="Adarsh Classroom Learning Environment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              
              {/* Soft vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphic Badge 1: 15,500+ Alumni (Top-Left) */}
            <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-float max-w-[180px]">
              <div className="bg-amber-100 dark:bg-amber-950/40 p-2 rounded-lg text-amber-600 dark:text-amber-400 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display font-extrabold text-sm text-slate-800 dark:text-slate-100">15,000+</span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">Certified Alumni</span>
              </div>
            </div>

            {/* Floating Glassmorphic Badge 2: Government Approved Certificate (Bottom-Right) */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/60 backdrop-blur-md border-2 border-[#008744]/35 dark:border-emerald-500/35 p-3.5 rounded-xl shadow-xl shadow-emerald-900/15 dark:shadow-emerald-950/30 flex items-center gap-3 max-w-[220px]">
              <div className="bg-[#008744] p-2.5 rounded-lg text-white shrink-0 shadow-md shadow-emerald-700/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display font-extrabold text-xs text-[#006b36] dark:text-emerald-300">Government Approved</span>
                <span className="block text-[9px] font-medium text-slate-600 dark:text-slate-300 leading-tight mt-0.5">ISO 9001:2015 Standards Vetted</span>
              </div>
            </div>

          </div>

        </div>

        {/* ==================== CLEAN NEWS TICKER (Subtle & Highly Integrated Ribbon) ==================== */}
        <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 p-1 flex items-center overflow-hidden h-12 shadow-sm" id="hero-latest-news-ticker">
          <div className="bg-[#e31e24] text-white font-sans font-extrabold text-[10px] tracking-wider uppercase h-full flex items-center px-4 rounded-xl gap-2 shadow-sm relative z-10 shrink-0">
            <Volume2 className="w-3.5 h-3.5 text-white animate-pulse" />
            <span>Latest News</span>
          </div>
          
          {/* Scrolling Ticker Text */}
          <div className="flex-1 overflow-hidden relative h-full flex items-center pl-4">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 text-slate-700 dark:text-slate-300 text-xs font-semibold">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008744]" />
                Adarsh Institute 2026 Online Counselling Round 1 Result Declared - DCA, O Level, Tally Prime
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008744]" />
                New Batches starting this Monday for Advanced Python Programming and Web Design. Limited seats remaining!
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008744]" />
                Congratulations to our 45+ students placed in top regional IT firms in the June Placement Drive.
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008744]" />
                Government Recognized Certification exams registration now open for DCA & O Level batches.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
