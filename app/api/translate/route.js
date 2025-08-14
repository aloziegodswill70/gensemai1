// app/api/translate/route.js
export async function POST(req) {
  try {
    const { text, targetLang } = await req.json();

    if (!text || !targetLang) {
      return new Response(JSON.stringify({ error: "text and targetLang are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const prompt = `Translate the following text into ${targetLang}. Keep meaning, tone, and formatting where possible. Only return the translation.\n\n"""${text}"""`;

    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: "You are a precise translator." },
          { role: "user", content: prompt },
        ],
        temperature: 0.2,
        max_tokens: 2000,
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      return new Response(JSON.stringify({ error: errText || "Translate failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await r.json();
    const translated = data.choices?.[0]?.message?.content?.trim() || "";
    return new Response(JSON.stringify({ text: translated }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Translate error:", e);
    return new Response(JSON.stringify({ error: "Server error in /api/translate" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
