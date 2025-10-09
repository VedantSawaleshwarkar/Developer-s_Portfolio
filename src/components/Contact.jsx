import { Mail, Phone, MapPin, Linkedin, Github, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/sonner";

const Contact = () => {
  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} copied to clipboard`);
    } catch (e) {
      toast.error(`Failed to copy ${label}`);
    }
  };

  return (
    <section id="contact" className="section-anchor py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-0 left-1/4 animate-float" />
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl bottom-0 right-1/4 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl top-1/2 right-1/3 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Email Card */}
          <a
            href="mailto:vedantsawaleshwarkar@gmail.com"
            className="group relative glass-card p-6 rounded-2xl hover:glow-cyan transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300 glow-cyan">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-semibold group-hover:text-primary transition-colors">vedantsawaleshwarkar@gmail.com</p>
              </div>
              <button
                type="button"
                aria-label="Copy email"
                onClick={(e) => { e.preventDefault(); copy("vedantsawaleshwarkar@gmail.com", "Email"); }}
                className="p-2 rounded-lg glass-card hover:glow-cyan transition-all duration-300"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:8010498335"
            className="group relative glass-card p-6 rounded-2xl hover:glow-purple transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-4">
              <div className="p-4 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300 glow-purple">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-semibold group-hover:text-secondary transition-colors">+91 8010498335</p>
              </div>
              <button
                type="button"
                aria-label="Copy phone"
                onClick={(e) => { e.preventDefault(); copy("+918010498335", "Phone"); }}
                className="p-2 rounded-lg glass-card hover:glow-purple transition-all duration-300"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </a>

          {/* Location Card moved to bottom */}

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/vedant-sawaleshwarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative glass-card p-6 rounded-2xl hover:glow-cyan transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300 glow-cyan">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="font-semibold group-hover:text-primary transition-colors">vedant-sawaleshwarkar</p>
              </div>
            </div>
          </a>
          {/* GitHub Card (paired with LinkedIn) */}
          <a
            href="https://github.com/vedantsawaleshwarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative glass-card p-6 rounded-2xl hover:glow-purple transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-4">
              <div className="p-4 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300 glow-purple">
                <Github className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                <p className="font-semibold group-hover:text-secondary transition-colors">vedantsawaleshwarkar</p>
              </div>
            </div>
          </a>
        </div>

        {/* Location Card - Full Width */}
        <div
          className="group relative glass-card p-6 rounded-2xl hover:glow-pink transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden block mb-8"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex flex-col items-center justify-center gap-2 text-center min-h-[96px]">
            <div className="p-4 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300 glow-pink">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="font-semibold group-hover:text-accent transition-colors">Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            className="rounded-full px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold tracking-wide text-foreground glass-card ring-1 ring-primary/30 shadow-sm bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 hover:glow-cyan transition-all duration-300 hover:scale-105 w-full"
            onClick={() => window.location.href = 'mailto:vedantsawaleshwarkar@gmail.com'}
          >
            <Mail className="mr-2 h-4 w-4" />
            Send me an email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
