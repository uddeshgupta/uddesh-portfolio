import { Code2, BarChart3, LineChart, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "LoanSense AI",
    subtitle: "Risk Scenario & Forecasting Analysis",
    description: "Developed forecasting and scenario analysis models to assess expense patterns and future cash requirements for budgeting and planning.",
    tech: ["Python", "Scikit-learn", "NumPy", "Financial Analysis"],
    icon: LineChart,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "FinOptix Dashboard",
    subtitle: "Forecasting and Budgeting",
    description: "Developed an Excel-based financial dashboard to support budgeting, cash-flow forecasting, and variance analysis, improving MIS reporting accuracy.",
    tech: ["Excel", "Python", "Financial Forecasting", "Data Visualization"],
    icon: BarChart3,
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Zomato Dashboard Analysis",
    subtitle: "Power BI Dashboard",
    description: "Created interactive dashboards analyzing revenue, order trends, and geographic performance across multiple cities.",
    tech: ["Power BI", "DAX", "Data Visualization"],
    icon: Code2,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "ITC Limited Analysis",
    subtitle: "Business Cycle & Earnings Analysis (FY21–FY25)",
    description: "Analyzed 5-year financial data across revenue, PAT, P/E ratios, and dividend payouts. Built a Monte Carlo simulation model projecting ₹85,000 crore revenue by FY30.",
    tech: ["Financial Analysis", "Excel", "Monte Carlo Simulation"],
    icon: Building2,
    color: "from-purple-500/20 to-pink-500/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Finance and technical projects demonstrating analytical capabilities
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-card p-6 rounded-xl border border-gold-subtle hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-2xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
