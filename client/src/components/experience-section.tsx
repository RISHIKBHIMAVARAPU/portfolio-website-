import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-primary to-purple-secondary mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            My professional journey and key contributions in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-primary to-purple-secondary"></div>
            
            {/* Current Position */}
            <div className="relative mb-12">
              <div className="absolute left-6 w-4 h-4 bg-blue-primary rounded-full border-4 border-slate-950"></div>
              <div className="ml-20">
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold gradient-text">Jr. Software Engineer</h3>
                        <h4 className="text-lg text-slate-300">Keus Smart Home Automation</h4>
                      </div>
                      <div className="text-slate-400 text-sm">
                        <span>Jan 2024 - Present</span>
                        <div className="text-xs">Hyderabad, India</div>
                      </div>
                    </div>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start gap-3">
                        <ArrowRight className="text-blue-primary mt-1.5 w-3 h-3 flex-shrink-0" />
                        <span>Migrated monolithic application to modular microservices architecture using Moleculer.js and plugin-based design, improving system scalability, maintainability, and operational efficiency.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="text-blue-primary mt-1.5 w-3 h-3 flex-shrink-0" />
                        <span>Designed and implemented multiple API endpoints to support comprehensive functionality for a tablet app.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="text-blue-primary mt-1.5 w-3 h-3 flex-shrink-0" />
                        <span>Implemented multiple user-centric features that enhanced system functionality and significantly improved overall user experience, contributing to higher product value and customer satisfaction.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ArrowRight className="text-blue-primary mt-1.5 w-3 h-3 flex-shrink-0" />
                        <span>Integrated multiple devices into the system, ensuring compatibility with existing features.</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-6">
                      <Badge className="bg-blue-primary/20 text-blue-primary">Microservices</Badge>
                      <Badge className="bg-purple-secondary/20 text-purple-secondary">Moleculer.js</Badge>
                      <Badge className="bg-green-500/20 text-green-400">API Development</Badge>
                      <Badge className="bg-orange-500/20 text-orange-400">System Integration</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education */}
            <div className="relative mb-12">
              <div className="absolute left-6 w-4 h-4 bg-purple-secondary rounded-full border-4 border-slate-950"></div>
              <div className="ml-20">
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold gradient-text">Bachelor of Technology in CSE</h3>
                        <h4 className="text-lg text-slate-300">Indian Institute of Information Technology SriCity</h4>
                      </div>
                      <div className="text-slate-400 text-sm">
                        <span>2020 - Apr 2024</span>
                        <div className="text-xs">Andhra Pradesh, India</div>
                      </div>
                    </div>
                    <div className="text-slate-300 mb-4">
                      <span className="font-medium">CGPA:</span> <span className="text-blue-primary">8.0/10</span>
                    </div>
                    <div className="text-slate-300">
                      <span className="font-medium">Coursework:</span> Data Structures and Algorithms, Object-oriented Programming, Database Management Systems
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
