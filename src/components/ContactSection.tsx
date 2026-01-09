import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(218,165,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(218,165,32,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Seeking entry-level Risk Analyst / Financial Analyst roles in structured consulting or corporate environments.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a
              href="mailto:uddesh.gupta.finance@gmail.com"
              className="group bg-gradient-card p-6 rounded-xl border border-gold-subtle hover:border-primary/40 transition-all duration-300 hover:shadow-lg flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium text-sm">uddesh.gupta.finance@gmail.com</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
            </a>

            <a
              href="tel:+919905040021"
              className="group bg-gradient-card p-6 rounded-xl border border-gold-subtle hover:border-primary/40 transition-all duration-300 hover:shadow-lg flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 9905040021</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/uddesh-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-card p-6 rounded-xl border border-gold-subtle hover:border-primary/40 transition-all duration-300 hover:shadow-lg flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground font-medium">linkedin.com/in/uddesh-gupta</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
            </a>

            <div className="group bg-gradient-card p-6 rounded-xl border border-gold-subtle flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>

          <Button variant="hero" size="xl" asChild>
            <a href="mailto:uddesh.gupta.finance@gmail.com">
              <Mail className="w-5 h-5" />
              Send me an Email
            </a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Uddesh Kumar Gupta. All rights reserved.</p>
          <p>Built with passion for finance and analytics</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
