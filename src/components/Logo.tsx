import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  compact?: boolean;
}

export default function Logo({ className = "", variant = "light", compact = false }: LogoProps) {
  const logoImg = new URL("../assets/images/adarsh_logo.png", import.meta.url).href;

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
