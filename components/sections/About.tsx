"use client";

import { motion } from "framer-motion";

const About = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#CONTACT");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section bg-gray-50 relative">
      {/* Shape Divider */}
      <div className="absolute top-0 left-0 w-full rotate-360">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path className="shape-fill bg-white" d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            WE'RE ALL ABOUT
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 text-[var(--color-primary)] leading-tight"
          >
            TOP PERFORMANCE
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Sortino coalesced the best marketing brains in the industry,
            blending experience and function for results. We've already made
            millions in net profits for our clients, and we have the
            availability to provide similar results for your business.
          </motion.p>

          {/* Highlight Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-gray-600 mb-10 leading-relaxed"
          >
            WE'RE POLI-MARKETEERS. WE TALK BOTH B2B AND B2C.
            <br />
            WITH TWO CORE ESSENTIALS:
            <br />
            <span className="text-black font-black">GROWTH & PROFITS.</span>
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-primary"
          >
            GET IN TOUCH!
          </motion.button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-0 scale-y-[-1]">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-[50px] md:h-[100px] fill-black"
        >
          <path d="M0,0V100L1000,0H0Z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
