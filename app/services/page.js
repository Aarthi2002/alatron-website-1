// import React from 'react'
// import { AboutBanner, HeadingSection } from '../utility/components/utility-component';
// import Image from 'next/image';

// const Services = () => {
//   // Array of service data
//   const services = [
//     {
//       title: "ERP Solutions",
//       description: "optimize your business with tailored ERP solutions that seamlessly integrate all operations, enhancing efficiently,productivity,and scalability.",
//       imageSrc: "/assets/service/serv1.webp",
//     },
//     {
//       title: "CRM Development",
//       description: "Boost sales and build lasting customer relationships with intelligent, customized CRM systems that optimize every interaction.",
//       imageSrc: "/assets/service/serv2.webp",
//     },
//     {
//       title: "SaaS Solutions",
//       description: "Empower your business with flexible, cloud-based SaaS solutions designed for scalability, innovation, and long-term growth.",
//       imageSrc: "/assets/service/serv3.webp",
//     },
//     {
//       title: "Mobile App Development",
//       description: "Crafting intuitive mobile apps that enhance user engagement and offer seamless experiences on the go.",
//       imageSrc: "/assets/service/serv4.webp",
//     },
//     {
//       title: "Web Application",
//       description: "Technology can be complicated, but we’ve seen it all before and can help you with any IT issue.",
//       imageSrc: "/assets/service/serv5.webp",
//     },
//     {
//       title: "SCM Solutions",
//       description: "Optimize your supply chain with advanced solutions that enhance visibility, reduce costs, and improve efficiency.",
//       imageSrc: "/assets/service/serv6.webp",
//     },
//     {
//       title: "Web Developement",
//       description: "Create dynamic, responsive websites that engage your audience and fuel business growth.",
//       imageSrc: "/assets/service/web 1.png",
//     },
//     {
//       title: "UI/UX Design",
//       description: "Creating visually striking and user-friendly designs that well elevate your digital presence.",
//       imageSrc: "/assets/service/UIUX.png",
//     },
//   ];

//   return (
//     <main>
//       <div>
//         <AboutBanner
//           title={"Our IT Services"}
//           subtitle={"Shrewd has pioneered IT services in New York for 5 years, consistently delivering business value with the latest technology."}
//         />
//       </div>

//       <div className='serSec1 z-10 pt-10 pb-10 brand-container'>
//         <HeadingSection
//           title={"Global Solution"}
//           subtitle={"Technology solutions to help business "}
//         />
//         <p className="text-sm md:text-[16px] leading-normal text-[#000] pt-4 w-5/6 m-auto text-center">
//         Empower your business with cutting-edge technology that enhances efficiency, boosts productivity, and ensures security. From automation to cloud solutions, stay ahead with innovative IT strategies designed for success.
//         </p>
//         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full pt-10 gap-8">
//   {services.map((service, index) => (
//     <li key={index} className="flex">
//       <div className="group rounded-xl text-center bg-white p-8 shadow-[0px_0px_10px_rgba(0,0,0,0.25)] hover:bg-[var(--dark-blue)] duration-300 h-full flex flex-col">
//         <h6 className="md:text-[20px] text-[#0E2B5C] font-medium group-hover:text-[#fff]">{service.title}</h6>
//         <Image src={service.imageSrc} className="py-5 m-auto" width={80} height={80} alt={service.title} />
//         <hr className='w-24 mx-auto h-[8px] bg-stone-200 rounded-xl ' />
//         <p className="text-sm md:text-[16px] leading-normal text-[var(--light-blue)] pt-2 group-hover:text-[#fff]">
//           {service.description}
//         </p>
//       </div>
//     </li>
//   ))}
// </ul>
// </div>
//     </main>
//   );
// };

// export default Services;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  // Array of service data
  const services = [
    {
      title: "Reach Millions with Powerful Android Mobile Apps…..",
      description:
        "Mobile applications have become a necessary component of our daily living in the current digital era. Users rely on mobile apps to access services and stay connected, whether for work, education, entertainment, or communication. At Avanexa, we are experts in developing Android mobile applications and offer complete methods that are modified to the needs of your business.",
    },
    {
      title: "Why Choose Android for Your Mobile Application?",
      description:
        "Mobile Android is the most popular mobile operating system, with more than 70% of the global mobile market share. Android apps provide businesses with unmatched chances connect with a wide audience.Android for your mobile app gives you access to millions of prospective customers on a variety of devices, including tablets, TVs, smartwatches, and smartphones.Your business can gain from an engaged audience, a burgeoning app store, and the opportunity to experiment with upgraded technologies by creating an Android app At Avanexa, we are experts in developing Android mobile applications and offer complete methods that are modified to the needs of your business.",
    },
    {
      title: "Our Android Mobile Application Services",
      description:
        "To help you through each step of the app development procedure, we at Avanexa provide a comprehensive selection of Android app development services. Here is a more detailed look at the services we provide:",
    },
  ];
  const services2 = [
    {
      title: "Consultation and Strategy",
      description:
        "Understanding your target market, competition, and corporate goals thoroughly is crucial before beginning the procedure for development. With carefulconsideration of your particular needs, we create a comprehensive project plan and work directly with you to determine essential features, design preferences,and performance objectives.",
    },
    {
      title: "Custom Android App Development",
      description:
        "We promise that your application is developed to satisfy your specific business requirements with our custom Android app development services.We approach app development from a user-centred perspective, ensuring that your application is simple to use, entertaining, and intuitive. Our development team creates flexible, safe programs that stand out in the crowded app store using the newest tools and technologies, such as Java and Kotlin.",
    },
    {
      title: "UI/UX Design",
      description:
        "We Our design team focuses on creating visually appealing and easy-to-use interfaces that enhance the overall user experience. We prioritize usability and performance, making sure your app is quick, flexible, and agile and delivers a seamless experience across all Android devices.From wireframes to interactive prototypes, we involve you in every step of the design process to ensure the final product aligns with your vision and brand identity.We aim to develop an application that goes beyond looking great which keeps users engaged and coming back for more.",
    },
    {
      title: "Integration with Third-Party Services",
      description:
        "We Our Integration with third-party services, like social networking networks, payment gateways, and analytics programs, is necessary for many contemporary mobile applications.With our team’s vast experience integrating a variety of APIs and services into Android apps, you can be sure that your app will work flawlessly and communicate with other systems.We have the know-how to provide a completely integrated solution, whether it involves connecting with cloud services, enabling in-app purchases, or integrating a custom backend.",
    },
    {
      title: "App Testing and Quality Assurance",
      description:
        "WeWe at Avanexa are committed to the quality of the software. Our thorough testing and quality assurance services guarantee that your Android app is safe, devoid of bugs, and runs smoothly on a variety of hardware and operating systems.Every step of the development process is thoroughly tested, from usability tests to unit tests, in order to find and fix any problems prior to deployment.To verify app operation, performance, security, and user experience, we employ both automated and human testing techniques. Our objective is to provide a top-notch application that surpasses customer expectations while adhering to industry standards.",
    },
    {
      title: "App Deployment and Launch",
      description:
        "WeWe at Our team will support you during the installation procedure when your app is prepared for release, guaranteeing a seamless and effective distribution on the Google Play Store. We take care of everything, including handling the approval process, optimising app store listings, and getting your software ready for submission.Additionally, our team offers post-launch assistance to keep an eye on the functionality of the app and handle any problems that might occur after release.We are aware that the release of an app is only the start.  enhance the functionality and user experience of the app, our team will assist you in tracking user comments, keeping an eye on analytics, and making the required adjustments.",
    },
    {
      title: "Ongoing Maintenance and Support",
      description:
        "WeTo stay up to date with security patches, new operating system releases, and changing user requirements, mobile applications need constant maintenance.We offer frequent upgrades, bug patches, and feature additions to make sure your software remains current in the ever-evolving digital landscape.Additionally, our team is on hand to assist with technical issues and troubleshoot any emerging concerns. We are dedicated to ensuring your applicationsucceeds in the long run and providing dependable, timely assistance to give you peace of mind. Moreover, our range of Android app services includeCustom app developmentndroid app development consultation Android UI/UX design Android software testingGPS & Wi-fi enabled application",
    },
  ];
  return (
    <main>
      {/* <div>
         <AboutBanner
          title={"Our IT Services"}
          subtitle={"Shrewd has pioneered IT services in New York for 5 years, consistently delivering business value with the latest technology."}
        />
        <AboutBanner
          title={"Our IT Services"}
          subtitle={"Shrewd has pioneered IT services in New York for 5 years, consistently delivering business value with the latest technology."}
        />
      </div>  */}

      <div
        className="flex flex-col h-[60vh] justify-center items-center bg-no-repeat bg-fixed bg-cover  bg-center relative overflow-hidden"
        style={{ backgroundImage: `url("/assets/basic/sub-banner-1.webp")` }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 text-center px-5">
          <h6 className="text-[#F0F0F0] text-sm md:text-[15.42px] font-Heebo  uppercase leading-normal w-full font-black text-center">
            Services
          </h6>
          <h2 className="text-[#F0F0F0] text-xl lg:text-[68px] md:text-[58px] font-extrabold text-nowrap leading-normal w-full  text-center ">
            Mobile App Development
          </h2>
        </div>
      </div>
      <div>
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-5 max-sm:py-5 w-[88%] m-auto text-center"
          >
            <h2 className="text-[#212529] text-[20px] font-extrabold md:text-[36px] font-Outfit">
              {item.title}
            </h2>
            <p className="text-sm md:text-[16px] leading-[30px] text-[#141C2E] font-normal pt-4 w-[88%] m-auto text-center font-Roboto">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className=" items-center flex justify-center w-[88%] py-10 m-auto">
        <Image
          // src="/assets/service/serv-1.webp"
          src="/assets/service/serv-1.webp"
          className="w-full h-auto"
          width={200}
          height={200}
          alt="service"
        />
      </div>

      <div>
        {services2.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-5 max-sm:py-5 w-[88%] m-auto text-center"
          >
            <h2 className="text-[#212529] text-[20px] font-extrabold md:text-[36px] font-Outfit leading-[42px]">
              {item.title}
            </h2>
            <p className="text-sm md:text-[16px] leading-[30px] text-[#141C2E] pt-4 w-[88%] m-auto text-center font-Roboto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className=" items-center flex justify-center w-[88%] py-10 m-auto">
        <Image
          src="/assets/service/serv-2.webp"
          className="w-full h-auto"
          width={200}
          height={200}
          alt="service"
        />
      </div>

      {/* CONTACT WITH US */}
      <div className="bg-[#EEF0FF] w-[88%] py-10 px-4 md:px-12 m-auto border-l-4 border-[#11249B] mb-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-xl md:text-2xl font-semibold text-black text-center md:text-left">
            If you want to start your journey with us, talk to us….
          </h3>
          <Link href="/#Quote ">
            <button className="bg-gradient-to-r from-[#1B6DD9] to-[#11249B] hover:from-[#11249B] hover:to-[#1B6DD9] text-white px-6 py-3 rounded-xl  ">
              CONTACT WITH US
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Services;
