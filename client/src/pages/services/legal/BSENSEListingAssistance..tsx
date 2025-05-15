import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const BseNseListingPage = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-green-400 mb-6">BSE/NSE Listing Assistance</h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Our team provides expert guidance and support for companies looking to list on the Bombay Stock Exchange (BSE) or the National Stock Exchange (NSE).
            We ensure that your listing process is smooth, compliant with regulations, and designed to give you maximum visibility and credibility in the financial market.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
            Get Started
          </Button>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-8">Our Listing Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pre-Listing Advisory Card */}
            <motion.div
              className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 mb-4">Pre-Listing Advisory</h3>
              <p className="text-gray-300 mb-4">
                We provide expert advisory on the steps and legal framework required for getting your company listed.
                This includes financial structuring, compliance checks, and corporate governance assessments.
              </p>
              <Button size="sm" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Learn More
              </Button>
            </motion.div>

            {/* Regulatory Filings Card */}
            <motion.div
              className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 mb-4">Regulatory Filings</h3>
              <p className="text-gray-300 mb-4">
                We manage the filing of necessary documents with the Securities and Exchange Board of India (SEBI), BSE, and NSE.
                This includes all forms, applications, and compliance documents needed for a smooth listing process.
              </p>
              <Button size="sm" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Learn More
              </Button>
            </motion.div>

            {/* Post-Listing Support Card */}
            <motion.div
              className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 mb-4">Post-Listing Support</h3>
              <p className="text-gray-300 mb-4">
                After your company is listed, we continue to provide support, ensuring ongoing compliance with market regulations and helping with periodic filings and disclosures.
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
              <h4 className="text-xl font-semibold text-green-400">What is the process of getting listed on BSE/NSE?</h4>
              <p className="text-gray-300 mt-4">
                The process of listing involves several steps, including preparing the company’s financial records, filing documents with SEBI, and meeting various compliance requirements.
                Our team guides you through each step of the process to ensure a smooth listing experience.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="p-6 bg-zinc-700 rounded-lg border border-green-500">
              <h4 className="text-xl font-semibold text-green-400">What are the costs involved in the listing process?</h4>
              <p className="text-gray-300 mt-4">
                The costs vary depending on the size of the company and the complexity of the listing process.
                We offer a detailed cost breakdown and help you plan the finances effectively for a successful listing.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="p-6 bg-zinc-700 rounded-lg border border-green-500">
              <h4 className="text-xl font-semibold text-green-400">How long does it take for a company to get listed?</h4>
              <p className="text-gray-300 mt-4">
                The listing process can take anywhere from 6 to 12 months depending on various factors, including the readiness of your company and the regulatory approval process.
                Our team works with you to speed up the process wherever possible.
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
              <p className="italic">"Thanks to the expert guidance from the team, our listing on the NSE was completed in record time. Their support made the entire process smooth and stress-free!"</p>
              <h5 className="font-semibold text-green-400 mt-4">John Doe, CEO of XYZ Ltd.</h5>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg shadow-xl text-gray-300">
              <p className="italic">"The team’s detailed knowledge and hands-on approach were crucial for our BSE listing. We highly recommend their services to any company looking to list on the exchanges."</p>
              <h5 className="font-semibold text-green-400 mt-4">Jane Smith, CFO of ABC Corp.</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-zinc-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Ready to List Your Company?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let us guide you through the BSE/NSE listing process with ease and professionalism. Our team is ready to help you get started.
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BseNseListingPage;
