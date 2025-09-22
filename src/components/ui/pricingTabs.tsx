"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingTabs() {
  const tabs = {
    Manicure: {
      image: "/assets/pricing-manicure.jpg", // replace with real image
      services: [
        { name: "Buff manicure", description: "Well-groomed nails without any polish.", price: "$12" },
        { name: "Glue manicure", description: "Long-lasting manicure with resin glue acting as a base coat.", price: "$20" },
        { name: "CND Shellac or OPI Gel manicure", description: "Long-lasting manicure with gel nail polish.", price: "$25" },
        { name: "French manicure", description: "Classic French style manicure.", price: "$15" },
      ],
    },
    Pedicure: {
      image: "/assets/pricing-pedicure.jpg",
      services: [
        { name: "Basic pedicure", description: "Essential foot care and polish.", price: "$18" },
        { name: "Spa pedicure", description: "Relaxing pedicure with scrub and massage.", price: "$30" },
        { name: "Gel pedicure", description: "Durable gel polish pedicure.", price: "$28" },
      ],
    },
    Treatments: {
      image: "/assets/pricing-treatments.jpg",
      services: [
        { name: "Paraffin treatment", description: "Moisturizing and softening hand/foot treatment.", price: "$22" },
        { name: "Nail strengthening", description: "Treatment to repair and protect nails.", price: "$15" },
        { name: "Cuticle care", description: "Gentle cuticle treatment and hydration.", price: "$10" },
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
          <p className="text-rose-500 italic font-medium">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            OUR PRICING
          </h2>
          <p className="text-gray-700 mb-8">
            Choose from our wide variety of manicure, pedicure and treatment services designed to pamper you.
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
                    activeTab === tab ? "text-rose-600" : "text-gray-600 hover:text-rose-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 h-[2px] bg-rose-600"
              animate={{ left: underlineProps.left, width: underlineProps.width }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Services List with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {tabs[activeTab].services.map((service, i) => (
                <div key={i} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                    <span className="text-rose-600 font-bold">{service.price}</span>
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
