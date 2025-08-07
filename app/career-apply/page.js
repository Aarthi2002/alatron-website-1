
// "use client";
// import React from 'react'

// import { useSearchParams } from 'next/navigation' 
// import { HeadingSection } from '../utility/components/utility-component'
// import ApplicationForm from '../form-component/application-form'
// import BasicService from '../service-api/base-api-service'

// const CareerApply = async () => {
//   const searchParams = useSearchParams();
//   const jobId = searchParams.get('id'); // Get job ID from URL

//   if (!jobId) {
//     return <div className="text-center text-red-500">Error: Job ID is missing</div>;
//   }

//   const applyData = await BasicService.jobDetail(jobId);

//   return (
//     <main className='bg-[#fff]'>
//         <div className='brand-container py-10'>
//           {/* Title */}
//           <HeadingSection title={"Careers"}  subtitle={applyData?.designation_name || "Job Position"} />
          
//           {/* Description */}
//           <div className='w-full'>
//             <h4 className='text-[20px] mt-10 '>Job Description</h4>
//             <div className="list-disc md:p-7 text-[#787E87] text-[16px] brand-container">
//               {/* <li>{applyData?.designation_name}</li>
//               <li>{applyData?.work_type_1}</li>
//               <li>{applyData?.work_type_2}</li>
//               <li>{applyData?.experience}</li> */}
//               <p className='capitalize'>{applyData?.short_description}</p>
//               <p className='capitalize'>{applyData?.description}</p>
//             </div>
//           </div>

//           {/* Application Form */}
//           <div className='md:px-10 lg:px-16 py-10'>
//             <div className='bg-[#d7d7d7]/40 p-6'>
//               <ApplicationForm/>
//             </div>
//           </div>
//         </div>
//     </main>
//   )
// }

// export default CareerApply;

// app/career-apply/page.js (or .tsx)
import React, { Suspense } from "react";
import CareerApplyClient from "./career-apply-client";

const CareerApply = () => {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <CareerApplyClient />
    </Suspense>
  );
};

export default CareerApply;