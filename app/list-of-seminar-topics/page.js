// ✅ pages/list-of-seminar-topics/page.js

export const metadata = {
  title: "List of Seminar Topics – GenSemAI",
  description: "Discover trending and relevant seminar topics for Nigerian students and researchers.",
  keywords: ["seminar topics in Nigeria", "academic seminar ideas", "research seminars"],
};

export default function ListOfSeminarTopics() {
  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">List of Seminar Topics</h1>
      <p className="mb-4">Here are some exciting seminar topics you can present or research on in various fields:</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Popular Seminar Topics</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Emerging Trends in Artificial Intelligence Applications</li>
        <li>Innovations in Contact Lens Technology</li>
        <li>The Role of Technology in Eye Care Practice</li>
        <li>Cybersecurity Challenges for Nigerian Businesses</li>
        <li>Climate Change and Its Impact on Agriculture</li>
        <li>Digital Skills for the 21st Century Workforce</li>
        <li>Mobile Health Applications for Ocular Emergencies</li>
        <li>Improving E-Learning in Nigerian Universities</li>
        <li>Blockchain Technology and its Future in Africa</li>
        <li>Strategies for Sustainable Development in Nigeria</li>
      </ul>

      <a href="/how-to-write-a-thesis" className="text-blue-400 underline">Learn how to write a thesis</a>
    </main>
  );
}
