"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BannerCarousel({ bannerDetails }) {
  // Default data in case no props are passed
  const defaultSlides = [
    {
      id: 1,
      image: "/assets/home/Img.webp",
      title: "We are transforming the world with Innovative",
      description: "We harness technology to drive Innovation industries and creating a smarter, more connected future."
    },
    {
      id: 2,
      image: "/assets/home/Img1.webp",
      title: "Innovation for tomorrow",
      description: "Building the future with cutting-edge solutions."
    },
    {
      id: 3,
      image: "/assets/home/Img2.webp",
      title: "Technology that matters",
      description: "Creating impact through intelligent design."
    },
  ];

  // Use bannerDetails if provided, otherwise use default slides
  const slides = bannerDetails || defaultSlides;

  // Splide carousel settings
  const settings = {
    type: "loop",
    autoplay: true,
    interval: 4000,
    speed: 1200,
    pagination: false,
    arrows: false,
    focus: "center",
    perPage: 1,
  };

  return (
    <div className="relative w-full">
      <Splide options={settings}>
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="relative h-screen w-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  {slide.title && (
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      {slide.title}
                    </h2>
                  )}
                  {slide.description && (
                    <p className="text-lg md:text-xl mb-8">
                      {slide.description}
                    </p>
                  )}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                    Get Your Quotation
                  </button>
                </motion.div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}