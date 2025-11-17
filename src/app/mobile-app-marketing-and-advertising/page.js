import AboutSilder from '@/components/about-us/AboutSilder'
import FeqSection from '@/components/our-services/FeqSection'
import OurServiceLanding from '@/components/our-services/OurServiceLanding'
import OurServicePoints from '@/components/our-services/OurServicePoints'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import React from 'react'

export default function page() {
    return (
        <div>
            <ServiceGetStart singleData={{
                heading: "Mobile App Marketing & Advertising (Increase Installs, Retention, and Revenue)",
                desc: "With millions of apps competing for attention, strategic marketing is vital. OnePixelSoft helps your mobile app get discovered, downloaded, and retained through targeted digital campaigns.",
            }} />
            <AboutSilder />
            <OurServiceLanding data={{
                heading: "Mobile App Marketing & Advertising",
                desc: ["The world has shifted from desktops to mobiles. Companies now have more and more opportunities on a daily basis that can radically alter the way their product or service is accessed and delivered to their potential customers. Having a mobile app is an excellent way to access these targeted consumers. There are thousands of apps being released on app stores each day, but the reality is that many of them are never downloaded at all and some even get uninstalled by users after one-time use. Your app's success varies based on the sales strategy you adopt."]
            }} />
            <OurWebsiteDevelopment servicesdata={[
                {
                    title: "Google & Apple Store Optimization",
                    description:
                        "Enhance app visibility on Play Store and App Store with optimized listings, keywords, and visuals.",
                    icon: "/assets/images/icon/service-icon1.png",
                    bgClass: "bg-yellow-100",
                    color: "#e6f8f0",
                    link: "/service-details",
                },
                {
                    title: "Social Media Optimization (SMO)",
                    description:
                        "Optimize social profiles and content to increase engagement, followers, and brand awareness.",
                    icon: "/assets/images/icon/service-icon2.png",
                    bgClass: "bg-yellow-100",
                    color: "#f3f3f3",
                    link: "/service-details",
                },
                {
                    title: "Pay-Per-Click (PPC) Advertising",
                    description:
                        "Run targeted ad campaigns on Google, Facebook, and other platforms for instant traffic and leads.",
                    icon: "/assets/images/icon/service-icon3.png",
                    bgClass: "bg-yellow-100",
                    color: "#f3edff",
                    link: "/service-details",
                },
                {
                    title: "Content Creation & Marketing",
                    description:
                        "Craft compelling content — blogs, videos, graphics — to attract, engage, and convert your audience.",
                    icon: "/assets/images/icon/service-icon1.png",
                    bgClass: "bg-yellow-100",
                    color: "#fde6eb",
                    link: "/service-details",
                },
                {
                    title: "Influencer & Performance Marketing",
                    description:
                        "Leverage influencers and performance-driven campaigns to boost conversions and ROI.",
                    icon: "/assets/images/icon/service-icon1.png",
                    bgClass: "bg-yellow-100",
                    color: "#fde6eb",
                    link: "/service-details",
                },
            ]} />
            <OurServicesSection />
            <OurServicePoints serviceData={{
                heading: "Why Choose Us",
                paragraph1: "Onepixel Soft is a household brand in the mobile app marketing industry. Our experts and marketing strategists have a single mission: executing your app campaign with excellence and accuracy. Below are some of the reasons why you should partner with us for your app marketing services:",
                heading2: "",
                poits1: [
                    "Personalized App Marketing: Our expert team designs multi-channel, scalable marketing campaigns that meet your unique requirements, whether you are launching an iOS application, Android application, or gaming app. We aim at distinguishing your app from the fierce competition in the marketplace.",
                    "Professional Marketing Strategies: We specialize in ASO (App Store Optimization) and localization techniques to generate more installs and maximize user interactions. Our viral ad campaigns aim to achieve increased ROI and promote your app's performance in the market."
                ]


            }} />
            <FeqSection />
        </div>
    )
}
