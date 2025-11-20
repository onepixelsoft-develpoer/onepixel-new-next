
import React from 'react'
import { FaTrophy } from "react-icons/fa";
import { FaHandHoldingDollar, FaMessage, FaUsers } from "react-icons/fa6";
import CaseStudiesSwiper from './CaseStudiesSwiper';
import { FaAd, FaRobot, FaEnvelope, FaVrCardboard, FaUserCheck, FaFileAlt, FaSearch, FaMousePointer, FaTv, FaRandom, FaStar, FaChartLine, FaFunnelDollar, FaProjectDiagram, FaChartPie, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import DubaiBrands from './DubaiBrands';
import DubaiBrandsMarquee from './DubaiBrandsMarquee';
import FAQSection from './FAQSection';
import Image from "next/image";

// import '../../styles/modules/onepixel-dubai.css'

export default function page() {


  const brands = [
    "CARID",
    "drive carma",
    "Teach Mantra",
    "Eyeaddon",
    "fot",
    "go track on",
    "Samyak IAS",
  ];

  const services = [
    { icon: <FaAd size={28} />, title: "Native Advertising" },
    { icon: <FaRobot size={28} />, title: "AI-Powered Marketing" },
    { icon: <FaEnvelope size={28} />, title: "Email & WhatsApp Marketing" },
    { icon: <FaVrCardboard size={28} />, title: "Video & AR/VR Marketing" },
    { icon: <FaUserCheck size={28} />, title: "Content Personalization" },
    { icon: <FaFileAlt size={28} />, title: "Content Marketing" },
    { icon: <FaSearch size={28} />, title: "SEO" },
    { icon: <FaMousePointer size={28} />, title: "PPC Advertising" },
    { icon: <FaFacebookF size={28} />, title: "Social Media Marketing" },
    { icon: <FaFileAlt size={28} />, title: "Landing Page Development" },
    { icon: <FaTv size={28} />, title: "Display Advertising" },
    { icon: <FaRandom size={28} />, title: "Multivariate Marketing" },
    { icon: <FaStar size={28} />, title: "ORM" },
    { icon: <FaChartLine size={28} />, title: "CRO" },
    { icon: <FaFunnelDollar size={28} />, title: "Ads Funnel Creation" },
    { icon: <FaProjectDiagram size={28} />, title: "Sales Funnel Creation" },
    { icon: <FaChartPie size={28} />, title: "Market Analysis" },
    { icon: <FaUsers size={28} />, title: "Audience Targeting" },
    { icon: <FaGlobe size={28} />, title: "Geo Targeting" },
    { icon: <FaMapMarkerAlt size={28} />, title: "Local SEO / GMB" },
  ];

  const cards = [
    {
      icon: <FaHandHoldingDollar size={36} className="text-pink-600 mb-3" />,
      title: "REVENUE",
      desc: "Generated over AED 100M in sales for our clients",
    },
    {
      icon: <FaMessage size={36} className="text-pink-600 mb-3" />,
      title: "REVIEWS",
      desc: "450+ reviews on Google with a 4.8/5 rating",
    },
    {
      icon: <FaTrophy size={36} className="text-pink-600 mb-3" />,
      title: "AWARDS",
      desc: "10 Awards and counting",
    },
    {
      icon: <FaUsers size={36} className="text-pink-600 mb-3" />,
      title: "CLIENTS",
      desc: "400+ Happy clients",
    },
  ];
  return (
    <>

      {/* <!-- hero section code --> */}
      <section className="relative lg:h-screen h-[150vh]  w-full">
        <video
          className="absolute inset-0 w-full h-full object-cover "
          src="assets/images/onepixel-dubai/video/SEO Dubai  SEO Agency Top SEO Consultant Company.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
          <div className="max-w-6xl flex flex-col items-center gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
              Best IT & Software Development Company in{" "}
              <span className="text-pink-400">
                Dubai — SEO & Social Media Experts
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
              Partner with one of the leading IT firms in Dubai and experience
              affordable, scalable, and future-ready digital solutions that keep
              your brand ahead of the competition.
            </p>
            <div className="w-full max-w-3xl flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <select className="py-3 px-4 bg-white rounded-lg  w-full sm:w-2/3 text-black">
                <option>Digital Marketing</option>
                <option>Social Media Marketing</option>
                <option>Web Design & Development</option>
              </select>
              <button
                className="py-3 px-6 text-white font-semibold rounded-lg w-full sm:w-auto transition-transform transform hover:scale-105"
                style={{
                  backgroundImage: "linear-gradient(270deg, #60134a, #84141f)",
                  border: "none",
                }}
              >
                GET A FREE QUOTE
              </button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8">
              {brands.map((brand) => (
                <image
                  key={brand}
                  src={`assets/images/brand/${brand}.webp`}
                  alt={`${brand} logo`}
                  className="w-20 sm:w-24 h-20 object-contain hover:scale-105 transition-transform"
                />
              ))}
            </div>
            <p className="mt-8 max-w-5xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
              Welcome to <span className="font-semibold">OnePixel Soft Pvt. Ltd.</span>, a trusted India IT company serving
              Dubai businesses with cutting-edge IT solutions, software development,
              SEO, and social media marketing services. Recognized among the top IT
              companies in Dubai, we specialize in custom software development, IT
              outsourcing, managed IT services, and digital transformation solutions.
              <br />
              <br />
              {/* Whether you need a reliable IT service provider in Dubai, a professional
            SEO agency for Google rankings, or the best social media marketing
            company in Dubai for influencer campaigns and paid ads — our expert team
            delivers result-driven solutions tailored to your business growth. */}
            </p>
          </div>
        </div>
      </section>

      {/* <!-- hero section end --> */}

      {/* <!-- Our Story start --> */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-full h-full">
           <Image
            src="/assets/images/onepixel-dubai/campaign.webp"
            alt="Our Campaign"
            width={1200}      // set proper width
            height={700}      // set proper height
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          </div>

          {/* Right Content */}
          <div className="text-gray-800 space-y-6">
            <h4 className="text-pink-600 font-semibold text-lg">
              IT & Software Development Focus
            </h4>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug border-l-4 border-pink-500 pl-4">
              Best IT Company in Dubai | Custom Software & Digital Transformation
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Top Dubai IT firm offering software development, IT support,
              outsourcing, and managed IT services. Trusted by businesses in UAE
              & beyond.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Discover Dubai’s best software engineering & IT services company.
              From digital transformation to offshore IT support — we help
              businesses grow.
            </p>
            <button className="mt-4 px-6 py-3 bg-linear-to-r from-indigo-700 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>


      {/* <!-- Our Story end --> */}

      {/* <!-- SERVICE INSIGHTS start --> */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h4 className="text-pink-600 font-semibold text-lg">SERVICE INSIGHTS</h4>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug">Software Development Company in Dubai</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We are among the top software development companies in Dubai, offering web apps, mobile apps, ERP solutions,
              and custom software development services. With a focus on scalability and innovation, we help businesses
              achieve faster digital growth with tailored solutions.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Dubai SEO experts helping brands rank higher with proven SEO, SEM, and local search optimization. Affordable
              packages for businesses in UAE.
            </p>
            <button className="mt-4 px-6 py-3 bg-linear-to-r from-indigo-700 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              SPEAK TO OUR EXPERTS
            </button>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                {card.icon}
                <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- SERVICE INSIGHTS end --> */}

      {/* <!-- Case Studies start --> */}

      {/* <!-- Case Studies end --> */}
      <CaseStudiesSwiper />
      {/* <!-- EXPERTISE section start --> */}

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              SEO & Digital Marketing Services in Dubai
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We serve a gigantic range of industries, from Dubai’s best bars and restaurants to respected educational institutions,
              and healthcare providers to major electrical brands. The thing with SEO is this: it doesn’t discriminate, and instead can
              be adapted for every conceivable industry. But while our SEO techniques can be used for any niche, we like to go the extra
              mile, spending time to truly understand your business and its values. It’s this personalised service that marks us out
              from the competition. From social media management to influencer campaigns, we’re Dubai’s trusted SMM agency. Get affordable
              services with measurable ROI.
            </p>
            <button className="mt-4 px-6 py-3 bg-liner-to-r from-indigo-700 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              SPEAK TO OUR EXPERTS
            </button>
          </div>

          {/* Right Content - Services Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow hover:shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="text-pink-600 mb-2">{service.icon}</div>
                <h6 className="font-semibold text-sm md:text-base">{service.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* <!-- EXPERTISE section end --> */}

      {/* <!-- Process of Work start --> */}
      <DubaiBrands />

      {/* <!-- marquee brands sections start  --> */}
      <DubaiBrandsMarquee />
      {/* <!-- marquee brands sections end  --> */}


      {/* <!-- feq section start  --> */}
      <FAQSection/>
      {/* <!-- feq section end  --> */}
      {/* <!--contact from start --> */}
      <section className="seo-dubai-contact px-5 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <div className="seo-dubai-content text-gray-800">
              <h6 className="font-semibold text-pink-600 text-lg">CONTACT US</h6>
              <h2 className="font-bold text-3xl md:text-4xl mt-4 mb-3">
                Social Media Marketing Agency in Dubai
              </h2>
              <p className="mb-6 text-gray-600 text-justify leading-relaxed">
                As a leading social media agency in Dubai, we offer Facebook ads,
                Instagram marketing, LinkedIn campaigns, and influencer marketing
                services. From social media management to paid advertising and
                influencer collaborations, we ensure your brand connects with the right
                audience and drives measurable ROI.
              </p>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-medium transition">
                SCHEDULE A MEETING
              </button>
            </div>

            {/* Right Form */}
            <div className="seo-dubai-form-box bg-white shadow-lg rounded-xl p-8">
              <h5 className="font-semibold text-xl mb-6 text-pink-700">
                SPEAK TO AN EXPERT
              </h5>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">First Name *</label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Enter first name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Last Name *</label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Enter last name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Work Email *</label>
                    <input
                      type="email"
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Enter email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Phone *</label>
                    <input
                      type="tel"
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="+971 XXX XXX"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Designation</label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Enter designation"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Company Name *</label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Enter company name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Company Size *</label>
                    <select
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      required
                    >
                      <option value="">Select</option>
                      <option>0–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>200+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium mb-1">
                      What would you like to manage? *
                    </label>
                    <select
                      className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      required
                    >
                      <option value="">Select</option>
                      <option>Website</option>
                      <option>SEO</option>
                      <option>Social Media</option>
                      <option>Mobile App</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Message</label>
                  <textarea
                    className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    rows="3"
                    placeholder="Enter message"
                  ></textarea>
                </div>

                <div className="text-left pt-2">
                  <button
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-md font-medium transition"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!--contact from end --> */}
    </>
  )
}







