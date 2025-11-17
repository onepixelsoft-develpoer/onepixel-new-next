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
        heading:"Crowdfunding App Development (Empower Fundraising Through Smart Technology)",
        desc:"Build your own crowdfunding platform with OnePixelSoft — a trusted name in financial and fundraising app development. Our platforms support peer-to-peer donations, campaign management, secure payments, and social integration.",
        desc1:"Whether you're starting a new startup or expanding an existing platform, our experienced developers provide white-label crowdfunding software that's secure, intuitive, and full of the latest technology. We assist you in bringing your vision to life in the form of a fully functional, market-ready product that fuels growth and investor engagement."
      }}/>
      <AboutSilder/>
      <OurServiceLanding data={{
        heading:"Crowdfunding App Development",
        desc:["Dreaming of having a crowdfunding website such as Kickstarter, Indiegogo, GoFundMe, Seedrs, and CrowdRise? Onepixel soft is one of the top companies developing crowdfunding platforms offering crowdfunding solutions that tap the potential of pioneering technologies for cutting-edge web and mobile apps in the industry.",
        "Whether start-ups, a small company, or a company, our top-class online funding platform services offer a variety of crowdfunding application development solutions. Our white-label crowdfunding software development solutions facilitate Equity Crowdfunding Platform, Real Estate Crowdfunding Platform, Infrastructure Crowdfunding Platform, and so on. Our crowdfunders develop spectacular crowdfunding web and mobile applications using popular technology stacks to your requirements, ideology, and business objectives that will make you market leaders."]
      }}/>
      <OurWebsiteDevelopment servicesdata={[
         {
          title: "Campaign Creation & Management",
          description:
            "Easily launch, customize, and manage donation or fundraising campaigns with powerful built-in tools.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Payment Gateway Integration",
          description:
            "Accept secure donations through multiple gateways like Stripe, PayPal, or Razorpay for global reach.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Donor Dashboard & Analytics",
          description:
            "Provide donors with transparent dashboards and track campaign performance using real-time analytics.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Multi-Currency & Wallet System",
          description:
            "Enable global donations with support for multiple currencies and in-app wallet functionality.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Admin Panel for Monitoring",
          description:
            "Manage users, campaigns, and transactions from a centralized admin dashboard for full control and insights.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
      ]}/>
      <OurServicesSection/>
      <FeqSection feqdata={[
        {
          question:" Can you include crypto or token-based funding? ",
          answer:"Yes, we can integrate blockchain and secure crypto payments.",
        }
      ]}/>
    </div>
  )
}
