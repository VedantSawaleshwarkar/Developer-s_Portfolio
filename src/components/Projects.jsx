import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Real Time Object Detection",
    period: "July 2025 - August 2025",
    link: "https://real-time-object-detection.netlify.app/",
    description: "A web-based real-time object detection application using CNNs with impressive accuracy and performance.",
    highlights: [
      "Achieved ~92% detection accuracy on benchmark datasets",
      "Optimized inference pipeline delivering 15–20 FPS with <200ms latency",
      "Multi-object recognition supporting 80+ COCO classes",
      "Built with OpenCV and TensorFlow.js"
    ],
    tags: ["Python", "TensorFlow.js", "OpenCV", "Computer Vision", "CNN"]
  },
  {
    title: "ByteFest 2K25",
    period: "May 2025 - June 2025",
    link: "https://bytefest2k25.netlify.app",
    description: "A comprehensive event management platform for a technical festival with 1,500+ attendees.",
    highlights: [
      "Handled 2,000+ daily visitors with 40% faster page load times",
      "Managed data for 1,500+ attendees with 100% accuracy",
      "Coordinated 20+ events with 99.9% uptime",
      "Achieved 20% increase in participant engagement"
    ],
    tags: ["Web Development", "Data Management", "Event Tech", "Full Stack"]
  }
  ,
  {
    title: "IPL Data Analysis (Power BI)",
    period: "2025",
    link: "#",
    description:
      "Interactive Power BI dashboard analyzing IPL seasons with insights on team performance, player stats, and venue impact.",
    highlights: [
      "Modeled data with relationships and created DAX measures for KPIs (Strike Rate, Economy, Win %)",
      "Built slicers and drill-through pages for team, player, and season-wise exploration",
      "Performed data cleaning and shaping using Power Query (ETL)",
      "Published and shared an interactive report with bookmarks and custom visuals"
    ],
    tags: ["Power BI", "DAX", "Data Analysis", "Data Visualization", "ETL"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-anchor py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my notable work and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:glow-purple transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:glow-cyan transition-all duration-300 rounded-lg"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                
                <p className="text-foreground/80 mb-6">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Actions removed: Live Demo button */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
