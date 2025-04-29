
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, Tag, ArrowRight } from "lucide-react";

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs([]);
    }
  };

  const categories = ['All', 'Blockchain', 'Technology', 'Business', 'Legal'];

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || blog.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-background pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
            Our Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest insights, news, and expert opinions on blockchain, technology, and business.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-primary text-white'
                      : 'bg-zinc-800 text-muted-foreground hover:bg-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              variants={fadeIn("up", "tween", 0.2 * index, 1)}
            >
              <Card className="overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 border-zinc-800">
                <div className="relative">
                  <img 
                    src={blog.image || 'https://via.placeholder.com/400x250'} 
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {blog.category || 'Technology'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 mr-2" />
                    <span>{blog.author}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {blog.content}
                  </p>
                  <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blog;
