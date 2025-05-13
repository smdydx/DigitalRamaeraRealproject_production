
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check, Phone, FileText, Building, Users, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "DIN for two persons",
  "Digital Signature",
  "LLP Name Reservation",
  "Drafting of LLP Agreement",
  "Filing of FILLIP Form",
  "LLP e-Pan & e-Tan",
  "Filing of LLP Agreement",
  "100% Online Process"
];

const requirements = [
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Minimum Two Partner",
    description: "A minimum of two partners is required for registration of an LLP. There is no cap on the maximum number of partners an LLP can have."
  },
  {
    icon: <Building className="w-8 h-8 text-green-400" />,
    title: "2 to 15 Designated Partners",
    description: "The overall management and control of the affairs of the LLP is with designated partners, who are responsible for tax payments and compliance."
  },
  {
    icon: <FileText className="w-8 h-8 text-green-400" />,
    title: "Resident Designated Partner",
    description: "At least one designated partner of the LLP must be a resident of India every financial year to ensure accountability."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "Pre Defined Contribution",
    description: "The LLP Act does not prescribe a minimum or maximum capital, which the partners must decide according to the business requirement."
  }
];

const timeline = [
  {
    title: "Documentation & Making of DSC",
    duration: "1-2 Days",
    description: "Digital signature issuance process is online and Aadhar OTP-based. Video authentication required for DSC of all LLP partners."
  },
  {
    title: "Name Search & Main Objects Drafting",
    duration: "1-3 Days",
    description: "Thorough search for a suitable unique name for the LLP and discussion of possible name availability."
  },
  {
    title: "Filing for Incorporation",
    duration: "3-4 Days",
    description: "Application filed in FILLIP form with identity and address proof of partners and registered office proof."
  },
  {
    title: "Incorporation Certificate",
    duration: "4-7 Days",
    description: "ROC reviews application and documents. LLP Incorporation Certificate issued if everything is in order."
  }
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Limited Liability",
    description: "Partners' liability limited as per LLP Agreement"
  },
  {
    icon: <Building className="w-12 h-12 text-green-400" />,
    title: "Easy to Incorporate",
    description: "Quick, easy and affordable online process"
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "Lower Compliances",
    description: "Annual returns and financial statements only"
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Flexible Management",
    description: "Managed as per LLP Agreement terms"
  }
];

export default function LLPRegistration() {
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
              Start Your Business Journey with Us
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              LLP Registration in India
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Get your LLP registered within 7 days with complete online process and expert guidance. Perfect for small service firms, IT companies, and consulting businesses.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8"
              >
                Start at ₹3,499* <ArrowRight className="ml-2" />
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
              Why Choose LLP Registration?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Discover the advantages that make Limited Liability Partnership the preferred choice for businesses in India
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
                LLP Registration Package
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl font-bold text-white">₹3,499</span>
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
    </main>
  );
}
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check, Phone, FileText, Building, Users, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "DIN for two persons",
  "Digital Signature",
  "LLP Name Reservation",
  "Drafting of LLP Agreement",
  "Filing of FILLIP Form",
  "LLP e-Pan & e-Tan",
  "Filing of LLP Agreement",
  "100% Online Process"
];

const requirements = [
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Minimum Two Partner",
    description: "A minimum of two partners is required for registration of an LLP. There is no cap on the maximum number of partners an LLP can have."
  },
  {
    icon: <Building className="w-8 h-8 text-green-400" />,
    title: "2 to 15 Designated Partners",
    description: "The overall management and control of the affairs of the LLP is with designated partners, who are responsible for tax payments and compliance."
  },
  {
    icon: <FileText className="w-8 h-8 text-green-400" />,
    title: "Agreement Required",
    description: "Partners must enter into an agreement outlining their capital contributions and profit-sharing ratios, among other details."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "No Capital Requirement",
    description: "The LLP Act does not prescribe a minimum or maximum capital, which the partners must decide according to the business requirement."
  }
];

const timeline = [
  {
    title: "Documentation & Making of DSC",
    duration: "1-2 Days",
    description: "Digital signature issuance process is online and Aadhar OTP-based. Video authentication required for DSC of all LLP partners."
  },
  {
    title: "Name Search & Objects Drafting",
    duration: "1-3 Days",
    description: "Thorough search for a suitable unique name for the LLP and discussion of possible name availability."
  },
  {
    title: "Filing for Registration",
    duration: "3-4 Days",
    description: "Application filed in FILLIP form with identity and address proof of partners and registered office proof."
  },
  {
    title: "LLP Registration Certificate",
    duration: "4-7 Days",
    description: "ROC reviews application and documents. LLP Registration Certificate issued if everything is in order."
  }
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Limited Liability",
    description: "Partners' liability limited to their contribution"
  },
  {
    icon: <Building className="w-12 h-12 text-green-400" />,
    title: "Easy to Form",
    description: "Quick and affordable online process"
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "Lower Compliances",
    description: "Less compliance requirements than companies"
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Flexible Structure",
    description: "Managed as per LLP Agreement terms"
  }
];

export default function LLPRegistration() {
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
              Start Your Business Journey with Us
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              LLP Registration in India
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Get your LLP registered within 7 days with our complete online process and expert guidance. Perfect for professional services, consulting, and trading businesses.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8"
              >
                Start at ₹3,499* <ArrowRight className="ml-2" />
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
              Why Choose LLP Structure?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Discover the advantages that make Limited Liability Partnership the preferred choice for businesses in India
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
                LLP Registration Package
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl font-bold text-white">₹3,499</span>
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
    </main>
  );
}
