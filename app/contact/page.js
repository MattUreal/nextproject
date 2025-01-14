"use client"

import ContactForm from '@/components/contactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'


const Contact = () => {
  return (
    <div className='absolute w-full '>
      <Navbar/>
      <div className='mt-36  flex items-center '>
        {/* <ContactForm/> */}
        <ContactForm/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Contact