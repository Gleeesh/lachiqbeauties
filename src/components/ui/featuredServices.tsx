"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";

const services = [
  {
    title: "Nail Art",
    price: "$5",
    img: "/assets/gridimages/img1.jpg",
  },
  {
    title: "Pedicure",
    price: "$15",
    img: "/assets/gridimages/img2.jpg",
  },
  {
    title: "Treatment",
    price: "$10",
    img: "/assets/gridimages/img3.jpg",
  },
  {
    title: "Luxury Spa",
    price: "$25",
    img: "/assets/gridimages/img4.jpg",
  },
  {
    title: "Gel Polish",
    price: "$12",
    img: "/assets/gridimages/img5.jpg",
  },
];

export default function FeaturedServices() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Infinite autoplay with 50s interval, stops on hover
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (!isHovered && swiperRef.current) {
      interval = setInterval(() => {
        swiperRef.current?.slideNext();
      }, 50000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered]);

  return (
    <section className="bg-pink-200 py-5">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wide">
          Featured Services
        </h2>
        <p className="text-gray-600 mt-2">
          All kinds of procedures for your hands and feet.
        </p>

        {/* Swiper Carousel */}
        <div
          className="relative mt-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left arrow */}
          <div className="swiper-button-prev !absolute -left-8 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-pink-100 z-10 flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </div>

          {/* Right arrow */}
          <div className="swiper-button-next !absolute -right-8 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-pink-100 z-10 flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            centeredSlides={true}
            loop={true}
            allowTouchMove={!isHovered}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                {({ isActive }) => (
                  <div
                    className={`bg-pink-200 overflow-hidden shadow-sm flex flex-col items-center transition-all duration-700 ${
                      isActive
                        ? "scale-105 z-10"
                        : "scale-95 opacity-80"
                    }`}
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={400}
                      height={500}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive ? "scale-110" : "scale-100"
                      }`}
                    />
                    {/* Text */}
                    <div className="p-5 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {service.title}{" "}
                        <span className="text-gray-500 font-normal">
                          — from{" "}
                          <span className="text-rose-900 font-semibold">
                            {service.price}
                          </span>
                        </span>
                      </h3>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}