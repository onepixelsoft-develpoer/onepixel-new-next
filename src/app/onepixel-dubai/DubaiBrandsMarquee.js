"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";


export default function DubaiBrandsMarquee() {
  const brands = [
    "CARID.webp",
    "drive carma.webp",
    "R B D.webp",
    "My ACE Bazar.webp",
    "selfcare.webp",
    "Youth Pathshala.webp",
    "Teach Mantra.webp",
    "Samyak IAS.webp",
  ];

  return (
    <section className="py-16 bg-gray-50 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Our Trusted Brands
        </h2>

        <Marquee gradient={false} speed={50} pauseOnHover={true} loop={0}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="mx-6 flex items-center justify-center w-32 h-20 bg-white p-2 rounded-xl shadow hover:scale-105 transition-transform duration-300"
            >
              
              <Image
                src={`/assets/images/brand/${brand}`}
                alt={brand.replace(/\.(png|jpg|jpeg)/, "")}
                width={200}
                height={100}
                className="max-h-full object-contain"
              />

            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
