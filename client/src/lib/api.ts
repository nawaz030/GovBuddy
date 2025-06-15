import { apiRequest } from "./queryClient";
import { 
  UserProfile, 
  ContactForm, 
  SchemeMatchResponse, 
  GovernmentScheme 
} from "@shared/schema";

export async function matchSchemes(profile: UserProfile): Promise<SchemeMatchResponse> {
  const response = await apiRequest("POST", "/api/match", profile);
  return response.json();
}

export async function getAllSchemes(): Promise<{ schemes: GovernmentScheme[], total: number }> {
  const response = await apiRequest("GET", "/api/schemes");
  return response.json();
}

export async function submitContactForm(contactData: ContactForm): Promise<{ message: string }> {
  const response = await apiRequest("POST", "/api/contact", contactData);
  return response.json();
}
