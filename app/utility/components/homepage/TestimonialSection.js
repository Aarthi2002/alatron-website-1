

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: '/assets/home/testi.jpg',
      quote: "We've worked with several rental companies before, but none matched the consistency and professionalism of Alatron. Every piece of equipment we received was in top condition — clean, serviced, and ready to use. The delivery was always on time, and the support team stayed in touch throughout the project. It's not just about renting machines.",
      name: "Anit Kumar",
      position: "Founder of JCB Construiron"
    },
    {
      id: 2,
      image: '/assets/home/testi.jpg',
      quote: "As a contractor, time is everything. Even a day's delay can cost a project. But since we started using Alatron, equipment rentals have become the easiest part of our job. From seamless mobile booking to real-time tracking, the entire process is efficient and reliable.",
      name: "Anit Kumar",
      position: "Founder of JCB Construiron"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 px-4 bg-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-4 h-0.5 bg-[#1961A4]"></div>
            <span className="text-[#1961A4] font-medium text-md tracking-wide font-Inter">
              Testimonials
            </span>
          </div>
          <h2 className="flex text-center justify-center text-3xl md:text-3xl lg:text-4xl font-semibold text-[#161C2D] font-Poppins mb-4 mx-auto">
            Hear from Real Customers
          </h2>
          <p className="text-[#4D4D4D] text-lg font-Roboto mx-auto text-center lg:whitespace-nowrap">
  Hear how Alatron is powering real projects with trusted rentals and seamless service.
</p>

        </div>

        {/* Mobile View - Single Card with Navigation */}
        <div className="md:hidden">
          <div className="bg-[#F2FAFF] rounded-lg p-6 shadow-lg relative h-auto">
            {/* Quote Icon */}
            <div className="absolute -top-1 right-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" viewBox="0 0 32 33" fill="none">
                <path d="M18.304 27.4506C18.1648 27.2279 18.0708 26.9799 18.0275 26.7209C17.9841 26.4619 17.9922 26.1968 18.0512 25.9409C18.1103 25.685 18.2192 25.4432 18.3717 25.2294C18.5242 25.0155 18.7173 24.8338 18.94 24.6946C21.3754 23.1799 23.3096 20.98 24.5 18.3706C23.2962 18.4713 22.0901 18.2063 21.0394 17.6102C19.9887 17.0141 19.1424 16.1148 18.6112 15.0299C18.0801 13.945 17.8887 12.725 18.0622 11.5296C18.2358 10.3341 18.7661 9.21889 19.5838 8.32979C20.4016 7.44069 21.4686 6.81911 22.6454 6.5464C23.8222 6.27368 25.0539 6.36252 26.1794 6.80129C27.3049 7.24007 28.2717 8.00834 28.9534 9.00559C29.635 10.0028 29.9998 11.1826 30 12.3906V12.4446C29.9984 12.5995 29.9918 12.7542 29.98 12.9086C29.962 13.2086 29.926 13.6286 29.856 14.1446C29.716 15.1706 29.442 16.5846 28.888 18.1726C27.784 21.3526 25.548 25.2826 21.06 28.0866C20.8373 28.2258 20.5893 28.3198 20.3303 28.3632C20.0712 28.4065 19.8062 28.3985 19.5503 28.3394C19.2944 28.2803 19.0526 28.1715 18.8387 28.019C18.6249 27.8665 18.4432 27.6733 18.304 27.4506ZM4.304 27.4506C4.1648 27.2279 4.07083 26.9799 4.02745 26.7209C3.98408 26.4619 3.99216 26.1968 4.05121 25.9409C4.11027 25.685 4.21916 25.4432 4.37166 25.2294C4.52415 25.0155 4.71728 24.8338 4.94 24.6946C7.37552 23.18 9.30969 20.98 10.5 18.3706C9.29623 18.4713 8.0901 18.2063 7.03942 17.6102C5.98874 17.0141 5.14244 16.1148 4.61125 15.0299C4.08005 13.945 3.8887 12.725 4.06223 11.5296C4.23576 10.3341 4.76609 9.21889 5.58383 8.32979C6.40157 7.44069 7.46863 6.81911 8.64542 6.5464C9.82221 6.27368 11.0539 6.36252 12.1794 6.80129C13.3049 7.24007 14.2717 8.00834 14.9534 9.00559C15.635 10.0028 15.9998 11.1826 16 12.3906V12.4446C15.9984 12.5995 15.9918 12.7542 15.98 12.9086C15.962 13.2086 15.926 13.6286 15.856 14.1446C15.716 15.1706 15.442 16.5846 14.888 18.1726C13.784 21.3526 11.548 25.2826 7.06 28.0866C6.83728 28.2258 6.58932 28.3198 6.33028 28.3632C6.07124 28.4065 5.8062 28.3985 5.55028 28.3394C5.29436 28.2803 5.05258 28.1715 4.83875 28.019C4.62491 27.8665 4.4432 27.6733 4.304 27.4506Z" fill="#1A84FF"/>
              </svg>
            </div>

            {/* Content */}
            <div className="">
              {/* Avatar */}
              <div className="flex mb-4">
                <div className="w-14 h-14 relative">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    fill
                    className="rounded-full object-cover"
                    sizes="64px"
                  />
                </div>
              </div>

              {/* Name and Position */}
              <div className="mb-2">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentSlide].position}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="text-[#706D6D] text-sm leading-relaxed font-Roboto font-medium">
                "{testimonials[currentSlide].quote}"
              </blockquote>
            </div>
          </div>

          {/* Mobile Navigation - Centered */}
          <div className="flex justify-center items-center mt-6 gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
  <g clip-path="url(#clip0_293_3424)">
    <path d="M13.3838 24.4023L1.35107 12.2487L13.3838 0.881156" stroke="black" stroke-width="1.57948" stroke-miterlimit="10"/>
    <path d="M27.906 12.2368L1.18018 12.2368" stroke="black" stroke-width="1.57948" stroke-miterlimit="10"/>
  </g>
  <defs>
    <clipPath id="clip0_293_3424">
      <rect width="24.4819" height="27.6866" fill="white" transform="translate(0.390381 24.8726) rotate(-90)"/>
    </clipPath>
  </defs>
</svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
  <g clip-path="url(#clip0_293_3429)">
    <path d="M15.6172 0.86133L27.6499 13.0149L15.6172 24.3825" stroke="black" stroke-width="1.57948" stroke-miterlimit="10"/>
    <path d="M0.924029 12.9541L27.6499 12.9541" stroke="black" stroke-width="1.57948" stroke-miterlimit="10"/>
  </g>
  <defs>
    <clipPath id="clip0_293_3429">
      <rect width="24.4819" height="27.6866" fill="white" transform="translate(28.6099 0.390625) rotate(90)"/>
    </clipPath>
  </defs>
</svg>
          </div>
        </div>

        {/* Desktop View - Two Cards with Navigation */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12  ">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="h-full">
                <div className="bg-[#F2FAFF] rounded-2xl p-8 shadow-lg relative h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute top-3 right-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" viewBox="0 0 32 33" fill="none">
                        <path d="M18.304 27.4506C18.1648 27.2279 18.0708 26.9799 18.0275 26.7209C17.9841 26.4619 17.9922 26.1968 18.0512 25.9409C18.1103 25.685 18.2192 25.4432 18.3717 25.2294C18.5242 25.0155 18.7173 24.8338 18.94 24.6946C21.3754 23.1799 23.3096 20.98 24.5 18.3706C23.2962 18.4713 22.0901 18.2063 21.0394 17.6102C19.9887 17.0141 19.1424 16.1148 18.6112 15.0299C18.0801 13.945 17.8887 12.725 18.0622 11.5296C18.2358 10.3341 18.7661 9.21889 19.5838 8.32979C20.4016 7.44069 21.4686 6.81911 22.6454 6.5464C23.8222 6.27368 25.0539 6.36252 26.1794 6.80129C27.3049 7.24007 28.2717 8.00834 28.9534 9.00559C29.635 10.0028 29.9998 11.1826 30 12.3906V12.4446C29.9984 12.5995 29.9918 12.7542 29.98 12.9086C29.962 13.2086 29.926 13.6286 29.856 14.1446C29.716 15.1706 29.442 16.5846 28.888 18.1726C27.784 21.3526 25.548 25.2826 21.06 28.0866C20.8373 28.2258 20.5893 28.3198 20.3303 28.3632C20.0712 28.4065 19.8062 28.3985 19.5503 28.3394C19.2944 28.2803 19.0526 28.1715 18.8387 28.019C18.6249 27.8665 18.4432 27.6733 18.304 27.4506ZM4.304 27.4506C4.1648 27.2279 4.07083 26.9799 4.02745 26.7209C3.98408 26.4619 3.99216 26.1968 4.05121 25.9409C4.11027 25.685 4.21916 25.4432 4.37166 25.2294C4.52415 25.0155 4.71728 24.8338 4.94 24.6946C7.37552 23.18 9.30969 20.98 10.5 18.3706C9.29623 18.4713 8.0901 18.2063 7.03942 17.6102C5.98874 17.0141 5.14244 16.1148 4.61125 15.0299C4.08005 13.945 3.8887 12.725 4.06223 11.5296C4.23576 10.3341 4.76609 9.21889 5.58383 8.32979C6.40157 7.44069 7.46863 6.81911 8.64542 6.5464C9.82221 6.27368 11.0539 6.36252 12.1794 6.80129C13.3049 7.24007 14.2717 8.00834 14.9534 9.00559C15.635 10.0028 15.9998 11.1826 16 12.3906V12.4446C15.9984 12.5995 15.9918 12.7542 15.98 12.9086C15.962 13.2086 15.926 13.6286 15.856 14.1446C15.716 15.1706 15.442 16.5846 14.888 18.1726C13.784 21.3526 11.548 25.2826 7.06 28.0866C6.83728 28.2258 6.58932 28.3198 6.33028 28.3632C6.07124 28.4065 5.8062 28.3985 5.55028 28.3394C5.29436 28.2803 5.05258 28.1715 4.83875 28.019C4.62491 27.8665 4.4432 27.6733 4.304 27.4506Z" fill="#1A84FF"/>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Avatar */}
                    <div className="flex mb-4">
                      <div className="w-20 h-20 relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                          sizes="80px"
                        />
                      </div>
                    </div>

                    {/* Name and Position */}

                    {/* Quote */}
                    <blockquote className="text-[#706D6D] text-sm leading-relaxed font-Roboto font-semibold flex-1 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mb-2">
                      <h4 className="font-semibold text-[#161C2D] text-lg font-Roboto ">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#4D4D4D] text-sm font-Roboto font-regular">
                        {testimonial.position}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="flex justify-center items-center mt-8 gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
  <g clip-path="url(#clip0_293_3424)">
    <path d="M13.3838 24.4023L1.35107 12.2487L13.3838 0.881156" stroke="black" stroke-width="1.57948" stroke-miterlimit="10"/>
    <path d="M27.906 12.2368L1.18018 12.2368" stroke="black" stroke-width="1.57948" stroke-miterlimit="10"/>
  </g>
  <defs>
    <clipPath id="clip0_293_3424">
      <rect width="24.4819" height="27.6866" fill="white" transform="translate(0.390381 24.8726) rotate(-90)"/>
    </clipPath>
  </defs>
</svg>
            
            
            
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
  <g clip-path="url(#clip0_293_3429)">
    <path d="M15.6172 0.86133L27.6499 13.0149L15.6172 24.3825" stroke="black" stroke-width="1.57948" stroke-miterlimit="10"/>
    <path d="M0.924029 12.9541L27.6499 12.9541" stroke="black" stroke-width="1.57948" stroke-miterlimit="10"/>
  </g>
  <defs>
    <clipPath id="clip0_293_3429">
      <rect width="24.4819" height="27.6866" fill="white" transform="translate(28.6099 0.390625) rotate(90)"/>
    </clipPath>
  </defs>
</svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;