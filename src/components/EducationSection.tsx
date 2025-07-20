import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Specialization: Cloud Computing | CMR University, Bangalore",
      percentage: "79%",
      duration: "2022 - 2025",
      icon: GraduationCap
    }
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      credentialId: "570DAAD846FFBA43",
      issuer: "Microsoft",
      icon: Award
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      credentialId: "via Coursera",
      issuer: "Amazon Web Services",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span> & Certifications
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic background and professional certifications
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-accent-gradient text-center">Education</h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <edu.icon className="h-12 w-12 text-primary mt-2" />
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="text-primary font-semibold">{edu.percentage}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-accent-gradient text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card group hover:scale-105 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <cert.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-xs text-primary">Credential ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;