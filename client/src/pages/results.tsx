import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search, RotateCcw } from "lucide-react";
import { SchemeMatchResponse, GovernmentScheme } from "@shared/schema";

export default function Results() {
  const [results, setResults] = useState<SchemeMatchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedResults = sessionStorage.getItem('matchedSchemes');
    if (storedResults) {
      try {
        const parsedResults = JSON.parse(storedResults);
        setResults(parsedResults);
      } catch (error) {
        console.error('Error parsing stored results:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Education': 'bg-green-100 text-green-800',
      'Agriculture': 'bg-blue-100 text-blue-800',
      'Women Empowerment': 'bg-orange-100 text-orange-800',
      'Skill Development': 'bg-purple-100 text-purple-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Housing': 'bg-indigo-100 text-indigo-800',
      'Business & Entrepreneurship': 'bg-yellow-100 text-yellow-800',
      'Pension & Retirement': 'bg-gray-100 text-gray-800',
      'Employment': 'bg-teal-100 text-teal-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'Education': '🎓',
      'Agriculture': '🌱',
      'Women Empowerment': '👩',
      'Skill Development': '🔧',
      'Healthcare': '❤️',
      'Housing': '🏠',
      'Business & Entrepreneurship': '💼',
      'Pension & Retirement': '🏦',
      'Employment': '💼',
    };
    return icons[category] || '📄';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Finding schemes that match your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="min-h-screen py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-4">No Results Found</h3>
            <p className="text-gray-500 mb-6">Please fill out the profile form first to find matching schemes.</p>
            <Link href="/form">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Go to Profile Form
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (results.total === 0) {
    return (
      <div className="min-h-screen py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-4">No Matching Schemes Found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your profile information or check back later for new schemes.</p>
            <Link href="/form">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <RotateCcw className="mr-2 h-4 w-4" />
                Update Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Matching Schemes</h2>
          <p className="text-lg text-gray-600 mb-4">
            Based on your profile, here are the government schemes you're eligible for
          </p>
          <p className="text-sm text-gray-500">
            Found {results.total} matching scheme{results.total !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
          {results.schemes.map((scheme: GovernmentScheme) => (
            <Card key={scheme.id} className="hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {getCategoryIcon(scheme.category)}
                  </div>
                  <Badge className={getCategoryColor(scheme.category)}>
                    {scheme.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {scheme.name}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {scheme.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Eligibility:</h4>
                  <p className="text-sm text-gray-600">
                    {scheme.eligibility}
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                  onClick={() => window.open(scheme.apply_link, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/form">
            <Button variant="outline" className="mr-4">
              <RotateCcw className="mr-2 h-4 w-4" />
              Update Profile
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
