import { Route, Routes, useNavigate } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Services from "@/pages/Services";
import BlockchainServices from "@/pages/services/BlockchainServices";
import SmartContractDev from "@/pages/services/blockchain/SmartContractDev";
import TokenDev from "@/pages/services/blockchain/TokenDev";
import NFTMarketplace from "@/pages/services/blockchain/NFTMarketplace";
import CryptoExchange from "@/pages/services/blockchain/CryptoExchange";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DappDev from "@/pages/services/blockchain/DappDev";
import NodeSetup from "@/pages/services/blockchain/NodeSetup";
import BlockExplorer from "@/pages/services/blockchain/BlockExplorer";
import MetaverseDev from "@/pages/services/blockchain/MetaverseDev";
import GameDev from "@/pages/services/it/GameDev";
import AppDev from "@/pages/services/it/AppDev";
import Marketing from './pages/services/digital/Marketing';
import ITServices from "./pages/services/ITServices";
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Login';
import Schedule from "@/pages/Schedule"; 
import SaaS from "@/pages/services/it/SaaS";
import WebDev from './pages/services/it/WebDev';
import Mobile from './pages/services/it/Mobile';
import Cloud from './pages/services/it/Cloud'; 
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
import Careers from "./pages/Careers";
import MOAandAOAAlterations from "./pages/services/legal/MOAandAOAAlterations";
import LLPToPrivateConversion from "./pages/services/legal/LLPToPrivateConversion";
import CorporateGovernanceAdvisory from "./pages/services/legal/CorporateGovernanceAdvisory";
import SecretarialAudit from "./pages/services/legal/SecretarialAudit";

import AIChatBot from './components/AIChatBot';

// ✅ NEWLY ADDED IMPORT
import VirtualCompanySecretaryServices from "@/pages/services/legal/VirtualCompanySecretaryServices";
import ESOPStructuringAdministration from "@/pages/services/legal/ESOPStructuringAdministration";
import CorporateSociaResponsibilityCompliance from "@/pages/services/legal/CorporateSociaResponsibilityCompliance";
import RiskManagementAdvisory from "@/pages/services/legal/RiskManagementAdvisory";
import InternalControlsProcessAdvisory from "@/pages/services/legal/InternalControlsProcessAdvisory";
import BSENSEListingAssistance from "@/pages/services/legal/BSENSEListingAssistance.";
import SEBILODRCompliance from "./pages/services/legal/SEBILODRCompliance";
import PeriodicDisclosuresFilings from "./pages/services/legal/PeriodicDisclosuresFilings";
import SecretarialAuditReports from "./pages/services/legal/SecretarialAuditReports";
import ComplianceCertificates from "./pages/services/legal/ComplianceCertificates";
import CertificationunderSEBIRegulations from "./pages/services/legal/CertificationunderSEBIRegulations";
import CertificationforMergersAmalgamations from "./pages/services/legal/CertificationforMergersAmalgamations";
import CertificationunderFEMARBICompliance from "./pages/services/legal/CertificationunderFEMARBICompliance"
function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24 pb-16">
        <AIChatBot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/blockchain" element={<BlockchainServices />} />
          <Route path="/services/blockchain/smart-contracts" element={<SmartContractDev />} />
          <Route path="/services/blockchain/token" element={<TokenDev />} />
          <Route path="/services/blockchain/nft" element={<NFTMarketplace />} />
          <Route path="/services/blockchain/exchange" element={<CryptoExchange />} />
          <Route path="/services/blockchain/dapp" element={<DappDev />} />
          <Route path="/services/blockchain/node" element={<NodeSetup />} />
          <Route path="/services/blockchain/explorer" element={<BlockExplorer />} />
          <Route path="/services/blockchain/metaverse" element={<MetaverseDev />} />
          <Route path="/services/it/game-dev" element={<GameDev />} />
          <Route path="/services/it/app-dev" element={<AppDev />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/digital/marketing" element={<Marketing />} />
          <Route path="/services/it-services" element={<ITServices />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} /> 
          <Route path="/services/it/saas" element={<SaaS />} />
          <Route path="/services/it/web-dev" element={<WebDev />} />
          <Route path="/services/it/mobile" element={<Mobile />} />
          <Route path="/services/it/cloud" element={<Cloud />} /> 
          <Route path="/services/legal/compliance" element={<Compliance />} />
          <Route path="/services/legal/private-limited-company-registration" element={<PrivateLimitedRegistration />} />
          <Route path="/services/legal/public-limited-company-registration" element={<PublicLimitedRegistration />} />
          <Route path="/services/legal/one-person-company--opc--registration" element={<OPCRegistration />} />
          <Route path="/services/legal/limited-liability-partnership--llp--registration" element={<LLPRegistration />} />
          <Route path="/services/legal/section-8--non-profit-company--registration" element={<Section8Registration />} />
          <Route path="/services/legal/producer-company-registration" element={<ProducerCompanyRegistration />} />
          <Route path="/services/legal/nidhi-company-registration" element={<NidhiCompanyRegistration />} />
          <Route path="/services/legal/foreign-company-setup" element={<ForeignCompanySetup />} />
          <Route path="/services/legal/annual-returns-filing--mgt-7,-aoc-4-" element={<AnnualReturnsFiling />} />
<Route path="/services/legal/statutory-registers-maintenance" element={<StatutoryRegisters />} />
<Route path="/services/legal/board-&-general-meetings" element={<BoardGeneralMeetings />} />
<Route path="/services/legal/roc-compliance-filings" element={<ROCComplianceFilings />} />
<Route path="/services/legal/moa-and-aoa-alterations" element={<MOAandAOAAlterations />} />
<Route path="/services/legal/company-conversions" element={<LLPToPrivateConversion />} />
<Route path="/services/legal/corporate-governance-advisory" element={<CorporateGovernanceAdvisory />} />
<Route path="/services/legal/secretarial-audit" element={<SecretarialAudit />} />

{/* ✅ Newly Added Routes */}
<Route path="/services/legal/virtual-company-secretary-services--for-startups-and-smes-" element={<VirtualCompanySecretaryServices />} />
<Route path="/services/legal/esop-structuring-and-administration" element={<ESOPStructuringAdministration />} />
<Route path="/services/legal/corporate-social-responsibility--csr--compliance" element={<CorporateSociaResponsibilityCompliance />} />
<Route path="/services/legal/risk-management-advisory" element={<RiskManagementAdvisory />} />
<Route path="/services/legal/internal-controls-and-process-advisory" element={<InternalControlsProcessAdvisory />} />
<Route path="/services/legal/bse/nse-listing-assistance" element={<BSENSEListingAssistance />} />
<Route path="/services/legal/sebi--lodr--compliance" element={<SEBILODRCompliance />} />
<Route path="/services/legal/periodic-disclosures-and-filings" element={<PeriodicDisclosuresFilings />} />
<Route path="/services/legal/secretarial-audit-reports" element={<SecretarialAuditReports />} />
<Route path="/services/legal/compliance-certificates--e.g.,-for-listed-companies-" element={<ComplianceCertificates />} />
<Route path="/services/legal/certification-under-sebi-regulations" element={<CertificationunderSEBIRegulations />} />
<Route path="/services/legal/certification-for-mergers/amalgamations" element={<CertificationforMergersAmalgamations />} />
<Route path="/services/legal/certification-under-fema/rbi-compliance" element={<CertificationunderFEMARBICompliance />} />

          <Route path="/careers" element={<Careers />} />
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
