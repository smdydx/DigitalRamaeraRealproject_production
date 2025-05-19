import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GSTLUTFiling() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim() === "102") {
      setFormMessage("✅ Thank you! Your LUT filing request has been submitted. We’ll get in touch with you shortly.");
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
            GST LUT Filing @ ₹ 1,499/-
          </motion.h1>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-gray-300 max-w-2xl mx-auto mb-6">
            Export without GST! File your LUT under Rule 96A and stay compliant. Ramaera Industries makes the process smooth, fast, and reliable.
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

      {/* Ramaera Message */}
      <section className="py-12 bg-zinc-900/30 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Why Choose Ramaera Industries?</h2>
          <p className="text-gray-300">
            At Ramaera, we believe in empowering exporters. Our experts ensure your LUT filing is accurate and timely so that you can focus on growing your global business without worrying about GST compliance. Trust us for quick, affordable, and end-to-end digital support.
          </p>
        </div>
      </section>

      {/* Form Section */}
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
                <label className="block text-sm text-gray-300 mb-2">Captcha: 96 + 6 =</label>
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
