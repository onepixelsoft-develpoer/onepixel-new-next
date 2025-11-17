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
            heading:"UI Design Services (User-Centric Interfaces for Web & Mobile Apps)",
            desc:"Great user interfaces combine beauty and usability. Our UI designers craft intuitive and responsive interfaces for websites and mobile apps that improve engagement and user satisfaction.",
            desc1:"A well-structured UI reduces bounce rates, enhances customer retention, and drives higher conversions across platforms."
        }}/>
        <AboutSilder/>
        <OurServiceReport data={{
            img1:"/assets/images/choose/Brochure%20image-01.svg",
            heading:"Onepixel Soft Brochure Design Services",
            desc:"At Onepixel Soft, we are experts in providing cutting-edge brochure design services that enable your brand to communicate effectively, imaginatively, and persuasively. As a reliable Indian brochure design firm, we provide an extensive array of brochure and flyer design solutions for marketing, sales, product presentations, and more. We know brochure design is not merely about looks—it's a strategic combination of creativity, innovation, and professional execution. Having years of experience in the design field, we create effective brochures that not only appear professional but also drive purchasing decisions and build your brand image",
            btu:"contact now"
        }}/>
        <OurWebsiteDevelopment servicesdata={[
           {
          title: "Wireframing & Prototyping",
          description:
            "Plan and visualize app or website layouts before development for efficient design.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "App Interface Design",
          description:
            "Create intuitive and visually appealing interfaces for mobile applications.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Dashboard & Admin Panel UI",
          description:
            "Design clean, user-friendly dashboards for easy data management.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Responsive Web UI Design",
          description:
            "Ensure websites look and perform perfectly across all devices.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "User Journey Optimization",
          description:
            "Enhance user experience by streamlining navigation and interaction flows.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        ]}/>
        <OurServicesSection/>
        <FeqSection/>
    </div>
  )
}
