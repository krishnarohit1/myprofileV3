import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo & Description */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">Rohit Krishna</div>
            <p className="text-sm text-muted-foreground">
              Cloud & DevOps Engineer crafting scalable solutions
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/krishnarohit1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-krishna-5702ab230/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rohitkrishna126@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Rohit Krishna. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-end gap-1">
              
            </p>
          </div>
        </div>

        {/* Bottom divider with additional info */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Rohit Krishna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;