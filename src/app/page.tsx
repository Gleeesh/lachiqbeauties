"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white fixed top-0 w-full z-50">
        <span className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="LaChiqBeauties Logo"
            width={170}
            height={80}
          />
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-pink-400 transition">Home</a>
          <a href="#services" className="hover:text-pink-400 transition">Services</a>
          <a href="#book" className="hover:text-pink-400 transition">Book Now</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </header>

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
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1603079706899-40d2d7b9f6bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-40 p-8 rounded-xl text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">LA CHIQ</h2>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">BEAUTIES</h2>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Home of Elegance</h2>
          <Button
            asChild
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-6 py-3 rounded-2xl shadow-lg"
          >
            <a
              href="https://wa.me/254710101118"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Appointment on WhatsApp
            </a>
          </Button>
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
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} LaChiqBeauties. All rights reserved.</p>
      </footer>
    </div>
  );
}
