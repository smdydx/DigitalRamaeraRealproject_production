import React from "react";
import { FaHandsHelping, FaBalanceScale, FaFileSignature } from "react-icons/fa";

const LabourWelfareFundCompliance: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white p-12 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Labour Welfare Fund Compliance</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Assistance with registration and compliance related to Labour Welfare Fund to support employee welfare schemes.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Benefits of Labour Welfare Fund Compliance</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li><FaHandsHelping className="inline mr-2 text-red-700" />Supports employee welfare initiatives and benefits.</li>
          <li><FaBalanceScale className="inline mr-2 text-red-700" />Ensures compliance with statutory labor requirements.</li>
          <li><FaFileSignature className="inline mr-2 text-red-700" />Prevents legal penalties and enhances company reputation.</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Pricing Details</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Registration & Documentation: ₹5,000</li>
          <li>Compliance Monitoring: ₹3,000</li>
          <li>Complete Service Package: ₹7,000</li>
        </ul>
      </section>

      {/* Requirements */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Documents Required</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>Proof of establishment.</li>
          <li>List of employees and their wages.</li>
          <li>Previous Labour Welfare Fund payment receipts (if any).</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Estimated Timeline</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Week 1: Application preparation and submission.</li>
          <li>Week 2: Verification and approval process.</li>
          <li>Week 3: Confirmation and compliance certification.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">FAQs</h2>
        <div className="space-y-6 text-gray-800 max-w-3xl mx-auto text-left">
          <div>
            <h3 className="font-semibold mb-1">Who must comply with Labour Welfare Fund regulations?</h3>
            <p>Employers with a specified number of employees as per state laws must comply.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">What benefits do employees receive?</h3>
            <p>Employees get access to welfare schemes such as medical aid, education, and recreational facilities.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Are there penalties for non-compliance?</h3>
            <p>Yes, failure to comply may lead to fines and legal action.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-red-50 shadow-md rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ensure Labour Welfare Fund Compliance</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-700">
          Partner with us to maintain statutory compliance and support your workforce.
        </p>
        <button
          className="bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800 transition"
          onClick={() => alert("Contact form coming soon!")}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default LabourWelfareFundCompliance;
 
