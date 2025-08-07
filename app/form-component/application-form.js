"use client";
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { LuLoader } from "react-icons/lu";
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import BasicService from '../service-api/base-api-service';
import { toast } from "sonner";

const formSchema = z.object({
  full_name: z.string()
    .min(1, {
      message: "Full name is required.",
    })
    .min(3, {
      message: "Full name must be at least 3 characters long.",
    })
    .max(50, {
      message: "Full name must be less than 50 characters.",
    }),

  email: z.string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Invalid email format.",
    }),

  role: z.string()
    .min(1, {
      message: "Role is required.",
    }),

  mobile_number: z.string()
    .length(10, {
      message: "Phone number must be exactly 10 digits.",
    })
    .regex(/^[0-9]+$/, {
      message: "Phone number must be numeric.",
    }),

  linkedin_url: z.string()
    .url({
      message: "Invalid LinkedIn URL format.",
    })
    .optional(), // LinkedIn URL is optional

  resume: z.instanceof(File)
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: "File size must be less than 10MB.",
    })
    .optional(), // Resume is optional but needs to be a valid file if provided
});

const ApplicationForm = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('id');
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: '',
      email: '',
      role: '',
      mobile_number: '',
      linkedin_url: '',
      resume: null,
    },
  });

  const [showOptions, setShowOptions] = useState(false);

  // Role selection
  const handleRoleSelect = (role) => {
    form.setValue('role', role);
    setShowOptions(false);
  };

  // const onSubmit = async (values) => {
  //   // Debug: Log captured form values
  //   console.log("Form Values on Submit: ", values);

  //   // Ensure values are correct before appending to FormData
  //   const formData = new FormData();
  //   formData.append('full_name', values.full_name);
  //   formData.append('email', values.email);
  //   formData.append('role', values.role);
  //   formData.append('mobile_number', values.mobile_number);
  //   formData.append('linkedin_url', values.linkedin_url);

  //   // Append file if exists
  //   if (values.resume) {
  //     formData.append('resume', values.resume);
  //   }

  //   // Debug: Log FormData content
  //   for (let pair of formData.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]);
  //   }

  //   try {
  //     // Make the POST request with the FormData
  //     const response = await BasicService.applyApplication(formData, jobId); // Pass formData to your service
  //     toast.success(response?.data, {
  //       position: "top-right",
  //       style: {
  //         backgroundColor: "#55387A",
  //         color: "#ffffff",
  //       },
  //       duration: 2000,
  //     });
  //     form.reset(); // Reset form after successful submission
  //   } catch (error) {
  //     const message = error?.response?.data?.message ?? error.message;
  //     toast.error(message, {
  //       position: "top-right",
  //       style: {
  //         backgroundColor: "#55387A",
  //         color: "#ffffff",
  //       },
  //     });
  //   }
  // };
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0]; 
  //   form.setValue("resume", file); 
  // };
  
  
  // const onSubmit = async (values) => {
  //   const formData = {
  //     full_name: values.full_name,
  //     email: values.email,
  //     role: values.role,
  //     mobile_number: values.mobile_number,
  //     linkedin_url: values.linkedin_url || '',
  //   };
  
  //   // Convert file to base64
  //   if (values.resume) {
  //     const reader = new FileReader();
  //     reader.onloadend = async () => {
  //       formData.resume = reader.result.split(',')[1]; // Get base64 string part after the comma
  //       await sendFormData(formData);
  //     };
  //     reader.readAsDataURL(values.resume); // Read the file as base64
  //   } else {
  //     await sendFormData(formData);
  //   }
  // };
  
  


const onSubmit = async (values) => {
  try {
    const api = axios.create({
      baseURL: 'https://admin.shrewdbs.com', // Set your base URL here
      headers: {
        'Content-Type': 'application/json', // Default content type for JSON
      },
    });
    const formData = new FormData();
    formData.append('full_name', values.full_name);
    formData.append('email', values.email);
    formData.append('role', values.role);
    formData.append('mobile_number', values.mobile_number);
    formData.append('linkedin_url', values.linkedin_url || '');
    
    if (values.resume) {
      formData.append('resume', values.resume);
    }

    
    const response = await api.post(`/api/v1/base/application/${jobId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Ensure content type is set for file upload
      },
    }); 
    toast.success(response?.data?.message, {
            position: "top-right",
            style: {
              backgroundColor: "#55387A",
              color: "#ffffff",
            },
            duration: 2000,
          });
          form.reset();
  } catch (error) {
    const message = error?.response?.data?.message ?? error.message;
    toast.error(message, {
      position: "top-right",
      style: {
        backgroundColor: "#55387A",
        color: "#ffffff",
      },
    });
  }
};


  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    form.setValue("resume", file); // Update react-hook-form state for resume
  };

  useEffect(() => {
    // Print formState for debugging
    console.log(form.formState.errors); // Check errors in form state
  }, [form.formState]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between h-full gap-5">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name <small className="text-red-500">*</small></FormLabel>
                  <FormControl>
                    <Input
                      className="form-input"
                      placeholder="eg.., Jhon Doe"
                      {...field} // Ensure that field is passed here
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
          <div>
            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address <small className="text-red-500">*</small></FormLabel>
                  <FormControl>
                    <Input className="form-input" placeholder="name@company.com" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Role Selection */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role you are applying for</FormLabel>
                  <FormControl>
                    <Select {...field} value={field.value} onValueChange={handleRoleSelect}>
                      <SelectTrigger className="w-full form-input ">
                        <SelectValue placeholder="Select a Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="project_manager">Project Manager</SelectItem>
                        <SelectItem value="qa_tester">QA Tester</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Phone Number */}
          <div>
            <FormField
              control={form.control}
              name="mobile_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number <small className="text-red-500">*</small></FormLabel>
                  <FormControl>
                    <Input
                      className="form-input"
                      placeholder="Full Number (incl. prefix)"
                      {...field}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numeric input
                        field.onChange(e); // Update form field value
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* LinkedIn URL */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <FormField
              control={form.control}
              name="linkedin_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn URL</FormLabel>
                  <FormControl>
                    <Input className="form-input" placeholder="www.linkedin.com/in/username" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* File Upload for Resume */}
          <div>
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Your Resume</FormLabel>
                  <FormControl>
                    <div
                      className="border-dashed border-[#9D9D9D] border p-3 mt-3 text-center cursor-pointer"
                      onClick={() => document.getElementById('resume').click()}
                    >
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      <p className="text-gray-500 text-[16px]"><span className="text-primary">Click here </span>or drag & drop to upload</p>
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button variant="primary" className="w-full flex gap-2 text-lg p-5" type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <LuLoader className="animate-spin" />
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ApplicationForm;
