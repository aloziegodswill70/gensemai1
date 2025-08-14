export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto py-6 px-6 text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-blue-500 font-semibold">Gensemai</span>. All rights reserved.
        </p>
        <div className="text-xs flex justify-center gap-4">
          <a
            href="/privacy"
            className="hover:text-white transition-colors duration-200 underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-white transition-colors duration-200 underline"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
