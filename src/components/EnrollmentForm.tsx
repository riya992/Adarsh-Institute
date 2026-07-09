import React, { useState } from "react";
import { User, Mail, Phone, MapPin, BookOpen, ArrowRight, CheckCircle, Sparkles, AlertCircle } from "lucide-react";
import { ActiveTab } from "../types";
import { COURSE_CATEGORIES } from "../data";

interface EnrollmentFormProps {
  onSuccess: (username: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

const INDIAN_STATES = [
  "Delhi", "Haryana", "Uttar Pradesh", "Punjab", "Rajasthan", "Bihar", 
  "Madhya Pradesh", "Maharashtra", "Karnataka", "Andhra Pradesh", 
  "Assam", "Chandigarh", "Chhattisgarh", "Gujarat", "Himachal Pradesh", 
  "Jammu & Kashmir", "Jharkhand", "Kerala", "Odisha", "Tamil Nadu", 
  "Telangana", "Uttarakhand", "West Bengal", "Other"
];

export default function EnrollmentForm({ onSuccess, setActiveTab }: EnrollmentFormProps) {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [course, setCourse] = useState("");
  
  // Status states
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Extract all courses dynamically for the select dropdown
  const allCourses = COURSE_CATEGORIES.flatMap(category => 
    category.courses.map(c => ({
      name: c.name,
      category: category.title
    }))
  );

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    // Basic Validation
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
      setErrorMessage("Please select your Target Course.");
      setIsSubmitting(false);
      return;
    }

    // Simulate Network Request
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(`Thank you, ${name}! Your enquiry has been submitted successfully.`);
      
      // Call parenting handlers
      setTimeout(() => {
        onSuccess(name);
        setActiveTab("programmes");
        // Scroll to eligibility list automatically
        setTimeout(() => {
          document.getElementById("programmes-section")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }, 1500);
    }, 1200);
  };

  return (
    <section id="enrollment-section" className="py-20 bg-gradient-to-b from-primary-950 to-primary-900 text-white relative overflow-hidden">
      {/* Background visual flourishes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="absolute bottom-10 left-[-10%] w-[35%] h-[35%] rounded-full bg-primary-500/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-semibold text-accent-400 uppercase tracking-widest bg-accent-500/10 px-3.5 py-1.5 rounded-full border border-accent-500/20">
            Adarsh Admission Enquiry Portal
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Begin Your Computer Legacy Today
          </h2>
          <p className="text-blue-200/70 text-sm sm:text-base max-w-xl mx-auto">
            Fill out the digital enquiry format to unlock course eligibility lists, interactive syllabi, and secure your place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-3xl mx-auto">
          {/* Info Panel / Trust factors (Left side) */}
          <div className="md:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-lg text-white">Enquiry Benefits</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-xs text-blue-200/80">
                    <strong className="text-white block mb-0.5">Instant Counselling Callback</strong>
                    Get contacted by a senior computer instructor to discuss batch times and career opportunities.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-xs text-blue-200/80">
                    <strong className="text-white block mb-0.5">Free Syllabus & Placement Guide</strong>
                    Receive complete, modular PDF breakdowns of your selected program.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-xs text-blue-200/80">
                    <strong className="text-white block mb-0.5">Scholarship Assessment</strong>
                    Check automatically if you are eligible for tuition waivers and legacy discounts.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Quote */}
            <div className="mt-8 pt-6 border-t border-white/5 text-left">
              <span className="block text-[11px] uppercase tracking-wider text-accent-300 font-semibold mb-1">
                Admissions Desk
              </span>
              <p className="text-xs italic text-blue-300/80">
                "Our digital helpdesk streamlines registrations instantly. Fill in your genuine details to lock preferred computer lab slots."
              </p>
            </div>
          </div>

          {/* Form Container (Right side) */}
          <div className="md:col-span-7 glass-card-dark rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
            <h3 className="font-display font-bold text-lg text-white mb-6 border-b border-white/5 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-400" />
              Admission Enquiry Form
            </h3>

            <form onSubmit={handleEnquirySubmit} className="space-y-5" id="enroll-form">
              {/* Error & Success States */}
              {errorMessage && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-200 text-xs p-3 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
              {successMessage && (
                <div className="flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-200 text-xs p-3 rounded-xl">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Student Name */}
              <div className="space-y-1.5" id="field-student-name">
                <label className="block text-xs font-medium text-blue-200">Student Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-300">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5" id="field-student-email">
                <label className="block text-xs font-medium text-blue-200">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5" id="field-student-phone">
                <label className="block text-xs font-medium text-blue-200">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="+91 92126 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* State */}
              <div className="space-y-1.5" id="field-student-state">
                <label className="block text-xs font-medium text-blue-200">State</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <select
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-primary-950 text-slate-400">Select State</option>
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st} className="bg-primary-950 text-white">
                        {st}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-300">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Target Course */}
              <div className="space-y-1.5" id="field-student-course">
                <label className="block text-xs font-medium text-blue-200">Target Course</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-300">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <select
                    required
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-primary-950 text-slate-400">Select Target Course</option>
                    {COURSE_CATEGORIES.map((category) => (
                      <optgroup key={category.id} label={category.title} className="bg-primary-950 text-accent-400 font-bold">
                        {category.courses.map((c) => (
                          <option key={c.name} value={c.name} className="bg-primary-950 text-white font-normal">
                            {c.name} ({c.duration})
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-300">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-sans font-semibold text-sm tracking-wider uppercase py-3.5 rounded-xl shadow-lg hover:shadow-primary-600/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                id="submit-auth-button"
              >
                {isSubmitting ? (
                  <span>Processing Enquiry...</span>
                ) : (
                  <>
                    <span>Submit Enquiry & Check Eligibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
