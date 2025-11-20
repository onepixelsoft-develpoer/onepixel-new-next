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
        heading: "Dynamic Web Design Services",
        heading3: "",
        slug: "dynamic-web-development",
        desc: "Dynamic Website Development(Interactive, Scalable & Data-Driven Web Solutions)Transform your online presence with interactive websites powered by OnePixelSoft.",
        desc1: "Dynamic websites allow real-time content updates, user interactivity, and database integration. Perfect for businesses needing blogs, portals, or online catalogs.",
      }} />
      <AboutSilder />
      <OurServicePoints serviceData={{
        heading: "Dynamic Web Design: Key Of Success",
        slug: "dynamic-web-development",
        paragraph1:
          `A fully dynamic website provides you with an easy means to make changes across several pages at once.
            For instance, if you need to change your site's navigation, one change will be reflected across all the concerned pages—time and effort saved.
            This smooth updating process is facilitated by the might of dynamic website development.

            With a dynamic site, you can effortlessly manage and publish various products and services—without requiring technical expertise.
            Custom dynamic websites are extremely appreciated for their adaptability, scalability, and interactive nature.
            That's why businesses prefer dynamic websites—they support independent content management, improved SEO support, and economical solutions.

            Dynamic websites also provide support for a variety of modules such as:

            Blogs, E-commerce platforms, Secure logins, Forums, Article management, SEO features
            This makes them well-suited for companies looking to grow rapidly while having control and performance.`,
        heading2: "",
      }} />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "CMS Integration (WordPress/Drupal)",
          description: "Integrate powerful CMS platforms for easy updates and complete content control.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Admin Dashboard Creation",
          description: "Get an intuitive admin panel to manage your website without technical hassle.",
          icon: "/assets/images/icon/service-icon2.webp",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Database Integration",
          description: "Store, organize, and access data securely with seamless database connectivity.",
          icon: "/assets/images/icon/service-icon3.webp",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Lightweight Hosting Setup",
          description: "Boost visibility with clean, search-friendly, and easy-to-read URLs.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Integration with Analytics Tools",
          description: "Built to grow with your business, ensuring smooth scalability and performance.",
          icon: "/assets/images/icon/service-icon2.webp",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        }
      ]} />
      <OurServicesSection />
      <FeqSection feqdata={
        [
          {
            question: "What is a dynamic website?",
            answer: "It’s a site that updates content automatically via a database."
          },
          {
            question: "Who needs one?",
            answer: "Enterprises, blogs, and service portals."
          }
        ]
      } />
    </div>
  )
}
