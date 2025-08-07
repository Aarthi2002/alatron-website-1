import React from 'react'
import { AboutBanner } from '../utility/components/utility-component'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BasicService from '../service-api/base-api-service'


const CareerPage = async () => {
const careerData = await BasicService.getCareer();
console.log(careerData.data,"career")

  
  return (
    <main className='bg-[#fff]'>
      <div>
      <AboutBanner title={"Join Our Exceptional team"} subtitle={"Join our dynamic environment where innovation and technology come together.Advance your career with us and make a real impact."}/>
    </div>
      {/* CARDS */}
      <div className='brand-container py-10'>
        <div className='flex flex-col gap-5 lg:gap-8'>
          {careerData?.data?.map(career =>
            <Interview key={career.id} apply={career} />
          )}
        </div>
      </div>
    </main>
  )
}

export default CareerPage

const Interview = ({ apply }) => {
// console.log(apply,"dfjfdjf")

  return (
    <div className='flex flex-col md:flex-row md:justify-between  items-center border border-[#f0f0f0] rounded-xl p-2 px-5 shadow-sm'>
      <div className='flex flex-col gap-2 '>
        <h4 className='text-[20px] text-[#000] p-1 '>{apply?.designation_name}</h4>
        <p className='text-[#787E87] text-[16px] pb-2 p-1'>{apply?.short_description}</p>
        <div className='flex gap-3 text-sm xs:text-xs items-center pb-3 cursor-pointer '>
          <span className='rounded-full border border-primary p-2 px-5 text-primary capitalize text-[15px]'>{apply?.work_type_1}</span>
          <span className='rounded-full border border-primary p-2 px-5 text-primary capitalize text-[15px]'>{apply?.work_type_2}</span>
          <span className='rounded-full border border-primary p-2 px-5 text-primary capitalize ext-[15px]'>{apply?.experience}</span>
        </div>
      </div>
      {/* Button */}
      <div className='flex justify-center items-center'>
      <Link href={`/career-apply?id=${apply?.id}`}>
  <Button 
    id={`apply-button-${apply?.id}`}
    variant="primary" 
    className="bg-white text-[16px] text-primary font-medium flex gap-2 "
  >
    Apply Now <FaArrowRight className='text-primary text-sm'/> 
  </Button>
</Link>
      </div>
      
    </div>
  )
}