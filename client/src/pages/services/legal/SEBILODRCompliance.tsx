import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const EbiLodrCompliancePage = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-green-400 mb-6">EBI (LODR) Compliance Assistance</h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            We help companies navigate the complex regulatory landscape of the Securities and Exchange Board of India (SEBI) Listing Obligations and Disclosure Requirements (LODR) to ensure full compliance.
            Our expert team ensures timely submission of disclosures, reports, and regulatory filings to keep your company in good standing with the stock exchanges.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
            Get Started
          </Button>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-8">Our EBI (LODR) Compliance Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Regulatory Filing Card */}
            <motion.div
              className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 mb-4">Regulatory Filing & Disclosures</h3>
              <p className="text-gray-300 mb-4">
                We manage all mandatory filings with SEBI and stock exchanges, including quarterly, annual, and event-based disclosures, ensuring compliance with the LODR regulations.
              </p>
              <Button size="sm" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Learn More
              </Button>
            </motion.div>

            {/* Corporate Governance Card */}
            <motion.div
              className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 mb-4">Corporate Governance</h3>
              <p className="text-gray-300 mb-4">
                We ensure that your company adheres to the corporate governance principles under LODR, providing necessary reports, board compositions, and related governance requirements.
              </p>
              <Button size="sm" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Learn More
              </Button>
            </motion.div>

            {/* Investor Relations Card */}
            <motion.div
              className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 mb-4">Investor Relations</h3>
              <p className="text-gray-300 mb-4">
                Our team assists with the preparation of investor communication materials, ensuring timely and accurate disclosure of financial performance, governance updates, and material events.
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
              <h4 className="text-xl font-semibold text-green-400">What is the LODR compliance?</h4>
              <p className="text-gray-300 mt-4">
                The LODR (Listing Obligations and Disclosure Requirements) compliance is a set of regulations issued by SEBI that ensure listed companies disclose important information regularly and follow corporate governance practices. This includes financial disclosures, board composition, and timely reporting of material events.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="p-6 bg-zinc-700 rounded-lg border border-green-500">
              <h4 className="text-xl font-semibold text-green-400">Why is LODR compliance important?</h4>
              <p className="text-gray-300 mt-4">
                Adhering to LODR compliance ensures transparency, accountability, and fairness in the market. It protects investors and builds trust in the company’s operations. Non-compliance can lead to penalties and reputational damage.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="p-6 bg-zinc-700 rounded-lg border border-green-500">
              <h4 className="text-xl font-semibold text-green-400">How often do companies need to file disclosures?</h4>
              <p className="text-gray-300 mt-4">
                Companies are required to file disclosures on a quarterly, half-yearly, and annual basis. Additionally, they must disclose material events promptly as they occur, such as changes in the board of directors or financial restatements.
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
              <p className="italic">"The team was instrumental in managing our SEBI filings and corporate governance disclosures. Their expertise in LODR compliance helped us avoid penalties and keep our investors well-informed."</p>
              <h5 className="font-semibold text-green-400 mt-4">Sarah Lee, CFO of TechX Ltd.</h5>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg shadow-xl text-gray-300">
              <p className="italic">"Their professionalism and attention to detail in filing our disclosures under LODR made a significant difference in our listing. They truly go above and beyond!"</p>
              <h5 className="font-semibold text-green-400 mt-4">Michael Smith, CEO of Digital Nexus</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-zinc-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Ensure Full LODR Compliance Today</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get in touch with our experts to ensure that your company complies with all the LODR regulations. We provide end-to-end assistance for regulatory filings, disclosures, and corporate governance.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EbiLodrCompliancePage;
