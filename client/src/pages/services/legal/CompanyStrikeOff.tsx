import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, CheckCircle2 } from "lucide-react";

const CompanyStrikeOff = () => {
  return (
    <div className="min-h-screen bg-background relative pt-24 pb-32">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8 md:space-y-16">
          {/* Hero Section */}
          <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="legal-hero flex flex-col items-center justify-center text-center relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/services/business-growth.jpg"
                alt="Company Strike-Off"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
            </div>
            <div className="absolute inset-0 -z-10">
              <img 
                src="/images/services/business-growth.jpg" 
                alt="Company Strike-Off" 
                className="w-full h-[400px] object-cover opacity-20 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 pt-16">
              Company Strike-Off Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Professional assistance for closing dormant companies through the legal process of strike-off under Section 248 of the Companies Act, 2013.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Eligibility Assessment",
              "Document Preparation",
              "Board Resolution & NOC",
              "Statement of Accounts",
              "Filing Form STK-2",
              "Public Notice Management",
              "Objection Handling",
              "Final Strike-Off Certificate"
            ].map((step, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{step}</h3>
              </div>
            ))}
          </motion.div>

          {/* Requirements Section */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Strike-Off Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "No business operations for 2 years",
                "No pending litigations",
                "No pending statutory dues",
                "Assets disposed or transferred"
              ].map((requirement, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mt-1" />
                  <p className="text-gray-300">{requirement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={fadeIn("up", "tween", 1, 1)} className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Begin Your Company Closure Process Today!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Get Strike-Off Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                <Mail className="mr-2 h-5 w-5" /> Request Eligibility Check
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyStrikeOff;