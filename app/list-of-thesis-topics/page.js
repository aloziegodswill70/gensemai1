// ✅ pages/list-of-thesis-topics/page.js

export const metadata = {
  title: "List of Thesis Topics – GenSemAI",
  description: "A curated list of thesis topics for Nigerian students and researchers in various fields.",
  keywords: ["thesis topics in Nigeria", "research topics", "project ideas"],
};

export default function ListOfThesisTopics() {
  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">List of Thesis Topics</h1>
      <p className="mb-4">Explore a variety of up-to-date thesis topics across multiple disciplines. These ideas can inspire your next research project.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Popular Thesis Topics</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>The Impact of Artificial Intelligence on Nigerian Education Systems</li>
        <li>Digital Marketing Strategies for Local Businesses in Nigeria</li>
        <li>Advancements in Ocular Emergency Care in Nigeria</li>
        <li>Technology Adoption in Agriculture: A Case Study in Ogun State</li>
        <li>Financial Technology (FinTech) Growth and Challenges in Lagos</li>
        <li>Role of Social Media in Youth Political Participation</li>
        <li>Contact Lens Innovations and Patient Compliance</li>
        <li>E-Governance and Public Service Delivery in Nigeria</li>
        <li>Renewable Energy Solutions for Rural Communities</li>
        <li>AI Tools in Thesis and Seminar Generation</li>
      </ul>

      <a href="/how-to-write-a-thesis" className="text-blue-400 underline">Learn how to write a thesis</a>
    </main>
  );
}
