"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky py-0 mb-8 md:py-4 top-0 z-50 shadow ${isScrolled ? "bg-white shadow-lg" : "bg-white"} transition-all duration-300`}>
      <nav className="w-[90vw] mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/dinero.png"
            alt="Dinero logo"
            width={80}
            height={80}
            priority
            unoptimized
            loader={({ src }) => src}
          />
        </Link>

        <ul className="hidden md:flex flex-1 justify-end items-center gap-12">
          <li className="cursor-pointer hover:scale-110">
            <Link href="#faq">FAQs</Link>
          </li>
          <li className="cursor-pointer hover:scale-110">
            <Link href="#">Contact Us</Link>
          </li>
          <li>
            <Link href="#" className="w-44 px-10 py-4 bg-dineroBlue rounded-lg text-white hover:scale-110">
              Get The App
            </Link>
          </li>
        </ul>

        <div className="hamburger-menu flex flex-col items-end md:hidden flex-1 justify-end" onClick={() => setMobile(!mobile)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-dineroBlue">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>

      <div className={`${mobile ? "" : "hidden"} w-full absolute z-10 bg-white md:hidden`}>
        <ul className='flex flex-col md:block flex-1 justify-end items-start text-mb-text-blue uppercase font-bold pb-4 w-[90vw] mx-auto'>
          <li className='block w-full cursor-pointer border-b py-2 border-slate-300 md:hover:scale-110'>
            <Link href="#faq">FAQs</Link>
          </li>
          <li className='block w-full cursor-pointer border-b py-2 border-slate-300 md:hover:scale-110'>
            <Link href="/">Contact Us</Link>
          </li>
          <li className="flex items-center w-full border-b py-2 border-slate-300">
            <Link href="/" className="w-48 px-10 py-4 bg-dineroBlue rounded-lg text-white hover:scale-110">
              Get The App
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
