// ✅ app/privacy/page.js
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Effective Date: July 28, 2025</p>

        <p className="mb-4">
          GensemAI ("we", "our", or "us") is committed to protecting your
          privacy. This Privacy Policy explains how your personal information is
          collected, used, and disclosed when you use our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">We may collect information such as your name, email address, academic topics entered, and device information (IP address, browser type, etc.).</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To generate academic content like seminar papers or thesis outlines</li>
          <li>To improve our platform and personalize user experience</li>
          <li>To send relevant updates or promotions (if you opt-in)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies and third-party tracking technologies (like Google AdSense and Propeller Ads) to improve your experience and serve relevant ads.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
        <p className="mb-4">We do not sell your personal data. We may share information with service providers only to help operate our services securely.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4">You have the right to access, correct, or delete your data. Please contact us if you need help with this.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy, contact us at <a href="mailto:support@gensemai.com" className="text-blue-400">support@gensemai.com</a>.
        </p>
      </div>
    </main>
  );
}
