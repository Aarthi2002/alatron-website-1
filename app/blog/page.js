import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
  return (
    <main>
      <div
        className="flex flex-col h-[60vh] justify-center items-center bg-no-repeat bg-fixed bg-center bg-cover relative overflow-hidden "
        style={{ backgroundImage: `url("/assets/blog/blog-banner.webp")` }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 text-center px-5">
          <h6 className="text-[#F0F0F0] text-sm md:text-[15.42px] font-Heebo uppercase leading-normal w-full font-black text-center">
            Blogs
          </h6>
          <h2 className="text-[#F0F0F0] text-xl lg:text-[68px] md:text-[58px] font-extrabold text-nowrap leading-normal w-full  text-center ">
            Hotels & Restaurants
          </h2>
        </div>
      </div>
      <div className="items-center justify-center flex flex-col  mt-[32px] text-center">
        <h2 className="text-[#212529] text-[20px] font-extrabold md:text-[36px] font-Outfit leading-[42px]">
          Transforming the Hotel & Restaurant Industry with Digital Solutions
        </h2>
        <p className="text-[16px] md:text-[16px] leading-[30px] text-[#141C2E] pt-4 w-[83%] m-auto text-center font-Roboto mb-[56px]">
          The hospitality industry is evolving rapidly, with technology playing
          a crucial role in enhancing guest experiences, streamlining
          operations, and maximizing revenue. At Shrewd Business Solutions, we
          deliver customized digital solutions for hotels, restaurants, and
          resorts, helping businesses improve efficiency, elevate customer
          service, and stay ahead in a competitive market.
        </p>
        <h2 className="text-[#212529] text-[20px] font-extrabold md:text-[36px] font-Outfit leading-[42px] mb-[10px]">
          Why Choose Shrewd Business Solutions for the Hotels & Restaurants
        </h2>
        <p className="text-[16px] md:text-[16px] leading-[30px] text-[#141C2E] pt-4 w-[83%] m-auto text-center font-Roboto">
          With proven industry expertise, we deliver top-notch digital solutions
          tailored for hotels, restaurants, and guest services. Our scalable and
          secure technology is designed to support growing hotel chains and
          restaurant franchises, ensuring seamless operations. A guest-centric
          approach enhances convenience and personalization, creating
          exceptional experiences for customers. Additionally, our 24/7 support
          and maintenance ensure that businesses run smoothly, addressing any
          technical issues promptly for uninterrupted service.
        </p>
        <Image
          src="/assets/blog/blog-1.webp"
          alt="Blog Image"
          className="w-[86vw] h-auto  rounded object-center mt-[32px] mb-5 lg:mb-[56px] md:mb-[56px]"
          width={1000}
          height={500}
        />
        <h2 className="text-[#212529] text-[20px] font-extrabold md:text-[36px] font-Outfit leading-[42px] mb-[10px]">
          Our Solutions for Hotels & Restaurants
        </h2>
        <p className="text-[16px] md:text-[16px] leading-[30px] text-[#141C2E] pt-4 w-[83%] m-auto text-center font-Roboto mb-[56px]">
          We offer comprehensive digital solutions for hotels and restaurants,
          including all-in-one hotel management software for reservations,
          billing, and guest management, along with cloud-based PMS for seamless
          operations. AI-powered restaurant POS systems streamline billing,
          inventory tracking, and automated kitchen displays for efficiency.
          Online booking platforms, table reservation systems, and dynamic
          pricing models help optimize revenue. Guest experiences are enhanced
          through AI chatbots, virtual assistants, and smart room automation,
          while secure payment solutions support multi-currency, contactless
          payments, and loyalty program integration. Additionally, SEO-optimized
          websites, AI-driven customer insights, and social media tools improve
          online visibility and drive direct bookings.
        </p>
        <h2 className="text-[#212529] text-[20px] font-extrabold md:text-[36px] font-Outfit leading-[42px] mb-[10px]">
          Smart Restaurant Management & POS Systems
        </h2>
        <p className="text-[16px] md:text-[16px] leading-[30px] text-[#141C2E] pt-4 w-[83%] m-auto text-center font-Roboto mb-[56px]">
          Restaurants need speed, precision, and automation to handle high
          customer traffic efficiently. Our AI-powered POS systems ensure
          accurate billing and faster orders, while inventory management
          minimizes wastage. Automated kitchen display systems (KDS) improve
          coordination, and QR code-based ordering enables contactless service.
          With AI-driven menu optimization, businesses can enhance upselling and
          personalize customer experiences for seamless dining.
        </p>
        <h2 className="text-[#212529] text-[20px] font-extrabold md:text-[36px] font-Outfit leading-[42px] mb-[10px]">
          Advanced Online Booking & Reservation Solutions
        </h2>
        <p className="text-[16px] md:text-[16px] leading-[30px] text-[#141C2E] pt-4 w-[83%] m-auto text-center font-Roboto mb-[56px]">
          A well-optimized reservation system enhances occupancy rates, improves
          customer convenience, and boosts profitability. Our integrated online
          booking platforms provide live availability updates, ensuring seamless
          reservations. For restaurants, our smart table reservation systems
          offer instant confirmations and efficient table management. With
          dynamic pricing models, businesses can adjust rates based on demand,
          seasonality, and customer behavior to maximize revenue. Additionally,
          cross-platform integration with third-party travel and food delivery
          platforms expands reach and enhances booking efficiency.
        </p>
        <div className="flex gap-2 justify-center lg:mb-[56px] mx-auto md:mb-[56px] mb-5">
          <Image
            src="/assets/blog/blog-2.webp"
            alt="Blog Image 1"
            width={700}
            height={500}
          />
          <Image
            src="/assets/blog/blog-3.webp"
            alt="Blog Image 2"
            width={700}
            height={500}
          />
        </div>

        <h2 className="text-[#212529] text-[20px] font-extrabold md:text-[36px] font-Outfit leading-[42px] mb-[10px]">
          Revolutionize Your Hotel or Restaurant with Technology!
        </h2>
        <p className="text-[16px] md:text-[16px] leading-[30px] text-[#141C2E] pt-4 w-[83%] m-auto text-center font-Roboto mb-[36px] lg:mb-[56px] md:mb-[56px]">
          Upgrade your hotel or restaurant with smart technology to improve
          efficiency, enhance guest experiences, and increase profits. From
          AI-powered POS systems and online booking platforms to automated
          services and contactless payments, modern solutions make operations
          smoother and customers happier. Stay ahead of the competition by using
          advanced tools to manage reservations, pricing, and customer
          interactions effortlessly.
        </p>
      </div>
    </main>
  );
};

export default BlogList;
