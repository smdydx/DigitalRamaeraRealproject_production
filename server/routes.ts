import express, { type Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { Blog } from "./models/Blog";
import { Contact } from "./models/Contact";
import { Meeting } from "./models/Meeting";
// Twilio import aur client initialization hata diya gaya hai

export async function registerRoutes(app: Express): Promise<Server> {
  // Meeting APIs
  app.post("/api/meetings", async (req, res) => {
    try {
      const meeting = new Meeting(req.body);
      await meeting.save();
      res.status(201).json(meeting);
    } catch (error) {
      res.status(500).json({ message: "Failed to schedule meeting" });
    }
  });

  app.get("/api/meetings", async (req, res) => {
    try {
      const meetings = await Meeting.find().sort({ createdAt: -1 });
      res.json(meetings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch meetings" });
    }
  });

  app.put("/api/meetings/:id", async (req, res) => {
    try {
      const meeting = await Meeting.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
      );

      // Twilio notification logic hata diya gaya hai

      res.json(meeting);
    } catch (error) {
      res.status(500).json({ message: "Failed to update meeting status" });
    }
  });

  const httpServer = createServer(app);

  // Blog APIs
  app.get("/api/blogs", async (req, res) => {
    try {
      const blogs = await Blog.find().sort({ createdAt: -1 });
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blogs" });
    }
  });

  app.post("/api/blogs", async (req, res) => {
    try {
      const blog = new Blog(req.body);
      await blog.save();
      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ message: "Failed to create blog" });
    }
  });

  // Contact form API
  app.post("/api/contacts", async (req, res) => {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ message: "Failed to save contact" });
    }
  });

  const publicPath = path.join(process.cwd(), 'dist/public');

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(publicPath));

    // API routes
    app.get('/api/*', (req, res, next) => {
      next();
    });

    // Client-side routing
    app.get('*', (req, res) => {
      res.sendFile(path.join(publicPath, 'index.html'));
    });
  } else {
    const { setupVite } = await import('./vite');
    await setupVite(app, httpServer);
  }

  return httpServer;
}