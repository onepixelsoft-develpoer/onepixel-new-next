
"use client"
import CommenHero from '@/Commen-components/CommenHero'
import OurLocation from '@/Commen-components/OurLocation'
import CareerSection from '@/components/about-us/CareerSection';
import ContactFrom from '@/components/contact/ContactFrom'
import React from 'react'


  

export default function Career() {

  return (
    <div>
        <CommenHero data={{
            slug:"Career",
            heading:"Career",
            des:"We will help a client's problems to develop the products they have with high quality Change the appearance.",
        }}/>
        <OurLocation/>
        <CareerSection/>
        {/* <ContactFrom/> */}
    </div>
  )
}
