// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientScriptProvider from "../components/ClientScriptProvider";

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
      <body className="bg-black text-white">
        {/* ✅ Global Ad/Tracking Scripts */}
        <ClientScriptProvider />

        {/* ✅ Layout Content */}
        <Navbar />
        {children}
        <Footer />

        {/* ✅ Ad Container */}
        <div id="container-1f59e71fa26029af801c4ec9fe5a0581"></div>
      </body>
    </html>
  );
}
