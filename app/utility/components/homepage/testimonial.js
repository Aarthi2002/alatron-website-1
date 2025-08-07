"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

export default function HomeTestimonial({ testimonial }) {
  const settings = {
    type: "loop",
    autoplay: true,
    interval: 4000,
    speed: 1200,
    pagination: true,
    paginationClickable: true, // Fixed typo: 'paginatiomClickable' => 'paginationClickable'
    arrows: false,
    perPage: 2,
    perMove: 1,
    
    breakpoints: {
      768: {
        // Mobile and small screens
        perPage: 1,
      },
      1024: {
        // Tablets and medium screens
        perPage: 1,
      },
      1280: {
        // Large screens
        perPage: 2,
      },
    },
  };

  return (
    <div className="mt-16">
      <Splide options={settings}>
        {testimonial.map((testimonials, index) => (
          <SplideSlide key={testimonials.id}> {/* Fixed key to use 'testimonials.id' */}
            <div className="flex flex-col md:flex-row gap-5 mx-3 md:mx-[5] px-5 py-10 bg-[#fff]">
              <div className="flex-shrink-0 text-center">
                <Image
                  src={testimonials.profile_picture} 
                  width={80}
                  height={80}
                    className="w-[80px] h-[80px] object-contain mx-auto"
                  alt={`${testimonials.name}'s Avatar`}
                  // className="mx-6"
                  // unoptimized={true} // Uncomment if needed
                />
                <h3 className="text-[16px] md:text-[18px] text-[var(--dark-blue)] mt-4">
                  {testimonials.name}
                </h3>
                <p className="text-sm md:text-[14px] leading-normal text-[#627792] pt-1">
                  {testimonials.address}
                </p>
              </div>

              <div className="relative flex-grow">
                <h1 className="text-[#b1b1b157] text-[150px] leading-none absolute top-[-42px] left-[-20px]">
                  “
                </h1>
                <p className="text-[#333] text-sm md:text-base leading-[40px] pl-6">
                  {testimonials.description}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
