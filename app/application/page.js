import React from 'react'
import ApplicationForm from '@/components/applicationForm'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const Application = () => {
  return (
    <div className='h-full md:ml-4 mr-4 md:mr-32'>
        
        <ApplicationForm/>
        <Link href='/'>
        <Button className='md:ml-2 ml-6'>
            back to HomePage
        </Button>
        </Link>
    </div>
  )
}

export default Application