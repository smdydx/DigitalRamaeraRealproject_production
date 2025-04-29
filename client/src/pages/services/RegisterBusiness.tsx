import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

const RegisterBusiness = () => {
  return (
    <div className="min-h-screen bg-background relative pt-20">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 1)}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Start Business in India
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete business setup solutions
            </p>
            <div className="flex flex-col items-center gap-4 mt-8">
              {["Company Registration", "Business License", "Tax Registration", "Bank Account Setup"].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="max-w-xl mx-auto">
            <Card className="bg-zinc-900/50 border border-green-500/10">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Get Started Now</h2>
                <div className="space-y-4">
                  <Input type="text" placeholder="Full Name *" className="bg-zinc-900/50" />
                  <Input type="email" placeholder="Email *" className="bg-zinc-900/50" />
                  <div className="flex gap-4">
                    <Input type="text" value="+91" disabled className="w-20 bg-zinc-900/50" />
                    <Input type="tel" placeholder="Mobile Number *" className="bg-zinc-900/50" />
                  </div>
                  <Input type="text" placeholder="Type your message here" className="bg-zinc-900/50" />
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Submit <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterBusiness;