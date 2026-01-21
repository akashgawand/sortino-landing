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

  // ✅ FIXED INPUT STYLES (black text, visible, premium)
  const inputClasses =
    "w-full px-5 py-4 rounded-xl bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-300";

  return (
    <footer className="relative bg-black text-white overflow-hidden pt-32 pb-10">
      <section id="CONTACT" className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            READY FOR{" "}
            <span className="text-[var(--color-primary)]">RESULTS?</span>
          </h2>
          <p className="text-gray-400 text-lg uppercase tracking-wide">
            Let's build something great together.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className={inputClasses}
              />
              <input
                {...register("email", { required: "Email is required" })}
                placeholder="Your Email"
                className={inputClasses}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <input
                {...register("tel")}
                placeholder="Phone (Optional)"
                className={inputClasses}
              />
            </div>

            <textarea
              {...register("details")}
              rows={4}
              placeholder="Tell us about your project..."
              className={`${inputClasses} resize-none`}
            />
            <label className="flex justify-center items-center gap-3 text-gray-300 text-sm">
              <input
                {...register("agreeToTerms", { required: true })}
                type="checkbox"
                className="accent-[var(--color-primary)] w-4 h-4"
              />
              I agree to the Terms of Use
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-[var(--color-primary)] hover:bg-white hover:text-black text-white rounded-xl font-bold text-lg tracking-widest uppercase transition-all duration-300 shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center text-sm ${
                  submitMessage.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {submitMessage.text}
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
