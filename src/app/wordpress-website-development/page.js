import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServiceReport from '@/components/our-services/OurServiceReport'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import ServicesSection from '@/components/our-services/ServicesSection'
import React from 'react'

export default function page() {
  return (
    <>
      <ServiceGetStart singleData={{
        heading: "WordPress Website ",
        slug: "wordpress-website-development",
        heading3: "(Scalable, SEO-Optimized, And Customizable Solutions)",
        desc: "WordPress Website Development(Scalable, SEO-Optimized & Customizable Solutions)Build a powerful online presence with OnePixelSoft — Jaipur’s leading WordPress Website Development Company. We create fast, secure, and high-performing WordPress websites designed to elevate your brand and maximize conversions.",
        desc1: "Want a website that’s adaptable, responsive, and SEO-ready? Our expert WordPress developers build high-performance websites tailored to your goals. We specialize in creating fully customizable, mobile-optimized, and SEO-enhanced sites that help your business stand out in the competitive digital landscape."
      }} />
      <AboutSilder />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "Custom WordPress Theme & Plugin Development",
          description:
            "Build unique, high-performance themes and plugins tailored to your business needs, ensuring flexibility and full control over your website’s features.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: " WooCommerce & E-Commerce Integration",
          description:
            "Transform your site into a powerful online store with seamless WooCommerce setup, secure payments, and optimized product management.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Mobile Optimization & Performance Tuning",
          description:
            "Deliver a lightning-fast, mobile-friendly experience that boosts engagement and improves conversion rates across all devices.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Advanced SEO Setup & Schema Integration",
          description:
            "Implement advanced SEO practices with structured data and schema markup to enhance your website’s visibility on search engines.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Website Migration & Maintenance",
          description:
            "Enjoy smooth website transfers, regular updates, and ongoing maintenance to keep your WordPress site secure, stable, and up-to-date.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        }
      ]} />
      <OurServicesSection />
      <FeqSection feqdata={[
        {
          question: "What is a classified website?",
          answer: "A classified website allows users to post and browse ads for products or services by category."
        },
        {
          question: "How can a classified website help my business?",
          answer: "It increases visibility, attracts niche audiences, and generates direct leads."
        },
        {
          question: "What features are included?",
          answer: "Custom categories, user dashboards, payment gateways, and admin panels."
        },
        {
          question: "How long does development take?",
          answer: "Depending on scope, typically 2–6 weeks."
        }
      ]} />
    </>
  )
}
