import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />

      {/* ✅ Articles Section */}
      <section className="w-full max-w-5xl mx-auto mt-16 p-6">
        <h2 className="text-3xl font-bold mb-6 text-blue-500">Articles About GenSemAI in Nigeria</h2>

        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">How GenSemAI Helps Nigerian Students</h3>
          <p className="text-gray-300 mb-2">
            GenSemAI is transforming how students in Nigeria prepare their academic projects, seminars, and theses. With
            just a few clicks, students can generate well-structured content aligned with academic standards. This
            innovation saves time, reduces stress, and ensures students focus more on analysis rather than manual writing.
          </p>
          <Link href="/how-to-write-a-thesis" className="text-blue-400 underline">
            Learn how to write a thesis with GenSemAI →
          </Link>
        </article>

        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">GenSemAI: Boosting Research in Nigerian Universities</h3>
          <p className="text-gray-300 mb-2">
            By providing instant generation of seminar and thesis content, GenSemAI empowers students and lecturers to
            explore new ideas efficiently. It bridges the gap between technology and education, ensuring academic writing
            becomes seamless and accessible to all.
          </p>
          <Link href="/list-of-thesis-topics" className="text-blue-400 underline">
            View our list of thesis and seminar topics →
          </Link>
        </article>

        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Why Every Nigerian Student Needs GenSemAI</h3>
          <p className="text-gray-300 mb-2">
            Whether you are preparing for a project defense or brainstorming research questions, GenSemAI offers tools
            that simplify the process. It reduces plagiarism risks by generating unique content and provides guidance on
            academic structures required by universities.
          </p>
          <Link href="/seminar" className="text-blue-400 underline">
            Start generating your seminar now →
          </Link>
        </article>

        {/* ✅ More Internal Links and Articles */}
        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Thesis Ideas to Inspire Your Research</h3>
          <p className="text-gray-300 mb-2">
            Explore a wide range of thesis ideas curated for Nigerian students. From technology to healthcare, our ideas
            section guides you to choose a topic that aligns with your passion and academic goals.
          </p>
          <Link href="/thesis-ideas" className="text-blue-400 underline">
            Browse thesis ideas →
          </Link>
        </article>

        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Top Writing Tips for Nigerian Students</h3>
          <p className="text-gray-300 mb-2">
            Writing a seminar or thesis can be challenging. Here are expert writing tips tailored to help Nigerian students
            meet their academic standards and impress their supervisors.
          </p>
          <Link href="/writing-tips" className="text-blue-400 underline">
            Read our writing tips →
          </Link>
        </article>

        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Sample Abstracts for Your Thesis</h3>
          <p className="text-gray-300 mb-2">
            Unsure how to write a good abstract? Discover sample abstracts across different fields and learn how to craft
            a compelling summary for your work.
          </p>
          <Link href="/abstract-samples" className="text-blue-400 underline">
            View abstract samples →
          </Link>
        </article>

        <article className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Accessing Research Materials Made Easy</h3>
          <p className="text-gray-300 mb-2">
            GenSemAI provides access to a variety of research materials that will help you back up your thesis and seminar
            with credible references.
          </p>
          <Link href="/research-materials" className="text-blue-400 underline">
            Explore research materials →
          </Link>
        </article>
      </section>
    </main>
  );
}
