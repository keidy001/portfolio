
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: ["Angular", "Electron.Js", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6" />,
      skills: ["Java", "Spring Boot", "Laravel", "MongoDB", "Docker"],
    },
    {
      title: "Design",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma", "Adobe XD",  "UI/UX", "Prototyping"],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["React Native", "Flutter"],
    },
    // {
    //   title: "DevOps",
    //   icon: <Globe className="h-6 w-6" />,
    //   skills: ["AWS", "Vercel", "GitHub Actions", "Nginx", "Linux", "Git"],
    // },
    {
      title: "Outils",
      icon: <Zap className="h-6 w-6" />,
      skills: ["VS Code", "Postman", "Jira","Git", "Intellij","Android Studio" ],
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Mes Compétences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expertise technique complète alliée à une sensibilité design
            pour créer des solutions innovantes et performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg gradient-primary text-white">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Philosophie de Travail
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je crois en l'importance de créer des expériences utilisateur exceptionnelles
              en combinant une architecture technique solide avec un design intuitif et esthétique.
              Chaque projet est une opportunité d'innover et de repousser les limites du possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
