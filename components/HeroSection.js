import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-black text-white pt-24 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Generate <span className="text-blue-500">Seminar</span> & <span className="text-blue-500">Thesis</span> Instantly
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-8">
        Just enter your topic, click generate, and download your professional seminar or thesis in seconds.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
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
    </section>
  );
}
