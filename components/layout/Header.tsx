"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", href: "#top" },
    { label: "SERVICES", href: "#MARKETING" },
    { label: "CLIENTS", href: "#CLIENTS" },
    { label: "VIDEOS", href: "#VIDEOS" },
    { label: "CONTACT", href: "#CONTACT" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          isScrolled
            ? "bg-white/70 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="#top" onClick={(e) => scrollToSection(e, "#top")}>
            <div className="text-2xl text-white font-black">
              <h1>sortino</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex text-white items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-semibold text-black hover:text-[var(--color-primary)] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden ${
          isScrolled
            ? "bg-white/70 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="#top" onClick={(e) => scrollToSection(e, "#top")}>
            <div className="text-xl font-black">
              <span className="text-black">SORTINO</span>
            </div>
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden pt-20"
          >
            <nav className="flex flex-col items-center gap-8 py-12">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-2xl font-bold text-black hover:text-[var(--color-primary)] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
