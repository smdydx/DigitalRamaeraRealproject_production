import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, ArrowRight, CheckCircle2, Calendar } from "lucide-react";

const SecretarialAudit = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Secretarial Audit Services (MR-3 Certification)
            </h1>
            <p className="text-2xl font-bold text-green-400">Ensuring Corporate Governance Excellence and Regulatory Compliance</p>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Secretarial Audit is mandatory for all listed companies and public companies with ₹50 crore+ paid-up capital or ₹250 crore+ turnover (as per Section 204 of Companies Act, 2013). At SOFTBEEM, we offer professional Secretarial Audit services ensuring that your company complies with the law, strengthens governance practices, and mitigates regulatory risks.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Companies Act, 2013 Compliance Review",
              "SEBI (LODR) Regulations, 2015 Review",
              "Listing Agreement Compliance",
              "FEMA and RBI Guidelines Review",
              "Securities Contract (Regulation) Act Review",
              "Depositories Act Compliance Review",
              "Corporate Governance Practices Check",
              "Maintenance of Secretarial Standards"
            ].map((service, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
              </div>
            ))}
          </motion.div>

          {/* Process Steps */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Process of Secretarial Audit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Preliminary Meeting and Understanding Corporate Structure",
                "Internal Compliance Documents Collection",
                "Verification of Corporate Records and Statutory Books",
                "Issue of Observations and Queries",
                "Draft Secretarial Audit Report Preparation",
                "Finalization and Submission to Company Board"
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Choose SOFTBEEM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Experienced Company Secretaries (CS Professionals)",
                "Zero Non-Compliance Audit Reports",
                "Quick Turnaround and Confidential Reporting",
                "Support for SEBI, ROC, FEMA, RBI, and Stock Exchange Compliances",
                "Comprehensive Post-Audit Advisory"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mt-1" />
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={fadeIn("up", "tween", 1, 1)} className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Ensure Your Company's Governance is Audit-Ready!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Book Secretarial Audit Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                <Mail className="mr-2 h-5 w-5" /> Request Secretarial Audit Proposal
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecretarialAudit;