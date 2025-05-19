import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Edit3 } from "lucide-react";
import { useState } from "react";

export default function GSTRegistrationAmendment() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim() === "95") {
      setFormMessage("✅ Form submitted successfully! Our team will get back to you soon.");
    } else {
      setFormMessage("❌ Incorrect captcha. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1 variants={fadeIn("up", "tween", 0.2, 1)} className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6">
              Amendment of GST Registration
            </motion.h1>
            <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-gray-400 text-lg mb-2">
              Packages Start @ ₹ 1,499/-
            </motion.p>
            <motion.p variants={fadeIn("up", "tween", 0.4, 1)} className="text-gray-400 max-w-2xl mx-auto mb-8">
              Amend your GST details easily – principal place of business, authorized signatory, business name & more. We assist in both core and non-core changes.
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-4">
              <div className="text-white px-4 py-2 rounded-full bg-zinc-800 border border-green-500">Quick Service</div>
              <div className="text-white px-4 py-2 rounded-full bg-zinc-800 border border-green-500">Reliable Support</div>
              <div className="text-white px-4 py-2 rounded-full bg-zinc-800 border border-green-500">Transparent Pricing</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4 max-w-3xl text-white">
          <h2 className="text-3xl font-bold text-green-400 mb-4">What is GST Amendment?</h2>
          <p className="mb-4">
            If your business details have changed after registration, it's important to update them on the GST Portal. Core fields include legal name, address, and authorized signatory. Non-core fields are bank details, email, mobile number, etc.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Change in principal place of business</li>
            <li>Change or addition of branches</li>
            <li>Amendment of authorized signatory</li>
            <li>Update of business structure or name</li>
          </ul>
        </div>
      </section>

      {/* Amendment Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full md:w-1/2 bg-zinc-800 p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Request a GST Amendment</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Name *" className="w-full p-3 rounded bg-zinc-700 text-white" required />
              <input type="email" placeholder="Email *" className="w-full p-3 rounded bg-zinc-700 text-white" required />
              <div className="flex gap-2">
                <span className="bg-zinc-700 text-white px-4 py-3 rounded">+91</span>
                <input type="tel" placeholder="Mobile *" className="flex-1 p-3 rounded bg-zinc-700 text-white" required />
              </div>
              <input type="text" placeholder="Type your request here..." className="w-full p-3 rounded bg-zinc-700 text-white" required />
              <div>
                <label className="block text-sm text-gray-300 mb-2">Captcha: 89 + 6 =</label>
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