'use client'

import React from 'react';
import Image from 'next/image';

const FeaturedEquipment = () => {
  const equipmentData = [
    {
      id: 1,
      name: "DX-T830 Wheel Loader",
      description: "A powerful, reliable machine for lifting and loading in construction.",
      image: "/assets/home/jcb1.jpg",
      backgroundImage: "/assets/equipment/bg-wheel-loader-1.png"
    },
    {
      id: 2,
      name: "DX-PC400 Excavator",
      description: "Heavy-duty excavator for deep digging and tough construction work.",
      image: "/assets/home/jcb2.jpg",
      backgroundImage: "/assets/equipment/bg-excavator.png"
    },
    {
      id: 3,
      name: "DX-G705 Power Grader",
      description: "Strong grader for accurate road and earth leveling.",
      image: "/assets/home/jcb3.jpg",
      backgroundImage: "/assets/equipment/bg-power-grader.png"
    },
    {
      id: 4,
      name: "DX-SX200 Drum Roller",
      description: "Durable single-drum roller for efficient soil and asphalt.",
      image: "/assets/home/jcb4.jpg",
      backgroundImage: "/assets/equipment/bg-drum-roller.png"
    },
    {
      id: 5,
      name: "DX-90DT Forklift",
      description: "A powerful, reliable machine for lifting and loading in construction.",
      image: "/assets/home/jcb5.jpg",
      backgroundImage: "/assets/equipment/bg-forklift.png"
    },
    {
      id: 6,
      name: "DX-T830 Wheel Loader",
      description: "A Heavy-duty diesel forklift for lifting and handling heavy loads.",
      image: "/assets/home/jcb6.jpg",
      backgroundImage: "/assets/equipment/bg-wheel-loader-2.png"
    }
  ];

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Background Image */}
      
      
      {/* Background Pattern Overlay */}
<div className="absolute inset-0 z-0">
  <div className="w-full h-full bg-[url('/assets/home/bg-1.png')] bg-cover bg-center bg-no-repeat"></div>
</div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-4 h-[2px] bg-[#086DCC]"></div>
            <span className="text-[#086DCC] font-medium font-Inter text-md sm:text-base tracking-wider">
              Equip Your Work
            </span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-Poppins text-[#FFFFFF] mb-4 sm:mb-6 px-4">
            Featured Equipment's
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-[#979797] max-w-3xl mx-auto leading-relaxed px-4 font-Roboto font-normal ">
            At Alatron, we don't just rent out machines we partner in your progress.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {equipmentData.map((equipment) => (
            <div 
              key={equipment.id} 
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Equipment Image Container - Dark Blue Background */}
              <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
                {/* Equipment Image */}
                <div className="relative w-full h-full p-4 sm:p-5 md:p-6">
                  <Image
                    src={equipment.image}
                    alt={equipment.name}
                    fill
                    className="object-fit group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 33vw"
                  />
                </div>
              </div>

              {/* Equipment Details - White Background */}
              <div className="relative text-center p-4  rounded-t-2xl mt-[-6px] sm:p-5 bg-white flex-grow flex flex-col justify-center min-h-[120px] sm:min-h-[130px]">
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#272532] mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1 leading-tight font-Poppins">
                    {equipment.name}
                  </h3> 
                  
                  <p className="text-[#161C2D] font-normal leading-relaxed text-base sm:text-base line-clamp-2 font-Roboto">
                    {equipment.description}
                  </p>
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
        <button 
            className="inline-flex items-center gap-2 sm:gap-3 font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-sm sm:text-base text-[#161C2D] font-Poppins"
            style={{
              borderRadius: '8px',
              background: 'linear-gradient(177deg, #FFF 2.99%, #424141 125.49%)'
            }}
          >            <span>View All Equipment's</span>
           
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default FeaturedEquipment;