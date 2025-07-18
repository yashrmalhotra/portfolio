import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setForm({ name: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(form);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let's discuss how we can work together to build something amazing
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center text-white">
              <div className="bg-blue-600 p-4 rounded-lg mr-6">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a href="mailto:yashrmalhotra11@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  yashrmalhotra11@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center text-white">
              <div className="bg-blue-600 p-4 rounded-lg mr-6">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-slate-300">Delhi, India</p>
              </div>
            </div>
            
            <div className="flex items-center text-white">
              <div className="bg-blue-600 p-4 rounded-lg mr-6">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Response Time</h3>
                <p className="text-slate-300">Usually within 24 hours</p>
              </div>
            </div>
            
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white transition-colors">
                  <SiLinkedin className="h-6 w-6" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg text-white transition-colors">
                  <SiGithub className="h-6 w-6" />
                </a>
                <a href="mailto:yashrmalhotra11@gmail.com" className="bg-red-600 hover:bg-red-700 p-3 rounded-lg text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
