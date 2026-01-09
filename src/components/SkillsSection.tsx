import { 
  Shield, 
  TrendingUp, 
  BarChart3, 
  Users,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Risk & Controls",
    icon: Shield,
    skills: [
      "Risk Assessment",
      "Internal Controls",
      "Process Controls",
      "Compliance Tracking",
      "Risk Reporting",
      "Variance Analysis",
      "Audit Support",
      "MIS Reporting"
    ]
  },
  {
    title: "Financial Analysis",
    icon: TrendingUp,
    skills: [
      "Corporate Finance",
      "Budgeting & Forecasting",
      "Financial Reporting",
      "Credit Analysis",
      "Cash Flow Analysis",
      "Financial Modeling"
    ]
  },
  {
    title: "Analytics & Tools",
    icon: BarChart3,
    skills: [
      "Excel (Advanced)",
      "Power BI",
      "DAX",
      "Python (Pandas)",
      "Dashboarding",
      "Data Cleaning"
    ]
  },
  {
    title: "Business Support",
    icon: Users,
    skills: [
      "Process Optimization",
      "Stakeholder Coordination",
      "Vendor Management",
      "Client Relations"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(218,165,32,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(218,165,32,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive toolkit for financial analysis and risk management
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-card p-6 rounded-xl border border-gold-subtle hover:border-primary/40 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill, sIndex) => (
                    <li key={sIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
