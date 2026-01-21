"use client";

import { motion } from "framer-motion";

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#CONTACT");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "PERFORMANCE MARKETING",
      description:
        "Delivery of performance marketing services best suited for your business: Google, Facebook, Native ADS, & Others. We don't just deliver traffic – we provide the right traffic for the most profitable results.",
      tag: "01",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "We optimize and expand both on-site and off-site SEO to deliver significant organic traffic growth in the shortest time possible. From quick wins to long-term strategies, we know how to deliver the right traffic, using the right terms, on the right search engine.",
      tag: "02",
    },
    {
      title: "DATA & ANALYTICS",
      description:
        "Implementation and guidance for the use of Google Analytics and Google Tag Manager, so you can monitor and track your data with precise accuracy. Solutions for both ecommerce and B2B, with the ability to create bespoke dashboards to visualize your data every step of the way.",
      tag: "03",
    },
  ];

  return (
    <section
      id="MARKETING"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* Top Shape Divider (Slant from previous section) */}
     

      <div className=" mx-auto px-6 relative z-10 pt-20">
        {/* Header - Massive and Impactful */}
        {/* Header - Now Perfectly Centered */}
        <div className="max-w-5xl mb-32 mx-auto text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
          >
            OUR <span className="text-[var(--color-primary)]">CORE</span> <br />
            EXPERTISE.
          </motion.h2>

          {/* The accent line centered with margin-x auto */}
          <div className="h-2 w-24 bg-[var(--color-primary)] mt-8 mx-auto"></div>
        </div>

        {/* Vertical Services Stack */}
        <div className="flex flex-col gap-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-t border-white/10 py-16 md:py-24 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
                {/* Number and Title */}
                <div className="flex items-start gap-6 md:w-1/2">
                  <span className="text-[var(--color-primary)] font-mono text-lg mt-2 font-bold">
                    {service.tag}
                  </span>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:w-1/3">
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    Explore Strategy <span>→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10 w-full"></div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-40 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 p-12 md:p-20 rounded-[3rem] text-center w-full max-w-4xl"
          >
            <h4 className="text-3xl md:text-5xl font-black mb-8 italic">
              READY TO SCALE?
            </h4>
            <button
              onClick={scrollToContact}
              className="px-12 py-5 bg-[var(--color-primary)] hover:bg-white hover:text-black text-white rounded-full font-black text-lg transition-all shadow-[0_0_40px_rgba(0,102,255,0.4)]"
            >
              LET'S TALK BUSINESS
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Shape Divider (Fixed) */}
      <div className="bg-gray-100">

      <div className="absolute  bottom-0 left-0 w-full leading-[0] z-0">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[120px] fill-white"
        >
          <path d="M0,100C300,0 700,0 1000,100H0Z" />
        </svg>
      </div>
      </div>
    </section>
  );
};

export default Services;
