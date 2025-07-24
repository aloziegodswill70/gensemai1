import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "AI Seminar & Thesis Generator",
  description: "Generate seminar and thesis content easily",
   icons: {
    icon: "/images/logo.png", // or /favicon.ico
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
