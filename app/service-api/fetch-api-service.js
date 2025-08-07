import { NextResponse } from 'next/server';

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const navigate = (path) => {
    try {
        if (typeof window !== 'undefined') {
            // You can safely use window here
            window.location.href = path; // This will change the browser URL
        } else {
            const base = process.env.NEXT_PUBLIC_BASEURL; // Replace with your base URL
            return NextResponse.redirect(new URL(path, base)); // Redirect to 404
        }
    } catch (error) {
        console.log("🚀 ~ navigate ~ error:", error)

    }

}

const fetchWithAuth = async (url, options = {}) => {

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        ...options.headers,
    };

    const response = await fetch(`${baseURL}${url}`, {
        ...options,
        headers,
        
    });
    console.log("🚀 ~ fetchWithAuth ~ response:", response)

    if (response.ok) {
        return response.json();
    }

    // Handle different response statuses
    if (response.status === 503) {
        navigate('/maintenance');

    }

    if (response.status === 401) {
        throw new Error('Unauthorized');
    }

    // Handle other errors
    const error = await response.json();
    error.status = response.status; // Attach the status code to the error object
    throw error; // Throw the complete error object
};

// Example usage
const api = {
    get: (url) => fetchWithAuth(url, { method: 'GET' }),
    post: (url, body) => fetchWithAuth(url, { method: 'POST', body: JSON.stringify(body) }),
    // Add other methods as needed (PUT, DELETE, etc.)
};




export default api;



