import { Timeline } from "antd";
import { Briefcase, Code, Database, Users } from "lucide-react";

const experiences = [
  {
    title: "Senior Project Coordinator & Core Tech Member",
    company: "ByteFest",
    location: "Ambajogai, Maharashtra, India",
    period: "May 2025 - June 2025",
    type: "On-site",
    icon: <Briefcase className="h-5 w-5" />,
    responsibilities: [
      "Website Developer – Designed and built a fast, responsive, and dynamic website",
      "Data Manager – Ensured secure handling of participant data and registrations",
      "Core Organizer – Involved in full planning and execution of the fest"
    ]
  },
  {
    title: "Data Server Manager",
    company: "Lincoln International School",
    location: "Latur, Maharashtra",
    period: "March 2025 - June 2025",
    type: "On-site",
    icon: <Database className="h-5 w-5" />,
    responsibilities: [
      "Managed and maintained data server infrastructure",
      "Ensured data security and integrity",
      "Optimized database performance"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-anchor py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 rounded-2xl hover:glow-cyan transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg glow-cyan">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-primary">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-semibold mb-1">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">
                    {exp.location} · {exp.type}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
