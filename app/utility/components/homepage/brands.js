"use client";

import React from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; 
// import Image from 'next/image';
import Image from 'next/image';

export default function Brands({ partnerlogo }) {
    // console.log(partnerlogo.data)

    const settings = {
        type: 'loop',     
        autoplay: true,    
        interval: 4000,     
        speed: 1200,         
        pagination: false,   
        arrows: false,       
        perPage: 6, 
        perMove: 1,
        breakpoints: {
            768: {   // Mobile and small screens
                perPage: 1, 
            },
            1024: {  // Tablets and medium screens
                perPage: 2, 
            },
            1280: {  // Large screens
                perPage: 6, 
            },
        }
    };

    // const logos = [
    //     { id: 1, src: '/assets/home/unilogo.webp', width: 126, height: 30 },
    //     { id: 2, src: '/assets/home/fushion.webp', width: 126, height: 30 },
    //     { id: 3, src: '/assets/home/ticketbox.webp', width: 126, height: 30 },
    //     { id: 1, src: '/assets/home/jarguarr.webp', width: 126, height: 30 },
    //     { id: 2, src: '/assets/home/nanocare.webp', width: 126, height: 35 },
    //     { id: 3, src: '/assets/home/konstruct.webp', width: 126, height: 30 },
    // ];

  return (

    <div className="relative mb-[-40px] w-5/6 mx-auto">
      <div className="bg-[var(--primary-color)] p-3">
        <Splide options={settings}>
            {partnerlogo?.map((logo, index) => (
                <SplideSlide key={index}>
                    <Image 
                        src={logo.image} 
                        width={100} 
                        height={100} 
                        alt="image" 
                        className="w-[80px] h-[80px] object-contain mx-auto"
                    />
                </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>

  )
}