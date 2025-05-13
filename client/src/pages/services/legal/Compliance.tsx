
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Building2, ScrollText, Building, CalendarCheck, Bank } from "lucide-react";

const sidebarItems = [
  {
    title: "Company Incorporation",
    href: "#company-incorporation",
    icon: <Building2 className="w-5 h-5" />,
    expandable: true,
    id: "incorporation",
    items: [
      "Private Limited Company",
      "Public Limited Company",
      "One Person Company (OPC)",
      "Limited Liability Partnership (LLP)",
      "Section 8 Company",
      "Producer Company",
      "Nidhi Company",
      "Foreign Company Setup"
    ]
  },
  {
    title: "Company Law Compliance",
    href: "#law-compliance",
    icon: <ScrollText className="w-5 h-5" />,
    expandable: true,
    id: "compliance",
    items: [
      "Annual Returns Filing",
      "Statutory Records Maintenance",
      "Board & General Meetings",
      "ROC Compliance",
      "Company Conversion",
      "MOA & AOA Alteration"
    ]
  },
  {
    title: "Corporate Governance",
    href: "#corporate-governance",
    icon: <Building className="w-5 h-5" />,
    expandable: true,
    id: "governance",
    items: [
      "Governance Practices",
      "Secretarial Audit",
      "Code of Conduct",
      "Committee Setup"
    ]
  },
  {
    title: "Event-Based Compliance",
    href: "#event-compliance",
    icon: <CalendarCheck className="w-5 h-5" />,
    expandable: true,
    id: "event",
    items: [
      "Share Allotment",
      "Share Transfer",
      "Buy-back",
      "Mergers & Amalgamations",
      "Company Strike Off"
    ]
  },
  {
    title: "FEMA & RBI Compliance",
    href: "#fema-rbi",
    icon: <Bank className="w-5 h-5" />,
    expandable: true,
    id: "fema",
    items: [
      "FDI Reporting",
      "ECB Filings",
      "Office Setup Compliance",
      "ODI Compliance"
    ]
  }
];

const Compliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative pt-24 pb-32">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8 md:space-y-16">
          {/* Hero Section */}
          <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="legal-hero flex flex-col items-center justify-center text-center relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/services/business-growth.jpg"
                alt="Legal Compliance"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
            </div>
            <div className="absolute inset-0 -z-10">
              <img 
                src="/images/services/business-growth.jpg" 
                alt="Legal Compliance" 
                className="w-full h-[400px] object-cover opacity-20 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 pt-16">
              Legal Compliance Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Comprehensive legal compliance solutions to help businesses maintain standards and ensure regulatory adherence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Compliance;
