// import React from 'react'
// import { AboutBanner, HeadingSection } from '../utility/components/utility-component'
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaArrowRight } from "react-icons/fa6";
// import BasicService from '../service-api/base-api-service';

// export const metadata = {
//   title: "CaseStudy",
//   description: "Learn more about our commitment to providing top-quality pest control services. With years of experience, our expert team is dedicated to safeguarding your home or business from pests using safe, eco-friendly methods. Discover how we can help you maintain a pest-free environment!",
// };

// const CaseStudy = async () => {

//   const studyData = await BasicService.caseStudy();
//   // console.log(studyData.data, "Study")

//   return (
//     <main className='bg-white'>
//       <div>
//         <AboutBanner title={"Case Studies"} subtitle={"Explore how our tailored solutions have helped businesses overcome challenges, enhance efficiency, and achieve growth."} />
//       </div>
//       {/* CARD SECTION */}
//       <div className='z-10 py-10 brand-container'>

//         <HeadingSection title={"Global Solution"} subtitle={"Technology solutions to help business "} />

//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 py-10 mt-6  xs:mt-2' >
//         {studyData?.data.map((staffitem, index) => (
//   <StaffCard key={staffitem.id || index} staff={staffitem} />
// ))}

//         </div>
//       </div>
//     </main>
//   )
// }

// export default CaseStudy

// const StaffCard = ({ staff }) => {
//   // console.log(staff, "staffs")
//   return (

//     <div className="bg-white rounded-2xl card overflow-hidden w-full p-3 md:p-4 lg:p-5">
//       <div className=" mx-auto "> {/* Image */}
//       {/* Image */}
//       <Image
//         src={staff.logo}
//         width={100}
//         height={100}
//         alt="product"
//         className="w-[100px] h-[100px] object-contain mx-auto responsive"
//       />
//       </div>
//       <div className="text-center flex flex-col gap-1 md:gap-4 mt-3 md:mt-6">
//         <h3 className="text-[14px] md:text-[16px] lg:text-[20px] font-medium text-[#000]">{staff?.title}</h3> {/* Ensure `staff.title` is defined */}
//         <p className="text-sm md:text-[16px] leading-normal font-light text-[#787E87]">
//           {staff?.discription}
//         </p>
//         <a href={staff.url} target='_blank' className="flex justify-center items-center gap-2">
//           <p className='text-primary text-sm md:text-[16px] font-medium '>View Project</p>
//           <FaArrowRight className='text-primary text-sm' />
//         </a>
//       </div>
//     </div>
//   )
// }

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
// import { useState } from "react";

export const metadata = {
  title: "CaseStudy",
  description:
    "Learn more about our commitment to providing top-quality pest control services. With years of experience, our expert team is dedicated to safeguarding your home or business from pests using safe, eco-friendly methods. Discover how we can help you maintain a pest-free environment!",
};

// const CaseStudyIcons = () => {
//   const [expanded, setExpanded] = useState(false);
// };
const caseStudyData = [
  {
    title: "Introduction",
    description:
      "Vasantham is a comprehensive e-learning platform that provides a wide range of paid courses across various domains. Designed to empower learners with quality education, the platform offers an intuitive user experience, seamless course enrollment, and a structured learning environment. To bring this vision to life, Shrewd Business Solution designed and developed a feature-rich e-learning website, ensuring smooth functionality, security, and scalability.",
  },
  {
    title: "Problem Statement",
    description:
      "Vasantham is a dynamic e-learning platform designed to provide learners with a diverse range of paid courses across multiple domains. With a strong emphasis on accessibility and quality education, the platform offers an intuitive user experience, seamless course enrollment, and a well-structured learning environment.To bring this vision to life, Shrewd Business Solution took on the challenge of designing and developing a robust and feature-rich e-learning website. Our team focused on ensuring smooth functionality, security, and scalability to accommodate a growing user base. From an engaging UI/UX to seamless payment integration and an efficient course management system, we built a platform that enhances learning experiences and empowers users to upskill effectively.",
  },
];

const CaseStudy = () => {
  return (
    <main>
      <div>
        <Image
          src="/assets/basic/vasanthambanner.webp"
          alt="Vasantham"
          width={1000}
          height={500}
          className="w-full h-auto object-cover max-sm:h-full md:h-auto "
        />
      </div>
      <div className="w-auto bg-[#FFFFFF] p-3 rounded-xl shadow-lg border-[1px] fixed top-50 left-5 font-Poppins mx-auto max-sm:left-0 lg:mt-[140px]">
        <h4 className="text-[14px] font-Outfit font-black uppercase max-sm:hidden ">
          View our case studies on :
        </h4>
        <div className=" flex gap-5 items-start max-sm:flex-col md:mt-5">
          <Image
            src="/assets/casestudy/icon-1.webp"
            alt="Icon 1"
            width={40}
            height={40}
          />
          <Image
            src="/assets/casestudy/icon-2.webp"
            alt="Icon 2"
            width={40}
            height={40}
          />
          <Image
            src="/assets/casestudy/icon-3.webp"
            alt="Icon 3"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div>
        {caseStudyData.map((item, index) => (
          <div key={index} className="py-5 flex flex-col gap-4">
            <div className="flex flex-col gap-4 w-[80%] mx-auto items-center">
              <h1 className="text-[#212529] text-[20px] md:text-[30px] lg:text-[36px] font-extrabold font-Outfit text-center">
                {item.title}
              </h1>
              <p className="text-[#212529] text-[14px] md:text-[16px] lg:text-[16px] font-Roboto font-[400] text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-10 lg:gap-10 gap-3 md:gap-5 max-sm:mx-5">
        <div>
          <Image
            src="/assets/casestudy/grid-1.webp"
            width={400}
            height={400}
            alt="Vasantham"
            className="lg:w-[587.32px] lg:h-[588.38px] w-[200px] h-[200px] md:w-[350.38px] md:h-[588.38px] "
          />
        </div>
        <div>
          <Image
            src="/assets/casestudy/grid-2.webp"
            width={400}
            height={400}
            alt="Vasantham"
            className="w-[150px] h-[200px] md:w-[250.38px]  md:h-[588.38px] lg:w-[213.38px] lg:h-[588.38px]"
          />
        </div>
        <div>
          <Image
            src="/assets/casestudy/grid-3.webp"
            width={400}
            height={400}
            alt="Vasantham"
            className="lg:h-[588.38px] lg:w-[373.94px] w-[200px] h-[200px]  md:w-[350.38px] md:h-[588.38px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[80%] mx-auto items-center">
        <h1 className="text-[#212529] text-[20px] md:text-[30px] lg:text-[36px] font-extrabold font-Outfit text-center">
          Solutions
        </h1>
        <p className="text-[#212529] text-[14px] md:text-[16px] lg:text-[16px] font-Roboto font-[400] text-center">
          VasanthamTo deliver a seamless and engaging learning experience, we
          implemented a user-centric UI/UX design that ensures intuitive
          navigation and accessibility across devices. A scalable architecture
          was developed to accommodate a growing user base while maintaining
          smooth performance. To facilitate easy enrollment, we integrated a
          secure payment gateway with hassle-free transactions and an efficient
          course management system for structured content delivery. The platform
          is fully mobile-responsive, ensuring accessibility on all devices. A
          robust backend was built for secure data handling, while performance
          optimization techniques were applied to enhance speed and usability.
          Additionally, advanced analytics and reporting features were
          incorporated to track user progress and course effectiveness. Finally,
          our team provides ongoing support and maintenance, ensuring regular
          updates, security enhancements, and continuous improvements for a
          seamless e-learning experience.ers users to upskill effectively.
        </p>
      </div>
      <div className="flex flex-col gap-4 mx-auto items-center max-sm:mx-5">
        <h1 className="text-[#212529] text-[20px] md:text-[30px] lg:text-[36px] font-extrabold font-Outfit text-center">
          Process
        </h1>
        <Image
          src="/assets/casestudy/process.webp"
          alt="Vasantham Process"
          width={1000}
          height={500}
          className="w-auto h-auto max-sm:h-full md:h-auto bg-white lg:w-[1100px]"
        />
        <h1 className="text-[#212529] text-[20px] md:text-[30px] lg:text-[36px] font-extrabold font-Outfit text-center">
          UI Deployment
        </h1>
        <Image
          src="/assets/casestudy/vasantham frame.png"
          alt="Vasantham UI"
          width={1000}
          height={500}
          className="w-auto h-auto  bg-white lg:w-[1300px] lg:h-auto object-center md:w-[900px] md:h-auto "
        />
      </div>
      <div className="flex flex-col gap-4 w-[80%] mx-auto items-center">
        <h1 className="text-[#212529] text-[20px] md:text-[30px] lg:text-[36px] font-extrabold font-Outfit text-center">
          Future Enhancements
        </h1>
        <p className="text-[#212529] text-[14px] md:text-[16px] lg:text-[16px] font-Roboto font-[400] text-center">
          For future enhancements, we plan to integrate AI-powered personalized
          learning to recommend courses based on user preferences and
          performance. A gamification system with badges, leaderboards, and
          rewards will be introduced to boost engagement and motivation. We aim
          to implement live classes and interactive webinars to provide
          real-time learning experiences. Additionally, an AI-driven chatbot
          will be developed to offer instant support and query resolution.
          Multi-language support will be added to enhance accessibility for a
          diverse audience. We also plan to introduce corporate training modules
          to cater to businesses looking for employee upskilling. To improve
          collaboration, we will integrate discussion forums and peer-to-peer
          learning features. Finally, an offline learning mode will be
          introduced, allowing users to download courses and access them without
          an internet connection. These enhancements will further elevate the
          platform’s effectiveness and user experience.
        </p>
        <br />
      </div>
    </main>
  );
};

export default CaseStudy;
