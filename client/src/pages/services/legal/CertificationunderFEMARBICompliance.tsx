import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const FemaRbiCertificationPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-6">
            Certification under FEMA & RBI Compliance
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Ensure timely and accurate compliance with India's foreign exchange regulations. We provide expert certification services under FEMA and RBI guidelines for inbound and outbound transactions.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 px-8 text-lg">
            Get Certified Now
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-12">
            FEMA/RBI Certification Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Foreign Direct Investment (FDI) Reporting',
                description: 'Certification of equity infusion under FDI along with filing of Form FC-GPR and FLA.',
              },
              {
                title: 'Overseas Direct Investment (ODI)',
                description: 'Assistance and certification of ODI transactions and Form ODI filings.',
              },
              {
                title: 'External Commercial Borrowings (ECB)',
                description: 'Certification for ECB returns, including ECB-2 filing and end-use monitoring.',
              },
              {
                title: 'Annual Return on Foreign Liabilities and Assets (FLA)',
                description: 'Certification of FLA Return for companies receiving FDI or making ODI.',
              },
              {
                title: 'LRS & Remittances',
                description: 'Certification for remittances under Liberalised Remittance Scheme (LRS) for individuals and corporates.',
              },
              {
                title: 'Compounding Applications',
                description: 'Certification and assistance for compounding of FEMA violations with RBI.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group bg-zinc-800/40 p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-300">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-zinc-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-10">FAQs</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Who requires FEMA/RBI certification?',
                a: 'Businesses or individuals dealing in foreign transactions such as FDI, ODI, ECB, or remittances must ensure FEMA compliance and often require professional certification.',
              },
              {
                q: 'What is Form FC-GPR?',
                a: 'It is a mandatory form to be filed with RBI when a company receives foreign investment for issuance of shares.',
              },
              {
                q: 'Is certification mandatory for FLA return?',
                a: 'Yes, companies receiving FDI or making ODI must file an FLA return annually, usually with a professional’s certification.',
              },
              {
                q: 'How long does certification take?',
                a: 'Typically 2–5 working days depending on transaction complexity and document availability.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-700 p-6 rounded-lg border border-blue-500/20 text-left">
                <h4 className="text-xl font-semibold text-blue-400">{item.q}</h4>
                <p className="text-gray-300 mt-3">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-400 mb-10">Client Experiences</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "Their team expertly guided us through RBI filings and provided timely certifications for our foreign investment rounds."
              </p>
              <h5 className="mt-4 text-blue-400 font-semibold">Priya Deshmukh, CFO – IndoGlobal Tech Ltd.</h5>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "We were struggling with FLA and ECB compliance. Their detailed approach saved us from penalties."
              </p>
              <h5 className="mt-4 text-blue-400 font-semibold">Ramesh Singh, Director – WaveCorp Exports</h5>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            Need FEMA/RBI Certification Support?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Ensure your foreign transactions meet RBI norms with certified professionals at your side. Avoid penalties and delays.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 px-8 text-lg">
            Talk to a FEMA Expert
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FemaRbiCertificationPage;
