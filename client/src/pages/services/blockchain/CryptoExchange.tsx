
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Shield, Users, Wrench, Clock, DollarSign, Headphones, ArrowRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

const CryptoExchange = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Blockchain Pioneers",
      description: "With years of experience in blockchain technology, we are the industry pioneers with extensive expertise. We do one thing, and we do it well."
    },
    {
      icon: <Wrench className="w-12 h-12 text-primary" />,
      title: "Customization Excellence",
      description: "We understand– No two businesses are the same, nor their needs. We excel at tailoring solutions to your unique requirements and vision."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "End-to-End Services",
      description: "We provide end-to-end services covering everything from ideation and development to deployment with the utmost professionalism and expertise."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Security-Centric Approach",
      description: "Security is paramount in the crypto space so we adopt a security-first mindset, implementing industry best practices to safeguard your digital assets."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: "Competitive Pricing",
      description: "We offer competitive pricing structures that ensure you receive exceptional value for your investment without compromising on quality."
    },
    {
      icon: <Headphones className="w-12 h-12 text-primary" />,
      title: "24/7 Support",
      description: "We offer unwavering, ongoing support with 24/7 availability to ensure the longevity and optimal performance of your blockchain solutions."
    }
  ];

  const exchangeTypes = [
    "Coinbase clone script",
    "Remitano clone script",
    "WazirX Clone Script",
    "Paxful clone script",
    "KuCoin clone script",
    "Poloniex clone script",
    "Kraken clone script",
    "Luno clone script",
    "PancakeSwap clone script",
    "Bybit clone script"
  ];

  const faqs = [
    {
      question: "What is a white label crypto exchange software?",
      answer: "A white label crypto exchange software is a market-ready solution that lets you run, configure, and launch a fully functional digital asset trading platform within a week. It is suitable for forex trading companies and existing crypto-based businesses that wish to roll out a crypto exchange platform with industry-leading features and advanced capabilities."
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(0,255,0,0.1)_0%,_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,128,0,0.1)_0%,_transparent_50%)] pointer-events-none"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-20">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              White Label Crypto Exchange Development
            </h1>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Launch your crypto exchange platform with our comprehensive white-label solutions. Get market-ready, secure, and scalable exchange software.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Hire Our Experts <ArrowRight className="ml-2" />
          </Button>
        </motion.div>

        {/* Exchange Types */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Exchange Solutions We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {exchangeTypes.map((type, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{type}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-primary">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What is a white label crypto exchange software?",
                answer: "A white label crypto exchange software is a market-ready solution that lets you run, configure, and launch a fully functional digital asset trading platform within a week. It is suitable for forex trading companies and existing crypto-based businesses that wish to roll out a crypto exchange platform with industry-leading features and advanced capabilities."
              },
              {
                question: "What features are included in your crypto exchange solution?",
                answer: "Our crypto exchange solution includes advanced order matching engine, multi-currency wallet system, KYC/AML compliance tools, real-time market data, multiple trading pairs, secure cold storage, admin dashboard, and customizable UI/UX. We also provide additional features like margin trading, futures trading, and P2P exchange capabilities."
              },
              {
                question: "How long does it take to launch a crypto exchange?",
                answer: "With our white label solution, you can launch your crypto exchange within 1-2 weeks. This includes customization, branding, testing, and deployment. More complex customizations or additional features may require additional time."
              },
              {
                question: "What security measures are implemented?",
                answer: "We implement industry-leading security measures including multi-signature wallets, SSL encryption, DDoS protection, 2FA authentication, IP whitelisting, anti-phishing protocols, and regular security audits. Our platform also follows best practices for cold storage and hot wallet management."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer 24/7 technical support, regular system updates, security patches, and continuous monitoring. Our team also provides training for your staff and assists with any technical issues or customization requests."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default CryptoExchange;
