import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, ContactForm } from "@shared/schema";
import { submitContactForm } from "@/lib/api";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: undefined,
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error('Error submitting contact form:', error);
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Have questions or suggestions? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">support@govbuddy.in</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">1800-123-4567 (Toll Free)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Support Hours</p>
                  <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="scheme-suggestion">Suggest a Scheme</SelectItem>
                            <SelectItem value="technical-issue">Technical Issue</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us how we can help you..."
                            className="resize-none"
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 transition-all transform hover:scale-[1.02]"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
