"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. The Vertical "Shorts" Card ---
const VideoCard = ({
  id,
  title,
  index,
}: {
  id: string;
  title: string;
  index: number;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-[9/16] w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-white/5"
    >
      <AnimatePresence>
        {!isPlaying ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            {/* --- FIX START: Smart Image Loading --- */}
            <img
              // 1. Try to load the vertical 'Original Aspect Ratio' image first
              src={`https://i.ytimg.com/vi/${id}/oar2.jpg`}
              alt={title}
              // 2. If the vertical image doesn't exist (404), fallback to the high-res standard
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // Prevent infinite loops if both fail
                if (target.src.includes("hq720")) return;
                target.src = `https://i.ytimg.com/vi/${id}/hq720.jpg`;
              }}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            {/* --- FIX END --- */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-[#FF0000] transition-colors duration-300 shadow-lg">
                <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-0 group-hover:opacity-100" />
                <svg
                  className="w-6 h-6 fill-white ml-1 group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 drop-shadow-md">
                {title}
              </h3>
              <p className="text-gray-300 text-xs mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Watch Short &rarr;
              </p>
            </div>
          </motion.div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&loop=1&playlist=${id}&controls=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full z-20 object-cover"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- 2. The Grid Container ---
const Videos = () => {
  const videos = [
    { id: "EFwLD0r_Og4", title: "Marketing Strategy in 60s" },
    { id: "9lVPTWSetnA", title: "Scale Your Business" },
    { id: "fFhb8OI9GtY", title: "Client Win" },
    { id: "P1wrEKqTeg8", title: "Behind The Scenes" },
    { id: "V10wEGtLNN0", title: "Performance Ads Guide" },
    { id: "qdaq7vDpsUs", title: "Brand Identity Workshop" },
    { id: "k7LSFYyBZUs", title: "Brand Identity Workshop" },
  ];

  return (
    <section
      id="VIDEOS"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-4"
          >
            QUICK <span className="text-[var(--color-primary)]">INSIGHTS</span>
          </motion.h2>
          <p className="text-gray-400 text-lg uppercase tracking-widest">
            Bite-sized value for busy founders
          </p>
        </div>

        {/* Grid adjusted for vertical video cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b border-white/20 pb-1 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
          >
            <span className="text-sm font-bold tracking-widest uppercase">
              View All Shorts
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
