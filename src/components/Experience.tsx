
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "TechCorp Solutions",
      location: "Paris, France",
      period: "2022 - Présent",
      type: "CDI",
      description: "Lead technique sur des projets d'envergure, encadrement d'équipe de 4 développeurs. Architecture et développement d'applications web complexes avec focus sur la performance et l'expérience utilisateur.",
      achievements: [
        "Amélioration des performances de 40% sur l'application principale",
        "Mise en place d'une architecture microservices",
        "Formation et mentorat de développeurs juniors",
        "Implémentation de tests automatisés (95% de couverture)"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"]
    },
    {
      title: "Fullstack Developer & UI Designer",
      company: "Creative Digital Agency",
      location: "Lyon, France",
      period: "2020 - 2022",
      type: "CDI",
      description: "Développement fullstack et création d'interfaces utilisateur pour des clients prestigieux. Collaboration étroite avec les équipes design et marketing pour livrer des expériences digitales exceptionnelles.",
      achievements: [
        "Développement de 15+ sites web pour des clients grands comptes",
        "Création d'un design system réutilisable",
        "Réduction du temps de chargement moyen de 60%",
        "Certification Google Analytics et SEO"
      ],
      technologies: ["Vue.js", "Laravel", "Figma", "GSAP", "MySQL"]
    },
    {
      title: "Frontend Developer",
      company: "StartupTech",
      location: "Remote",
      period: "2019 - 2020",
      type: "CDI",
      description: "Développement frontend dans une startup en croissance rapide. Responsable de l'interface utilisateur d'une application SaaS utilisée par 10k+ utilisateurs quotidiennement.",
      achievements: [
        "Développement d'une PWA performante",
        "Implémentation du responsive design",
        "Intégration d'APIs REST et GraphQL",
        "Optimisation SEO et accessibilité"
      ],
      technologies: ["React", "Redux", "Sass", "Jest", "Webpack"]
    },
    {
      title: "Web Developer Junior",
      company: "Digital Solutions",
      location: "Marseille, France",
      period: "2018 - 2019",
      type: "CDI",
      description: "Premier poste en tant que développeur web. Développement de sites vitrines et e-commerce. Apprentissage rapide des technologies modernes et des bonnes pratiques de développement.",
      achievements: [
        "Développement de 20+ sites WordPress personnalisés",
        "Formation aux technologies React et Node.js",
        "Participation à la refonte du site principal",
        "Amélioration du processus de déploiement"
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "Bootstrap", "MySQL"]
    }
  ];

  const education = [
    {
      title: "Master Informatique",
      school: "École Supérieure d'Informatique",
      location: "Paris, France",
      period: "2016 - 2018",
      specialization: "Développement Web & Mobile"
    },
    {
      title: "Licence Informatique",
      school: "Université de Technologies",
      location: "Lyon, France",
      period: "2013 - 2016",
      specialization: "Programmation & Systèmes"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Mon Parcours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un parcours professionnel riche en défis techniques et créatifs,
            marqué par une progression constante et une passion pour l'innovation.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary flex items-center">
            <Briefcase className="mr-3 h-6 w-6" />
            Expérience Professionnelle
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <span className="font-semibold text-foreground">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-primary">Réalisations clés :</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        {/* <div>
          <h3 className="text-2xl font-bold mb-8 text-primary">Formation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {edu.title}
                  </CardTitle>
                  <div className="space-y-1 text-muted-foreground">
                    <div className="font-semibold text-foreground">{edu.school}</div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {edu.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
