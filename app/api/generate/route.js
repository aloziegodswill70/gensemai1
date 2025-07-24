export async function POST(req) {
  const { type, topic } = await req.json();

  const prompt = `Write a detailed ${type} on the topic "${topic}". 
Include an introduction, a well-researched body with up-to-date information, and a conclusion.`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192", // Groq’s fast LLaMA3 model
        messages: [
          { role: "system", content: "You are an expert academic writer that always provides up-to-date facts." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 2000,
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
