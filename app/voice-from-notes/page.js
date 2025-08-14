"use client";

import { useState, useRef } from "react";

export default function VoiceFromNotesPage() {
  const [text, setText] = useState("");
  const [speaking, setSpeaking] = useState(false);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [audioURL, setAudioURL] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".txt")) {
      alert("Please upload a .txt file for now.");
      return;
    }
    const content = await file.text();
    setText(content);
  };

  const speak = async () => {
    if (!text?.trim()) return alert("Paste or upload some text first.");
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return alert("SpeechSynthesis not supported in this browser.");
    }

    // Create audio context to capture
    const audioContext = new AudioContext();
    const destination = audioContext.createMediaStreamDestination();

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = rate;
    utter.pitch = pitch;
    utter.onend = () => {
      setSpeaking(false);
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
    };

    // Connect speech to output + recorder
    const synth = window.speechSynthesis;
    const source = audioContext.createMediaStreamSource(destination.stream);
    const voices = synth.getVoices();
    if (voices.length) utter.voice = voices[0]; // pick first available

    // Setup recorder
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
    mediaRecorderRef.current.start();

    // Speak
    synth.cancel();
    synth.speak(utter);
    setSpeaking(true);
  };

  const stop = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    setSpeaking(false);
  };

  return (
    <section className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Notes → Voice</h1>

      <div className="space-y-3">
        <label className="block text-sm text-gray-300">Upload .txt notes</label>
        <input type="file" accept=".txt" onChange={handleFile} className="text-black" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Or paste text</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-48 p-3 rounded bg-gray-900 text-gray-100"
          placeholder="Paste your notes here…"
        />
      </div>

      <div className="flex gap-4 items-center">
        <label className="text-sm">Rate</label>
        <input type="range" min="0.5" max="1.5" step="0.1" value={rate}
               onChange={(e) => setRate(parseFloat(e.target.value))} />
        <label className="text-sm">Pitch</label>
        <input type="range" min="0.5" max="2" step="0.1" value={pitch}
               onChange={(e) => setPitch(parseFloat(e.target.value))} />
      </div>

      <div className="flex gap-4">
        <button onClick={speak} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          {speaking ? "Speaking…" : "Speak & Record"}
        </button>
        <button onClick={stop} className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded">
          Stop
        </button>
      </div>

      {audioURL && (
        <a
          href={audioURL}
          download="voice-note.wav"
          className="inline-block mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
        >
          ⬇ Download Voice Note
        </a>
      )}

      <p className="text-xs text-gray-400">
        Tip: Voice quality and download ability depend on your browser.
      </p>
    </section>
  );
}
