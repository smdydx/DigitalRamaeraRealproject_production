import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, AlertCircle, FileCheck, Clock, Phone, MessageSquare } from "lucide-react";
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
              Professional assistance with all your ROC compliance requirements including statutory filings, annual returns, and regulatory documentation
            </motion.p>

            {/* Contact Buttons */}
            <motion.div 
              variants={fadeIn("up", "tween", 0.3, 1)}
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
                Every company registered under the Companies Act, 2013 must comply with various ROC filing requirements. These include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Annual Returns (Form MGT-7)</li>
                <li>Financial Statements (Form AOC-4)</li>
                <li>Event-based Filings</li>
                <li>Director-related Filings</li>
                <li>Change in Company Details</li>
              </ul>
            </motion.div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <Calendar className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Annual Returns</h3>
                <p className="text-gray-300">Within 60 days from AGM date</p>
              </motion.div>
              <motion.div variants={fadeIn("left", "tween", 0.3, 1)} className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <Clock className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Event-based Filings</h3>
                <p className="text-gray-300">Within 30 days of the event</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              className="text-3xl font-bold text-green-400 mb-8"
            >
              Our Process
            </motion.h2>
            <div className="space-y-6">
              {[
                {
                  title: "Document Collection",
                  description: "Gathering all necessary documents and information"
                },
                {
                  title: "Review & Preparation",
                  description: "Thorough review and preparation of required forms"
                },
                {
                  title: "Digital Signature",
                  description: "Securing necessary digital signatures"
                },
                {
                  title: "Filing & Submission",
                  description: "Timely filing and submission to ROC"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.2 * index, 1)}
                  className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
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
                  question: "What happens if I miss the ROC filing deadline?",
                  answer: "Missing ROC filing deadlines results in penalties and additional fees. The amount varies based on the form and delay period. Late filing may also affect your company's compliance status."
                },
                {
                  question: "Which forms are mandatory for all companies?",
                  answer: "All companies must file annual returns (MGT-7) and financial statements (AOC-4). Additional forms may be required based on specific events or changes in the company."
                },
                {
                  question: "Do I need a Digital Signature Certificate (DSC) for ROC filing?",
                  answer: "Yes, a valid Digital Signature Certificate is mandatory for all ROC filings. The DSC should belong to a Director or Company Secretary of the company."
                },
                {
                  question: "What documents are required for ROC filing?",
                  answer: "Required documents include board resolutions, financial statements, audit reports, and event-specific documentation. The exact requirements vary based on the type of filing."
                },
                {
                  question: "Can I make corrections after submission?",
                  answer: "Yes, corrections can be made through filing of revised forms. However, additional fees may apply, and certain changes might require specific approval processes."
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
              Need Assistance with ROC Compliance?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 mb-8"
            >
              Let our experts handle your compliance requirements while you focus on growing your business
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="flex justify-center gap-4">
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