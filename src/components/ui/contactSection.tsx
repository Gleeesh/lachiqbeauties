"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center justify-start py-10 px-4">
      {/* Top Text */}
      <h2 className="text-center text-rose-900 font-large mb-6">
        Contact
      </h2>
      <p className="text-center text-gray-800 font-medium mb-6">
        Do not forget to book an appointment to get the best service!
      </p>

      {/* Google Map Embed */}
      <div className="w-full max-w-5xl border-4 border-pink-200 h-72 mb-12">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/place/La+Chiq/@-0.7168408,37.1438933,17z/data=!3m1!4b1!4m6!3m5!1s0x1828980cc5b27e83:0xe6be5219bfa80692!8m2!3d-0.7168408!4d37.1464736!16s%2Fg%2F11ssxht1cv?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Address */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
            <MapPin className="text-rose-800 w-7 h-7" />
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-2">Address</h3>
          <p className="text-gray-600">
            59 Queen Street,
            <br />
            New York, NY 10002
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
            <Phone className="text-pink-700 w-7 h-7" />
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-2">Phone</h3>
          <p className="text-gray-600">+1 (234) 567 89 00</p>
          <p className="text-gray-600">+1 (234) 567 89 01</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
            <Mail className="text-pink-700 w-7 h-7" />
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-2">Email</h3>
          <p className="text-gray-600">lotus.request@email.com</p>
          <p className="text-gray-600">lotus@email.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
