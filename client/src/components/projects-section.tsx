import { Laptop, Search, University, ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      icon: Laptop,
      title: "Freelancing Website",
      description: "A comprehensive web application for freelancers built with MERN stack featuring JWT authentication, Redis caching for 80% performance improvement, and administrative tools for service management.",
      technologies: ["React.js", "Express", "MongoDB", "Redis"],
      colors: ["bg-blue-primary/20 text-blue-primary", "bg-green-500/20 text-green-400", "bg-orange-500/20 text-orange-400", "bg-red-500/20 text-red-400"],
      gradient: "from-blue-primary/20 to-purple-secondary/20"
    },
    {
      icon: Search,
      title: "Movie Search Engine",
      description: "Advanced search engine processing 35,000+ movie documents from Wikipedia using cosine similarity algorithm to retrieve the most relevant results with high accuracy scores.",
      technologies: ["Python", "NLTK", "NumPy", "Pandas"],
      colors: ["bg-yellow-500/20 text-yellow-400", "bg-blue-500/20 text-blue-400", "bg-purple-500/20 text-purple-400", "bg-green-500/20 text-green-400"],
      gradient: "from-purple-secondary/20 to-blue-primary/20"
    },
    {
      icon: University,
      title: "Banking Application",
      description: "Complete bank management system with terminal interface enabling users to perform transactions, manage accounts with full CRUD operations, and secure database connectivity via JDBC.",
      technologies: ["Java", "JDBC", "MySQL"],
      colors: ["bg-orange-500/20 text-orange-400", "bg-blue-500/20 text-blue-400", "bg-yellow-500/20 text-yellow-400"],
      gradient: "from-green-500/20 to-blue-500/20"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-primary to-purple-secondary mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Here are some of my key projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:border-blue-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Project screenshot placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <project.icon className="text-4xl text-slate-400" size={64} />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className={`${project.colors[techIndex]} px-2 py-1 text-xs`}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="link"
                    className="text-blue-primary hover:text-blue-primary/80 p-0"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="link"
                    className="text-slate-400 hover:text-slate-300 p-0"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Placeholder */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-8 py-3 border-slate-600 hover:border-blue-primary"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
