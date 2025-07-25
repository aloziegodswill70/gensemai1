// app/seminar-topics/page.js
export const metadata = {
  title: "Top Trending Seminar Topics | Gensemai",
  description:
    "Discover up-to-date seminar topics across various fields. Get inspiration for your next seminar presentation with AI-generated insights.",
  openGraph: {
    title: "Top Trending Seminar Topics",
    description:
      "Explore the latest seminar ideas in technology, health, education, and more on Gensemai.",
    url: "https://www.gensemai.online/seminar-topics",
  },
};

export default function SeminarTopics() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">
        📚 Latest Seminar Topics
      </h1>
      <p className="text-gray-300 mb-6">
        Gensemai constantly researches trending academic fields to help you
        craft world‑class seminars. Below are topics that spark interest and
        align with current research trends.
      </p>
      <ul className="space-y-4 list-disc list-inside">
        <li>
          The Role of Artificial Intelligence in Modern Healthcare Systems
        </li>
        <li>Blockchain Technology and Its Impact on Digital Security</li>
        <li>
          Innovations in Renewable Energy and Sustainable Development Goals
        </li>
        <li>Cloud Computing for Academic Research Collaboration</li>
        <li>Contact Lens Technology in Ocular Emergency Management</li>
      </ul>
      <p className="text-gray-400 mt-6">
        ✅ Bookmark this page as we update it regularly to keep you ahead in
        your research journey.
      </p>
    </main>
  );
}
