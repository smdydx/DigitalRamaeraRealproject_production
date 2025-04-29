import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogData } from "@/data/blog";

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
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
              Our Blog
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Latest Insights & Updates
          </motion.h2>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-muted-foreground">
            Stay updated with the latest trends in technology and legal developments through our blog.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogData.map((post, index) => (
            <BlogCard
              key={index}
              post={post}
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
            View All Posts <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    description: string;
    date: string;
    author: string;
    category: string;
    categoryColor: string;
    image: string;
  };
  delay: number;
}

const BlogCard = ({ post, delay }: BlogCardProps) => {
  return (
    <motion.article
      variants={fadeIn("up", "tween", delay, 0.5)}
      className="bg-zinc-900 rounded-lg overflow-hidden group border border-orange-500/10 shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span 
            className={`bg-${post.categoryColor} text-white text-xs font-medium px-2 py-1 rounded-md`}
            style={{ backgroundColor: post.categoryColor === "primary" ? "hsl(222 100% 60%)" : "hsl(342 100% 60%)" }}
          >
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <User className="h-4 w-4 mr-2" />
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
          <a href="#">{post.title}</a>
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {post.description}
        </p>
        <Button variant="link" className="p-0 flex items-center gap-1 text-primary">
          Read More <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.article>
  );
};

export default BlogSection;
