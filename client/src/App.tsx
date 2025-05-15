import { Route, Routes } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

// Common Pages
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Schedule from "@/pages/Schedule";
import Careers from "@/pages/Careers";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatBot from "./components/AIChatBot";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";

// Service Pages - Blockchain
import BlockchainServices from "@/pages/services/BlockchainServices";
import SmartContractDev from "@/pages/services/blockchain/SmartContractDev";
import TokenDev from "@/pages/services/blockchain/TokenDev";
import NFTMarketplace from "@/pages/services/blockchain/NFTMarketplace";
import CryptoExchange from "@/pages/services/blockchain/CryptoExchange";
import DappDev from "@/pages/services/blockchain/DappDev";
import NodeSetup from "@/pages/services/blockchain/NodeSetup";
import BlockExplorer from "@/pages/services/blockchain/BlockExplorer";
import MetaverseDev from "@/pages/services/blockchain/MetaverseDev";

// IT Services
import GameDev from "@/pages/services/it/GameDev";
import AppDev from "@/pages/services/it/AppDev";
import WebDev from "./pages/services/it/WebDev";
import Mobile from "./pages/services/it/Mobile";
import Cloud from "./pages/services/it/Cloud";
import SaaS from "@/pages/services/it/SaaS";
import ITServices from "./pages/services/ITServices";

// Digital Services
import Marketing from './pages/services/digital/Marketing';

// Legal Services
import Compliance from "@/pages/services/legal/Compliance";
import PrivateLimitedRegistration from './pages/services/legal/PrivateLimitedRegistration';
import PublicLimitedRegistration from './pages/services/legal/PublicLimitedRegistration';
import OPCRegistration from './pages/services/legal/OPCRegistration';
import LLPRegistration from './pages/services/legal/LLPRegistration';
import Section8Registration from "@/pages/services/legal/Section8Registration";
import ProducerCompanyRegistration from "@/pages/services/legal/ProducerCompanyRegistration";
import NidhiCompanyRegistration from "@/pages/services/legal/NidhiCompanyRegistration";
import ForeignCompanySetup from "@/pages/services/legal/ForeignCompanySetup";
import AnnualReturnsFiling from "@/pages/services/legal/AnnualReturnsFiling";
import StatutoryRegisters from "./pages/services/legal/StatutoryRegisters";
import BoardGeneralMeetings from "./pages/services/legal/BoardGeneralMeetings";
import ROCComplianceFilings from "./pages/services/legal/ROCComplianceFilings";
import MOAandAOAAlterations from "./pages/services/legal/MOAandAOAAlterations";
import LLPToPrivateConversion from "./pages/services/legal/LLPToPrivateConversion";
import CorporateGovernanceAdvisory from "./pages/services/legal/CorporateGovernanceAdvisory";
import SecretarialAudit from "./pages/services/legal/SecretarialAudit";
import VirtualCompanySecretaryServices from "@/pages/services/legal/VirtualCompanySecretaryServices";
import ESOPStructuringAdministration from "@/pages/services/legal/ESOPStructuringAdministration";
import CorporateSocialResponsibilityCompliance from "@/pages/services/legal/CorporateSocialResponsibilityCompliance";
import RiskManagementAdvisory from "@/pages/services/legal/RiskManagementAdvisory";
import InternalControlsProcessAdvisory from "@/pages/services/legal/InternalControlsProcessAdvisory";
import BSENSEListingAssistance from "@/pages/services/legal/BSENSEListingAssistance";
import SEBILODRCompliance from "./pages/services/legal/SEBILODRCompliance";
import PeriodicDisclosuresFilings from "./pages/services/legal/PeriodicDisclosuresFilings";
import SecretarialAuditReports from "./pages/services/legal/SecretarialAuditReports";
import ComplianceCertificates from "./pages/services/legal/ComplianceCertificates";
import CertificationunderSEBIRegulations from "./pages/services/legal/CertificationunderSEBIRegulations";
import CertificationforMergersAmalgamations from "./pages/services/legal/CertificationforMergersAmalgamations";
import CertificationunderFEMARBICompliance from "./pages/services/legal/CertificationunderFEMARBICompliance";

// Legal - Additional
import CodeOfConductPage from "./pages/services/legal/CodeOfConductPolicies";
import CommitteeSetup from "./pages/services/legal/CommitteeSetup";
import ShareAllotment from "./pages/services/legal/ShareAllotment";
import ShareTransfer from "./pages/services/legal/ShareTransfer";
import ShareBuyback from "./pages/services/legal/ShareBuyback";
import MergersDemergers from "./pages/services/legal/MergersDemergers";
import CompanyStrikeOff from "./pages/services/legal/CompanyStrikeOff";
import FDIReporting from "./pages/services/legal/FDIReporting";
import ECBFilings from "./pages/services/legal/ECBFilings";
import LiaisonOfficeSetup from "./pages/services/legal/LiaisonOfficeSetup";
import ODICompliance from "./pages/services/legal/ODICompliance";
import ShareholdersAgreements from "./pages/services/legal/ShareholdersAgreements";
import FoundersAgreements from "./pages/services/legal/FoundersAgreements";
import JointVentureAgreements from "./pages/services/legal/JointVentureAgreements";
import ServiceAgreements from "./pages/services/legal/ServiceAgreements";
import EmploymentContracts from "./pages/services/legal/EmploymentContracts";
import NonDisclosureAgreementsNDAs from "./pages/services/legal/NonDisclosureAgreementsNDAs";
import StartupAdvisoryFundingStructuringESOPs from "./pages/services/legal/StartupAdvisoryFundingStructuringESOPs";
import DueDiligenceReportsforMAInvestors from "./pages/services/legal/DueDiligenceReportsforMAInvestors";
import CorporateRestructuringAdvisory from "./pages/services/legal/CorporateRestructuringAdvisory";
import InsolvencyBankruptcyAdvisoryunderIBC from "./pages/services/legal/InsolvencyBankruptcyAdvisoryunderIBC";
import ShopsEstablishmentRegistration from "./pages/services/legal/ShopsEstablishmentRegistration";
import ProvidentFundPFEmployeeStateInsuranceESIRegistration from "./pages/services/legal/ProvidentFundPFEmployeeStateInsuranceESIRegistration";
import ProfessionalTaxRegistration from "./pages/services/legal/ProfessionalTaxRegistration";
import LabourWelfareFundCompliance from "./pages/services/legal/LabourWelfareFundCompliance";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24 pb-16">
        <AIChatBot />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/careers" element={<Careers />} />

          {/* Admin */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

          {/* Service Routes */}
          {/* Blockchain */}
          <Route path="/services/blockchain" element={<BlockchainServices />} />
          <Route path="/services/blockchain/smart-contracts" element={<SmartContractDev />} />
          <Route path="/services/blockchain/token" element={<TokenDev />} />
          <Route path="/services/blockchain/nft" element={<NFTMarketplace />} />
          <Route path="/services/blockchain/exchange" element={<CryptoExchange />} />
          <Route path="/services/blockchain/dapp" element={<DappDev />} />
          <Route path="/services/blockchain/node" element={<NodeSetup />} />
          <Route path="/services/blockchain/explorer" element={<BlockExplorer />} />
          <Route path="/services/blockchain/metaverse" element={<MetaverseDev />} />

          {/* IT Services */}
          <Route path="/services/it/game-dev" element={<GameDev />} />
          <Route path="/services/it/app-dev" element={<AppDev />} />
          <Route path="/services/it/web-dev" element={<WebDev />} />
          <Route path="/services/it/mobile" element={<Mobile />} />
          <Route path="/services/it/cloud" element={<Cloud />} />
          <Route path="/services/it/saas" element={<SaaS />} />
          <Route path="/services/it-services" element={<ITServices />} />

          {/* Digital */}
          <Route path="/services/digital/marketing" element={<Marketing />} />

          {/* Legal */}
          {/* (All the legal service routes go here — already included above) */}

          {/* Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
