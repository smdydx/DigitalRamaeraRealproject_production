import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function GSTRReturnFiling() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim() === "75") {
      setFormMessage("✅ Request submitted! Our tax experts will contact you soon.");
    } else {
      setFormMessage("❌ Incorrect captcha. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="container mx-auto px-4">
          <motion.h1 variants={fadeIn("up", "tween", 0.2, 1)} className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
            GST Return Filing
          </motion.h1>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-gray-300 max-w-2xl mx-auto">
            Online GSTR-1 / 3B Filing with Ramaera Industries – Reliable Tax Compliance Made Easy.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Quick Service", "Reliable Support", "Transparent Pricing"].map((text, i) => (
              <div key={i} className="px-4 py-2 rounded-full bg-zinc-800 border border-green-500 text-sm">
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Packages */}
      <section className="py-12 bg-zinc-900/30 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-4">GST Return Filing Packages</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-green-500">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="px-4 py-2 border">Transactions</th>
                  <th className="px-4 py-2 border">Monthly</th>
                  <th className="px-4 py-2 border">Quarterly</th>
                  <th className="px-4 py-2 border">Half Yearly</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr><td className="border px-4 py-2">Upto 10</td><td className="border px-4 py-2">₹750</td><td className="border px-4 py-2">₹2000</td><td className="border px-4 py-2">₹3800</td></tr>
                <tr><td className="border px-4 py-2">11-25</td><td className="border px-4 py-2">₹1500</td><td className="border px-4 py-2">₹4000</td><td className="border px-4 py-2">₹7500</td></tr>
                <tr><td className="border px-4 py-2">26-50</td><td className="border px-4 py-2">₹3000</td><td className="border px-4 py-2">₹7500</td><td className="border px-4 py-2">₹14000</td></tr>
                <tr><td className="border px-4 py-2">51-100</td><td className="border px-4 py-2">₹5000</td><td className="border px-4 py-2">₹12000</td><td className="border px-4 py-2">₹22000</td></tr>
              </tbody>
            </table>
            <p className="text-gray-400 text-sm mt-4">Note: Packages exclude accounting or data entry. GSTR-1/IFF and GSTR-3B filing only.</p>
          </div>
        </div>
      </section>

      {/* Overview + Services */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Filing GSTR-1, GSTR-3B, GSTR-4, GSTR-9</li>
            <li>Expert Assistance and Return Review</li>
            <li>Due Date Alerts & Reconciliation</li>
            <li>QRMP Scheme Management</li>
            <li>Invoice Furnishing Facility (IFF)</li>
            <li>Penalty & Late Fee Consultation</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              "What is the GST Return?",
              "Who Should File GST Returns?",
              "How Many Returns are there under GST?",
              "What is the penalty for late filing of GST returns?",
              "How is the late fee calculated?",
              "Is there any other penalty besides the late fee?",
              "How to File GST Returns?",
              "What is the Return for Composition Scheme in GST?",
              "What Happens if I Miss Filing a GST Return?",
              "Who Can Opt for the QRMP Scheme?"
            ].map((q, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-zinc-800 border border-green-500/10 rounded-md">
                <AccordionTrigger className="px-4 py-3 text-white text-left">{q}</AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-300">Please contact our expert team at Ramaera Industries for personalized guidance on this topic.</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Request a Call Back Form */}
      <section className="py-12 text-white">
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
              <input type="text" placeholder="Type here..." className="w-full p-3 rounded bg-zinc-700 text-white" required />
              <div>
                <label className="block text-sm text-gray-300 mb-2">Captcha: 72 + 3 =</label>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Answer"
                  className="w-full p-3 rounded bg-zinc-700 text-white"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">Get Started</Button>
              {formMessage && <p className="mt-4 text-sm text-gray-300">{formMessage}</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
