import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full bg-black text-white pt-24 px-6 flex flex-col items-center">
      {/* === Main Heading === */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Generate <span className="text-blue-500">Seminar</span> &{" "}
        <span className="text-blue-500">Thesis</span> Instantly
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-8">
        Just enter your topic, click generate, and download your professional seminar or thesis in seconds.
      </p>

      {/* === Buttons === */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <Link
          href="/seminar"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md text-center"
        >
          Generate Seminar
        </Link>
        <Link
          href="/thesis"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md text-center"
        >
          Generate Thesis
        </Link>
      </div>

      {/* === Crowdfunding Button === */}
      <Link
        href="https://paystack.shop/pay/gensemai" // 👉 replace with your link
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md text-center mb-12"
      >
        ❤️ Support Our Work
      </Link>

      {/* === Portfolio Section === */}
      <div className="w-full max-w-4xl bg-gray-900 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <Image
            src="/images/godswil.jpg" // 👉 put your picture in /public/myphoto.jpg or change to an online URL
            alt="Dr. Godswill Alozie Onyedikachi"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-500 object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Dr. Godswill Onyedikachi Alozie</h2>
          <p className="text-gray-300 mb-4">
            An erudite Eye Doctor with 2 years of experience, having keen interest in research
            about ocular emergency, contact lens and Technology in Eye Care practice.
            Passionate about web application and software development. Founder of{" "}
            <span className="font-semibold text-blue-400">Honourable Tech Empire</span>, a software development company.
          </p>
          <p className="text-gray-300 mb-4">
            Chat me on WhatsApp or call me for any deal:
          </p>

          {/* Contact Buttons */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/2347067208592"
              target="_blank"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-semibold"
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>
            <a
              href="tel:+2347067208592"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
            >
              <FaPhone size={20} /> Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
