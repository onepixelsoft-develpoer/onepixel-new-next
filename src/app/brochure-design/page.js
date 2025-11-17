import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServiceReport from '@/components/our-services/OurServiceReport'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
      <ServiceGetStart singleData={{
        heading: "Brochure Design Services (Professional Designs That Tell Your Story)",
        desc: "Brochures are your brand’s handshake — they communicate who you are and what you offer. At OnePixelSoft, we create stylish and informative brochures that reflect your values and help you make a lasting impression.",
        desc1: "Whether you want to highlight your products, services, or brand narrative, our professionally designed brochures are customized to achieve your marketing and sales objectives. We combine creativity, innovation, and strategic thought to craft brochures that are not only beautiful—they get results."
      }} />
      <AboutSilder />
      <OurServiceReport data={{
        img1: "/assets/images/choose/Brochure%20image-01.svg",
        heading: "UI Design – Designing Experiences That Inspire",
        desc: "At Onepixel Soft, we think that good design fixes problems—but great design creates unforgettable experiences. Our UI/UX design services are designed to provide your business not only visual appeal but also smooth functionality that captivates your audience and improves usability. With a group of creatively motivated UI and UX professionals, we take simple concepts and rough wireframes and turn them into visually stunning, user-focused interfaces. Whether you're developing mobile applications, cloud apps, or interactive websites, we make sure every detail is carefully crafted to represent your brand and enhance user experience.",
        btu: "contact now"
      }} />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "Corporate Profiles",
          description:
            "Professionally designed profiles that showcase your company’s vision, values, and achievements.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Product Catalogs",
          description:
            "Comprehensive catalogs highlighting your products with clear visuals and engaging layouts.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Tri-Fold & Bi-Fold Layouts",
          description:
            "Elegant, easy-to-read designs for marketing materials.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Real Estate & Service Flyers",
          description:
            "Engaging brochures optimized for online viewing and interactivity.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Digital & Interactive Brochures",
          description:
            "Ready-to-send flyers optimized for digital campaigns.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Event and Exhibition Booklets",
          description:
            "Informative, visually striking booklets perfect for events and exhibitions.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
      ]} />
      <OurServicesSection />
      <FeqSection feqdata={[
        {
          question: "What types of brochures do you design?",
          answer: "We design corporate profiles, product catalogs, tri-fold & bi-fold brochures, digital interactive brochures, and event booklets.",
        },
        {
          question: "Can you create digital and interactive brochures?",
          answer: "Yes, we create fully digital brochures with interactive elements, perfect for online sharing and email campaigns.",
        },
        {
          question: "Do you handle event and exhibition booklets?",
          answer: "Absolutely, we design visually striking booklets tailored for events, exhibitions, and promotional campaigns.",
        },
        {
          question: "Can you rebrand existing brochures?",
          answer: "Yes, we offer redesign and rebranding services to refresh your existing brochures with modern and engaging designs.",
        },
        {
          question: "Do you provide print-ready files?",
          answer: "Yes, all our brochure designs come with high-resolution, print-ready files, as well as optimized digital versions.",
        }
      ]} />
    </div>
  )
}
