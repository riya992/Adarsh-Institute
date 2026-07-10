import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-primary-600 dark:text-red-400 uppercase tracking-widest bg-primary-100 dark:bg-red-950/40 px-3 py-1.5 rounded-full">
            Got Questions?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Get instant answers regarding batch timings, scholarship eligibility, document verifications, and online portals.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4" id="faq-accordion-container">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/50 dark:bg-slate-900/40 border-primary-200 dark:border-red-900/50 shadow-md"
                    : "bg-white dark:bg-slate-950 border-slate-200/60 dark:border-slate-850 hover:bg-slate-50/20 dark:hover:bg-slate-900/20 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
                id={`faq-item-${index}`}
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? "text-primary-600 dark:text-red-400" : "text-slate-400"}`} />
                    <span className={`font-sans font-semibold text-sm sm:text-base transition-colors ${isOpen ? "text-primary-950 dark:text-white" : "text-slate-800 dark:text-slate-200"}`}>
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all duration-300 ${isOpen ? "rotate-180 bg-primary-100 dark:bg-red-950/60 text-primary-600 dark:text-red-400" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-100 dark:border-slate-850 opacity-100 py-5 px-6" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
