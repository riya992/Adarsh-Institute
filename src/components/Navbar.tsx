import React, { useState, useEffect } from "react";
import { LogOut, Menu, X, UserCheck, Sun, Moon, Sparkles } from "lucide-react";
import { ActiveTab } from "../types";
import Logo from "./Logo";

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isLoggedIn: boolean;
  username: string;
  onLogout: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ activeTab, setActiveTab, isLoggedIn, username, onLogout, darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "programmes", label: "Programmes" },
    { id: "gallery", label: "Infrastructure & Gallery" },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    // Scroll to top or offset nicely
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-900/50 py-3"
          : "bg-white/90 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200/20 dark:border-white/5 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Section (No wrapping white box) */}
          <button
            onClick={() => handleNavClick("home")}
            className="group focus:outline-none cursor-pointer transition-all duration-300 hover:scale-105 flex items-center justify-center"
            id="nav-logo"
          >
            <Logo compact />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8" id="nav-desktop-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 relative py-1.5 cursor-pointer ${
                  activeTab === item.id
                    ? "text-primary-600 dark:text-white font-semibold"
                    : "text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {item.label}
                {/* Active indicator dot/line */}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full animate-in fade-in zoom-in-50 duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all cursor-pointer focus:outline-none"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              id="theme-toggle-desktop"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-500" /> : <Moon className="w-4.5 h-4.5 text-slate-600" />}
            </button>

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-xs font-semibold text-accent-600 dark:text-accent-400 bg-accent-500/10 px-3 py-1.5 rounded-full border border-accent-500/20">
                  <UserCheck className="w-3.5 h-3.5" />
                  Hi, {username}
                </span>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                  id="btn-logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavClick("enroll")}
                className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-sans font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-xl shadow-lg hover:shadow-primary-600/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                id="nav-enroll-button"
              >
                Enquiry Now
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle Button & Mobile Theme Switch */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all cursor-pointer focus:outline-none"
              title={darkMode ? "Switch to Light" : "Switch to Dark"}
              id="theme-toggle-mobile"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 py-4 px-4 space-y-3 shadow-xl" id="nav-mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                activeTab === item.id
                  ? "bg-primary-50 dark:bg-slate-900 text-primary-600 dark:text-white font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-primary-600 dark:hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 pb-2">
            {isLoggedIn ? (
              <div className="space-y-3 px-4">
                <div className="flex items-center gap-2 text-sm text-accent-600 dark:text-accent-400">
                  <UserCheck className="w-4 h-4" />
                  Logged in as {username}
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavClick("enroll")}
                className="block w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white font-sans font-semibold text-center py-3 rounded-xl shadow-lg cursor-pointer text-xs uppercase tracking-wider animate-wiggle"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Enquiry Now</span>
                  <Sparkles className="w-4.5 h-4.5 text-amber-300 animate-star-spin-pulse" />
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
