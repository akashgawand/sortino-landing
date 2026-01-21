"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import ParticleBackground from "../ParticleBackground";
import MilkyWayBackground from "../MilkyWayBackground";

const Hero = ({ id = "top" }: SectionProps) => {
  const scrollToContact = () => {
    const element = document.querySelector("#CONTACT");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    };
    
    const themes = {
      // Option 1: Deep Navy & Blue (Trustworthy, Tech, Corporate)
      ocean: {
        bg: "bg-slate-950",
        textMain: "text-white",
        textMuted: "text-slate-400",
        accent: "text-blue-400",
        inputBg: "bg-slate-900/50",
        inputBorder: "border-slate-800",
        inputFocus: "focus:border-blue-400 focus:bg-slate-900",
        button: "bg-blue-600 hover:bg-blue-500 text-white",
        divider: "border-slate-800",
        blob: "bg-blue-500",
      },
      // Option 2: Pitch Black & Gold (Premium, Exclusive, Luxury)
      luxury: {
        bg: "bg-neutral-950",
        textMain: "text-neutral-100",
        textMuted: "text-neutral-500",
        accent: "text-amber-500",
        inputBg: "bg-neutral-900/50",
        inputBorder: "border-neutral-800",
        inputFocus: "focus:border-amber-500 focus:bg-neutral-900",
        button:
          "bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold",
        divider: "border-neutral-800",
        blob: "bg-amber-600",
      },
      // Option 3: Clean White & Black (Minimalist, Swiss Style)
      light: {
        bg: "bg-white",
        textMain: "text-black",
        textMuted: "text-gray-500",
        accent: "text-black", // Monochrome accent
        inputBg: "bg-gray-50",
        inputBorder: "border-gray-200",
        inputFocus: "focus:border-black focus:bg-white",
        button: "bg-black hover:bg-gray-800 text-white",
        divider: "border-gray-200",
        blob: "bg-gray-200", // Subtle blob
      },
    };

  return (
    <section
      id={id}
      className={`relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden text-center py-12 ${themes.light.bg}`}
    >
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--color-primary)] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-primary-light)] rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div> */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />

        {/* Optional: Keep one subtle background glow if you want depth behind particles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-[180px] opacity-10 animate-pulse"></div>
      </div>

      <div className="container pt-40 mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Main Heading Group */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-10 relative"
          >
            {/* Glow effect behind the text */}
            <div className="absolute -inset-10 bg-[var(--color-primary)]/20 blur-[100px] rounded-full pointer-events-none" />

            <h1 className="relative text-6xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter mix-blend-screen whitespace-nowrap">
              WE DELIVER{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_30px_rgba(0,102,255,0.5)]">
                PROFITS
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-sm md:text-lg font-bold text-blue-200/80 tracking-[0.5em] uppercase"
            >
              Greater Marketing For Great Companies
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <button
              onClick={scrollToContact}
              className="px-10 py-4 bg-[var(--color-primary)] hover:bg-white hover:text-black text-white rounded-full font-bold transition-all duration-300 flex items-center gap-3 group shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 490 490"
                className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform"
              >
                <path d="M15.541,490V0l458.917,245.009L15.541,490z" />
              </svg>
              <span className="tracking-widest text-sm">PRESS START</span>
            </button>
          </motion.div>

          {/* Services Divider - Tighter spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[15px] md:text-xs font-bold tracking-[0.3em] text-gray-200 uppercase mb-10"
          >
            <span>Performance Marketing</span>
            <span className="text-[var(--color-primary)] text-lg opacity-40">
              /
            </span>
            <span>SEO</span>
            <span className="text-[var(--color-primary)] text-lg opacity-40">
              /
            </span>
            <span>Analytics</span>
          </motion.div>

          {/* Info Box - Reduced padding and margin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 w-full max-w-xl shadow-2xl"
          >
            <p className="text-[10px] font-bold tracking-[0.4em] mb-4 text-[var(--color-primary)] uppercase">
              Technical Expertise • Creative Excellence
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter mb-6">
              PROVEN{" "}
              <span className="text-[var(--color-primary)]">RESULTS</span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We understand your product is great —{" "}
              <span className="text-white font-medium underline decoration-[var(--color-primary)] underline-offset-4">
                let's make the marketing even greater.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
