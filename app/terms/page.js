// ✅ app/terms/page.js
export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">Effective Date: July 28, 2025</p>

        <p className="mb-4">
          These Terms of Service ("Terms") govern your access to and use of GensemAI. By using our services, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Service</h2>
        <p className="mb-4">You may use GensemAI to generate academic content for personal and educational use only. Commercial resale or abuse of the AI outputs is prohibited.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Do not submit illegal or harmful topics</li>
          <li>Respect intellectual property laws</li>
          <li>Do not try to hack or abuse the platform</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Account Suspension</h2>
        <p className="mb-4">We reserve the right to suspend accounts that violate these Terms without prior notice.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Disclaimer</h2>
        <p className="mb-4">GensemAI provides AI-generated academic assistance. You are responsible for reviewing and verifying any output before submission.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
        <p className="mb-4">We may update these Terms at any time. Continued use means you accept the changes.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact</h2>
        <p className="mb-4">
          If you have any questions, contact us at <a href="mailto:support@gensemai.com" className="text-blue-400">support@gensemai.com</a>.
        </p>
      </div>
    </main>
  );
}
