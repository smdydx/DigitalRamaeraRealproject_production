import {
  Code,
  Smartphone,
  FileText,
  ShieldCheck,
  CreditCard,
  Building,
  FileCheck,
  Rocket,
  Users,
  XCircle,
  Scale,
  FileCode,
  Coins,
  Image,
  BarChart2,
  AppWindow,
  Server,
  Search,
  Globe,
  Cloud,
  Gamepad2,
  Landmark,
  Calculator
} from "lucide-react";

interface Service {
  icon: any;
  title: string;
  features: string[];
  path?: string;
  submenu?: Service[];
}

interface ServicesData {
  tech: Service[];
  legal: Service[];
}

export const servicesData: ServicesData = {
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
        "Metaverse Development",
        "Digital Marketing"
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
      features: [
        "Complete IT solutions",
        "Digital Marketing",
        "On-Demand App Development",
        "SaaS & Installables",
        "Web Developmet & CMS Products",
        "Mobile Application",
        "Cloud & SaaS Servcies"
      ],
      submenu: [
        {
          icon: Globe,
          title: "Digital Marketing ",
          features: ["SEO Optimization"],
          path: "/services/digital/marketing"
        },
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
        }
      ],
      path: "/services/it-services"
    }
  ],
  legal: [
    {
      icon: FileText,
      title: "Legal & Compliance Service",
      features: ["Complete legal and compliance solutions", "Corporate governance services", "Regulatory compliance", "Legal advisory"],
      path: "/services/legal/compliance",
      // submenu: [
      //   {
      //     icon: Building,
      //     title: "Corporate Governance Advisory",
      //     features: ["Corporate governance solutions"],
      //     path: "/services/legal/corporate-governance-advisory"
      //   },
      //   {
      //     icon: FileCheck,
      //     title: "Secretarial Audit",
      //     features: ["Comprehensive audit services"],
      //     path: "/services/legal/secretarial-audit"
      //   },
      //   {
      //     icon: Scale,
      //     title: "Company Law Services",
      //     features: ["Company law compliance"],
      //     path: "/services/legal/company-law-services"
      //   },
      //   {
      //     icon: Landmark,
      //     title: "FEMA and RBI Compliance",
      //     features: ["Regulatory compliance services"],
      //     path: "/services/legal/fema-rbi-compliance"
      //   }
      // ]
    }
  ],
  
}

export const serviceTypeLabels: Record<keyof ServicesData, string> = {
  tech: "Tech Services",
  legal: "Legal Services"
};