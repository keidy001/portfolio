
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-background to-background/50 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">
              Sidy keita
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Développeur fullstack passionné par la création d'expériences
              numériques exceptionnelles. Toujours en quête d'innovation
              et de nouveaux défis techniques.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Navigation</h3>
            <div className="space-y-2">
              {["Compétences", "Projets", "Expérience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:john.doe@example.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                ksidy6084@gmail.com
              </a>
            </div>
            <div className="flex space-x-4 pt-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <a href="https://github.com/keidy001">
                <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
              asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">
                <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <a href="mailto:ksidy6084@gmail.com">
                <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Sidy KEITA</span>
          </div>
          
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110 mt-4 md:mt-0"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
