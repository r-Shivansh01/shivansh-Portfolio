import LoadingScreen from "@/components/loading-screen";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HomeSection from "@/components/sections/home";
import ProjectsSection from "@/components/sections/projects";
import Technologies from "@/components/sections/technologies";
import EducationSection from "@/components/sections/education";
import CertificatesSection from "@/components/sections/certificates";

export default function Home() {
  return (
    <>
      {/* loading screen */}
      <LoadingScreen />
      {/* page sections */}
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <CertificatesSection />
      <Technologies />
      <ContactSection />
    </>
  );
}
