// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

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
        {/* ✅ Google AdSense verification meta tag */}
        <meta name="google-adsense-account" content="ca-pub-7031040419946505" />

        {/* ✅ Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7031040419946505"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* ✅ Propeller Ads Script */}
        <Script
          src="//aiharsoreersu.net/ntfc.php?p=9624191"
          strategy="afterInteractive"
          async
          data-cfasync="false"
        />

        {/* ✅ Adsterra / Profitableratecpm Script */}
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

        {/* ✅ Container div for Adsterra unit */}
        <div id="container-1f59e71fa26029af801c4ec9fe5a0581"></div>
      </body>
    </html>
  );
}
