import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check, FileText, Scale, Shield, Award, Globe, Book, Gavel, Landmark, FileSignature, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const images = [
  "/images/services/business-growth.jpg",
  "/images/services/bussiness.jpg",
  "/images/services/classified.jpg"
];

const services = [
  {
    icon: <FileText className="w-8 h-8 text-green-400" />,
    title: "Company Incorporation Services",
    items: [
      "Private Limited Company Registration",
      "Public Limited Company Registration", 
      "One Person Company (OPC) Registration",
      "Limited Liability Partnership (LLP) Registration",
      "Section 8 (Non-Profit Company) Registration"
    ]
  },
  {
    icon: <Scale className="w-8 h-8 text-blue-400" />,
    title: "Company Law Compliance Services",
    items: [
      "Annual Returns Filing (MGT-7, AOC-4)",
      "Statutory Registers Maintenance",
      "Board & General Meetings",
      "ROC Compliance Filings"
    ]
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    title: "Corporate Governance Services",
    items: [
      "Corporate Governance Advisory",
      "Secretarial Audit",
      "Code of Conduct & Policies",
      "Committee Setup"
    ]
  },
  {
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    title: "FEMA and RBI Compliance Services",
    items: [
      "FDI Reporting (FC-GPR, FC-TRS)",
      "External Commercial Borrowing Filings",
      "Liaison Office Setup Compliance",
      "ODI Compliance"
    ]
  },
  {
    icon: <Award className="w-8 h-8 text-amber-400" />,
    title: "Intellectual Property Rights",
    items: [
      "Trademark Registration",
      "Copyright Registration",
      "Patent Application Assistance",
      "IP Assignment Agreements"
    ]
  },
  {
    icon: <FileSignature className="w-8 h-8 text-rose-400" />,
    title: "Legal Drafting Services",
    items: [
      "Shareholders Agreements",
      "Joint Venture Agreements",
      "Service Agreements",
      "Employment Contracts"
    ]
  },
  {
    icon: <Users className="w-8 h-8 text-gray-400" />,
    title: "Advisory Services",
    items: [
      "Startup Advisory (Funding, Structuring, ESOPs)",
      "Due Diligence Reports (for M&A, Investors)",
      "Corporate Restructuring Advisory",
      "Insolvency and Bankruptcy Advisory (under IBC)"
    ]
  },
  {
    icon: <Landmark className="w-8 h-8 text-orange-400" />,
    title: "Labour Law Registrations and Compliance",
    items: [
      "Shops and Establishment Registration",
      "Provident Fund (PF) and Employee State Insurance (ESI) Registration",
      "Professional Tax Registration",
      "Labour Welfare Fund compliance"
    ]
  },
  {
    icon: <Book className="w-8 h-8 text-teal-400" />,
    title: "Certification Services",
    items: [
      "Secretarial Audit Reports",
      "Compliance Certificates (e.g., for Listed Companies)",
      "Certification under SEBI Regulations",
      "Certification for Mergers/Amalgamations",
      "Certification under FEMA/RBI Compliance"
    ]
  },
  {
    icon: <Gavel className="w-8 h-8 text-lime-400" />,
    title: "Listing Compliance",
    items: [
      "BSE/NSE Listing Assistance",
      "SEBI (LODR) Compliance",
      "Periodic Disclosures and Filings"
    ]
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-400" />,
    title: "Specialized Services",
    items: [
      "Virtual Company Secretary Services (for Startups and SMEs)",
      "ESOP Structuring and Administration",
      "Corporate Social Responsibility (CSR) Compliance",
      "Risk Management Advisory",
      "Internal Controls and Process Advisory"
    ]
  }
];

export default function Compliance() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <img 
              src={images[0]} 
              alt="Legal Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Legal & Compliance Solutions
            </motion.h1>
            <motion.p 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-200 mb-8"
            >
              Comprehensive legal and compliance services to protect and grow your business with confidence.
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <Link to="/schedule">Schedule Consultation <ArrowRight className="ml-2" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.2 * index, 1)}
              >
                <Card className="p-6 bg-zinc-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-6">{service.title}</h3>
                  <ul className="space-y-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}