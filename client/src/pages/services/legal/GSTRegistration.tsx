import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, FileCheck} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

export default function GSTRegistration() {
     const [turnover, setTurnover] = useState(0);
  const [gstMessage, setGstMessage] = useState("");

  const checkEligibility = () => {
    if (turnover >= 2000000) {
      setGstMessage("✅ You are eligible and mandatory for GST Registration. Let’s connect with us for Registration.");
    } else {
      setGstMessage("😊 You may not be required to register, but we can help you grow your business effectively.");
    }
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center">
            <motion.h1 variants={fadeIn("up", "tween", 0.2, 1)} className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6">
              GST Registration in India
            </motion.h1>
            <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-gray-400 max-w-2xl mx-auto mb-8">
              100% Online Process – Get GST Registered with expert help from Ramaera Industries.
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+918210165412">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <a href="https://wa.me/8210165412" target="_blank">WhatsApp</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn("up", "tween", 0.2, 1)} className="text-3xl font-bold text-green-400 mb-6">
              Why GST Registration is Important
            </motion.h2>
            <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-gray-300 mb-4">
              GST Registration is a mandatory tax compliance for businesses meeting specific turnover or operational criteria. It legalizes business activity, enables tax credit claims, and ensures you're eligible for various business benefits.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn("up", "tween", 0.2, 1)} className="text-3xl font-bold text-green-400 mb-6">
              Who Must Register for GST?
            </motion.h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Businesses with turnover above ₹40L for goods or ₹20L for services.</li>
              <li>Interstate sellers and service providers.</li>
              <li>E-commerce operators and online sellers.</li>
              <li>Importers and Exporters of goods or services.</li>
              <li>Casual taxable persons and trade fair participants.</li>
              <li>Anyone opting for Voluntary GST Registration.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn("up", "tween", 0.2, 1)} className="text-3xl font-bold text-green-400 mb-6">
              Step-by-Step Process
            </motion.h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Preparation of documents.</li>
              <li>Registration on GST portal and TRN generation.</li>
              <li>Filling GST REG-01 with all details.</li>
              <li>Response to clarifications (if any).</li>
              <li>Approval and issuance of GSTIN.</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn("up", "tween", 0.2, 1)} className="text-3xl font-bold text-green-400 mb-6">
              Documents Required
            </motion.h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <FileCheck className="h-6 w-6 text-green-400 mt-1" />
                PAN & Aadhaar of promoters/directors
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FileCheck className="h-6 w-6 text-green-400 mt-1" />
                Proof of business address – Rent Agreement/NOC/Utility Bill
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <FileCheck className="h-6 w-6 text-green-400 mt-1" />
                Certificate of Incorporation/Partnership Deed (for entities)
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn("up", "tween", 0.2, 1)} className="text-3xl font-bold text-green-400 mb-6">
              Benefits of GST Registration
            </motion.h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Legal Recognition & Compliance</li>
              <li>Eligible to claim Input Tax Credit (ITC)</li>
              <li>Enhanced Business Credibility</li>
              <li>Eligible for Government Tenders and MSME Schemes</li>
              <li>Ease in Interstate Business Transactions</li>
            </ul>
          </motion.div>
        </div>
      </section>

       {/* Pricing Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Our Pricing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Basic",
                price: "₹999",
                features: ["GST Application Filing", "Email Support"]
              },
              {
                name: "Standard",
                price: "₹1,999",
                features: ["All in Basic", "Expert Consultation", "Document Review"]
              },
              {
                name: "Premium",
                price: "₹2,999",
                features: ["All in Standard", "Priority Processing", "Dedicated Manager"]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-green-400 text-2xl mb-4">{plan.price}</p>
                <ul className="text-gray-300 space-y-1">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Logos Section */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Trusted by 1000+ Businesses</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <img src="/logos/client1.png" alt="Client 1" className="h-12 grayscale hover:grayscale-0" />
            <img src="/logos/client2.png" alt="Client 2" className="h-12 grayscale hover:grayscale-0" />
            <img src="/logos/client3.png" alt="Client 3" className="h-12 grayscale hover:grayscale-0" />
          </div>
        </div>
      </section>

      {/* GST Eligibility Calculator */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:w-1/2 bg-zinc-800 p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold text-green-400 mb-4">GST Eligibility Calculator</h2>
            <input
              type="number"
              placeholder="Enter your annual turnover in ₹ Lakhs"
              className="w-full p-3 rounded bg-zinc-700 text-white mb-4"
              value={turnover}
              onChange={(e) => setTurnover(parseFloat(e.target.value))}
            />
            <Button className="w-full bg-green-500 hover:bg-green-600" onClick={checkEligibility}>Check Eligibility</Button>
            {gstMessage && <p className="mt-4 text-sm text-gray-200">{gstMessage}</p>}
          </div>
        </div>
      </section>

      {/* Request Callback Form */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:w-1/2 bg-zinc-800 p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Request a Callback</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-zinc-700 text-white" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded bg-zinc-700 text-white" />
              <input type="email" placeholder="Email Address" className="w-full p-3 rounded bg-zinc-700 text-white" />
              <textarea placeholder="Your Message" className="w-full p-3 rounded bg-zinc-700 text-white" rows={3}></textarea>
              <Button className="w-full bg-green-500 hover:bg-green-600">Submit</Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn("up", "tween", 0.2, 1)} className="text-3xl font-bold text-center text-green-400 mb-12">
              Frequently Asked Questions
            </motion.h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What is GSTIN?",
                  answer: "GSTIN stands for Goods and Services Tax Identification Number. It is a 15-digit unique number assigned upon successful GST registration."
                },
                {
                  question: "Is GST registration mandatory for small businesses?",
                  answer: "If your turnover exceeds ₹40L for goods or ₹20L for services, or if you do interstate or online sales, registration is mandatory."
                },
                {
                  question: "How long does the GST registration process take?",
                  answer: "It typically takes 7–10 working days provided all documents and details are in order."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-zinc-800/30 rounded-lg border border-green-500/10">
                  <AccordionTrigger className="px-6 text-white hover:text-green-400">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
