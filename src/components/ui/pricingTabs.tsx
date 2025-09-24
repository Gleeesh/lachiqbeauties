"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    Microblading: {
      image: "/assets/microblading.jpg",
      services: [
        { name: "Microblading", description: "A semi-permanent eyebrow treatment using fine strokes to mimic natural hairs.", price: "10,000ksh" },
      ],
    },
  };

  const tabKeys = Object.keys(tabs) as (keyof typeof tabs)[];
  const [activeTab, setActiveTab] = useState<keyof typeof tabs>("Manicure");
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const [showHints, setShowHints] = useState(true);
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

  const handleSwipe = (direction: number) => {
    const currentIndex = tabKeys.indexOf(activeTab);
    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < tabKeys.length) {
      setActiveTab(tabKeys[nextIndex]);
      setShowHints(false);
    }
  };

  return (
    <section className="min-h-screen py-10 px-4 md:px-20 bg-pink-50 flex flex-col">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 flex-grow overflow-hidden">
        
        {/* Left Image (hidden on small screens) */}
        <div className="relative w-full h-full hidden md:block">
          <AnimatePresence mode="wait">
            <motion.img
              key={tabs[activeTab].image}
              src={tabs[activeTab].image}
              alt={`${activeTab} pricing`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </AnimatePresence>
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col overflow-hidden">
          <p className="text-rose-900 italic font-medium text-center md:text-left">Pricing</p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 text-center md:text-left">
            OUR PRICING
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base text-center md:text-left">
            Choose from our wide variety of services designed to pamper you.
          </p>

          {/* Tabs row */}
          <div className="relative border-b border-gray-200 mb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:overflow-visible">
            <div className="flex justify-center md:justify-start space-x-6 min-w-max">
              {tabKeys.map((tab) => (
                <button
                  key={tab}
                  ref={(el) => { tabRefs.current[tab] = el; }}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm md:text-lg font-medium transition snap-start ${
                    activeTab === tab ? "text-pink-200" : "text-gray-600 hover:text-rose-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <motion.div
              className="absolute bottom-0 h-[2px] bg-rose-900"
              animate={{ left: underlineProps.left, width: underlineProps.width }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Services List */}
          <div className="relative flex-grow overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 md:space-y-6  max-h-[420px] overflow-y-auto overflow-x-hidden"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -100) handleSwipe(1);
                  if (info.offset.x > 100) handleSwipe(-1);
                }}
              >
                {tabs[activeTab].services.map((service, i) => (
                  <div key={i} className="border-b border-gray-200 pb-2 md:pb-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm md:text-lg font-semibold text-gray-800">{service.name}</h3>
                      <span className="text-rose-900 font-bold text-sm md:text-base">{service.price}</span>
                    </div>
                    <p className="hidden md:block text-gray-600 text-sm mt-1">
                      {service.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Swipe Hints */}
            <AnimatePresence>
              {showHints && (
                <>
                  <motion.div
                    className="absolute inset-y-0 left-0 flex items-center md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-400 animate-pulse" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-y-0 right-0 flex items-center md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ChevronRight className="w-6 h-6 text-gray-400 animate-pulse" />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
