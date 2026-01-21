"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";

const Hero = ({ id = "top" }: SectionProps) => {
  const scrollToContact = () => {
    const element = document.querySelector("#CONTACT");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden text-center py-12"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--color-primary)] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-primary-light)] rounded-full blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div className="container pt-40 mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Main Heading Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight whitespace-nowrap">
              WE DELIVER{" "}
              <span className="text-[var(--color-primary)]">PROFITS</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-sm md:text-base font-medium text-gray-400 tracking-[0.3em] uppercase"
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
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] md:text-xs font-bold tracking-[0.3em] text-gray-500 uppercase mb-10"
          >
            <span>Performance Marketing</span>
            <span className="text-[var(--color-primary)] opacity-40">/</span>
            <span>SEO</span>
            <span className="text-[var(--color-primary)] opacity-40">/</span>
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
