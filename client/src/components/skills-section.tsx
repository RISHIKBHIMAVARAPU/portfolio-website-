import { Code, Laptop, Server, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      color: "text-blue-primary",
      skills: [
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 70 },
        { name: "Python", level: 70 },
      ],
    },
    {
      icon: Laptop,
      title: "Frontend",
      color: "text-purple-secondary",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML/CSS", level: 85 },
        { name: "Bootstrap", level: 70 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      color: "text-green-400",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "REST API", level: 85 },
        { name: "Microservices", level: 70 },
        { name: "gRPC", level: 50 },
      ],
    },
    {
      icon: Database,
      title: "Database & Tools",
      color: "text-orange-400",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 70 },
        { name: "MySQL", level: 70 },
        { name: "AWS", level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-primary to-purple-secondary mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-800 hover:border-blue-primary/50 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className={`${category.color} text-3xl mb-4`}>
                  <category.icon />
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">{skill.name}</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">AWS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">AWS Certified Cloud Practitioner</h4>
                    <p className="text-slate-400 text-sm">Amazon Web Services</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-primary rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">300+ Coding Challenges</h4>
                    <p className="text-slate-400 text-sm">GeeksforGeeks & LeetCode</p>
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
