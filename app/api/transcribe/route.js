// app/api/transcribe/route.js
export const runtime = "nodejs"; // ensure Node runtime for multipart

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Forward to Groq Whisper endpoint (OpenAI-compatible)
    const groqForm = new FormData();
    // name is important for Groq/OpenAI-compatible APIs
    groqForm.append("file", file, file.name || "audio.webm");
    groqForm.append("model", "whisper-large-v3"); // Groq STT model
    groqForm.append("response_format", "json");

    const r = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: groqForm,
    });

    if (!r.ok) {
      const errText = await r.text();
      return new Response(JSON.stringify({ error: errText || "STT failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await r.json();
    return new Response(JSON.stringify({ text: data.text || "" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Transcribe error:", e);
    return new Response(JSON.stringify({ error: "Server error in /api/transcribe" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
