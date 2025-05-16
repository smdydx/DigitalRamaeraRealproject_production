
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ODICompliance = () => {
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
    }
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
              <h2 className="text-2xl font-semibold mb-4">Our ODI Compliance Services</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>Assistance in ODI Application and Documentation</li>
                <li>Annual Performance Report (APR) Filing</li>
                <li>ODI Reporting on ODI Platform</li>
                <li>Compliance with FEMA Regulations</li>
                <li>Due Diligence of Overseas Investment</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Process Flow</h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Initial Assessment and Strategy Planning</li>
                <li>Documentation and Application Preparation</li>
                <li>Filing with Authorized Dealer Bank</li>
                <li>RBI Reporting and Compliance</li>
                <li>Ongoing Monitoring and Reporting</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ODICompliance;
