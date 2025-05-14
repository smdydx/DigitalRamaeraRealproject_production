import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Clock, Building2, CheckCircle2, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SecretarialAudit() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6 leading-tight"
            >
              Secretarial Audit Services
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
            >
              Expert Secretarial Audit services to verify compliance and identify areas for improvement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 pb-20"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview Section */}
          <motion.section 
            variants={fadeIn("up", "tween", 0.4, 1)} 
            className="bg-zinc-800/30 p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <FileText className="text-green-500 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold">Overview</h2>
            </div>
            <p className="text-gray-400">
              Secretarial Audit is a process to verify the compliance of a company with the provisions of various laws, rules, and regulations. Setindiabiz provides expert Secretarial Audit services to help companies identify non-compliances and take corrective actions.
            </p>
          </motion.section>

          {/* Pricing Section */}
          <motion.section 
            variants={fadeIn("up", "tween", 0.5, 1)} 
            className="bg-zinc-800/30 p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <Building2 className="text-green-500 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold">Pricing</h2>
            </div>
            <p className="text-gray-400">
              The pricing for Secretarial Audit services varies based on the size and complexity of the company. Setindiabiz offers competitive rates and customized packages to suit different business needs.
            </p>
          </motion.section>

          {/* Government Fee Section */}
          <motion.section 
            variants={fadeIn("up", "tween", 0.6, 1)} 
            className="bg-zinc-800/30 p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <Clock className="text-green-500 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold">Government Fee</h2>
            </div>
            <p className="text-gray-400">
              There is no specific government fee for conducting a Secretarial Audit. However, any filings or compliances arising out of the audit may attract statutory fees as per the applicable laws.
            </p>
          </motion.section>

          {/* Applicability Section */}
          <motion.section 
            variants={fadeIn("up", "tween", 0.7, 1)} 
            className="bg-zinc-800/30 p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold">Applicability</h2>
            </div>
            <p className="text-gray-400 mb-4">
              As per Section 204 of the Companies Act, 2013, the following companies are required to obtain a Secretarial Audit Report:
            </p>
            <ul className="space-y-3 text-gray-400">
              {[
                "Every listed company",
                "Every public company having a paid-up share capital of ₹50 crore or more",
                "Every public company having a turnover of ₹250 crore or more"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Timeline Section */}
          <motion.section 
            variants={fadeIn("up", "tween", 0.8, 1)} 
            className="bg-zinc-800/30 p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <Clock className="text-green-500 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold">Timeline</h2>
            </div>
            <p className="text-gray-400">
              The timeline for completing a Secretarial Audit depends on the size and operations of the company. Typically, it takes 2 to 4 weeks to complete the audit and issue the report.
            </p>
          </motion.section>

          {/* List of Documents Section */}
          <motion.section 
            variants={fadeIn("up", "tween", 0.9, 1)} 
            className="bg-zinc-800/30 p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <FileText className="text-green-500 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold">List of Documents</h2>
            </div>
            <p className="text-gray-400 mb-4">
              The following documents are generally required for conducting a Secretarial Audit:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
              {[
                "Memorandum and Articles of Association",
                "Minutes of Board and General Meetings",
                "Statutory Registers",
                "Shareholding details",
                "Annual Reports",
                "Filings with regulatory authorities",
                "Policies and codes adopted by the company"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Process Section */}
          <motion.section 
            variants={fadeIn("up", "tween", 1.0, 1)} 
            className="bg-zinc-800/30 p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold">Process</h2>
            </div>
            <p className="text-gray-400 mb-4">
              The Secretarial Audit process with Setindiabiz involves:
            </p>
            <ol className="space-y-4 text-gray-400">
              {[
                "Initial consultation to understand the company's operations",
                "Collection and review of necessary documents",
                "Identification of compliance gaps",
                "Discussion of findings with the management",
                "Preparation and submission of the Secretarial Audit Report"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex items-center justify-center h-6 w-6 bg-green-500/20 text-green-500 rounded-full text-sm">
                    {index + 1}
                  </div>
                  {item}
                </li>
              ))}
            </ol>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            variants={fadeIn("up", "tween", 1.1, 1)} 
            className="bg-zinc-800/30 p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <HelpCircle className="text-green-500 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold">FAQ</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "Is Secretarial Audit mandatory for private companies?",
                  answer: "No, Secretarial Audit is not mandatory for private companies unless they are subsidiaries of public companies meeting the applicability criteria."
                },
                {
                  question: "Who can conduct a Secretarial Audit?",
                  answer: "Only a Practicing Company Secretary (PCS) holding a certificate of practice can conduct a Secretarial Audit."
                },
                {
                  question: "What is the penalty for non-compliance?",
                  answer: "Non-compliance may attract penalties under the Companies Act, 2013, including fines for the company and its officers in default."
                }
              ].map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-green-500/10"
                >
                  <AccordionTrigger className="text-left hover:no-underline text-gray-300 hover:text-green-400">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
}