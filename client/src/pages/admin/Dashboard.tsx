import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  PencilIcon, 
  TrashIcon, 
  MessageSquare, 
  FileText,
  Eye,
  Users,
  Bell,
  CircuitBoard,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Calendar,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [editBlog, setEditBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [meetings, setMeetings] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('adminAuth');
        if (!token) {
          navigate('/admin/login');
          return;
        }
        await fetchData();
        setLoading(false);
      } catch (error) {
        console.error('Auth error:', error);
        navigate('/admin/login');
      }
    };

    checkAuth();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const [contactsRes, blogsRes, meetingsRes] = await Promise.all([
        fetch('/api/contacts'),
        fetch('/api/blogs'),
        fetch('/api/meetings')
      ]);

      if (!contactsRes.ok || !blogsRes.ok || !meetingsRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const [contactsData, blogsData, meetingsData] = await Promise.all([
        contactsRes.json(),
        blogsRes.json(),
        meetingsRes.json()
      ]);

      setContacts(contactsData || []);
      setBlogs(blogsData || []);
      setMeetings(meetingsData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch dashboard data. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleMeetingStatus = async (id, status) => {
    try {
      await fetch(`/api/meetings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      fetchData();
      toast({
        title: "Meeting status updated",
        description: `Meeting has been ${status}`,
      });
    } catch (error) {
      console.error('Failed to update meeting status:', error);
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const blogData = {
      title: formData.get('title'),
      author: formData.get('author'),
      image: formData.get('image'),
      content: formData.get('content')
    };

    try {
      if (editBlog) {
        await fetch(`/api/blogs/${editBlog._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blogData)
        });
      } else {
        await fetch('/api/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blogData)
        });
      }

      await fetchData();
      setEditBlog(null);
      form.reset();
      toast({
        title: editBlog ? "Blog updated" : "Blog created",
        description: "Your changes have been saved successfully.",
      });
    } catch (error) {
      console.error('Error submitting blog:', error);
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000510] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary rounded-full border-t-transparent animate-spin" />
          <p className="text-primary text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = {
    totalViews: blogs.reduce((acc, blog) => acc + (blog.views || 0), 0),
    totalBlogs: blogs.length,
    totalMessages: contacts.length,
    activeUsers: meetings.length
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'rejected':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-[#000510] text-white">
      <div className="max-w-[1400px] mx-auto p-6 pt-20"> {/* Added padding to push content below header */}
        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-blue-950/30 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm sticky top-0 z-10"> {/* Added sticky class for fixed header */}
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <div className="flex items-center gap-2 text-blue-400 mt-2">
              <CircuitBoard className="h-4 w-4" />
              <p className="text-sm">System Status: Online</p>
            </div>
          </div>

          <Button 
            variant="outline"
            className="border-blue-500/50 hover:bg-blue-500/10"
            onClick={() => {
              localStorage.removeItem('adminAuth');
              navigate('/admin/login');
            }}
          >
            Logout
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-blue-950/30 border border-blue-500/20 p-1 rounded-lg w-full flex justify-start">
            <TabsTrigger value="overview" className="flex-1 data-[state=active]:bg-blue-600">Overview</TabsTrigger>
            <TabsTrigger value="schedule" className="flex-1 data-[state=active]:bg-blue-600">Schedule</TabsTrigger>
            <TabsTrigger value="blogs" className="flex-1 data-[state=active]:bg-blue-600">Blogs</TabsTrigger>
            <TabsTrigger value="messages" className="flex-1 data-[state=active]:bg-blue-600">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Eye, label: 'Total Views', value: stats.totalViews, color: 'from-blue-400 to-blue-600' },
                { icon: FileText, label: 'Total Blogs', value: stats.totalBlogs, color: 'from-emerald-400 to-emerald-600' },
                { icon: MessageSquare, label: 'Messages', value: stats.totalMessages, color: 'from-purple-400 to-purple-600' },
                { icon: Users, label: 'Active Meetings', value: stats.activeUsers, color: 'from-amber-400 to-amber-600' }
              ].map(({ icon: Icon, label, value, color }) => (
                <Card key={label} className="p-6 bg-blue-950/30 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-400">{label}</p>
                      <h3 className={`text-3xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mt-2`}>
                        {value}
                      </h3>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-500/10">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <div className="space-y-4">
              {meetings.map((meeting) => (
                <Card key={meeting._id} className="p-6 bg-blue-950/30 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{meeting.name}</h3>
                      <p className="text-blue-400">{meeting.email}</p>
                      <div className="flex gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{meeting.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(meeting.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mt-3">{meeting.purpose}</p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <Badge className={`${getStatusColor(meeting.status)} px-4 py-1.5`}>
                        {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                      </Badge>
                      {meeting.status === 'pending' && (
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleMeetingStatus(meeting._id, 'approved')}
                            className="bg-emerald-600 hover:bg-emerald-700"
                            size="sm"
                          >
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                          <Button
                            onClick={() => handleMeetingStatus(meeting._id, 'rejected')}
                            variant="destructive"
                            size="sm"
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blogs">
            <Card className="p-6 bg-blue-950/30 border-blue-500/20 mb-6">
              <h2 className="text-2xl font-bold mb-6">
                {editBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              <form onSubmit={handleBlogSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="title"
                    placeholder="Blog Title"
                    defaultValue={editBlog?.title}
                    className="bg-blue-900/20 border-blue-500/20"
                    required
                  />
                  <Input
                    name="author"
                    placeholder="Author Name"
                    defaultValue={editBlog?.author}
                    className="bg-blue-900/20 border-blue-500/20"
                    required
                  />
                </div>
                <Input
                  name="image"
                  placeholder="Image URL"
                  defaultValue={editBlog?.image}
                  className="bg-blue-900/20 border-blue-500/20"
                />
                <Textarea
                  name="content"
                  placeholder="Blog Content"
                  defaultValue={editBlog?.content}
                  className="min-h-[200px] bg-blue-900/20 border-blue-500/20"
                  required
                />
                <div className="flex justify-end gap-4">
                  {editBlog && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setEditBlog(null)}
                      className="border-blue-500/50 hover:bg-blue-500/10"
                    >
                      Cancel
                    </Button>
                  )}
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    {editBlog ? 'Update Post' : 'Create Post'}
                  </Button>
                </div>
              </form>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogs.map((blog) => (
                <Card key={blog._id} className="p-4 bg-blue-950/30 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex gap-4">
                    {blog.image && (
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{blog.title}</h3>
                          <p className="text-sm text-blue-400">By {blog.author}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setEditBlog(blog)}
                            className="border-blue-500/50 hover:bg-blue-500/10"
                          >
                            <PencilIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => {
                              fetch(`/api/blogs/${blog._id}`, { method: 'DELETE' })
                                .then(fetchData)
                                .then(() => {
                                  toast({
                                    title: "Blog deleted",
                                    description: "The blog post has been removed successfully.",
                                  });
                                });
                            }}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contacts.map((contact) => (
                <Card key={contact._id} className="p-6 bg-blue-950/30 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{contact.name}</h3>
                        <p className="text-sm text-blue-400">{contact.email}</p>
                      </div>
                      <span className="text-sm text-gray-400">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-300 bg-blue-900/20 p-4 rounded-lg">{contact.message}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;