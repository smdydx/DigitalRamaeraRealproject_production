import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/lib/animations";
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
    icon: "🏢",
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
    icon: "⚖️",
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
    icon: "🏛️",
    items: [
      "Corporate Governance Advisory",
      "Secretarial Audit",
      "Code of Conduct & Policies",
      "Committee Setup"
    ]
  },
  {
    title: "Event-Based Compliance Services",
    icon: "📅",
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
    icon: "🏦",
    items: [
      "FDI (Foreign Direct Investment) Reporting (FC-GPR, FC-TRS)",
      "External Commercial Borrowing (ECB) filings",
      "Liaison/Branch/Project Office Setup Compliance",
      "ODI (Overseas Direct Investment) compliance"
    ]
  },
  {
    title: "Intellectual Property Rights Support",
    icon: "💡",
    items: [
      "Trademark Registration",
      "Copyright Registration",
      "Patent Application Assistance",
      "Drafting IP Assignment/License Agreements"
    ]
  },
  {
    title: "Legal Drafting Services",
    icon: "✍️",
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
    icon: "🧑‍💼",
    items: [
      "Startup Advisory (Funding, Structuring, ESOPs)",
      "Due Diligence Reports (for M&A, Investors)",
      "Corporate Restructuring Advisory",
      "Insolvency and Bankruptcy Advisory (under IBC)"
    ]
  },
  {
    title: "Labour Law Registrations and Compliance",
    icon: "👷",
    items: [
      "Shops and Establishment Registration",
      "Provident Fund (PF) and Employee State Insurance (ESI) Registration",
      "Professional Tax Registration",
      "Labour Welfare Fund compliance"
    ]
  },
  {
    title: "Certification Services",
    icon: "📜",
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
    icon: "📈",
    items: [
      "BSE/NSE Listing Assistance",
      "SEBI (LODR) Compliance",
      "Periodic Disclosures and Filings"
    ]
  },
  {
    title: "Specialized Services",
    icon: "💼",
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
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24 overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[90vh] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Carousel className="h-full" autoplay interval={5000}>
            {images.map((image, index) => (
              <motion.div 
                key={index} 
                className="relative h-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
              >
                <img src={image} alt="Legal Services" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-zinc-900" />
              </motion.div>
            ))}
          </Carousel>
        </motion.div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.h1 
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-4 sm:mb-6 md:mb-8 leading-tight"
            >
              Legal Excellence Meets Digital Innovation
            </motion.h1>
            <motion.p 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Transforming legal compliance into a seamless journey with SOFTBEEM's expert solutions
            </motion.p>
            <motion.div 
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg px-8">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid with Hover Effects */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,222,128,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                whileHover={{ scale: 1.02 }}
                className="group bg-zinc-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <Link 
                        to={`/services/legal/${item.toLowerCase().replace(/[\s()]/g, '-')}`}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </motion.li>
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