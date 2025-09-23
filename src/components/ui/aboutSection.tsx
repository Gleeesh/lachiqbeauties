import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react"; // optional: install lucide-react for icons

export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-pink-100">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <Image
            src="/assets/hero.jpeg"
            alt="Nail Artist"
            width={600}
            height={80}
            className="w-full h-180 object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col space-y-6">
          <p className="text-rose-900 italic font-medium">About us</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            WELCOME TO LACHIQ!
          </h2>

          <p className="text-gray-700 leading-relaxed">
            LaChiq is a perfect place to get high-quality nail care and spa
            services in a clean and welcoming atmosphere.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our licensed nail artists are always aware of the latest trends and
            truly care about their clients. We also offer free Wi-Fi, relaxing
            music, and complimentary cookies to make your
            experience more enjoyable.
          </p>

          {/* Contact Info */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="p-3 bg-rose-100 rounded-full">
              <Phone className="text-rose-900 w-6 h-6" />
            </div>
            <div>
              <p className="text-rose-900">Call us now!</p>
              <p className="text-xl font-semibold text-rose-900">
                0710101118
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
