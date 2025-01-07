"use client"

import ContactForm from '@/components/contactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'


const Contact = () => {
  return (
    <div className='absolute w-full '>
      <Navbar/>
      <div className='m-4  flex items-center justify-center'>
        {/* <ContactForm/> */}
        <ContactForm/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Contact