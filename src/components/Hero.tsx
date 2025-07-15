import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/aymen-profile.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-glow border-4 border-white/20 float-animation">
              <img
                src={profileImage}
                alt="Aymen Daoud"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in-up stagger-2">
            Hi, I'm{' '}
            <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Aymen Daoud
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-fade-in-up stagger-3">
            AI Research Assistant & MSc Student
          </p>

          {/* Tagline */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up stagger-4">
            Turning AI research into real-world impact through machine learning, 
            computer vision, and wireless communication innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fade-in-up stagger-4">
            <Button
              onClick={() => scrollToSection('#portfolio')}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300 px-8 py-3 rounded-lg font-medium"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 transition-all duration-300 px-8 py-3 rounded-lg font-medium"
            >
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 opacity-0 animate-fade-in-up stagger-4">
            <a
              href="https://www.linkedin.com/in/aymandaoud/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/AyDaoud"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:aymendaoud1499@gmail.com"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;