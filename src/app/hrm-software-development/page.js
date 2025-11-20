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
            heading:"HRM Software Development (Simplify HR Operations with Automation)",
            desc:"Empower your HR department with OnePixelSoft’s powerful Human Resource Management Software. Manage employees, track attendance, handle payroll, and monitor performance — all in one place."
        }}/>
        <AboutSilder/>
        <OurServicePoints serviceData={{
            heading:"HRM Software Development",
            paragraph1:"Human Resources (HR) is undoubtedly one of the most important assets of any organization, small or large. Effective Human Resource Management (HRM) systems are most important for controlling an organization's most precious asset: its people. Whether recruitment, training, or retention, HRM applications play an important part in boosting productivity and streamlining HR functions.The HRM Software Development process is intended to simplify these processes, from recruiting new employees to holding onto current ones, and managing day-to-day activities. HR departments are usually segmented into smaller, manageable sections, each taking care of a particular section of human resource management.",
            heading1:"HRMS Development Process We Adopt At Onepixel Soft",
            poits1:["Time tracking With Onepixel Soft’s HRMS, you can efficiently track the attendance and  of every employee. Our software centralizes all time-tracking data, saving HR teams valuable time by automating the process and reducing human error.","Performance Evaluation Our HRMS solution offers comprehensive performance tracking for each employee. It helps HR professionals monitor individual progress, track goals, and conduct evaluations based on real-time performance data. This allows for more informed decisions regarding promotions, appraisals, and employee development.",
            "Employee Management Onepixel Soft’s HRMS provides a streamlined approach to managing your workforce. Our solution enables HR teams to support employees in their day-to-day work, fostering growth and productivity. It’s designed to create a positive work environment, helping businesses get the best out of their employees.",
            "More control Our HRMS gives you complete control over all HR functions. By storing reports and employee data in one centralized system, the entire process of monitoring and managing becomes more efficient and easier to handle. Whether it’s tracking employee performance, payroll management, or attendance, our HRMS solution makes it all more organized and accessible."]
        }}/>
        <OurWebsiteDevelopment servicesdata={[
          {
          title: "Employee Management",
          description:
            "Easily manage employee records, roles, and departments in one centralized system.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#e6f8f0",
          link: "/service-details",
        },
        {
          title: "Attendance & Leave Tracking",
          description:
            "Automate attendance logs, leave requests, and approvals to save time and improve accuracy.",
          icon: "/assets/images/icon/service-icon2.webp",
          bgClass: "bg-yellow-100",
          color: "#f3f3f3",
          link: "/service-details",
        },
        {
          title: "Payroll Processing",
          description:
            "Generate error-free payroll with automatic salary calculations, tax deductions, and payslip generation.",
          icon: "/assets/images/icon/service-icon3.webp",
          bgClass: "bg-yellow-100",
          color: "#f3edff",
          link: "/service-details",
        },
        {
          title: "Performance Evaluation",
          description:
            "Track goals, review performance, and provide actionable feedback to boost employee productivity.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        {
          title: "Employee Self-Service Portal",
          description:
            "Empower employees to access their profiles, apply for leaves, and view payslips directly through their dashboard.",
          icon: "/assets/images/icon/service-icon1.webp",
          bgClass: "bg-yellow-100",
          color: "#fde6eb",
          link: "/service-details",
        },
        ]}/>
        <OurServicesSection/>
        <FeqSection feqdata={[
          {
            question:"Is your HRM software cloud-based?",
            answer:" Yes, you can access it anytime, anywhere securely."
          }
        ]}/>

    </div>
  )
}
