import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import profileImage from '/lovable-uploads/3a55c090-eac2-4b43-b429-b1435837b5c3.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="floating-orb w-64 h-64 bg-primary/20 top-10 left-10 animate-float"></div>
        <div className="floating-orb w-48 h-48 bg-accent/20 top-1/2 right-20 animate-float-delayed"></div>
        <div className="floating-orb w-32 h-32 bg-primary/30 bottom-20 left-1/3 animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in-left">
          <div className="space-y-4">
            <p className="text-primary font-medium text-lg">✨ Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="text-gradient">ROHIT KRISHNA</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Cloud Computing Specialist
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl">
            Passionate about leveraging cloud computing expertise to design, deploy, and optimize scalable solutions. 
            Open to collaborating on innovative{' '}
            <span className="text-accent-gradient">cloud-native and DevOps projects</span>.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
              &lt;/&gt; Cloud & DevOps
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">
              ⚡ Infrastructure
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary hover-scale"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary hover-scale"
              asChild
            >
              <a 
                href="https://drive.google.com/uc?export=download&id=1WGS4yx7QbnAOSuLuUNGYghpsEM5Jy6Xb" 
                download
                className="inline-flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-gradient">BCA</div>
              <div className="text-sm text-muted-foreground">Cloud Computing</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-gradient">20+</div>
              <div className="text-sm text-muted-foreground">DevOps & Cloud Projects</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-gradient">AZ-900</div>
              <div className="text-sm text-muted-foreground">Azure Certified</div>
            </div>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative">
            {/* Profile image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full p-1">
                <div className="w-full h-full bg-background rounded-full p-2">
                  <img
                    src={profileImage}
                    alt="Rohit Krishna"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full hero-glow -z-10"></div>
            </div>

            {/* Status badge */}
            <div className="absolute bottom-4 right-4 bg-card border border-border/50 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;