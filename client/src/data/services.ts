
import { Code, Smartphone, FileText, ShieldCheck, CreditCard, Building, FileCheck, Rocket, Users, XCircle, Scale, FileCode, Coins, Image, BarChart2, AppWindow, Server, Search, Globe, Cloud, Gamepad2 } from "lucide-react";

interface Service {
  icon: any;
  title: string;
  features: string[];
  path?: string;
  submenu?: Service[];
}

interface ServicesData {
  tech: Service[];
  legalCompliance: Service[];
}

export const servicesData: ServicesData = {
  legalCompliance: [
    {
      icon: FileCheck,
      title: "Annual ROC Compliance",
      features: [
        "ROC Annual Return Filing",
        "Annual Financial Statement Filing",
        "Director Report Filing",
        "Certificate Compliance"
      ],
      path: "/services/legal/roc-compliance"
    },
    {
      icon: Scale,
      title: "Corporate Governance",
      features: [
        "Board Management",
        "Policy Development",
        "Risk Management",
        "Compliance Framework"
      ],
      path: "/services/legal/corporate-governance"
    },
    {
      icon: Users,
      title: "Labour Law Compliance",
      features: [
        "Labor Law Registration",
        "Statutory Compliance",
        "HR Policy Development",
        "Employment Contracts"
      ],
      path: "/services/legal/labour-compliance"
    }
  ],
  tech: [
    {
      icon: Code,
      title: "Blockchain Services",
      features: [
        "Smart Contract Development",
        "Token Development",
        "NFT Marketplace Development", 
        "Crypto Exchange Development",
        "Decentralized dApp Development",
        "Blockchain Node Setup",
        "Block Explorer Development",
        "Metaverse Development"
      ],
      submenu: [
        {
          icon: FileCode,
          title: "Smart Contract Development",
          features: ["Custom smart contract solutions"],
          path: "/services/blockchain/smart-contracts"
        },
        {
          icon: Coins,
          title: "Token Development",
          features: ["Custom token development"],
          path: "/services/blockchain/token"
        },
        {
          icon: Image,
          title: "NFT Marketplace Development",
          features: ["NFT platform development"],
          path: "/services/blockchain/nft"
        },
        {
          icon: BarChart2,
          title: "Crypto Exchange Development",
          features: ["Exchange platform solutions"],
          path: "/services/blockchain/exchange"
        },
        {
          icon: AppWindow,
          title: "Decentralized dApp Development",
          features: ["Custom dApp solutions"],
          path: "/services/blockchain/dapp"
        },
        {
          icon: Server,
          title: "Blockchain Node Setup",
          features: ["Node infrastructure setup"],
          path: "/services/blockchain/node"
        },
        {
          icon: Search,
          title: "Block Explorer Development",
          features: ["Custom explorer development"],
          path: "/services/blockchain/explorer"
        },
        {
          icon: Globe,
          title: "Metaverse Development",
          features: ["Metaverse solutions"],
          path: "/services/blockchain/metaverse"
        }
      ],
      path: "/services/blockchain"
    },
    {
      icon: Smartphone,
      title: "IT Services",
      features: ["Complete IT solutions"],
      submenu: [
        {
          icon: Gamepad2,
          title: "Game Development",
          features: ["Custom game development"],
          path: "/services/it/game-dev"
        },
        {
          icon: Smartphone,
          title: "On-Demand App Development",
          features: ["Custom app solutions"],
          path: "/services/it/app-dev"
        },
        {
          icon: AppWindow,
          title: "SaaS & Installables",
          features: [
            "CRM & ERP Solutions",
            "Industry-Specific Software",
            "Custom SaaS Development"
          ],
          path: "/services/it/saas"
        },
        {
          icon: Globe,
          title: "Web Development & CMS Products",
          features: ["Custom web solutions"],
          path: "/services/it/web-dev"
        },
        {
          icon: Smartphone,
          title: "Mobile Applications",
          features: ["Cross-platform mobile apps"],
          path: "/services/it/mobile"
        },
        {
          icon: Cloud,
          title: "Cloud & SaaS Services",
          features: ["Cloud-based solutions"],
          path: "/services/it/cloud"
        },
        {
          icon: Globe,
          title: "Digital Marketing",
          features: [
            "SEO Optimization",
            "Social Media Marketing",
            "Content Strategy",
            "Email Marketing"
          ],
          path: "/services/digital/marketing"
        }
      ],
      path: "/services/it-services"
    }
  ],
  legalCompliance: [
    {
      icon: FileText,
      title: "Start Business",
      features: [
        "Company Registration",
        "LLP Formation",
        "Partnership Registration",
        "One Person Company",
      ],
      path: "/services/start-business",
    },
    {
      icon: ShieldCheck,
      title: "Legal Services",
      features: ["Comprehensive legal compliance solutions"],
      submenu: [
        {
          icon: Building,
          title: "Company Incorporation",
          features: ["Complete incorporation service"],
          path: "/services/legal/company-incorporation"
        },
        {
          icon: FileText,
          title: "Annual ROC Compliance",
          features: ["ROC compliance management"],
          path: "/services/legal/roc-compliance"
        },
        {
          icon: FileCheck,
          title: "Secretarial Audit",
          features: ["Professional audit services"],
          path: "/services/legal/secretarial-audit"
        },
        {
          icon: CreditCard,
          title: "FEMA and RBI Compliance",
          features: ["Regulatory compliance"],
          path: "/services/legal/fema-rbi"
        },
        {
          icon: ShieldCheck,
          title: "Intellectual Property Registration",
          features: ["IP rights protection"],
          path: "/services/legal/ip-registration"
        },
        {
          icon: Rocket,
          title: "Startup India Registration",
          features: ["Startup recognition"],
          path: "/services/legal/startup-registration"
        },
        {
          icon: Users,
          title: "Labour Law Compliance",
          features: ["Labor law management"],
          path: "/services/legal/labour-compliance"
        },
        {
          icon: XCircle,
          title: "Company Strike-Off",
          features: ["Company closure service"],
          path: "/services/legal/company-strike-off"
        },
        {
          icon: Scale,
          title: "Corporate Governance Advisory",
          features: ["Governance consulting"],
          path: "/services/legal/corporate-governance"
        }
      ],
      path: "/services/legal"
    }
  ]
};
