"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for background elements
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotateBig = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const scrollToContact = () => {
    const element = document.querySelector("#CONTACT");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-white py-32 md:py-48 overflow-hidden"
    >
      {/* 1. ARCHITECTURAL BACKGROUND GRID */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 2. FLOATING GEOMETRY (The "Out of this world" subtle touch) */}
      <motion.div
        style={{ y: yBg, rotate: rotateBig }}
        className="absolute top-0 right-[-10%] w-[500px] h-[500px] border-[2px] border-black/5 rounded-full z-0 pointer-events-none hidden lg:block"
      />
      <motion.div
        style={{ y: yBg }}
        className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl z-0 pointer-events-none"
      />

      {/* 3. SLANT DIVIDER (TOP) - Connects to previous dark section */}
      <div className="absolute top-0 left-0 w-full leading-[0] z-10">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[120px] fill-black"
        >
          <path d="M0,100 L1000,0 V0 H0 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          {/* LEFT COLUMN: THE HOOK */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[var(--color-primary)] font-mono font-bold text-lg">
                  01 //
                </span>
                <span className="h-px w-20 bg-black/20"></span>
                <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">
                  Who We Are
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                WE'RE ALL <br />
                ABOUT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-600">
                  PERFORMANCE
                </span>
              </h2>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: THE PITCH */}
          <div className="lg:w-1/2 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed">
                Sortino coalesced the best marketing brains in the industry,
                blending{" "}
                <span className="font-bold underline decoration-[var(--color-primary)] decoration-4 underline-offset-4">
                  experience and function
                </span>{" "}
                for results.
              </p>

              <div className="border-l-4 border-[var(--color-primary)] pl-8 py-2">
                <p className="text-lg text-gray-500 mb-4">
                  We've already made millions in net profits for our clients,
                  and we have the availability to provide similar results for
                  your business.
                </p>
                <p className="font-black text-xl md:text-2xl uppercase tracking-wide text-black">
                  We're Poli-Marketeers. <br />
                  We talk both{" "}
                  <span className="text-[var(--color-primary)]">
                    B2B
                  </span> and{" "}
                  <span className="text-[var(--color-primary)]">B2C</span>.
                </p>
              </div>

              {/* ACTION AREA */}
              <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="px-10 py-5 bg-black hover:bg-[var(--color-primary)] text-white font-bold rounded-full transition-colors duration-300 shadow-xl uppercase tracking-widest flex items-center gap-4 group"
                >
                  Get In Touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>

                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Core Essentials
                  </span>
                  <span className="text-lg font-black text-black">
                    GROWTH & PROFITS
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. SLANT DIVIDER (BOTTOM) - Connects to next white/gray section */}
      {/* <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-[50px] md:h-[100px] fill-gray-100"
        >
          <path d="M0,100 L1000,0 V100 H0 Z" />
        </svg>
      </div> */}
    </section>
  );
};

export default About;
