"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingTabs() {
  const tabs = {
    Manicure: {
      image: "/assets/manicure.jpg",
      services: [
        { name: "Gel Manicure", description: "A long-lasting manicure using gel polish cured under UV/LED light.", price: "400ksh" },
        { name: "Tips", description: "Artificial nail extensions applied to enhance length and shape.", price: "1,000ksh" },
        { name: "Builder Gel", description: "A strong gel overlay that adds strength and structure to natural nails.", price: "1,100ksh" },
        { name: "Builder Gel with tips extension", description: "Combines builder gel with nail tips for added length and durability.", price: "1,400ksh" },
        { name: "Gum gel on natural nails", description: "A flexible, putty-like gel applied to natural nails for strength.", price: "1,500ksh" },
        { name: "Gum gel with extensions", description: "Gum gel used with tips to create durable, extended nails.", price: "1,800ksh" },
        { name: "Acrylics on natural nails", description: "Acrylic overlay applied directly to natural nails for strength and polish.", price: "1,800ksh" },
        { name: "Acrylics", description: "A classic nail extension method using liquid monomer and powder for long, strong nails.", price: "2,500ksh" },
      ],
    },
    Pedicure: {
      image: "/assets/pedicure.jpg",
      services: [
        { name: "Gel Pedicure", description: "A long-lasting manicure using gel polish cured under UV/LED light.", price: "1,000ksh" },
        { name: "Tips", description: "Artificial nail extensions applied to enhance length and shape.", price: "1,000ksh" },
        { name: "Builder Gel", description: "A strong gel overlay that adds strength and structure to natural nails.", price: "1,100ksh" },
        { name: "Builder Gel with tips extension", description: "Combines builder gel with nail tips for added length and durability.", price: "1,400ksh" },
        { name: "Gum gel on natural nails", description: "A flexible, putty-like gel applied to natural nails for strength.", price: "1,500ksh" },
        { name: "Gum gel with extensions", description: "Gum gel used with tips to create durable, extended nails.", price: "1,800ksh" },
        { name: "Acrylics on natural nails", description: "Acrylic overlay applied directly to natural nails for strength and polish.", price: "1,800ksh" },
        { name: "Acrylics", description: "A classic nail extension method using liquid monomer and powder for long, strong nails.", price: "2,500ksh" },
      ],
    },
    Lashes: {
      image: "/assets/lashes.jpg",
      services: [
        { name: "Cluster Lashes", description: "Small groups of lashes applied for a fuller, dramatic look.", price: "1,500ksh" },
        { name: "Individual Lashes", description: "Single lashes applied one by one for a natural, enhanced appearance.", price: "2,500ksh" },
      ],
    },
    Make_Up: {
      image: "/assets/makeup.jpg",
      services: [
        { name: "Soft Glam", description: "A natural yet polished makeup look with soft definition and glow.", price: "1,000ksh" },
        { name: "Full Face Beat", description: "A bold, full-coverage makeup style with dramatic detailing.", price: "1,500ksh" },
      ],
    },
    Miscroblading: {
      image: "/assets/microblading.jpg",
      services: [
        { name: "Microblading", description: "A semi-permanent eyebrow treatment using fine strokes to mimic natural hairs.", price: "10,000ksh" },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState<keyof typeof tabs>("Manicure");
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      setUnderlineProps({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <section className="py-20 px-6 md:px-20 bg-pink-50">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image with Animation */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={tabs[activeTab].image}
              src={tabs[activeTab].image}
              alt={`${activeTab} pricing`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover rounded-lg shadow-lg absolute top-0 left-0"
            />
          </AnimatePresence>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-rose-900 italic font-medium">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            OUR PRICING
          </h2>
          <p className="text-gray-700 mb-8">
            Choose from our wide variety of services designed to pamper you.
          </p>

          {/* Tabs */}
          <div className="relative border-b border-gray-200 mb-6">
            <div className="flex space-x-6">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  ref={(el) => { tabRefs.current[tab] = el; }}
                  onClick={() => setActiveTab(tab as keyof typeof tabs)}
                  className={`pb-2 text-lg font-medium transition ${
                    activeTab === tab ? "text-pink-200" : "text-gray-600 hover:text-rose-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 h-[2px] bg-rose-900"
              animate={{ left: underlineProps.left, width: underlineProps.width }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Services List with Animation and scrollable overflow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 max-h-[420px] overflow-y-auto overflow-x-hidden"
            >
              {tabs[activeTab].services.map((service, i) => (
                <div key={i} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                    <span className="text-rose-900 font-bold">{service.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}