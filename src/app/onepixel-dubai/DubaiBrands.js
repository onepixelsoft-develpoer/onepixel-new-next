"use client";

import React from "react";
import { FaPen, FaGlobe, FaChartLine } from "react-icons/fa";

export default function DubaiBrands() {
  const pillars = [
    {
      icon: <FaPen size={28} className="text-pink-600 mb-3" />,
      title: "Social Media Marketing Focus",
      description:
        "Grow your brand with Dubai’s top social media agency. Instagram, Facebook, LinkedIn ads & influencer marketing to boost engagement & sales.",
    },
    {
      icon: <FaGlobe size={28} className="text-pink-600 mb-3" />,
      title: "Mixed / All-in-One Focus",
      description:
        "One-stop IT & digital transformation partner in Dubai. Software development, SEO services, social media marketing & influencer campaigns.",
    },
    {
      icon: <FaChartLine size={28} className="text-pink-600 mb-3" />,
      title: "Software, SEO & Social Media",
      description:
        "Serving Dubai with IT solutions, SEO, social media marketing & influencer services. Reliable, affordable & result-driven digital growth partner.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center px-5">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase font-semibold text-pink-600 mb-2 text-sm md:text-base">
          Process of Work
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mb-12">
          Introducing Our 3 Key Pillars of Success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div>{pillar.icon}</div>
              <h5 className="font-semibold text-lg mb-2">{pillar.title}</h5>
              <p className="text-gray-600 text-sm md:text-base">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
