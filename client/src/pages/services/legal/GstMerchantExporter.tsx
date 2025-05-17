import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare} from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MerchantExporterGST() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim() === "102") {
      setFormMessage("✅ Request submitted! We will reach out to guide your Merchant Exporter GST setup.");
    } else {
      setFormMessage("❌ Incorrect captcha. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="container mx-auto px-4">
          <motion.h1 variants={fadeIn("up", "tween", 0.2, 1)} className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
            Merchant Exporter Under GST
          </motion.h1>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-gray-300 max-w-2xl mx-auto">
            Obtain concessional tax status under Notification 40/2017 & 41/2017 with Ramaera Industries. Save tax and streamline your export process.
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
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Quick Service", "Reliable Support", "Transparent Pricing"].map((text, i) => (
              <div key={i} className="px-4 py-2 rounded-full bg-zinc-800 border border-green-500 text-sm">
                {text}
              </div>
            ))}
          </div>
           
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Merchant Exporter Status & Benefits</h2>
          <p className="text-gray-300 mb-4">
            A Merchant Exporter procures goods for export without owning manufacturing units. Ramaera assists you in registering with Export Promotion Councils, availing concessional GST rates and compliance guidance.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Purchase at 0.1% GST</li>
            <li>Export within 90 days</li>
            <li>Export under LUT/Bond with GSTIN mentioned</li>
            <li>Input Tax Credit (ITC) of 0.1%</li>
            <li>Easy online compliance & refund avoidance</li>
          </ul>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Conditions to Avail 0.1% GST Rate</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Supplier must issue tax invoice</li>
            <li>Export within 90 days from purchase</li>
            <li>Registration with Export Council (RCMC)</li>
            <li>Goods move directly to port/ICD</li>
            <li>Export under LUT with GSTIN on shipping bill</li>
            <li>Submit EGM/shipping bill proof to supplier’s GST office</li>
          </ul>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Steps to Become Merchant Exporter</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Register your business & obtain PAN</li>
            <li>Open a current account in a scheduled bank</li>
            <li>Obtain Import Export Code (IEC)</li>
            <li>Get Registration-Cum Membership Certificate (RCMC)</li>
          </ol>
        </div>
      </section>

      {/* Compliance Responsibility Table */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Supplier vs Exporter Responsibilities</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-green-500">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="border px-4 py-2">Supplier</th>
                  <th className="border px-4 py-2">Exporter</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr><td className="border px-4 py-2">Issue invoice & collect RCMC</td><td className="border px-4 py-2">Export under LUT/Bond</td></tr>
                <tr><td className="border px-4 py-2">Ship directly to port</td><td className="border px-4 py-2">Mention supplier GSTIN in docs</td></tr>
                <tr><td className="border px-4 py-2">Maintain 90-day compliance</td><td className="border px-4 py-2">File docs to supplier’s GST office</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              "Who is a merchant exporter under GST?",
              "What is the difference between an exporter and a merchant exporter?",
              "Is GST applicable on exports?",
              "Are exports zero-rated in GST?",
              "How to become a merchant exporter?",
              "What is the GST rate for merchant exporters?",
              "Is RCMC mandatory for merchant exporters?",
              "What are the benefits of being a merchant exporter under GST?"
            ].map((q, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-zinc-800 border border-green-500/10 rounded-md">
                <AccordionTrigger className="px-4 py-3 text-white text-left">{q}</AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-300">Please contact our experts at Ramaera Industries for detailed assistance on this topic.</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Request a Call Back Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Request a Call Back</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Name *" className="w-full p-3 rounded bg-zinc-700 text-white" required />
              <input type="email" placeholder="Email *" className="w-full p-3 rounded bg-zinc-700 text-white" required />
              <div className="flex gap-2">
                <span className="bg-zinc-700 px-4 py-3 rounded">+91</span>
                <input type="tel" placeholder="Mobile *" className="flex-1 p-3 rounded bg-zinc-700 text-white" required />
              </div>
              <input type="text" placeholder="Message Type here..." className="w-full p-3 rounded bg-zinc-700 text-white" required />
             
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">Get Started</Button>
              {formMessage && <p className="mt-4 text-sm text-gray-300">{formMessage}</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
