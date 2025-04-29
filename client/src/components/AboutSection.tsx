
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const coreValues = [
  {
    title: "Innovation",
    description: "Always evolving with emerging technologies",
  },
  {
    title: "Integrity",
    description: "Building trust through honesty and transparency",
  },
  {
    title: "Client-Centricity",
    description: "Solutions tailored to each client's vision and needs",
  },
  {
    title: "Excellence",
    description: "Committed to high standards and consistent quality",
  },
];

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
            <motion.div
              variants={slideIn("right", "tween", 0.4, 1)}
              className="absolute -bottom-10 -right-10 bg-primary text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block"
            >
              <p className="text-lg font-semibold mb-2">Our Vision</p>
              <p className="text-sm opacity-80">
                To become a trusted global partner in digital transformation
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <div className="inline-block mb-4">
              <span className="text-primary font-medium text-sm uppercase tracking-wider relative before:content-[''] before:absolute before:w-8 before:h-[2px] before:bg-primary before:left-full before:top-1/2 before:ml-2">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Combine Technology & Legal Expertise
            </h2>
            <p className="text-muted-foreground mb-8">
              Softbeem is a forward-thinking technology and legal services company that empowers businesses with innovative and reliable solutions. We specialize in bridging the gap between cutting-edge technology and legal compliance, helping companies thrive in today's complex digital ecosystem.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses through innovative technology and expert legal guidance, delivering solutions that are not just efficient but also compliant and future-ready.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.1 * index, 0.5)}
                  className="flex items-start"
                >
                  <div className="bg-primary/10 p-2 rounded-md mr-4">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Button 
              size="lg" 
              onClick={() => scrollToSection("#services")}
              className="flex items-center gap-2"
            >
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
