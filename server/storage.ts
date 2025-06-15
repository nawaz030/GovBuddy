import { 
  UserProfile, 
  ContactForm, 
  GovernmentScheme, 
  SchemeMatchRequest 
} from "@shared/schema";

export interface IStorage {
  getAllSchemes(): Promise<GovernmentScheme[]>;
  findMatchingSchemes(profile: SchemeMatchRequest): Promise<GovernmentScheme[]>;
  saveContactForm(contact: ContactForm): Promise<void>;
}

export class MemStorage implements IStorage {
  private schemes: GovernmentScheme[];
  private contactForms: ContactForm[];

  constructor() {
    this.contactForms = [];
    this.schemes = [
      {
        id: 1,
        name: "Post Matric Scholarship Scheme",
        description: "Financial assistance for students from scheduled castes, scheduled tribes, and other backward classes pursuing higher education.",
        eligibility: "Students from SC/ST/OBC communities, family income below ₹2,50,000 per annum",
        category: "Education",
        apply_link: "https://scholarships.gov.in/",
        age_min: 16,
        age_max: 35,
        income_max: "200000-500000",
        gender_specific: "all",
        occupations: ["student"],
        states: ["andhra-pradesh", "bihar", "delhi", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 2,
        name: "PM-KISAN Scheme",
        description: "Direct financial assistance of ₹6,000 per year to eligible farmer families across the country.",
        eligibility: "All landholding farmers' families with cultivable land",
        category: "Agriculture",
        apply_link: "https://pmkisan.gov.in/",
        age_min: 18,
        age_max: 70,
        income_max: "500000-1000000",
        gender_specific: "all",
        occupations: ["farmer"],
        states: ["andhra-pradesh", "bihar", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 3,
        name: "Beti Bachao Beti Padhao",
        description: "Initiative to ensure survival, protection, and education of girl children through awareness campaigns and improved services.",
        eligibility: "Girl children and women, focus on districts with low Child Sex Ratio",
        category: "Women Empowerment",
        apply_link: "https://wcd.nic.in/bbbp-scheme",
        age_min: 0,
        age_max: 25,
        income_max: "500000-1000000",
        gender_specific: "female",
        occupations: ["student", "unemployed", "other"],
        states: ["andhra-pradesh", "bihar", "delhi", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 4,
        name: "Pradhan Mantri Kaushal Vikas Yojana",
        description: "Skill development scheme to provide training to youth and help them get better livelihood opportunities.",
        eligibility: "Youth aged 15-45 years, school/college dropouts preferred",
        category: "Skill Development",
        apply_link: "https://www.pmkvyofficial.org/",
        age_min: 15,
        age_max: 45,
        income_max: "200000-500000",
        gender_specific: "all",
        occupations: ["unemployed", "student", "other"],
        states: ["andhra-pradesh", "bihar", "delhi", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 5,
        name: "Ayushman Bharat",
        description: "Health insurance scheme providing coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
        eligibility: "Families identified in SECC database, income criteria apply",
        category: "Healthcare",
        apply_link: "https://pmjay.gov.in/",
        age_min: 0,
        age_max: 100,
        income_max: "200000-500000",
        gender_specific: "all",
        occupations: ["farmer", "unemployed", "self-employed", "private-employee", "other"],
        states: ["andhra-pradesh", "bihar", "delhi", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 6,
        name: "Pradhan Mantri Awas Yojana",
        description: "Housing scheme to provide affordable housing to urban and rural poor with a target of 'Housing for All' by 2022.",
        eligibility: "Economically Weaker Section and Low Income Group families",
        category: "Housing",
        apply_link: "https://pmaymis.gov.in/",
        age_min: 21,
        age_max: 65,
        income_max: "500000-1000000",
        gender_specific: "all",
        occupations: ["farmer", "self-employed", "private-employee", "other"],
        states: ["andhra-pradesh", "bihar", "delhi", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 7,
        name: "Pradhan Mantri Mudra Yojana",
        description: "Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.",
        eligibility: "Small business owners, entrepreneurs, self-employed individuals",
        category: "Business & Entrepreneurship",
        apply_link: "https://www.mudra.org.in/",
        age_min: 18,
        age_max: 65,
        income_max: "above-1000000",
        gender_specific: "all",
        occupations: ["business-owner", "self-employed", "other"],
        states: ["andhra-pradesh", "bihar", "delhi", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 8,
        name: "Atal Pension Yojana",
        description: "Pension scheme focused on the unorganised sector workers providing guaranteed minimum pension.",
        eligibility: "Citizens aged 18-40 years with bank account and Aadhaar",
        category: "Pension & Retirement",
        apply_link: "https://npscra.nsdl.co.in/",
        age_min: 18,
        age_max: 40,
        income_max: "500000-1000000",
        gender_specific: "all",
        occupations: ["private-employee", "self-employed", "business-owner", "farmer", "other"],
        states: ["andhra-pradesh", "bihar", "delhi", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 9,
        name: "Stand Up India Scheme",
        description: "Facilitates bank loans between ₹10 lakh to ₹1 crore to at least one SC/ST and one woman entrepreneur per bank branch.",
        eligibility: "SC/ST and women entrepreneurs aged 18 years and above",
        category: "Women Empowerment",
        apply_link: "https://www.standupmitra.in/",
        age_min: 18,
        age_max: 65,
        income_max: "above-1000000",
        gender_specific: "female",
        occupations: ["business-owner", "self-employed", "unemployed", "other"],
        states: ["andhra-pradesh", "bihar", "delhi", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 10,
        name: "Pradhan Mantri Fasal Bima Yojana",
        description: "Crop insurance scheme providing financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
        eligibility: "All farmers growing notified crops in notified areas during the season",
        category: "Agriculture",
        apply_link: "https://pmfby.gov.in/",
        age_min: 18,
        age_max: 70,
        income_max: "500000-1000000",
        gender_specific: "all",
        occupations: ["farmer"],
        states: ["andhra-pradesh", "bihar", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 11,
        name: "National Rural Employment Guarantee Act (MGNREGA)",
        description: "Provides at least 100 days of guaranteed wage employment in a financial year to every household in rural areas.",
        eligibility: "Adult members of rural households willing to do unskilled manual work",
        category: "Employment",
        apply_link: "https://nrega.nic.in/",
        age_min: 18,
        age_max: 65,
        income_max: "below-50000",
        gender_specific: "all",
        occupations: ["unemployed", "farmer", "other"],
        states: ["andhra-pradesh", "bihar", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      },
      {
        id: 12,
        name: "Pradhan Mantri Jan Aushadhi Yojana",
        description: "Provides quality medicines at affordable prices through special kendra (stores)",
        eligibility: "All citizens seeking affordable generic medicines",
        category: "Healthcare",
        apply_link: "https://janaushadhi.gov.in/",
        age_min: 0,
        age_max: 100,
        income_max: "500000-1000000",
        gender_specific: "all",
        occupations: ["farmer", "unemployed", "self-employed", "private-employee", "retired", "other"],
        states: ["andhra-pradesh", "bihar", "delhi", "gujarat", "haryana", "karnataka", "kerala", "maharashtra", "punjab", "rajasthan", "tamil-nadu", "uttar-pradesh", "west-bengal"]
      }
    ];
  }

  async getAllSchemes(): Promise<GovernmentScheme[]> {
    return [...this.schemes];
  }

  async findMatchingSchemes(profile: SchemeMatchRequest): Promise<GovernmentScheme[]> {
    return this.schemes.filter(scheme => {
      // Age criteria
      if (scheme.age_min !== undefined && profile.age < scheme.age_min) return false;
      if (scheme.age_max !== undefined && profile.age > scheme.age_max) return false;

      // Gender criteria
      if (scheme.gender_specific && scheme.gender_specific !== "all" && 
          scheme.gender_specific !== profile.gender) return false;

      // Income criteria
      if (scheme.income_max && !this.matchesIncomeRange(profile.income, scheme.income_max)) return false;

      // Occupation criteria
      if (scheme.occupations && !scheme.occupations.includes(profile.occupation)) return false;

      // State criteria
      if (scheme.states && !scheme.states.includes(profile.state)) return false;

      return true;
    });
  }

  private matchesIncomeRange(userIncome: string, schemeMaxIncome: string): boolean {
    const incomeRanking = {
      "below-50000": 1,
      "50000-200000": 2,
      "200000-500000": 3,
      "500000-1000000": 4,
      "above-1000000": 5
    };

    return incomeRanking[userIncome as keyof typeof incomeRanking] <= 
           incomeRanking[schemeMaxIncome as keyof typeof incomeRanking];
  }

  async saveContactForm(contact: ContactForm): Promise<void> {
    this.contactForms.push({
      ...contact,
    });
  }
}

export const storage = new MemStorage();
