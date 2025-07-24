"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-blue-500 hover:text-blue-400">
          AI-Gen
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/seminar" className="hover:text-blue-400">
            Seminar
          </Link>
          <Link href="/thesis" className="hover:text-blue-400">
            Thesis
          </Link>
        </div>
      </div>
    </nav>
  );
}
