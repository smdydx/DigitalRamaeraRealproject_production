
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, CheckCircle2 } from "lucide-react";

const StartupRegistration = () => {
  return (
    <div className="min-h-screen bg-background relative pt-24 pb-32">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-16">
          {/* Hero Section */}
          <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Startup India Registration and Advisory
            </h1>
            <p className="text-2xl font-bold text-green-400">Get Recognized. Get Funded. Get Growing.</p>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Startup India is an initiative by the Government of India to promote and support entrepreneurship with numerous benefits like tax exemptions, easier compliance, faster patent processing, and access to funding schemes. At SOFTBEEM, we assist startups in obtaining DPIIT recognition, availing benefits under the Startup India scheme, and structuring their business for fast growth and scalability.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Eligibility Check and Business Structuring Advisory",
              "Application Filing for DPIIT Recognition",
              "Preparation of Documents and Declarations",
              "Tax Exemption Applications under Section 80 IAC",
              "Assistance for Government Funding (SISFS)",
              "Trademark and IP Advisory for Startups",
              "Startup Pitch Deck and Business Plan",
              "Guidance for Angel Investor and VC Fundraising"
            ].map((service, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
              </div>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Benefits of Startup India Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Income Tax Exemption for 3 consecutive years",
                "Exemption from Angel Tax (Section 56(2)(viib))",
                "Self-certification for Labour and Environmental Laws",
                "Fast-Track Patent and Trademark Registration",
                "Access to Government Tenders (without prior experience)",
                "Easy Winding Up Process (in 90 days)"
              ].map((benefit, index) => (
                <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Choose SOFTBEEM for Startup Advisory?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Expert Business Structuring and Compliance Advisory",
                "Fast-Track DPIIT Recognition Process",
                "Complete End-to-End Startup Legal Support",
                "Fundraising and Scaling Support Services"
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
            <h2 className="text-3xl font-bold">Kickstart Your Startup Journey with SOFTBEEM!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Book Startup Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                <Mail className="mr-2 h-5 w-5" /> Apply for Startup India Recognition
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StartupRegistration;
