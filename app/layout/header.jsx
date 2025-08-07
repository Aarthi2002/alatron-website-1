// // "use client";
// // import React, { useState, useEffect, useRef } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { FiMenu, FiX } from "react-icons/fi";
// // import { Button } from "@/components/ui/button";
// // import { usePathname, useRouter } from "next/navigation";
// // import { AppContext } from "../utility/context/context-api";
// // import { HiOutlineSpeakerphone } from "react-icons/hi";
// // import BasicService from "../service-api/base-api-service";

// // export default function Header() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [dashboardData, setDashboardData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [isServicesHovered, setIsServicesHovered] = useState(false);
// //   const [isIndustriesHovered, setIsIndustriesHovered] = useState(false);
// //   const [activeService, setActiveService] = useState({
// //     image: "/assets/service/hover-1.png",
    
// //   });
// //   const menuRef = useRef(null);
// //   const pathname = usePathname();
// //   const router = useRouter();

// //   // Service content data
  

// //   // Fetch logo from API
// //   useEffect(() => {
// //     const fetchDashboardData = async () => {
// //       try {
// //         const response = await BasicService.topDashboard();
// //         if (response?.status) {
// //           setDashboardData(response.data);
// //         } else {
// //           console.error("API Error:", response?.message || "Unknown error");
// //         }
// //       } catch (error) {
// //         console.error("Error fetching dashboard data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchDashboardData();
// //   }, []);

// //   // Close menu when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// //         setMenuOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   // Navigate to Quote section
// //   const handleQuoteClick = (e) => {
// //     e.preventDefault();
// //     router.push("/#Quote");
// //     setTimeout(() => {
// //       document.getElementById("Quote")?.scrollIntoView({ behavior: "smooth" });
// //     }, 100);
// //   };
// //   // Handle service item click
// //   const handleServiceClick = (serviceName) => {
// //     if (serviceContents[serviceName]) {
// //       setActiveService(serviceContents[serviceName]);
// //     }
// //   };

 
// //   return (
// //     <header className="sticky top-0 z-50 bg-[#161C2D] shadow-lg shadow-[#bababa]/20">
// //       <div className="max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between px-4 py-4 relative">
// //         {/* Logo Section */}
// //         <div className="flex items-center justify-between w-full lg:w-auto">
// //           {/* <Link href="/">
// //             <div className="flex items-center cursor-pointer">
// //               {loading ? (
// //                 <p>Loading...</p>
// //               ) : (
// //                 <Image
// //                   src={dashboardData?.logo}
// //                   width={120}
// //                   height={85}
// //                   alt="logo"
// //                   className="h-auto"
// //                 />
// //               )}
// //             </div>
// //           </Link> */}
// //                 <div className="flex items-center cursor-pointer">
// //                  <Image
// //                            src="/assets/home/logo.svg"
// //                            alt="logo Image"
// //                            className="w-[30vw] md:w-[10vw] h-auto rounded object-center"
// //                            width={30}
// //                            height={30}
// //                          />
// //                           </div>


// //           {/* Mobile Menu Toggle */}
// //           <div className="lg:hidden">
// //             <Button
// //               variant="secondary"
// //               className="rounded-md shadow-primary/20 shadow-lg px-1 py-[20px] border bg-white"
// //               onClick={() => setMenuOpen(!menuOpen)}
// //             >
// //               {menuOpen ? (
// //                 <FiX className="text-primary w-8 h-8" />
// //               ) : (
// //                 <FiMenu className="text-primary w-8 h-8" />
// //               )}
// //             </Button>
// //           </div>
// //         </div>

// //         {/* Desktop Nav */}
        
// //       </div>
// //     </header>
// //   );
// // }

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Button } from "@/components/ui/button";
// import { usePathname, useRouter } from "next/navigation";
// import BasicService from "../service-api/base-api-service";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const menuRef = useRef(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const response = await BasicService.topDashboard();
//         if (response?.status) {
//           setDashboardData(response.data);
//         } else {
//           console.error("API Error:", response?.message || "Unknown error");
//         }
//       } catch (error) {
//         console.error("Error fetching dashboard data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDashboardData();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
// <header className="sticky top-0 z-50 bg-[#081438]">
// <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between px-4 py-6 relative">
//         {/* Logo Section */}
//             <Image
//               src= "/assets/home/logo.svg"
//               alt="Logo"
//               className="w-[30vw] md:w-[10vw] h-auto object-contain"
//               width={120}
//               height={80}
//             />
          
//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex space-x-16 text-[#FFFFFF] font-poppins mx-auto">
//           <Link href="/" className="hover:text-blue-400">Home</Link>
//           <Link href="/about" className="hover:text-blue-400">About</Link>
//           <Link href="/blog" className="hover:text-blue-400">Blog</Link>
//           <Link href="/industries" className="hover:text-blue-400">Industries</Link>
//           <Link href="/contact" className="hover:text-blue-400">Contact</Link>
//         </nav>

//         {/* Download Button */}
//         <div className="hidden lg:block">
// <Button
//   className="flex items-center justify-between text-[#161C2D] font-semibold w-full rounded-xl px-4 py-2"
//   style={{
//     background: "linear-gradient(177deg, #FFF 2.99%, #424141 125.49%)"
//   }}
// >
//   <span>Download Application</span>
//   <img
//     src="/assets/home/down.svg"
//     alt="Download"
//     className="w-5 h-5 ml-2"
//   />
// </Button>

// </div>


//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden">
//           <Button
//             variant="secondary"
//             className="rounded-md shadow-primary/20 shadow-lg px-2 py-2 border bg-white"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <FiX className="text-primary w-6 h-6" />
//             ) : (
//               <FiMenu className="text-primary w-6 h-6" />
//             )}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div
//           ref={menuRef}
//           className="lg:hidden bg-[#161C2D] text-white px-8 pb-4 space-y-3"
//         >
//           <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
//           <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
//           <Link href="/industries" onClick={() => setMenuOpen(false)}>Industries</Link>
//           <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
//           <div className="pt-2">
            
//             <Button
//   className="text-[#161C2D] font-semibold w-full"
//   style={{
//     background: "linear-gradient(177deg, #FFF 2.99%, #424141 125.49%)"
//   }}
// >
//   Download Application
// </Button>

//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import BasicService from "../service-api/base-api-service";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await BasicService.topDashboard();
        if (response?.status) {
          setDashboardData(response.data);
        } else {
          console.error("API Error:", response?.message || "Unknown error");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#081438] ">
      {/* Decorative Line */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div> */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="2" viewBox="0 0 1000 2" fill="none" className="h-[1px] w-[1000px] flex-shrink-0">
    <path d="M0 1H1000" stroke="url(#paint0_linear)" strokeWidth="1" />
    <defs>
      <linearGradient id="paint0_linear" x1="0" y1="1.5" x2="1000" y2="1.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="0.5" stopColor="#CBCBCB" />
        <stop offset="1" stopColor="#999999" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
</div>

      
      <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between px-4 py-6 relative">
        {/* Logo Section */}
        <Image
          src="/assets/home/logo.svg"
          alt="Logo"
          className="w-[30vw] md:w-[10vw] h-auto object-contain"
          width={120}
          height={80}
        />
          
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-16 text-[#FFFFFF] font-poppins mx-auto">
          {/* <Link href="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link>
          <Link href="/blog" className="hover:text-blue-400 transition-colors duration-300">Blog</Link>
          <Link href="/industries" className="hover:text-blue-400 transition-colors duration-300">Industries</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact</Link> */}
          <ul className="flex space-x-16 text-white font-poppins text-[14px] font-normal">
        <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">About</li>
        <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Blog</li>
        <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Industries</li>
        <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Contact</li>
      </ul>
        </nav>

        {/* Download Button */}
        <div className="hidden lg:block">
          <Button
            className="flex items-center justify-between text-[#161C2D] font-medium w-full rounded-xl px-3 py-4 font-Poppins hover:scale-105 transition-transform duration-300"
            style={{
              background: "linear-gradient(177deg, #FFF 2.99%, #424141 125.49%)"
            }}
          >
            <span>Download Application</span>
            <img
              src="/assets/home/down.svg"
              alt="Download"
              className="w-5 h-5 ml-2"
            />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button
            variant="secondary"
            className="rounded-md px-2 py-2 border"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FiX className="text w-6 h-6" />
            ) : (
              <FiMenu className="text w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-[#161C2D] text-white px-8 pb-4 space-y-3 border-t border-blue-400/20"
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-blue-400 transition-colors duration-300">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-blue-400 transition-colors duration-300">About</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-blue-400 transition-colors duration-300">Blog</Link>
          <Link href="/industries" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-blue-400 transition-colors duration-300">Industries</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-blue-400 transition-colors duration-300">Contact</Link>
          <div className="pt-2">
            <Button
              className="text-[#161C2D] font-semibold w-full rounded-xl"
              style={{
                background: "linear-gradient(177deg, #FFF 2.99%, #424141 125.49%)"
              }}
            >
              Download Application
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}