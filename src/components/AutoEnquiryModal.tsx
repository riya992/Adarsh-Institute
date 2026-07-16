import React, { useState, useEffect } from "react";
import { X, User, Mail, Phone, MapPin, BookOpen, Sparkles, CheckCircle2, AlertCircle, GraduationCap } from "lucide-react";
import { COURSE_CATEGORIES } from "../data";
import { submitEnquiry } from "../lib/submitEnquiry";

interface AutoEnquiryModalProps {
  onSuccess: (username: string) => void;
  isLoggedIn: boolean;
}

const INDIAN_STATES = [
  "Delhi", "Haryana", "Uttar Pradesh", "Punjab", "Rajasthan", "Bihar",
  "Madhya Pradesh", "Maharashtra", "Karnataka", "Andhra Pradesh",
  "Assam", "Chandigarh", "Chhattisgarh", "Gujarat", "Himachal Pradesh",
  "Jammu & Kashmir", "Jharkhand", "Kerala", "Odisha", "Tamil Nadu",
  "Telangana", "Uttarakhand", "West Bengal", "Other"
];

export default function AutoEnquiryModal({ onSuccess, isLoggedIn }: AutoEnquiryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [course, setCourse] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-open after 2 seconds — show every new visit unless already submitted this session
  useEffect(() => {
    // Don't show if user is already logged in
    if (isLoggedIn) return;

    // Show once per session (sessionStorage clears when tab closes)
    const shownThisSession = sessionStorage.getItem("adarsh_modal_shown");
    if (shownThisSession) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("adarsh_modal_shown", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  // All courses flat list for dropdown
  const allCourses = COURSE_CATEGORIES.flatMap(category =>
    category.courses.map(c => ({
      name: c.name,
      category: category.title
    }))
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    if (!name.trim()) {
      setErrorMessage("Please enter your Student Name.");
      setIsSubmitting(false);
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please enter a valid Email address.");
      setIsSubmitting(false);
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setErrorMessage("Please enter a valid Phone Number.");
      setIsSubmitting(false);
      return;
    }
    if (!state) {
      setErrorMessage("Please select your State.");
      setIsSubmitting(false);
      return;
    }
    if (!course) {
      setErrorMessage("Please select your Course.");
      setIsSubmitting(false);
      return;
    }

    try {
      await submitEnquiry({
        name,
        email,
        phone,
        state,
        course,
        source: "modal_form",
      });

      setIsSubmitting(false);
      setSuccessMessage(`Congratulations ${name}! Enquiry submitted successfully.`);

      setTimeout(() => {
        onSuccess(name);
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage(
        err instanceof Error
          ? `Submission failed: ${err.message}. Please try again.`
          : "Something went wrong. Please try again."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      id="enquiry-modal-overlay"
    >
      <div
        className="bg-white dark:bg-zinc-950 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative border border-red-200 dark:border-red-900/50"
        style={{ animation: "modalPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both", boxShadow: "0 25px 60px rgba(153,27,27,0.35)" }}
        id="auto-enquiry-modal-container"
      >
        <style>{`
          @keyframes modalPop {
            from { opacity: 0; transform: scale(0.88) translateY(24px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Top gradient banner — Pure Red */}
        <div className="relative text-white px-6 pt-6 pb-8 overflow-hidden" style={{ background: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 45%, #dc2626 100%)" }}>
          {/* Decorative blobs */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl" style={{ background: "rgba(239,68,68,0.3)" }} />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl" style={{ background: "rgba(185,28,28,0.4)" }} />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer focus:outline-none"
            title="Close"
            id="close-enquiry-modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", color: "#fecaca" }}>
              🎓 Admissions Open 2026–27
            </span>
          </div>

          <h3 className="text-xl font-extrabold tracking-tight mb-1">
            Take Your First Step to Success!
          </h3>
          <p className="text-red-200/80 text-xs leading-relaxed">
            Fill this quick form &amp; secure your certified batch slot with 1:1 Lab access!
          </p>

          {/* Icon row */}
          <div className="flex items-center gap-4 mt-4">
            {["Free Counselling", "Instant Callback", "Scholarship Check"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-red-200" />
                <span className="text-[10px] text-red-100/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form area */}
        <div className="px-6 py-5 dark:bg-zinc-950">
          {successMessage ? (
            <div className="py-10 text-center space-y-3" id="modal-success-screen">
              <div className="inline-flex p-4 rounded-full border" style={{ background: "rgba(153,27,27,0.15)", borderColor: "rgba(220,38,38,0.4)", color: "#f87171" }}>
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="font-bold text-xl text-slate-900 dark:text-white">Enquiry Submitted! 🎉</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">{successMessage}</p>
              <p className="text-xs text-slate-400">Our team will contact you soon...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" id="modal-enquiry-form">
              {errorMessage && (
                <div className="flex items-center gap-2 text-xs p-3 rounded-xl border" style={{ background: "rgba(127,29,29,0.15)", borderColor: "rgba(220,38,38,0.35)", color: "#fca5a5" }} id="modal-error-message">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Student Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g., Riya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-red-900/50 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      placeholder="student@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-red-900/50 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="e.g., 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-red-900/50 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                {/* State */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    State / Region *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-red-900/50 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select State</option>
                      {INDIAN_STATES.map(s => (
                        <option key={s} value={s} className="dark:bg-slate-900">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Course — full width */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Course Interested In *
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-red-900/50 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Choose your target course</option>
                    {COURSE_CATEGORIES.map(category => (
                      <optgroup key={category.id} label={`— ${category.title} —`} className="dark:bg-slate-900">
                        {category.courses.map(c => (
                          <option key={c.name} value={c.name} className="dark:bg-slate-900 font-normal">
                            {c.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white font-bold text-sm uppercase tracking-widest py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)" }}
                id="modal-submit-button"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry Now</span>
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center leading-normal">
                By submitting, you agree to receive callbacks regarding admissions, batch slots, and scholarships.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
