import React from "react";
import { MapPin, Phone, Mail, Globe, Instagram, MessageSquare, Facebook, Youtube, Cpu, ChevronRight } from "lucide-react";
import { CONTACT_INFO } from "../data";
import { ActiveTab } from "../types";
import Logo from "./Logo";

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  
  const handleQuickLink = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Section 1: About (4 Cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="inline-block">
              <Logo />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              Adarsh Institute stands as a premium beacon of computerized learning. Our mission is to empower students with algorithmic and administrative excellence, fostering professional legacies in hardware, software, and administrative finance.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3" id="footer-social-icons">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-gradient-to-tr hover:from-primary-600 hover:to-accent-500 hover:text-white transition-all text-slate-500 dark:text-slate-400 cursor-pointer"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.whatsappGroup}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-green-600 hover:text-white transition-all text-slate-500 dark:text-slate-400 cursor-pointer"
                title="Join our WhatsApp Group"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all text-slate-500 dark:text-slate-400 cursor-pointer"
                title="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.youtube}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200/50 dark:bg-white/5 hover:bg-red-600 hover:text-white transition-all text-slate-500 dark:text-slate-400 cursor-pointer"
                title="Subscribe to our YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 2: Contact Details (4 Cols) */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white">Contact details</h4>
            <div className="space-y-4 text-xs sm:text-sm" id="footer-contact-details">
              
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-accent-600 dark:text-accent-400 mt-0.5 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400">{CONTACT_INFO.address}</span>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-accent-600 dark:text-accent-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-accent-600 dark:text-accent-400 font-semibold uppercase tracking-wider">Enquiry Now</span>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`} className="text-slate-800 dark:text-slate-200 font-bold hover:text-primary-600 dark:hover:text-white transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-500 dark:text-slate-500">Available 9 AM - 7 PM</span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-accent-600 dark:text-accent-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Globe className="w-4 h-4 text-accent-600 dark:text-accent-400 shrink-0" />
                <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-colors">
                  {CONTACT_INFO.website}
                </a>
              </div>

            </div>
          </div>

          {/* Section 3: Quick Links (4 Cols) */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white">Quick links</h4>
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm" id="footer-quick-links">
              
              <button onClick={() => handleQuickLink("home")} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-all cursor-pointer text-left">
                <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                <span>Home</span>
              </button>

              <button onClick={() => handleQuickLink("about")} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-all cursor-pointer text-left">
                <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                <span>About Us</span>
              </button>

              <button onClick={() => handleQuickLink("programmes")} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-all cursor-pointer text-left">
                <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                <span>Programmes</span>
              </button>

              <button onClick={() => handleQuickLink("academia")} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-all cursor-pointer text-left">
                <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                <span>Academia</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("home");
                  setTimeout(() => {
                    document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-white transition-all cursor-pointer text-left col-span-2"
              >
                <ChevronRight className="w-3.5 h-3.5 text-primary-500" />
                <span>Frequently Asked Questions</span>
              </button>

            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Adarsh Institute. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">Privacy Guidelines</span>
            <span>•</span>
            <span className="hover:text-slate-700 dark:hover:text-slate-400 cursor-pointer">Syllabus Approvals</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
