
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, FileText, AlertCircle, CheckCircle2, Clock, FileCheck, Scale } from "lucide-react";

const ECBFilings = () => {
  const services = [
    {
      title: "ECB Application & Documentation",
      items: [
        "Form ECB preparation and filing",
        "ECB registration with RBI",
        "Loan agreement review and compliance",
        "Documentation for authorized dealer bank",
        "ECB-2 return filing assistance"
      ]
    },
    {
      title: "Ongoing ECB Compliance",
      items: [
        "Monthly ECB-2 returns filing",
        "End-use monitoring",
        "Hedging compliance",
        "Annual return preparation",
        "RBI correspondence handling"
      ]
    }
  ];

  const requirements = [
    "Company financials",
    "Board resolution for ECB",
    "ECB loan agreement",
    "Projected financial statements",
    "Purpose of ECB utilization",
    "Hedging policy details"
  ];

  const faqs = [
    {
      question: "What is ECB?",
      answer: "External Commercial Borrowings (ECB) are commercial loans raised by eligible resident entities from recognised non-resident entities in permitted foreign currency or Indian Rupees."
    },
    {
      question: "What are the permitted end uses of ECB?",
      answer: "ECB can be used for capital expenditure, working capital, general corporate purposes, repayment of rupee loans, and on-lending for the same purposes."
    },
    {
      question: "What is the minimum average maturity period for ECB?",
      answer: "The minimum average maturity period (MAMP) varies based on the amount and purpose - generally 3-5 years for most categories, with some exceptions."
    },
    {
      question: "Is hedging mandatory for ECB?",
      answer: "Yes, RBI mandates a minimum hedging requirement based on the exposure and the borrower's foreign currency earnings."
    },
    {
      question: "What are ECB-2 returns?",
      answer: "ECB-2 returns are monthly statements filed with RBI through authorized dealer banks reporting the ECB transactions and compliance status."
    }
  ];

  const benefits = [
    "Lower cost of borrowing",
    "Longer repayment period",
    "Diversified funding sources",
    "Access to foreign currency",
    "Flexible end-use options",
    "Enhanced global credibility"
  ];

  return (
    <>
      <Helmet>
        <title>External Commercial Borrowing (ECB) Filings | Legal Services</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">External Commercial Borrowing (ECB) Filings</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-green-500" />
                Overview
              </h2>
              <p className="text-gray-300 mb-6">
                External Commercial Borrowings (ECB) are significant sources of foreign currency funding for Indian companies. Our comprehensive ECB filing services ensure compliance with RBI guidelines while helping you optimize your foreign currency borrowing strategy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-green-500" />
                Our Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                    <h3 className="text-xl font-semibold mb-4 text-green-400">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileCheck className="h-6 w-6 text-green-500" />
                Required Documents
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((req, idx) => (
                  <div key={idx} className="bg-zinc-800/30 p-4 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Scale className="h-6 w-6 text-green-500" />
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-zinc-800/30 p-4 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-green-500" />
                Process Timeline
              </h2>
              <div className="space-y-4">
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                  <ol className="list-decimal list-inside space-y-3 text-gray-300">
                    <li>Initial consultation and assessment (1-2 days)</li>
                    <li>Document collection and verification (3-5 days)</li>
                    <li>Form ECB preparation and filing (2-3 days)</li>
                    <li>RBI processing time (15-30 days)</li>
                    <li>Post-approval compliance setup (5-7 days)</li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-green-500" />
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <section className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-lg border border-green-500/20">
              <h2 className="text-xl font-semibold mb-4 text-white">Need ECB Filing Assistance?</h2>
              <p className="text-gray-300">
                Our expert team can help you navigate the complexities of ECB regulations and ensure smooth filing and compliance processes.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ECBFilings;
