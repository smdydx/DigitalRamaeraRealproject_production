
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, FileText, Database, PieChart, AlertCircle, CheckCircle2 } from "lucide-react";

const FDIReporting = () => {
  const services = [
    {
      title: "Form FC-GPR Filing",
      items: [
        "Primary issue of shares to foreign investors",
        "Documentation and compliance checks",
        "RBI submission and follow-up",
        "Post-allotment compliance"
      ]
    },
    {
      title: "Form FC-TRS Filing",
      items: [
        "Transfer of shares between resident and non-resident",
        "Valuation certificate assistance",
        "FEMA compliance verification",
        "Regulatory reporting"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is FDI Reporting?",
      answer: "FDI Reporting involves mandatory filings with RBI for foreign investments in Indian companies. This includes Form FC-GPR for primary issue of shares and Form FC-TRS for transfer of shares between residents and non-residents."
    },
    {
      question: "What is the timeline for FC-GPR filing?",
      answer: "FC-GPR must be filed within 30 days from the date of issue of shares to foreign investors. Delay in filing may attract penalties under FEMA regulations."
    },
    {
      question: "What documents are required for FC-TRS?",
      answer: "Key documents include share transfer forms, valuation certificate, board resolutions, KYC documents of parties involved, and proof of consideration payment."
    },
    {
      question: "Are there any sectoral caps for FDI?",
      answer: "Yes, India maintains sector-specific FDI caps. Some sectors allow 100% FDI under automatic route, while others have restrictions or require government approval."
    }
  ];

  const benefits = [
    "Ensures compliance with FEMA regulations",
    "Prevents regulatory penalties",
    "Maintains proper documentation",
    "Facilitates future investments",
    "Enables smooth exit process"
  ];

  return (
    <>
      <Helmet>
        <title>FDI Reporting Services (FC-GPR, FC-TRS) | Legal Services</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">FDI Reporting Services (FC-GPR, FC-TRS)</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-green-500" />
                Overview
              </h2>
              <p className="text-gray-300 mb-6">
                Foreign Direct Investment (FDI) reporting is a crucial compliance requirement under FEMA regulations. Our comprehensive FDI reporting services ensure seamless filing of FC-GPR and FC-TRS forms, maintaining regulatory compliance for your foreign investments.
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
                <CheckCircle2 className="h-6 w-6 text-green-500" />
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
              <h2 className="text-xl font-semibold mb-4 text-white">Need Assistance with FDI Reporting?</h2>
              <p className="text-gray-300">
                Our team of experts is ready to help you navigate the complexities of FDI reporting and ensure full compliance with regulatory requirements.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FDIReporting;
