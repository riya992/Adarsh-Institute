import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  compact?: boolean;
}

export default function Logo({ className = "", variant = "light", compact = false }: LogoProps) {
  // Use Vite's new URL() helper to load the asset as a string without triggering TS module resolution errors
  const logoImg = new URL("../assets/images/adarsh_logo.png", import.meta.url).href;

  // Respect the compact flag to size the logo image appropriately
  const dimensions = compact 
    ? "h-16 sm:h-18 w-auto object-contain" 
    : "h-20 sm:h-28 w-auto object-contain";

  return (
    <div 
      className={`flex items-center justify-center ${className}`} 
      id={compact ? "adarsh-brand-logo-compact" : "adarsh-brand-logo"}
    >
      <img
        src={logoImg}
        alt="Adarsh Computer Education Logo"
        className={`${dimensions}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}


