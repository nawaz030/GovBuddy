import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  UserCheck, 
  Database, 
  Rocket,
  Search
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Government Schemes
              <span className="block text-orange-500">That Match Your Profile</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              GovBuddy helps Indian citizens find government schemes and benefits tailored to their age, income, occupation, and state. Get access to opportunities you deserve.
            </p>
            <Link href="/form">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105 shadow-lg">
                <Search className="mr-2 h-5 w-5" />
                Find My Schemes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GovBuddy?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make it easy to discover and apply for government schemes that you're eligible for
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-blue-50 border-blue-100">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Matching</h3>
                <p className="text-gray-600">Get schemes matched to your exact profile and eligibility criteria</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-orange-50 border-orange-100">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Database</h3>
                <p className="text-gray-600">Access to hundreds of government schemes across all states</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-green-50 border-green-100">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Easy Application</h3>
                <p className="text-gray-600">Direct links to official application portals and processes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
