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
      {/* Decorative Gradient Line at Top (Seamless blend from previous section) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* LEFT COLUMN: Sticky Header 
              This stays fixed on the screen while you scroll through services on the right.
          */}
          <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
                OUR <span className="text-[var(--color-primary)]">CORE</span>{" "}
                <br />
                EXPERTISE.
              </h2>
              <div className="h-2 w-24 bg-[var(--color-primary)] mb-8"></div>
              <p className="text-gray-400 text-lg max-w-md hidden lg:block">
                We combine data-driven strategies with creative excellence to
                deliver measurable growth.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Scrolling Services List */}
          <div className="lg:w-1/2 flex flex-col gap-24 lg:py-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Number Tag */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[var(--color-primary)] font-mono text-xl font-bold">
                    /{service.tag}
                  </span>
                  <div className="h-px flex-1 bg-white/10 group-hover:bg-[var(--color-primary)] transition-colors duration-500"></div>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Interactive Link */}
                <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase cursor-pointer text-white group-hover:text-[var(--color-primary)] transition-colors">
                  <span className="border-b-2 border-transparent group-hover:border-[var(--color-primary)] pb-1 transition-all">
                    Explore Strategy
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transform group-hover:translate-x-2 transition-transform"
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
                </div>
              </motion.div>
            ))}

            {/* CTA Box at the end of the scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-10 p-10 bg-white/5 border border-white/10 rounded-3xl text-center"
            >
              <h4 className="text-2xl font-bold mb-6 italic">
                Need something else?
              </h4>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[var(--color-primary)] hover:bg-white hover:text-black text-white rounded-full font-bold transition-all"
              >
                VIEW FULL SERVICE MENU
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Shape Divider (Clean Transition to Next Section) */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[120px] fill-white" // Use fill-gray-100 if next section is gray
        >
          {/* A smooth curve up */}
          <path d="M0,100 C300,0 700,0 1000,100 H0 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Services;
