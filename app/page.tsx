"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Videos from "@/components/sections/Videos";
import { useLenis } from "@/hooks/useLenis";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Initialize scroll animations
  useScrollAnimation();

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Videos />
      <Footer />
    </main>
  );
}
