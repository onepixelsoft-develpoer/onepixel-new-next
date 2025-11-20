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
                heading: "Logo Design Services (Build a Memorable Brand Identity)",
                desc: "At Onepixel Soft, we know that your logo is the face of your brand—and it should say a lot. Sure, there are many logo design platforms available out there, but not all provide the quality or creativity your business needs. When you're introducing a startup or need to rebrand your company, our creative logo design work guarantees you outshine the competition and leave a lasting impression.",
                desc1: "Your logo is the face of your brand — it defines your identity, values, and trust. At OnePixelSoft, we craft unique, professional, and scalable logos that leave a lasting impression on your audience."
            }} />
            <AboutSilder />
            <OurServiceReport data={{
                img1: "/assets/images/choose/Brochure%20image-01.svg",
                heading: "Professional Logo Design Services That Make Your Brand Shine",
                desc: "In the world of logo design, there are many services claiming to offer `free` or budget-friendly options, but not all can deliver the quality and professionalism your brand deserves. At Onepixel Soft, we take pride in crafting high-quality, unique logos that truly represent your business. We know you don’t want a logo that looks like it was designed by a beginner, nor do you want to go through a complex and lengthy process to get the perfect design.",
                btu: "contact now"
            }} />
            <OurWebsiteDevelopment servicesdata={[
                {
                    title: "Corporate Logo Design",
                    description:
                        "Professional logos that define your brand.",
                    icon: "/assets/images/icon/service-icon1.webp",
                    bgClass: "bg-yellow-100",
                    color: "#e6f8f0",
                    link: "/service-details",
                },
                {
                    title: "Minimal & Modern Logos",
                    description:
                        "Sleek, contemporary designs for a clean look.",
                    icon: "/assets/images/icon/service-icon2.webp",
                    bgClass: "bg-yellow-100",
                    color: "#f3f3f3",
                    link: "/service-details",
                },
                {
                    title: "Typography-Based Logos",
                    description:
                        "Creative wordmarks that stand out.",
                    icon: "/assets/images/icon/service-icon3.webp",
                    bgClass: "bg-yellow-100",
                    color: "#f3edff",
                    link: "/service-details",
                },
                {
                    title: "Iconic & Symbolic Logos",
                    description:
                        "Memorable symbols that capture your brand essence.",
                    icon: "/assets/images/icon/service-icon1.webp",
                    bgClass: "bg-yellow-100",
                    color: "#fde6eb",
                    link: "/service-details",
                },
                {
                    title: "Rebranding & Redesign Services",
                    description:
                        "Refresh your brand identity with style.",
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
