import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { projectsData } from "@/data/projects";

const categories = [
  { id: "all", name: "All" },
  { id: "blockchain", name: "Blockchain" },
  { id: "fintech", name: "Fintech" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "legal", name: "Legal Tech" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)} className="inline-block mb-4">
            <span className="text-primary font-medium text-sm uppercase tracking-wider relative before:content-[''] before:absolute before:w-8 before:h-[2px] before:bg-primary before:left-full before:top-1/2 before:ml-2 after:content-[''] after:absolute after:w-8 after:h-[2px] after:bg-primary after:right-full after:top-1/2 after:mr-2">
              Our Projects
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Recent Work & Case Studies
          </motion.h2>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-muted-foreground">
            Explore our portfolio of successful projects across various industries and technologies.
          </motion.p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={0.1 * index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="transparent"
            size="lg"
            className="flex items-center gap-2"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
    categoryLabel: string;
    image: string;
  };
  delay: number;
}

const ProjectCard = ({ project, delay }: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", delay, 0.5)}
      className="group bg-zinc-900 rounded-lg overflow-hidden border border-orange-500/10 shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="icon" className="rounded-full">
            <Eye className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-primary bg-primary/10 py-1 px-2 rounded-full">
          {project.categoryLabel}
        </span>
        <h3 className="text-xl font-semibold mt-4 mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <Button variant="link" className="p-0 flex items-center gap-1 text-primary">
          View Case Study <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
