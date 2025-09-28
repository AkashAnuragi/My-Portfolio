"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function HeroSection() {

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty("--mouse-x", `${x}`);
      document.documentElement.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative flex h-[100dvh] items-center justify-center overflow-hidden [perspective:1000px]">
      <div className="absolute inset-0 [transform-style:preserve-3d] transition-transform duration-500 ease-out" style={{ transform: "rotateX(calc(var(--mouse-y, 0) * -5deg)) rotateY(calc(var(--mouse-x, 0) * 5deg))" }}>
        {/* Background elements */}
        <div className="absolute top-[10%] left-[10%] h-48 w-48 rounded-full bg-primary/10 animate-spin-slow" style={{ transform: "translateZ(-200px)" }} />
        <div className="absolute bottom-[15%] right-[15%] h-64 w-64 rounded-2xl bg-accent/10 animate-spin-medium" style={{ transform: "translateZ(-250px)" }}/>
        
        {/* Mid-ground elements */}
        <div className="absolute top-1/2 left-1/4 h-32 w-32 rounded-lg bg-primary/20 animate-float" style={{ transform: "translateZ(-100px)" }} />
        <div className="absolute top-1/3 right-1/4 h-24 w-24 rounded-full bg-accent/20 animate-float-delay" style={{ transform: "translateZ(-50px)" }}/>

        {/* Foreground elements */}
        <div className="absolute bottom-1/4 left-[20%] h-16 w-16 bg-primary/30 animate-float" style={{ transform: "translateZ(50px) rotate(45deg)" }} />
        <div className="absolute top-[30%] right-[18%] h-12 w-12 rounded-full bg-accent/30 animate-float-delay" style={{ transform: "translateZ(80px)" }}/>
      </div>

      <div className="relative z-10 text-center animate-fade-in-up">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Hello, I'm Akash Anuragi</span>
          <span className="block text-primary">Building 3D Web Experiences</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          I craft modern, interactive, and beautiful web applications.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg" className="group">
            <Link href="#projects">
              View My Work
              <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
