"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { submitContactForm } from "@/lib/api";
import type { ContactFormData } from "@/types";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    const result = await submitContactForm(data);

    setIsSubmitting(false);

    if (result.success) {
      setSubmitMessage({
        type: "success",
        text: "Message received. We'll be in touch shortly.",
      });
      reset();
    } else {
      setSubmitMessage({
        type: "error",
        text: result.message || "Something went wrong. Please try again.",
      });
    }

    setTimeout(() => setSubmitMessage(null), 5000);
  };

  // Input styles helper
  const inputClasses =
    "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[var(--color-primary)] focus:bg-white/10 focus:outline-none transition-all duration-300";

  return (
    <footer className="relative bg-black text-white overflow-hidden pt-32 pb-10">
      {/* Decorative Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Main Contact Section */}
      <section
        id="CONTACT"
        className="container mx-auto px-6 relative z-10 mb-24"
      >
        {/* Heading Area */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
          >
            READY FOR{" "}
            <span className="text-[var(--color-primary)]">RESULTS?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl font-light tracking-wide uppercase"
          >
            Let's build something great together.
          </motion.p>
        </div>

        {/* Contact Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  className={inputClasses}
                />
                {errors.name && (
                  <span className="text-red-400 text-xs ml-2">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className={inputClasses}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs ml-2">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            {/* Tel & Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input
                  {...register("tel")}
                  type="tel"
                  placeholder="Phone (Optional)"
                  className={inputClasses}
                />
              </div>

              {/* Checkbox (Moved here for better layout balance) */}
              <div className="flex items-center h-full">
                <label className="flex items-center gap-3 cursor-pointer group select-none">
                  <div className="relative">
                    <input
                      {...register("agreeToTerms", { required: true })}
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <div className="w-5 h-5 border-2 border-gray-500 rounded peer-checked:bg-[var(--color-primary)] peer-checked:border-[var(--color-primary)] transition-all"></div>
                    <svg
                      className="w-3 h-3 text-white absolute top-1 left-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    I agree to the Terms of Use
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <span className="text-red-400 text-xs ml-2">* Required</span>
                )}
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <textarea
                {...register("details")}
                placeholder="Tell us about your project..."
                rows={4}
                className={`${inputClasses} resize-none`}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-[var(--color-primary)] hover:bg-white hover:text-black text-white rounded-xl font-bold text-lg tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Submit Feedback */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className={`text-center text-sm font-medium ${
                  submitMessage.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {submitMessage.text}
              </motion.div>
            )}
          </form>
        </motion.div>
      </section>

      {/* Footer Bottom / Links */}
      <div className="container mx-auto px-6 border-t border-white/10 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2026 <span className="text-white font-bold">SORTINO</span>. All
            rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              {
                label: "Facebook",
                path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
              {
                label: "LinkedIn",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                label: "YouTube",
                path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
              },
            ].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[var(--color-primary)] hover:text-white text-gray-400 transition-all duration-300"
                aria-label={icon.label}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>

          {/* Privacy */}
          <div>
            <a
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
