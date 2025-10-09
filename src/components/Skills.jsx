import { useState, useMemo } from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const skillCategories = {
  "Languages": [
    "Python", "C", "C++", "JavaScript", "HTML5", "CSS3"
  ],
  "Frameworks & Libraries": [
    "Flask", "React", "TensorFlow.js", "OpenCV"
  ],
  "Tools & Technologies": [
    "Git/GitHub", "REST APIs", "Linux", "Operating Systems"
  ],
  "Specializations": [
    "Machine Learning", "AI", "NLP", "Computer Vision",
    "Data Analysis", "System Design"
  ]
}
;

const neonColors = [
  "hover:glow-cyan hover:border-primary",
  "hover:glow-purple hover:border-secondary",
  "hover:glow-pink hover:border-accent",
];
const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => ["All", ...Object.keys(skillCategories)], []);

  const filteredMap = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = {};
    for (const [cat, skills] of Object.entries(skillCategories)) {
      result[cat] = q
        ? skills.filter((s) => s.toLowerCase().includes(q))
        : skills;
    }
    return result;
  }, [query]);

  const allFiltered = useMemo(() => Object.values(filteredMap).flat(), [filteredMap]);

  const renderPill = (skill, index) => (
    <Tooltip key={skill}>
      <TooltipTrigger asChild>
        <button
          className={`
            px-3 py-2 rounded-full border glass-card text-sm text-foreground
            transition-all duration-300 ease-out
            ${neonColors[index % neonColors.length]}
            ${hoveredSkill === skill ? 'scale-105' : 'hover:scale-105'}
            focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
          `}
          onMouseEnter={() => setHoveredSkill(skill)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          {skill}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <span>{skill}</span>
      </TooltipContent>
    </Tooltip>
  );

  return (
    <section id="skills" className="section-anchor py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">My technical arsenal and expertise</p>
        </div>

        {/* Controls: Tabs */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = cat === "All" ? allFiltered.length : filteredMap[cat].length;
              const active = selected === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-300 ${
                    active ? 'bg-primary/20 text-primary border-primary/30' : 'glass-card hover:bg-primary/10'
                  }`}
                >
                  {cat} <span className="ml-1 text-foreground/60">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        <TooltipProvider>
          {/* Content: All or single category */}
          {selected === "All" ? (
            <div className="animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {allFiltered.map((skill, index) => renderPill(skill, index))}
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-primary">{selected}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredMap[selected].map((skill, index) => renderPill(skill, index))}
              </div>
            </div>
          )}
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;
