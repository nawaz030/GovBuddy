import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Briefcase, MapPin, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { userProfileSchema, UserProfile } from "@shared/schema";
import { matchSchemes } from "@/lib/api";

export default function ProfileForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<UserProfile>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: "",
      age: undefined,
      gender: undefined,
      income: undefined,
      occupation: undefined,
      state: undefined,
      city: "",
    },
  });

  const matchSchemesMutation = useMutation({
    mutationFn: matchSchemes,
    onSuccess: (data) => {
      // Store results in sessionStorage for the results page
      sessionStorage.setItem('matchedSchemes', JSON.stringify(data));
      setLocation('/results');
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to find matching schemes. Please try again.",
        variant: "destructive",
      });
      console.error('Error matching schemes:', error);
    },
  });

  const onSubmit = (data: UserProfile) => {
    matchSchemesMutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tell Us About Yourself</h2>
          <p className="text-lg text-gray-600">
            Provide your details to find government schemes that match your profile
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div className="border-b border-gray-200 pb-6">
                  <CardHeader className="px-0 pb-6">
                    <CardTitle className="flex items-center text-xl">
                      <User className="mr-2 h-5 w-5 text-blue-600" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age *</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="Enter your age" 
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || undefined)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="income"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Annual Income (₹) *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Income Range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="below-50000">Below ₹50,000</SelectItem>
                              <SelectItem value="50000-200000">₹50,000 - ₹2,00,000</SelectItem>
                              <SelectItem value="200000-500000">₹2,00,000 - ₹5,00,000</SelectItem>
                              <SelectItem value="500000-1000000">₹5,00,000 - ₹10,00,000</SelectItem>
                              <SelectItem value="above-1000000">Above ₹10,00,000</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="border-b border-gray-200 pb-6">
                  <CardHeader className="px-0 pb-6">
                    <CardTitle className="flex items-center text-xl">
                      <Briefcase className="mr-2 h-5 w-5 text-blue-600" />
                      Professional Information
                    </CardTitle>
                  </CardHeader>
                  
                  <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Occupation *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Occupation" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="farmer">Farmer</SelectItem>
                            <SelectItem value="business-owner">Business Owner</SelectItem>
                            <SelectItem value="government-employee">Government Employee</SelectItem>
                            <SelectItem value="private-employee">Private Employee</SelectItem>
                            <SelectItem value="self-employed">Self Employed</SelectItem>
                            <SelectItem value="unemployed">Unemployed</SelectItem>
                            <SelectItem value="retired">Retired</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Location Information */}
                <div>
                  <CardHeader className="px-0 pb-6">
                    <CardTitle className="flex items-center text-xl">
                      <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                      Location Information
                    </CardTitle>
                  </CardHeader>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select State" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                              <SelectItem value="bihar">Bihar</SelectItem>
                              <SelectItem value="delhi">Delhi</SelectItem>
                              <SelectItem value="gujarat">Gujarat</SelectItem>
                              <SelectItem value="haryana">Haryana</SelectItem>
                              <SelectItem value="karnataka">Karnataka</SelectItem>
                              <SelectItem value="kerala">Kerala</SelectItem>
                              <SelectItem value="maharashtra">Maharashtra</SelectItem>
                              <SelectItem value="punjab">Punjab</SelectItem>
                              <SelectItem value="rajasthan">Rajasthan</SelectItem>
                              <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                              <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                              <SelectItem value="west-bengal">West Bengal</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 text-lg transition-all transform hover:scale-[1.02] shadow-lg"
                    disabled={matchSchemesMutation.isPending}
                  >
                    {matchSchemesMutation.isPending ? (
                      <>Finding Schemes...</>
                    ) : (
                      <>
                        <Search className="mr-2 h-5 w-5" />
                        Find Matching Schemes
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
