import React from "react";
import { HomeSection } from "./utility/components/utility-component";
import Image from "next/image";
import BannerCarousel from "./utility/components/homepage/banner-carousel";
import Heroslider from "./utility/components/homepage/heroslider";
import OURPROCESSSECTION from "./utility/components/homepage/FeaturedEquipment";
import FaqSection from "./utility/components/homepage/FaqSection";
import { ArrowUpRight } from "lucide-react";
import BasicService from "./service-api/base-api-service";
import FeaturedEquipment from "./utility/components/homepage/FeaturedEquipment";
import ExploreSection from "./utility/components/homepage/ExploreSection";
import TrustedSection from "./utility/components/homepage/TrustedSection";
import TestimonialsSection from "./utility/components/homepage/TestimonialSection";
import NewsletterSignup from "./utility/components/homepage/NewsLetter.Signup";


export const metadata = {
  
};

const Home = async () => {
  const bannerData = await BasicService.homeBanner();
  const testiData = await BasicService.testimonialEmp();
  const casestudyData = await BasicService.casestudyHome();
  const companyData = await BasicService.companyProfile();
  const partnerlogoData = await BasicService.partnerLogos();

  const features = [
    {
      id: 1,
      icon: '/assets/home/Frame.svg',
      title: 'Instant Online Booking',
      description: 'Skip the paperwork. Book your equipment anytime, anywhere — in just a few clicks.'
    },
    {
      id: 2,
      icon: '/assets/home/Frame (1).svg',
      title: 'Reliable, Site-Ready Machines',
      description: 'Our equipment is fully serviced, safety-checked, and ready to hit the ground running.'
    },
    {
      id: 3,
      icon: '/assets/home/Frame (2).svg',
      title: 'On-Time Delivery, Every Time',
      description: 'Your timeline is everything. We deliver on schedule, straight to your site — no surprises.'
    },
    {
      id: 4,
      icon: '/assets/home/Frame (4).svg',
      title: '24/7 Human Support',
      description: 'Questions? Need advice? Our rental support team is just a call or message away.'
    },
    {
      id: 5,
      icon: '/assets/home/Frame (5).svg',
      title: 'Fair, Transparent Pricing',
      description: 'No hidden charges. No last-minute costs. Just clear rental terms that respect your budget.'
    },
    {
      id: 6,
      icon: '/assets/home/Frame (6).svg',
      title: 'Flexible Rental Durations',
      description: 'We\'ve got hourly, daily, and custom rental plans to fit your project.'
    }
  ];

 
  
  
  return (
    <main>
      <BannerCarousel bannerDetails={bannerData?.data} />
      <div className="homesec py-0 px-1 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col text-center md:text-start lg:mt-0">
          <HomeSection />
        </div>
      </div>

      
<section className="bg-white py-12 md:py-20 lg:py-12">
  <div className="brand-container px-4 md:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
      
      {/* Left Image Section */}
      <div className="relative order-2 lg:order-1">
        <div className="relative max-w-[400px] mx-auto"> {/* reduced max width */}
          <Image
            src="/assets/home/dragon3.jpg"
            alt="Forklift in warehouse"
            width={360}
            height={420}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
          
          {/* Floating image */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 xl:top-36 xl:-right-12">
            <div className="rounded p-2 md:p-3 max-w-[160px]">
              <Image
                src="/assets/home/dragon1.jpg"
                alt="Construction worker on site"
                width={160}
                height={170}
                className="w-full h-auto rounded-md mb-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-[2px] bg-[#1961A4]"></div>
          <span className="text-[#1961A4] font-medium font-Poppins text-sm md:text-base tracking-wide">
            Know Us Better
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#161C2D] font-Poppins leading-tight">
          Powering Every Project, <span className="block">One Rental at a Time.</span>
        </h1>

        <p className="text-[#4D4D4D] text-[18px] md:text-sm lg:text-lg leading-relaxed max-w-2xl font-Roboto font-normal">
          At Alatron, we don't just rent machines — we enable progress. Whether 
          it's your first site or your fiftieth, we bring the right equipment and 
          support to get your job done, on time and on budget.
        </p>

        <div className="pt-4">
          
          <button
  className="text-[#FFFFFF] font-normal font-Poppins px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-[14px]"
  style={{
    background: "linear-gradient(180deg, #1A84FF 0%, #10417B 100%)"
  }}
>
  Learn More
</button>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* Home sec-2 */}
      <section className="relative w-full min-h-[700px] py-2 overflow-hidden"
      style={{ backgroundImage: "url('/assets/home/bg.png')" }}>
  
  {/* Content wrapper */}
  <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
    {/* Title section */}
    <div className="text-center mb-8 md:mb-20 mt-8">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="w-4 h-[2px] bg-[#1961A4]">

        </div>
        <span className="text-[#1961A4] font-medium text-sm md:text-base tracking-wide font-Inter">
          Why Alatron
        </span>
      </div>
      <div className="text-xl md:text-5xl font-semibold text-[#161C2D] font-Poppins mb-3">
        Why Everyone Count on Alatron
      </div>
      <p className="text-[#4D4D4D] text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-Roboto">
        Built for jobsite realities, trusted by real people
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-white rounded-2xl p-2 md:p-6 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 border border-gray-100"
        >
          <div className="mb-4 flex">
            <div className="w-12 h-12 bg-[#F5F9FF] flex items-center justify-center rounded-2xl">
              <Image
                src={feature.icon}
                // alt={`${feature.title} icon`}
                width={28}
                height={28}
                className="w-6 h-6 animate-pulse"
              />
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-normal font-Poppins text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-Roboto font-normal">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* HomeSec-3-Start */}
          <section className="bg-[#081438] py-6">
            
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-2xl lg:text-2xl xl:text-4xl font-bold text-white leading-tight text-center font-inter">
              Built to Perform.
              Backed by Trust.
            </h2>
          </div>

          {/* Right Content - Statistics */}
          <div className="lg:w-1/2 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-8 sm:gap-12 lg:gap-16">
            {/* Statistic 1 */}
            <div className="text-center">
              <div className="text-2xl sm:text-1xl lg:text-4xl font-extrabold font-Poppins text-white mb-2">
                98%
              </div>
              <div className="text-base sm:text-base text-blue-100 font-Roboto tracking-wide">
                Success Rate
              </div>
            </div>

            {/* Statistic 2 */}
            <div className="text-center">
              <div className="text-2xl sm:text-1xl lg:text-4xl font-extrabold font-Poppins text-white mb-2">
                100%
              </div>
              <div className="text-base sm:text-base text-blue-100 font-Roboto tracking-wide">
                Satisfied Customers
              </div>
            </div>

            {/* Statistic 3 */}
            <div className="text-center">
              <div className="text-2xl sm:text-1xl lg:text-4xl font-extrabold font-Poppins text-white mb-2">
                100%
              </div>
              <div className="text-base sm:text-base text-blue-100 font-Roboto tracking-wide">
                Quality Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

             

      {/* homesec-4 start*/}
      <Heroslider />

{/* home-5 start */}
      <FeaturedEquipment />
      
      
 {/* homesec-6 start */}
 <ExploreSection/>


 {/* home-7start */}
      <FaqSection />

      
      {/* home-8 start */}
<TrustedSection/>

      {/* Homesec-9 start */}
      <TestimonialsSection/>
      {/* homesec-10 Start */}
      <NewsletterSignup/>
    
    </main>
  );
};

export default Home;