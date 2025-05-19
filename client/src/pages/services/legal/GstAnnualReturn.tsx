import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GSTAnnualReturn() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim() === "108") {
      setFormMessage("✅ Thank you! Our team will reach out to assist you with NIL or Annual Return filing.");
    } else {
      setFormMessage("❌ Incorrect captcha. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24 text-white">
      {/* Hero */}
      <section className="py-20 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="container mx-auto px-4">
          <motion.h1 variants={fadeIn("up", "tween", 0.2, 1)} className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text mb-4">
            GST NIL & Annual Return Filing (GSTR-9)
          </motion.h1>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-gray-300 max-w-2xl mx-auto">
            Simplify your GST compliance with Ramaera Industries. Whether you need to file a NIL return or your Annual GSTR-9, we’ll make the process effortless.
          </motion.p>
        </motion.div>
      </section>
     
        {/* GSTR-9 Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">GST Annual Return - GSTR-9</h2>
          <p className="text-gray-300 mb-4">
            GSTR-9 is an annual return to be filed by all registered taxpayers under GST (except composition taxpayers). It consolidates monthly/quarterly filings like GSTR-1 and GSTR-3B.
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Applicable if turnover exceeds ₹2 Cr (optional if below)</li>
            <li>Due Date: 31st December of the following financial year</li>
            <li>Includes outward/inward supplies, taxes paid, ITC claimed, adjustments</li>
            <li>Requires CA certification if turnover exceeds ₹5 Cr</li>
          </ul>
          <p className="text-gray-400 text-sm">
            Filing GSTR-9 with Ramaera ensures complete reconciliation, accuracy, and timely submission.
          </p>
        </div>
      </section>
     
     {/* Call Back Form */}
      <section className="py-12 bg-zinc-900/30">
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
                <label className="block text-sm text-gray-300 mb-2">Captcha: 100 + 8 =</label>
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
