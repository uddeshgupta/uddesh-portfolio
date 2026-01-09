import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institute: "Suresh Gyan Vihar University, Jaipur",
    year: "2023 – 2026",
    score: "8.96 CGPA",
    current: true
  },
  {
    degree: "Class XII – CBSE",
    institute: "Kendriya Vidyalaya, Bokaro",
    year: "2023",
    score: "83%"
  },
  {
    degree: "Class X – CBSE",
    institute: "Kendriya Vidyalaya, Bokaro",
    year: "2021",
    score: "88%"
  }
];

const certifications = [
  "Generative AI Fundamentals – IBM SkillsBuild",
  "Corporate Finance Fundamentals – Corporate Finance Institute",
  "Microsoft Power BI – Great Learning",
  "SEBI Exam Preparation – NISM (Ongoing)"
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">Education & Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-card p-5 rounded-xl border border-gold-subtle hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    {edu.current && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{edu.institute}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{edu.year}</span>
                    <span className="text-primary font-medium">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="bg-gradient-card p-6 rounded-xl border border-gold-subtle">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
