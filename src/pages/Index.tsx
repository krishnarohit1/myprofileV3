import { useActiveSection } from '@/hooks/useActiveSection';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExtracurricularSection from '@/components/ExtracurricularSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navigation activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExtracurricularSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
