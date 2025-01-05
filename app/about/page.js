import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className='absolute w-full'>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
<<<<<<< HEAD
      <main className="p-8 text-center">
        <section className="ml:mx-48 md:mx-28 sm:mx-12">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to the HRM System, the ultimate solution for seamless job
            posting and integrated Human Resource Management (HRM). We
            specialize in empowering organizations to attract, manage, and
            retain top talent through a unified, user-friendly platform. In
            today’s fast-paced business environment, recruiting and managing
            employees effectively is crucial for organizational success. That’s
            why we’ve built an all-in-one HRM system designed to simplify every
            step of the talent management process, from recruitment to employee
            engagement.
          </p>
        </section>

        <section className="ml:mx-48 md:mx-28 sm:mx-12">
          <h1 className="text-3xl font-bold mb-4">What We Offer</h1>
          <p className="text-lg mb-6">
            Job Posting Made Easy: Post job openings across multiple platforms
            with just one click. Customize job listings to highlight your unique
            brand and attract the best candidates.
          </p>
          <p className="text-lg mb-6">
            Streamlined Applicant Tracking: Our advanced ATS (Applicant Tracking
            System) allows you to sort, filter, and review applications
            efficiently. Focus on finding the right talent while saving time and
            resources.
          </p>
          <p className="text-lg mb-6">
            Integrated HR Features: Manage employee data, onboarding, payroll,
            attendance, and performance reviews – all in one place.
          </p>
          <p className="text-lg mb-6">
            Analytics and Insights: Use data-driven insights to improve your
            hiring process, monitor employee performance, and make informed
            decisions about workforce management.
          </p>
        </section>
        
        <section className="ml:mx-48 md:mx-28 sm:mx-12">
          <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
          <p className="text-lg mb-6">
            Our mission is to transform how businesses manage their talent and
            HR processes. By offering innovative, integrated tools, we empower
            organizations to build productive teams and achieve their goals
            while providing candidates with meaningful career opportunities.
          </p>
        </section>
=======
      <main className="mt-36 p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the HRM System</h1>
        <p className="text-lg mb-6">
          Post jobs and allow applicants to apply seamlessly. Simplify your hiring process with our platform.
        </p>
>>>>>>> 125666bae46d0eb1eaa8b8750740b28c5fa835e9
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
