
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Helmet } from "react-helmet";
import { FileX, CheckCircle, AlertCircle, FileText, Clock, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CompanyStrikeOff() {
  const requirements = [
    "No business operations for past 2 years",
    "No pending legal proceedings",
    "No pending tax liabilities",
    "Board resolution for strike off",
    "Shareholder consent",
    "Audited financial statements",
    "Bank account closure proof"
  ];

  const process = [
    "Initial consultation and eligibility check",
    "Document collection and verification",
    "Form STK-2 preparation and filing",
    "Public notice publication",
    "Objection period management",
    "Final strike off order processing",
    "Post-strike off compliance"
  ];

  const faqs = [
    {
      question: "What is company strike off?",
      answer: "Company strike off is a process of removing a company's name from the Registrar of Companies (ROC) when it ceases operations. It's a simpler and cost-effective alternative to formal winding up."
    },
    {
      question: "How long does the strike off process take?",
      answer: "The process typically takes 3-6 months from application to final strike off, depending on whether any objections are received and the ROC's processing time."
    },
    {
      question: "Can a struck-off company be restored?",
      answer: "Yes, within 20 years of strike off, a company can be restored through an NCLT application if stakeholders prove the strike off was wrongful or restoration is justified."
    },
    {
      question: "What happens to company assets after strike off?",
      answer: "Any assets of the company at the time of strike off become bona vacantia (ownerless property) and vest with the government."
    },
    {
      question: "What are the consequences of strike off?",
      answer: "After strike off, the company ceases to exist legally, directors cannot conduct business, and the company name becomes available for new registrations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Company Strike Off Services | Legal Services</title>
      </Helmet>
      <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent mb-6 text-center"
              >
                Company Strike Off Services
              </motion.h1>

              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="prose prose-invert max-w-none mb-12"
              >
                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <FileX className="h-6 w-6 text-red-500" />
                    Overview
                  </h2>
                  <p className="text-gray-300">
                    Our company strike off services provide a streamlined approach to removing inactive companies from the ROC register. We handle the entire process from eligibility assessment to final removal, ensuring compliance with all legal requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-zinc-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-red-500" />
                      Requirements
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      {requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500">•</span>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-red-500" />
                      Process Steps
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      {process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500">•</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-red-500" />
                    Important Considerations
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Ensure all statutory dues are cleared</li>
                    <li>• Obtain NOCs from relevant authorities</li>
                    <li>• Clear all employee-related obligations</li>
                    <li>• Maintain proper documentation of assets disposal</li>
                  </ul>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <HelpCircle className="h-6 w-6 text-red-500" />
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
