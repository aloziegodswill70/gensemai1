export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto py-6 px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-blue-500 font-semibold">Gensemai</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
