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
import StartBusiness from '@/pages/services/StartBusiness';
import RegisterBusiness from '@/pages/services/RegisterBusiness';
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
import Compliance from './pages/services/legal/Compliance';
import PrivateLimitedRegistration from './pages/services/legal/PrivateLimitedRegistration';
import PublicLimitedRegistration from './pages/services/legal/PublicLimitedRegistration';
import Careers from "./pages/Careers";
import AIChatBot from './components/AIChatBot';


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