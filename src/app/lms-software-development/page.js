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
            heading:"LMS Software Development (Digital Learning Simplified)",
            heading3:"(Tailored eLearning Solutions by Onepixel Soft)",
            desc:"Deliver online education effortlessly with OnePixelSoft’s advanced Learning Management System. Manage courses, track student progress, and deliver engaging e-learning experiences for schools, universities, and corporates."
        }}/>
        <AboutSilder/>
        <OurServicePoints serviceData={{
            heading:"LMS Software Development – Scalable & Custom eLearning Solutions by Onepixel Soft",
            paragraph1:"We, at Onepixel Soft, utilize our years of eLearning development experience to create and implement custom Learning Management System (LMS) software solutions for your employees, partners, or customers. Our LMS platforms are developed to amplify learning experiences, enhance training effectiveness, and enable hassle-free user engagement. With a team of seasoned LMS developers and eLearning consultants, we walk you through each stage of the LMS software development cycle—from planning to long-term maintenance.",
            heading1:"Our LMS development offerings include:",
            poits1:[
                "Data-Driven Consulting – Strategic guidance through on-site and off-site consultations to determine your training goals.",
                "Custom LMS Development – Custom LMS components developed to suit your specific organizational requirements.",
                "Building LMS from Scratch – Complete development of your eLearning ecosystem from the ground up.",
                "Third-Party Integration – Seamless integration with CRMs, HRMS, ERP systems, payment gateways, video conferencing tools, and more.",
                "Ongoing System Enhancement – Continuous improvement and end-to-end quality assurance to ensure optimal performance.",
                "Full IT Support (L1, L2, L3) – Round-the-clock technical assistance and system maintenance to guarantee uninterrupted training delivery.",
                "It's our goal to assist you in delivering impactful, scalable, and compelling digital learning experiences using current technology and leading design practices."
            ]
        }}/>
        <OurWebsiteDevelopment servicesdata={[
          {
          title: "Course & Quiz Creation",
          description:
            "Easily create, manage, and organize interactive courses and quizzes for effective learning experiences.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "User Registration & Access Control",
          description:
            "Manage student, instructor, and admin roles with secure login and role-based access permissions.",
          icon: "/assets/images/icon/service-icon2.png",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Assignment Tracking",
          description:
            "Allow students to submit assignments and instructors to review, grade, and provide feedback in one place.",
          icon: "/assets/images/icon/service-icon3.png",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Video Integration & Live Classes",
          description:
            "Seamlessly integrate recorded videos or conduct real-time classes using popular streaming platforms.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Certificates & Reports",
          description:
            "Automatically generate course completion certificates and detailed performance reports for learners.",
          icon: "/assets/images/icon/service-icon1.png",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        ]}/>
        <OurServicesSection/>
        <FeqSection feqdata={[
          {
            question:"Can we integrate payment gateways for paid courses? ",
            answer:"Yes, we offer full eCommerce integration."
          }

        ]}/>
    </div>
  )
}
