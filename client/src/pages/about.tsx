import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, HandHeart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About GovBuddy</h2>
          <p className="text-lg text-gray-600">
            Empowering Indian citizens to discover and access government schemes
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              GovBuddy bridges the gap between Indian citizens and government welfare schemes. We believe that every citizen deserves easy access to the benefits and opportunities provided by the government.
            </p>
          </div>

          {/* Vision and How We Help */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-orange-50 border-orange-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
                <p className="text-gray-700">
                  To create a India where no eligible citizen misses out on government schemes due to lack of awareness or complex application processes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-100">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <HandHeart className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">How We Help</h4>
                <p className="text-gray-700">
                  By simplifying the discovery process and providing personalized recommendations based on your unique profile and eligibility criteria.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Smart Matching Algorithm</h4>
                    <p className="text-gray-600 text-sm">Advanced filtering based on age, income, occupation, gender, and location</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Comprehensive Database</h4>
                    <p className="text-gray-600 text-sm">Regularly updated information on central and state government schemes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Easy Application Process</h4>
                    <p className="text-gray-600 text-sm">Direct links to official portals with step-by-step guidance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Multi-language Support</h4>
                    <p className="text-gray-600 text-sm">Available in multiple Indian languages for better accessibility</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
