
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FDIReporting = () => {
  return (
    <>
      <Helmet>
        <title>FDI Reporting (FC-GPR, FC-TRS) | Legal Services</title>
      </Helmet>
      <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="text-4xl font-bold text-white mb-8"
            >
              FDI Reporting (FC-GPR, FC-TRS)
            </motion.h1>
            
            <motion.div 
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="prose prose-invert max-w-none mb-12"
            >
              <p className="text-lg text-gray-300 mb-6">
                Comprehensive assistance with Foreign Direct Investment (FDI) reporting requirements, including FC-GPR and FC-TRS filings with the Reserve Bank of India (RBI).
              </p>

              <h2 className="text-2xl font-semibold text-green-400 mb-4">Our Services Include:</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li>Form FC-GPR filing for reporting foreign investment in Indian companies</li>
                <li>Form FC-TRS submission for transfer of shares between residents and non-residents</li>
                <li>Compliance with FEMA regulations and RBI guidelines</li>
                <li>Documentation and reporting support for foreign investment</li>
                <li>Advisory on FDI policy and sectoral caps</li>
              </ul>

              <h2 className="text-2xl font-semibold text-green-400 mt-8 mb-4">Process Overview</h2>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10 mb-8">
                <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                  <li>Initial consultation and assessment of FDI structure</li>
                  <li>Document collection and verification</li>
                  <li>Preparation of necessary forms and supporting documents</li>
                  <li>Filing with RBI through authorized dealer bank</li>
                  <li>Follow-up and compliance monitoring</li>
                </ol>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="mt-12"
            >
              <h2 className="text-2xl font-semibold text-green-400 mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white">What is FC-GPR reporting?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    FC-GPR (Foreign Currency-Gross Provisional Return) is a form used to report the issue of shares by an Indian company to a foreign investor under FDI scheme.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-white">When is FC-TRS filing required?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    FC-TRS filing is required when there is a transfer of shares between a resident and a non-resident, or vice versa. It must be filed within 60 days of transfer of shares.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-white">What are the timelines for FC-GPR filing?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    FC-GPR should be filed within 30 days from the date of issue of shares to foreign investors.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-white">What documents are required for FDI reporting?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Key documents include board resolution, shareholders' agreement, valuation certificate, KYC documents of foreign investor, and FIRC/SWIFT copy for inward remittance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default FDIReporting;
