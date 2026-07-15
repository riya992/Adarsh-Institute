import React, { useState, useEffect } from "react";
import { X, User, Mail, Phone, MapPin, BookOpen, Star, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
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

  // Auto-open after 1.5 seconds on load if not already closed/submitted in this session
  useEffect(() => {
    if (isLoggedIn) return; // Don't show if already logged in

    const isClosed = sessionStorage.getItem("adarsh_enquiry_modal_closed");
    const isSubmitted = localStorage.getItem("adarsh_is_logged_in") === "true";

    if (!isClosed && !isSubmitted) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  // Extract all courses dynamically for select dropdown
  const allCourses = COURSE_CATEGORIES.flatMap(category => 
    category.courses.map(c => ({
      name: c.name,
      category: category.title
    }))
  );

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("adarsh_enquiry_modal_closed", "true");
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
      sessionStorage.setItem("adarsh_enquiry_modal_closed", "true");

      setTimeout(() => {
        onSuccess(name);
        setIsOpen(false);
      }, 1500);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-2xl relative animate-in zoom-in-95 duration-300"
        id="auto-enquiry-modal-container"
      >
        {/* Banner with rotating/pulsing stars */}
        <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white p-6 relative overflow-hidden">
          {/* Absolutes decorative blobs */}
          <div className="absolute top-[-30%] right-[-10%] w-32 h-32 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-[-40%] left-[-10%] w-24 h-24 rounded-full bg-accent-400/20 blur-xl" />

          {/* Close button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 p-2 rounded-full transition-all cursor-pointer focus:outline-none"
            title="Close"
            id="close-enquiry-modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Title with animated Stars */}
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center p-1.5 bg-white/10 rounded-lg animate-wiggle">
              <Sparkles className="w-5 h-5 text-amber-300 animate-star-spin-pulse" />
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-accent-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/5">
              ADMISSIONS OPEN 2026-27
            </span>
          </div>
          <h3 className="font-display font-extrabold text-lg sm:text-xl tracking-tight">
            Take Your First Step to Success!
          </h3>
          <p className="text-white/80 text-xs mt-1 leading-relaxed">
            Fill this fast enquiry form & secure your certified batch slot with 1:1 Lab Node access!
          </p>
        </div>

        {/* Content & Form */}
        <div className="p-6">
          {successMessage ? (
            <div className="py-8 text-center space-y-3" id="modal-success-screen">
              <div className="inline-flex p-3 bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">Enquiry Submitted!</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">{successMessage}</p>
              <div className="text-[10px] text-slate-400">Loading certificate courses...</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" id="modal-enquiry-form">
              {errorMessage && (
                <div className="flex items-center gap-2 bg-red-500/10 text-red-600 dark:text-red-400 text-xs p-3 rounded-xl border border-red-500/20" id="modal-error-message">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Grid fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Student Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g., Riya Bhardwaj" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="email" 
                      placeholder="student@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">WhatsApp Phone No.</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="tel" 
                      placeholder="e.g., 9876543210" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </div>

                {/* State */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">State / Region</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select 
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select State</option>
                      {INDIAN_STATES.map(s => (
                        <option key={s} value={s} className="dark:bg-slate-900">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Course selection */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Select Course to Pursue</label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select 
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Choose target course</option>
                    {allCourses.map(c => (
                      <option key={c.name} value={c.name} className="dark:bg-slate-900">
                        {c.name} ({c.category})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-sans font-bold text-xs uppercase tracking-widest py-3 px-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                id="modal-submit-button"
              >
                <span>{isSubmitting ? "Submitting Enquiry..." : "Submit Enquiry Now"}</span>
                <Sparkles className="w-4 h-4 text-amber-300 animate-star-spin-pulse" />
              </button>

              <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center leading-normal">
                By submitting, you agree to receive automated contact regarding admission verification, fee structures, and batch slot confirmations.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
