// "use client"
// import React from 'react';
// import Image from 'next/image';

// const TrustedSection = () => {
//   const companies = [
//     {
//       id: 1,
//       name: 'Company 1',
//       logo: '/assets/home/Logo-1.png',
//       alt: 'Company 1 Logo'
//     },
//     {
//       id: 2,
//       name: 'Company 2',
//       logo: '/assets/home/Logo-4.png',
//       alt: 'Company 2 Logo'
//     },
//     {
//       id: 3,
//       name: 'Your Company',
//       logo: '/assets/home/Logo-5.png',
//       alt: 'Your Company Logo'
//     },
//     {
//       id: 4,
//       name: 'Company 3',
//       logo: '/assets/home/Logo-8.png',
//       alt: 'Company 3 Logo'
//     },
//     {
//       id: 5,
//       name: 'Your Company 2',
//       logo: '/assets/home/Logo-1.png',
//       alt: 'Your Company 2 Logo'
//     },
    
//   ];

//   const stars = Array(5).fill(0);

//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Award Badge */}
//         <div className="flex flex-col items-center mb-6">
//           <div className="bg-gradient-to-r rounded-full p-3 mb-4">
//             <Image 
//               src="/assets/home/best.svg" 
//               alt="Best Rental Award"
//               width={100} 
//               height={100}
//               className="object-cover"
//             />
//           </div>
//           </div>

//         {/* Section Title */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-[#161C2D] font-Poppins">
//             Trusted by Industry Leaders
//           </h2>
//         </div>

//         {/* Section Subtitle */}
//         <p className="text-center text-[#4D4D4D] text-base max-w-3xl mx-auto mb-12 font-Roboto">
//           From government projects to private contractors, India&apos;s biggest names rely on Alatron to keep their sites moving.
//         </p>

//         {/* Companies Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
//           {companies.map((company, index) => (
//             <div
//               key={company.id}
//               className="flex items-center justify-center p-4 rounded-lg"
//               style={{ 
//                 animationDelay: `${index * 0.1}s`,
//                 animation: 'fadeInUp 0.6s ease-out forwards'
//               }}
//             >
//               <Image
//                 src={company.logo}
//                 alt={company.alt}
//                 width={150}
//                 height={40}
//                 className="object-cover max-w-full h-auto"
//                 priority={index < 3}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
//           {/* Trusted Users Stat */}
//           <div className="text-center border-white shadow px-6">
//             <div className="text-base md:text-sm font-bold text-[#4D4D4D] mb-2">
//               Trusted by 58,900+ Customers and Vendors users

//             </div>
            
//           </div>
                    
//           {/* Rating Stat */}
//           <div className="text-center border-white shadow px-6">
//             <div className="flex items-center justify-center gap-2 mb-2">
//               <div className="flex gap-1">
//                 {stars.map((_, index) => (
//                   <span
//                     key={index}
//                     className="text-blue-700 text-xl animate-pulse"
//                     style={{ 
//                       animationDelay: `${index * 0.2}s`,
//                       animationDuration: '2s'
//                     }}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//               <span className="text-base md:text-sm font-bold text-[#4D4D4D] ml-2">
//                 4.98/5
//               </span>
//             </div>
//           </div>
//         </div>


        
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TrustedSection;

"use client"
import React from 'react';
import Image from 'next/image';

const TrustedSection = () => {
  const companies = [
    {
      id: 1,
      name: 'Company 1',
      logo: '/assets/home/Logo-1.png',
      alt: 'Company 1 Logo'
    },
    {
      id: 2,
      name: 'Company 2',
      logo: '/assets/home/Logo-4.png',
      alt: 'Company 2 Logo'
    },
    {
      id: 3,
      name: 'Your Company',
      logo: '/assets/home/Logo-5.png',
      alt: 'Your Company Logo'
    },
    {
      id: 4,
      name: 'Company 3',
      logo: '/assets/home/Logo-8.png',
      alt: 'Company 3 Logo'
    },
    {
      id: 5,
      name: 'Your Company 2',
      logo: '/assets/home/Logo-1.png',
      alt: 'Your Company 2 Logo'
    },
  ];

  const stars = Array(5).fill(0);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Award Badge */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r rounded-full p-3 mb-4">
            <Image 
              src="/assets/home/best.svg" 
              alt="Best Rental Award"
              width={180} 
              height={180}
              className="object-cover animate-bounce"
            />
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold text-[#161C2D] font-Poppins">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Section Subtitle */}
        {/* <p className="text-center text-[#4D4D4D] text-base max-w-3xl mx-auto mb-12 font-Roboto whitespace-nowrap">
          From government projects to private contractors, India's biggest names rely on Alatron to keep their sites moving.
        </p> */}
        <p className="text-center text-[#4D4D4D] text-base mx-auto mb-12 font-Roboto font-normal whitespace-normal lg:whitespace-nowrap max-w-md sm:max-w-xl lg:max-w-3xl">
  From government projects to private contractors, India's biggest names rely on Alatron to keep their sites moving.
</p>


        {/* Logos Section (Centered with Flex Wrap) */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-4 rounded-lg"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <Image
                src={company.logo}
                alt={company.alt}
                width={150}
                height={40}
                className="object-cover h-[60px] w-auto mx-auto animate-pulse"
                priority={index < 3}
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Trusted Users Stat */}
          <div className="text-center items-center border  rounded px-6 py-2 shadow">
            <div className="text-base md:text-sm font-poppins font-semibold text-[#4D4D4D] mb-2">
              Trusted by 58,900+ Customers and Vendors
            </div>
          </div>

          {/* Rating Stat */}
          <div className="text-center border rounded px-6 py-1 shadow">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
              <div className="flex space-x-1">
  {Array(5).fill(0).map((_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      className="text-[#1A84FF]"
      style={{
        animationDelay: `${index * 0.2}s`,
        animationDuration: '2s',
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82285 3.0657C10.1962 2.1682 11.4695 2.1682 11.8428 3.0657L13.5778 7.23737L18.0812 7.59904C19.0512 7.67654 19.4445 8.88654 18.7053 9.51987L15.2745 12.459L16.322 16.8532C16.5478 17.7999 15.5187 18.5474 14.6887 18.0407L10.8328 15.6857L6.97701 18.0407C6.14701 18.5474 5.11785 17.799 5.34368 16.8532L6.39118 12.459L2.96035 9.51987C2.22118 8.88654 2.61451 7.67654 3.58451 7.59904L8.08785 7.23737L9.82285 3.0657Z"
        fill="#1A84FF"
      />
    </svg>
  ))}
</div>

              </div>
              <span className="text-base md:text-sm font-bold ml-2">
  <span className="text-black">4.98</span><span className="text-[#4D4D4D]">/5</span>
</span>

            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedSection;
