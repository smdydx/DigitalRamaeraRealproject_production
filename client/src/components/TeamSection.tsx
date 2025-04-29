import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";
import { teamData } from "@/data/team";

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-zinc-900">
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
              Our Team
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-muted-foreground">
            Our leadership team brings years of expertise in blockchain technology, legal compliance, and tech innovation to drive Ramaera's mission forward.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamData.map((member, index) => (
            <TeamMemberCard
              key={index}
              member={member}
              delay={0.1 * index}
            />
          ))}
        </motion.div>

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
            View Full Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      dribble?: string;
    };
  };
  delay: number;
}

const TeamMemberCard = ({ member, delay }: TeamMemberCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", delay, 0.5)}
      className="relative bg-background rounded-lg overflow-hidden group border border-orange-500/10 shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-72 object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-primary mb-3">{member.role}</p>
        <div className="flex space-x-3">
          {member.socialLinks.linkedin && (
            <a
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.socialLinks.twitter && (
            <a
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {member.socialLinks.github && (
            <a
              href={member.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-primary">{member.role}</p>
      </div>
    </motion.div>
  );
};

export default TeamSection;
