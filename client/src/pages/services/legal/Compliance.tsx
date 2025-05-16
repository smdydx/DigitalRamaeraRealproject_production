import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "@/lib/animations";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { useEffect } from "react";

const images = [
  "/images/services/business-growth.jpg",
  "/images/services/bussiness.jpg",
  "/images/services/classified.jpg",
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
      "Foreign Company Setup",
    ],
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
      "MOA and AOA Alterations",
    ],
  },
  {
    title: "Corporate Governance Services",
    icon: "🏛️",
    items: [
      "Corporate Governance Advisory",
      "Secretarial Audit",
      "Code of Conduct & Policies",
      "Committee Setup",
    ],
  },
  {
    title: "Event-Based Compliance Services",
    icon: "📅",
    items: [
      "Allotment of Shares (Rights Issue, Private Placement, Bonus Issue)",
      "Transfer/Transmission of Shares",
      "Share Buy-back",
      "Mergers, Amalgamations, and Demergers",
      "Strike off (Closure) of Companies",
    ],
  },
  {
    title: "FEMA and RBI Compliance Services",
    icon: "🏦",
    items: [
      "FDI (Foreign Direct Investment) Reporting (FC-GPR, FC-TRS)",
      "External Commercial Borrowing (ECB) filings",
      "Liaison/Branch/Project Office Setup Compliance",
      "ODI (Overseas Direct Investment) compliance",
    ],
  },
  {
    title: "Intellectual Property Rights Support",
    icon: "💡",
    items: [
      "Trademark Registration",
      "Copyright Registration",
      "Patent Application Assistance",
      "Drafting IP Assignment/License Agreements",
    ],
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
      "Non-Disclosure Agreements (NDAs)",
    ],
  },
  {
    title: "Advisory Services",
    icon: "🧑‍💼",
    items: [
      "Startup Advisory (Funding, Structuring, ESOPs)",
      "Due Diligence Reports (for M&A, Investors)",
      "Corporate Restructuring Advisory",
      "Insolvency and Bankruptcy Advisory (under IBC)",
    ],
  },
  {
    title: "Labour Law Registrations and Compliance",
    icon: "👷",
    items: [
      "Shops and Establishment Registration",
      "Provident Fund (PF) and Employee State Insurance (ESI) Registration",
      "Professional Tax Registration",
      "Labour Welfare Fund compliance",
    ],
  },
  {
    title: "Certification Services",
    icon: "📜",
    items: [
      "Secretarial Audit Reports",
      "Compliance Certificates (e.g., for Listed Companies)",
      "Certification under SEBI Regulations",
      "Certification for Mergers/Amalgamations",
      "Certification under FEMA/RBI Compliance",
    ],
  },
  {
    title: "Listing Compliance",
    icon: "📈",
    items: [
      "BSE/NSE Listing Assistance",
      "SEBI (LODR) Compliance",
      "Periodic Disclosures and Filings",
    ],
  },
  {
    title: "Specialized Services",
    icon: "💼",
    items: [
      "Virtual Company Secretary Services (for Startups and SMEs)",
      "ESOP Structuring and Administration",
      "Corporate Social Responsibility (CSR) Compliance",
      "Risk Management Advisory",
      "Internal Controls and Process Advisory",
    ],
  },
];

// ContactButtons component
function ContactButtons() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-2 z-50">
      <a
        href="https://wa.me/YOUR_WHATSAPP_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-md"
      >
        WhatsApp
      </a>
      <a
        href="tel:YOUR_PHONE_NUMBER"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-md"
        >
        Call
      </a>
    </div>
  );
}

export default function Compliance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[80vh] md:h-[85vh] overflow-hidden">
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
                <img
                  src={`/images/services/img1.jpg`} // Ensure this path is correct within the public directory
                  alt="Legal Services"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
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
              Start Right. Build Smart. Grow Legally.
            </motion.h1>
            <motion.p
  variants={fadeIn("up", "tween", 0.3, 1)}
  className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed text-center px-4 sm:px-6 md:px-8"
>
  At SOFTBEEM,powered by RAMAERA Legal Infotech Pvt Ltd,we offer end-to-end company incorporation services to help entrepreneurs,startups,and corporates establish legally compliant entities in India — quickly, seamlessly, and affordably.
</motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8"
              >
                Call Us <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg px-8"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactButtons />

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold mb-6 text-green-400"
            >
              Who We Are
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-300 mb-8"
            >
              At SOFTBEEM, we are a team of dedicated legal and compliance
              experts with years of experience in corporate law and regulatory
              requirements. Our mission is to simplify complex compliance
              processes and ensure your business operates within the legal
              framework smoothly and efficiently.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-zinc-800/30 p-6 rounded-xl border border-green-500/10">
                <h3 className="text-xl font-bold mb-3 text-white">Expertise</h3>
                <p className="text-gray-400">
                  Specialized knowledge in corporate law and compliance across
                  industries
                </p>
              </div>
              <div className="bg-zinc-800/30 p-6 rounded-xl border border-green-500/10">
                <h3 className="text-xl font-bold mb-3 text-white">
                  Experience
                </h3>
                <p className="text-gray-400">
                  10+ years of helping businesses navigate regulatory
                  requirements
                </p>
              </div>
              <div className="bg-zinc-800/30 p-6 rounded-xl border border-green-500/10">
                <h3 className="text-xl font-bold mb-3 text-white">
                  Commitment
                </h3>
                <p className="text-gray-400">
                  Dedicated to providing timely and accurate compliance
                  solutions
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}

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
                        to={`/services/legal/${item.toLowerCase().replace(/[\s()]/g, "-")}`}
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

      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400"
            >
              What Our Clients Say
            </motion.h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                name: "Rajesh Kumar",
                position: "CEO",
                company: "TechStart Solutions",
                content:
                  "SOFTBEEM's compliance services have been instrumental in keeping our company compliant with all regulatory requirements. Their expertise and professionalism are unmatched.",
              },
              {
                name: "Priya Sharma",
                position: "Director",
                company: "Innovation Corp",
                content:
                  "The team's thorough understanding of corporate compliance helped us navigate complex regulatory challenges. Their support has been invaluable to our business growth.",
              },
              {
                name: "Amit Patel",
                position: "Founder",
                company: "Digital Ventures",
                content:
                  "Exceptional service and attention to detail. They made the entire compliance process seamless and stress-free. Highly recommended for any business seeking compliance solutions.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
                className="bg-zinc-800/30 p-8 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                <p className="text-gray-300 italic mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-green-400">
                      {testimonial.position}, {testimonial.company}
                    </p>
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