import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="section-anchor min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-80 sm:w-96 h-80 sm:h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-float motion-reduce:animate-none" />
        <div className="absolute w-80 sm:w-96 h-80 sm:h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float motion-reduce:animate-none" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full overflow-hidden ring-2 ring-primary/30 glass-card glow-cyan">
            <img src="/Pass.jpg" alt="Vedant profile" className="h-full w-full object-cover" loading="eager" />
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-primary text-lg md:text-xl font-semibold mb-2 animate-slide-in-left">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient animate-slide-in-right">
            Vedant Sawaleshwarkar
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science Student | Full Stack Developer | Tech Enthusiast
          </p>
        </div>

        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          Detail-oriented Computer Science student with hands-on experience in web development, 
          server infrastructure, and event tech management. Passionate about solving real-world 
          problems through technology and mentoring peers in collaborative environments.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-12">
          <Button
            className="rounded-full px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold tracking-wide text-foreground glass-card ring-1 ring-primary/30 shadow-sm bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 hover:glow-cyan transition-all duration-300 hover:scale-105"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                // Fallback to hash change if element not found
                window.location.hash = "contact";
              }
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <a href="#projects">
            <Button variant="outline" className="hover:glow-purple transition-all duration-300 hover:scale-105">
              View Projects
            </Button>
          </a>
          <a href={`${import.meta.env.BASE_URL}Vedant_Resume.pdf`} download="Vedant_Resume.pdf">
            <Button variant="outline" className="hover:glow-pink transition-all duration-300 hover:scale-105">
              <FileDown className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Stat chips */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">Full Stack</span>
          <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm border border-secondary/20">ML/AI</span>
          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm border border-accent/20">2+ Projects</span>
        </div>

        <div className="flex gap-6 justify-center">
          <a 
            href="https://linkedin.com/in/vedant-sawaleshwarkar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-lg hover:glow-cyan transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/vedantsawaleshwarkar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-lg hover:glow-purple transition-all duration-300 hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="mailto:vedantsawaleshwarkar@gmail.com"
            className="p-3 glass-card rounded-lg hover:glow-pink transition-all duration-300 hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="tel:8010498335"
            className="p-3 glass-card rounded-lg hover:glow-cyan transition-all duration-300 hover:scale-110"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
