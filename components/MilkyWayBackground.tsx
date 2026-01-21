"use client";

import { useEffect, useRef } from "react";

const MilkyWayBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    // Colors for the galaxy: White, Primary Blue, Violet, Cyan
    const colors = ["#FFFFFF", "#0066FF", "#8B5CF6", "#06B6D4"];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    class Star {
      x: number;
      y: number;
      size: number;
      color: string;
      angle: number;
      distance: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;

      constructor() {
        // Initialize star at a random position relative to center
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;

        // Calculate distance and angle from center for rotation
        const centerX = canvas!.width / 2;
        const centerY = canvas!.height / 2;
        this.distance = Math.sqrt(
          Math.pow(this.x - centerX, 2) + Math.pow(this.y - centerY, 2),
        );
        this.angle = Math.atan2(this.y - centerY, this.x - centerX);

        // Random properties
        this.size = Math.random() * 1.5; // Tiny stars
        this.color = colors[Math.floor(Math.random() * colors.length)];

        // Stars closer to center move faster (visual relativity)
        this.speed = Math.random() * 0.0002 + 0.0001;

        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
      }

      update() {
        // Rotate around center
        this.angle += this.speed;

        const centerX = canvas!.width / 2;
        const centerY = canvas!.height / 2;

        this.x = centerX + Math.cos(this.angle) * this.distance;
        this.y = centerY + Math.sin(this.angle) * this.distance;

        // Twinkle effect
        this.opacity += this.twinkleSpeed;
        if (this.opacity > 1 || this.opacity < 0.2) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.abs(this.opacity); // Twinkle opacity
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initStars = () => {
      stars = [];
      // High density for Milky Way look (800+ stars on desktop)
      const starCount = Math.min(window.innerWidth / 2, 800);
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      // Use a slight fade effect for "tails" or just clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 1. Static Nebula Gradients (The "Cloud" behind the stars) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep Blue Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
        {/* Purple Drift */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] mix-blend-screen animate-pulse duration-10000"></div>
        {/* Cyan Highlight */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      {/* 2. The Star Field Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
    </>
  );
};

export default MilkyWayBackground;
