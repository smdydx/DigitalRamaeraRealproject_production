import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const SecretarialAuditReportsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-400 mb-6">
            Secretarial Audit Reports
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Ensure your company complies with the Companies Act, SEBI regulations, and corporate governance practices through comprehensive secretarial audits conducted by professionals.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 px-8 text-lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-12">
            Our Secretarial Audit Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Compliance Verification',
                description:
                  'We assess adherence to the Companies Act, SEBI LODR, FEMA, and other key regulations.',
              },
              {
                title: 'Corporate Governance Review',
                description:
                  'Evaluation of board procedures, meeting documentation, and statutory registers.',
              },
              {
                title: 'Audit Report Drafting',
                description:
                  'Preparation and vetting of the Secretarial Audit Report in Form MR-3 as required under Section 204.',
              },
              {
                title: 'Risk Mitigation Recommendations',
                description:
                  'Identify gaps and provide actionable advice to rectify non-compliances and avoid future risks.',
              },
              {
                title: 'Annual Return & Registers Check',
                description:
                  'Thorough check of annual return filings, statutory books, and record maintenance.',
              },
              {
                title: 'ROC Filing Support',
                description:
                  'End-to-end assistance for filings with the Registrar of Companies (ROC).',
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="group bg-zinc-800/40 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-zinc-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-10">FAQs</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                q: 'What is a Secretarial Audit?',
                a: 'It is a compliance audit conducted by a practicing company secretary to ensure a company is complying with applicable laws, rules, regulations, and guidelines.',
              },
              {
                q: 'Is Secretarial Audit mandatory for every company?',
                a: 'It is mandatory for every listed company and other prescribed classes of public companies under Section 204 of the Companies Act, 2013.',
              },
              {
                q: 'What are the consequences of non-compliance?',
                a: 'Non-compliance can lead to penalties, disqualification of directors, or legal action under SEBI or Companies Act provisions.',
              },
              {
                q: 'Who can issue a Secretarial Audit Report?',
                a: 'Only a practicing company secretary (PCS) can issue the Secretarial Audit Report in Form MR-3.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-700 p-6 rounded-lg border border-green-500/20 text-left">
                <h4 className="text-xl font-semibold text-green-400">{item.q}</h4>
                <p className="text-gray-300 mt-3">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-10">What Our Clients Say</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "Their expertise in Secretarial Audit helped us rectify key compliance issues before the statutory audit. Highly professional and thorough."
              </p>
              <h5 className="mt-4 text-green-400 font-semibold">Shruti Mehta, Director – AlphaTech Ltd.</h5>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "We were amazed at the detailed insights and risk flags identified. Their guidance was instrumental in aligning us with LODR compliance."
              </p>
              <h5 className="mt-4 text-green-400 font-semibold">Prakash Sharma, CFO – VisionCom Pvt. Ltd.</h5>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Need Help with Secretarial Audit?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Get a professional Secretarial Audit Report with actionable compliance guidance. Ensure your company remains audit-ready and fully compliant.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 px-8 text-lg">
            Request a Callback
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SecretarialAuditReportsPage;
