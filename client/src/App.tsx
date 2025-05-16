import { Route, Routes } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import CookieConsent from "@/components/CookieConsent";

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

// Blockchain Services
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
import CorporateSocialResponsibilityCompliance from "@/pages/services/legal/CorporateSociaResponsibilityCompliance";
import RiskManagementAdvisory from "@/pages/services/legal/RiskManagementAdvisory";
import InternalControlsProcessAdvisory from "@/pages/services/legal/InternalControlsProcessAdvisory";
import BSENSEListingAssistance from "@/pages/services/legal/BSENSEListingAssistance.";
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

import TrademarkRegistration from "./pages/services/legal/TrademarkRegistration";
import CopyrightRegistration from "./pages/services/legal/CopyrightRegistration";
import PatentApplicationAssistance from "./pages/services/legal/PatentApplicationAssistance";
import DraftingIPAssignmentLicense from "./pages/services/legal/DraftingIPAssignmentLicenseAgreements";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 md:pt-24 pb-16">
          <AIChatBot />
          <Routes>
            {/* Common */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/careers" element={<Careers />} />

            {/* Admin */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />

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

            {/* IT */}
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
            <Route path="/services/legal/code-of-conduct-&-policies" element={<CodeOfConductPage />} />
            <Route path="/services/legal/committee-setup" element={<CommitteeSetup />} />
            <Route path="/services/legal/board-&-general-meetings" element={<BoardGeneralMeetings />} />
            <Route path="/services/legal/roc-compliance-filings" element={<ROCComplianceFilings />} />
            <Route path="/services/legal/moa-and-aoa-alterations" element={<MOAandAOAAlterations />} />
            <Route path="/services/legal/company-conversions" element={<LLPToPrivateConversion />} />
            <Route path="/services/legal/corporate-governance-advisory" element={<CorporateGovernanceAdvisory />} />
            <Route path="/services/legal/secretarial-audit" element={<SecretarialAudit />} />
            <Route path="/services/legal/virtual-company-secretary-services--for-startups-and-smes-" element={<VirtualCompanySecretaryServices />} />
            <Route path="/services/legal/esop-structuring-and-administration" element={<ESOPStructuringAdministration />} />
            <Route path="/services/legal/corporate-social-responsibility--csr--compliance" element={<CorporateSocialResponsibilityCompliance />} />
            <Route path="/services/legal/risk-management-advisory" element={<RiskManagementAdvisory />} />
            <Route path="/services/legal/internal-controls-and-process-advisory" element={<InternalControlsProcessAdvisory />} />
            <Route path="/services/legal/bse-nse-listing-assistance" element={<BSENSEListingAssistance />} />
            <Route path="/services/legal/sebi--lodr--compliance" element={<SEBILODRCompliance />} />
            <Route path="/services/legal/periodic-disclosures-and-filings" element={<PeriodicDisclosuresFilings />} />
            <Route path="/services/legal/secretarial-audit-reports" element={<SecretarialAuditReports />} />
            <Route path="/services/legal/compliance-certificates--e.g.,-for-listed-companies-" element={<ComplianceCertificates />} />
            <Route path="/services/legal/certification-under-sebi-regulations" element={<CertificationunderSEBIRegulations />} />
            <Route path="/services/legal/certification-for-mergers/amalgamations" element={<CertificationforMergersAmalgamations />} />
            <Route path="/services/legal/certification-under-fema/rbi-compliance" element={<CertificationunderFEMARBICompliance />} />
            <Route path="/services/legal/allotment-of-shares--rights-issue,-private-placement,-bonus-issue-" element={<ShareAllotment />} />
            <Route path="/services/legal/transfer/transmission-of-shares" element={<ShareTransfer />} />
            <Route path="/services/legal/share-buy-back" element={<ShareBuyback />} />
            <Route path="/services/legal/mergers,-amalgamations,-and-demergers" element={<MergersDemergers />} />
            <Route path="/services/legal/strike-off--closure--of-companies" element={<CompanyStrikeOff />} />
            <Route path="/services/legal/fdi--foreign-direct-investment--reporting--fc-gpr,-fc-trs-" element={<FDIReporting />} />
            <Route path="/services/legal/external-commercial-borrowing--ecb--filings" element={<ECBFilings />} />
            <Route path="/services/legal/liaison/branch/project-office-setup-compliance" element={<LiaisonOfficeSetup />} />
            <Route path="/services/legal/odi--overseas-direct-investment--compliance" element={<ODICompliance />} />
            <Route path="/services/legal/shareholders-agreements" element={<ShareholdersAgreements />} />
            <Route path="/services/legal/founders-agreements" element={<FoundersAgreements />} />
            <Route path="/services/legal/joint-venture-agreements" element={<JointVentureAgreements />} />
            <Route path="/services/legal/service-agreements" element={<ServiceAgreements />} />
            <Route path="/services/legal/employment-contracts" element={<EmploymentContracts />} />
            <Route path="/services/legal/non-disclosure-agreements--ndas-" element={<NonDisclosureAgreementsNDAs />} />
            <Route path="/services/legal/startup-advisory--funding,-structuring,-esops-" element={<StartupAdvisoryFundingStructuringESOPs />} />
            <Route path="/services/legal/due-diligence-reports--for-m&a,-investors-" element={<DueDiligenceReportsforMAInvestors />} />
            <Route path="/services/legal/insolvency-and-bankruptcy-advisory--under-ibc-" element={<CorporateRestructuringAdvisory />} />
            <Route path="/services/legal/insolvency-bankruptcy-advisory-under-ibc" element={<InsolvencyBankruptcyAdvisoryunderIBC />} />
            <Route path="/services/legal/shops-and-establishment-registration" element={<ShopsEstablishmentRegistration />} />
            <Route path="/services/legal/provident-fund--pf--and-employee-state-insurance--esi--registration" element={<ProvidentFundPFEmployeeStateInsuranceESIRegistration />} />
            <Route path="/services/legal/professional-tax-registration" element={<ProfessionalTaxRegistration />} />
            <Route path="/services/legal/labour-welfare-fund-compliance" element={<LabourWelfareFundCompliance />} />
            <Route path="/services/legal/trademark-registration" element={<TrademarkRegistration />} />
            <Route path="/services/legal/copyright-registration" element={<CopyrightRegistration />} />
            <Route path="/services/legal/patent-application-assistance" element={<PatentApplicationAssistance />} />
            <Route path="/services/legal/drafting-ip-assignment/license-agreements" element={<DraftingIPAssignmentLicense />} />
            {/* Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
