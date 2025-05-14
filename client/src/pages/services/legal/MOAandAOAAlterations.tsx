
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, AlertCircle, FileCheck, Clock, Phone, MessageSquare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MOAandAOAAlterations() {
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
              MOA and AOA Alterations
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Professional assistance in modifying your company's foundational documents with complete legal compliance
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
                MOA (Memorandum of Association) and AOA (Articles of Association) are foundational documents that define your company's constitution and internal management rules. Altering these documents requires careful consideration of legal requirements and compliance with the Companies Act, 2013.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                  <h3 className="text-xl font-bold text-white mb-4">MOA Alterations</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Company Name Change</li>
                    <li>• Registered Office Modification</li>
                    <li>• Object Clause Updates</li>
                    <li>• Capital Structure Changes</li>
                    <li>• Liability Clause Modifications</li>
                  </ul>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                  <h3 className="text-xl font-bold text-white mb-4">AOA Alterations</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Management Rules Updates</li>
                    <li>• Share Transfer Procedures</li>
                    <li>• Board Meeting Regulations</li>
                    <li>• Dividend Distribution Rules</li>
                    <li>• Internal Governance Changes</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Alteration Process
            </motion.h2>
            <div className="space-y-4">
              {[
                {
                  title: "Board Resolution",
                  description: "Pass a board resolution proposing the alterations"
                },
                {
                  title: "Special Resolution",
                  description: "Obtain shareholders' approval through special resolution"
                },
                {
                  title: "Regulatory Approval",
                  description: "Secure necessary approvals from regulatory authorities"
                },
                {
                  title: "ROC Filing",
                  description: "File the altered documents with Registrar of Companies"
                }
              ].map((step, index) => (
                <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documents Required */}
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
                <span className="text-gray-300">Board Resolution proposing the alterations</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Special Resolution passed by shareholders</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Altered MOA/AOA in prescribed format</span>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Supporting documents based on type of alteration</span>
              </li>
            </ul>
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
                  question: "What alterations can be made to MOA?",
                  answer: "MOA alterations can include changes in company name, registered office address, object clause, capital structure, and liability clause. Each alteration requires specific procedures and approvals."
                },
                {
                  question: "What is the process for MOA/AOA alterations?",
                  answer: "The process involves passing a board resolution, obtaining shareholders' approval through special resolution, securing necessary regulatory approvals, and filing the altered documents with ROC."
                },
                {
                  question: "Are all MOA/AOA alterations allowed?",
                  answer: "Not all alterations are permitted. Changes must comply with the Companies Act 2013 and cannot violate statutory provisions or fundamental principles of company law."
                },
                {
                  question: "What is the timeline for completing alterations?",
                  answer: "The timeline varies based on the type of alteration. Generally, it takes 30-45 days to complete the process, including regulatory approvals and ROC filing."
                },
                {
                  question: "What are the costs involved?",
                  answer: "Costs include professional fees, government filing fees, and stamp duty where applicable. The exact amount depends on the type of alteration and company's authorized capital."
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
    </main>
  );
}
