// app/writing-tips/page.js
import Link from "next/link";

export const metadata = {
  title: "Academic Writing Tips & Tricks | Gensemai",
  description:
    "Learn expert tips on academic writing, thesis formatting, and seminar presentations.",
  openGraph: {
    title: "Writing Tips",
    description: "Master the art of academic writing with our practical tips.",
    url: "https://www.gensemai.online/writing-tips",
  },
};

export default function WritingTips() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">
        ✍️ Academic Writing Tips
      </h1>
      <p className="text-gray-300 mb-6">
        Writing a seminar or thesis can be overwhelming. Here are some expert
        tips:
      </p>
      <ol className="list-decimal list-inside mb-6 space-y-3">
        <li>Plan your outline before you start writing.</li>
        <li>Use clear headings and subheadings.</li>
        <li>Include references in accepted formats.</li>
        <li>Use tools like Gensemai to generate drafts quickly.</li>
      </ol>
      <p className="text-gray-300">
        📌 For more inspiration, visit{" "}
        <Link href="/academic-tools" className="text-blue-400 underline">
          Academic Tools
        </Link>{" "}
        or{" "}
        <Link href="/pdf-downloads" className="text-blue-400 underline">
          PDF Downloads
        </Link>.
      </p>
    </main>
  );
}
