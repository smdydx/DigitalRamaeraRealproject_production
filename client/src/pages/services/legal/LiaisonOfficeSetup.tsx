
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, FileText, AlertCircle, CheckCircle2, Clock, FileCheck, Scale } from "lucide-react";

const LiaisonOfficeSetup = () => {
  const services = [
    {
      title: "Application & Registration",
      items: [
        "RBI application preparation and filing",
        "Documentation and compliance support",
        "ROC registration assistance",
        "Bank account opening support",
        "Liaison with authorities"
      ]
    },
    {
      title: "Ongoing Compliance",
      items: [
        "Annual activity report filing",
        "AAC filing with RBI",
        "ROC annual compliance",
        "Tax compliance management",
        "Regulatory updates and advisory"
      ]
    }
  ];

  const requirements = [
    "Parent company financials",
    "Board resolution for setup",
    "Project report/business plan",
    "Power of attorney",
    "KYC documents",
    "Local address proof"
  ];

  const faqs = [
    {
      question: "What is a Liaison Office?",
      answer: "A Liaison Office (LO) acts as a representative office of a foreign company in India. It can undertake only liaison activities and cannot engage in any business activity or earn any income in India."
    },
    {
      question: "What are the key differences between LO, BO, and PO?",
      answer: "Liaison Office can only undertake liaison activities, Branch Office can conduct business activities, and Project Office is set up for specific projects."
    },
    {
      question: "What is the validity period of LO permission?",
      answer: "RBI generally grants permission for setting up LO for 3 years initially, which can be extended with fresh approval."
    },
    {
      question: "Can a Liaison Office generate income in India?",
      answer: "No, a Liaison Office is prohibited from undertaking any business activity in India and cannot earn any income in India."
    },
    {
      question: "What are the annual compliance requirements?",
      answer: "Annual Activity Certificate from CA, Annual filing with RBI and ROC, Tax returns, and other regulatory compliances as applicable."
    }
  ];

  const benefits = [
    "Market research opportunities",
    "Business networking platform",
    "Brand promotion channel",
    "Local support establishment",
    "Cost-effective entry strategy",
    "Risk assessment capability"
  ];

  return (
    <>
      <Helmet>
        <title>Liaison/Branch/Project Office Setup Compliance | Legal Services</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Liaison/Branch/Project Office Setup Compliance</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-green-500" />
                Overview
              </h2>
              <p className="text-gray-300 mb-6">
                Setting up a Liaison, Branch, or Project Office in India requires careful navigation of RBI guidelines and compliance requirements. Our comprehensive services ensure smooth establishment and ongoing compliance management for foreign entities looking to establish their presence in India.
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
                    <li>Document collection and verification (7-10 days)</li>
                    <li>RBI application preparation and filing (5-7 days)</li>
                    <li>RBI processing and approval (30-45 days)</li>
                    <li>Post-approval setup and compliance (15-20 days)</li>
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
              <h2 className="text-xl font-semibold mb-4 text-white">Ready to Establish Your Presence in India?</h2>
              <p className="text-gray-300">
                Our expert team can guide you through the complex process of setting up and maintaining a compliant Liaison, Branch, or Project Office in India.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LiaisonOfficeSetup;
