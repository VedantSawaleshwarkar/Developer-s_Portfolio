import { Award } from "lucide-react";

const achievements = [
  {
    icon: <Award className="h-5 w-5" />,
    title: "Naukari Campus Young Turks Round 1",
    description:
      "🏅 Achieved a 96.47% score in Naukari Campus Young Turks Round 1 of 2025 , showcasing strong aptitude and technical skills.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Certificate of Appreciation —ByteFest 2K25",
    description:
      "Developed the official website, managed 10+ events, and led the flagship hackathon.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-anchor py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Achievements</h2>
          <p className="text-muted-foreground text-lg">Highlights and recognitions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((a, idx) => (
            <div
              key={idx}
              className="glass-card p-6 md:p-8 rounded-2xl hover:glow-pink transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg glow-pink">{a.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{a.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{a.description}</p>
                  {Array.isArray(a.points) && a.points.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {a.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/80">
                          <span className="text-primary mt-1">▹</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
