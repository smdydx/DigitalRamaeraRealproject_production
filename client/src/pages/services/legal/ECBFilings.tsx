
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ECBFilings = () => {
  return (
    <>
      <Helmet>
        <title>External Commercial Borrowing (ECB) Filings | Legal Services</title>
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
              External Commercial Borrowing (ECB) Filings
            </motion.h1>

            <motion.div 
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="prose prose-invert max-w-none mb-12"
            >
              <p className="text-lg text-gray-300 mb-6">
                Expert assistance in External Commercial Borrowing (ECB) filings and compliance with RBI guidelines. We help companies navigate the complex regulatory framework for raising foreign debt.
              </p>

              <h2 className="text-2xl font-semibold text-green-400 mb-4">Our ECB Services</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li>ECB registration and Form ECB filing</li>
                <li>Monthly ECB-2 returns filing</li>
                <li>Compliance with ECB framework and guidelines</li>
                <li>Advisory on ECB routes and eligibility</li>
                <li>Documentation support for ECB drawdown</li>
              </ul>

              <h2 className="text-2xl font-semibold text-green-400 mt-8 mb-4">ECB Filing Process</h2>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10 mb-8">
                <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                  <li>Assessment of ECB proposal and eligibility</li>
                  <li>Preparation of ECB documentation</li>
                  <li>Filing of Form ECB through authorized dealer bank</li>
                  <li>Obtaining LRN (Loan Registration Number)</li>
                  <li>Regular ECB-2 returns filing</li>
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
                  <AccordionTrigger className="text-white">What is ECB?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    External Commercial Borrowings (ECB) are commercial loans raised by eligible resident entities from recognised non-resident entities in permitted foreign currency or Indian Rupees.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-white">What are the different routes of ECB?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    There are two routes for ECB: Automatic Route (where no RBI approval is required) and Approval Route (where prior RBI approval is necessary).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-white">What is ECB-2 Return?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    ECB-2 Return is a monthly return that all borrowers must file with RBI through their AD Bank, containing details of drawdown, utilization, and repayment of ECB.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-white">What is the minimum maturity period for ECB?</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    The minimum average maturity period for ECB is 3 years. However, it may vary based on the amount borrowed and the sector of borrowing.
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

export default ECBFilings;
