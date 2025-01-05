import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { StickyNote, Upload } from 'lucide-react';

export default function HomePage() {
  return (
    <div className='absolute'>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="mt-36 p-8 text-center">
        
       
        <section >
        <h1 className="text-3xl font-bold mb-4">Welcome to the HRM System</h1>
        <p className="text-lg mb-6">
          This user-friendly platform provides a comprehensive suite of HR tools
          designed to simplify and enhance all aspects of human resource
          management.
        </p>
        {/* Key Features */}
        <section >
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
  <div className="border p-4 rounded shadow">
    <h3 className="text-xl font-bold">Employee Self-Service:</h3>
    <p className="mt-2"> Employees can access and update their personal information, view pay stubs, request time off, and enroll in benefits.
    </p>
  </div>
  <div className="border p-4 rounded shadow">
    <h3 className="text-xl font-bold">Recruitment & Onboarding: </h3>
    <p className="mt-2"> Streamline the hiring process from job postings to onboarding with automated workflows and applicant tracking.</p>
  </div>
  <div className="border p-4 rounded shadow">
    <h3 className="text-xl font-bold">Performance Management: </h3>
    <p className="mt-2"> Set goals, conduct performance reviews, and track employee development with ease.</p>
  </div>
  <div className="border p-4 rounded shadow">
    <h3 className="text-xl font-bold">Payroll & Benefits:</h3>
    <p className="mt-2"> Process payroll accurately and efficiently, manage employee benefits, and ensure compliance with all relevant regulations.</p>
  </div>
  <div className="border p-4 rounded shadow">
    <h3 className="text-xl font-bold">Time & Attendance:</h3>
    <p className="mt-2"> Track employee time and attendance, manage leave requests, and generate accurate reports.
    </p>
  </div>
  <div className="border p-4 rounded shadow">
    <h3 className="text-xl font-bold">Reporting & Analytics:</h3>
    <p className="mt-2"> Gain valuable insights into your workforce with customizable reports and dashboards.</p>
  </div>
</div>
          
        </section>

       
      </main>

      <div className=" py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-xl">
      <h2 className="text-pretty text-3xl font-semibold tracking-tight  sm:text-4xl">Meet our Team</h2>
      <p className="mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-6">
          <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="photo"/>
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center gap-x-6">
          <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="photo"/>
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li><li>
        <div className="flex items-center gap-x-6">
          <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="photo"/>
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li><li>
        <div className="flex items-center gap-x-6">
          <img className="size-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="photo"/>
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
