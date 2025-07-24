export async function POST(req) {
  const { type, topic } = await req.json();

  // You can integrate your AI model here. For now, we mock:
  const mockText = `This is a sample ${type} generated for the topic: "${topic}".\n\n` +
                   `Introduction:\nLorem ipsum dolor sit amet...\n\nBody:\nMore details here...\n\nConclusion:\nFinal thoughts.`;

  return new Response(JSON.stringify({ text: mockText }), {
    headers: { "Content-Type": "application/json" },
  });
}
