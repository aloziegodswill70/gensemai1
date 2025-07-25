import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "AI Seminar & Thesis Generator",
  description: "Generate seminar and thesis content easily",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Propeller Ads Script */}
        <Script
          src="//aiharsoreersu.net/ntfc.php?p=9624191"
          strategy="afterInteractive"
          async
          data-cfasync="false"
        />
      </head>
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
