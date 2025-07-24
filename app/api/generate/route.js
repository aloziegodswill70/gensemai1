export async function POST(req) {
  const { type, topic } = await req.json();

  let prompt = "";

  if (type === "thesis") {
    prompt = `Write a complete THESIS on the topic "${topic}" strictly in the following chapter format:

CHAPTER 1 (INTRODUCTION):
- Background of Study
- Statement of the Problem
- Objectives of the Study (general and specific objectives)
- Research Questions
- Research Hypothesis
- Significance of the Study
- Scope of the Study
- Limitations of the Study
- Operational Definition of Terms

CHAPTER 2 (LITERATURE REVIEW):
- Conceptual Clarifications/Framework
- Theoretical Framework
- Empirical Review
- Summary of Literature Review and Gap Identification

CHAPTER 3 (RESEARCH METHODOLOGY):
- Research Design
- Population of Study
- Sample Size and Sampling Technique
- Research Instruments
- Validity and Reliability of Instrument
- Method of Data Collection
- Method of Data Analysis
- Ethical Considerations

CHAPTER 4 (DATA PRESENTATION, ANALYSIS AND INTERPRETATION):
- Introduction
- Presentation of Data
- Analysis of Data
- Test of Hypothesis
- Discussion of Findings

CHAPTER 5 (SUMMARY, CONCLUSION AND RECOMMENDATIONS):
- Summary of Findings
- Conclusion
- Recommendations
- Suggestions for Further Studies

Finally, include REFERENCES and APPENDICES.

Ensure each chapter and section has detailed, well‑structured content, and use academic tone with up‑to‑date information.`;
  } else {
    // Default prompt for seminar
    prompt = `Write a detailed seminar on the topic "${topic}". Include introduction, body with up-to-date information, and conclusion.`;
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: "You are an expert academic writer that always provides up-to-date facts." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 4000
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "No content generated.";

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Groq API error:", error);
    return new Response(JSON.stringify({ text: "Error generating content." }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
