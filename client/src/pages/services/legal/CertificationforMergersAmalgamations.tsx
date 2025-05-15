import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const MergerCertificationPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-teal-400 mb-6">
            Certification for Mergers & Amalgamations
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Navigate complex corporate restructurings with expert certification support under Companies Act and SEBI regulations. Ensure compliance and smooth regulatory approvals.
          </p>
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 px-8 text-lg">
            Request Certification
          </Button>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-400 text-center mb-12">
            Certification Services for M&A Transactions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fairness Opinion Certification',
                description: 'Issued by independent professionals to assess the fairness of the swap ratio in mergers.',
              },
              {
                title: 'Compliance with Section 232',
                description: 'Verification under Companies Act for mergers/amalgamations approved by NCLT.',
              },
              {
                title: 'Valuation Report Certification',
                description: 'Independent professional certification of valuation reports by registered valuers.',
              },
              {
                title: 'Board Resolution Compliance',
                description: 'Validation of board and shareholder approvals for amalgamation proceedings.',
              },
              {
                title: 'SEBI & Stock Exchange Filing Certification',
                description: 'Certifications required while filing Scheme of Arrangements with SEBI/stock exchanges.',
              },
              {
                title: 'Post-Merger Compliance Checks',
                description: 'Ensure ROC, SEBI, MCA and stock exchange filings are certified and complete.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group bg-zinc-800/40 p-6 rounded-xl border border-teal-500/10 hover:border-teal-500/30 backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-teal-400 mb-3 group-hover:text-teal-300">
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
          <h2 className="text-3xl font-bold text-teal-400 mb-10">FAQs</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                q: 'Is certification required for all mergers?',
                a: 'Yes, most mergers, especially involving listed companies, require professional certifications for fairness, valuation, and SEBI compliance.',
              },
              {
                q: 'Who can issue these certifications?',
                a: 'Practicing Company Secretaries, Chartered Accountants, Registered Valuers, and Merchant Bankers, depending on the type of certification.',
              },
              {
                q: 'Does SEBI require approval before merger?',
                a: 'Yes, listed companies must file the draft scheme with SEBI and stock exchanges, and get a no-objection certificate before NCLT approval.',
              },
              {
                q: 'How do we ensure smooth certification?',
                a: 'Engage professionals early, maintain clean financial and compliance records, and follow a clear merger timeline with proper documentation.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-700 p-6 rounded-lg border border-teal-500/20 text-left">
                <h4 className="text-xl font-semibold text-teal-400">{item.q}</h4>
                <p className="text-gray-300 mt-3">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-teal-400 mb-10">Client Feedback</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "Our reverse merger required multiple certifications. Their team handled valuation, SEBI compliance, and filings seamlessly."
              </p>
              <h5 className="mt-4 text-teal-400 font-semibold">Rajesh Iyer, Director – FinMerge Pvt. Ltd.</h5>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg text-gray-300 shadow-xl">
              <p className="italic">
                "We relied on their expert certification support while submitting the scheme to NCLT and stock exchanges. Very professional."
              </p>
              <h5 className="mt-4 text-teal-400 font-semibold">Neha Sharma, Compliance Officer – NovaSteel Ltd.</h5>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-teal-400 mb-4">
            Need Certification for Merger or Amalgamation?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            From drafting to filing and final certification, we guide you through the entire compliance lifecycle of your corporate restructuring.
          </p>
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 px-8 text-lg">
            Speak to an Expert
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MergerCertificationPage;
