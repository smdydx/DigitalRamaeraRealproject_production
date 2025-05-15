import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const ComplianceCertificatesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-400 mb-6">
            Compliance Certificates for Listed Companies
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            We assist listed entities in obtaining, drafting, and filing various mandatory compliance certificates under SEBI (LODR), Companies Act, and other applicable regulations.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 px-8 text-lg">
            Talk to Our Experts
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-12">
            Compliance Certificates We Assist With
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Certificate under Regulation 40(9) of SEBI (LODR)',
                description:
                  'Issuance of transfer/transmission compliance certificate by PCS.',
              },
              {
                title: 'Compliance Certificate under Regulation 7(3)',
                description:
                  'Joint certification by the Compliance Officer and RTA regarding share transfer facility.',
              },
              {
                title: 'Annual Secretarial Compliance Certificate',
                description:
                  'Certificate under Regulation 24A by a PCS confirming regulatory adherence.',
              },
              {
                title: 'Non-Disqualification of Directors Certificate',
                description:
                  'Certification of director eligibility under Schedule V and Companies Act.',
              },
              {
                title: 'Corporate Governance Compliance',
                description:
                  'Assistance with quarterly and annual governance reporting and certifications.',
              },
              {
                title: 'MGT-8 Certification',
                description:
                  'PCS issued certificate on Annual Return accuracy and compliance for larger companies.',
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
                q: 'Which companies need Compliance Certificates?',
                a: 'All listed companies and specified public companies are required to obtain and file various compliance certificates under SEBI and MCA rules.',
              },
              {
                q: 'Who can issue these certificates?',
                a: 'Only a qualified Practicing Company Secretary (PCS) can issue these certificates in prescribed formats.',
              },
              {
                q: 'What is the penalty for non-filing?',
                a: 'Delays or omissions in filing can result in penalties, stock exchange notices, or prosecution under SEBI and Companies Act.',
              },
              {
                q: 'Do certificates need to be filed with ROC or Stock Exchanges?',
                a: 'Yes, depending on the certificate type, they are filed with ROC (e.g., MGT-8) or submitted to stock exchanges (e.g., Regulation 7(3), 40(9)).',
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

      {/* Testimonials */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-10">Client Testimonials</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "Their expertise in SEBI LODR compliance saved us from multiple penalty notices. Timely, precise, and always on point."
              </p>
              <h5 className="mt-4 text-green-400 font-semibold">Rajeev Bhatia, Company Secretary – NexFin Corp</h5>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "They helped us draft and file all required certificates within timelines. Highly professional team!"
              </p>
              <h5 className="mt-4 text-green-400 font-semibold">Manisha R., Director – BioWare Solutions Ltd.</h5>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Need Assistance with Compliance Certificates?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Let our team help you obtain and file your compliance certificates accurately and on time — safeguarding your reputation and legal standing.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 px-8 text-lg">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ComplianceCertificatesPage;
