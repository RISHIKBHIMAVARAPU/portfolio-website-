import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a simple resume download - in production, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Rishik_Bhimavarapu_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/20 via-transparent to-purple-secondary/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            {/* Professional headshot */}
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-primary to-purple-secondary p-1 animate-float">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/attached_assets/20250111_101555_1753008202318.jpg" 
                  alt="Rishik Bhimavarapu - Software Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Rishik Bhimavarapu</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8">
            Jr. Software Engineer specializing in <span className="text-blue-primary">Full-Stack Development</span> and <span className="text-purple-secondary">Cloud Technologies</span>
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto">
            Passionate about building scalable applications and microservices architecture. Currently working at Keus Smart Home Automation, creating innovative solutions for modern smart homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-blue-primary hover:bg-blue-primary/80 text-white px-8 py-3 font-medium transition-all duration-300 hover:scale-105"
            >
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-600 hover:border-blue-primary text-slate-200 hover:text-blue-primary px-8 py-3 font-medium transition-all duration-300"
            >
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="secondary"
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-8 py-3 font-medium transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
