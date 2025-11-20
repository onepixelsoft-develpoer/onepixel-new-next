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
            heading:"Flyer Design Services (Engage Your Audience with Impactful Print Designs)",
            desc:"Onepixel Soft is a professional service that creates unique and attention-grabbing flyer designs that successfully communicate your brand message. Whether you are advertising a product, service, or event, our professional designers create flyers that capture attention and make a lasting impression.",
            desc1:"Flyers remain a powerful tool for promotion. Our creative team designs eye-catching flyers that deliver your message clearly and professionally — whether for events, product launches, or corporate campaigns.",
        }}/>
        <AboutSilder/>
        <OurServiceReport data={{
            heading:"Flyer Design Services at Onepixel Soft",
            desc:"At Onepixel Soft, we provide creative and innovative flyer and poster design services that effectively convey your brand's message. Our designers use advanced creativity and insightful design to develop materials that command attention and convey a strong marketing appeal. We recognize that well-designed posters and flyers have an imperative role in creating a favorable, lasting impression on your target customers. Our aim is to give you a premium-quality product that assists you in the most effective way to connect your target audience and reach your business goals. If you're launching a new product, organizing an event, or advertising a special promotion, we want to make sure each flyer and poster we produce is a professional reflection of your business that drives results.",
            btu:"contact now",
            img1:"/assets/images/choose/Brochure%20image-01.svg"
        }}/>
        <OurWebsiteDevelopment servicesdata={[
          {
                    title: "Corporate Flyers",
                    description:
                        "Professional designs for your business communications.",
                    icon: "/assets/images/icon/service-icon1.webp",
                    bgClass: "bg-yellow-100",
                    color: "#e6f8f0",
                    link: "/service-details",
                },
                {
                    title: "Event Promotions",
                    description:
                        "Boost attendance with visually engaging flyers.",
                    icon: "/assets/images/icon/service-icon2.webp",
                    bgClass: "bg-yellow-100",
                    color: "#f3f3f3",
                    link: "/service-details",
                },
                {
                    title: "Product Launch Flyers",
                    description:
                        "Highlight new products with style and impact.",
                    icon: "/assets/images/icon/service-icon3.webp",
                    bgClass: "bg-yellow-100",
                    color: "#f3edff",
                    link: "/service-details",
                },
                {
                    title: "Real Estate & Service Flyers",
                    description:
                        "Showcase properties and services effectively.",
                    icon: "/assets/images/icon/service-icon1.webp",
                    bgClass: "bg-yellow-100",
                    color: "#fde6eb",
                    link: "/service-details",
                },
                {
                    title: "Digital PDF Flyers for Email Marketing",
                    description:
                        "Ready-to-send flyers optimized for digital campaigns.",
                    icon: "/assets/images/icon/service-icon1.webp",
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
