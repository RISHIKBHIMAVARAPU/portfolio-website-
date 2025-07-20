import { MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-primary to-purple-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Professional Journey</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I'm a passionate Software Engineer with a Bachelor's degree in Computer Science from IIIT SriCity. 
              Currently working as a Jr. Software Engineer at Keus Smart Home Automation, where I focus on 
              migrating monolithic applications to microservices architecture and developing comprehensive API solutions.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              My expertise lies in full-stack development with modern technologies like React.js, Node.js, and 
              cloud platforms. I'm passionate about creating scalable solutions and have experience with 
              microservices, databases, and system integration.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-primary" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-blue-primary" />
                <span>rishiktarak@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-blue-primary" />
                <span>+91 7337237148</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 gradient-text">Quick Facts</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Experience</span>
                    <span className="text-blue-primary font-medium">1+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Education</span>
                    <span className="text-blue-primary font-medium">B.Tech CSE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">CGPA</span>
                    <span className="text-blue-primary font-medium">8.0/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Certifications</span>
                    <span className="text-blue-primary font-medium">AWS Certified</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Coding Challenges</span>
                    <span className="text-blue-primary font-medium">300+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
