import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const SebiCertificationPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">
            Certification under SEBI Regulations
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Expert certification support for listed entities and market intermediaries to ensure timely and accurate compliance with SEBI’s ever-evolving regulations.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 px-8 text-lg">
            Request Certification Support
          </Button>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
            SEBI Certification Services We Offer
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'LODR Certification',
                description: 'Annual secretarial compliance certification under Regulation 24A by a PCS.',
              },
              {
                title: 'Takeover Code Compliance',
                description: 'Certification on compliance with SEBI (SAST) Regulations during open offers or acquisitions.',
              },
              {
                title: 'Insider Trading Compliance',
                description: 'Verification of compliance with SEBI (PIT) Regulations and insider trading codes.',
              },
              {
                title: 'ESOP & Share-Based Scheme Certification',
                description: 'Certification under SEBI SBEB Regulations for listed entities running ESOP plans.',
              },
              {
                title: 'Merchant Banker/Intermediary Certification',
                description: 'Periodic and event-based certifications by practicing professionals for SEBI-registered intermediaries.',
              },
              {
                title: 'Due Diligence for Capital Issues',
                description: 'Certification required by merchant bankers under SEBI ICDR for IPOs/FPOs/Preferential Issues.',
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                className="group bg-zinc-800/40 p-6 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-zinc-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-10">FAQs</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Who is authorized to issue SEBI compliance certificates?',
                a: 'Only qualified Practicing Company Secretaries (PCS), Chartered Accountants, and registered professionals as per SEBI norms can issue these certificates.',
              },
              {
                q: 'Are these certifications mandatory?',
                a: 'Yes, SEBI mandates many certifications for listed entities, intermediaries, and during corporate actions like mergers, ESOP allotments, or IPOs.',
              },
              {
                q: 'What happens if certifications are not filed timely?',
                a: 'Delays may lead to penalties, notices from SEBI/stock exchanges, or even rejection of filings during fundraises or listing.',
              },
              {
                q: 'Can startups seeking listing get SEBI certification help?',
                a: 'Yes. Startups and SME segment companies also need SEBI-compliant documentation and certifications during their listing/pre-listing stages.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-700 p-6 rounded-lg border border-yellow-500/20 text-left">
                <h4 className="text-xl font-semibold text-yellow-400">{item.q}</h4>
                <p className="text-gray-300 mt-3">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-10">Client Feedback</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "Their timely SEBI certifications helped us comply during a crucial funding round. Great turnaround and deep understanding of regulations."
              </p>
              <h5 className="mt-4 text-yellow-400 font-semibold">Akash Mittal, CFO – FinServe Ltd.</h5>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "We regularly take their support for LODR and PIT certifications. Consistent, detailed, and trusted."
              </p>
              <h5 className="mt-4 text-yellow-400 font-semibold">Ritika S., Compliance Head – NovaTech Ltd.</h5>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Need Help With SEBI Certifications?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Whether you're preparing for listing, restructuring, or periodic compliance — our experts are here to ensure complete certification support under SEBI laws.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 px-8 text-lg">
            Get Expert Support
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SebiCertificationPage;
