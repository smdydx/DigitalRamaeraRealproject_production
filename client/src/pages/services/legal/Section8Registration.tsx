
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check, Phone, Mail, Shield, Building, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Director DIN",
  "Digital Signature",
  "Name Reservation",
  "Stamp Duty for MoA & AoA",
  "MoA and AoA Filing",
  "Certificate of Incorporation",
  "Company PAN & TAN",
  "100% Online Process",
];

const requirements = [
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Private Limited Structure",
    description: "2 to 200 Shareholders, 2 to 15 Directors, with at least 1 Resident Indian Director required.",
  },
  {
    icon: <Building className="w-8 h-8 text-green-400" />,
    title: "Public Limited Structure",
    description: "Minimum 7 Shareholders, 3 to 15 Directors, with at least 1 Resident Indian Director required.",
  },
  {
    icon: <FileText className="w-8 h-8 text-green-400" />,
    title: "Required Documents",
    description: "KYC documents of promoters including PAN, Aadhar, Address Proof, and Photos along with registered office proof.",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "Section 8 License",
    description: "Special license from Central Government required along with MOA, AOA, and other statutory declarations.",
  },
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Limited Liability",
    description: "Members' liability limited to their contributions",
  },
  {
    icon: <Building className="w-12 h-12 text-green-400" />,
    title: "Tax Exemptions",
    description: "Tax benefits on income and donations",
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Social Impact",
    description: "Focus on charitable and social causes",
  },
  {
    icon: <FileText className="w-12 h-12 text-green-400" />,
    title: "Enhanced Credibility",
    description: "Better access to grants and partnerships",
  },
];

const timeline = [
  {
    title: "Decide Company Objectives",
    duration: "1-2 Days",
    description: "Define objectives in arts, commerce, education, sports, science, or other prescribed areas.",
  },
  {
    title: "Obtain DSC & DIN",
    duration: "2-3 Days",
    description: "Acquire Digital Signature Certificate and Director Identification Number.",
  },
  {
    title: "Name Approval & License",
    duration: "7-10 Days",
    description: "Get company name approved and obtain Section 8 License from Central Government.",
  },
  {
    title: "Registration Process",
    duration: "10-15 Days",
    description: "File incorporation documents and obtain Certificate of Incorporation.",
  },
];

export default function Section8Registration() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,222,128,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block text-green-400 font-semibold mb-4"
            >
              Make a Difference in Society
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Section 8 Company Registration
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Register your Non-Profit organization as a Section 8 Company with our comprehensive registration services. Get expert guidance for promoting social welfare and charitable causes.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8"
              >
                Get Started Now <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg px-8"
              >
                Schedule Consultation <Phone className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl font-bold text-white mb-4"
            >
              Why Choose Section 8 Company?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Discover the advantages of registering your non-profit organization as a Section 8 Company
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8 text-center hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm rounded-2xl border border-green-500/10 p-12"
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-green-400 mb-4">
                Premium Registration Package
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl font-bold text-white">₹7,499</span>
                <span className="text-gray-400">starting price*</span>
              </div>
              <p className="text-sm text-gray-400">
                *Government fees & taxes additional
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-12"
              >
                Start Registration Process
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Registration Process Timeline
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="flex items-start gap-6 mb-12"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-green-400 font-bold text-lg">
                    {step.duration}
                  </span>
                </div>
                <div className="flex-grow pl-8 border-l-2 border-green-500/30">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-12"
          >
            Essential Requirements
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {req.icon}
                  <h3 className="text-xl font-semibold text-green-400">
                    {req.title}
                  </h3>
                </div>
                <p className="text-gray-300">{req.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Make a Difference?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-300 mb-8 text-lg"
            >
              Get expert guidance for your Section 8 Company registration process
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg gap-2"
              >
                <Mail /> support@ramaera.com
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg gap-2"
              >
                <Phone /> +911169310715
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
