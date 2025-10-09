import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
    );

    navLinks.forEach((l) => {
      const el = document.getElementById(l.href.replace('#', ''));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original || "";
    }
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-gradient">
            VS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace('#','');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}

            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-lg glass-card hover:glow-cyan transition-all duration-300"
              title="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-card hover:glow-cyan transition-all duration-300"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40 animate-fade-in"
              onClick={() => setIsOpen(false)}
            />
            {/* Panel */}
            <div
              id="mobile-menu"
              className="fixed top-16 left-0 right-0 md:hidden z-50 pb-safe-bottom"
            >
              <div className="mx-4 glass-card rounded-2xl border border-border shadow-lg overflow-hidden animate-slide-in-down">
                <div className="flex flex-col py-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-base text-foreground/90 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="h-px bg-border my-1" />
                  <button
                    onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light'); setIsOpen(false); }}
                    className="px-4 py-3 text-left text-foreground/90 hover:bg-secondary/10 transition-colors"
                  >
                    {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
;

export default Navbar;
