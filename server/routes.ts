import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  userProfileSchema, 
  contactFormSchema,
  SchemeMatchResponse 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all schemes
  app.get("/api/schemes", async (req, res) => {
    try {
      const schemes = await storage.getAllSchemes();
      res.json({ schemes, total: schemes.length });
    } catch (error) {
      console.error("Error fetching schemes:", error);
      res.status(500).json({ message: "Failed to fetch schemes" });
    }
  });

  // Match schemes based on user profile
  app.post("/api/match", async (req, res) => {
    try {
      const validationResult = userProfileSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid profile data",
          errors: validationResult.error.issues
        });
      }

      const profile = validationResult.data;
      const matchedSchemes = await storage.findMatchingSchemes(profile);
      
      const response: SchemeMatchResponse = {
        schemes: matchedSchemes,
        total: matchedSchemes.length
      };

      res.json(response);
    } catch (error) {
      console.error("Error matching schemes:", error);
      res.status(500).json({ message: "Failed to match schemes" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = contactFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid contact form data",
          errors: validationResult.error.issues
        });
      }

      const contactData = validationResult.data;
      await storage.saveContactForm(contactData);
      
      res.json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Error saving contact form:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
