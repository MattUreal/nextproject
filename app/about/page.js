import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />
     

      {/* Main Content */}
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the HRM System</h1>
        <p className="text-lg mb-6">
          Post jobs and allow applicants to apply seamlessly. Simplify your hiring process with our platform.
        </p>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}