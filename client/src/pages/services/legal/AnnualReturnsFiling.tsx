import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, AlertCircle, FileCheck, Clock, Phone, MessageSquare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AnnualReturnsFiling() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6"
            >
              Annual Returns Filing (MGT-7, AOC-4)
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Professional assistance in filing your company's annual returns and maintaining compliance with regulatory requirements
            </motion.p>

            {/* Contact Buttons */}
            <motion.div 
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+919876543210">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <a href="https://wa.me/919876543210" target="_blank">WhatsApp</a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <a href="#contact">Message Us</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-6"
            >
              Overview
            </motion.h2>
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="prose prose-invert max-w-none"
            >
              <p className="text-gray-300 mb-4">
                Annual return filing is a mandatory compliance requirement for all companies registered under the Companies Act, 2013. It involves filing of two main documents:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>MGT-7 (Annual Return) - Contains company management and administrative details</li>
                <li>AOC-4 (Financial Statements) - Contains financial information and reports</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-6"
            >
              Professional Fee Structure
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                variants={fadeIn("up", "spring", 0.1, 0.75)}
                className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
              >
                <h3 className="text-xl font-bold text-white mb-4">Basic Package</h3>
                <p className="text-3xl font-bold text-green-400 mb-4">₹4,999/-</p>
                <ul className="text-gray-300 space-y-2">
                  <li>MGT-7 Filing</li>
                  <li>Basic Document Review</li>
                  <li>Email Support</li>
                </ul>
              </motion.div>
              {/* Add more pricing tiers */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Fee Section */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-6"
            >
              Government Fee Structure
            </motion.h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="p-4 text-left text-green-400 border border-zinc-700">Authorized Capital</th>
                    <th className="p-4 text-left text-green-400 border border-zinc-700">Normal Filing Fee</th>
                    <th className="p-4 text-left text-green-400 border border-zinc-700">Additional Fee (If Late)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add fee structure rows */}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-6"
            >
              Filing Timeline
            </motion.h2>
            <div className="space-y-4">
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-bold text-white mb-2">MGT-7 Filing</h3>
                <p className="text-gray-300">Within 60 days from the date of Annual General Meeting</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-bold text-white mb-2">AOC-4 Filing</h3>
                <p className="text-gray-300">Within 30 days from the date of Annual General Meeting</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-6"
            >
              Required Documents
            </motion.h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FileCheck className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Annual Financial Statements</span>
              </li>
              {/* Add more required documents */}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-6"
            >
              Benefits of Timely Filing
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Add benefits */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-center text-green-400 mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What is the due date for filing Annual Returns?",
                  answer: "Annual Returns (MGT-7) must be filed within 60 days from the date of AGM. Financial Statements (AOC-4) must be filed within 30 days from the AGM date."
                },
                {
                  question: "What are the penalties for late filing?",
                  answer: "Late filing attracts penalties of ₹100 per day of delay. For serious delays, penalties can go up to ₹50,000 and may lead to legal actions."
                },
                {
                  question: "Do all companies need to file annual returns?",
                  answer: "Yes, all companies registered under Companies Act 2013 must file annual returns, including One Person Companies and Section 8 companies."
                },
                {
                  question: "Can I file annual returns without an AGM?",
                  answer: "No, conducting AGM is mandatory before filing annual returns. The AGM details are required in form MGT-7."
                },
                {
                  question: "What documents are required for filing?",
                  answer: "Required documents include financial statements, director's report, auditor's report, AGM minutes, and details of shareholders and directors."
                }
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-zinc-800/30 rounded-lg border border-green-500/10"
                >
                  <AccordionTrigger className="px-6 text-white hover:text-green-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to File Your Annual Returns?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 mb-8"
            >
              Let our experts handle your compliance requirements while you focus on growing your business
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+919876543210">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <a href="https://wa.me/919876543210" target="_blank">WhatsApp</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}