// app/thesis-ideas/page.js
export const metadata = {
  title: "Powerful Thesis Ideas and Inspiration | Gensemai",
  description:
    "Find compelling thesis ideas across technology, health, education, and social sciences. Let Gensemai spark your next big research project.",
  openGraph: {
    title: "Thesis Ideas for Students",
    description:
      "Generate high-quality thesis ideas and outlines instantly with Gensemai AI.",
    url: "https://www.gensemai.online/thesis-ideas",
  },
};

export default function ThesisIdeas() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">
        💡 Inspiring Thesis Ideas
      </h1>
      <p className="text-gray-300 mb-6">
        Your thesis is the crown jewel of your academic journey. Here are
        cutting-edge research ideas to help you stand out.
      </p>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          **AI in Ophthalmology:** Advancing early diagnosis of glaucoma with
          deep learning.
        </li>
        <li>
          **FinTech Revolution:** Blockchain-driven solutions for African
          economies.
        </li>
        <li>
          **Education Technology:** Evaluating e-learning platforms’ impact on
          student performance.
        </li>
        <li>
          **Public Health:** Integrating AI for emergency response in rural
          clinics.
        </li>
        <li>
          **Sustainable Agriculture:** IoT-based irrigation systems in Nigeria.
        </li>
      </ol>
      <p className="text-gray-400 mt-6">
        ✨ With Gensemai, you can expand any idea into full chapters instantly.
      </p>
    </main>
  );
}
