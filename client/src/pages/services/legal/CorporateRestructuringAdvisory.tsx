import React from "react";
import { FaBuilding, FaProjectDiagram, FaHandshake } from "react-icons/fa";

const CorporateRestructuringAdvisory: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-12 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Corporate Restructuring Advisory</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Expert advisory services to help companies restructure operations, finances, and legal frameworks for growth and efficiency.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Why Opt for Corporate Restructuring?</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li><FaBuilding className="inline mr-2 text-blue-700" />Improve operational efficiency and reduce costs.</li>
          <li><FaProjectDiagram className="inline mr-2 text-blue-700" />Optimize capital structure and debt management.</li>
          <li><FaHandshake className="inline mr-2 text-blue-700" />Facilitate mergers, acquisitions, and joint ventures.</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Pricing Options</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Basic Consultation: ₹40,000 - Initial analysis and recommendations.</li>
          <li>Implementation Support: ₹75,000 - Detailed restructuring plan with execution assistance.</li>
          <li>Full Advisory: ₹1,20,000 - End-to-end restructuring services including legal and financial advisory.</li>
        </ul>
      </section>

      {/* Requirements */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Documents and Information Required</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>Financial statements and audit reports.</li>
          <li>Organizational structure details.</li>
          <li>Current debt and liability information.</li>
          <li>Business plans and growth projections.</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Advisory Process Timeline</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Week 1-2: Initial consultation and data collection.</li>
          <li>Week 3-4: Development of restructuring plan.</li>
          <li>Week 5-6: Implementation support and follow-up.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">FAQs</h2>
        <div className="space-y-6 text-gray-800 max-w-3xl mx-auto text-left">
          <div>
            <h3 className="font-semibold mb-1">What is corporate restructuring?</h3>
            <p>Corporate restructuring involves reorganizing a company's structure, operations, or finances to improve performance.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">How long does the restructuring process take?</h3>
            <p>The timeline varies but typically spans 4-6 weeks depending on complexity.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Do you assist with legal compliance?</h3>
            <p>Yes, our full advisory package includes legal and regulatory compliance guidance.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-50 shadow-md rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Start Your Corporate Restructuring Journey</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-700">
          Contact us today to optimize your business structure for success.
        </p>
        <button
          className="bg-blue-700 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition"
          onClick={() => alert("Contact form or booking page coming soon!")}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default CorporateRestructuringAdvisory;
 
