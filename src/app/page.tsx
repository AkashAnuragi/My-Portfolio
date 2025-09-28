import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import ResumeSection from '@/components/sections/resume';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
