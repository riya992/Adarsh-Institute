import React from "react";
import { Phone, Instagram, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function TopBar() {
  return (
    <div id="top-info-bar" className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-blue-100 text-xs py-2 px-4 sm:px-6 md:px-8 border-b border-slate-200 dark:border-slate-900 flex flex-wrap justify-between items-center gap-2 relative z-50 transition-colors duration-300">
      {/* Helpline Section */}
      <div id="topbar-helpline" className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-medium tracking-wide">
        <Phone className="w-3.5 h-3.5 text-accent-600 dark:text-accent-400 animate-pulse" />
        <span className="text-slate-700 dark:text-white">Enquiry Now:</span>
        <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`} className="text-slate-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 font-bold transition-colors duration-200">
          {CONTACT_INFO.phone}
        </a>
        <span className="text-[10px] text-slate-500 dark:text-slate-300 font-normal bg-slate-200/50 dark:bg-white/10 px-2 py-0.5 rounded-full border border-slate-300/30 dark:border-white/5 ml-1">
          Available 9 AM - 7 PM
        </span>
      </div>

      {/* Center Branding Accent */}
      <div id="topbar-branding" className="hidden md:flex items-center gap-1.5 font-display text-[10px] tracking-widest uppercase font-semibold text-accent-600 dark:text-accent-400">
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>Authorized Computer Education Hub</span>
      </div>

      {/* Right Social Section */}
      <div id="topbar-socials" className="flex items-center gap-4">
        <span className="text-slate-700 dark:text-blue-300 font-display font-medium tracking-wide">Adarsh Institute</span>
        <div className="w-px h-3 bg-slate-300 dark:bg-primary-800" />
        <a
          href={CONTACT_INFO.instagram}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-blue-200 transition-colors duration-200"
          title="Follow us on Instagram"
          id="topbar-instagram-link"
        >
          <Instagram className="w-3.5 h-3.5 text-accent-600 dark:text-accent-400 hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Instagram</span>
        </a>
      </div>
    </div>
  );
}
