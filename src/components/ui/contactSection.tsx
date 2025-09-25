"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center justify-start py-10 px-4">
      {/* Top Text */}
      <h2 className="text-center italic text-rose-900 font-medium mb-6">
        Contact
      </h2>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            CONTACT US
          </h2>
      <p className="text-center text-gray-800 font-medium mb-6">
        Do not forget to book an appointment to get the best service!
      </p>

      {/* Google Map Embed */}
      <div className="w-full max-w-5xl border-4 border-pink-200 h-72 mb-12">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.502433561136!2d37.15467091000567!3d-0.720990699268943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18289877ed9f015f%3A0xec136c9ae47e5a21!2sLa%20Chiq%20Beauties(Nail%20Salon)!5e0!3m2!1sen!2ske!4v1758802633942!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        < iframe/>
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
            Uhuru Highway, 
            <br />
            Murang&#39;a
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
            <Phone className="text-pink-700 w-7 h-7" />
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-2">Phone</h3>
          <p className="text-gray-600">0710101118</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
            <Mail className="text-pink-700 w-7 h-7" />
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-2">Email</h3>
          <p className="text-gray-600">lachiqbeauties021@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
