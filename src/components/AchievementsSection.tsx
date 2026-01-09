import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, TrendingDown, Wallet, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Letters of Recommendation",
    description: "Received LORs from Prof. Trilok Kumar Jain (Dean), Mr. Aniket (Co-founder, Bfast Services), and Mr. Rakesh Rao (Mentor, iStart Rajasthan, Bhamashah Techno Hub Jaipur)",
    category: "Recognition"
  },
  {
    icon: Trophy,
    title: "Event Organization",
    description: "Successfully organized major university events including Tech Fiesta, Chess Competition, and Ad-Mad Show",
    category: "Leadership"
  },
  {
    icon: TrendingDown,
    title: "RTO Reduction at Bfast Services",
    description: "Reduced Return-to-Origin percentage from 12% to 7% during internship, improving delivery efficiency",
    category: "Operations"
  },
  {
    icon: Wallet,
    title: "Cost Optimization at Broshni Ayurveda",
    description: "Achieved 15% reduction in operational expenses through strategic financial management",
    category: "Finance"
  },
  {
    icon: Users,
    title: "Cash Flow Improvement at CarLust",
    description: "Improved monthly cash flow by approximately ₹50,000 during internship through efficient financial operations",
    category: "Finance"
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(218,165,32,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(218,165,32,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Key Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Milestones and recognitions from my professional journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                <div className="flex gap-4 md:gap-6 items-start bg-gradient-card p-6 rounded-xl border border-gold-subtle hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                  
                  {/* Number indicator */}
                  <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-muted items-center justify-center">
                    <span className="text-sm font-bold text-muted-foreground">
                      {index + 1}
                    </span>
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

export default AchievementsSection;
