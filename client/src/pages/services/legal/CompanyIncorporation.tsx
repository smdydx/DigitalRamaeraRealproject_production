
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const CompanyIncorporation = () => {
  return (
    <div className="min-h-screen bg-background relative pt-20">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-16">
          {/* Hero Section */}
          <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Company Incorporation Services in India
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Start Right. Build Smart. Grow Legally. At SOFTBEEM, powered by RAMAERA Legal Infotech Pvt Ltd, we offer end-to-end company incorporation services to help entrepreneurs, startups, and corporates establish legally compliant entities in India — quickly, seamlessly, and affordably.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Private Limited Company Registration",
              "One Person Company (OPC) Registration",
              "Limited Liability Partnership (LLP) Formation",
              "Public Limited Company Setup",
              "Section 8 Company Registration",
              "Producer Company Incorporation",
              "Nidhi Company Registration",
              "Foreign Company Subsidiary Setup"
            ].map((service, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
              </div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Process of Company Registration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Business Consultation and Entity Selection",
                "Name Reservation (RUN or Spice+ Form)",
                "DIN and DSC Generation for Directors",
                "Drafting and Filing MOA and AOA",
                "Incorporation Filing with MCA",
                "PAN, TAN, GST Registrations",
                "Bank Account Assistance",
                "Certificate of Incorporation Delivery"
              ].map((step, index) => (
                <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <div className="text-green-400 text-2xl font-bold mb-4">{index + 1}</div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Choose SOFTBEEM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Experienced CS and CA Advisory Teams",
                "Quick Turnaround Time (7-10 Working Days)",
                "All-Inclusive Transparent Packages",
                "PAN, TAN, GST Registration Support",
                "Dedicated Relationship Manager",
                "Post-Incorporation Compliance Support"
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
            <h2 className="text-3xl font-bold">Incorporate Your Dream Company Today!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                <Mail className="mr-2 h-5 w-5" /> Request Free Quote
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyIncorporation;
