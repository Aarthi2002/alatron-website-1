
"use client"; // This must be at the top

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { HeadingSection } from "../utility/components/utility-component";
import ApplicationForm from "../form-component/application-form";
import BasicService from "../service-api/base-api-service";

const CareerApplyClient = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id"); // Get job ID from URL

  const [applyData, setApplyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!jobId) {
      setError("Job ID is missing");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await BasicService.jobDetail(jobId);
        setApplyData(data);
      } catch (err) {
        setError("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jobId]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <main className="bg-[#fff]">
      <div className="brand-container py-10">
        {/* Title */}
        <HeadingSection title="Careers" subtitle={applyData?.designation_name || "Job Position"} />

        {/* Description */}
        <div className="w-full">
          <h4 className="text-[20px] mt-10">Job Description</h4>
          <div className="list-disc md:p-7 text-[#787E87] text-[16px] brand-container">
            <p className="capitalize">{applyData?.short_description}</p>
            <p className="capitalize">{applyData?.description}</p>
          </div>
        </div>

        {/* Application Form */}
        <div className="md:px-10 lg:px-16 py-10">
          <div className="bg-[#d7d7d7]/40 p-6">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CareerApplyClient;