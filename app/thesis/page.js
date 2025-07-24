"use client";

import { useState } from "react";
import jsPDF from "jspdf";

export default function SeminarPage() {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "seminar", topic }),
      });
      const data = await res.json();
      setContent(data.text);
    } catch (err) {
      setContent("Error generating content.");
    }
    setLoading(false);
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save(`${topic}-seminar.pdf`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Generate Thesis</h1>
      <input
        className="w-full p-3 rounded bg-gray-800 text-white mb-4"
        placeholder="Enter your topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {content && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Generated Thesis:</h2>
          <p className="bg-gray-900 p-4 rounded mb-4 whitespace-pre-wrap">{content}</p>
          <button
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Download as PDF
          </button>
        </div>
      )}
    </main>
  );
}
