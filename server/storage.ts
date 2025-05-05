import { 
  users, type User, type InsertUser, 
  contacts, type Contact, type InsertContact,
  subscribers, type Subscriber, type InsertSubscriber
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private subscribers: Map<number, Subscriber>;
  private userIdCounter: number;
  private contactIdCounter: number;
  private subscriberIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.subscribers = new Map();
    this.userIdCounter = 1;
    this.contactIdCounter = 1;
    this.subscriberIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactIdCounter++;
    const now = new Date();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: now 
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    // Check for duplicate email
    const existingSubscriber = Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === insertSubscriber.email,
    );
    
    if (existingSubscriber) {
      return existingSubscriber; // Return existing subscriber if email already exists
    }
    
    const id = this.subscriberIdCounter++;
    const now = new Date();
    const subscriber: Subscriber = { 
      ...insertSubscriber, 
      id, 
      createdAt: now 
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
}

export const storage = new MemStorage();
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

export const uploadFile = async (file: any) => {
  const fileName = `${uuidv4()}-${file.name}`;
  const uploadPath = path.join(process.cwd(), 'uploads', fileName);
  
  // Ensure uploads directory exists
  if (!fs.existsSync(path.join(process.cwd(), 'uploads'))) {
    fs.mkdirSync(path.join(process.cwd(), 'uploads'), { recursive: true });
  }

  await file.mv(uploadPath);
  return `/uploads/${fileName}`;
};
