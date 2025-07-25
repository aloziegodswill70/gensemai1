// app/research-materials/page.js
export const metadata = {
  title: "Free Research Materials and Resources | Gensemai",
  description:
    "Access free research materials, guides, and sample projects to simplify your academic writing process.",
  openGraph: {
    title: "Research Materials",
    description:
      "Download research guides, sample chapters, and AI-generated papers on Gensemai.",
    url: "https://www.gensemai.online/research-materials",
  },
};

export default function ResearchMaterials() {
  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-500">
        📂 Research Materials Hub
      </h1>
      <p className="text-gray-300 mb-6">
        Here you can find downloadable materials to strengthen your seminar or
        thesis. All materials are curated by experienced researchers and
        enhanced by AI.
      </p>
      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">
            ✅ Sample Abstracts Collection
          </h2>
          <p className="text-gray-400">
            A PDF bundle of abstracts from different fields to guide your
            writing.
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">
            ✅ Research Proposal Templates
          </h2>
          <p className="text-gray-400">
            Ready-to-edit proposals that meet academic standards.
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">
            ✅ Citation and Referencing Guide
          </h2>
          <p className="text-gray-400">
            Learn APA, MLA, and Chicago formats with examples.
          </p>
        </div>
      </div>
    </main>
  );
}
