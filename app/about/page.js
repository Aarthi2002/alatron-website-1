import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Learn more about our commitment to providing top-quality pest control services. With years of experience, our expert team is dedicated to safeguarding your home or business from pests using safe, eco-friendly methods. Discover how we can help you maintain a pest-free environment!",
};

const Service = [
  {
    img: "/assets/about/ser-1.webp",
    title: "Proven track record",
    description:
      "With years of experience, we have consistently delivered high-quality solutions, earning trust through innovation and reliability.",
  },
  {
    img: "/assets/about/ser-2.webp",
    title: "Expert team",
    description:
      "Our team consists of skilled professionals with deep expertise and a passion for innovation, ensuring top-quality solutions and exceptional results.",
  },
  {
    img: "/assets/about/ser-3.webp",
    title: "24/7 Support",
    description:
      "We provide round-the-clock assistance to ensure seamless service and prompt resolution of any issues, anytime you need us.",
  },
  {
    img: "/assets/about/ser-4.webp",
    title: "Reliable and Secure",
    description:
      "We prioritize trust and safety, delivering dependable solutions with robust security measures to protect your data and operations.",
  },
];
const Journey = [
  {
    year: "2016 - 2017",
    img: "/assets/about/arrow.png",
    description:
      "Delivering intuitive and visually stunning UI/UX designs that enhance user experience and engagement. Our solutions blend creativity, functionality, and usability for seamless digital interactions.",
  },
  {
    year: "2016 - 2017",
    img: "/assets/about/arrow.png",
    description:
      "Delivering intuitive and visually stunning UI/UX designs that enhance user experience and engagement. Our solutions blend creativity, functionality, and usability for seamless digital interactions.",
  },
  {
    year: "2016 - 2017",
    img: "/assets/about/arrow.png",
    description:
      "Delivering intuitive and visually stunning UI/UX designs that enhance user experience and engagement. Our solutions blend creativity, functionality, and usability for seamless digital interactions.",
  },
  {
    year: "2016 - 2017",
    img: "/assets/about/arrow.png",
    description:
      "Delivering intuitive and visually stunning UI/UX designs that enhance user experience and engagement. Our solutions blend creativity, functionality, and usability for seamless digital interactions.",
  },
];
const Journey2 = [
  {
    year: "2016 - 2017",
    img: "/assets/about/arrow.png",
    description:
      "Delivering intuitive and visually stunning UI/UX designs that enhance user experience and engagement. Our solutions blend creativity, functionality, and usability for seamless digital interactions.",
  },
  {
    year: "2016 - 2017",
    img: "/assets/about/arrow.png",
    description:
      "Delivering intuitive and visually stunning UI/UX designs that enhance user experience and engagement. Our solutions blend creativity, functionality, and usability for seamless digital interactions.",
  },
  {
    year: "2016 - 2017",
    img: "/assets/about/arrow.png",
    description:
      "Delivering intuitive and visually stunning UI/UX designs that enhance user experience and engagement. Our solutions blend creativity, functionality, and usability for seamless digital interactions.",
  },
  {
    year: "2016 - 2017",
    img: "/assets/about/arrow.png",
    description:
      "Delivering intuitive and visually stunning UI/UX designs that enhance user experience and engagement. Our solutions blend creativity, functionality, and usability for seamless digital interactions.",
  },
];

const About = () => {
  return (
    <main>
      <div
        className="flex flex-col h-[50vh] justify-center items-center bg-no-repeat bg-fixed bg-cover relative overflow-hidden "
        style={{ backgroundImage: `url("/assets/basic/sub-banner-1.webp")` }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 text-center px-5">
          <h6 className="text-[#F0F0F0] text-sm md:text-[15.42px] font-Heebo  uppercase leading-normal w-full font-black text-center">
            About Us
          </h6>
          <h2 className="text-[#F0F0F0] text-xl lg:text-[68px] md:text-[58px] font-extrabold text-nowrap leading-normal w-full  text-center ">
            Get to know Shrewd
          </h2>
        </div>
      </div>
      <div className="items-center justify-center flex flex-col  mt-[32px] mb-[56px]">
        <h4 className="text-[15.419px] font-Heebo mb-2">KNOW US</h4>
        <h2 className="text-[#212529] text-[20px] font-extrabold md:text-[36px] font-Outfit leading-[42px] mb-[24px]">
          Know about Shrewd
        </h2>
        <p className="text-[16px] md:text-[16px] leading-[30px] text-[#141C2E] pt-4 w-[83%] m-auto text-center font-Roboto">
          Shrewd Business was founded with a vision to transform ideas into
          reality through technology. What started as a small team of passionate
          innovators has now grown into a leading technology solutions provider,
          helping businesses across industries navigate the digital landscape.
          Our expertise spans web and mobile development, UI/UX design, SaaS
          solutions, CRM, AR technologies, and digital branding. We thrive on
          solving complex challenges and delivering solutions that enhance user
          experiences, streamline operations, and fuel business growth. Over the
          years, we have worked with startups, enterprises, and global brands,
          understanding their unique needs and creating customized, scalable,
          and future-proof solutions that drive impact.
        </p>
      </div>
      <div
        className="relative flex h-[720px] max-sm:h-auto overflow-hidden bg-cover bg-no-repeat object-cover md:mb-5 lg:mb-5"
        style={{ backgroundImage: `url("/assets/about/bg-1.webp")` }}
      >
        <div className="relative z-10 flex flex-col items-center justify-between px-5 text-center w-full">
          <div className="flex flex-col items-center  gap-4 mt-8 mb-[56px]">
            <h6 className="w-full text-sm md:text-[15.42px] font-black uppercase leading-normal text-[#212529] font-Heebo">
              OUR TEAM
            </h6>
            <h2
              className="w-full text-xl md:text-[38px] lg:text-[38px] font-Outfit
             font-extrabold leading-normal text-[#212529] whitespace-nowrap "
            >
              Meet Our Exceptional Team
            </h2>
          </div>
          <Image
            src="/assets/about/team-1.webp"
            alt="Team Member"
            width={1000}
            height={1000}
            className="w-[80] object-cover"
          />
        </div>
      </div>
      <div className="items-center flex flex-col justify-center ">
        <h4 className="text-[15.419px] font-Heebo mb-2 text-center uppercase max-sm:mt-10">
          Why we are special
        </h4>
        <h2
          className="items-center text-[20px] md:text-[38px] lg:text-[38px] font-Outfit max-sm:mb-5
         font-extrabold leading-normal text-[#212529] whitespace-nowrap"
        >
          Your Sanctification, Our Service
        </h2>
      </div>
      <div className="relative ">
        {/* Desktop Background (shown on lg screens only) */}
        <div
          className="hidden lg:flex h-[350px] overflow-hidden bg-cover bg-no-repeat object-cover relative  items-center bottom-24 "
          style={{ backgroundImage: `url("/assets/about/frame.webp")` }}
        ></div>

        {/* Tablet Background (shown on md screens only) */}
        <div
          className="md:flex lg:hidden h-[300px] w-[100%] mx-auto overflow-hidden bg-no-repeat bg-center hidden relative bottom-10"
          style={{ backgroundImage: `url("/assets/about/frame0.5.webp")` }}
        ></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-between px-5 text-center w-full lg:top-[-140px] py-5 md:top-[-140px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:items-center mx-auto px-4">
            {Service.map((item, index) => (
              <div
                key={index}
                className="border flex flex-col transition rounded-[9.0634px] bg-white
          lg:w-[324.003px] lg:h-[238.003px] lg:items-start p-[14.5015px] max-sm:items-center max-sm:m-auto md:text-start"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="w-[60px] h-[60px]"
                />
                <h3 className="mt-4 text-[19.5px] font-[700] text-[#212529] font-Outfit leading-[30px] gap-y-[18px] md:text-start">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] text-[#141C2E] leading-[30px] font-Roboto text-start">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="flex flex-col items-center  w-[100%] lg:h-[1320px] md:w-[100%] h-auto overflow-hidden md:relative bg-center bg-no-repeat bg-cover space-y-4 z-10 my-5"
        style={{ backgroundImage: `url("/assets/about/frame1.5.webp")` }}
      >
        <div className="mt-10 mb-5">
          <h4 className="text-[15.419px] font-Heebo mb-2 text-center uppercase max-sm:mt-10 font-[900] text-[#FFFFFF]">
            Journey of shrewd
          </h4>
          <h1 className="text-[20px] md:text-[30px] lg:text-[36px] font-Outfit max-sm:mb-5 text-[#FFFFFF] text-center">
            Our journey 2016 - 2024
          </h1>
        </div>
        <div className="flex justify-center gap-24 max-sm:flex-col max-sm:gap-10 ">
          <div className="space-y-3 max-sm:hidden hidden lg:block">
            {Journey2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col z-10 w-[330px] h-[auto] p-[12.5px] border-[0.9063px] rounded-[9.0634px]"
              >
                <Image
                  src={item.img}
                  alt="Arrow Image"
                  width={50}
                  height={50}
                  className="w-[120px] h-auto relative left-[320px]  max-sm:hidden"
                />
                <h6 className="w-full text-sm md:text-[15.42px] font-black uppercase leading-normal text-[#FFFFFF] font-Heebo">
                  {item.year}
                </h6>
                <p className="text-[16px] md:text-[16px] leading-[30px] text-[#FFFFFF] pt-4 m-auto font-Roboto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div>
            <Image
              src="/assets/about/frame-3.webp"
              alt="Journey Image"
              width={600}
              height={600}
              className="w-[600px] h-auto object-cover md:w-[500px] md:h-auto lg:h-auto lg:w-[600px] max-sm:hidden hidden lg:block "
            />
          </div>
          <div className="space-y-3 max-sm:hidden hidden lg:block">
            {Journey2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col z-10 w-[330px] h-[auto] p-[12.5px] border-[0.9063px] rounded-[9.0634px]"
              >
                <Image
                  src={item.img}
                  alt="Arrow Image"
                  width={50}
                  height={50}
                  className="w-[130px] h-auto relative right-[150px] max-sm:hidden"
                />
                <h6 className="w-full text-sm md:text-[15.42px] font-black uppercase leading-normal text-[#FFFFFF] font-Heebo">
                  {item.year}
                </h6>
                <p className="text-[16px] md:text-[16px] leading-[30px] text-[#FFFFFF] pt-4 m-auto font-Roboto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile and Tablet View */}
        <div className="grid max-sm:grid-col-2 lg:hidden md:grid-cols-2 md:gap-20 gap-5">
          <div className="md:space-y-10 space-y-5">
            {Journey2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col z-10 w-[300px] h-[auto] p-[14.5px] border-[0.9063px] rounded-[9.0634px]"
              >
                <h6 className="w-full text-sm md:text-[15.42px] font-black uppercase leading-normal text-[#FFFFFF] font-Heebo">
                  {item.year}
                </h6>
                <p className="text-[16px] md:text-[16px] leading-[30px] text-[#FFFFFF] pt-4  m-auto font-Roboto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="md:space-y-10 space-y-5">
            {Journey2.map((item, index) => (
              <div
                key={index}
                className="flex flex-col z-10 w-[300px] h-[auto] p-[14.5px] border-[0.9063px] rounded-[9.0634px]"
              >
                <h6 className="w-full text-sm md:text-[15.42px] font-black uppercase leading-normal text-[#FFFFFF] font-Heebo">
                  {item.year}
                </h6>
                <p className="text-[15px] md:text-[16px] leading-[30px] text-[#FFFFFF] pt-4  m-auto font-Roboto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className="flex justify-evenly max-sm:flex-col gap-10 lg:gap-20 lg:mt-10 m-auto lg:w-[90%] my-10 ">
        <div>
          <Image
            src="/assets/about/team.webp"
            alt="Frame Image"
            width={600}
            height={600}
            className="lg:w-[464px] lg:h-[464px] object-cover md:w-[464px] md:h-[464px] "
          />
        </div>
        <div className=" lg:w-[50%] md:w-[50%] w-auto items-center">
          <h4 className="text-[15.419px] font-Heebo mb-2 uppercase  font-[900] text-[#212529] max-sm:text-center">
            Know Us
          </h4>
          <h1 className="text-[20px] md:text-[30px] lg:text-[36px] font-Outfit max-sm:mb-2 text-[#212529] max-sm:text-center">
            Know about shrewd
          </h1>
          <p className="text-[15px] md:text-[16px] leading-[30px] text-[#141C2E] pt-3 m-auto text-start font-Roboto max-sm:text-center max-sm:w-[80%] max-sm:mx-auto">
            At Shrewd Business Solutions, we are driven by innovation and a
            passion for technology. Founded to revolutionize the digital
            landscape, we have become a trusted global technology partner.With
            expertise in web and mobile development, UI/UX design, SaaS, CRM, AR
            technologies, and digital branding, we deliver tailored solutions
            that empower businesses. Our team thrives on solving challenges,
            creating seamless digital experiences, and driving transformation.
            From startups to enterprises, we build scalable, secure, and
            future-ready solutions. At Shrewd, we don’t just develop
            technology—we create experiences that leave a lasting impact.
          </p>


          <Link href="/#Quote ">
            <button
              className="bg-gradient-to-r from-[#1B6DD9] to-[#11249B] hover:from-[#11249B] hover:to-[#1B6DD9] text-white px-6 py-3 rounded-xl font-[Poppins] lg:mt-5 max-sm:mt-8 max-sm:mx-[115px] mx-auto md:mt-5"
            >
              CONTACT US
            </button>
          </Link>
          <br className="md:hidden" />
        </div>
      </div>
    </main>
  );
};
export default About;