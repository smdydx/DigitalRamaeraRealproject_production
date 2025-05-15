
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, FileCheck, Clock, Building2, Users, Shield, FileText, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CorporateGovernanceAdvisory() {
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
              Corporate Governance Advisory
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Expert guidance through corporate governance and incorporation with full compliance and support
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-8 text-center"
            >
              Pricing & Government Fees
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Professional Fee</h3>
                <p className="text-gray-300">Starts at ₹3,499 (exclusive of government fees and taxes)</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Government Fee</h3>
                <p className="text-gray-300">Varies based on:</p>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• The authorized capital of the company</li>
                  <li>• The state of incorporation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-green-400 mb-12 text-center"
          >
            Incorporation Process
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Process Steps</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• DSC (Digital Signature Certificate) for all promoters</li>
                <li>• DIN (Director Identification Number)</li>
                <li>• Company name reservation via RUN</li>
                <li>• Drafting of MOA & AOA</li>
                <li>• Filing the SPICe+ form with ROC</li>
                <li>• Issuance of Certificate of Incorporation, PAN & TAN</li>
              </ul>
            </div>
            <div className="bg-zinc-800/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Timeline</h3>
              <p className="text-gray-300 mb-4">Estimated Time: 5–7 Working Days</p>
              <ul className="space-y-3 text-gray-300">
                <li>• Day 1-2: Document collection, DSC</li>
                <li>• Day 3-4: Name reservation, MOA/AOA drafting</li>
                <li>• Day 5-7: Form filing & incorporation certificate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-green-400 mb-12 text-center"
          >
            Required Documents
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-4">For Directors/Shareholders</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• PAN Card</li>
                <li>• Aadhaar Card</li>
                <li>• Address Proof (Utility bill or bank statement)</li>
                <li>• Passport-size photograph</li>
              </ul>
            </div>
            <div className="bg-zinc-800/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-4">For Registered Office</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Utility bill (Electricity, Water, etc.)</li>
                <li>• NOC from the property owner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-8 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-zinc-800/30 rounded-lg">
                <AccordionTrigger className="px-4">
                  What is the minimum capital required?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-400">
                  No minimum capital is mandatory.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-zinc-800/30 rounded-lg">
                <AccordionTrigger className="px-4">
                  Can one person start a Private Limited Company?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-400">
                  No, at least 2 shareholders and 2 directors are needed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-zinc-800/30 rounded-lg">
                <AccordionTrigger className="px-4">
                  Is a physical office address necessary?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-400">
                  Yes. Residential address is acceptable with valid proof.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-zinc-800/30 rounded-lg">
                <AccordionTrigger className="px-4">
                  How much time does it take?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-400">
                  Typically 5–7 working days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-zinc-800/30 rounded-lg">
                <AccordionTrigger className="px-4">
                  Can foreigners be shareholders or directors?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-400">
                  Yes, but at least one director must be a resident Indian.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
