import React from "react";
import { FaExclamationTriangle, FaBalanceScale, FaClock } from "react-icons/fa";

const InsolvencyBankruptcyAdvisoryunderIBC: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-yellow-700 to-yellow-900 text-white p-12 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Insolvency and Bankruptcy Advisory (under IBC)</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Specialized advisory services to navigate insolvency and bankruptcy proceedings under the Insolvency and Bankruptcy Code (IBC).
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Key Benefits of Our Advisory</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li><FaExclamationTriangle className="inline mr-2 text-yellow-700" />Expert guidance through IBC procedures.</li>
          <li><FaBalanceScale className="inline mr-2 text-yellow-700" />Help with legal compliance and documentation.</li>
          <li><FaClock className="inline mr-2 text-yellow-700" />Efficient resolution to minimize losses.</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Pricing Structure</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Consultation: ₹30,000 - Initial case assessment and advice.</li>
          <li>Advisory Package: ₹70,000 - Assistance with filing and proceedings.</li>
          <li>End-to-End Support: ₹1,00,000+ - Complete insolvency management and resolution.</li>
        </ul>
      </section>

      {/* Requirements */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Information & Documents Needed</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>Financial statements and liabilities.</li>
          <li>Details of creditors and pending dues.</li>
          <li>Insolvency petitions or notices received.</li>
          <li>Company registration and legal documents.</li>
        </ul>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Advisory Timeline</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Week 1: Initial assessment and documentation.</li>
          <li>Week 2-4: Filing and procedural compliance.</li>
          <li>Week 5 onwards: Resolution and monitoring.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6 text-gray-800 max-w-3xl mx-auto text-left">
          <div>
            <h3 className="font-semibold mb-1">What is the Insolvency and Bankruptcy Code (IBC)?</h3>
            <p>The IBC is a legal framework for insolvency resolution and bankruptcy proceedings in India.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">How long does the insolvency process take?</h3>
            <p>The timeline varies, generally 180 days, extendable under certain conditions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Can you represent companies during proceedings?</h3>
            <p>Yes, we offer full representation and advisory throughout the IBC process.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-yellow-50 shadow-md rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Expert Insolvency Advisory Today</h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-700">
          Reach out to our experts for professional assistance under the IBC framework.
        </p>
        <button
          className="bg-yellow-700 text-white px-8 py-3 rounded-md hover:bg-yellow-800 transition"
          onClick={() => alert("Contact form or booking page coming soon!")}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsolvencyBankruptcyAdvisoryunderIBC;
 
