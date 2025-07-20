import { Button } from '@/components/ui/button';
import { Code, Zap, Users, Lightbulb, MessageCircle, Puzzle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-accent-gradient">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Passionate about leveraging cloud computing expertise to design, deploy, and optimize scalable solutions. 
                I'm currently pursuing my Bachelor of Computer Science (Cloud Computing) at CMR University with a 79% score. 
                Dedicated to supporting innovative projects and advancing cloud technologies through hands-on experience.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                My experience includes hands-on work with AWS and Azure cloud platforms, implementing CI/CD pipelines with Jenkins and GitLab, 
                and containerization with Docker. I'm passionate about automation and believe in the power of cloud technologies 
                to transform development workflows and business solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I'm always eager to learn new technologies, collaborate on innovative projects, and 
                share knowledge with the developer community.
              </p>
            </div>

            {/* Education */}
            <div className="glass-card">
              <h4 className="text-lg font-semibold mb-2">Education</h4>
              <div className="space-y-2">
                <div className="font-medium">Bachelor of Computer Science (Cloud Computing)</div>
                <div className="text-sm text-muted-foreground">CMR University • 2020 - 2025</div>
                <div className="text-sm text-accent">79% • Bangalore, India</div>
              </div>
            </div>
          </div>

          {/* Right side - Skills & Qualities */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-accent-gradient">What I Bring</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card group hover:scale-105">
                <Code className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Clean Code</h4>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, scalable infrastructure as code with modern best practices
                </p>
              </div>

              <div className="glass-card group hover:scale-105">
                <Zap className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Automation</h4>
                <p className="text-sm text-muted-foreground">
                  Leveraging automation tools for continuous integration and deployment
                </p>
              </div>

              <div className="glass-card group hover:scale-105">
                <Lightbulb className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Fast Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Quickly adapting to new technologies and cloud platforms
                </p>
              </div>

              <div className="glass-card group hover:scale-105">
                <Users className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Team Player</h4>
                <p className="text-sm text-muted-foreground">
                  Collaborative approach with strong communication skills
                </p>
              </div>

              <div className="glass-card group hover:scale-105">
                <MessageCircle className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Communication Skills</h4>
                <p className="text-sm text-muted-foreground">
                  Understanding requirements and delivering value-driven solutions
                </p>
              </div>

              <div className="glass-card group hover:scale-105">
                <Puzzle className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">
                  Innovative approaches to complex infrastructure challenges
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beyond Code section */}
        <div className="mt-16 text-center glass-card">
          <h3 className="text-2xl font-semibold mb-4 text-accent-gradient">Beyond Code</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            When I'm not deploying applications or managing infrastructure, you'll find me exploring 
            the latest cloud technologies, contributing to open-source DevOps tools, or sharing 
            knowledge through technical blogs and community meetups. I believe in continuous learning 
            and giving back to the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;