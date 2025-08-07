"use client";
import React, { useState } from "react";
import Image from "next/image";

const HeroSlider = () => {
  const [expandedItems, setExpandedItems] = useState({ 0: true });

  const toggleExpanded = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const contentItems = [
    {
      title: "Customer can Rent hassle-free",
      description:
        "No more callings to vendors or guessing availability. Alatron gives you access to reliable, verified equipment with clear pricing, fast booking, and on-time delivery.",
    },
    {
      title: "Turn Idle Machines into Income",
      description:
        "Transform your unused equipment into a revenue stream. List your machinery on our platform and start earning from assets that would otherwise sit idle.",
    },
    {
      title: "Scale Without Heavy Investment",
      description:
        "Grow your operations without the burden of purchasing expensive equipment. Access the tools you need when you need them, keeping your capital free for other investments.",
    },
    {
      title: "Support from Alatron",
      description:
        "Our dedicated team provides comprehensive support throughout your rental journey. From equipment selection to delivery coordination, we're here to ensure your success.",
    },
  ];
  return (
    <section className="relative bg-white py-2 lg:py-12 overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
          <div className="w-4 h-[2px] bg-[#1961A4]"></div>
          <span className="text-[#1961A4] font-medium font-Inter text-xs sm:text-sm uppercase tracking-wider">
            what more
          </span>
        </div>

        <h1 className="text-3xl xl:text-4xl font-semibold text-[#161C2D] mb-2 font-Poppins">
          Made to Serve Every Player in the Field
        </h1>
        <p className="text-lg md:text-md text-[#4D4D4D] max-w-3xl mx-auto leading-relaxed font-Roboto">
          Alatron simplifies heavy equipment rentals for everyone involved.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ">
        {/* Left Side - Expandable Content */}
        <div className="space-y-4">
          {contentItems.map((item, index) => {
            const isOpen = expandedItems[index];

            return (
              <div
                key={index}
                className={`rounded-xl transition-all duration-300 border-blue-200 shadow-lg ${
                  isOpen
                    ? "border-white bg-white"
                    : "border border-gray-200 bg-[#F5F9FF] hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  className={`w-full flex items-center justify-between p-6 text-left rounded-xl ${
                    isOpen ? "bg-white" : "bg-[#F5F9FF]"
                  }`}
                >
                  <h3
                    className={`text-sm md:text-base font-semibold font-Poppins pr-4 ${
                      isOpen ? "text-[#161C2D]" : ""
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={`w-6 h-6 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-[#1A84FF] flex items-center justify-center transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 bg-white rounded-b-xl font-Roboto font-normal">
                    <h6 className="text-[#4D4D4D] leading-relaxed">
                      {item.description}
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side - Image Section */}
        {/* <div className="relative">
          <div className="relative z-10 mb-6">
            <Image
              src="/assets/home/man-1.png"
              alt="Construction worker with hard hat"
              width={500}
              height={1000}
              className="w-full h-auto max-w-sm mx-auto"
              priority
            />
          </div> */}
          <div className="relative">
  <div className="relative z-10 mb-6">
    <Image
      src="/assets/home/man-1.png"
      alt="Construction worker with hard hat"
      width={500}
      height={1000}
      className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg mx-auto"
      priority
    />
</div>

        </div>
      </div>
    </div>
  </section>
);
}

  
  

export default HeroSlider;
