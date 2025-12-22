import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Twitter, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@quantumbyte.io",
    subtext: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    subtext: "Mon-Fri 9AM-6PM PST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Innovation Drive",
    subtext: "San Francisco, CA 94105"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Monday - Friday",
    subtext: "9:00 AM - 6:00 PM PST"
  }
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, Suite 500",
    phone: "+1 (555) 123-4567",
    email: "sf@quantumbyte.io"
  },
  {
    city: "London",
    address: "45 Tech Lane, Floor 3",
    phone: "+44 20 7123 4567",
    email: "london@quantumbyte.io"
  },
  {
    city: "Singapore",
    address: "88 Digital Boulevard",
    phone: "+65 6123 4567",
    email: "sg@quantumbyte.io"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <SkipToContent />
      <main id="main-content" className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" /> Get in Touch
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Let's Build Something
                <span className="quantum-gradient-text block">Extraordinary Together</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? We'd love to hear about it. Reach out and let's explore 
                how we can transform your vision into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl quantum-gradient flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium">{info.details}</p>
                  <p className="text-muted-foreground text-sm mt-1">{info.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-card border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-card border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-card border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-card border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-card border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Our Offices
                </h2>
                <p className="text-muted-foreground mb-8">
                  Visit us at any of our global locations.
                </p>

                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        {office.city}
                      </h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>{office.address}</p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          {office.phone}
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          {office.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 glass-card rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-3xl p-12 text-center quantum-border">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Have Questions?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Check out our frequently asked questions or schedule a free consultation call 
                with our team to discuss your project needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  View FAQ
                </Button>
                <Button size="lg">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;
