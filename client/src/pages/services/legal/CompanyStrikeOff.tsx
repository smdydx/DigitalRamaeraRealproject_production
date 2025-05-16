import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Helmet } from "react-helmet";
import { FileX, CheckCircle, AlertCircle, FileText, Clock, HelpCircle, Shield, BookOpen } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CompanyStrikeOff() {
  const requirements = [
    "Company should not have conducted any business in the last 2 years",
    "No pending legal proceedings before any Court or Tribunal",
    "No pending tax liabilities or regulatory obligations",
    "No active bank accounts or financial transactions",
    "Board resolution and shareholder approval for strike off",
    "Latest audited financial statements",
    "NOC from regulatory authorities",
    "Clearance of all statutory dues and liabilities"
  ];

  const process = [
    "Initial consultation and eligibility assessment",
    "Document collection and verification",
    "Board meeting and shareholder approval",
    "Form STK-2 preparation and filing",
    "Public notice publication in newspapers",
    "Handling objections during notice period",
    "Final strike off order processing",
    "Post-strike off compliance management"
  ];

  const documents = [
    "Board resolution for strike off",
    "Special resolution of shareholders",
    "Indemnity bond from directors",
    "Statement of accounts",
    "Affidavit from directors",
    "NOCs from various departments",
    "Latest audited financial statements",
    "Bank account closure proof"
  ];

  const faqs = [
    {
      question: "What is the process of company strike off?",
      answer: "Company strike off, also known as removal from register, is a process where an inactive company's name is removed from the Registrar's register. The process involves filing Form STK-2, obtaining necessary approvals, public notice period, and final removal order from ROC."
    },
    {
      question: "How long does the strike off process take?",
      answer: "The process typically takes 3-6 months from application to final strike off. This includes document preparation (2-3 weeks), filing (1 week), public notice period (30 days), objection handling if any (30-45 days), and final order (30 days)."
    },
    {
      question: "What happens to company assets during strike off?",
      answer: "All assets of the company at the time of strike off become property of the government (bona vacantia). It's important to dispose of or transfer all assets before initiating the strike off process."
    },
    {
      question: "Can a struck-off company be restored?",
      answer: "Yes, within 20 years of strike off, a company can be restored through an NCLT application. This might be needed if assets are discovered later or if stakeholders prove the strike off was wrongful."
    },
    {
      question: "What are the key eligibility criteria for strike off?",
      answer: "Key criteria include: no business operations for 2 years, no pending liabilities, no pending legal proceedings, all assets properly disposed of, and no pending statutory dues."
    },
    {
      question: "What are the consequences of strike off?",
      answer: "After strike off: company ceases to exist legally, directors cannot conduct business in company's name, company name becomes available for new registrations, and all assets vest with the government."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Company Strike Off Services | Legal Services</title>
        <meta name="description" content="Professional company strike off services ensuring smooth and compliant closure of your company" />
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
                <div className="legal-card mb-6 md:mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-red-500" />
                    Overview
                  </h2>
                  <p className="text-gray-300">
                    Our comprehensive company strike off services provide a streamlined approach to removing inactive companies from the ROC register. We handle the entire process from eligibility assessment to final removal, ensuring compliance with all legal requirements under the Companies Act, 2013.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="legal-card mb-6 md:mb-8">
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

                  <div className="legal-card mb-6 md:mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-red-500" />
                      Required Documents
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      {documents.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500">•</span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="legal-card mb-6 md:mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-red-500" />
                    Process Steps
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-zinc-700/30 p-4 rounded-lg">
                        <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-gray-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="legal-card mb-6 md:mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-red-500" />
                    Our Expertise
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Complete strike off process management</li>
                    <li>• Document preparation and verification</li>
                    <li>• Regulatory compliance handling</li>
                    <li>• Objection management during notice period</li>
                    <li>• Post-strike off compliance support</li>
                  </ul>
                </div>

                <div className="legal-card mb-6 md:mb-8">
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