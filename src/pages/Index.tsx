import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';




const Index = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if user is navigating back from another page
    const hasVisited = sessionStorage.getItem('hasVisited');
    return !hasVisited;
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      // Add any preloading logic here if needed
    };
    preloadResources();
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />

     
    </div>
  );
};

export default Index;
