// ✅ pages/how-to-write-a-thesis/page.js

export const metadata = {
  title: "How to Write a Thesis – GenSemAI",
  description: "Step-by-step guide on how to write a thesis with examples and tips for Nigerian students and researchers.",
  keywords: ["how to write a thesis", "thesis writing guide", "Nigeria research thesis"],
};

export default function HowToWriteAThesis() {
  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">How to Write a Thesis</h1>
      <p className="mb-4">Writing a thesis involves several chapters and well-structured sections. This guide walks you through the process step by step, tailored for Nigerian universities and beyond.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Steps in Writing a Thesis</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Choose a clear and relevant topic.</li>
        <li>Draft your research questions and objectives.</li>
        <li>Conduct a comprehensive literature review.</li>
        <li>Design your research methodology.</li>
        <li>Collect and analyze data.</li>
        <li>Write chapters systematically: Introduction, Literature Review, Methodology, Data Analysis, and Conclusion.</li>
        <li>Edit and proofread thoroughly.</li>
      </ul>
      <a href="/list-of-thesis-topics" className="text-blue-400 underline">See popular thesis topics</a>
    </main>
  );
}
