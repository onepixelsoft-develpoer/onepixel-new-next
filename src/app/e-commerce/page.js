import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServicePoints from '@/components/our-services/OurServicePoints'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
  return (
    <div>
      <ServiceGetStart singleData={{
        heading: "Ecommerce Website Development Services",
        heading2: "(Drive Sales & Grow Worldwid)",
        slug: "e-commerce",
        desc: "Build your dream online store with OnePixelSoft — Jaipur’s trusted eCommerce development company. We create fast, user-friendly, and conversion-optimized online stores tailored to your business model.",
        desc1: " Whether you're opening a new online shop, revamping your existing ecommerce site, or venturing into mobile commerce, we assist you in developing a robust online presence.",
      }} />
      <AboutSilder />
      <OurServicePoints serviceData={{
        slug: "e-commerce",
        heading: "E-commerce Development Service",
        paragraph1: "At OnePixel Soft, we assist companies to enhance customer satisfaction, increase reach among audiences, and boost web sales with impactful, performance-centric e-commerce solutions. In this fast-paced age of digital engagement, being competitive translates to maintaining a professionally created, custom-fit, and growing ecommerce presence—an engaging responsive site or a super-performing mobile app. It's why we couple our extensive knowledge of ecommerce development with the current technology and business-oriented strategies to provide customized solutions that address changing business needs in industries globally.",
        poits1: [
          "E-commerce Development Service At OnePixel Soft, we assist companies to enhance customer satisfaction, increase reach among audiences, and boost web sales with impactful, performance-centric e-commerce solutions. In this fast-paced age of digital engagement, being competitive translates to maintaining a professionally created, custom-fit, and growing ecommerce presence—an engaging responsive site or a super-performing mobile app. It's why we couple our extensive knowledge of ecommerce development with the current technology and business-oriented strategies to provide customized solutions that address changing business needs in industries globally.",
          "E-commerce Development Service At OnePixel Soft, we assist companies to enhance customer satisfaction, increase reach among audiences, and boost web sales with impactful, performance-centric e-commerce solutions. In this fast-paced age of digital engagement, being competitive translates to maintaining a professionally created, custom-fit, and growing ecommerce presence—an engaging responsive site or a super-performing mobile app. It's why we couple our extensive knowledge of ecommerce development with the current technology and business-oriented strategies to provide customized solutions that address changing business needs in industries globally."

        ]
      }} />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "WooCommerce, Shopify & Magento Setup",
          description:
            "Build and customize powerful eCommerce stores on leading platforms to match your brand and business goals.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Payment Gateway Integration",
          description:
            "Seamlessly connect secure payment options like Stripe, PayPal, and Razorpay for a smooth checkout experience.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Product & Inventory Management",
          description:
            "Easily manage products, stock levels, and categories to keep your store organized and up to date.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "SEO + Speed Optimization",
          description:
            "Boost visibility and conversions with optimized code, fast loading times, and on-page SEO best practices.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Custom Admin Dashboard",
          description:
            "Get a tailored admin panel for real-time control over products, orders, users, and analytics — all in one place.",
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
