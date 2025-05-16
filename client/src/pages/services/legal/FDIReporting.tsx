
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Database, PieChart, AlertCircle, CheckCircle2, BookOpen, FileCheck, ArrowRight } from "lucide-react";

const FDIReporting = () => {
  const faqs = [
    {
      question: "What is Form FC-GPR?",
      answer: "Form FC-GPR (Foreign Currency-Gross Provisional Return) is filed to report the issue of shares by an Indian company to a foreign investor under FDI scheme. It must be filed within 30 days of issue of shares."
    },
    {
      question: "What is Form FC-TRS?",
      answer: "Form FC-TRS (Foreign Currency-Transfer of Shares) is filed to report transfer of shares between resident and non-resident entities. It's required for both sale and purchase transactions."
    },
    {
      question: "What are the key compliance requirements under FDI?",
      answer: "Key requirements include timely filing of FC-GPR/FC-TRS, adherence to sectoral caps, pricing guidelines compliance, and reporting of foreign investment through Single Master Form (SMF)."
    },
    {
      question: "What are the penalties for delayed FDI reporting?",
      answer: "Late filing can attract penalties under FEMA 1999, which may be up to thrice the amount involved for each contravention. Compounding fees may also be applicable."
    },
    {
      question: "How long does FDI approval take?",
      answer: "Under automatic route, no prior approval is required. For approval route, it typically takes 8-10 weeks after filing application with relevant ministry/department."
    }
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
                <FileText className="h-6 w-6 text-green-500" />
                Our Comprehensive FDI Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Database className="h-5 w-5 text-blue-400" />
                    FC-GPR Filing
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Preparation and filing of Form FC-GPR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Documentation for share allotment to foreign investors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Valuation certificate assistance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-purple-400" />
                    FC-TRS Filing
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Transfer of shares documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Compliance with pricing guidelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>Post-transaction reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-yellow-500" />
                Key Compliance Areas
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                    Reporting Timeline
                  </h3>
                  <p>Strict adherence to statutory timelines for various filings and reports</p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-orange-400" />
                    Documentation
                  </h3>
                  <p>Comprehensive documentation support for all FDI transactions</p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-blue-400" />
                    Regulatory Compliance
                  </h3>
                  <p>Ensuring compliance with FEMA regulations and RBI guidelines</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
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

export default FDIReporting;
