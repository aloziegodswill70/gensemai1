// app/project-topics/page.js
import Link from "next/link";

export const metadata = {
  title: "Project Topics for Final Year Students | Gensemai",
  description:
    "Get project topic ideas and outlines for technology, health, education, and business fields.",
  openGraph: {
    title: "Project Topics",
    description:
      "Explore project topic inspirations for your final year project or research work.",
    url: "https://www.gensemai.online/project-topics",
  },
};

export default function ProjectTopics() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">📌 Project Topics</h1>
      <p className="text-gray-300 mb-6">
        Looking for a project topic? Here are hot suggestions:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>AI for Predictive Maintenance in Manufacturing</li>
        <li>Contact Lens Materials and Ocular Health</li>
        <li>Blockchain Voting Systems</li>
        <li>IoT-based Smart Farming Systems</li>
      </ul>
      <p className="text-gray-300">
        ✨ Don’t miss our{" "}
        <Link href="/research-materials" className="text-blue-400 underline">
          Research Materials
        </Link>{" "}
        and{" "}
        <Link href="/writing-tips" className="text-blue-400 underline">
          Writing Tips
        </Link>{" "}
        to guide your project.
      </p>
    </main>
  );
}
