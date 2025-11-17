"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// Install modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CaseStudiesSwiper() {
  const caseStudies = [
    "1676888900.png",
    "16768889001.png",
    "1685448184.png",
    "1685448218.png",
    "1685507809.png",
    "1685525491.png",
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Case Studies
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {caseStudies.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-4 flex justify-center items-center hover:scale-105 transition-transform duration-300">
                <img
                  src={`assets/images/onepixel-dubai/project/${img}`}
                  alt={`Case Study ${index + 1}`}
                  className="w-full h-56 object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
