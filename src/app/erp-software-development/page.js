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
        heading: "ERP Software Development",
        desc: "Every expanding enterprise ultimately comes at a point that running operations starts to be multifaceted and time-consuming. Activities such as supply chain, accounting, stock control, employees, and threat management demand specialized coordination, managerial oversight, And industry experience.",
        desc1: "This Is Where ERP (Enterprise Resource Planning) Software Enters The Picture. Through Centralizing And Automating Core Business Processes, A Custom ERP System Assists Businesses In Streamlining Processes, Minimizing Human Errors, Increasing Productivity, And Enhancing Decision-Making Across All Departments."
      }} />
      <AboutSilder />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "Inventory & Supply Chain Management",
          description:
            "Monitor stock levels, track shipments, and streamline supply operations for maximum efficiency.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Finance & Accounting",
          description:
            "Automate billing, expense tracking, and financial reporting to keep your business finances organized.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Human Resource Management",
          description:
            "Manage employee data, attendance, and payroll seamlessly from a unified HR module.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "CRM & Sales Integration",
          description:
            "Boost customer relationships and sales performance with integrated CRM and lead management tools.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Real-Time Analytics Dashboard",
          description:
            "Gain actionable insights with live data visualization and performance tracking across departments.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
      ]} />
      <OurServicePoints serviceData={{
        heading: "What Sets Onepixel Soft Apart As The Best ERP Software Development Company?",
        paragraph1: "At Onepixel Soft, We Have Years Of Proven Experience In Providing Strong, Scalable, And Industry-Specific ERP Software Solutions. As A Top ERP Software Development Company In India, We Take Pride In Our Track Record Of Assisting Businesses Streamline Operations, Improve Efficiency, And Optimize ROI. If You’re Looking For Custom ERP Software Development With Innovative Features, Seamless Integration, And Intuitive Interfaces, You’re At The Right Place. Our ERP Applications Are Designed To Fit Perfectly With Your Existing Systems—Be It HRIS, CRM, Inventory, Or Finance Modules—To Ensure Smooth Workflow Across Departments. We Recognize That Your Resources And Human Capital Are The Pillars Of Your Business. With Our Professional ERP Developers Working For You, We Ensure Every Process Is Streamlined, Each Resource Is Implemented, And No Time Or Data Is Wasted.",
        heading1: "Why Onepixel Soft For ERP Development?",
        poits1: [
          "Customized Consultation – We Study Your Business Workflow Before Proposing Any Solution.",
          "Timely Delivery – We Follow Rigorous Deadlines Without Sacrificing Quality.",
          "Experienced ERP Developers – Our Team Is Skilled In Multiple ERP Platforms And Technologies.",
          "End-To-End ERP Solutions – Planning To Deployment And Support.",
          "Economical Pricing – Enjoy Enterprise-Level Features At Competitve Pricing.",
          "Adaptive Customization – Customize The ERP Modules As Per Your Specific Business Requirements."
        ]

      }} />
      <OurServicesSection />
      <FeqSection feqdata={[
        {

          question:"Can ERP integrate with our CRM and HRM software?",
          answer:" Yes, we offer full module integration."
        }
      ]} />
    </div>
  )
}
