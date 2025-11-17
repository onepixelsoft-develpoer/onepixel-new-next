import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServiceLanding from '@/components/our-services/OurServiceLanding'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
      <ServiceGetStart singleData={{
        heading: "Digital Marketing (Grow Your Brand Presence & Reach the Right Audience)",
        desc: "Empower your business with data-driven digital marketing strategies by OnePixelSoft — Jaipur’s trusted IT & marketing partner.",
        desc1: "Digital marketing is the key to business growth in today’s competitive landscape. It enhances customer reach, builds trust, and ensures long-term brand recognition."
      }} />
      <AboutSilder />
      <OurServiceLanding data={{
        heading: "Why Onepixel Soft?",
        desc: ["At Onepixel Soft, we're not just a service provider — we're your digital growth partner. We mix trust, creativity, and strategic thinking to help your business flourish in today's competitive online marketplace. Here's why clients across industries work with us: Partnership-Driven Approach We don't serve clients as customers — we serve you as partners. By comprehensively knowing your objectives, we provide assistance with care, clarity, and commitment along the way.",
          "Dedicated to Your Growth We commit to establishing more than your business — we assist you in expanding as an influencer and thought leader in your market. Your success is our purpose. Creators of Real Value Our organization is dedicated to providing significant, quantifiable outcomes. We collaborate to create digital solutions that create brand equity, enhance ROI, and establish high levels of professionalism. End-to-End Project Management Relax and think about your vision—we'll do everything from A to Z. From web and app development to digital marketing, your success is our duty."
        ]
      }} />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "Search Engine Optimization (SEO)",
          description:
            "Improve website visibility on search engines, drive organic traffic, and enhance online presence.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Social Media Optimization (SMO)",
          description:
            "Optimize social profiles and content to increase engagement, followers, and brand awareness.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Pay-Per-Click (PPC) Advertising",
          description:
            "Run targeted ad campaigns on Google, Facebook, and other platforms for instant traffic and leads.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Content Creation & Marketing",
          description:
            "Craft compelling content — blogs, videos, graphics — to attract, engage, and convert your audience.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Influencer & Performance Marketing",
          description:
            "Leverage influencers and performance-driven campaigns to boost conversions and ROI.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
      ]} />
      <OurServicesSection />
      <FeqSection />
    </div>
  )
}
