import React from "react";
import { Award, ShieldAlert, Cpu, Heart, CheckCircle2, Terminal } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about-section" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-primary-600 dark:text-red-400 uppercase tracking-widest bg-primary-100 dark:bg-red-950/40 px-3 py-1.5 rounded-full">
            Our Legacy & Infrastructure
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            About Adarsh Institute
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Providing industry-aligned computer education since inception, building professional careers for thousands of computer legacy specialists.
          </p>
        </div>

        {/* Content Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mission and values (Left side) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-2xl text-slate-800 dark:text-slate-100">
              Forging Tech Experts Under a Shared Tagline: <br />
              <span className="text-primary-600 dark:text-red-400">"Become a Part of Computer Legacy"</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              At Adarsh Institute, we believe computer literacy is the absolute cornerstone of modern professional progress. From fundamental programs like Tally Prime and DCA to advanced Postgraduate degrees like MCA, we tailor our methodologies to ensure high-end, practical execution.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-primary-50 dark:bg-red-950/20 rounded-lg text-primary-600 dark:text-red-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">Standard Practical Labs</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Over 120+ physical high-spec workstation nodes equipped with standard compiling shells and IDEs.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-primary-50 dark:bg-red-950/20 rounded-lg text-primary-600 dark:text-red-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">Qualified Industry Instructors</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Lectures delivered by former software developers, database managers, and registered accountants.</p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-primary-50 dark:bg-red-950/20 rounded-lg text-primary-600 dark:text-red-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200">Global Certifications</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Curriculums aligned with industry councils ensuring certificates are globally recognizable.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Lab Bento visual elements (Right side) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            
            {/* Bento block 1 */}
            <div className="bg-gradient-to-tr from-primary-950 to-primary-900 rounded-2xl p-6 text-white space-y-4 shadow-lg border border-primary-850">
              <Cpu className="w-8 h-8 text-accent-400" />
              <h4 className="font-display font-bold text-sm">Computer Legacy Sandbox</h4>
              <p className="text-[11px] text-blue-200/70 leading-relaxed">
                State-of-the-art server racks and networking modules on campus allow students to experiment with network topologies.
              </p>
            </div>

            {/* Bento block 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all">
              <Award className="w-8 h-8 text-primary-600 dark:text-red-400" />
              <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200">Govt & Board Approvals</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Our programs conform fully to digital literacy norms, pre-qualifying students for various central and state service criteria.
              </p>
            </div>

            {/* Bento block 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all col-span-2 flex items-center gap-6">
              <div className="bg-primary-600/10 dark:bg-red-950/20 p-3.5 rounded-xl shrink-0 text-primary-600 dark:text-red-400">
                <Terminal className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200">State-Of-The-Art Workspace</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Dual-pane displays in our advanced labs assist students in learning side-by-side frontend coding and database queries without clutter.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
