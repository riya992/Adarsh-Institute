import React, { useState, useEffect, useRef } from "react";
import { Award, CheckCircle2, Star, Quote, ShieldCheck, BookOpen, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Review {
  id: string;
  name: string;
  course: string;
  rating: number;
  comment: string;
  placement?: string;
  avatarColor: string;
}

// ─── Reviews Pool ─────────────────────────────────────────────────────────────
const ALL_REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Divya Chauhan",
    course: "ADCA — Advanced Diploma in Computer Applications",
    rating: 5,
    comment: "The faculty here is incredibly patient and dedicated — I never found that level of care anywhere else. Every concept was explained with clarity and real examples. Right after completing ADCA, I landed a Junior Executive role at a bank.",
    placement: "Junior Executive — PNB",
    avatarColor: "bg-rose-500",
  },
  {
    id: "r2",
    name: "Karan Malhotra",
    course: "Tally Prime & GST Course",
    rating: 5,
    comment: "Learning Tally Prime with live GST filing practice was a true game-changer for my career. The institute's hands-on approach made complex accounting feel straightforward. I now work as a Junior Accountant at a reputed CA firm.",
    placement: "Junior Accountant",
    avatarColor: "bg-blue-500",
  },
  {
    id: "r3",
    name: "Neha Rawat",
    course: "DCA — Diploma in Computer Applications",
    rating: 5,
    comment: "I had almost zero computer knowledge before joining Adarsh Institute. After completing DCA, I can confidently use MS Office, the Internet, and basic accounting software. The faculty guided me at every single step without any hesitation.",
    placement: "Office Assistant",
    avatarColor: "bg-purple-500",
  },
  {
    id: "r4",
    name: "Rohit Kashyap",
    course: "BCA — Bachelor of Computer Applications",
    rating: 5,
    comment: "The BCA university preparation here was extremely systematic — theory, lab practicals, and mock tests all covered together. The lab facilities are top-notch and teachers are always available for extra guidance even after class hours.",
    placement: "Software Developer",
    avatarColor: "bg-emerald-500",
  },
  {
    id: "r5",
    name: "Anjali Tomar",
    course: "MS Office & Internet Proficiency",
    rating: 5,
    comment: "As a homemaker, I thought the digital world was not for me. Adarsh Institute completely changed that mindset. Today I work as a freelance data analyst from home and am financially independent — all thanks to this institute.",
    placement: "Freelance Data Analyst",
    avatarColor: "bg-amber-500",
  },
  {
    id: "r6",
    name: "Sumit Dhiman",
    course: "Hardware & Networking Diploma",
    rating: 5,
    comment: "Getting hands-on experience with real hardware was incredibly valuable. We worked live with routers, switches, and CPU assemblies — not just theory. This training directly helped me secure a Field IT Technician position at an IT company.",
    placement: "Field IT Technician",
    avatarColor: "bg-cyan-500",
  },
  {
    id: "r7",
    name: "Pooja Negi",
    course: "Tally ERP & Financial Accounting",
    rating: 4,
    comment: "I always had interest in accounts but my practical knowledge was almost nil. The structured batch schedule and dedicated doubt-clearing sessions here changed everything. I now confidently handle ledgers and GST return filings at my workplace.",
    placement: "Accounts Executive",
    avatarColor: "bg-pink-500",
  },
  {
    id: "r8",
    name: "Arjun Bisht",
    course: "ADCA & Personality Development",
    rating: 5,
    comment: "What makes Adarsh stand out is that along with technical skills, they also conduct personality development and interview preparation sessions — something I haven't seen at any other institute. Absolutely the best decision I made for my career.",
    placement: "MIS Executive — Airtel",
    avatarColor: "bg-indigo-500",
  },
];

// ─── Shuffle helper ───────────────────────────────────────────────────────────
function shuffleArray<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ─── Avatar Circle ────────────────────────────────────────────────────────────
function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md`}>
      {initials}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AboutUs() {
  const [shuffled, setShuffled] = useState<Review[]>([]);
  const [page, setPage] = useState(0); // which group of 3 to show
  const totalPages = Math.ceil(shuffled.length / 3);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    setShuffled(shuffleArray(ALL_REVIEWS));
  }, []);

  const displayed = shuffled.slice(page * 3, page * 3 + 3);

  const goNext = () => {
    setDirection(1);
    setPage((p) => (p + 1) % totalPages);
  };
  const goPrev = () => {
    setDirection(-1);
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  return (
    <section id="about-section" className="py-20 bg-slate-50 dark:bg-slate-950/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-primary-700 dark:text-red-400 uppercase tracking-widest bg-primary-100 dark:bg-red-950/40 px-3 py-1.5 rounded-full">
            Our Legacy, Affiliation &amp; Impact
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Welcome to Adarsh Computers Institute
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            A trusted hub of professional digital learning empowering students with certified skills, high-end practical labs, and global recognition.
          </p>
        </div>

        {/* 🌟 Affiliation Banner */}
        <div id="affiliation-banner" className="mb-16 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/60 dark:border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Govt. Recognized Training Center
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                National Affiliations &amp; Accreditations
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Adarsh Computers Institute is proudly aligned with key national development schemes, assuring 100% genuine certifications valid for government as well as private jobs across India.
              </p>
            </div>

            <div className="flex items-center justify-center w-full md:w-auto shrink-0">
              <div className="bg-white dark:bg-white rounded-2xl p-4 shadow-md border border-slate-200 dark:border-slate-300 flex items-center justify-center">
                <img
                  src={new URL("../assets/images/skill_india_nsdc_logos.jpg", import.meta.url).href}
                  alt="Skill India & NSDC Logo"
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 📖 Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary-600 dark:text-red-400 uppercase tracking-widest">
                Our Journey &amp; Mission
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-800 dark:text-slate-100">
                The Story of <span className="text-primary-600 dark:text-red-400">Adarsh Computers</span>
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Adarsh Computer Education was founded with a profound mission: to make high-quality, practical computer and technical education accessible to every aspiring student in Narela and its surrounding regions. What started as a humble computer learning initiative with just a few systems has now matured into a premier IT training and professional education landmark.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              For over two decades, we have focused on bridging the digital divide by nurturing technical experts. By combining standard university degree streams (BCA, MCA, B.Sc) with fast-track job-oriented certifications (Tally Prime, DCA, ADCA), we have proudly empowered over <strong>5,000+ students</strong> to secure prominent placements in top corporate firms and qualify for essential state and central government services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-center rounded-2xl border border-red-200/80 dark:border-red-900/50 bg-gradient-to-r from-red-50 to-white dark:from-red-950/30 dark:to-slate-900 p-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Job-Oriented Courses</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">100% practical lab curricula</p>
                </div>
              </div>
              <div className="flex gap-3 items-center rounded-2xl border border-emerald-200/80 dark:border-emerald-900/50 bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-950/25 dark:to-slate-900 p-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#008744] text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-700/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Flexible Batch Timings</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Perfect for students &amp; professionals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-gradient-to-tr from-[#003B46] to-[#07575B] rounded-2xl p-6 text-white space-y-3 shadow-md">
              <Award className="w-8 h-8 text-yellow-400" />
              <h4 className="font-display font-bold text-sm">Recognized Standards</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Govt-aligned certifications, including NSDC partnership, ensuring high employability rate.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200">Advanced Computer Labs</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Equipped with latest hardware, live projectors, and Tally ERP software setups for hands-on sessions.
              </p>
            </div>
          </div>
        </div>

        {/* 💬 Reviews / Testimonials */}
        <div id="student-reviews-section" className="pt-8">

          {/* Header + Nav arrows */}
          <div className="flex items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-accent-600 dark:text-accent-400 uppercase tracking-widest">
                Testimonials
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                What Our Students Say About Us
              </h3>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                id="reviews-prev-btn"
                onClick={goPrev}
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 dark:hover:bg-red-600 dark:hover:border-red-600 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="reviews-next-btn"
                onClick={goNext}
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 dark:hover:bg-red-600 dark:hover:border-red-600 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              {displayed.map((rev) => (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 flex flex-col justify-between transition-shadow duration-300 relative group"
                  id={`review-card-${rev.id}`}
                >
                  {/* Decorative quote */}
                  <Quote className="absolute right-5 top-5 w-9 h-9 text-slate-100 dark:text-slate-800/40 pointer-events-none group-hover:scale-110 transition-transform duration-300" />

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rev.rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"}`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic flex-1 relative z-10">
                    "{rev.comment}"
                  </p>

                  {/* Author row */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                    <Avatar name={rev.name} color={rev.avatarColor} />
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 truncate">{rev.name}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{rev.course}</p>
                      {rev.placement && (
                        <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md">
                          {rev.placement}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Page dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === page ? "bg-red-600 w-5" : "bg-slate-300 dark:bg-slate-700"}`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
