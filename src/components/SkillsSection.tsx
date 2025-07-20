import { 
  Cloud, 
  Container, 
  Settings, 
  GitBranch, 
  Monitor, 
  Server,
  Database,
  Shield,
  Workflow
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Azure", "Google Cloud"],
      color: "text-blue-500"
    },
    {
      title: "Containerization",
      icon: Container,
      skills: ["Docker", "Kubernetes", "Container Registry"],
      color: "text-purple-500"
    },
    {
      title: "Infrastructure as Code",
      icon: Settings,
      skills: ["Terraform", "Ansible", "CloudFormation"],
      color: "text-green-500"
    },
    {
      title: "CI/CD",
      icon: GitBranch,
      skills: ["Jenkins", "GitHub Actions", "GitLab CI"],
      color: "text-orange-500"
    },
    {
      title: "Monitoring & Logging",
      icon: Monitor,
      skills: ["Prometheus", "Grafana", "ELK Stack"],
      color: "text-red-500"
    },
    {
      title: "Operating Systems",
      icon: Server,
      skills: ["Linux", "Ubuntu", "CentOS"],
      color: "text-cyan-500"
    },
    {
      title: "Programming",
      icon: Database,
      skills: ["Python", "Bash", "YAML"],
      color: "text-yellow-500"
    },
    {
      title: "Security",
      icon: Shield,
      skills: ["Security Scanning", "Compliance", "IAM"],
      color: "text-indigo-500"
    }
  ];

  const primarySkills = [
    "Python", "Java", "C", "AWS", "Azure", "Docker", "Jenkins", 
    "GitLab", "GitHub Actions", "Terraform", "Kubernetes", "CI/CD", 
    "CloudWatch", "Jira", "Confluence", "Bash scripting", "Linux"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Technologies
          </h2>
          <p className="text-xl text-muted-foreground">
            Tools and technologies I use to build scalable cloud solutions
          </p>
        </div>

        {/* Skills Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card group hover:scale-105 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <category.icon className={`h-12 w-12 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform`} />
              <h3 className="font-semibold mb-3">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-sm text-muted-foreground bg-background/50 rounded-full px-3 py-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Primary Skills List */}
        <div className="glass-card text-center">
          <h3 className="text-2xl font-semibold mb-8 text-accent-gradient">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {primarySkills.map((skill, index) => (
              <div
                key={skill}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card text-center group hover:scale-105">
            <div className="text-4xl font-bold text-gradient mb-2">79%</div>
            <div className="text-muted-foreground">Academic Score</div>
          </div>
          <div className="glass-card text-center group hover:scale-105">
            <div className="text-4xl font-bold text-gradient mb-2">20+</div>
            <div className="text-muted-foreground">GitHub Projects</div>
          </div>
          <div className="glass-card text-center group hover:scale-105">
            <div className="text-4xl font-bold text-gradient mb-2">2+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;