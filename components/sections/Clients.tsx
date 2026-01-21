"use client";

import { motion } from "framer-motion";

const Clients = () => {
  // Client logos data
  // Note: Width/Height removed from logic as we want them to flow naturally to prevent overlap
  const clientNames = [
    "Navan",
    "YuLife",
    "Sig Sauer",
    "Masterschool",
    "Mobile.de",
    "Nas Daily",
    "Johnson & Johnson",
    "10bet",
    "GoCardless",
    "PlayerMaker",
    "13 Seeds",
    "Premia Spine",
    "DropIt",
    "Lumen",
    "ILMAKIAGE",
    "INX",
    "Harmon.ie",
    "Freedom Moses",
    "Descript",
    "Casitsu",
    "Roobet",
    "Acuvue",
    "Signite",
    "Sightful",
    "Sightful",
  ];

  // Animation Variants for the "One by One" effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger so they all appear quickly
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="CLIENTS"
      className="h-screen w-full bg-white flex flex-col justify-center items-center overflow-hidden relative"
    >
      <div className="container mx-auto px-4">
        {/* Minimal Header - Compact to save vertical space */}
        <div className="text-center mb-8 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[30px]  tracking-[0.4em] font-bold text-gray-400 uppercase mb-3"
          >
            Trusted by Global Leaders
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px w-16 bg-gray-200 mx-auto"
          />
        </div>

        {/* Clients Grid 
            - Use h-auto to fit content 
            - Reduced gaps to fit in viewport
            - Removed fixed widths to prevent overlap
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-10 w-full"
        >
          {clientNames.map((name, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center py-2"
            >
              {/* Container is now flexible.
                 Text uses clamp() logic or responsive sizing to ensure it fits.
                 whitespace-nowrap ensures it stays on one line.
              */}
              <div className="relative group cursor-default">
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-black text-black uppercase tracking-tighter whitespace-nowrap transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:scale-110">
                  {name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
