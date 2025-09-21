"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SlantedAnimatedGrid } from "@/components/ui/slantedAnimatedGrid";

const services = [
  { name: "Gel", price: "400" },
  { name: "Tips", price: "1000" },
  { name: "Builder Gel", price: "1100" },
  { name: "Builder Gel with Tips Extensions", price: "1400" },
  { name: "Gumgels on Natural Nails", price: "1500" },
  { name: "Gumgels with Extensions", price: "1800" },
  { name: "Acrylics on Natural Nails", price: "2000" },
  { name: "Acrylics Extensions", price: "2500" },
];

const otherServices = [
  { name: "Cluster Lashes", price: "1500" },
  { name: "Individual Lashes", price: "2500" },
];


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
        className="p-6 bg-pink-200 top-0 w-full z-50 flex flex-col items-center justify-center sticky"
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
            href="#book"
            className="relative group"
          >
            Book Now
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
            href="#book"
            className="text-gray-800 hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
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
          className="bg-rose-900 hover:bg-pink-600 text-white text-lg px-6 py-3 rounded-2xl shadow-lg focus:ring-2 focus:ring-rose-900 focus:ring-offset-2 transition-all duration-300 hover:focus:ring-pink-600"
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
      <section id="services" className="py-20 px-6 md:px-20 bg-pink-50">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-12">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index}>
              <Card service={service.name} className="rounded-2xl shadow-md">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">{service.name}</h4>
                  <p className="text-pink-500 font-bold text-xl">
                    KES {service.price}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {otherServices.map((service, index) => (
            <motion.div whileHover={{ scale: 1.05 }} key={index}>
              <Card service={service.name} className="rounded-2xl shadow-md">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-lg mb-2">{service.name}</h4>
                  <p className="text-pink-500 font-bold text-xl">
                    KES {service.price}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Special Offer */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card service="Microblading" className="rounded-2xl shadow-md border-pink-400 border-2">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-lg mb-2">Microblading</h4>
                <p className="line-through text-gray-400">KES 10,000</p>
                <p className="text-pink-500 font-bold text-2xl">
                  Now 8,000 (20% OFF)
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold text-pink-600 mb-6">
          Ready to Book?
        </h3>
        <Button
          asChild
          className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-4 rounded-2xl shadow-lg"
        >
          <a
            href="https://wa.me/254710101118"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on WhatsApp
          </a>
        </Button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-pink-50 text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-8">Contact Us</h3>
        <p className="text-lg mb-4">
          WhatsApp:{" "}
          <a
            href="https://wa.me/254710101118"
            className="text-pink-500 font-semibold"
          >
            0710101118
          </a>
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-pink-500 hover:text-pink-600">
            <Instagram size={28} />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600">
            <Facebook size={28} />
          </a>
        </div>
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
            href="#book"
            className="relative group"
          >
            Book Now
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
