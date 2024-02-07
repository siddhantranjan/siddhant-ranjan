import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import IntroSection from "@/components/intro-section";
import PortfolioSection from "@/components/portfolio-section";
import ResumeSection from "@/components/resume-section";
import ServiceSection from "@/components/service-section";

export default function Home() {
  return (
    <main className="text-lighter max-w-md md:max-w-full">
      <Header />
      <IntroSection />
      <div className="bg-darker w-full">
        <AboutSection />
        <ServiceSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
