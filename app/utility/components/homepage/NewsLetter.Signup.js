
// "use client"

// import { useState } from 'react';

// export default function NewsletterSignup() {
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) return;

//     setIsSubmitting(true);
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       alert(`Thank you for subscribing! We'll send updates to: ${email}`);
//       setEmail('');
//     } catch (error) {
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div
//       className="w-full max-w-[1600px] px-6 py-16"
//       style={{
//         height: '293px',
//         background: 'linear-gradient(135deg, #081438 0%, #17389E 100%)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <div className="text-center mb-8 flex flex-col items-center">
//         <h2 className="text-2xl md:text-4xl font-bold font-poppins text-white mb-4">
//           Stay Ahead with Alatron Updates
//         </h2>
//         <p className="text-center text-base text-[#BABABA] max-w-2xl font-regular font-Roboto leading-relaxed">
//           Get rental tips, new equipment launches, exclusive offers, and construction insights delivered right to your inbox.
//         </p>
//       </div>

//       <div className="w-full max-w-md">
//         {/* Input container with icon */}
//         <form onSubmit={handleSubmit} className="relative">
//           {/* Icon wrapper */}
//           <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none w-5 h-5">
//             {/* Mail SVG icon */}
            
//           </div>
//           {/* Input field */}
//           <input
//             type="email"
//             placeholder="Enter Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full h-12 pl-10 pr-32 py-3 rounded-xl border border-white/20 bg-white/10  text-[#fff] focus:outline-none focus:ring-2 focus:ring-white/30"
//             style={{
//               fontSize: '16px',
//               fontWeight: '400',
//             }}
//             required
//           />
//            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
//               <path d="M2.5 6C2.5 5.46957 2.71071 4.96086 3.08579 4.58579C3.46086 4.21071 3.96957 4 4.5 4H20.5C21.0304 4 21.5391 4.21071 21.9142 4.58579C22.2893 4.96086 22.5 5.46957 22.5 6V18C22.5 18.5304 22.2893 19.0391 21.9142 19.4142C21.5391 19.7893 21.0304 20 20.5 20H4.5C3.96957 20 3.46086 19.7893 3.08579 19.4142C2.71071 19.0391 2.5 18.5304 2.5 18V6ZM6.019 6L12.5 11.671L18.981 6H6.019ZM20.5 7.329L13.159 13.753C12.9766 13.9128 12.7424 14.0009 12.5 14.0009C12.2575 14.0009 12.0234 13.9128 11.841 13.753L4.5 7.329V18H20.5V7.329Z" fill="white"/>
//             </svg>  */}
//           {/* Submit button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-6 text-black font-semibold text-sm hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             style={{
//               background: 'linear-gradient(177deg, #FFF 2.99%, #424141 125.49%)',
//               color: '#000000',
//               fontSize: '14px',
//               fontWeight: '600',
//               borderRadius: '8px',
//             }}
//           >
//             {isSubmitting ? 'Sending...' : 'Send Email'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client"

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(`Thank you for subscribing! We'll send updates to: ${email}`);
      setEmail('');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full max-w-[1600px] px-6 py-16"
      style={{
        height: '293px',
        background: 'linear-gradient(135deg, #081438 0%, #17389E 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="text-center mb-8 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold font-poppins text-white mb-4">
          Stay Ahead with Alatron Updates
        </h2>
        <p className="text-center text-base text-[#BABABA] max-w-2xl font-regular font-Roboto leading-relaxed lg:whitespace-nowrap xl:whitespace-nowrap">
          Get rental tips, new equipment launches, exclusive offers, and construction insights delivered right to your inbox.
        </p>
      </div>

      <div className="w-full max-w-md">
        {/* Input container with icon */}
        <div className="relative" onSubmit={handleSubmit}>
          {/* Icon wrapper */}
          <div className="absolute inset-y-3.5 left-4 flex items-center pointer-events-none w-5 h-5">
            {/* Mail SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
              <path d="M2.5 6C2.5 5.46957 2.71071 4.96086 3.08579 4.58579C3.46086 4.21071 3.96957 4 4.5 4H20.5C21.0304 4 21.5391 4.21071 21.9142 4.58579C22.2893 4.96086 22.5 5.46957 22.5 6V18C22.5 18.5304 22.2893 19.0391 21.9142 19.4142C21.5391 19.7893 21.0304 20 20.5 20H4.5C3.96957 20 3.46086 19.7893 3.08579 19.4142C2.71071 19.0391 2.5 18.5304 2.5 18V6ZM6.019 6L12.5 11.671L18.981 6H6.019ZM20.5 7.329L13.159 13.753C12.9766 13.9128 12.7424 14.0009 12.5 14.0009C12.2575 14.0009 12.0234 13.9128 11.841 13.753L4.5 7.329V18H20.5V7.329Z" fill="white"/>
            </svg>
          </div>
          {/* Input field */}
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 pl-12 pr-32 py-3 rounded-xl border border-white/20 bg-white/10 placeholder-white/70 text-[#fff] text-left focus:outline-none focus:ring-2 focus:ring-white/30"
            style={{
              fontSize: '16px',
              fontWeight: '400',
              textAlign: 'left',
            }}
            required
          />
          
          {/* Submit button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-6 text-black font-semibold text-sm hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(177deg, #FFF 2.99%, #424141 125.49%)',
              color: '#000000',
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '8px',
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Email'}
          </button>
        </div>
      </div>
    </div>
  );
}