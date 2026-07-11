import React, { useState, useEffect } from "react";
import { Award, CheckCircle2, Star, Quote, ShieldCheck, BookOpen, Clock, X, Send, PenLine } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Review {
  id: string;
  name: string;
  course: string;
  rating: number;
  comment: string;
  placement?: string;
  isDefault?: boolean;
}

// ─── Default / seed reviews ───────────────────────────────────────────────────
const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Rahul Sharma",
    course: "ADCA (Advanced Diploma in Computer Applications)",
    rating: 5,
    comment: "Joining Adarsh Computer Education was the turning point of my life. The practical labs are amazing, and the teachers explain every concept from scratch. Highly recommend the ADCA course for anyone looking to build a real career in computers!",
    placement: "Placed at HDFC Bank",
    isDefault: true,
  },
  {
    id: "rev-2",
    name: "Priya Bhardwaj",
    course: "Tally Prime & GST Professional Course",
    rating: 5,
    comment: "The focus on hands-on practicals rather than just theory makes this institute stand out. The Skill India and NSDC certification added immense value to my resume, helping me land a professional accountant role immediately.",
    placement: "Accountant",
    isDefault: true,
  },
  {
    id: "rev-3",
    name: "Amit Verma",
    course: "BCA / MCA University Program",
    rating: 5,
    comment: "Excellent teaching faculty and state-of-the-art computer labs. The support for extra practice hours, regular class tests, and personality development sessions helped me crack both university exams and job interviews.",
    placement: "Tech Consultant",
    isDefault: true,
  },
  {
    id: "rev-4",
    name: "Sneha Gupta",
    course: "DCA (Diploma in Computer Applications)",
    rating: 5,
    comment: "Adarsh Institute ne meri life badal di. DCA course ke baad mujhe ek government office mein data entry job mil gayi. Faculty bahut patient aur helpful hai. Main sabko recommend karunga!",
    placement: "Govt. Data Entry",
    isDefault: true,
  },
  {
    id: "rev-5",
    name: "Vikram Yadav",
    course: "Hardware & Networking Diploma",
    rating: 5,
    comment: "The hardware lab is exceptional — real equipment, live demos, and hands-on troubleshooting sessions. I passed my CompTIA A+ exam on the first attempt thanks to the rigorous training here.",
    placement: "Network Engineer",
    isDefault: true,
  },
  {
    id: "rev-6",
    name: "Anjali Singh",
    course: "MS Office & Internet Course",
    rating: 4,
    comment: "Perfect for beginners! The MS Office course gave me all the skills I needed. The institute's environment is very encouraging and the teachers are always ready to help after class too.",
    placement: "Office Executive",
    isDefault: true,
  },
];

const STORAGE_KEY = "adarsh_reviews";

// ─── Helper: pick 3 unique random items ──────────────────────────────────────
function pickRandom3(arr: Review[]): Review[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

// ─── Star Picker ─────────────────────────────────────────────────────────────
function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          onMouseEnter={() => setHovered(s)}
          onMouseLeave={() => setHovered(0)}
          className="cursor-pointer transition-transform hover:scale-110"
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              s <= (hovered || value)
                ? "fill-yellow-400 text-yellow-400"
                : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AboutUs() {
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [displayed, setDisplayed] = useState<Review[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [form, setForm] = useState({ name: "", course: "", placement: "", comment: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // ── Load reviews from localStorage (or defaults) on mount ──
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed: Review[] = stored ? JSON.parse(stored) : [];
      const merged = [
        ...DEFAULT_REVIEWS,
        ...parsed.filter((r) => !DEFAULT_REVIEWS.find((d) => d.id === r.id)),
      ];
      setAllReviews(merged);
      setDisplayed(pickRandom3(merged));
    } catch {
      setAllReviews(DEFAULT_REVIEWS);
      setDisplayed(pickRandom3(DEFAULT_REVIEWS));
    }
  }, []);

  // ── Submit new review ──
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) {
      setError("Naam aur review likhna zaroori hai.");
      return;
    }
    const newReview: Review = {
      id: `user-${Date.now()}`,
      name: form.name.trim(),
      course: form.course.trim() || "Adarsh Institute Student",
      rating: form.rating,
      comment: form.comment.trim(),
      placement: form.placement.trim() || undefined,
    };
    // Save only user-added reviews to localStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const prev: Review[] = stored ? JSON.parse(stored) : [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...prev, newReview]));
    } catch {}

    const updated = [...allReviews, newReview];
    setAllReviews(updated);
    setDisplayed(pickRandom3(updated));
    setSubmitted(true);
    setError("");

    // Reset after 2 s and close modal
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setForm({ name: "", course: "", placement: "", comment: "", rating: 5 });
    }, 2000);
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto shrink-0">
              <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 text-center flex flex-col items-center justify-center min-w-[220px]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 via-white to-green-500 p-0.5 flex items-center justify-center shadow-sm mb-3">
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center text-orange-600 font-extrabold text-xs">
                    Skill India
                  </div>
                </div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs tracking-wide uppercase">Affiliated By</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1">Skill India Program</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-150 dark:border-slate-800 text-center flex flex-col items-center justify-center min-w-[220px]">
                <div className="w-12 h-12 rounded-full bg-primary-650 p-0.5 flex items-center justify-center shadow-sm mb-3 text-white font-black text-xs font-mono">
                  NSDC
                </div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-xs tracking-wide uppercase">Authorised Center</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1">NSDC Training Partner</p>
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
              For over two decades, we have focused on bridging the digital divide by nurturing technical experts. By combining standard university degree streams (BCA, MCA, B.Sc) with fast-track job-oriented certifications (Tally Prime, DCA, ADCA), we have proudly empowered over <strong>5,000+ students</strong> to secure prominent placements in top corporate firms and qualify for essential state and central government services. At Adarsh, you don't just study—you become part of a lasting computer legacy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950/40 text-primary-600 dark:text-red-400 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Job-Oriented Courses</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">100% practical lab curricula</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950/40 text-primary-600 dark:text-red-400 flex items-center justify-center shrink-0">
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

        {/* 💬 Reviews Section */}
        <div id="student-reviews-section" className="pt-8">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold text-accent-600 dark:text-accent-400 uppercase tracking-widest">
                Testimonials
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                What Our Students Say About Us
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-lg">
                Real reviews from students who successfully launched their careers through Adarsh Computers.
                Showing <span className="font-semibold text-slate-700 dark:text-slate-300">3 of {allReviews.length}</span> reviews — refreshes every visit.
              </p>
            </div>

            {/* Add Review Button */}
            <button
              id="add-review-btn"
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-bold shadow-md shadow-red-600/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5 shrink-0 cursor-pointer"
            >
              <PenLine className="w-4 h-4" />
              Add Your Review
            </button>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {displayed.map((rev) => (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-150 dark:border-slate-850 flex flex-col justify-between transition-all duration-300 relative group"
                  id={`student-review-${rev.id}`}
                >
                  <Quote className="absolute right-6 top-6 w-10 h-10 text-slate-100 dark:text-slate-800/40 pointer-events-none group-hover:scale-110 transition-transform duration-300" />

                  <div className="space-y-4 relative z-10">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < rev.rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"}`}
                        />
                      ))}
                    </div>
                    <p className="text-slate-650 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">{rev.name}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{rev.course}</p>
                    </div>
                    {rev.placement && (
                      <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md shrink-0">
                        {rev.placement}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Add Review Modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            id="review-modal-backdrop"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-950/40 flex items-center justify-center">
                    <PenLine className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Share Your Experience</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Your review helps future students</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">

                {/* Rating */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    Your Rating <span className="text-red-500">*</span>
                  </label>
                  <StarPicker value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-400 transition"
                  />
                </div>

                {/* Course */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    Course Enrolled
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ADCA, Tally Prime, DCA…"
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-400 transition"
                  />
                </div>

                {/* Placement (optional) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    Job / Placement <span className="text-slate-400 font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Placed at HDFC Bank"
                    value={form.placement}
                    onChange={(e) => setForm({ ...form, placement: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-400 transition"
                  />
                </div>

                {/* Review text */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    Your Review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Apna experience share karein… (in Hindi or English)"
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-400 transition resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-xs text-red-600 dark:text-red-400 font-medium">{error}</p>
                )}

                {/* Submit */}
                <div className="pt-1">
                  {submitted ? (
                    <div className="w-full py-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-sm font-bold text-center">
                      ✅ Review submit ho gaya! Shukriya 🙏
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-bold shadow-md shadow-red-600/20 transition-all duration-300 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Submit Review
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
