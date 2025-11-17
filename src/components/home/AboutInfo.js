import React from 'react'
import SmallTitle from '../../Commen-components/SmallTitle'

export default function AboutInfo() {

  return (
    <section className=' w-full pt-15 xl:px-40 lg:px-10 px-5 bg-sub-three' >
        <div className='about-heading-container flex flex-wrap justify-center pb-10 wow animate__animated  animate__fadeInUp' data-wow-delay="0.5s">
            <div className='left-side-heding-text xl:basis-[60%] basis-full ' >
                <SmallTitle smText="About Us" exClass="text-[#751212]  text-md"/>
                <h2 className='xl:text-[3rem] text-[2rem] xl:lending-[3rem] text-black xl:w-[80%] w-full'>Driving Innovation for Business Growth</h2>
            </div>
            <p className='wow font-info text-md xl:basis-[40%] basis-full text-justify mt-3 ' >Driving Innovation for Business Growth As a trusted IT & Software Development Company in Jaipur, OnePixelSoft provides end-to-end digital solutions — from website and mobile app development to branding and digital marketing. With over 10+ years of experience and a dynamic team of 60+ experts, we have successfully delivered 800+ projects for 100+ satisfied clients worldwide.</p>
        </div>
    </section>
  )
}
