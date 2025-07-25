// app/abstract-samples/page.js
import Link from "next/link";

export const metadata = {
  title: "Sample Abstracts for Seminars and Theses | Gensemai",
  description:
    "Explore well-written abstract samples across multiple disciplines to guide your writing.",
  openGraph: {
    title: "Abstract Samples",
    description: "Boost your seminar or thesis with these curated abstracts.",
    url: "https://www.gensemai.online/abstract-samples",
  },
};

export default function AbstractSamples() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">
        🔎 Abstract Samples
      </h1>
      <p className="text-gray-300 mb-6">
        These abstract examples will help you structure your own work:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>AI-driven Eye Care Systems</li>
        <li>Impact of Renewable Energy in Africa</li>
        <li>Blockchain-based Data Security</li>
      </ul>
      <p className="text-gray-300">
        📂 You can also explore{" "}
        <Link href="/research-materials" className="text-blue-400 underline">
          Research Materials
        </Link>{" "}
        and{" "}
        <Link href="/thesis-ideas" className="text-blue-400 underline">
          Thesis Ideas
        </Link>{" "}
        for more guidance.
      </p>
    </main>
  );
}
