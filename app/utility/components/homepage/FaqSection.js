

// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';

// const faqs = [
//   {
//     question: 'How to use Alatron?',
//     answer: 'At Alatron, we don\'t rent out machines; we partner in your progress. Every piece of equipment. At Alatron, we don\'t just rent out machines; we partner in your progress.',
//   },
//   {
//     question: 'When is the Alatron more powerful?',
//     answer: 'This depends on the size and nature of your business.',
//   },
//   {
//     question: 'How to rent the land mover today?',
//     answer: 'You can rent our equipment through our website or by contacting our sales team.',
//   },
//   {
//     question: 'How do I trust the vendor?',
//     answer: 'We have certified professionals and positive reviews from numerous clients.',
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(0); // First question open by default

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // SVG icons as React components
//   const SvgMinusIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
//       <path d="M12.0064 12.21L21.9937 22.0209M12.0946 22.1091L21.9055 12.1218" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );

//   const SvgQuestionIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
//       <path d="M6.00057 12.1815L19.9999 12.0488M13.0666 19.1148L12.9339 5.11546" stroke="#161C2D" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );

//   const SvgArrowIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
//       <path d="M9.79175 18.4396L14.2297 23.0893L27.5434 9.1416" stroke="#BFBFBF" strokeWidth={1.90196} strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   );

//   return (
//     <section className="relative bg-white py-12 md:py-20 px-4 md:px-0 overflow-hidden">
//       {/* Background Frame */}
//       <div className="absolute inset-0 z-0 w-full h-full">
//         <div className="relative w-full h-full">
//           <Image
//             src="/assets/home/bg.png"
//             alt="Background Frame"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>

//       <div className="relative max-w-4xl mx-auto z-10">
//         {/* Header */}
//         <div className="text-center mb-10 md:mb-16">
//           <div className="text-[#1961A4] text-sm font-medium mb-3 tracking-wider">
//             — Know Us Better
//           </div>
//           <h2 className="text-2xl md:text-4xl font-bold text-[#161C2D] mb-4">
//             Driving Progress with Every Rental
//           </h2>
//           <p className="text-[#4D4D4D] text-base md:text-lg max-w-2xl mx-auto">
//             At Alatron, we don't just rent out machines; we partner in your progress.
//           </p>
//         </div>

//         {/* First FAQ Item with Chatbot */}
//         <div className="mb-8 relative">
//           <div className="flex flex-col md:flex-row gap-6 items-start">
//             <div className="w-full md:w-3/4">
//               <div className="bg-white border border-gray-200 rounded-xl p-3">
//                 {/* Question */}
//                 <button
//                   className="w-full flex justify-between items-center"
//                   onClick={() => toggle(0)}
//                 >
//                   <h3 className="text-lg font-medium text-[#161C2D] text-left">
//                     How to use Alatron?
//                   </h3>
//                   <div className="w-8 h-8 bg-[#57C09A] rounded-full flex items-center justify-center">
//                     {openIndex === 0 ? <SvgMinusIcon /> : <SvgQuestionIcon />}
//                   </div>
//                 </button>

//                 {/* Answer */}
//                 {openIndex === 0 && (
//                   <div className="mt-4 p-3 border-t border-gray-200">
//                     <p className="text-black text-left">
//                       At Alatron, we don't rent out machines; we partner in your progress. Every piece of equipment. At Alatron, we don't just rent out machines; we partner in your progress.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Chatbot Image - Right side on desktop */}
//             <div className="hidden md:block absolute right-44 top-0 mt-0 w-12 h-12">
//               <Image
//                 src="/assets/home/chat.png"
//                 alt="Chat Support"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Other FAQ Items */}
//         <div className="space-y-4">
//           {faqs.slice(1).map((faq, index) => (
//             <div key={index + 1} className="bg-black border border-gray-200 rounded-xl p-3">
//               <button
//                 className="w-full flex justify-between items-center"
//                 onClick={() => toggle(index + 1)}
//               >
//                 <h3 className="text-lg font-medium text-white text-left">{faq.question}</h3>
//                 <div className="w-8 h-8 rounded-full flex items-center justify-center">
//                   {openIndex === index + 1 ? <SvgMinusIcon /> : <SvgArrowIcon />}
//                 </div>
//               </button>

//               {/* Answer */}
//               {openIndex === index + 1 && (
//                 <div className="mt-4 pt-4 border-t border-gray-200">
//                   <p className="text-white text-left">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>



//       </div>
//     </section>
//   );
// }

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

const AlatronFAQ = () => {
  const [expandedQuestions, setExpandedQuestions] = useState({
    0: true, // First question is expanded by default
    1: false,
    2: false,
    3: false
  });

  const questions = [
    {
      id: 0,
      question: "How to use Altron?",
      answer: "At Alatron, we don't rent out machines we partner in your progress. Every piece of equipment. At Alatron, we don't just out machines we partner in your progress."
    },
    {
      id: 1,
      question: "When the alatron is a more powerful",
      answer: "At Alatron, we don't rent out machines we partner in your progress. Every piece of equipment. At Alatron, we don't just out machines we partner in your progress."
    },
    {
      id: 2,
      question: "How to use Altron?",
      answer: "At Alatron, we don't rent out machines we partner in your progress. Every piece of equipment. At Alatron, we don't just out machines we partner in your progress."
    },
    {
      id: 3,
      question: "How to rent the land mover today?",
      answer: "At Alatron, we don't rent out machines we partner in your progress. Every piece of equipment. At Alatron, we don't just out machines we partner in your progress."
    },
    {
      id: 4,
      question: "How do i trust the vendor?",
      answer: "At Alatron, we don't rent out machines we partner in your progress. Every piece of equipment. At Alatron, we don't just out machines we partner in your progress."
    }
  ];

  const toggleQuestion = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Dynamic Message Tick Function
  const MessageTickIcon = ({ isRead = false }) => {
    if (isRead) {
      // Double tick in blue for expanded/read questions
      return (
        <div className="relative flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" className="sm:w-[31px] sm:h-[32px]" viewBox="0 0 31 32" fill="none">
            <path
              d="M3.4519 18.4397L7.88981 23.0893L9.18822 21.7288M21.2035 9.1416L13.5158 17.1958M9.79177 18.4397L14.2297 23.0893L27.5434 9.1416"
              stroke="#009CFF"
              strokeWidth="1.90196"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    } else {
      // Single tick in gray for collapsed/unread questions
      return (
        <div className="relative flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" className="sm:w-[31px] sm:h-[32px]" viewBox="0 0 31 32" fill="none">
            <path
              d="M9.79177 18.4397L14.2297 23.0893L27.5434 9.1416"
              stroke="#6B7280"
              strokeWidth="1.90196"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/assets/home/bg.png"
            alt="Background Frame"
            fill
            className="object-cover w-full"
            priority
          />
        </div>
      </div>

      {/* Content with z-index to appear above background */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8 sm:py-12 lg:py-16">
        {/* Header Section */}

        <div className="text-center mb-6 sm:mb-24">

          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-4 sm:w-4 h-0.5 bg-[#1961A4]"></div>
            <span className="text-[#1961A4] font-medium font-Inter text-xs sm:text-sm">Know Us Better</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-Poppins text-[#161C2D] mb-3 sm:mb-4 px-2">
            Driving Progress with Every Rental
          </h1>
          <p className="text-[#4D4D4D] font-Roboto font-normal text-sm sm:text-base lg:text-lg px-4 sm:px-0">
            At Alatron, we don't just rent out machines we partner in your progress.
          </p>
        </div>
        {/* <div className="hidden md:block absolute right-44 top-0 mt-0 w-12 h-12">
              <Image
                 src="/assets/home/chat.png"
                 alt="Chat Support"
                 fill
                 className="object-contain"
               />
             </div> */}

        {/* FAQ Section */}
        <div className="space-y-3 sm:space-y-6">
          {questions.map((item) => (
            <div key={item.id} className="w-full  ">
              {/* Question Button with Tick Icon Container */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Question Button - Width adapts to content */}
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className={`inline-flex items-center justify-between px-3 sm:px-4 py-3 sm:py-2 text-left transition-all duration-200 ${expandedQuestions[item.id]
                      ? 'bg-[#161C2D] text-white'
                      : 'bg-[#161C2D] text-white'
                    }`}
                  style={{
                    borderRadius: '0 12px 12px 12px',
                    fontSize: '14px',
                    fontWeight: '500',
                    minWidth: 'fit-content',
                    width: 'auto'
                  }}
                >
                  <span className="pr-2 sm:pr-4 text-sm sm:text-base whitespace-nowrap font-normal font-Roboto">{item.question}</span>
                  {/* Dynamic tick based on expanded state */}
                  <div className="flex-shrink-0">
                    <MessageTickIcon isRead={expandedQuestions[item.id]} />
                  </div>
                </button>

                {/* Plus Icon Container - Separate Division */}
                <div
                  className={`flex items-center justify-center w-8 h-8 sm:w-8 sm:h-8 rounded-full cursor-pointer ${expandedQuestions[item.id]
                      ? ''
                      : 'bg-white hover:bg-gray-50'
                    }`}
                  style={{
                    backgroundColor: expandedQuestions[item.id] ? '#10B981' : '#DEDEDE',
                    border: expandedQuestions[item.id] ? 'none' : '1px solid #DEDEDE',
                    alignSelf: 'center'
                  }}
                  onClick={() => toggleQuestion(item.id)}
                >
                  <Plus
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 ${expandedQuestions[item.id]
                        ? 'text-white rotate-45'
                        : 'text-black'
                      }`}
                  />
                </div>
              </div>

              {/* Answer Section */}
              {expandedQuestions[item.id] && (
                <div
                  className="mt-2 bg-white border border-gray-200 mx-0 sm:mx-0"
                  style={{
                    borderRadius: '12px 0 12px 12px',
                    border: '1px solid #F1F1F1',
                    background: '#FFF',
                    boxShadow: '0 5.477px 21.1px 0 rgba(0, 0, 0, 0.06)',
                    padding: '12px 16px',
                    minHeight: 'fit-content'
                  }}
                >
                  <div className="flex items-start justify-center gap-3 font-Roboto font-normal">
                    <p className="text-[#333131] text-sm sm:text-base leading-relaxed flex-1">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default AlatronFAQ;