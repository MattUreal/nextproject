'use client'

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";
import { CircleUserRound,Upload,Sun,Moon } from 'lucide-react';

const Navbar =()=>{
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/offerings', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => router.pathname === path;

    return (
      <nav className="  text-black border-b-1 border-cyan-50 p-4 rounded shadow dark:text-gray-50">
      <div className=" mx-auto items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Link href="/homepage">
            <Image className="size-20 rounded-full" src='/hrm-logo.jpg' alt="logo" width={74} height={29} />
            </Link>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white ring-black dark:ring-white ring-inset ring-2   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6 text-black dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-black dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/">
              <h2 className={`hover:text-white hover:bg-black hover:rounded-xl dark:hover:bg-white dark:hover:text-black p-4 ${isActive('/about') ? 'bg-green-700 dark:bg-gray-600'  : ''}`}>Home</h2>
            </Link>
            <Link href="/offerings">
              <h2 className={`hover:text-white hover:bg-black hover:rounded-xl  dark:hover:bg-white dark:hover:text-black p-4 ${isActive('/offerings') ? 'bg-green-700 dark:bg-gray-600' : ''}`}>Job Offerings</h2>
            </Link>
            <Link href="/about">
              <h2 className={`hover:text-white hover:bg-black hover:rounded-xl  dark:hover:bg-white dark:hover:text-black p-4 ${isActive('/about') ? 'bg-green-700 dark:bg-gray-600'  : ''}`}>About</h2>
            </Link>
            
            <Link href="/contact">
              <h2 className={`hover:text-white hover:bg-black hover:rounded-xl  dark:hover:bg-white dark:hover:text-black p-4 ${isActive('/contact') ? 'bg-green-700 dark:bg-gray-600' : ''}`}>Contact</h2>
            </Link>
             {/* {navItems.map((item) => (
              <Link href={item.path} key={item.path}>
                <h2
                  className={`hover:text-gray-200 dark:hover:text-gray-400 px-3 py-2 rounded-md ${
                    router.pathname === item.path
                      ? 'bg-blue-700 dark:bg-gray-600'
                      : ''
                  }`}
                >
                  {item.label}
                </h2>
              </Link>
            ))} */}
            
          </div>
            <div className="hidden md:flex md:space-x-4  ">
              <Link href="/"><Button variant="outline"><Upload/>Upload Resume</Button></Link>
              <Link href="/"><Button><CircleUserRound size={40}/>Login</Button></Link>
              <button
              onClick={toggleTheme}
              className="p-2 rounded-md outline-offset-1 dark:outline-white"
              >
              {isDarkMode ? <Sun/> : <Moon className="dark:bg-black"/>}
              </button>
            </div>
            
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-5 pb-3 space-y-5 sm:px-3 flex flex-col items-center mr-0">
          <Link href="/">
              <h2 className="block text-base font-medium p-4 hover:rounded-xl hover:text-white hover:bg-black  dark:hover:bg-white dark:hover:text-black">Home</h2>
            </Link>
            <Link href="/offerings">
              <h2 className="block text-base font-medium p-4 hover:rounded-xl  hover:text-white hover:bg-black  dark:hover:bg-white dark:hover:text-black">Job Offerings</h2>
            </Link>
            <Link href="/about">
              <h2 className="block text-base font-medium p-4 hover:rounded-xl  hover:text-white hover:bg-black  dark:hover:bg-white dark:hover:text-black">About</h2>
            </Link>
            
            <Link href="/contact">
              <h2 className="block text-base font-medium p-4 hover:rounded-xl  hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">Contact</h2>
            </Link>
             <div className="flex flex-col items-center space-y-2 right-0">
            <Link href="/" ><Button variant="outline"><Upload/>Upload Resume</Button></Link>
            <Link href="/"><Button ><CircleUserRound size={20}/>Login</Button></Link>     
              </div>
              <button
              onClick={toggleTheme}
              className="p-2 rounded-md outline-offset-1 dark:outline-white"
              >
              {isDarkMode ? <Sun/> : <Moon className="dark:bg-black"/>}
            </button>
          </div>
         
        </div>
      )}
    </nav>
    )
}

export default Navbar