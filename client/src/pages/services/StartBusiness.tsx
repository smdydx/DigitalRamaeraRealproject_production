import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Link } from "wouter";
import { testimonialsData } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import {
  Users,
  Globe,
  Briefcase,
  Heart,
  Building2,
  CheckCircle2,
  FileSignature,
  User,
  Building,
  Sparkles,
  Shield,
  Rocket,
  ChevronLeft,
  ChevronDown,
  PhoneCall,
  Mail,
  ArrowRight,
  CheckCircle2 as CheckCircle,
  Phone,
} from "lucide-react";

import { useNavigate } from 'react-router-dom';

const StartBusiness = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("indian-startups");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        const toggleButton = document.querySelector('[data-sidebar-toggle]');
        if (!toggleButton?.contains(event.target as Node)) {
          setIsSidebarOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  const toggleSidebar = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIsSidebarOpen(!isSidebarOpen);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleSectionChange = (section: string) => {
    if (activeSection !== section) {
      setActiveSection(section);
      if (isMobile) {
        setIsSidebarOpen(false);
      }
    }
  };

  const fdiServices = [
    {
      title: "India Entry Services (FDI)",
      description: "Comprehensive services for foreign direct investment",
    },
    {
      title: "Indian Subsidiary Incorporation",
      description: "Setup your subsidiary in India",
    },
    {
      title: "Foreigner Company Registration",
      description: "Register your foreign company",
    },
    {
      title: "Foreigner LLP Incorporation",
      description: "Establish Limited Liability Partnership",
    },
    {
      title: "Joint Venture Incorporation",
      description: "Form joint ventures in India",
    },
    {
      title: "NRI Company Incorporation",
      description: "Services for NRI entrepreneurs",
    },
  ];

  const foreignEntityServices = [
    {
      title: "Project Office Registration",
      description: "Register project offices in India",
    },
    {
      title: "Branch Office Registration",
      description: "Establish branch offices",
    },
    {
      title: "Liaison Office Registration",
      description: "Setup liaison offices",
    },
    {
      title: "Annual Activity Certificate (AAC)",
      description: "Compliance and certification",
    },
  ];

  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({...prev, [id]: !prev[id]}));
  };

  const sidebarItems = [
    {
      title: "Indian Startups",
      href: "#indian-startups",
      icon: <Rocket className="w-5 h-5" />,
      expandable: true,
      id: "startups",
      items: [
        "Private Limited Company",
        "Limited Liability Partnership",
        "One Person Company",
        "Partnership Firm",
        "Sole Proprietorship"
      ]
    },
    {
      title: "Foreign Investors (FDI)",
      href: "#fdi",
      icon: <Globe className="w-5 h-5" />,
      expandable: true,
      id: "fdi",
      items: [
        "Indian Subsidiary",
        "Branch Office",
        "Liaison Office",
        "Project Office",
        "LLP with Foreign Investment"
      ]
    },
    {
      title: "India Entry Services",
      href: "#india-entry",
      icon: <Users className="w-5 h-5" />,
      expandable: true,
      id: "entry",
      items: [
        "Business Strategy",
        "Market Research",
        "Legal Compliance",
        "Partner Search",
        "Office Setup"
      ]
    },
    {
      title: "Overseas Incorporation (ODI)",
      href: "#odi",
      icon: <Briefcase className="w-5 h-5" />,
      expandable: true,
      id: "odi",
      items: [
        "Company Formation",
        "Subsidiary Setup",
        "Joint Venture",
        "Branch Office",
        "Investment Strategy"
      ]
    },
    {
      title: "Non Profit Organisations/NGO",
      href: "#ngo",
      icon: <Heart className="w-5 h-5" />,
      expandable: true,
      id: "ngo",
      items: [
        "Trust Registration",
        "Society Registration",
        "Section 8 Company",
        "FCRA Registration",
        "12A & 80G Registration"
      ]
    },
    {
      title: "Special Entity or NBFC",
      href: "#nbfc",
      icon: <Building2 className="w-5 h-5" />,
      expandable: true,
      id: "nbfc",
      items: [
        "NBFC Registration",
        "Nidhi Company",
        "Microfinance Company",
        "Core Investment Company",
        "Asset Finance Company"
      ]
    },
    {
      title: "IPR",
      href: "#ipr",
      icon: <Shield className="w-5 h-5" />,
      expandable: true,
      id: "ipr"
    },
    {
      title: "Tax & CFO",
      href: "#tax",
      icon: <FileSignature className="w-5 h-5" />,
      expandable: true,
      id: "tax"
    },
    {
      title: "Payroll",
      href: "#payroll",
      icon: <Users className="w-5 h-5" />,
      expandable: true,
      id: "payroll"
    },
    {
      title: "Compliance",
      href: "#compliance",
      icon: <CheckCircle2 className="w-5 h-5" />,
      expandable: true,
      id: "compliance"
    },
    {
      title: "Regulatory",
      href: "#regulatory",
      icon: <Building className="w-5 h-5" />,
      expandable: true,
      id: "regulatory"
    },
    {
      title: "Others",
      href: "#others",
      icon: <Globe className="w-5 h-5" />,
      expandable: true,
      id: "others"
    },
  ];

  const features = [
    {
      title: "Digital Process",
      icon: <Sparkles className="w-6 h-6" />,
      description: "100% online documentation",
    },
    {
      title: "Expert Support",
      icon: <Shield className="w-6 h-6" />,
      description: "24/7 assistance",
    },
    {
      title: "Complete Solutions",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "End-to-end services",
    },
  ];

  const commonOptions = [
    {
      title: "Start Business in India",
      description: "Complete business setup solutions",
      icon: <Rocket />,
      image: "/images/services/bussiness.jpg",
      features: [
        "Company Registration",
        "Business License",
        "Tax Registration",
        "Bank Account Setup",
      ],
       link: "/services/legal/start-business-india"
    },
    {
      title: "Digital Signature Certificate",
      description: "Essential for business compliance",
      icon: <FileSignature />,
      image: "/images/smartcontract.jpg",
      features: [
        "Class 2 & 3 DSC",
        "Quick Processing",
        "Valid for 2 Years",
        "Online Verification",
      ],
       link: "/services/legal/labour-compliance"
    },
    {
      title: "Sole Proprietorship",
      description: "Simplest business structure",
      icon: <User />,
      image: "/images/services/sole-proprietorship.jpg",
      features: [
        "Easy Registration",
        "Complete Control",
        "Low Cost",
        "Minimal Compliance",
      ],
       link: "/samad"
    },
    {
      title: "One Person Company (OPC)",
      description: "Perfect for solo entrepreneurs",
      icon: <User />,
      image: "/images/services/one-person-company-opc.jpg",
      features: [
        "Limited Liability",
        "Single Director",
        "Professional Structure",
        "Easy Bank Account",
      ],
    },
    {
      title: "Partnership Firm",
      description: "Ideal for multiple owners",
      icon: <Users />,
      image: "/images/services/partnership-firm.jpg",
      features: [
        "Simple Formation",
        "Shared Management",
        "Combined Resources",
        "Flexible Structure",
      ],
    },
    {
      title: "LLP Registration",
      description: "Flexible business structure",
      icon: <Building />,
      image: "/images/services/llp-registration.jpg",
      features: [
        "Limited Liability",
        "Low Compliance",
        "Partner Protection",
        "Tax Benefits",
      ],
    },
    {
      title: "Pvt Ltd Company Registration",
      description: "Most preferred for startups",
      icon: <Building2 />,
      image: "/images/services/pvt-ltd-company-registration.jpg",
      features: [
        "Limited Liability",
        "Professional Image",
        "Easy Funding",
        "Tax Benefits",
      ],
    },
    {
      title: "DPIIT Startup India",
      description: "Government recognition for startups",
      icon: <Shield />,
      image: "/images/services/dpiit-startup-india.jpg",
      features: [
        "Govt Recognition",
        "Tax Benefits",
        "Funding Access",
        "Compliance Relief",
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        const toggleButton = document.querySelector('[data-sidebar-toggle]');
        if (!toggleButton?.contains(event.target as Node)) {
          setIsSidebarOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  return (
    <>
      <div className="min-h-screen bg-background relative">
        {/* Sidebar Overlay */}
        <div 
          className={`sidebar-overlay ${isMobile && isSidebarOpen ? 'active' : ''}`} 
          onClick={() => isMobile && setIsSidebarOpen(false)} 
        />
        {/* Background effects */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
        <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

        <div className="flex min-h-screen relative pt-16 pb-[500px] md:pb-[400px]">
          {/* Sidebar */}
          {isMobile && (
            <button
              onClick={toggleSidebar}
              className="fixed left-4 top-20 z-50 bg-zinc-900/95 border border-green-500/10 p-2 rounded-lg text-green-400 hover:bg-zinc-800/40"
              data-sidebar-toggle
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${isSidebarOpen ? '' : 'rotate-180'}`} />
            </button>
          )}
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            ref={sidebarRef}
            className={`fixed left-0 h-[calc(100vh-4rem)] top-16 bg-zinc-900/95 border-r border-green-500/10 backdrop-blur-lg overflow-y-auto transition-transform duration-300 ease-in-out z-40 shadow-lg shadow-green-500/5 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } ${isMobile ? "w-64" : "w-72"}`}
          >
            <div className="flex justify-between items-center p-6 border-b border-green-500/10">
              <div>
                <h2 className="text-xl font-bold text-green-400">
                  Business Services
                </h2>
                <p className="text-sm text-gray-400 mt-2">Expert Solutions</p>
              </div>
              <button
                onClick={toggleSidebar}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-zinc-900/95 border border-green-500/10 p-2 rounded-r-lg text-green-400 hover:bg-zinc-800/40"
              >
                <ChevronLeft className={`w-5 h-5 transition-transform ${isSidebarOpen ? '' : 'rotate-180'}`} />
              </button>
            </div>

            <nav className="p-4">
              {sidebarItems.map((item, index) => (
                <div key={index} className="mb-2">
                  <motion.button
                    onClick={() => {
                      handleSectionChange(item.href.replace("#", ""));
                      if (item.expandable) {
                        toggleExpand(item.id);
                      }
                      const element = document.getElementById(item.href.replace("#", ""));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all group w-full ${activeSection === item.href.replace("#", "") ? "bg-green-500/10 text-green-400" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-500/10 text-green-400 group-hover:bg-green-500/20">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.title}</span>
                    </div>
                    {item.expandable && (
                      <div className={`transform transition-transform ${expandedItems[item.id] ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    )}
                  </motion.button>
                  {item.expandable && expandedItems[item.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-12 mt-2 space-y-2"
                    >
                      {item.items?.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors py-2"
                        >
                          {subItem}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Options at bottom of sidebar */}
            <div className="p-4 mt-8 space-y-4 border-t border-green-500/10">
              <a
                href="tel:+911169310715"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>+91 11 6931 0715</span>
              </a>
              <a
                href="https://wa.me/911169310715"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-400 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.aside>

          {/* Main Content */}
          <main
            className={`flex-1 min-h-screen transition-all duration-300 ${
              isSidebarOpen && !isMobile ? "lg:ml-72" : "ml-0"
            } px-4 md:px-6 lg:px-8`}
          >


            <div className="p-6 space-y-12 max-w-7xl mx-auto">
              {activeSection === "fdi" && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-white">
                        Incorporate Indian Entity
                      </h2>
                      <div className="space-y-4">
                        {fdiServices.map((service, index) => (
                          <div
                            key={index}
                            className="bg-zinc-800/30 rounded-xl p-4 hover:bg-zinc-800/40 transition-all cursor-pointer border border-green-500/10"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-green-400">›</span>
                              <div>
                                <h3 className="text-white font-medium">
                                  {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-white">
                        Operate as Foreign Entity
                      </h2>
                      <div className="space-y-4">
                        {foreignEntityServices.map((service, index) => (
                          <div
                            key={index}
                            className="bg-zinc-800/30 rounded-xl p-4 hover:bg-zinc-800/40 transition-all cursor-pointer border border-green-500/10"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-green-400">›</span>
                              <div>
                                <h3 className="text-white font-medium">
                                  {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}

              {activeSection === "indian-startups" && (
                <>
                  <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="relative rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-green-500/10 backdrop-blur-sm p-8 lg:p-12 mt-8"
                  >
                    {/* Hero content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <motion.div
                        variants={fadeIn("right", "tween", 0.2, 1)}
                        className="space-y-6"
                      >
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                          Start Right. Build Smart. Grow Legally.
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          At SOFTBEEM, powered by RAMAERA Legal Infotech Pvt
                          Ltd, we offer end-to-end company incorporation
                          services to help entrepreneurs, startups, and
                          corporates establish legally compliant entities in
                          India — quickly, seamlessly, and affordably.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {/* <Button
                            size="lg"
                            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all"
                            onClick={() => navigate('/services/legal/start-business-india')}
                          >
                            Xyz <ArrowRight className="h-5 w-5" />
                          </Button> */}
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                          >
                            Schedule Consultation
                          </Button>
                        </div>
                      </motion.div>
                      <motion.div
                        variants={fadeIn("left", "tween", 0.4, 1)}
                        className="relative aspect-square rounded-2xl overflow-hidden hidden lg:block"
                      >
                        <img
                          src="/images/services/bussiness.jpg"
                          alt="Business growth"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </motion.div>
                    </div>
                  </motion.section>

                  {/* Features Section */}
                  <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                        className="p-6 bg-zinc-800/30 rounded-xl border border-green-500/10 backdrop-blur-sm hover:bg-zinc-800/40 transition-all"
                      >
                        <div className="text-green-400 mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </motion.div>
                    ))}
                  </motion.section>

                  {/* Services Cards */}
                  <motion.section
                    id="start-business-india"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div className="space-y-12">
                      {/* Most Common Options */}
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">
                          Most Common Options
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {commonOptions.map((option, index) => (
                            <motion.div
                              key={index}
                              variants={fadeIn(
                                "up",
                                "spring",
                                index * 0.1,
                                0.75,
                              )}
                              className="p-6 bg-zinc-800/30 rounded-xl border border-green-500/10 backdrop-blur-sm group hover:bg-zinc-800/40 transition-all h-full"
                            >
                              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                               <img
  src={option.image}
  alt={option.title}
  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-green-400 p-2 rounded-full bg-black/50">
                                  {option.icon}
                                </div>
                              </div>
                              <h3 className="text-xl font-semibold text-white mb-2">
                                {option.title}
                              </h3>
                              <p className="text-gray-400 mb-4">
                                {option.description}
                              </p>
                              <ul className="space-y-2 mb-6">
                                {option.features.map((feature, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2 text-gray-300"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                             <Button
                                  variant="outline"
                                  className="w-full border-green-500/30 group-hover:bg-green-500 group-hover:text-white"
                                  onClick={() => {
                                    navigate(option.link || "/services/legal/start-business-india");
                                   
                                  }}
                                                  >
                                                Get Started{" "}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Button>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* DPIIT Startup India */}
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">
                          DPIIT Startup India
                        </h2>
                        <div className="space-y-4">
                          <div className="bg-zinc-800/30 rounded-xl p-4 hover:bg-zinc-800/40 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                              <span className="text-green-400">›</span>
                              <h3 className="text-white">
                                DPIIT - Startup India Recognition
                              </h3>
                            </div>
                          </div>
                          <div className="bg-zinc-800/30 rounded-xl p-4 hover:bg-zinc-800/40 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                              <span className="text-green-400">›</span>
                              <h3 className="text-white">
                                80IAC - Startup Tax Exemption
                              </h3>
                            </div>
                          </div>
                          <div className="bg-zinc-800/30 rounded-xl p-4 hover:bg-zinc-800/40 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                              <span className="text-green-400">›</span>
                              <h3 className="text-white">
                                DPIIT - Seed Fund Application
                              </h3>
                            </div>
                          </div>
                          <div className="bg-zinc-800/30 rounded-xl p-4 hover:bg-zinc-800/40 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                              <span className="text-green-400">›</span>
                              <h3 className="text-white">
                                DPIIT - Make in India
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.section>

                  {/* Testimonials Section */}
                  <motion.section
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    initial="hidden"
                    whileInView="visible"
                    className="space-y-8"
                  >
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                      Client Success Stories
                    </h2>
                    <div className="relative overflow-hidden rounded-xl bg-zinc-800/30 border border-green-500/10 p-8">
                      <div className="flex animate-slide">
                        {[...Array(2)].map(() =>
                          testimonialsData.map((testimonial, index) => (
                            <div
                              key={index}
                              className="min-w-[300px] md:min-w-[400px] p-4"
                            >
                              <div className="bg-zinc-900/50 rounded-lg p-6 h-full border border-green-500/10">
                                <p className="text-gray-300 italic mb-4">
                                  "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full"
                                  />
                                  <div>
                                    <h4 className="font-medium text-white">
                                      {testimonial.name}
                                    </h4>
                                    <p className="text-green-400 text-sm">
                                      {testimonial.position},{" "}
                                      {testimonial.company}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )),
                        )}
                      </div>
                    </div>
                  </motion.section>
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default StartBusiness;