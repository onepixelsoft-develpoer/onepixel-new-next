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
            heading:"Invoice Software Development (Automate Billing & Invoicing with Ease)",
            desc:"Simplify your business billing with OnePixelSoft’s customizable Invoice Software. Generate invoices, track payments, and manage taxes automatically — saving time and ensuring accuracy."
        }}/>
        <AboutSilder/>
        <OurServiceLanding data={{
            heading:"Invoice Software Solutions",
            desc:["I We at Onepixel Soft create sophisticated Invoice Software Solutions that not only automate your billing and invoicing but also bring several important advantages to your business.","Automating the invoicing process minimizes the requirement for additional billing personnel, saves time, and enhances customer relationships with quicker resolutions. With our Invoice Software, you maximize your bottom line through effective and secure invoicing management."]
        }}/>
        <OurWebsiteDevelopment servicesdata={[
          {
          title: "Invoice & Receipt Management",
          description:
            "Create, send, and track professional invoices and receipts with automated numbering and status updates.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "GST / Tax Calculation",
          description:
            "Automatically calculate GST and other applicable taxes to ensure accurate billing and compliance.",
          icon: "/assets/images/icon/service-icon2.webp",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Client Dashboard",
          description:
            "Provide clients with a personalized dashboard to view invoices, payments, and transaction history.",
          icon: "/assets/images/icon/service-icon3.webp",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Payment Integration (UPI, Card, Bank)",
          description:
            "Accept secure payments through multiple channels including UPI, credit/debit cards, and direct bank transfers.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Analytics & Reporting",
          description:
            "Monitor revenue, expenses, and payment trends with detailed reports and visual analytics.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        ]}/>
        <OurServicesSection/>
        <FeqSection feqdata={[
          {
            question:"Can this software manage multi-currency invoices? ",
            answer:"Yes, we support international billing and currencies."
          }
        ]}/>
    </div>
  )
}
