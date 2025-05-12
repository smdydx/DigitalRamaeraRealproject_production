import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, CheckCircle2 } from "lucide-react";

const FemaRBICompliance = () => {
  return (
    <div className="min-h-screen bg-background relative pt-20 pb-32">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0000ff22_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00008022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* Hero Section */}
          <motion.div
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="text-center space-y-6 bg-blue-950/40 p-10 rounded-xl shadow-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              FEMA & RBI Compliance Services
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Expert support for Foreign Exchange compliance, FDI, and cross-border operations by SOFTBEEM (A RAMAERA Legal Infotech Pvt Ltd venture).
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Book Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
              >
                <Mail className="mr-2 h-5 w-5" /> Request Proposal
              </Button>
            </div>
          </motion.div>

          {/* Step-by-Step Process */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Our Compliance Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["Initial Consultation & Assessment", "Document Collection & Verification", "Filing with RBI & Follow-ups"].map((step, i) => (
                <div
                  key={i}
                  className="bg-zinc-900/50 border border-blue-500/10 p-6 rounded-xl text-center"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">{i + 1}</div>
                  <p className="text-white font-medium">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Offerings */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["FDI Approvals & Reporting", "FC-GPR & FC-TRS Filings", "ECB & ODI Compliance", "FEMA Compounding Applications", "Foreign Office Setup in India", "FEMA Advisory for Startups"].map(
                (service, index) => (
                  <div
                    key={index}
                    className="p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all"
                  >
                    <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{service}</h3>
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* Why Compliance is Important */}
          <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Why It Matters</h2>
            <ul className="grid md:grid-cols-3 gap-6 text-gray-300">
              {["Avoid FEMA Penalties & Legal Risks", "Mandatory for FDI, ECB, ODI Transactions", "Enables Smooth Global Business Expansion"].map((reason, index) => (
                <li key={index} className="bg-zinc-900/50 border border-blue-500/10 p-4 rounded-xl">
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={fadeIn("up", "tween", 1, 1)} className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Why Choose SOFTBEEM</h2>
            <ul className="grid md:grid-cols-2 gap-6 text-gray-300">
              {["RBI Liasioning Experts", "Accurate & On-Time Reporting", "Structuring Support for Investments", "Dedicated Legal Advisors"].map(
                (point, index) => (
                  <li key={index} className="flex gap-4 p-4 bg-zinc-900/50 border border-blue-500/10 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mt-1" />
                    <span>{point}</span>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FemaRBICompliance;
