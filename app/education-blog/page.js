// app/education-blog/page.js
import Link from "next/link";

export const metadata = {
  title: "Gensemai Education Blog | Insights & Trends",
  description:
    "Read the latest blog posts on education technology, research trends, and productivity tips.",
  openGraph: {
    title: "Education Blog",
    description: "Stay ahead with Gensemai's blog for students and researchers.",
    url: "https://www.gensemai.online/education-blog",
  },
};

export default function EducationBlog() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">
        📰 Education Blog
      </h1>
      <p className="text-gray-300 mb-6">
        Explore articles that inspire and inform:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-3">
        <li>How AI Is Transforming Academic Writing</li>
        <li>Time Management Tips for Researchers</li>
        <li>Latest Trends in Eye Care Technology</li>
      </ul>
      <p className="text-gray-300">
        ✨ Looking for topics? Try{" "}
        <Link href="/seminar-topics" className="text-blue-400 underline">
          Seminar Topics
        </Link>{" "}
        and{" "}
        <Link href="/thesis-ideas" className="text-blue-400 underline">
          Thesis Ideas
        </Link>.
      </p>
    </main>
  );
}
