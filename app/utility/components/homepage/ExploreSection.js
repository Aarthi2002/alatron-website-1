

// "use client"

// import { useState } from 'react';
// import Image from 'next/image';

// export default function ExploreSection() {
//   const [openIndex, setOpenIndex] = useState(0); // Default first question open

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const features = [
//     {
//       question: 'Book Instantly',
//       answer: 'Find and reserve equipment anytime, anywhere — right from your phone.'
//     },
//     {
//       question: '24/7 Support at Your Fingertips',
//       answer: 'Get instant help whenever you need it with our round-the-clock customer support.'
//     },
//     {
//       question: 'Digital Contracts',
//       answer: 'Sign, manage, and store all your rental agreements digitally for easy access.'
//     },
//     {
//       question: 'Extend or Modify Rentals Easily',
//       answer: 'Change your rental duration or upgrade equipment with just a few taps.'
//     }
//   ];

//   return (
//     <section className="py-8 bg-white">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="text-[#1961A4] text-base font-medium mb-4 font-inter flex items-center justify-center gap-2">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
//               <path d="M1.75 1H14.25" stroke="url(#paint0_linear_293_3128)" strokeWidth="2" strokeLinecap="round"/>
//               <defs>
//                 <linearGradient id="paint0_linear_293_3128" x1="1.75" y1="1.5" x2="19.75" y2="1.5" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#90FFDA"/>
//                   <stop offset="0.0001" stopColor="#4CAE9B"/>
//                   <stop offset="0.0002" stopColor="#1961A4"/>
//                 </linearGradient>
//               </defs>
//             </svg>
//             Explore Our Application
//           </div>
//           <h2 className="text-3xl md:text-3xl lg:text-4xl text-[#161C2D] mb-4 leading-tight font-semibold font-Poppins">
//             Control Every Rental From Your Pocket
//           </h2>
//           <p className="text-xl text-[#4D4D4D] max-w-2xl mx-auto font-Roboto font-normal">
//             Just smart, simple control in your hands.
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Mobile Screen */}
//           <div className="flex justify-center lg:justify-start">
//             <div className="w-full max-w-sm lg:max-w-md">
//               <Image 
//                 src="/assets/home/group.png" 
//                 alt="Mobile App Interface"
//                 width={500}
//                 height={900}
//                 className="w-full h-auto"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Features List */}
//           <div className="space-y-4">
//             {features.map((feature, index) => (
//               <div key={index} className="group cursor-pointer">
//                 <div className={`shadow-sm rounded-xl border border-gray-200 transition-all duration-300 ${
//                   index === 0 ? 'bg-white' : 'bg-[#F5F9FF]'
//                 }`}>
//                   {/* Question Section */}
//                   <div 
//                     className="py-4 px-6 flex items-center justify-between"
//                     onClick={() => toggle(index)}
//                   >
//                     <h3 className={`text-sm sm:text-lg transition-colors font-Poppins font-medium ${
//                       openIndex === index ? 'text-[#161C2D]' : 'text-[#161C2D]'
//                     }`}>
//                       {feature.question}
//                     </h3>
                    
//                     {/* Chevron Icon */}
//                     <div className={`w-6 h-6 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
//                       openIndex === index 
//                         ? 'bg-white border-blue-600 rotate-90' 
//                         : 'bg-blue-500 border-blue-500 group-hover:bg-blue-600 group-hover:border-blue-600'
//                     }`}>
//                       <svg 
//                         className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
//                           openIndex === index ? 'text-blue-600' : 'text-white'
//                         }`}
//                         fill="none" 
//                         stroke="currentColor" 
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
//                       </svg>
//                     </div>

                    
//                   </div>
                  
//                   {/* Answer Section */}
//                   {openIndex === index && (
//                     <div className="py-4 px-6 rounded-b-xl shadow-lg bg-white">
//                       <p className="text-[#4D4D4D] leading-relaxed text-sm sm:text-base font-Roboto font-normal">
//                         {feature.answer}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}

//             {/* Download Button */}
//             <div className="pt-6">
//               <button
//                 className="w-full sm:w-auto text-white font-poppins font-semibold py-4 px-6 sm:px-4 rounded-xl 
//                            flex items-center justify-center space-x-3 transition-all duration-300 
//                            hover:scale-105 shadow-lg bg-white border border-[#1A84FF] 
//                            bg-gradient-to-b from-[#1A84FF] to-[#10417B]">
//                 <span className="text-sm sm:text-base">Download Application</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
//                   <path fillRule="evenodd" clipRule="evenodd" d="M3 5.49072C3 4.45472 3.84 3.61572 4.875 3.61572H9.375C10.411 3.61572 11.25 4.45572 11.25 5.49072V9.99072C11.25 11.0267 10.41 11.8657 9.375 11.8657H4.875C4.37772 11.8657 3.90081 11.6682 3.54917 11.3165C3.19754 10.9649 3 10.488 3 9.99072V5.49072ZM4.875 5.11572C4.77554 5.11572 4.68016 5.15523 4.60984 5.22556C4.53951 5.29588 4.5 5.39127 4.5 5.49072V9.99072C4.5 10.1977 4.668 10.3657 4.875 10.3657H9.375C9.47446 10.3657 9.56984 10.3262 9.64017 10.2559C9.71049 10.1856 9.75 10.0902 9.75 9.99072V5.49072C9.75 5.39127 9.71049 5.29588 9.64017 5.22556C9.56984 5.15523 9.47446 5.11572 9.375 5.11572H4.875ZM12.75 5.49072C12.75 4.45472 13.59 3.61572 14.625 3.61572H19.125C20.16 3.61572 21 4.45572 21 5.49072V9.99072C21 11.0267 20.16 11.8657 19.125 11.8657H14.625C14.1277 11.8657 13.6508 11.6682 13.2992 11.3165C12.9475 10.9649 12.75 10.488 12.75 9.99072V5.49072ZM14.625 5.11572C14.5255 5.11572 14.4302 5.15523 14.3598 5.22556C14.2895 5.29588 14.25 5.39127 14.25 5.49072V9.99072C14.25 10.1977 14.418 10.3657 14.625 10.3657H19.125C19.2245 10.3657 19.3198 10.3262 19.3902 10.2559C19.4605 10.1856 19.5 10.0902 19.5 9.99072V5.49072C19.5 5.39127 19.4605 5.29588 19.3902 5.22556C19.3198 5.15523 19.2245 5.11572 19.125 5.11572H14.625ZM6 7.36572C6 7.16681 6.07902 6.97604 6.21967 6.83539C6.36032 6.69474 6.55109 6.61572 6.75 6.61572H7.5C7.69891 6.61572 7.88968 6.69474 8.03033 6.83539C8.17098 6.97604 8.25 7.16681 8.25 7.36572V8.11572C8.25 8.31463 8.17098 8.5054 8.03033 8.64605C7.88968 8.7867 7.69891 8.86572 7.5 8.86572H6.75C6.55109 8.86572 6.36032 8.7867 6.21967 8.64605C6.07902 8.5054 6 8.31463 6 8.11572V7.36572ZM15.75 7.36572C15.75 7.16681 15.829 6.97604 15.9697 6.83539C16.1103 6.69474 16.3011 6.61572 16.5 6.61572H17.25C17.4489 6.61572 17.6397 6.69474 17.7803 6.83539C17.921 6.97604 18 7.16681 18 7.36572V8.11572C18 8.31463 17.921 8.5054 17.7803 8.64605C17.6397 8.7867 17.4489 8.86572 17.25 8.86572H16.5C16.3011 8.86572 16.1103 8.7867 15.9697 8.64605C15.829 8.5054 15.75 8.31463 15.75 8.11572V7.36572ZM3 15.2407C3 14.2047 3.84 13.3657 4.875 13.3657H9.375C10.411 13.3657 11.25 14.2057 11.25 15.2407V19.7407C11.25 20.7757 10.41 21.6157 9.375 21.6157H4.875C4.37772 21.6157 3.90081 21.4182 3.54917 21.0665C3.19754 20.7149 3 20.238 3 19.7407V15.2407ZM4.875 14.8657C4.77554 14.8657 4.68016 14.9052 4.60984 14.9756C4.53951 15.0459 4.5 15.1413 4.5 15.2407V19.7407C4.5 19.9477 4.668 20.1157 4.875 20.1157H9.375C9.47446 20.1157 9.56984 20.0762 9.64017 20.0059C9.71049 19.9356 9.75 19.8402 9.75 19.7407V15.2407C9.75 15.1413 9.71049 15.0459 9.64017 14.9756C9.56984 14.9052 9.47446 14.8657 9.375 14.8657H4.875ZM12.75 14.1157C12.75 13.9168 12.829 13.726 12.9697 13.5854C13.1103 13.4447 13.3011 13.3657 13.5 13.3657H14.25C14.4489 13.3657 14.6397 13.4447 14.7803 13.5854C14.921 13.726 15 13.9168 15 14.1157V14.8657C15 15.0646 14.921 15.2554 14.7803 15.3961C14.6397 15.5367 14.4489 15.6157 14.25 15.6157H13.5C13.3011 15.6157 13.1103 15.5367 12.9697 15.3961C12.829 15.2554 12.75 15.0646 12.75 14.8657V14.1157ZM18.75 14.1157C18.75 13.9168 18.829 13.726 18.9697 13.5854C19.1103 13.4447 19.3011 13.3657 19.5 13.3657H20.25C20.4489 13.3657 20.6397 13.4447 20.7803 13.5854C20.921 13.726 21 13.9168 21 14.1157V14.8657C21 15.0646 20.921 15.2554 20.7803 15.3961C20.6397 15.5367 20.4489 15.6157 20.25 15.6157H19.5C19.3011 15.6157 19.1103 15.5367 18.9697 15.3961C18.829 15.2554 18.75 15.0646 18.75 14.8657V14.1157ZM6 17.1157C6 16.9168 6.07902 16.726 6.21967 16.5854C6.36032 16.4447 6.55109 16.3657 6.75 16.3657H7.5C7.69891 16.3657 7.88968 16.4447 8.03033 16.5854C8.17098 16.726 8.25 16.9168 8.25 17.1157V17.8657C8.25 18.0646 8.17098 18.2554 8.03033 18.3961C7.88968 18.5367 7.69891 18.6157 7.5 18.6157H6.75C6.55109 18.6157 6.36032 18.5367 6.21967 18.3961C6.07902 18.2554 6 18.0646 6 17.8657V17.1157ZM15.75 17.1157C15.75 16.9168 15.829 16.726 15.9697 16.5854C16.1103 16.4447 16.3011 16.3657 16.5 16.3657H17.25C17.4489 16.3657 17.6397 16.4447 17.7803 16.5854C17.921 16.726 18 16.9168 18 17.1157V17.8657C18 18.0646 17.921 18.2554 17.7803 18.3961C17.6397 18.5367 17.4489 18.6157 17.25 18.6157H16.5C16.3011 18.6157 16.1103 18.5367 15.9697 18.3961C15.829 18.2554 15.75 18.0646 15.75 17.8657V17.1157ZM12.75 20.1157C12.75 19.9168 12.829 19.726 12.9697 19.5854C13.1103 19.4447 13.3011 19.3657 13.5 19.3657H14.25C14.4489 19.3657 14.6397 19.4447 14.7803 19.5854C14.921 19.726 15 19.9168 15 20.1157V20.8657C15 21.0646 14.921 21.2554 14.7803 21.3961C14.6397 21.5367 14.4489 21.6157 14.25 21.6157H13.5C13.3011 21.6157 13.1103 21.5367 12.9697 21.3961C12.829 21.2554 12.75 21.0646 12.75 20.8657V20.1157ZM18.75 20.1157C18.75 19.9168 18.829 19.726 18.9697 19.5854C19.1103 19.4447 19.3011 19.3657 19.5 19.3657H20.25C20.4489 19.3657 20.6397 19.4447 20.7803 19.5854C20.921 19.726 21 19.9168 21 20.1157V20.8657C21 21.0646 20.921 21.2554 20.7803 21.3961C20.6397 21.5367 20.4489 21.6157 20.25 21.6157H19.5C19.3011 21.6157 19.1103 21.5367 18.9697 21.3961C18.829 21.2554 18.75 21.0646 18.75 20.8657V20.1157Z" fill="white"/>
//                 </svg>
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function ExploreSection() {
  const [openIndex, setOpenIndex] = useState(0); // Default first question open

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      question: 'Book Instantly',
      answer: 'Find and reserve equipment anytime, anywhere — right from your phone.'
    },
    {
      question: '24/7 Support at Your Fingertips',
      answer: 'Get instant help whenever you need it with our round-the-clock customer support.'
    },
    {
      question: 'Digital Contracts',
      answer: 'Sign, manage, and store all your rental agreements digitally for easy access.'
    },
    {
      question: 'Extend or Modify Rentals Easily',
      answer: 'Change your rental duration or upgrade equipment with just a few taps.'
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#1961A4] text-base font-medium mb-4 font-inter flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
              <path d="M1.75 1H14.25" stroke="url(#paint0_linear_293_3128)" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="paint0_linear_293_3128" x1="1.75" y1="1.5" x2="19.75" y2="1.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#90FFDA"/>
                  <stop offset="0.0001" stopColor="#4CAE9B"/>
                  <stop offset="0.0002" stopColor="#1961A4"/>
                </linearGradient>
              </defs>
            </svg>
            Explore Our Application
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-4xl text-[#161C2D] mb-4 leading-tight font-semibold font-Poppins">
            Control Every Rental From Your Pocket
          </h2>
          <p className="text-xl text-[#4D4D4D] max-w-2xl mx-auto font-Roboto font-normal">
            Just smart, simple control in your hands.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mobile Screen */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm lg:max-w-md">
              <Image 
                src="/assets/home/group.png" 
                alt="Mobile App Interface"
                width={500}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`shadow-sm rounded-xl border border-gray-200 transition-all duration-300 ${
                  index === 0 ? 'bg-white' : 'bg-[#F5F9FF]'
                }`}>
                  {/* Question Section */}
                  <div 
                    className="py-4 px-6 flex items-center justify-between"
                    onClick={() => toggle(index)}
                  >
                    <h3 className={`text-sm sm:text-lg transition-colors font-Poppins font-medium ${
                      openIndex === index ? 'text-[#161C2D]' : 'text-[#161C2D]'
                    }`}>
                      {feature.question}
                    </h3>
                    
                    {/* Chevron Icon */}
                    <div className={`w-6 h-6 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-white border-blue-600 rotate-180' 
                        : 'bg-blue-500 border-blue-500 group-hover:bg-blue-600 group-hover:border-blue-600'
                    }`}>
                      <svg 
                        className={`w-4 h-4 sm:w-5 sm:h- transition-colors ${
                          openIndex === index ? 'text-blue-600' : 'text-white'
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>

                    
                  </div>
                  
                  {/* Answer Section */}
                  {openIndex === index && (
                    <div className="py-4 px-6 rounded-b-xl shadow-lg bg-white">
                      <p className="text-[#4D4D4D] leading-relaxed text-sm sm:text-base font-Roboto font-normal">
                        {feature.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Download Button */}
            <div className="pt-6">
              <button
                className="w-full sm:w-auto text-white font-poppins font-semibold py-3 px-6 sm:px-4 rounded-xl 
                           flex items-center justify-center space-x-3 transition-all duration-300 
                           hover:scale-105 shadow-lg bg-white border-[#1A84FF] 
                           bg-gradient-to-b from-[#1A84FF] to-[#10417B]">
                <span className="text-sm sm:text-base">Download Application</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 5.49072C3 4.45472 3.84 3.61572 4.875 3.61572H9.375C10.411 3.61572 11.25 4.45572 11.25 5.49072V9.99072C11.25 11.0267 10.41 11.8657 9.375 11.8657H4.875C4.37772 11.8657 3.90081 11.6682 3.54917 11.3165C3.19754 10.9649 3 10.488 3 9.99072V5.49072ZM4.875 5.11572C4.77554 5.11572 4.68016 5.15523 4.60984 5.22556C4.53951 5.29588 4.5 5.39127 4.5 5.49072V9.99072C4.5 10.1977 4.668 10.3657 4.875 10.3657H9.375C9.47446 10.3657 9.56984 10.3262 9.64017 10.2559C9.71049 10.1856 9.75 10.0902 9.75 9.99072V5.49072C9.75 5.39127 9.71049 5.29588 9.64017 5.22556C9.56984 5.15523 9.47446 5.11572 9.375 5.11572H4.875ZM12.75 5.49072C12.75 4.45472 13.59 3.61572 14.625 3.61572H19.125C20.16 3.61572 21 4.45572 21 5.49072V9.99072C21 11.0267 20.16 11.8657 19.125 11.8657H14.625C14.1277 11.8657 13.6508 11.6682 13.2992 11.3165C12.9475 10.9649 12.75 10.488 12.75 9.99072V5.49072ZM14.625 5.11572C14.5255 5.11572 14.4302 5.15523 14.3598 5.22556C14.2895 5.29588 14.25 5.39127 14.25 5.49072V9.99072C14.25 10.1977 14.418 10.3657 14.625 10.3657H19.125C19.2245 10.3657 19.3198 10.3262 19.3902 10.2559C19.4605 10.1856 19.5 10.0902 19.5 9.99072V5.49072C19.5 5.39127 19.4605 5.29588 19.3902 5.22556C19.3198 5.15523 19.2245 5.11572 19.125 5.11572H14.625ZM6 7.36572C6 7.16681 6.07902 6.97604 6.21967 6.83539C6.36032 6.69474 6.55109 6.61572 6.75 6.61572H7.5C7.69891 6.61572 7.88968 6.69474 8.03033 6.83539C8.17098 6.97604 8.25 7.16681 8.25 7.36572V8.11572C8.25 8.31463 8.17098 8.5054 8.03033 8.64605C7.88968 8.7867 7.69891 8.86572 7.5 8.86572H6.75C6.55109 8.86572 6.36032 8.7867 6.21967 8.64605C6.07902 8.5054 6 8.31463 6 8.11572V7.36572ZM15.75 7.36572C15.75 7.16681 15.829 6.97604 15.9697 6.83539C16.1103 6.69474 16.3011 6.61572 16.5 6.61572H17.25C17.4489 6.61572 17.6397 6.69474 17.7803 6.83539C17.921 6.97604 18 7.16681 18 7.36572V8.11572C18 8.31463 17.921 8.5054 17.7803 8.64605C17.6397 8.7867 17.4489 8.86572 17.25 8.86572H16.5C16.3011 8.86572 16.1103 8.7867 15.9697 8.64605C15.829 8.5054 15.75 8.31463 15.75 8.11572V7.36572ZM3 15.2407C3 14.2047 3.84 13.3657 4.875 13.3657H9.375C10.411 13.3657 11.25 14.2057 11.25 15.2407V19.7407C11.25 20.7757 10.41 21.6157 9.375 21.6157H4.875C4.37772 21.6157 3.90081 21.4182 3.54917 21.0665C3.19754 20.7149 3 20.238 3 19.7407V15.2407ZM4.875 14.8657C4.77554 14.8657 4.68016 14.9052 4.60984 14.9756C4.53951 15.0459 4.5 15.1413 4.5 15.2407V19.7407C4.5 19.9477 4.668 20.1157 4.875 20.1157H9.375C9.47446 20.1157 9.56984 20.0762 9.64017 20.0059C9.71049 19.9356 9.75 19.8402 9.75 19.7407V15.2407C9.75 15.1413 9.71049 15.0459 9.64017 14.9756C9.56984 14.9052 9.47446 14.8657 9.375 14.8657H4.875ZM12.75 14.1157C12.75 13.9168 12.829 13.726 12.9697 13.5854C13.1103 13.4447 13.3011 13.3657 13.5 13.3657H14.25C14.4489 13.3657 14.6397 13.4447 14.7803 13.5854C14.921 13.726 15 13.9168 15 14.1157V14.8657C15 15.0646 14.921 15.2554 14.7803 15.3961C14.6397 15.5367 14.4489 15.6157 14.25 15.6157H13.5C13.3011 15.6157 13.1103 15.5367 12.9697 15.3961C12.829 15.2554 12.75 15.0646 12.75 14.8657V14.1157ZM18.75 14.1157C18.75 13.9168 18.829 13.726 18.9697 13.5854C19.1103 13.4447 19.3011 13.3657 19.5 13.3657H20.25C20.4489 13.3657 20.6397 13.4447 20.7803 13.5854C20.921 13.726 21 13.9168 21 14.1157V14.8657C21 15.0646 20.921 15.2554 20.7803 15.3961C20.6397 15.5367 20.4489 15.6157 20.25 15.6157H19.5C19.3011 15.6157 19.1103 15.5367 18.9697 15.3961C18.829 15.2554 18.75 15.0646 18.75 14.8657V14.1157ZM6 17.1157C6 16.9168 6.07902 16.726 6.21967 16.5854C6.36032 16.4447 6.55109 16.3657 6.75 16.3657H7.5C7.69891 16.3657 7.88968 16.4447 8.03033 16.5854C8.17098 16.726 8.25 16.9168 8.25 17.1157V17.8657C8.25 18.0646 8.17098 18.2554 8.03033 18.3961C7.88968 18.5367 7.69891 18.6157 7.5 18.6157H6.75C6.55109 18.6157 6.36032 18.5367 6.21967 18.3961C6.07902 18.2554 6 18.0646 6 17.8657V17.1157ZM15.75 17.1157C15.75 16.9168 15.829 16.726 15.9697 16.5854C16.1103 16.4447 16.3011 16.3657 16.5 16.3657H17.25C17.4489 16.3657 17.6397 16.4447 17.7803 16.5854C17.921 16.726 18 16.9168 18 17.1157V17.8657C18 18.0646 17.921 18.2554 17.7803 18.3961C17.6397 18.5367 17.4489 18.6157 17.25 18.6157H16.5C16.3011 18.6157 16.1103 18.5367 15.9697 18.3961C15.829 18.2554 15.75 18.0646 15.75 17.8657V17.1157ZM12.75 20.1157C12.75 19.9168 12.829 19.726 12.9697 19.5854C13.1103 19.4447 13.3011 19.3657 13.5 19.3657H14.25C14.4489 19.3657 14.6397 19.4447 14.7803 19.5854C14.921 19.726 15 19.9168 15 20.1157V20.8657C15 21.0646 14.921 21.2554 14.7803 21.3961C14.6397 21.5367 14.4489 21.6157 14.25 21.6157H13.5C13.3011 21.6157 13.1103 21.5367 12.9697 21.3961C12.829 21.2554 12.75 21.0646 12.75 20.8657V20.1157ZM18.75 20.1157C18.75 19.9168 18.829 19.726 18.9697 19.5854C19.1103 19.4447 19.3011 19.3657 19.5 19.3657H20.25C20.4489 19.3657 20.6397 19.4447 20.7803 19.5854C20.921 19.726 21 19.9168 21 20.1157V20.8657C21 21.0646 20.921 21.2554 20.7803 21.3961C20.6397 21.5367 20.4489 21.6157 20.25 21.6157H19.5C19.3011 21.6157 19.1103 21.5367 18.9697 21.3961C18.829 21.2554 18.75 21.0646 18.75 20.8657V20.1157Z" fill="white"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}