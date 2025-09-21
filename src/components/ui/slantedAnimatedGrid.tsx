import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/assets/gridimages/img1.jpg",
  "/assets/gridimages/img2.jpg",
  "/assets/gridimages/img3.jpg",
  "/assets/gridimages/img4.jpg",
  "/assets/gridimages/img5.jpg",
  "/assets/gridimages/img6.jpg",
  "/assets/gridimages/img7.jpg",
  "/assets/gridimages/img8.jpg",
  "/assets/gridimages/img9.jpg",
  "/assets/gridimages/img10.jpg",
  "/assets/gridimages/img11.jpg",
  "/assets/gridimages/img12.jpg",
  "/assets/gridimages/img13.jpg",
  "/assets/gridimages/img14.jpg",
  "/assets/gridimages/img15.jpg",
  "/assets/gridimages/img16.jpg",
];

export function SlantedAnimatedGrid({ onReveal }: { onReveal: () => void }) {
  const [showGradient, setShowGradient] = useState(false);

  // Gradient overlay appears every 15 seconds for 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowGradient(true);
      setTimeout(() => setShowGradient(false), 3000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Call onReveal once when mounted
  useEffect(() => {
    onReveal();
  }, [onReveal]);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden border-8 border-rose-900"
      style={{
        clipPath:
          "polygon(30% 5%, 70% 5%, 95% 30%, 95% 70%, 70% 95%, 30% 95%, 5% 70%, 5% 30%)",
      }}
    >
      {/* Grid content with infinite animation */}
      <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Grid ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="transition-all duration-700"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                delay: i * 0.1,
              }}
              className="absolute inset-0 bg-rose-900 pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay appears every 15 seconds for 3 seconds */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: showGradient ? "0%" : "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 z-10 bg-gradient-to-br from-pink-500 via-rose-900 to-yellow-400 opacity-80 pointer-events-none"
        style={{
          clipPath:
            "polygon(30% 5%, 70% 5%, 95% 30%, 95% 70%, 70% 95%, 30% 95%, 5% 70%, 5% 30%)",
        }}
      />
    </div>
  );
}