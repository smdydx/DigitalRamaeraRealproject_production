import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, FileCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

export default function GSTCancellationSurrender() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim() === "94") {
      setFormMessage("✅ Form submitted successfully! We will contact you shortly.");
    } else {
      setFormMessage("❌ Incorrect captcha. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="container mx-auto px-4">
          <motion.h1 variants={fadeIn("up", "tween", 0.2, 1)} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-4">
            Cancel or Surrender Your GST
          </motion.h1>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-gray-300 text-lg max-w-2xl mx-auto">
            Seamless Online Process with Ramaera Industries. We assist in cancellation, reconciliation, and final GST return filing (GSTR-10).
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Quick Service", "Reliable Support", "Transparent Pricing"].map((text, i) => (
              <div key={i} className="px-4 py-2 rounded-full bg-zinc-800 border border-green-500 text-sm text-white">
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-zinc-900/30 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Cancel or Surrender Your GST Registration Easily</h2>
          <p className="mb-6">
            GST Cancellation or Surrender is the legal process of closing GST registration when it's no longer required. It can be initiated voluntarily or enforced due to non-compliance. Ramaera Industries ensures structured cancellation, helping with reconciliation and GSTR-10 filing.
          </p>
          <h3 className="text-2xl text-green-400 font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Expert Assisted Cancellation</li>
            <li>Fast Online Processing</li>
            <li>GST Liability Reconciliation</li>
            <li>Document Drafting Assistance</li>
            <li>All India Affordable Services</li>
            <li>Post-Cancellation Guidance</li>
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-12 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Eligibility or Reasons for GST Surrender</h2>
          <ul className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Business Closure</li>
            <li>Voluntary Surrender due to turnover below threshold</li>
            <li>Regulatory Mandate for non-compliance</li>
            <li>Business Restructuring (Merger, Acquisition, etc.)</li>
          </ul>
        </div>
      </section>

      {/* Comparison Table (Simplified) */}
      <section className="py-12 bg-zinc-900/30 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">GST Cancellation vs. Suspension vs. Surrender</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-green-500 text-sm">
              <thead>
                <tr className="bg-zinc-800 text-green-300">
                  <th className="border px-4 py-2">Feature</th>
                  <th className="border px-4 py-2">Cancellation</th>
                  <th className="border px-4 py-2">Suspension</th>
                  <th className="border px-4 py-2">Surrender</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr><td className="border px-4 py-2">Legal Status</td><td className="border px-4 py-2">Permanent</td><td className="border px-4 py-2">Temporary</td><td className="border px-4 py-2">Voluntary</td></tr>
                <tr><td className="border px-4 py-2">Return Filing</td><td className="border px-4 py-2">GSTR-10</td><td className="border px-4 py-2">May Apply</td><td className="border px-4 py-2">GSTR-10</td></tr>
                <tr><td className="border px-4 py-2">Revocation</td><td className="border px-4 py-2">Not Allowed</td><td className="border px-4 py-2">Allowed</td><td className="border px-4 py-2">Not Allowed</td></tr>
                <tr><td className="border px-4 py-2">Reason</td><td className="border px-4 py-2">Fraud/Non-Compliance</td><td className="border px-4 py-2">By Authority</td><td className="border px-4 py-2">Voluntary Opt-Out</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Timeline for GST Cancellation</h2>
          <ul className="list-disc text-gray-300 space-y-3">
            <li><strong>1–2 Days:</strong> Application Filing</li>
            <li><strong>7–15 Days:</strong> GST Authority Review</li>
            <li><strong>15–30 Days:</strong> Complete Process Duration</li>
            <li><strong>30 Days:</strong> File GSTR-10 Final Return</li>
          </ul>
        </div>
      </section>

      {/* Documents */}
      <section className="py-12 bg-zinc-900/30 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Documents Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl text-green-300 mb-2">For Cancellation</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>PAN & Aadhaar of Business Owner</li>
                <li>GST Registration Certificate</li>
                <li>Last GST Return Filed</li>
                <li>Business Closure Proof</li>
                <li>Tax Clearance Certificate (if needed)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-green-300 mb-2">For Surrender</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>PAN & Aadhaar of Business Owner</li>
                <li>GST Registration Certificate</li>
                <li>CA Certified Turnover Declaration</li>
                <li>Declaration of Voluntary Surrender</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stepwise Process */}
      <section className="py-12 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Stepwise Process of GST Cancellation</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Log in to GST Portal and file past returns</li>
            <li>Select Cancellation/Surrender from the portal</li>
            <li>Provide reason for surrender with supporting docs</li>
            <li>Submit required documents for verification</li>
            <li>Application review and approval by GST Commissioner</li>
            <li>File final return GSTR-10 within 30 days</li>
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900/30 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-green-400 mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "What is GST cancellation?", a: "It refers to the legal process of terminating GST registration." },
              { q: "What is GST surrender?", a: "Voluntary closure of GST registration by taxpayer when no longer required." },
              { q: "Why would I need to cancel or surrender my GST?", a: "Due to business closure, low turnover, or restructuring." },
              { q: "What documents are required?", a: "PAN, Aadhaar, GST certificate, returns, and proof of closure." },
              { q: "How long does it take?", a: "15–30 days depending on the case." },
              { q: "What is Suo Moto GST Cancellation?", a: "Cancellation initiated by the department due to non-compliance." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-zinc-800 rounded-md border border-green-600/20">
                <AccordionTrigger className="px-4 py-3 text-white">{item.q}</AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-300">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Form */}
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
              <input type="text" placeholder="Type here" className="w-full p-3 rounded bg-zinc-700 text-white" required />
              <div>
                <label className="block text-sm text-gray-300 mb-2">Captcha: 93 + 1 =</label>
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