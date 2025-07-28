// ✅ app/layout.js
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

        {/* ✅ Profitableratecpm Script */}
        <Script
          src="//pl27278547.profitableratecpm.com/1f59e71fa26029af801c4ec9fe5a0581/invoke.js"
          strategy="afterInteractive"
          async
          data-cfasync="false"
        />
      </head>
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />

        {/* ✅ Profitableratecpm Container */}
        <div id="container-1f59e71fa26029af801c4ec9fe5a0581"></div>
      </body>
    </html>
  );
}
