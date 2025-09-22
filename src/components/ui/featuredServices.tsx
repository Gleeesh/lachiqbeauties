"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

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
  return (
    <section className="bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wide">
          Featured Services
        </h2>
        <p className="text-gray-600 mt-2">
          All kinds of procedures for your hands and feet.
        </p>

        {/* Swiper Carousel */}
        <div className="relative mt-10">
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
              768: { slidesPerView: 2 }, // md+
              1024: { slidesPerView: 3 }, // lg+
            }}
            className="pb-10"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col items-center">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  {/* Text */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {service.title}{" "}
                      <span className="text-gray-500 font-normal">
                        — from{" "}
                        <span className="text-rose-500 font-semibold">
                          {service.price}
                        </span>
                      </span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
