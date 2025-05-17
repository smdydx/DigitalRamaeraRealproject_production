import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GSTInvoiceEWayBill() {
  const [captchaInput, setCaptchaInput] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim() === "27") {
      setFormMessage("✅ Your request has been received! Our team will get in touch shortly.");
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
            GST Invoice & E-Way Bill
          </motion.h1>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-gray-300 max-w-2xl mx-auto mb-6">
            Prepare, issue, and manage GST Invoices and E-Way Bills with Ramaera Industries. Stay compliant and streamline your supply chain.
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

      {/* GST Invoice Overview */}
      <section className="py-12 bg-zinc-900/30 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">What is a GST Invoice?</h2>
          <p className="mb-4 text-gray-300">
            A GST invoice is a document issued by a supplier detailing taxable supply and the amount due. The format is standardized and must include specific components.
          </p>

          <h3 className="text-2xl text-green-300 mb-2">Types of Invoices & Supporting Documents:</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
            <li>Sales Invoice</li>
            <li>Purchase Invoice</li>
            <li>Bill of Supply</li>
            <li>Credit Notes / Debit Notes</li>
            <li>Advance Receipts</li>
            <li>Refund Vouchers</li>
            <li>Delivery Challans</li>
          </ul>

          <h3 className="text-2xl text-green-300 mb-2">Mandatory Contents of a GST Invoice:</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Supplier's name, address, and GSTIN</li>
            <li>Invoice number and date</li>
            <li>Recipient details (name, address, GSTIN/UIN)</li>
            <li>HSN/SAC codes</li>
            <li>Description and quantity of goods/services</li>
            <li>Value, discounts, and taxable amount</li>
            <li>Applicable tax rates and amounts (CGST, SGST, IGST, Cess)</li>
            <li>Place of supply and delivery address (if different)</li>
            <li>Reverse charge applicability</li>
            <li>Authorized signature or digital signature</li>
          </ul>
        </div>
      </section>

      {/* E-Way Bill Overview */}
      <section className="py-12 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 mb-4">E-Way Bill under GST</h2>
          <p className="mb-4 text-gray-300">
            The E-Way Bill is a mandatory document for transporting goods worth ₹50,000 or more. It can be generated electronically via the GSTN portal or via SMS.
          </p>
          <p className="mb-6 text-gray-300">
            Reach out to Ramaera Industries at <strong>+91-9899-600-605</strong> for seamless E-Way Bill generation services.
          </p>

          <h3 className="text-2xl text-green-300 mb-2">Who Can Generate an E-Way Bill?</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Supplier of goods</li>
            <li>Recipient (if goods are supplied by an unregistered person)</li>
            <li>Transporter</li>
          </ul>
        </div>
      </section>

      {/* Call Back Form */}
      <section className="py-12 bg-zinc-900/30 text-white">
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
                <label className="block text-sm text-gray-300 mb-2">Captcha: 23 + 4 =</label>
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
