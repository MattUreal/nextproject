import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleUserRound,Upload } from 'lucide-react';

const Navbar =()=>{
    return (
        
        <nav className="flex justify-between items-center p-4 bg-gray-800">
         <Link className="" href="/homepage">
                <Image className="size-20 rounded-full" src='/hrm-logo.jpg' alt="logo" width={74} height={29} />
                
            </Link>
        
        <ul className="flex space-x-4">
          <li>
            <Link href="/" >
              <h2 className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</h2>
            </Link>
          </li>
          <li>
            <Link href="/offerings" >
              <h2 className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Job Offerings</h2>
            </Link>
          </li>
          <li>
            <Link href="/about" >
              <h2 className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</h2>
            </Link>
          </li>
          <li>
            <Link href="/contact" >
              <h2 className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</h2>
            </Link>
          </li>
        </ul>
        <div className="flex space-x-2 ">
            <Link href="/"><Button variant="outline"><Upload/>Upload Resume</Button></Link>
            <Link href="/"><Button ><CircleUserRound size={40}/>Login</Button></Link>
            
            
        </div>
        
      </nav>
    )
}

export default Navbar