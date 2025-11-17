import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServicePoints from '@/components/our-services/OurServicePoints'
import OurServiceReport from '@/components/our-services/OurServiceReport'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import { OurServicesData } from '@/data/OurServicesData'
import React from 'react'

export default function page() {
  return (
    <div>
      <ServiceGetStart singleData={{
        heading: "Static Website Development",
        heading3: "",
        slug: "static-web-development",
        desc: "Static Website Development (Fast, Reliable & Cost-Effective Business Websites) Build a sleek, professional online presence with OnePixelSoft — Jaipur’s leading Static Website Development Company. Perfect for startups, professionals, and small businesses looking for an elegant and efficient online identity.",
        desc1: "A static website offers simplicity, speed, and reliability — making it ideal for businesses that want a strong web presence without frequent updates. At OnePixelSoft, our static websites are crafted with modern layouts, fast load times, and SEO optimization, ensuring that your digital identity stands out from the competition.",
      }} />
      <AboutSilder />
      <OurServicePoints serviceData={{
        heading1: "Static Website Design Services -",
        slug: "static-web-development",
        heading2: "Why You Should Go For Static Website Design?",
        poits1: [
          `Understanding Your Business Requirements: We Start By Receiving A Clarity On Your Business Objectives, Targeted Audience, And Goals To Build A Website According To Your Brand Vision.`,

          `Client Consultation: Our Professionals Coordinate With You Tightly To Capture Your Individualized Needs, Habits, And Expectations And Make Sure Every Design Aspect Identifies With Your Unique Brand.`,

          `Developing A Personalized Structure: We Develop A Clean And Organized Web Design For Your Static Website With Easy Navigation And User Interaction Encouraged. Each Page Is Designed For Ultimate Impact.`,

          `Addition Of Business Images: We Place High-Resolution Images And Brochures Strategically Within The Website Layout So That They Enhance The Content And Integrate Well Within The User Environment.`,

          `Cross-Browser Compatibility Optimisation: We Make Sure That Your Static Website Is Responsive And Simple To Use On All Browsers, Giving A Seamless And Uniform Experience To Visitors On Any Device.`,
        ],
        poits2: [
          `Here's Why Going For A Static Website Can Be Extremely Helpful: Static Website Design Is A Bright Option For Companies Looking For A Quick, Secure, And Affordable Online Presence That Does Not Require Frequent Content Upgrades.`,

          `Easy To Design & Easy To Host: Static websites are easy to design and involve less server resource usage, hence very easy to host and manage.`,

          `Quick Loading & Google Friendly Search engines such as Google favor static websites since they download quickly, which enhances SEO rankings and user experience.`,

          `Fast Access To Downloads: Static websites facilitate quicker downloading of brochures, product images, and company profiles, providing an effective means of showcasing your services.`,

          `Better Navigation For Search Engines: Their simple structure and low code make them easier to index and crawl by search engine spiders, enhancing online visibility.`,

          `Improved Security: Static sites are less vulnerable to hacking because they don't depend upon databases or dynamic scripts. Security settings are easy and dependable.`,

          `Simple Content Management With Little Coding: You have complete control over your site content with less scripting needed, cutting down on management and maintenance complexities.`,
        ]

      }} />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "HTML5/CSS3 Based Responsive Design",
          description:
            "Builds modern, fully responsive websites that look great on all devices.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Fast & Secure Codebase",
          description:
            "Ensures your website loads quickly and remains secure against vulnerabilities.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "SEO and Mobile Optimization",
          description:
            "Optimizes your site for search engines and provides a smooth mobile experience.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Lightweight Hosting Setup",
          description:
            "Delivers efficient, fast-loading websites with minimal server resources.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Integration with Analytics Tools",
          description:
            "Tracks user behavior and website performance with easy analytics integration.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        }
      ]} />
      <OurServicesSection />
      <OurServiceReport data={{
        img1: "/assets/images/grow/grow-image1.png",
        img2: "/assets/images/grow/grow-image2.png",
        img3: "/assets/images/grow/grow-image3.png",
        heading: "Digital Transformation Report Helps To Grow",
        desc: "Static websites require no databases, making them faster, more secure, and cost-effective. They’re perfect for portfolios, corporate websites, service pages, or business introductions.",
        poits1: [
          "Customer-Centric Approaches",
          "Data-Driven Strategies",
          "Optimized Online Presence",
          "Multi-Channel Marketing"
        ],
        btu: "LEARN MORE"
      }} />
      <FeqSection feqdata={[
        {
          question: "Who should choose a static website?",
          answer: "Perfect for small businesses and portfolios."
        },
        {
          question: "Can I add dynamic features later?",
          answer: "Yes, we can easily scale it to a dynamic CMS."
        }
      ]} />
    </div>
  )
}
