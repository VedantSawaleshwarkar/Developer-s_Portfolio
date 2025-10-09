import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology - BTech",
    field: "Computer Science",
    institution: "MBES College of Engineering",
    location: "Ambajogai",
    year: "Expected December 2026",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institution: "Maharashtra State Board",
    location: "Maharashtra",
    year: "2022",
    score: "76.17%",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    location: "Maharashtra",
    year: "2020",
    score: "84.80%",
    icon: <GraduationCap className="h-6 w-6" />
  }
];

const certifications = [
  {
    title: "Python Complete Course For Python Beginners",
    platform: "Udemy",
    year: "2025"
  },
  {
    title: "Introduction to Artificial Intelligence",
    platform: "IBM",
    year: "2025"
  }
];

const Education = () => {
  return (
    <section id="education" className="section-anchor py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey and achievements
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-cyan transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg glow-cyan">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <span className="text-sm text-muted-foreground">{edu.year}</span>
                    </div>
                    {edu.field && (
                      <p className="text-lg text-primary mb-1">{edu.field}</p>
                    )}
                    <p className="text-foreground/80">
                      {edu.institution} · {edu.location}
                    </p>
                    {edu.score && (
                      <p className="text-primary font-semibold mt-2">
                        Score: {edu.score}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-secondary flex items-center gap-2">
            <Award className="h-6 w-6" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:glow-purple transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                <p className="text-foreground/80">
                  {cert.platform} · {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
