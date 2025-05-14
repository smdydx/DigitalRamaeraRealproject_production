
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, FileCheck, AlertTriangle, ClipboardList, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ROCComplianceFilings() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 mb-6"
            >
              ROC Compliance Filings
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-gray-400 text-lg mb-8"
            >
              Comprehensive assistance for all your ROC compliance and annual return filing needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="space-y-6">
              <div className="flex items-center gap-4 bg-zinc-800/30 p-6 rounded-lg border border-green-500/10">
                <CalendarCheck className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Check Due Dates</h3>
                  <p className="text-gray-400">Verify filing deadlines based on incorporation date</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-zinc-800/30 p-6 rounded-lg border border-green-500/10">
                <FileCheck className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Digital Signature Validation</h3>
                  <p className="text-gray-400">Ensure DSC validity for electronic filing</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-zinc-800/30 p-6 rounded-lg border border-green-500/10">
                <ClipboardList className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Document Preparation</h3>
                  <p className="text-gray-400">Compile required statements and reports</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("left", "tween", 0.3, 1)} className="space-y-6">
              <h2 className="text-3xl font-bold text-green-400 mb-8">Our Services Include</h2>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <FileText className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Annual return filing (MGT-7)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <FileText className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Financial statement filing (AOC-4)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <FileText className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Director's KYC (DIR-3 KYC)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <FileText className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Other event-based filings</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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
              className="text-3xl font-bold text-center text-white mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What returns are applicable for newly incorporated companies?",
                  answer: "For companies incorporated after January 1st of the current financial year, ITR filing is mandatory. Additionally, DIR-3 KYC is required for all directors who have been allotted a DIN during the financial year."
                },
                {
                  question: "How do I check the validity of Digital Signatures?",
                  answer: "You can verify the validity of your DSC through the MCA portal. If expired, it needs to be renewed before filing any returns."
                },
                {
                  question: "What documents are needed for ROC compliance filing?",
                  answer: "Required documents include complete bank statements, invoices, bills of expenses, GST returns, TDS returns, and ledger balances from significant parties as of March 31st."
                },
                {
                  question: "What happens if I miss the filing deadline?",
                  answer: "Late filing results in additional fees and penalties. Companies may also face legal consequences including disqualification of directors."
                },
                {
                  question: "Is statutory audit mandatory before ROC filing?",
                  answer: "Yes, companies need to get their financial statements audited by a statutory auditor before filing with ROC. This is a mandatory requirement under the Companies Act, 2013."
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
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-white mb-6"
            >
              Need Help with ROC Compliance?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 mb-8"
            >
              Let our experts handle your compliance requirements while you focus on growing your business
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
