// app/pdf-downloads/page.js
import Link from "next/link";

export const metadata = {
  title: "Download Free Academic PDFs | Gensemai",
  description:
    "Access free downloadable PDFs of seminar papers, thesis samples, and project templates.",
  openGraph: {
    title: "PDF Downloads",
    description: "Get free PDFs to accelerate your academic writing.",
    url: "https://www.gensemai.online/pdf-downloads",
  },
};

export default function PdfDownloads() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">
        📥 PDF Downloads
      </h1>
      <p className="text-gray-300 mb-6">
        Ready-to-use materials to save you time:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>✅ Thesis Samples PDF</li>
        <li>✅ Seminar Slides and Notes</li>
        <li>✅ Proposal Templates</li>
      </ul>
      <p className="text-gray-300">
        🔗 Also explore our{" "}
        <Link href="/research-materials" className="text-blue-400 underline">
          Research Materials
        </Link>{" "}
        and{" "}
        <Link href="/academic-tools" className="text-blue-400 underline">
          Academic Tools
        </Link>.
      </p>
    </main>
  );
}
