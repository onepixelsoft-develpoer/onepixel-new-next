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
        heading: "Hotel Management Software (Smart Solutions for Hospitality Businesses)",
        desc: "Streamline hotel operations with OnePixelSoft’s powerful Hotel Management System — covering reservations, housekeeping, billing, POS, and reporting in one place."
      }} />
      <AboutSilder />
      <OurServicePoints serviceData={{
        heading: "Hotel Management Software",
        paragraph1: "In the rapidly changing hospitality business today, numerous software companies offer hotel management solutions—but the majority of them market low-cost products with basic features, which result in inefficient hotel operations.Onepixel Soft differs from others by providing a full-fledged Hotel Management Software System in cloud as well as on-premise models. Our system is designed to manage every necessary feature of hotel operations, such as: Online booking engine , Front desk and reception management , Housekeeping and maintenance tracking , Invoicing and billing , Reports and performance analytics , With Onepixel Soft, you have a robust, single system that streamlines operations, maximizes guest satisfaction, and enhances overall efficiency."
      }} />
      <OurWebsiteDevelopment servicesdata={[
        {
          title: "Booking & Reservation Management",
          description:
            "Easily handle room bookings, reservations, and availability with a streamlined interface.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Check-In / Check-Out Automation",
          description:
            "Simplify guest arrivals and departures with automated processes for faster and smoother service.",
          icon: "/assets/images/icon/service-icon2.webp",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Inventory & Room Management",
          description:
            "Monitor room occupancy, supplies, and housekeeping tasks to optimize operations.",
          icon: "/assets/images/icon/service-icon3.webp",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "POS Billing & Reports",
          description:
            "Manage in-house billing, generate receipts, and track sales with detailed reporting tools.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Guest Feedback System",
          description:
            "Collect and analyze guest feedback to improve services and enhance customer satisfaction.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
      ]} />

      <OurServicesSection />
      <FeqSection feqdata={[
        {
          question: "Can it integrate with online booking portals?",
          answer: "Yes, integration with Booking.com, Airbnb, and other popular platforms is available."
        },
        {
          question: "Does it support automated check-in and check-out?",
          answer: "Absolutely! Guests can check in and out seamlessly with automated processes."
        },
        {
          question: "Can I manage room inventory and housekeeping schedules?",
          answer: "Yes, the software provides real-time room inventory tracking and housekeeping management."
        },
        {
          question: "Is there a POS billing system for in-house services?",
          answer: "Yes, it includes POS billing to handle payments for restaurant, spa, or other services."
        },
        {
          question: "Can I collect and analyze guest feedback?",
          answer: "Definitely! Guest reviews and feedback are collected and presented in easy-to-read analytics."
        }
      ]} />

    </div>
  )
}
