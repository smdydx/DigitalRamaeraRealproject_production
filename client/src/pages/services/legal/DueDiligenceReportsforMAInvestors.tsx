import React from "react";
import { FaSearch, FaFileAlt, FaBalanceScale } from "react-icons/fa";

const DueDiligenceReportsforMAInvestors: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white p-12 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Due Diligence Reports (for M&A, Investors)</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Comprehensive due diligence reports to empower mergers, acquisitions, and investment decisions.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Benefits of Our Due Diligence Reports</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li><FaSearch className="inline mr-2 text-red-600" />Thorough financial, legal, and operational analysis.</li>
          <li><FaFileAlt className="inline mr-2 text-red-600" />Identification of risks and liabilities.</li>
          <li><FaBalanceScale className="inline mr-2 text-red-600" />Supports informed decision-making and negotiations.</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Basic Report: ₹50,000 - Financial and legal overview.</li>
          <li>Detailed Report: ₹90,000 - Includes operational and compliance analysis.</li>
          <li>Comprehensive: ₹1,50,000 - Full due diligence with risk mitigation advice.</li>
        </ul>
      </section>

      {/* Requirements */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Information Required</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>Financial statements and audit reports.</li>
          <li>Legal contracts and licenses.</li>
          <li>Operational data and compliance records.</li>
          <li>Details on pending litigation or disputes.</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Timeline</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Week 1-2: Data collection and review.</li>
          <li>Week 3: Analysis and drafting report.</li>
          <li>Week 4: Review, finalization, and delivery.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">FAQs</h2>
        <div className="space-y-6 text-gray-800 max-w-3xl mx-auto text-left">
          <div>
            <h3 className="font-semibold mb-1">Who should order a due diligence report?</h3>
            <p>Investors and companies involved in mergers or acquisitions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">How confidential is the information?</h3>
            <p>All information is handled with strict confidentiality agreements.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Can reports be customized?</h3>
            <p>Yes, reports are tailored to client requirements and focus areas.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-red-50 shadow-md rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ensure Safe & Informed Investment Decisions</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-700">
          Contact us for detailed due diligence reports tailored to your M&A or investment needs.
        </p>
        <button
          className="bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800 transition"
          onClick={() => alert("Contact form or booking page coming soon!")}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default DueDiligenceReportsforMAInvestors;
 
