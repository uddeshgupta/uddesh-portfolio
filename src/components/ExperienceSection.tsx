import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, ArrowRight, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Finance and Operation Analyst",
    company: "Broshni Ayurveda Technology Private Limited",
    period: "Aug 2024 - Aug 2025",
    type: "Full-time",
    highlights: [
      "Identified operational inefficiencies and recommended cost-control measures, reducing expenses by 15%",
      "Built automated MIS and GST-compliant invoicing templates using Excel",
      "Supported onboarding and management of 50+ B2B clients",
      "Assisted senior management with financial reporting and forecasting"
    ]
  },
  {
    title: "Research Intern",
    company: "Unstop",
    period: "Sept 2025 - Nov 2025",
    type: "Internship",
    highlights: [
      "Analyzed 500+ entry-level finance and risk job descriptions",
      "Built structured compensation benchmarks using external datasets",
      "Contributed to internal market research reports"
    ]
  },
  {
    title: "Finance and Operation Intern",
    company: "Bfast Services",
    period: "May 2025 - July 2025",
    type: "Internship",
    highlights: [
      "Worked directly with Co-Founder (IIT Delhi alumnus)",
      "Reduced logistics RTO from 12% to 7% via vendor management protocol",
      "Maintained 95% critical issue resolution within 24 hours"
    ]
  },
  {
    title: "Finance and Operation Intern",
    company: "CarLust Automotive Private Limited",
    period: "May 2024 - Aug 2024",
    type: "Internship",
    highlights: [
      "Improved monthly cash flow by approximately ₹50,000",
      "Achieved 95% client satisfaction score",
      "Assisted in internal reporting and reconciliations"
    ]
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Building expertise in finance, risk analysis, and operational efficiency
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-gradient-card rounded-2xl border border-gold-subtle hover:border-primary/40 transition-all duration-500 hover:shadow-xl overflow-hidden">
                  {/* Header */}
                  <div className="p-6 pb-4 border-b border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Building2 className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 md:flex-col md:items-end">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-4">
                    <ul className="grid gap-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li 
                          key={hIndex} 
                          className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
