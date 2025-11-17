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
            heading:"Hybrid App Development (One App Multiple Platforms Maximum Reach)",
            desc:"Save time and cost with OnePixelSoft’s Hybrid App Development services. We build powerful apps that run seamlessly across Android, iOS, and web platforms — offering you faster time to market and reduced development costs."
        }}/>
        <AboutSilder/>
        <OurServiceLanding data={{
            heading:"Hybrid App Development",
            desc:["Hybrid app development integrates the best of native applications with the versatility of web technologies such as HTML5, CSS, and JavaScript. Although hybrid apps appear and act like native apps to end-users—being downloadable from the App Store or Google Play and cached on mobile devices—the most important difference is in their development process","Rather than developing individual code for every platform, hybrid apps share a single codebase that executes within an embedded browser component, allowing development to be faster, less expensive, and more manageable. This method allows companies to provide feature-rich, high-performance mobile apps that are well-suited to run on both Android and iOS platforms. At Onepixel Soft, we create hybrid apps that are fast, responsive, and customized to your business objectives—filling the gap between web and mobile experiences."]
        }}/>
        <OurWebsiteDevelopment servicesdata={[
        {
          title: "Flutter, React Native & Ionic Frameworks",
          description:
            "Build powerful cross-platform mobile apps using modern frameworks for Android and iOS.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Unified Codebase",
          description:
            "Develop once and deploy everywhere — reducing time, cost, and effort while maintaining consistency.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Native-Like Performance",
          description:
            "Deliver smooth, fast, and responsive user experiences that feel just like native apps.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "API & Cloud Integration",
          description:
            "Connect apps seamlessly with REST APIs, Firebase, and cloud services for real-time functionality.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Continuous Maintenance & Support",
          description:
            "Ensure long-term performance with regular updates, bug fixes, and new feature integrations.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
      ]}/>
        <OurServicesSection/>
        <FeqSection feqdata={[
            {
          question:" Will hybrid apps work offline? ",
          answer:"Yes, we include offline data caching when required.",
        }
        ]}/>
    </div>
  )
}
