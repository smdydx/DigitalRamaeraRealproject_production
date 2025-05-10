"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Globe2, ArrowRight, ShoppingBag, Box, Users } from "lucide-react";
import { useState } from "react";

const DigitalMarketing = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    { name: "SEO Optimization", icon: "📈" },
    { name: "Content Marketing", icon: "✍️" },
    { name: "Social Media", icon: "📱" },
    { name: "Email Campaigns", icon: "📧" },
    { name: "PPC Advertising", icon: "💰" },
    { name: "Analytics & Insights", icon: "📊" },
  ];

  const solutions = [
    {
      icon: <ShoppingBag className="w-6 h-6 text-green-400 group-hover:animate-pulse" />,
      title: "E-Commerce Solutions",
      description: "Build optimized online stores with conversion-focused features",
      image: "https://images.pexels.com/photos/8369533/pexels-photo-8369533.jpeg",
    },
    {
      icon: <Box className="w-6 h-6 text-green-400 group-hover:animate-pulse" />,
      title: "Branding & Strategy",
      description: "Establish a strong digital presence and brand identity",
      image: "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg",
    },
    {
      icon: <Users className="w-6 h-6 text-green-400 group-hover:animate-pulse" />,
      title: "Social Media Management",
      description: "Grow your community with curated social media strategies",
      image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg",
    },
  ];

  const faqs = [
    {
      question: "What is Digital Marketing?",
      answer: "Digital marketing refers to the use of the internet and digital technologies to promote and advertise products and services to a wide audience.",
    },
    {
      question: "Why is SEO important?",
      answer: "SEO (Search Engine Optimization) is important because it helps improve the visibility of your website on search engines like Google, increasing traffic and conversions.",
    },
    {
      question: "What is the role of social media in marketing?",
      answer: "Social media marketing helps to connect with your audience, build brand awareness, and increase engagement, ultimately driving more traffic and conversions.",
    },
    {
      question: "What are PPC ads?",
      answer: "PPC (Pay-Per-Click) advertising is a form of internet marketing where advertisers pay each time a user clicks on one of their online ads. It's an effective way to drive traffic to websites.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden pt-24">

      {/* 🔴 Background Video Layer */}
      <video
        src="/video/Digital-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.2]"
      />

      {/* Optional Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(0,255,0,0.1)_0%,_transparent_50%)] pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,128,0,0.1)_0%,_transparent_50%)] pointer-events-none z-10"></div>

      {/* Content Layer */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-20 container mx-auto px-4 mt-20"
      >
        {/* Heading Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            Digital Marketing Solutions
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Boost your business with our data-driven and ROI-focused marketing strategies.
          </p>
        </motion.div>

        {/* Foreground Video Section */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1">
            <video
              src="/video/Digital-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-xl mx-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Boost Your Brand with Digital Marketing
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              In today’s fast-paced digital world, a solid online presence is key to business growth. Our digital marketing strategies are tailored to increase your visibility, attract your target audience, and drive measurable results. From SEO and PPC to social media management, we help you grow your business with effective, results-oriented campaigns.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              Get Started
            </Button>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            Our Digital Marketing Services
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", 0.3 * index, 1)}
                whileHover={{ scale: 1.06, y: -5 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="group relative overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-500/60 backdrop-blur-sm bg-zinc-900/40 transition-all duration-300 shadow-lg hover:shadow-green-400/20"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
                <div className="relative p-6 z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {service.name} details will be showcased here for marketing strategies.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Marketing Solutions */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            Our Marketing Solutions
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", 0.3 * index, 1)}
                whileHover={{ scale: 1.06, y: -5 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="group relative overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-500/60 backdrop-blur-sm bg-zinc-900/40 transition-all duration-300 shadow-lg hover:shadow-green-400/20"
              >
                <div className="absolute inset-0">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
                </div>
                <div className="relative p-6 z-10">
                  <div className="flex items-center mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="text-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Start Your Marketing Journey <ArrowRight className="ml-2" />
          </Button>
        </motion.div>

        {/* FAQ */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl p-6 bg-zinc-900/50 shadow-lg hover:shadow-green-400/40 transition-all">
                <h4
                  onClick={() => toggleQuestion(index)}
                  className="cursor-pointer text-lg font-semibold text-white"
                >
                  {faq.question}
                </h4>
                {activeIndex === index && (
                  <p className="mt-3 text-sm text-gray-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default DigitalMarketing;
