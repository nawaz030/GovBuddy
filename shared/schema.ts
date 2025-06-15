import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User Profile Schema
export const userProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(1, "Age must be at least 1").max(100, "Age cannot exceed 100"),
  gender: z.enum(["male", "female", "other"]),
  income: z.enum([
    "below-50000",
    "50000-200000", 
    "200000-500000",
    "500000-1000000",
    "above-1000000"
  ]),
  occupation: z.enum([
    "student",
    "farmer", 
    "business-owner",
    "government-employee",
    "private-employee",
    "self-employed",
    "unemployed",
    "retired",
    "other"
  ]),
  state: z.enum([
    "andhra-pradesh",
    "bihar",
    "delhi", 
    "gujarat",
    "haryana",
    "karnataka",
    "kerala",
    "maharashtra",
    "punjab",
    "rajasthan",
    "tamil-nadu",
    "uttar-pradesh",
    "west-bengal"
  ]),
  city: z.string().optional(),
});

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.enum([
    "general",
    "scheme-suggestion", 
    "technical-issue",
    "feedback",
    "partnership"
  ]).optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Government Scheme Schema
export const governmentSchemeSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  eligibility: z.string(),
  category: z.string(),
  apply_link: z.string().url(),
  age_min: z.number().optional(),
  age_max: z.number().optional(),
  income_max: z.string().optional(),
  gender_specific: z.enum(["male", "female", "all"]).optional(),
  occupations: z.array(z.string()).optional(),
  states: z.array(z.string()).optional(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type GovernmentScheme = z.infer<typeof governmentSchemeSchema>;

export type SchemeMatchRequest = UserProfile;
export type SchemeMatchResponse = {
  schemes: GovernmentScheme[];
  total: number;
};
