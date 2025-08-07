
// "use client";
// import { useRef, useState } from "react";
// import { motion } from "framer-motion";

// export default function BannerCarousel() {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const backgroundImage = "/assets/home/all1.jpg";

//   const equipmentImages = [
//     "/assets/home/vd1.mp4",
//     "/assets/home/vd2.mp4",
//     "/assets/home/vd3.mp4",
//     "/assets/home/vd4.mp4",
//   ];

//   const commonContent = {
//     title: "#1 Platform For Daily Heavy Equipment Rentals",
//     // label: "Top Rental Equipment's, All In One Place",
//     description:
//       "From Backhoes To Bulldozers, Alatron Keeps Your Job Moving Forward.",
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[100vh] w-full overflow-hidden">
//         <motion.div
//           initial={{ scale: 1 }}
//           animate={{ scale: 1.05 }}
//           transition={{
//             duration: 8,
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         >
//           <div className="absolute inset-0 bg-black opacity-10"></div>
//         </motion.div>

//         {/* Equipment video thumbnails */}
//         <div className="hidden md:flex justify-center items-end gap-1 absolute bottom-0 w-full z-20 px-4 md:px-8">
//           {equipmentImages.map((src, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 * index }}
//               className={`rounded-xl overflow-hidden shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300 ${
//                 index === 0 || index === 3
//                   ? "w-[140px] h-[160px] sm:w-[160px] sm:h-[180px] md:w-[200px] md:h-[180px] lg:w-[220px] lg:h-[260px] xl:w-[240px] xl:h-[280px] mb-12 md:mb-16"
//                   : "w-[140px] h-[160px] sm:w-[160px] sm:h-[180px] md:w-[200px] md:h-[180px] lg:w-[220px] lg:h-[260px] xl:w-[240px] xl:h-[280px] mb-0"
//               }`}
//             >
//               {src.endsWith(".mp4") ? (
//                 <video
//                   src={src}
//                   muted
//                   autoPlay
//                   loop
//                   playsInline
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <img
//                   src={src}
//                   alt={`Equipment ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               )}
//             </motion.div>

            
//           ))}
//         </div>

//         {/* Text content */}
//         <div className="relative z-10 w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-12 lg:px-24 py-4 sm:py-8 md:py-16 lg:py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, delay: 1 }}
//             className="max-w-4xl text-center w-full md:mb-32 lg:mb-60"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               className="inline-block border border-yellow-400 rounded-full px-3 py-1.5 mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-pulse max-w-full"
//             >
//               <p className=" text-yellow-400 text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-Roboto font-normal tracking-wide leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
//                 {commonContent.title}
//               </p>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.4 }}
//               className="text-white font-Poppins text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight sm:leading-snug px-1 sm:px-2"
//             >
//               <span className="block">Top Rental Equipment's,</span>
//   <span className="block">All In One Place</span>

//               {commonContent.label}
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.6 }}
//               className="text-[#BFBFBF] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-Roboto font-normal leading-relaxed mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto px-1 sm:px-2"
//             >
//               {commonContent.description}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.8 }}
//               className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center px-1"
//             >
//               <button
//                 className="w-full xs:w-auto px-4 xs:px-6 md:px-8 lg:px-6 py-2.5 xs:py-2 md:py-3 xs:text-sm sm:text-base md:text-lg lg:text-xl rounded-xl text-black font-medium font-Poppins shadow-lg transition-transform hover:scale-105"
//                 style={{
//                   background:
//                     "linear-gradient(177deg, #FFF 2.99%, #424141 125.49%)",
//                 }}
//               >
//                 Learn More
//               </button>
//               <button
//                 className="w-full xs:w-auto px-2 xs:px-2 md:px-4 lg:px-2 py-2 xs:py-2 md:py-3 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl rounded-xl text-white font-medium font-Poppins shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-1 xs:gap-2 md:gap-3"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, #1A84FF 0%, #10417B 100%)",
//                 }}
//               >
//                 Request Service
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="19"
//                   height="18"
//                   viewBox="0 0 19 18"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.4517 2.75164C10.6767 2.52668 10.9819 2.4003 11.3001 2.4003C11.6183 2.4003 11.9235 2.52668 12.1485 2.75164L17.5485 8.15164C17.7735 8.37668 17.8998 8.68185 17.8998 9.00004C17.8998 9.31824 17.7735 9.62341 17.5485 9.84844L12.1485 15.2484C11.9222 15.467 11.6191 15.588 11.3044 15.5853C10.9898 15.5825 10.6888 15.4563 10.4663 15.2338C10.2438 15.0113 10.1176 14.7104 10.1149 14.3957C10.1122 14.0811 10.2331 13.778 10.4517 13.5516L13.7001 10.2H2.3001C1.98184 10.2 1.67661 10.0736 1.45157 9.84857C1.22653 9.62353 1.1001 9.3183 1.1001 9.00004C1.1001 8.68178 1.22653 8.37656 1.45157 8.15151C1.67661 7.92647 1.98184 7.80004 2.3001 7.80004H13.7001L10.4517 4.44844C10.2267 4.22341 10.1004 3.91824 10.1004 3.60004C10.1004 3.28185 10.2267 2.97668 10.4517 2.75164Z"
//                     fill="white"
//                   />
//                 </svg>
//               </button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating buttons */}
//       <div className="fixed right-2 sm:right-4 md:right-6 bottom-2 sm:bottom-4 md:bottom-6 z-50 flex flex-col gap-2">
//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 2.4 }}
//           className="hover:bg-gray-50 p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
//         >
//           <img
//             src="/assets/home/chat.png"
//             alt="Chatbot"
//             className="w-10 h-10 sm:w-12 sm:h-12"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 2.6 }}
//           className="hover:bg-gray-50 p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
//         >
//           <img
//             src="/assets/home/Item.svg"
//             alt="Item"
//             className="w-10 h-10 sm:w-12 sm:h-12"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useRef, useState } from "react";

export default function BannerCarousel() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const backgroundImage = "/assets/home/all1.jpg";

  const equipmentImages = [
    "/assets/home/vd1.mp4",
    "/assets/home/vd2.mp4",
    "/assets/home/vd3.mp4",
    "/assets/home/vd4.mp4",
  ];

  const commonContent = {
    title: "#1 Platform For Daily Heavy Equipment Rentals",
    description:
      "From Backhoes To Bulldozers, Alatron Keeps Your Job Moving Forward.",
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] w-full overflow-hidden">
        {/* Background with animation */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-pulse"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            animation: 'backgroundZoom 8s ease-in-out infinite alternate'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        {/* Equipment video thumbnails with proper alignment */}
        <div className="hidden md:flex justify-center items-end absolute bottom-0 w-full z-20 px-4 md:px-8 pb-0">
          <div className="flex justify-center items-end gap-1 max-w-6xl w-full">
            {equipmentImages.map((src, index) => {
              // Define positioning classes for each video
              const getVideoClasses = (idx) => {
                const baseClasses = "rounded-xl overflow-hidden shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300";
                const sizeClasses = "w-[140px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px]";
                
                if (idx === 1 || idx === 2) {
                  // Outer videos - raised higher and bottom cut off
                  return `${baseClasses} ${sizeClasses} -mb-12 md:-mb-16 lg:-mb-15`;
                } else {
                  // Inner videos - lower position, fully visible
                  return `${baseClasses} ${sizeClasses} -mb-5`;
                }
              };

              return (
                <div
                  key={index}
                  className={getVideoClasses(index)}
                  style={{
                    opacity: 0,
                    transform: 'translateY(30px)',
                    animation: `slideInUp 0.6s ease-out ${0.2 * index}s forwards`
                  }}
                >
                  {src.endsWith(".mp4") ? (
                    <video
                      src={src}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={src}
                      alt={`Equipment ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Text content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-12 lg:px-24 py-4 sm:py-8 md:py-16 lg:py-20">
          <div className="max-w-4xl text-center w-full md:mb-32 lg:mb-45">
            {/* Animated badge */}
            <div
              className="inline-block border border-yellow-400 rounded-full px-3 py-1.5 mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-pulse max-w-full"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 1s ease-out 1.2s forwards'
              }}
            >
              
              <p
  className="
    text-center
    font-roboto
    font-medium
    capitalize
    tracking-wide
    animate-pulse
    overflow-hidden
    whitespace-nowrap
    text-ellipsis
  "
  style={{
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '80px',
    letterSpacing: '-0.28px',
    background: 'linear-gradient(90deg, #A57D24 0%, #D8BE62 21.12%, #F1DD80 32.8%, #FBF2A8 52.4%, #F1DD80 72.98%, #A57D24 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  {commonContent.title}
</p>

            </div>

            {/* Main heading */}
            <h2
              className="text-white font-bold text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight sm:leading-snug px-1 sm:px-2"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 1s ease-out 1.4s forwards'
              }}
            >
              <span className="block">Top Rental Equipment's,</span>
              <span className="block">All In One Place</span>
            </h2>

            {/* Description */}
            <p
              className="text-[#BFBFBF] text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto px-1 sm:px-2"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 1s ease-out 1.6s forwards'
              }}
            >
              {commonContent.description}
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center px-1"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 1s ease-out 1.8s forwards'
              }}
            >
              <button
                className="w-full px-6 xs:w-auto xs:px-6 md:px-8 lg:px-10 py-2.5 xs:py-2 md:py-3 xs:text-sm sm:text-base md:text-lg lg:text-base rounded-xl text-black font-medium shadow-lg transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(177deg, #FFF 2.99%, #424141 125.49%)",
                }}
              >
                Learn More
              </button>
              <button
                className="w-full xs:w-auto px-2 xs:px-2 md:px-4 lg:px-2 py-2 xs:py-2 md:py-3 text-xs xs:text-sm sm:text-base md:text-lg lg:text-base rounded-xl text-white font-medium shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-1 xs:gap-2 md:gap-3"
                style={{
                  background: "linear-gradient(180deg, #1A84FF 0%, #10417B 100%)",
                }}
              >
                Request Service
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M10.4517 2.75164C10.6767 2.52668 10.9819 2.4003 11.3001 2.4003C11.6183 2.4003 11.9235 2.52668 12.1485 2.75164L17.5485 8.15164C17.7735 8.37668 17.8998 8.68185 17.8998 9.00004C17.8998 9.31824 17.7735 9.62341 17.5485 9.84844L12.1485 15.2484C11.9222 15.467 11.6191 15.588 11.3044 15.5853C10.9898 15.5825 10.6888 15.4563 10.4663 15.2338C10.2438 15.0113 10.1176 14.7104 10.1149 14.3957C10.1122 14.0811 10.2331 13.778 10.4517 13.5516L13.7001 10.2H2.3001C1.98184 10.2 1.67661 10.0736 1.45157 9.84857C1.22653 9.62353 1.1001 9.3183 1.1001 9.00004C1.1001 8.68178 1.22653 8.37656 1.45157 8.15151C1.67661 7.92647 1.98184 7.80004 2.3001 7.80004H13.7001L10.4517 4.44844C10.2267 4.22341 10.1004 3.91824 10.1004 3.60004C10.1004 3.28185 10.2267 2.97668 10.4517 2.75164Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating buttons */}
      <div className="fixed right-2 sm:right-4 md:right-6 bottom-2 sm:bottom-4 md:bottom-6 z-50 flex flex-col gap-2">
        <div
          className="hover:bg-gray-50 p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
          style={{
            opacity: 0,
            transform: 'scale(0)',
            animation: 'scaleIn 0.5s ease-out 2.4s forwards'
          }}
        >
          <img
            src="/assets/home/chat.png"
            alt="Chatbot"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </div>

        <div
          className="hover:bg-gray-50 p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer"
          style={{
            opacity: 0,
            transform: 'scale(0)',
            animation: 'scaleIn 0.5s ease-out 2.6s forwards'
          }}
        >
          <img
            src="/assets/home/Item.svg"
            alt="Item"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes backgroundZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}