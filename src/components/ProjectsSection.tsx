import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Flask DevOps K8s",
      description: "Flask application deployment using Kubernetes with comprehensive DevOps pipeline integration and container orchestration.",
      technologies: ["Flask", "Kubernetes", "Docker", "DevOps"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      github: "https://github.com/krishnarohit1/flask-devops-k8s",
      demo: "#",
      featured: true
    },
    {
      title: "DevOps with NGINX & Docker",
      description: "Complete DevOps setup with NGINX reverse proxy, Docker containerization, and automated deployment pipeline.",
      technologies: ["NGINX", "Docker", "DevOps", "CI/CD"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      github: "https://github.com/krishnarohit1/devops-nginx-docker",
      demo: "#",
      featured: true
    },
    {
      title: "Vinteed – Food Sharing App (All in AWS)",
      description: "Full-stack food sharing application built entirely on AWS infrastructure with cloud-native architecture and scalable backend services.",
      technologies: ["AWS", "Cloud Native", "Full Stack", "Scalable"],
      image: "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=600&h=400&fit=crop",
      github: "https://github.com/krishnarohit1/Vinteed",
      demo: "#",
      featured: false
    },
    {
      title: "Terraform for DevOps",
      description: "Infrastructure as Code implementation using Terraform for automated cloud resource management and DevOps workflows.",
      technologies: ["Terraform", "IaC", "DevOps", "Cloud"],
      image: "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=600&h=400&fit=crop",
      github: "https://github.com/krishnarohit1/terraform-for-devops",
      demo: "#",
      featured: false
    },
    {
      title: "Django CI/CD Pipeline",
      description: "Automated CI/CD pipeline for Django applications with testing, deployment, and monitoring integration.",
      technologies: ["Django", "CI/CD", "Python", "Automation"],
      image: "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=600&h=400&fit=crop",
      github: "https://github.com/krishnarohit1/django-ci-cd",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Some of the projects I've worked on recently
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Over 20 DevOps and Cloud projects available on my{' '}
            <a 
              href="https://github.com/krishnarohit1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors underline"
            >
              GitHub profile
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Projects */}
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.title}
              className="glass-card group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.title}
              className="glass-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block">
            <h3 className="text-xl font-semibold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions to open-source tools.
            </p>
            <Button asChild className="btn-primary">
              <a href="https://github.com/krishnarohit1" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;