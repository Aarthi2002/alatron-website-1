import api from "./fetch-api-service";

class BasicService {

    // GET
    static async homeBanner() {
        try {
            const response = await api.get(`/api/v1/base/banners`);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async testimonialEmp() {
        try {
            const response = await api.get(`/api/v1/base/testimonial`);
           
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async topDashboard() {
        try {
            const response = await api.get(`/api/v1/base/dashboard`);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async casestudyHome() {
        try {
            const response = await api.get(`/api/v1/base/dashboard-casestudy`);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async companyProfile() {
        try {
            const response = await api.get(`/api/v1/base/company-profile`);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async partnerLogos() {
        try {
            const response = await api.get(`/api/v1/base/partner-logos`);
            return response;
        } catch (error) {
            throw error;
        }
    }
    //Case study API
    static async caseStudy() {
        try {
            const response = await api.get(`/api/v1/base/case-study/list`);
            return response;
        } catch (error) {
            throw error;
        }
    }

    //Career API
    static async getCareer() {
        try {
            const response = await api.get(`/api/v1/base/jobs`);
            return response;
        } catch (error) {
            throw error;
        }
    }

    //Our team
    static async ourTeam() {
        try {
            const response = await api.get(`/api/v1/base/our-team`);
            return response;
        } catch (error) {
            throw error;
        }
    }

    // Apply detail
    static async jobDetail(id) {
        if (!id) {
            throw new Error("Job ID is required");
        }
        
        try {
            const response = await api.get(`/api/v1/base/job-details/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching job details:", error);
            throw error;
        }
    }
    


    // POST Enquiry
    static async enquirySend(payload) {
        try {
            const response = await api.post(`/api/v1/base/enquiry`, payload);
            return response;
        } catch (error) {
            throw error;
        }
    }

    // Application
    static async applyApplication(payload, id) {
        try {
            const response = await api.post(`/api/v1/base/application/${id}`, payload, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Ensure content type is set for file upload
                  },
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
    



}

export default BasicService;