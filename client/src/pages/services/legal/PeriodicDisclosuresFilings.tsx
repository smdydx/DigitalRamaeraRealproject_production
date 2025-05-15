import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const PeriodicDisclosuresFilingsPage = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-green-400 mb-6">Periodic Disclosures and Filings Assistance</h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Our team specializes in helping companies comply with the periodic disclosure requirements mandated by SEBI and stock exchanges. We ensure that your company meets all the necessary filing deadlines and obligations under LODR and other relevant regulations.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
            Get Started
          </Button>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-8">Our Periodic Disclosures & Filings Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quarterly Filing Card */}
            <motion.div
              className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 mb-4">Quarterly & Annual Filings</h3>
              <p className="text-gray-300 mb-4">
                We assist in the preparation and timely submission of quarterly and annual financial reports, ensuring your company meets SEBI's disclosure requirements and deadlines.
              </p>
              <Button size="sm" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Learn More
              </Button>
            </motion.div>

            {/* Event-Based Disclosures Card */}
            <motion.div
              className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 mb-4">Event-Based Disclosures</h3>
              <p className="text-gray-300 mb-4">
                We ensure that your company promptly discloses material events such as board changes, financial restatements, mergers, and acquisitions as required by SEBI regulations.
              </p>
              <Button size="sm" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Learn More
              </Button>
            </motion.div>

            {/* Governance & Compliance Updates Card */}
            <motion.div
              className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 mb-4">Governance & Compliance Updates</h3>
              <p className="text-gray-300 mb-4">
                We assist in the disclosure of governance-related updates, including changes to the board of directors, audits, and other governance matters, ensuring timely compliance.
              </p>
              <Button size="sm" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-zinc-800 text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="p-6 bg-zinc-700 rounded-lg border border-green-500">
              <h4 className="text-xl font-semibold text-green-400">What are Periodic Disclosures and Filings?</h4>
              <p className="text-gray-300 mt-4">
                Periodic disclosures and filings are reports that listed companies must submit regularly, including quarterly and annual financial reports, as well as disclosures of material events. These are mandated by SEBI and other regulatory bodies to ensure transparency and compliance with corporate governance standards.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="p-6 bg-zinc-700 rounded-lg border border-green-500">
              <h4 className="text-xl font-semibold text-green-400">Why is timely filing important?</h4>
              <p className="text-gray-300 mt-4">
                Timely filing of periodic disclosures is crucial for maintaining investor confidence, meeting regulatory obligations, and avoiding penalties. Non-compliance or delayed filings can harm a company's reputation and result in legal or financial consequences.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="p-6 bg-zinc-700 rounded-lg border border-green-500">
              <h4 className="text-xl font-semibold text-green-400">What kind of event-based disclosures are required?</h4>
              <p className="text-gray-300 mt-4">
                Event-based disclosures include any material events that may affect the company's operations, such as changes in the board of directors, mergers, acquisitions, financial restatements, or other significant corporate actions that could impact investors' decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Client Testimonials</h2>
          <div className="space-y-6">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-xl text-gray-300">
              <p className="italic">"The team helped us stay compliant with all our periodic filings and event-based disclosures. Their quick turnaround and expertise in handling SEBI filings saved us time and effort."</p>
              <h5 className="font-semibold text-green-400 mt-4">Amit Kumar, CEO of FinTech Solutions</h5>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg shadow-xl text-gray-300">
              <p className="italic">"Their service in ensuring timely submission of quarterly and annual filings has been exceptional. We can always count on them to manage our disclosures and keep us compliant."</p>
              <h5 className="font-semibold text-green-400 mt-4">Rajesh Jain, CFO of MediaCorp Ltd.</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-zinc-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Stay Ahead with Timely Filings and Disclosures</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get in touch with our team to ensure your company stays on top of all regulatory requirements with timely filings and disclosures. We are here to help with everything from quarterly reports to event-based disclosures.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PeriodicDisclosuresFilingsPage;
