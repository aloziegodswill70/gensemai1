// app/proposal-generator/page.js
import Link from "next/link";

export const metadata = {
  title: "AI Proposal Generator for Students | Gensemai",
  description:
    "Generate professional research proposals instantly with our AI-powered tool.",
  openGraph: {
    title: "Proposal Generator",
    description:
      "Create complete research proposals with Gensemai in minutes.",
    url: "https://www.gensemai.online/proposal-generator",
  },
};

export default function ProposalGenerator() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">
        📑 Proposal Generator
      </h1>
      <p className="text-gray-300 mb-6">
        Need a research proposal? Our AI tool can generate one instantly:
      </p>
      <p className="text-gray-300 mb-6">
        💡 After generating, visit{" "}
        <Link href="/writing-tips" className="text-blue-400 underline">
          Writing Tips
        </Link>{" "}
        for guidance on refining your proposal.
      </p>
    </main>
  );
}
