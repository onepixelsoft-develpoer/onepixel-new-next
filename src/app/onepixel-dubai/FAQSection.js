"use client";

import React, { useState } from "react";

const faqsLeft = [
  {
    question: "What services does OnePixelSoft provide?",
    answer: "We provide web development, mobile apps, UI/UX design, SEO, and digital marketing services.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "A basic website can take 2–4 weeks, while complex platforms may take 2–3 months.",
  },
  {
    question: "Do you offer support and maintenance?",
    answer: "Yes, we offer ongoing support including updates, bug fixes, and performance optimization.",
  },
];

const faqsRight = [
  {
    question: "Why choose OnePixelSoft?",
    answer: "We focus on results-driven solutions with creativity and personalized strategy for each client.",
  },
  {
    question: "Can you help with SEO and marketing?",
    answer: "Absolutely! We specialize in SEO, PPC, and digital marketing campaigns that drive leads and sales.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients worldwide, offering tailored solutions no matter your location.",
  },
];

export default function FAQSection() {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const toggleLeft = (index) => setOpenLeft(openLeft === index ? null : index);
  const toggleRight = (index) => setOpenRight(openRight === index ? null : index);

  return (
    <section className="seo-dubai-faq px-5 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg">Got questions? Here are some common queries about OnePixelSoft and our services.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {faqsLeft.map((faq, index) => (
              <div key={index} className="mb-4 border rounded-lg shadow-sm">
                <button
                  className="w-full text-left p-4 font-semibold bg-gray-100 rounded-t-lg"
                  onClick={() => toggleLeft(index)}
                >
                  {faq.question}
                </button>
                {openLeft === index && (
                  <div className="p-4 bg-white border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {faqsRight.map((faq, index) => (
              <div key={index} className="mb-4 border rounded-lg shadow-sm">
                <button
                  className="w-full text-left p-4 font-semibold bg-gray-100 rounded-t-lg"
                  onClick={() => toggleRight(index)}
                >
                  {faq.question}
                </button>
                {openRight === index && (
                  <div className="p-4 bg-white border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
