import React from "react";
import { Award, CheckCircle2, Star, Quote, ShieldCheck, BookOpen, Clock, Heart } from "lucide-react";

export default function AboutUs() {
  const reviews = [
    {
      id: "rev-1",
      name: "Rahul Sharma",
      course: "ADCA (Advanced Diploma in Computer Applications)",
      rating: 5,
      comment: "Joining Adarsh Computer Education was the turning point of my life. The practical labs are amazing, and the teachers explain every concept from scratch. Highly recommend the ADCA course for anyone looking to build a real career in computers!",
      placement: "Placed at HDFC Bank"
    },
    {
      id: "rev-2",
      name: "Priya Bhardwaj",
      course: "Tally Prime & GST Professional Course",
      rating: 5,
      comment: "The focus on hands-on practicals rather than just theory makes this institute stand out. The Skill India and NSDC certification added immense value to my resume, helping me land a professional accountant role immediately.",
      placement: "Accountant"
    },
    {
      id: "rev-3",
      name: "Amit Verma",
      course: "BCA / MCA University Program",
      rating: 5,
      comment: "Excellent teaching faculty and state-of-the-art computer labs. The support for extra practice hours, regular class tests, and personality development sessions helped me crack both university exams and job interviews.",
      placement: "Tech Consultant"
    }
  ];

  return (
    <section id="about-section" className="py-20 bg-slate-50 dark:bg-slate-950/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-primary-700 dark:text-red-400 uppercase tracking-widest bg-primary-100 dark:bg-red-950/40 px-3 py-1.5 rounded-full">
            Our Legacy, Affiliation & Impact
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            About Adarsh Computers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            A trusted hub of professional digital learning empowering students with certified skills, high-end practical labs, and global recognition.
          </p>
        </div>

        {/* 🌟 Prominent Affiliation & Accreditation Badges */}
        <div id="affiliation-banner" className="mb-16 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/60 dark:border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Govt. Recognized Training Center
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                National Affiliations & Accreditations
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Adarsh Computers Institute is proudly aligned with key national development schemes, assuring 100% genuine certifications valid for government as well as private jobs across India.
              </p>
            </div>
            
            {/* Accreditation boxes */}
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

        {/* 📖 The Story of the Institute & Core Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Story (Left side) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary-600 dark:text-red-400 uppercase tracking-widest">
                Our Journey & Mission
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
                  <p className="text-xs text-slate-500 dark:text-slate-400">Perfect for students & professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Highlights (Right side - bento box layout) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Bento block 1 */}
            <div className="bg-gradient-to-tr from-[#003B46] to-[#07575B] rounded-2xl p-6 text-white space-y-3 shadow-md">
              <Award className="w-8 h-8 text-yellow-400" />
              <h4 className="font-display font-bold text-sm">Recognized Standards</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Govt-aligned certifications, including NSDC partnership, ensuring high employability rate.
              </p>
            </div>

            {/* Bento block 2 */}
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

        {/* 💬 Student Reviews & Testimonials Section */}
        <div id="student-reviews-section" className="pt-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-accent-600 dark:text-accent-400 uppercase tracking-widest">
              Testimonials
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              What Our Students Say About Us
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
              Real reviews from students who successfully launched their technical and accounting careers through Adarsh Computers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-150 dark:border-slate-850 flex flex-col justify-between transition-all duration-300 relative group"
                id={`student-review-${rev.id}`}
              >
                {/* Decorative background quote icon */}
                <Quote className="absolute right-6 top-6 w-10 h-10 text-slate-100 dark:text-slate-800/40 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
                
                <div className="space-y-4 relative z-10">
                  {/* Star rating */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial message */}
                  <p className="text-slate-650 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {rev.course}
                    </p>
                  </div>
                  
                  {rev.placement && (
                    <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md shrink-0">
                      {rev.placement}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

