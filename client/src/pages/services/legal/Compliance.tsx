import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
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
      { text: "Private Limited Company Registration", link: "/company/private-limited" },
      { text: "Public Limited Company Registration", link: "/company/public-limited" },
      { text: "One Person Company (OPC) Registration", link: "/company/opc" },
      { text: "Limited Liability Partnership (LLP) Registration", link: "/company/llp" },
      { text: "Section 8 (Non-Profit Company) Registration", link: "/company/section-8" },
      { text: "Producer Company Registration", link: "/company/producer" },
      { text: "Nidhi Company Registration", link: "/company/nidhi" },
      { text: "Foreign Company Setup", link: "/company/foreign" }
    ]
  },
  {
    title: "Company Law Compliance Services",
    items: [
      { text: "Annual Returns Filing (MGT-7, AOC-4)", link: "/compliance/annual-returns" },
      { text: "Statutory Registers Maintenance", link: "/compliance/statutory-registers" },
      { text: "Board & General Meetings", link: "/compliance/meetings" },
      { text: "ROC Compliance Filings", link: "/compliance/roc" },
      { text: "Company Conversions", link: "/compliance/conversions" },
      { text: "MOA and AOA Alterations", link: "/compliance/moa-aoa" }
    ]
  },
  {
    title: "Corporate Governance Services",
    items: [
      { text: "Corporate Governance Advisory", link: "/governance/advisory" },
      { text: "Secretarial Audit", link: "/governance/audit" },
      { text: "Code of Conduct & Policies", link: "/governance/policies" },
      { text: "Committee Setup", link: "/governance/committee" }
    ]
  },
  {
    title: "Event-Based Compliance Services",
    items: [
      { text: "Allotment of Shares (Rights Issue, Private Placement, Bonus Issue)", link: "/events/shares" },
      { text: "Transfer/Transmission of Shares", link: "/events/transfer" },
      { text: "Share Buy-back", link: "/events/buyback" },
      { text: "Mergers, Amalgamations, and Demergers", link: "/events/merger" },
      { text: "Strike off (Closure) of Companies", link: "/events/strike-off" }
    ]
  },
  {
    title: "FEMA and RBI Compliance Services",
    items: [
      { text: "FDI (Foreign Direct Investment) Reporting (FC-GPR, FC-TRS)", link: "/fema/fdi" },
      { text: "External Commercial Borrowing (ECB) filings", link: "/fema/ecb" },
      { text: "Liaison/Branch/Project Office Setup Compliance", link: "/fema/liaison" },
      { text: "ODI (Overseas Direct Investment) compliance", link: "/fema/odi" }
    ]
  },
  {
    title: "Intellectual Property Rights Support",
    items: [
      { text: "Trademark Registration", link: "/ip/trademark" },
      { text: "Copyright Registration", link: "/ip/copyright" },
      { text: "Patent Application Assistance", link: "/ip/patent" },
      { text: "Drafting IP Assignment/License Agreements", link: "/ip/agreements" }
    ]
  },
  {
    title: "Legal Drafting Services",
    items: [
      { text: "Shareholders Agreements", link: "/legal/shareholders" },
      { text: "Founders Agreements", link: "/legal/founders" },
      { text: "Joint Venture Agreements", link: "/legal/joint-venture" },
      { text: "Service Agreements", link: "/legal/service" },
      { text: "Employment Contracts", link: "/legal/employment" },
      { text: "Non-Disclosure Agreements (NDAs)", link: "/legal/nda" }
    ]
  },
  {
    title: "Advisory Services",
    items: [
      { text: "Startup Advisory (Funding, Structuring, ESOPs)", link: "/advisory/startup" },
      { text: "Due Diligence Reports (for M&A, Investors)", link: "/advisory/due-diligence" },
      { text: "Corporate Restructuring Advisory", link: "/advisory/restructuring" },
      { text: "Insolvency and Bankruptcy Advisory (under IBC)", link: "/advisory/insolvency" }
    ]
  },
  {
    title: "Labour Law Registrations and Compliance",
    items: [
      { text: "Shops and Establishment Registration", link: "/labour/shops" },
      { text: "Provident Fund (PF) and Employee State Insurance (ESI) Registration", link: "/labour/pf-esi" },
      { text: "Professional Tax Registration", link: "/labour/professional-tax" },
      { text: "Labour Welfare Fund compliance", link: "/labour/welfare" }
    ]
  },
  {
    title: "Certification Services",
    items: [
      { text: "Secretarial Audit Reports", link: "/certification/audit" },
      { text: "Compliance Certificates (e.g., for Listed Companies)", link: "/certification/compliance" },
      { text: "Certification under SEBI Regulations", link: "/certification/sebi" },
      { text: "Certification for Mergers/Amalgamations", link: "/certification/mergers" },
      { text: "Certification under FEMA/RBI Compliance", link: "/certification/fema" }
    ]
  },
  {
    title: "Listing Compliance",
    items: [
      { text: "BSE/NSE Listing Assistance", link: "/listing/bse-nse" },
      { text: "SEBI (LODR) Compliance", link: "/listing/sebi" },
      { text: "Periodic Disclosures and Filings", link: "/listing/disclosures" }
    ]
  },
  {
    title: "Specialized Services",
    items: [
      { text: "Virtual Company Secretary Services (for Startups and SMEs)", link: "/specialized/virtual-secretary" },
      { text: "ESOP Structuring and Administration", link: "/specialized/esop" },
      { text: "Corporate Social Responsibility (CSR) Compliance", link: "/specialized/csr" },
      { text: "Risk Management Advisory", link: "/specialized/risk" },
      { text: "Internal Controls and Process Advisory", link: "/specialized/internal-controls" }
    ]
  }
];

export default function Compliance() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 pt-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Carousel className="h-full">
            {images.map((image, index) => (
              <div key={index} className="relative h-full">
                <img src={image} alt="Legal Services" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.h1 
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Corporate Legal Excellence
            </motion.h1>
            <motion.p 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-2xl text-gray-200 mb-12 leading-relaxed"
            >
              Comprehensive legal solutions for businesses of all sizes, backed by years of expertise and a commitment to excellence.
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8 py-6">
                <Link to="#contact">Schedule Consultation <ArrowRight className="ml-2 h-6 w-6" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(0,255,0,0.1),_transparent_70%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.2 * index, 1)}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-green-500/20 overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">{service.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.link}
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-700/50 transition-all duration-300"
                      >
                        <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                        <div className="space-y-2">
                          <span className="text-lg text-gray-200 group-hover:text-green-400 transition-colors duration-300 flex items-center gap-2">
                            {item.text}
                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}