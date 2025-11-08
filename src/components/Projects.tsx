import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
     {
      title: "Plateforme de gestion d'expression de besoins ",
      description: "Plaateforme de gestion d'expression de besoins pour les sites de Péage et Pesage.",
      image: "/fer.png",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      liveUrl: "http://31.97.177.49:8080/ferml/#/",
      githubUrl: "#",
      featured: false
    },
       {
      title: "Plateforme de gestion d'établissement scolaire ",
      description: "système complet pour la gestion des établissements, classes, enseignants et notes.",
      image: "/khub.png",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      liveUrl: "http://31.97.177.49:8080/ferml/#/",
      githubUrl: "#",
      featured: false
    },
       {
      title: "Application mobile pour le dimensionnement de kits solaires ",
      description: "Application mobile Flutter pour le dimensionnement automatique de kits solaires, génération de devis PDF, suivi complet des installations et rappels programmés pour la maintenance. ",
      image: "/dpm.jpg",
      technologies: ["Flutter", "Spring Boot", "MySQL"],
      liveUrl: "http://31.97.177.49:8080/ferml/#/",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Pharmacie nouvelle coronthie ",
      description: "Application mobile de commande de produits pharmaceutiques. Design moderne et responsive avec animations fluides.",
      image: "/pnc.jpg",
      technologies: ["Fluter", "PHP", "MySQL"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.pnc.coronthie_app",
      githubUrl: "https://play.google.com/store/apps/details?id=com.pnc.coronthie_app",
      featured: false
    },
    {
      title: "Gestion des Contrats et Marchés",
      description: "Application web desktop de gestion de contrats et marchés d'une enterprise. Interface utilisateur intuitif et statistiques avancées.",
      image: "/gespro1.png",
      technologies: ["Angular", "Spring Boot", "Electron.Js","MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Application  de gestion de pointage",
      description: "Application de gestion de pointage avec flexibilité et efficacité des horaires.",
      image: "/eface.png",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },

  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-5xl md:text-5xl font-bold p-6 gradient-text">
            Mes Projets
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes réalisations récentes, où créativité et technique
            se rencontrent pour créer des expériences mémorables.
          </p>
        </div>

        {/* Featured Projects */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary">Projets Phares</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group glass border-primary/20 hover:border-primary/40 transition-all duration-500 transform hover:scale-[1.02] animate-slide-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-primary/90 hover:bg-primary text-white">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-primary">Projets récents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group glass border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-primary/90 hover:bg-primary p-2 text-white">
                      <a href={project.liveUrl} target="_blank">
                        <Eye className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-primary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <Button
          asChild
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <a href="https://github.com/keidy001" target="_blank">
            <Github className="mr-2 h-5 w-5" />
            Voir Plus sur GitHub
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
