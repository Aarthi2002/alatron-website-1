
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#151C2B] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 pb-10 pt-8 md:pt-12">
          
          {/* Left Section - Reduced width and spacing */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {/* Logo */}
            <Link href="/">
              <Image src="/assets/home/logo.svg" width={200} height={100} alt="logo" className="w-[140px] h-auto"/>
            </Link>
            
            {/* Description - More compact */}
            <div className="space-y-1">
              <p className="text-[#9CA3AF] font-Inter text-[16px] font-light eading-relaxed">
                Alatron provides reliable, high performance heavy equipment rentals to keep your projects running smoothly and efficiently.
              </p>
            </div>

            {/* Contact Info - More compact */}
            <div className="space-y-1">
              <p className="text-[#BBBBBB] font-Roboto text-[14px] font-semibold">
                Phone: <a className="text-[#4FC3F7] hover:text-[#1E88E5] font-Roboto font-light underline text-[#BBBBBB]" href="tel:+6313434155"> +63 134341551</a>
              </p>
              <p className="text-[#BBBBBB] font-Roboto text-[14px] font-semibold">
                Mail: <a className="text-[#4FC3F7] hover:text-[#1E88E5] font-Roboto font-light underline text-[#BBBBBB]" href="mailto:Alatron@gmail.com"> Alatron@gmail.com</a>
              </p>
            </div>

            {/* Social Icons - Reduced spacing */}
            <ul className="flex items-center space-x-2 mt-3">
              {[
                { href: "https://x.com/shrewdbs?s=11", src: "/assets/home/Twitter.webp", alt: "Twitter" },
                { href: "https://www.facebook.com/profile.php?id=100089812213858", src: "/assets/home/facebook.webp", alt: "Facebook" },
                { href: "https://www.instagram.com/_shrewd_business_solutions/", src: "/assets/home/Instagram.webp", alt: "Instagram" },
                { href: "https://youtube.com/@shrewdbusinesssolutions6506?si=TBgmO_AeiiWALfuF", src: "/assets/home/you.webp", alt: "YouTube" },
                { href: "https://www.linkedin.com/company/96626196/", src: "/assets/home/linkedin.webp", alt: "LinkedIn" },
                { href: "https://www.whatsapp.com/company/96626196/", src: "/assets/home/Whatsapp.webp", alt: "WhatsApp" },
              ].map((icon, index) => (
                <li key={index}>
                  <a href={icon.href} target="_blank" rel="noreferrer">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <Image src={icon.src} alt={icon.alt} width={30} height={30} />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
                    
          {/* Right Section - Increased width */}
          <div className="w-full md:w-2/3 font-Manrope">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
<li className="flex flex-col gap-3">
  <h6 className="text-[18px] text-white font-Outfit font-semibold mb-2">Quick Links</h6>
  <span className="text-[16px] text-[#BBBBBB] hover:text-[#4FC3F7] font-Roboto font-regular">Home</span>
  <span className="text-[16px] text-[#BBBBBB] hover:text-[#4FC3F7] font-Roboto font-regular">About</span>
  <span className="text-[16px] text-[#BBBBBB] hover:text-[#4FC3F7] font-Roboto font-regular">Blogs</span>
  <span className="text-[16px] text-[#BBBBBB] hover:text-[#4FC3F7] font-Roboto font-regular">Contact Us</span>
</li>

              
              <li className="flex flex-col gap-3">
                <h6 className="text-[18px] text-white font-Outfit font-semibold mb-2">Equipment's</h6>
                <span className="text-[16px] text-[#BBBBBB] font-Roboto font-regular hover:text-[#4FC3F7] ">Excavators</span>
                <span className="text-[16px] text-[#BBBBBB] font-Roboto font-regular hover:text-[#4FC3F7] ">Backhoe Loaders</span>
                <span className="text-[16px] text-[#BBBBBB] font-Roboto font-regular hover:text-[#4FC3F7] ">Telehandlers</span>
                <span className="text-[16px] text-[#BBBBBB] font-Roboto font-regular hover:text-[#4FC3F7] ">Augers</span>
                <span className="text-[16px] text-[#BBBBBB] font-Roboto font-regular hover:text-[#4FC3F7] ">Rollers</span>
                <span className="text-[16px] text-[#BBBBBB] font-Roboto font-regular hover:text-[#4FC3F7] ">Tillers</span>
              </li>
              
              <li className="flex flex-col gap-3">
                <h6 className="text-[18px] text-white font-Outfit font-semibold mb-2">Industries</h6>
                <span className="text-[16px] hover:text-[#4FC3F7] text-[#BBBBBB] font-Roboto font-regular ">Earthmoving Equipment</span>
                <span className="text-[16px] hover:text-[#4FC3F7] text-[#BBBBBB] font-Roboto font-regular ">Lifting & Material Handling</span>
                <span className="text-[16px] hover:text-[#4FC3F7] text-[#BBBBBB] font-Roboto font-regular ">Construction & Attachments</span>
                <span className="text-[16px] hover:text-[#4FC3F7] text-[#BBBBBB] font-Roboto font-regular ">Compaction Equipment</span>
                <span className="text-[16px] hover:text-[#4FC3F7] text-[#BBBBBB] font-Roboto font-regular ">Landscaping & Agriculture</span>
                <span className="text-[16px] hover:text-[#4FC3F7] text-[#BBBBBB] font-Roboto font-regular ">Demolition & Cleanup</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#9CA3AF] py-8 px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left gap-2 md:gap-0">
          <p className="text-[#BBBBBB] text-[14px] font-Roboto font-regular ">Copyright @ Alatron. All Right Reserved.</p>
          <p className="text-[#BBBBBB] text-[14px]">
            
            <span className="hover:text-[#4FC3F7] hover:decoration-[#4FC3F7] text-[#9CA3AF] decoration-[#9CA3AF] underline font-Roboto font-regular">
  Privacy Policy
</span>
<span className="mx-2 text-[#9CA3AF]">|</span>
<span className="hover:text-[#4FC3F7] hover:decoration-[#4FC3F7] text-[#9CA3AF] decoration-[#9CA3AF] underline font-Roboto font-regular">
  Terms and Conditions
</span>

          </p>
        </div>
      </div>
   
    </footer>
  )
}

export default Footer;