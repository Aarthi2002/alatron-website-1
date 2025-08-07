"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { FadeBottom } from "@/app/utility/animation";
import { usePathname } from "next/navigation";
import { AppContext } from "../utility/context/context-api";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import BasicService from "../service-api/base-api-service";
import { useRouter } from "next/navigation";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await BasicService.topDashboard();
        // console.log("API Response:", response); // Debugging log

        if (response?.status) {
          setDashboardData(response.data);
        } else {
          console.error("API Error:", response?.message || "Unknown error");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchDashboardData();
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => setMenuOpen((prev) => !prev);
   
  //Route the Get a Quote section
  const router = useRouter();

  const handleClick = (e) => {
    
    e.preventDefault();
    router.push("/#Quote"); // Navigate to the page
    setTimeout(() => {
      document.getElementById("Quote")?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Small delay to ensure navigation happens first
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg shadow-[#bababa]/20">
      <div className="flex flex-col lg:flex-row  items-center justify-between px-4 py-4 relative">
        
        {/* Hiring Text - Only show when data is loaded */}
        {dashboardData?.news_enable && <HiringText newsData={dashboardData.news} />}

        {/* Logo */}
        <div className="flex items-center justify-between  w-full lg:w-auto">
          <div className="flex items-center cursor-pointer ">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Image
                src={dashboardData?.logo} 
                width={70}
                height={75}
                alt="logo"
                className="xs:w-[40px] md:w-[70px]  h-auto"
              />
            )}
          </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="secondary"
              className="rounded-md shadow-primary/20 shadow-lg px-1 py-[20px] border bg-white"
              onClick={handleMenuClick}
            >
              {menuOpen ? <FiX className="text-primary w-8 h-8" /> : <FiMenu className="text-primary w-8 h-8" />}
            </Button>
          </div>
        </div>

        {/* Large screens List */}
        <nav className="hidden lg:flex w-auto lg:space-x-14 items-center">
        <ul className="flex lg:flex-row space-x-8 font-semibold mt-[14px] pt-6">
         {["/", "/services", "/about", "/case study", "/career"].map((route, index) => (
              <li key={index}>
                <Link href={route} className={`${pathname === route ? "text-primary" : "text-[#000] text-[16px]"} hover:text-primary`}>
                  {route === "/" ? "Home" : route.replace("/", "").replace("_", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      {/* Mobile Menu List */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className="absolute top-22 left-0 w-full h-fit bg-white rounded-b-3xl shadow-lg z-20 lg:hidden border-b border-t-0 border-[#acbefa]"
            variants={FadeBottom(0.2)}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col gap-2 text-center p-5">
              {["/", "/services", "/about", "/case-study", "/career"].map((route, index) => (
                <Link
                  key={index}
                  href={route}
                  className={`${pathname === route ? "text-primary" : "text-[#858585] text-[15px]"} hover:text-primary`}
                  onClick={() => setMenuOpen(false)}
                >
                  {route === "/" ? "Home" : route.replace("/", "").replace("_", " ")}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const HiringText = ({ newsData }) => {
  const { hirestatus } = useContext(AppContext);

  return hirestatus ? (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 10 }}
      className="absolute top-0 left-0 right-0 flex gap-2 items-center justify-center p-3 border-b-2 border-light lg:w-4/6 xs:w-48 md:w-96 mx-auto"
    >
      <div className="flex gap-2 items-center">
        <HiOutlineSpeakerphone className="animate-pulse text-lg font-bold" />
        <p className=" xs:text-[12px] text-[16px] lg:hidden">Now Hiring :</p>
      </div>
      <p className="hidden lg:block text-[16px] opacity-75">{newsData}</p>
      <Link href="/" className="text-primary underline xs:text-[12px] ">Apply</Link>
    </motion.div>
  ) : null;
};
