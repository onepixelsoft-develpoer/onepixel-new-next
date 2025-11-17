import FeqSection from '@/components/our-services/FeqSection'
import OurServiceLanding from '@/components/our-services/OurServiceLanding'
import OurServicePoints from '@/components/our-services/OurServicePoints'
import OurServicesSection from '@/components/our-services/OurServicesSection'
import OurWebsiteDevelopment from '@/components/our-services/OurWebsiteDevelopment'
import ServiceGetStart from '@/components/our-services/ServiceGetStart'
import dynamic from 'next/dynamic'
import React from 'react'
const AboutSilder = dynamic(() => import('@/components/about-us/AboutSilder'), { srr: false })
export default function page() {
  return (
    <div>
      <ServiceGetStart singleData={{
        heading: "Landing Page Website Development Services",
        heading3: "",
        slug: "landing-page-development",
        desc: "Your landing page is your first impression — and your biggest conversion opportunity. OnePixelSoft creates strategically designed, conversion-optimized landing pages for ads, campaigns, and product launches.",
      }} />
      <AboutSilder />
      <OurServicePoints serviceData={{
        heading1: "Let Stunning and Interactive Landing Pages Benefit Your Business-",
        heading2: "Let's See How These Landing Pages Can Assist You To Support and Expand Your Business -",
        slug: "landing-page-development",
        poits1: [
          `In today’s digital landscape, landing pages play a crucial role in attracting leads and establishing a solid online presence. From startups to large enterprises, businesses rely on landing pages to drive conversions and maximize their online success.`,
          `Your business website is the central location for all of your online efforts, providing critical information that converts visitors into paying clients. This includes detailed product or service information, customer service options, buy alternatives, and more. All of these aspects play a role in engaging your audience and moving them toward conversion.`,
          `Landing pages serve as messengers for your business, speaking to the world and making people aware of what you have to provide. The more complex your business model, the more diverse and targeted your landing pages need to be. Indeed, almost 70% of B2B businesses use landing pages to acquire quality business leads.`,
          `With a well-planned, well-crafted landing page: You can emphasize key offerings with a prominent call to action (CTA).`,
          `You can track performance and fine-tune designs for maximum conversions.`,
          `Accelerate your company's growth with interactive and optimized landing pages built specifically to suit your needs and objectives. At OnePixel Soft, we make your landing pages both beautiful and user-friendly, and more importantly, conversion-focused.`
        ],
        poits2: [
          `We Will Assist You To Command Attention: Having the most superior product or service is not enough. Nobody will benefit if nobody knows about it. Landing pages play a crucial role in getting potential buyers to the top of the sales funnel, piquing their interest, and leading them towards conversion. By having a well-planned landing page, you can make sure your product or service gets noticed by the target audience.`,
          `We Will Strategically Support Business Goals: Landing pages allow you the versatility to segment your strategies, tailoring to particular goals. If you're launching a new product, expanding into a new market, or need to close sales, you can design specialized landing pages to target the right individuals and achieve your individual business goals. You can design each page to fulfill particular goals, enabling you to reach more qualified customers and prospects.`,
          `We Will Enhance the Efficiency of Content Marketing: With the current level of competition, content marketing plays a crucial role in driving conversions and engagement. With strategic application of landing pages, you are able to advance your content marketing efforts, making targeted, high-conversion touchpoints that drive users and compel them to the desired action. Your content will be more powerful with customized landing pages, thus leading to improved results.`,
          `We Will Establish Your Credibility: In the world of online business, credibility is the key to success. It's the key to establishing trust with prospective customers. Without it, you stand to lose opportunities and customers. Landing pages assist you in demonstrating your expertise, offering your unique selling proposition, and establishing a solid foundation for establishing trust. This credibility is an important factor in converting visitors into loyal customers, eventually driving your business growth.`
        ]
      }} />
      <OurServiceLanding data={{
        heading: "Landing Pages Ought to Show Your Credibility at First Sight",
        desc: ["In today's high-speed digital world, first impressions count—and when it comes to landing page design, your credibility needs to be seen at first sight. Everyone is aware of how powerful third-party confirmation is—testimonials, reviews, and ratings are all important factors in making decisions. Placing a strong quote or brief testimonial strategically at the beginning of your landing page can immediately establish trust and support your brand's credibility.",
          "Add genuine images or profile pictures with your testimonials. This amplifies the social proof effect and makes your landing page more credible and relatable. The greatest landing pages are personal and relevant. Write your message in a way that talks directly to your target audience's pain points, worries, and aspirations. When a visitor arrives at your page, they need to feel understood. This emotional connection creates trust and engagement immediately."],
      }} />
      <OurWebsiteDevelopment servicesdata={[
{
          title: "CRO & Funnel Optimization",
          description:
            "Improve user journeys and increase conversions by analyzing behavior and refining every step of the funnel.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Fast Load Speed",
          description:
            "Optimize images, scripts, and code to ensure your website loads in seconds — boosting user experience and SEO rankings.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "SEO + Analytics Integration",
          description:
            "Implement on-page SEO strategies and track performance with Google Analytics to measure real growth.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Mobile-Friendly & Responsive",
          description:
            "Ensure your website looks and performs flawlessly across all screen sizes — from smartphones to desktops.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Engaging Copy & Visuals",
          description:
            "Use persuasive content and captivating visuals to connect with your audience and build brand trust.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
      ]} />
      <OurServicesSection />
      <FeqSection feqdata={[
        {
          question:"How long does it take?",
          answer:"Typically 3–5 business days."
        }
      ]}/>
    </div>
  )
}
