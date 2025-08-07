// app/layout.js
import "./globals.css";
import { Manrope, Poppins, Roboto, Outfit, Heebo,DM_Sans } from "next/font/google";
import Header from "./layout/header";
import Footer from "./layout/footer";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "./utility/context/context-api";
import { Toaster } from "sonner";
import Script from "next/script";

const manrope = Manrope({ 
  weight: ["200", "300", "400", "500", "600", "700", "800"], 
  subsets: ["latin"],
  variable: "--font-manrope"
});
const poppins = Poppins({ 
  weight: ["200", "300", "400", "500", "600", "700", "800"], 
  subsets: ["latin"],
  variable: "--font-poppins"
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto"
});
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit"
});
const heebo = Heebo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-heebo"
});
const dm_sans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-dm_sans"
});

// ✅ Metadata including canonical tag
export const metadata = {
  title: "Shrewd",
  alternates: {
    languages: {
      en: "https://shrewdbs.com",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Canonical Tag */}
        <link rel="canonical" href="https://www.shrewdbs.com/" />

        {/* ✅ Fixing Duplicate Hreflang Issue */}
        <link rel="alternate" hreflang="en" href="https://www.shrewdbs.com/" />
      </head>
      <body className={`${manrope.variable} ${poppins.variable} ${roboto.variable} ${outfit.variable} ${heebo.variable}`}>
        {/* ✅ Google Tag Manager (Noscript Fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXWVP9FF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <NextTopLoader />
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
