import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-soft stagger-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        {/* Additional depth layers for light mode */}
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-orange-400/8 dark:bg-orange-400/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(180,130,30,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(180,130,30,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(218,165,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(218,165,32,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-subtle bg-secondary/50 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to Opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-slide-up">
            <span className="text-foreground">Uddesh Kumar</span>
            <br />
            <span className="text-gradient-gold">Gupta</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 animate-slide-up stagger-1">
            Risk & Financial Analyst
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up stagger-2">
            1+ year of hands-on experience in risk assessment, internal controls, MIS reporting, 
            and financial analysis. Proficient in Excel, Power BI, and Python.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-slide-up stagger-3">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Jaipur, Rajasthan</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up stagger-4">
            <Button variant="hero" size="xl" asChild>
              <a href="/Uddesh_Resume.pdf" download="Uddesh_Kumar_Gupta_Resume.pdf">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToContact}>
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://linkedin.com/in/uddesh-gupta" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToExperience}
            className="animate-float text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
            <span className="text-sm mt-2 block">Explore</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
