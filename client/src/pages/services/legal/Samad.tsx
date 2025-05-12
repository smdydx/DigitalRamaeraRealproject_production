import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, CheckCircle2 } from "lucide-react";

const FemaRBICompliance = () => {
  return (
    <div className="min-h-screen bg-background relative pt-24 pb-32">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0000ff22_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00008022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-16">
          {/* Hero Section */}
          <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              FEMA and RBI Compliance Services
            </h1>
            <p className="text-2xl font-bold text-green-400">Seamless Foreign Exchange Compliance for Global Business Expansion</p>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              At SOFTBEEM, powered by RAMAERA Legal Infotech Pvt Ltd, we provide complete FEMA (Foreign Exchange Management Act) and RBI Compliance Services for companies dealing with foreign investment, cross-border transactions, and international expansions. Our experts ensure that your business stays compliant with FEMA regulations, avoids penalties, and navigates RBI reporting obligations smoothly.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Foreign Direct Investment (FDI) Approvals and Reporting",
              "Filing of FC-GPR (Allotment of Shares to Foreign Investors)",
              "Filing of FC-TRS (Transfer of Shares between Resident and Non-Resident)",
              "External Commercial Borrowings (ECB) Compliances",
              "Overseas Direct Investment (ODI) Reporting",
              "Compounding Applications under FEMA",
              "Setting up Branch/Liaison/Project Offices in India",
              "FEMA Guidelines Advisory for Startups",
              "FEMA Due Diligence for M&A"
            ].map((service, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
              </div>
            ))}
          </motion.div>

          {/* Why It Matters */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why FEMA/RBI Compliance Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Non-compliance can lead to heavy penalties under FEMA",
                "Mandatory for Startups, MNCs, Foreign Subsidiaries, and Joint Ventures",
                "Essential for raising international funding, issuing ESOPs to foreign employees, and cross-border business expansion"
              ].map((point, index) => (
                <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10">
                  <p className="text-gray-300">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Choose SOFTBEEM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "In-depth Knowledge of FEMA Laws and RBI Master Directions",
                "100% Timely and Accurate Reporting",
                "Transaction Structuring Support (FDI, ECB, ODI)",
                "RBI Liasioning and Representation Services",
                "Post-Investment Compliance and Support"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mt-1" />
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={fadeIn("up", "tween", 1, 1)} className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Ensure Smooth Cross-Border Operations with SOFTBEEM!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Book FEMA/RBI Compliance Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500/30 text-green-400 hover:bg-blue-500/10">
                <Mail className="mr-2 h-5 w-5" /> Request FEMA/RBI Compliance Proposal
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FemaRBICompliance;