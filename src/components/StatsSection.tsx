import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Award, Target, BarChart3, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 1,
    suffix: "+",
    label: "Years Experience",
    description: "In Risk & Finance"
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "B2B Clients",
    description: "Successfully Onboarded"
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: "%",
    label: "Cost Reduction",
    description: "Operational Efficiency"
  },
  {
    icon: Target,
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistent Excellence"
  },
  {
    icon: BarChart3,
    value: 500,
    suffix: "+",
    label: "Data Points Analyzed",
    description: "Job Market Research"
  },
  {
    icon: Award,
    value: 4,
    suffix: "+",
    label: "Certifications",
    description: "Professional Growth"
  }
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-gradient-gold">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(218,165,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(218,165,32,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Impact & Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Measurable results delivered across finance and operations roles
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="bg-gradient-card p-6 rounded-xl border border-gold-subtle hover:border-primary/40 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-extrabold mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </div>
                  
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
