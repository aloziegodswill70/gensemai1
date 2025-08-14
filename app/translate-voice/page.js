"use client";

import { useState, useRef } from "react";

export default function TranslateVoicePage() {
  const [audioFile, setAudioFile] = useState(null);
  const [targetLang, setTargetLang] = useState("French");
  const [transcript, setTranscript] = useState("");
  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioURL, setAudioURL] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setAudioFile(f);
  };

  const transcribe = async () => {
    if (!audioFile) return alert("Please upload an audio file.");
    setLoading(true);
    setTranscript("");
    setTranslation("");

    try {
      const form = new FormData();
      form.append("file", audioFile);
      const r = await fetch("/api/transcribe", { method: "POST", body: form });
      const data = await r.json();
      if (r.ok) {
        setTranscript(data.text || "");
      } else {
        alert(data.error || "Transcription failed");
      }
    } catch {
      alert("Error transcribing audio");
    } finally {
      setLoading(false);
    }
  };

  const translate = async () => {
    if (!transcript?.trim()) return alert("No transcript yet.");
    setLoading(true);
    setTranslation("");
    try {
      const r = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: transcript, targetLang }),
      });
      const data = await r.json();
      if (r.ok) setTranslation(data.text || "");
      else alert(data.error || "Translate failed");
    } catch {
      alert("Error translating text");
    } finally {
      setLoading(false);
    }
  };

  const speakAndRecord = () => {
    if (!translation?.trim()) return;
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return alert("SpeechSynthesis not supported in this browser.");
    }

    const utter = new SpeechSynthesisUtterance(translation);

    // Create audio context & destination
    const audioContext = new AudioContext();
    const destination = audioContext.createMediaStreamDestination();

    // Setup MediaRecorder
    mediaRecorderRef.current = new MediaRecorder(destination.stream);
    audioChunksRef.current = [];
    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunksRef.current.push(e.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
    };

    // Start recording
    mediaRecorderRef.current.start();

    // Play speech
    utter.onend = () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  return (
    <section className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Translate a Voice Note</h1>

      <div className="space-y-2">
        <label className="block text-sm text-gray-300">
          Upload audio (.mp3, .wav, .m4a, .ogg)
        </label>
        <input
          type="file"
          accept="audio/*"
          onChange={onFileChange}
          className="text-black"
        />
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm">Target language:</label>
        <input
          className="bg-gray-900 p-2 rounded"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          placeholder="e.g., French, Spanish, Igbo, Yoruba"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={transcribe}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Transcribing…" : "Transcribe"}
        </button>
        <button
          onClick={translate}
          disabled={loading || !transcript}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Translating…" : "Translate"}
        </button>
        <button
          onClick={speakAndRecord}
          disabled={!translation}
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          Speak & Record Translation
        </button>
      </div>

      {transcript && (
        <div>
          <h3 className="font-semibold mb-1">Transcript</h3>
          <div className="bg-gray-900 p-3 rounded whitespace-pre-wrap">
            {transcript}
          </div>
        </div>
      )}

      {translation && (
        <div>
          <h3 className="font-semibold mb-1">Translation</h3>
          <div className="bg-gray-900 p-3 rounded whitespace-pre-wrap">
            {translation}
          </div>
        </div>
      )}

      {audioURL && (
        <a
          href={audioURL}
          download="translation.wav"
          className="inline-block bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
        >
          ⬇ Download Translation Audio
        </a>
      )}
    </section>
  );
}
