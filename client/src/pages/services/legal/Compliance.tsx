
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

const images = [
  "/images/services/business-growth.jpg",
  "/images/services/bussiness.jpg",
  "/images/services/classified.jpg"
];

const services = [
  {
    title: "Company Incorporation Services",
    items: [
      "Private Limited Company Registration",
      "Public Limited Company Registration", 
      "One Person Company (OPC) Registration",
      "Limited Liability Partnership (LLP) Registration",
      "Section 8 (Non-Profit Company) Registration",
      "Producer Company Registration",
      "Nidhi Company Registration",
      "Foreign Company Setup"
    ]
  },
  {
    title: "Company Law Compliance Services",
    items: [
      "Annual Returns Filing (MGT-7, AOC-4)",
      "Statutory Registers Maintenance",
      "Board & General Meetings",
      "ROC Compliance Filings",
      "Company Conversions",
      "MOA and AOA Alterations"
    ]
  },
  {
    title: "Corporate Governance Services",
    items: [
      "Corporate Governance Advisory",
      "Secretarial Audit",
      "Code of Conduct & Policies",
      "Committee Setup"
    ]
  },
  {
    title: "Event-Based Compliance Services",
    items: [
      "Allotment of Shares (Rights Issue, Private Placement, Bonus Issue)",
      "Transfer/Transmission of Shares",
      "Share Buy-back",
      "Mergers, Amalgamations, and Demergers",
      "Strike off (Closure) of Companies"
    ]
  },
  {
    title: "FEMA and RBI Compliance Services",
    items: [
      "FDI (Foreign Direct Investment) Reporting (FC-GPR, FC-TRS)",
      "External Commercial Borrowing (ECB) filings",
      "Liaison/Branch/Project Office Setup Compliance",
      "ODI (Overseas Direct Investment) compliance"
    ]
  },
  {
    title: "Intellectual Property Rights Support",
    items: [
      "Trademark Registration",
      "Copyright Registration",
      "Patent Application Assistance",
      "Drafting IP Assignment/License Agreements"
    ]
  },
  {
    title: "Legal Drafting Services",
    items: [
      "Shareholders Agreements",
      "Founders Agreements",
      "Joint Venture Agreements",
      "Service Agreements",
      "Employment Contracts",
      "Non-Disclosure Agreements (NDAs)"
    ]
  },
  {
    title: "Advisory Services",
    items: [
      "Startup Advisory (Funding, Structuring, ESOPs)",
      "Due Diligence Reports (for M&A, Investors)",
      "Corporate Restructuring Advisory",
      "Insolvency and Bankruptcy Advisory (under IBC)"
    ]
  },
  {
    title: "Labour Law Registrations and Compliance",
    items: [
      "Shops and Establishment Registration",
      "Provident Fund (PF) and Employee State Insurance (ESI) Registration",
      "Professional Tax Registration",
      "Labour Welfare Fund compliance"
    ]
  },
  {
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
    title: "Listing Compliance",
    items: [
      "BSE/NSE Listing Assistance",
      "SEBI (LODR) Compliance",
      "Periodic Disclosures and Filings"
    ]
  },
  {
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
    <main className="min-h-screen bg-zinc-900 pt-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Carousel className="h-full">
            {images.map((image, index) => (
              <div key={index} className="relative h-full">
                <img src={image} alt="Legal Services" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            ))}
          </Carousel>
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
              Start Right. Build Smart. Grow Legally.
            </motion.h1>
            <motion.p 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-200 mb-8"
            >
              At SOFTBEEM, powered by RAMAERA Legal Infotech Pvt Ltd, we offer end-to-end company incorporation services to help entrepreneurs, startups, and corporates establish legally compliant entities in India — quickly, seamlessly, and affordably.
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <Link to="#contact">Get Started <ArrowRight className="ml-2" /></Link>
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
                className="bg-zinc-800/50 p-8 rounded-xl border border-green-500/20"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-6">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <Link 
                        to={`/services/legal/${item.toLowerCase().replace(/[\s()]/g, '-')}`}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
