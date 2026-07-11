import React, { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Eligibility from "./components/Eligibility";
import Academia from "./components/Academia";
import FAQ from "./components/FAQ";
import EnrollmentForm from "./components/EnrollmentForm";
import Gallery from "./components/Gallery";
import Chatbot from "./components/Chatbot";
import RightFloatingBar from "./components/RightFloatingBar";
import AutoEnquiryModal from "./components/AutoEnquiryModal";
import Footer from "./components/Footer";
import { ActiveTab } from "./types";
import { Sparkles, Trophy, BookCheck, ShieldAlert, Cpu } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("adarsh_dark_mode") === "true";
  });

  // Handle document element dark mode styling & storage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("adarsh_dark_mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("adarsh_dark_mode", "false");
    }
  }, [darkMode]);

  // Load session from localStorage on mount
  useEffect(() => {
    const savedLogin = localStorage.getItem("adarsh_is_logged_in");
    const savedUser = localStorage.getItem("adarsh_username");
    if (savedLogin === "true" && savedUser) {
      setIsLoggedIn(true);
      setUsername(savedUser);
    }
  }, []);

  const handleLoginSuccess = (name: string) => {
    setIsLoggedIn(true);
    setUsername(name);
    localStorage.setItem("adarsh_is_logged_in", "true");
    localStorage.setItem("adarsh_username", name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("adarsh_is_logged_in");
    localStorage.removeItem("adarsh_username");
    setActiveTab("home");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfdfe] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300" id="adarsh-portal-root">
      
      {/* 📞 Slim Top Information Bar */}
      <TopBar />

      {/* 🏫 Sticky Main Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        username={username}
        onLogout={handleLogout}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1" id="main-content-area">
        {activeTab === "home" && (
          <div id="tab-home-content" className="animate-in fade-in duration-500">
            {/* Eye-catching Hero section */}
            <Hero setActiveTab={setActiveTab} isLoggedIn={isLoggedIn} />
            
            {/* Quick About teaser inside home */}
            <AboutUs />

            {/* Quick programmes teaser */}
            <Eligibility setActiveTab={setActiveTab} />

            {/* Quick academia teaser */}
            <Academia />

            {/* Modern Accordion FAQs */}
            <FAQ />
          </div>
        )}

        {activeTab === "about" && (
          <div id="tab-about-content" className="animate-in fade-in duration-500">
            <AboutUs />
          </div>
        )}

        {activeTab === "programmes" && (
          <div id="tab-programmes-content" className="animate-in fade-in duration-500">
            {isLoggedIn && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" id="logged-in-badge">
                <div className="bg-gradient-to-r from-green-500/10 to-primary-600/10 dark:from-green-950/20 dark:to-primary-950/20 border border-green-500/20 dark:border-green-900/40 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 text-white p-2 rounded-xl">
                      <BookCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-100">Student Eligibility Verification Passed</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Congratulations {username}! You are certified to enroll in any postgraduate, undergraduate, or diploma course.</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-green-700 dark:text-green-400 bg-green-500/15 dark:bg-green-950/40 px-3 py-1 rounded-full border border-green-500/30 dark:border-green-900/50">
                    Status: Approved Batch Allocation
                  </div>
                </div>
              </div>
            )}
            <Eligibility setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === "academia" && (
          <div id="tab-academia-content" className="animate-in fade-in duration-500">
            <Academia />
          </div>
        )}

        {activeTab === "gallery" && (
          <div id="tab-gallery-content" className="animate-in fade-in duration-500">
            <Gallery />
          </div>
        )}

        {activeTab === "enroll" && (
          <div id="tab-enroll-content" className="animate-in fade-in duration-500">
            <EnrollmentForm onSuccess={handleLoginSuccess} setActiveTab={setActiveTab} />
          </div>
        )}
      </main>

      {/* 💬 Floating WhatsApp Button & AI Conversational Chatbot */}
      <Chatbot />

      {/* ➡️ Sticky Right Action Sidebar Bar */}
      <RightFloatingBar />

      {/* 🔮 Automatic Enquiry Modal on website open */}
      <AutoEnquiryModal onSuccess={handleLoginSuccess} isLoggedIn={isLoggedIn} />

      {/* 📍 Premium Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
