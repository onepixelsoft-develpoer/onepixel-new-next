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
        heading: "IOS Application Development",
        desc: "At OnePixelSoft, we specialize in developing custom iOS applications that deliver premium experiences to Apple users. From idea to App Store launch, we ensure every app meets Apple’s high standards."
      }} />
      <AboutSilder />
      <OurServiceLanding data={{
        heading: "IOS Application Development",
        desc: ["iOS application development involves the development of mobile applications exclusively for Apple devices such as iPads, iPhones, and iPod Touches. These applications are coded using programming languages such as Swift or Objective-C and subsequently released to the App Store for customers to download.", "At Onepixel Soft, we provide an uninterrupted experience from requirements gathering through product launch and maintenance. With our agile development process, there is complete transparency at every step, keeping you updated at every stage. With close collaboration with your team, we make sure that your iOS app is consistent with your business objectives and adjusts to the changing needs of your users, allowing you to maintain a competitive edge in the marketplace."]
      }} />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "Swift / Objective-C Development",
          description:
            "Build high-performance iOS apps using modern Swift or legacy Objective-C with clean, maintainable code.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "UI/UX for iPhone & iPad",
          description:
            "Design intuitive and visually engaging interfaces that deliver a seamless experience across all Apple devices.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "iOS App Testing & QA",
          description:
            "Ensure bug-free performance with rigorous testing, debugging, and quality assurance processes.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "App Store Deployment",
          description:
            "Handle complete submission, listing, and approval process for a smooth App Store launch.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Maintenance & Updates",
          description:
            "Provide ongoing support, feature upgrades, and compatibility updates to keep apps running flawlessly.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
      ]} />
      <OurServicesSection />
      <FeqSection feqdata={[
        {
          question:" Do you handle app publishing on the App Store?",
          answer:"Yes, our team manages the complete publishing process.",
        },
      ]}/>
    </div>
  )
}
