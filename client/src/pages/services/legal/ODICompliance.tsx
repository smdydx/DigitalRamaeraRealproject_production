
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, FileText, AlertCircle, CheckCircle2, Clock, FileCheck, Scale } from "lucide-react";

const ODICompliance = () => {
  const services = [
    {
      title: "ODI Application & Documentation",
      items: [
        "Form ODI preparation and filing",
        "Valuation certificate assistance",
        "Board resolution drafting",
        "Investment structure planning",
        "Compliance verification"
      ]
    },
    {
      title: "Ongoing Compliance Services",
      items: [
        "Annual Performance Report (APR) filing",
        "Overseas investment monitoring",
        "Regulatory reporting assistance",
        "FEMA compliance management",
        "RBI correspondence handling"
      ]
    }
  ];

  const requirements = [
    "Company's financial statements",
    "Board resolution for investment",
    "Valuation certificate of investment",
    "KYC documents of overseas entity",
    "Investment structure details",
    "Source of funds documentation"
  ];

  const faqs = [
    {
      question: "What is ODI?",
      answer: "Overseas Direct Investment (ODI) refers to investments made by Indian entities in foreign entities through various modes like Joint Venture (JV), Wholly Owned Subsidiary (WOS), or investment in existing foreign companies."
    },
    {
      question: "What are the modes of ODI?",
      answer: "ODI can be made through Automatic Route (up to 400% of net worth) or Approval Route (beyond 400% of net worth, requiring RBI approval)."
    },
    {
      question: "What documents are required for ODI?",
      answer: "Key documents include Form ODI, Valuation Certificate, Board Resolution, Statutory Auditor's Certificate, and documents of the overseas entity."
    },
    {
      question: "What is the timeline for APR filing?",
      answer: "Annual Performance Report (APR) must be filed by December 31st each year for all overseas investments made by Indian entities."
    },
    {
      question: "Are there any sector restrictions?",
      answer: "Yes, ODI in certain sectors like real estate business, banking business, and financial services requires special approval from RBI."
    }
  ];

  const benefits = [
    "Global business expansion",
    "Access to international markets",
    "Tax-efficient structure",
    "Competitive advantage",
    "Portfolio diversification",
    "Strategic growth opportunities"
  ];

  return (
    <>
      <Helmet>
        <title>ODI (Overseas Direct Investment) Compliance | Legal Services</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">ODI (Overseas Direct Investment) Compliance</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-green-500" />
                Overview
              </h2>
              <p className="text-gray-300 mb-6">
                Overseas Direct Investment (ODI) is a strategic tool for Indian businesses looking to expand globally. Our comprehensive ODI compliance services ensure seamless overseas investment processes while maintaining full regulatory compliance with RBI guidelines and FEMA regulations.
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
                    <li>Documentation preparation (3-5 days)</li>
                    <li>Form ODI filing and submission (2-3 days)</li>
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
              <h2 className="text-xl font-semibold mb-4 text-white">Ready to Expand Globally?</h2>
              <p className="text-gray-300">
                Our expert team is here to guide you through the ODI compliance process and help you achieve your international business objectives while ensuring full regulatory compliance.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ODICompliance;
