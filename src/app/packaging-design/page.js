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
        heading: "Packaging Design Services (Innovative Designs That Sell Your Product)",
        desc: "Product packaging is your silent salesperson. At OnePixelSoft, we blend creativity with market research to design packaging that attracts customers and strengthens brand recall."
      }} />
      <AboutSilder />
      <OurServiceReport data={{
        img1: "/assets/images/choose/Brochure%20image-01.svg",
        heading: "Packaging That Protects & Promotes Your Brand",
        desc: "At Onepixel Soft, we understand that product packaging is not just a protective coating—it's a forceful branding mechanism. Your packaging protects your products from damage throughout shipping, handling, and storage. But beyond that, it's usually the first tangible experience your customer has with your company. No matter whether it lands in their hands or catches their eye on a store shelf, your packaging design makes a lasting impact. It shares your brand message, instills confidence, and makes purchasing decisions before the product is even picked up. We design bespoke packaging solutions that not only appear breathtaking but also embody your brand philosophy and speak to your audience emotionally. From idea to realization, we provide packaging solutions that are robust, functional, and memorable.",
        btu: "contact now"
      }} />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "Food & Beverage Packaging",
          description:
            "Attractive and safe packaging that preserves freshness and appeals to customers.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Cosmetic & Health Products",
          description:
            "Elegant, eye-catching designs that reflect quality and build brand trust.",
          icon: "/assets/images/icon/service-icon2.webp",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "E-Commerce & Retail Boxes",
          description:
            "Durable, visually appealing boxes that enhance the unboxing experience.",
          icon: "/assets/images/icon/service-icon3.webp",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Labels & Stickers",
          description:
            "Custom labels and stickers that communicate brand identity and product information clearly.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Eco-Friendly Packaging Design",
          description:
            "Sustainable packaging solutions that reduce environmental impact while maintaining style.",
          icon: "/assets/images/icon/service-icon1.webp",
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
