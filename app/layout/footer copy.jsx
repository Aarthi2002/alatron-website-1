'use client'
import React from 'react'
import Image from 'next/image'
import { COLORLOGOPATH } from '../utility/constant';

const Footer = () => {
  return (
    <footer>
      <div className="">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 brand-container pb-10 pt-6 md:pt-10">
          
          {/* Left Section */}
          <div className="w-full md:w-2/5 flex flex-col items-start justify-around gap-5 md:gap-0">
            <Image src={COLORLOGOPATH} width={200} height={100} alt="logo" className="w-[150px] h-auto"/>
            <div className="text-[16px] mt-5">
              <p className="text-[var(--light-blue)] mb-2">NO.175, Chandragiri Building 2nd Floor,</p>
              <p className="text-[var(--light-blue)] mb-2">Avaram Playam RD, New Sidhapudur Coimbatore.</p>
              <p className="text-[var(--light-blue)] mb-2">TamilNadu 641044</p>
              <p className="text-[var(--light-blue)]">Phone: 
                <a className="text-[var(--primary-color)] hover:text-[var(--dark-blue)]" href="tel:+919952844699">+91 99528 44699</a>
              </p>
            </div>
            </div>

            
                    
          {/* Right Section */}
          <div className="navSec w-full md:w-3/5 font-Manrope">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              <li className="flex flex-col gap-3">
                <h6 className="text-[18px] text-[#000]">IT Services</h6>
                <span className="text-[16px] text-[var(--light-blue)]">Managed IT</span>
                <span className="text-[16px] text-[var(--light-blue)]">Cyber Security</span>
                <span className="text-[16px] text-[var(--light-blue)]">Custom Software</span>
                <span className="text-[16px] text-[var(--light-blue)]">IT Support</span>
              </li>
              <li className="flex flex-col gap-3">
                <h6 className="text-[18px] text-[#000]">Industries</h6>
                <span className="text-[16px] text-[var(--light-blue)]">Banking</span>
                <span className="text-[16px] text-[var(--light-blue)]">Capital Markets</span>
                <span className="text-[16px] text-[var(--light-blue)]">Enterprise Technology</span>
                <span className="text-[16px] text-[var(--light-blue)]">Manufacturing</span>
                <span className="text-[16px] text-[var(--light-blue)]">Healthcare</span>
                <span className="text-[16px] text-[var(--light-blue)]">Higher Education</span>
              </li>
              <li className="flex flex-col gap-3">
                <h6 className="text-[18px] text-[#000]">Company</h6>
                <a href="/about" className="text-[16px] hover:text-[var(--primary-color)] text-[var(--light-blue)]">About</a>
                <a href="/case-study" className="text-[16px] hover:text-[var(--primary-color)] text-[var(--light-blue)]">Case Studies</a>
                <a href="https://www.google.com/maps/place/11%C2%B001'16.2%22N+76%C2%B058'27.8%22E/" className="text-[16px] hover:text-[var(--primary-color)] text-[var(--light-blue)]">Locations</a>
                <a href="/career" className="text-[16px] hover:text-[var(--primary-color)] text-[var(--light-blue)]">Careers</a>
              </li>
              <li className="flex flex-col gap-3">
                <h6 className="text-[18px]">Support</h6>
              </li>
            </ul>
          </div>
        </div>
        </div>

      {/* Footer Bottom */}
      <div className="border-solid border-t-2 py-8 text-center">
        <p className="text-[var(--light-blue)] text-[16px]">Copyright 2025 Shrewd Business Solutions.</p>
      </div>
    </footer>
  )
}

export default Footer;
