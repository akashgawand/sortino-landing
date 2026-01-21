"use client";

import { motion } from "framer-motion";

const Videos = () => {
  const videos = [
    { id: "EFwLD0r_Og4", title: "Video 1" },
    { id: "0gOUK-9F5MY", title: "Video 2" },
    { id: "X4OoqOjjyYE", title: "Video 3" },
    { id: "J2K0g6_Segs", title: "Video 4" },
    { id: "bIjoyMocD-A", title: "Video 5" },
    { id: "2EdGPA0P-SY", title: "Video 6" },
    { id: "P1wrEKqTeg8", title: "Video 7" },
    { id: "CeLdx4_sRXQ", title: "Video 8" },
    { id: "L6Pla_BdIfg", title: "Video 9" },
  ];

  return (
    <section id="VIDEOS" className="section bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-20 leading-tight"
        >
          OUR <span className="text-[var(--color-primary)]">VIDEOS</span>
        </motion.h2>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="video-wrapper rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
