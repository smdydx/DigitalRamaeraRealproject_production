
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Send, Linkedin, Facebook, Instagram, ArrowUp } from "lucide-react";
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
    <footer className="bg-gradient-to-b from-zinc-900 to-black pt-16 pb-8 w-full mt-auto relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div onClick={() => window.location.href = '/'} className="cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/ramaera-logo.jpg" alt="Ramaera Logo" className="h-14 w-14 rounded-full border-2 border-orange-500/30" />
              </div>
            </div>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Softbeem managed by Ramaera Legal InfoTech Private Limited, a premier technology and legal services company providing innovative solutions for businesses across sectors.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/ramaera-legal-infotech-pvt-ltd/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571353791629" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ramaera_legal_infotech_pvt_ltd?igsh=MWt1bWgycHBzMW9iZw==" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-primary transition-colors duration-300">Blog</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-primary transition-colors duration-300">Careers</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Tech Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Tech Services</h4>
            <ul className="space-y-4">
              <li><a href="/services/blockchain/smart-contracts" className="text-gray-400 hover:text-primary transition-colors duration-300">Smart Contract Development</a></li>
              <li><a href="/services/blockchain/token" className="text-gray-400 hover:text-primary transition-colors duration-300">Token Development</a></li>
              <li><a href="/services/blockchain/nft" className="text-gray-400 hover:text-primary transition-colors duration-300">NFT Marketplace</a></li>
              <li><a href="/services/blockchain/exchange" className="text-gray-400 hover:text-primary transition-colors duration-300">Crypto Exchange</a></li>
              <li><a href="/services/it/web-dev" className="text-gray-400 hover:text-primary transition-colors duration-300">Web Development</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col space-y-4">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="rounded-lg focus-visible:ring-primary border-zinc-700 bg-zinc-800/50 backdrop-blur" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  Subscribe <Send className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Ramaera Legal InfoTech Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Cookie Policy</a>
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
        className={`fixed bottom-8 left-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg ${
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
