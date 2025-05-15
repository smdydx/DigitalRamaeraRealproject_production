import React from "react";
import { FaStore, FaClipboardList, FaClock } from "react-icons/fa";

const ShopsEstablishmentRegistration: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white p-12 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Shops and Establishment Registration</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Legal registration of your shop or commercial establishment as per the Shops and Establishment Act to comply with local laws.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Why Register Your Shop or Establishment?</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li><FaStore className="inline mr-2 text-green-700" />Ensures legal compliance with labor laws.</li>
          <li><FaClipboardList className="inline mr-2 text-green-700" />Facilitates smooth business operations and credibility.</li>
          <li><FaClock className="inline mr-2 text-green-700" />Protects employee rights and working conditions.</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Registration Fees</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Basic Registration: ₹5,000 - Registration with the local labor department.</li>
          <li>Documentation Support: ₹3,000 - Assistance with paperwork and filings.</li>
          <li>Complete Service: ₹7,500 - End-to-end registration and compliance support.</li>
        </ul>
      </section>

      {/* Requirements */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Documents Required</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>Identity proof of owner(s).</li>
          <li>Proof of business address (rent agreement, electricity bill, etc.).</li>
          <li>Business PAN card.</li>
          <li>List of employees with details.</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Estimated Timeline</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Week 1: Submission of application and documents.</li>
          <li>Week 2-3: Verification by labor department.</li>
          <li>Week 4: Issuance of registration certificate.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Common Questions</h2>
        <div className="space-y-6 text-gray-800 max-w-3xl mx-auto text-left">
          <div>
            <h3 className="font-semibold mb-1">Is registration mandatory for all shops?</h3>
            <p>Yes, almost all shops and commercial establishments must register under the Act to operate legally.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">What are the penalties for non-registration?</h3>
            <p>Non-compliance can lead to fines and legal action by labor authorities.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Can I register multiple establishments?</h3>
            <p>Yes, each establishment must be registered separately under the Act.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-green-50 shadow-md rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Your Shop Registered Today</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-700">
          Contact us to ensure your business complies with local labor laws.
        </p>
        <button
          className="bg-green-700 text-white px-8 py-3 rounded-md hover:bg-green-800 transition"
          onClick={() => alert("Contact form coming soon!")}
        >
          Register Now
        </button>
      </section>
    </div>
  );
};

export default ShopsEstablishmentRegistration;
 
