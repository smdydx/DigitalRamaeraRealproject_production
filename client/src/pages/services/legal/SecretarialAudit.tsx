
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Clock, Building2, Users, Shield, CheckCircle2, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SecretarialAudit() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
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
              Secretarial Audit Services
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Expert Secretarial Audit services to verify compliance and identify areas for improvement
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
        {/* Overview Section */}
        <motion.section variants={fadeIn("up", "tween", 0.4, 1)} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="text-green-500" /> Overview
          </h2>
          <p className="text-gray-400">
            Secretarial Audit is a process to verify the compliance of a company with the provisions of various laws, rules, and regulations. We provide expert Secretarial Audit services to help companies identify non-compliances and take corrective actions.
          </p>
        </motion.section>

        {/* Pricing Section */}
        <motion.section variants={fadeIn("up", "tween", 0.5, 1)} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="text-green-500" /> Pricing & Fees
          </h2>
          <div className="bg-zinc-900/50 border border-green-500/10 rounded-lg p-6">
            <p className="text-gray-400 mb-4">
              The pricing varies based on the size and complexity of the company. We offer competitive rates and customized packages.
            </p>
            <p className="text-gray-400">
              Note: Government fees for any required filings will be charged separately as per applicable laws.
            </p>
          </div>
        </motion.section>

        {/* Applicability Section */}
        <motion.section variants={fadeIn("up", "tween", 0.6, 1)} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Building2 className="text-green-500" /> Applicability
          </h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Every listed company
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Public companies with paid-up share capital ≥ ₹50 crore
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Public companies with turnover ≥ ₹250 crore
            </li>
          </ul>
        </motion.section>

        {/* Timeline Section */}
        <motion.section variants={fadeIn("up", "tween", 0.7, 1)} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Clock className="text-green-500" /> Timeline
          </h2>
          <p className="text-gray-400">
            Typically takes 2 to 4 weeks to complete the audit and issue the report, depending on company size and operations.
          </p>
        </motion.section>

        {/* Required Documents */}
        <motion.section variants={fadeIn("up", "tween", 0.8, 1)} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FileText className="text-green-500" /> Required Documents
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Memorandum and Articles of Association
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Minutes of Board and General Meetings
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Statutory Registers
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Shareholding details
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Annual Reports
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              Regulatory filings
            </li>
          </ul>
        </motion.section>

        {/* FAQ Section */}
        <motion.section variants={fadeIn("up", "tween", 0.9, 1)} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="text-green-500" /> FAQ
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is Secretarial Audit mandatory for private companies?</AccordionTrigger>
              <AccordionContent>
                No, Secretarial Audit is not mandatory for private companies unless they are subsidiaries of public companies meeting the applicability criteria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who can conduct a Secretarial Audit?</AccordionTrigger>
              <AccordionContent>
                Only a Practicing Company Secretary (PCS) holding a certificate of practice can conduct a Secretarial Audit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is the penalty for non-compliance?</AccordionTrigger>
              <AccordionContent>
                Non-compliance may attract penalties under the Companies Act, 2013, including fines for the company and its officers in default.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>
      </motion.div>
    </main>
  );
}
