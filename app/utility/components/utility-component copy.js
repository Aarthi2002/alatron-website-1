"use client"
import React from "react"
import Image from "next/image"
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";


const AboutBanner = ({ title = "Why choose us", subtitle = "Why choose our courses?" }) => {
  return (
    <section className='flex flex-col h-[calc(60vh-80px)]  justify-center py-24 bg-fixed bg-contain bg-center relative overflow-hidden ' style={{ backgroundImage: `url("/assets/basic/sub-banner.webp")` }}>
      {/* Text */}
      <div className="relativea z-10 brand-container flex flex-col justify-center items-center gap-4">
        <h2 className='text-primary text-center px-5 md:px-0 font-semibold w-full md:w-[700px] lg:w-[800px] leading-normal md:text-[46px]'>{title}</h2>
        <h2 className='text-[#F0F0F0] text-sm md:text-[16px] font-normal text-center leading-normal w-full md:w-[600px] lg:w-[600px]'>{subtitle}</h2>
      </div>
    </section>
  ) 
}

const HeadingSection = ({ title = "Why choose us", subtitle = "Why choose our courses?" }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-3">
      <h4 className="uppercase text-primary text-sm font-medium tracking-[3px] ">{title}</h4>
      <div className="text-[22px] md:text-[30px] text-center font-medium leading-normal capitalize">{subtitle}</div>
    </div>
  )
}

const  HomeSection = ({ title = "Our company", subtitle = "Empowering Businesses with Smart Technology" }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-3">
      <h4 className="uppercase text-primary text-sm font-medium tracking-[3px] ">{title}</h4>
      <div className="text-[22px] md:text-[30px] font-medium leading-[30px] md:leading-[38px]">{subtitle}</div>
    </div>
  )
}

const WorldMap = () => {
  const handleCountryClick = (geo) => {
    console.log("Clicked on country: ", geo.properties.NAME);
  };
  return (
    <ComposableMap className="">
      <Geographies geography={'/assets/json/countries.geo.json'}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => handleCountryClick(geo)}
              style={{
                default: { fill: "gray" },
                hover: { fill: "#1DC2EF" },
                pressed: { fill: "#1DC2EF" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

export { AboutBanner, HeadingSection, HomeSection, WorldMap }