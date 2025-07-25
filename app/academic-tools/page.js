// app/academic-tools/page.js
import Link from "next/link";

export const metadata = {
  title: "AI Academic Tools for Students | Gensemai",
  description:
    "Explore free AI-powered academic tools for seminars, thesis, and research writing to save time and boost productivity.",
  openGraph: {
    title: "AI Academic Tools",
    description: "Discover AI tools that help students write, plan, and research better.",
    url: "https://www.gensemai.online/academic-tools",
  },
};

export default function AcademicTools() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">
        ⚡ AI Academic Tools for Students
      </h1>
      <p className="text-gray-300 mb-6">
        Gensemai offers smart utilities to make your academic life easier. Here
        are tools you can use right away:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>✅ Citation Generator for APA/MLA</li>
        <li>✅ Outline Builder for seminar and thesis</li>
        <li>✅ Grammar and plagiarism checker</li>
      </ul>

      <p className="text-gray-300 mb-6">
        ➡️ Need inspiration? Visit our{" "}
        <Link href="/seminar-topics" className="text-blue-400 underline">
          Seminar Topics
        </Link>{" "}
        or check out{" "}
        <Link href="/thesis-ideas" className="text-blue-400 underline">
          Thesis Ideas
        </Link>.
      </p>
    </main>
  );
}
