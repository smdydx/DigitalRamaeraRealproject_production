import { Link } from "wouter";
import { motion } from "framer-motion";
import { Code, Send, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { staggerContainer } from "@/lib/animations";
import { useState, useEffect } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiRequest("POST", "/api/subscribe", { email });
      toast({
        title: "Subscription successful",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-zinc-900 pt-12 sm:pt-16 pb-6 sm:pb-8 w-full mt-auto relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          <div>
            <div onClick={() => window.location.href = '/'} className="cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/ramaera-logo.jpg" alt="Ramaera Logo" className="h-12 w-12 rounded-full border-2 border-orange-500/30" />
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Softbeem managed by Ramaera Legal InfoTech Private Limited, a premier technology and legal services company providing innovative solutions for businesses across sectors.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/ramaera-legal-infotech-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571353791629" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ramaera_legal_infotech_pvt_ltd?igsh=MWt1bWgycHBzMW9iZw==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-300">Blog</a></li>
              <li><a href="/careers" className="text-muted-foreground hover:text-primary transition-colors duration-300">Careers</a></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Tech Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/blockchain/smart-contracts" className="text-muted-foreground hover:text-primary transition-colors duration-300">Smart Contract Development</a></li>
              <li><a href="/services/blockchain/token" className="text-muted-foreground hover:text-primary transition-colors duration-300">Token Development</a></li>
              <li><a href="/services/blockchain/nft" className="text-muted-foreground hover:text-primary transition-colors duration-300">NFT Marketplace</a></li>
              <li><a href="/services/blockchain/exchange" className="text-muted-foreground hover:text-primary transition-colors duration-300">Crypto Exchange</a></li>
              <li><a href="/services/it/web-dev" className="text-muted-foreground hover:text-primary transition-colors duration-300">Web Development</a></li>
              <li><a href="/services/it/mobile" className="text-muted-foreground hover:text-primary transition-colors duration-300">Mobile Applications</a></li>
              <li><a href="/services/it/cloud" className="text-muted-foreground hover:text-primary transition-colors duration-300">Cloud Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Legal Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/legal/company-incorporation" className="text-muted-foreground hover:text-primary transition-colors duration-300">Company Incorporation</a></li>
              <li><a href="/services/legal/roc-compliance" className="text-muted-foreground hover:text-primary transition-colors duration-300">ROC Compliance</a></li>
              <li><a href="/services/legal/secretarial-audit" className="text-muted-foreground hover:text-primary transition-colors duration-300">Secretarial Audit</a></li>
              <li><a href="/services/legal/ip-registration" className="text-muted-foreground hover:text-primary transition-colors duration-300">IP Registration</a></li>
              <li><a href="/services/legal/startup-registration" className="text-muted-foreground hover:text-primary transition-colors duration-300">Startup Registration</a></li>
              <li><a href="/services/legal/labour-compliance" className="text-muted-foreground hover:text-primary transition-colors duration-300">Labour Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive updates and news.
            </p>
            <form className="mb-4" onSubmit={handleSubscribe}>
              <div className="flex max-w-md">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="rounded-l-full focus-visible:ring-primary border-r-0 bg-zinc-800" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="rounded-r-full bg-gradient-to-r from-[#FF4500] to-[#FF8C00] hover:from-[#FF6E00] hover:to-[#FFA500] border-none"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <p className="text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Ramaera Legal InfoTech Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg ${
          showBackToTop ? "visible" : "invisible"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;