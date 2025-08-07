// import React from 'react'
// import { AboutBanner } from '../utility/components/utility-component'
// import { FaArrowRight } from 'react-icons/fa6'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import BasicService from '../service-api/base-api-service'

// const CareerPage = async () => {
// const careerData = await BasicService.getCareer();
// console.log(careerData.data,"career")

//   return (
//     <main className='bg-[#fff]'>
//       <div>
//       <AboutBanner title={"Join Our Exceptional team"} subtitle={"Join our dynamic environment where innovation and technology come together.Advance your career with us and make a real impact."}/>
//     </div>
//       {/* CARDS */}
//       <div className='brand-container py-10'>
//         <div className='flex flex-col gap-5 lg:gap-8'>
//           {careerData?.data?.map(career =>
//             <Interview key={career.id} apply={career} />
//           )}
//         </div>
//       </div>
//     </main>
//   )
// }

// export default CareerPage

// const Interview = ({ apply }) => {
// // console.log(apply,"dfjfdjf")

//   return (
//     <div className='flex flex-col md:flex-row md:justify-between  items-center border border-[#f0f0f0] rounded-xl p-2 px-5 shadow-sm'>
//       <div className='flex flex-col gap-2 '>
//         <h4 className='text-[20px] text-[#000] p-1 '>{apply?.designation_name}</h4>
//         <p className='text-[#787E87] text-[16px] pb-2 p-1'>{apply?.short_description}</p>
//         <div className='flex gap-3 text-sm xs:text-xs items-center pb-3 cursor-pointer '>
//           <span className='rounded-full border border-primary p-2 px-5 text-primary capitalize text-[15px]'>{apply?.work_type_1}</span>
//           <span className='rounded-full border border-primary p-2 px-5 text-primary capitalize text-[15px]'>{apply?.work_type_2}</span>
//           <span className='rounded-full border border-primary p-2 px-5 text-primary capitalize ext-[15px]'>{apply?.experience}</span>
//         </div>
//       </div>
//       {/* Button */}
//       <div className='flex justify-center items-center'>
//       <Link href={`/career-apply?id=${apply?.id}`}>
//   <Button
//     id={`apply-button-${apply?.id}`}
//     variant="primary"
//     className="bg-white text-[16px] text-primary font-medium flex gap-2 "
//   >
//     Apply Now <FaArrowRight className='text-primary text-sm'/>
//   </Button>
// </Link>
//       </div>

//     </div>
//   )
// }

// 'use client'

// import { useState } from 'react'
// import { useForm } from 'react-hook-form'

// export default function CareerForm() {
//   const { register, handleSubmit, reset } = useForm()
//   const [resume, setResume] = useState(null)

//   const onSubmit = (data) => {
//     const formData = new FormData()
//     Object.entries(data).forEach(([key, value]) => {
//       formData.append(key, value)
//     })
//     if (resume) {
//       formData.append('resume', resume)
//     }

//     console.log('Form Data:', Object.fromEntries(formData.entries()))
//     // TODO: Submit formData to backend

//     reset()
//     setResume(null)
//   }

//   return (
//     <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-4 py-12">
//       {/* Illustration */}
//       <div className="flex justify-center">
//         <img src="/assets/career/career illustration.webp" alt="Career Illustration" className="max-w-full h-auto" />
//       </div>

//       {/* Form Section */}
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <h3 className="text-sm font-bold tracking-widest text-gray-500">CAREERS</h3>
//         <h2 className="text-4xl font-extrabold text-gray-900">Join our dynamic team!</h2>
//         <p className="text-gray-600">
//           Join us and be part of an innovative team where your skills and ideas make an impact.
//           Grow your career in a dynamic and collaborative environment!
//         </p>

//         <p className="font-bold text-lg">
//           I’m
//           <input
//             {...register('name')}
//             type="text"

//             className="border-b border-gray-400 mx-2 px-2 py-1 outline-none"
//           />
//           , I have
//           <input
//             {...register('experience')}
//             type="number"
//             placeholder="Years"
//             className="border-b border-gray-400 mx-2 px-2 py-1 w-20 outline-none"
//           />
//           years of experience in the role of
//           <input
//             {...register('currentRole')}
//             type="text"
//             placeholder="Current Role"
//             className="border-b border-gray-400 mx-2 px-2 py-1 outline-none"
//           />
//           .
//         </p>

//         <p className="font-bold text-lg">
//           I would like to apply for the role of
//           <select
//             {...register('appliedRole')}
//             className="border-b border-gray-400 mx-2 px-2 py-1 outline-none bg-white"
//           >
//             <option value=""></option>
//             <option value="UI/UX Designer">UI/UX Designer</option>
//             <option value="Digital Marketing Executive">Digital Marketing Executive</option>
//             <option value="React Developer">React Developer</option>
//             <option value="Frontend Developer">Frontend Developer</option>
//             <option value="Backend Developer">Backend Developer</option>
//             <option value="Fresher">Fresher</option>
//           </select>
//         </p>

//         {/* Resume Upload */}
//         <div className="flex gap-4 flex-wrap">
//           <label className="inline-flex items-center gap-2 px-4 py-2 border rounded cursor-pointer bg-gray-100 hover:bg-gray-200">
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={(e) => setResume(e.target.files?.[0] || null)}
//               className="hidden"
//             />
//             Upload Your Resume
//             <span className="text-blue-600 font-semibold">&#8682;</span>
//           </label>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//           >
//             Submit Application
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { LuLoader } from "react-icons/lu";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Image from "next/image";
import { LuCloudUpload } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import api from "../service-api/fetch-api-service";

const formSchema = z.object({
  full_name: z
    .string()
    .min(1, { message: "Name is required." })
    .min(3, { message: "Name must be at least 3 characters." }),
  experience: z
    .string()
    .min(1, { message: "Experience is required." })
    .regex(/^\d+$/, { message: "Must be a number." }),
  current_role: z.string().min(1, { message: "Current role is required." }),
  role: z.string().min(1, { message: "Please select a role." }),
  resume: z.instanceof(File).refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "File size must be less than 5MB.",
  }),
});

const ApplicationForm = () => {
  const searchParams = useSearchParams();
  // const JobId = searchParams.get('id');
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      experience: "",
      current_role: "",
      role: "",
      resume: null,
    },
  });

  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }
      setResume(file);
      form.setValue("resume", file);
    }
  };

  const handleDelete = () => {
    setResume(null);
    form.setValue("resume", null);
    toast.info("Resume removed");
  };

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("full_name", values.full_name);
      formData.append("experience", values.experience);
      formData.append("current_role", values.current_role);
      formData.append("role", values.role);
      if (values.resume) {
        formData.append("resume", values.resume);
      }

      const response = await axios.post(
        `https://admin.shrewdbs.com/api/v1/base/application`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("resposne", response);
      toast.success("Application submitted successfully!", {
        position: "top-right",
        style: {
          backgroundColor: "#4CAF50",
          color: "#fff",
          fontWeight: "bold",
        },
      });
      form.reset();
      setResume(null);
    } catch (error) {
      const message = error?.response?.data?.message ?? error.message;
      toast.error(message || "Failed to submit application", {
        position: "top-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex max-sm:flex-col gap-10 items-center max-w-7xl mx-auto px-4 py-12">
      {/* Illustration */}
      <div className="flex justify-center">
        <img
          src="/assets/career/career illustration.webp"
          alt="Career Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Form Section */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h1 className="text-[#212529] text-[12px] font-extrabold md:text-[15.42px] lg:text-[15.42px] font-Outfit uppercase tracking-wider">
            CAREERS
          </h1>
          <h2 className="text-[36px] font-extrabold text-[#212529]">
            Join our dynamic team!
          </h2>
          <p className="text-[#141C2E] font-Roboto text-[16px] ">
            Join us and be part of an innovative team where your skills and
            ideas make an impact. Grow your career in a dynamic and
            collaborative environment!
          </p>
          <br />
        </div>

        <p className="font-extrabold font-Outfit lg:text-4xl leading-[56px] text-2xl text-pretty ">
          I'M
          <input
            {...form.register("full_name")}
            type="text"
            className="border-b-4 border-gray-300 mx-2 px-2 outline-none text-2xl font-medium bg-none"
          />
          , I have
          <input
            {...form.register("experience", {
              required: "Experience is required",
              min: 0,
            })}
            type="number"
            className="border-b-4 text-center border-gray-300 mx-2 px-2 w-20 outline-none text-2xl font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
            style={{ MozAppearance: "textfield" }}
          />
          years of experience in the role of
          <input
            {...form.register("current_role")}
            type="text"
            className="border-b-4 border-gray-300 mx-2 px-2 outline-none text-2xl font-medium bg-none"
          />
          I would like to apply for the role of
          <select
            {...form.register("role")}
            className="border-b-4 border-gray-300 mx-2 px-2  text-xl font-medium bg-none"
          >
            <option value="">Select Role</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Digital Marketing Executive">
              Digital Marketing Executive
            </option>
            <option value="React Developer">React Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fresher">Fresher</option>
          </select>
        </p>
        <br />

        {/* Custom File Input Box */}
        <div className="flex gap-4 flex-wrap items-center">
          {!resume ? (
            <label className="inline-flex items-center gap-2 px-4 py-2 border rounded cursor-pointer bg-gray-100 hover:bg-gray-200">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <span className=" font-Poppins  uppercase text-[14px]">
                Upload Your Resume
              </span>
              <span className="text-blue-600 font-semibold text-lg">
                <LuCloudUpload />
              </span>
            </label>
          ) : (
            <div className="flex items-center justify-between gap-3 px-4 py-2 bg-black text-white rounded border w-full md:w-auto max-w-xs">
              <div className="flex items-center gap-3 truncate">
                <FaFilePdf className="text-red-500 text-xl" />
                <span className="truncate text-sm font-medium">
                  {resume.name}
                </span>
              </div>
              <button
                onClick={handleDelete}
                type="button"
                className="hover:text-red-400"
              >
                <AiOutlineDelete className="text-lg" />
              </button>
            </div>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-[#1B6DD9] to-[#11249B] hover:from-[#11249B] hover:to-[#1B6DD9] text-white px-6 py-3 rounded-xl font-Poppins uppercase text-[14px]"
          >
            {isSubmitting ? (
              <>
                <LuLoader className="animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
