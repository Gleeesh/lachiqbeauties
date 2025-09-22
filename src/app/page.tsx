"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SlantedAnimatedGrid } from "@/components/ui/slantedAnimatedGrid";
import FeaturedServices from "@/components/ui/featuredServices";
import PricingTabs from "@/components/ui/pricingTabs";
import AboutSection from "@/components/ui/aboutSection";
import ContactSection from "@/components/ui/contactSection";

export default function Home(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeroContent, setShowHeroContent] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  

  useEffect(() => {
    const handleScroll = () => {
      // Header stays pinned until hero section reaches top, then fades out
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top <= 0) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-pink-200">
      {/* Header */}
      <motion.header
        className="p-6 bg-none top-0 w-full z-50 flex flex-col items-center justify-center sticky"
        initial={{ opacity: 1, y: 0 }}
        animate={showHeader ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <span className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="LaChiqBeauties Logo"
            width={300}
            height={50}
          />
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-20 text-rose-900 font-medium">
          <a
            href="#home"
            className="relative group"
          >
            Home
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
          <a
            href="#services"
            className="relative group"
          >
            Services
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
          <a
            href="#about"
            className="relative group"
          >
            About
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
          <a
            href="#pricing"
            className="relative group"
          >
            Price List
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
          <a
            href="#contact"
            className="relative group"
          >
            Contact
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
        </nav>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </motion.header>

      {/* Mobile Side Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 80 }}
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col space-y-6"
        >
          <button
            className="self-end text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>
          <a
            href="#home"
            className="text-gray-800 hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-800 hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#pricing"
            className="text-gray-800 hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Price List
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-pink-200"
        style={{ overflow: "hidden" }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <SlantedAnimatedGrid onReveal={() => setShowHeroContent(true)} />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: showHeroContent ? 1 : 0, y: showHeroContent ? 0 : 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ pointerEvents: showHeroContent ? "auto" : "none" }}
          >
            <div className="bg-none p-8 text-center mx-auto z-50 w-1/2">
              <h2
                className="text-4xl md:text-6xl mb-6 text-white"
                style={{ fontFamily: "'Story Script', cursive" }}
              >
                From classic to chic—we’ve got your style covered
              </h2>
              <Button
                asChild
                className="bg-rose-900 hover:bg-pink-600 text-white text-lg px-6 py-3 rounded-2xl shadow-lg ring-2 ring-rose-900 ring-offset-2 transition-all duration-300"
              >
                <a
                  href="https://wa.me/254710101118"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book an Appointment
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 md:px-20 bg-pink-200">
        <FeaturedServices />
      </section>

      {/* About Section */}
      <section id="about" className="py-5 md:px-20 bg-pink-200">
        <AboutSection />
      </section>

      {/* pricing Section */}
      <section id="pricing" className="py-20 px-6 text-center bg-pink-200">
        <PricingTabs />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-pink-50 text-center">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center p-6 bg-white border-t">
        <span className="flex items-center mb-4">
          <Image
            src="/assets/logo.png"
            alt="LaChiqBeauties Logo"
            width={300}
            height={50}
          />
        </span>
        <nav className="flex space-x-20 text-rose-900 font-medium mb-4">
          <a
            href="#home"
            className="relative group"
          >
            Home
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
          <a
            href="#services"
            className="relative group"
          >
            Services
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
          <a
            href="#about"
            className="relative group"
          >
            About
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
          <a
            href="#pricing"
            className="relative group"
          >
            Price List
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
          <a
            href="#contact"
            className="relative group"
          >
            Contact
            <span
              className="absolute left-1/2 right-1/2 -bottom-[2px] h-0.5 bg-rose-900 opacity-0 group-hover:opacity-100
              transition-all duration-[800ms] origin-center
              group-hover:left-0 group-hover:right-0"
            ></span>
          </a>
        </nav>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LaChiqBeauties. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Home of Elegance
          </p>
        </div>
      </footer>
    </div>
  );
}
