
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Développeur Fullstack", "Designer UI/UX", "Intégrateur ERP"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto mt-20 px-4 z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-primary p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">
                  SK
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Sidy Keita
          </h1>

          <div className="text-2xl md:text-4xl font-light mb-8 h-16 flex items-center justify-center">
            <span className="text-muted-foreground">Je suis </span>
            <span className="text-primary ml-2 font-medium">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Développeur Fullstack passionné avec plus de 3 ans d'expérience dans le développement d'applications multiplatformes performantes,
            {/* Passionné par la création d'expériences numériques exceptionnelles, */}
            je combine expertise technique et sens du design pour donner vie
            à vos projets les plus ambitieux.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 text-white border-0"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Me Contacter
            </Button>

          
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Télécharger CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <a
                href="https://github.com/keidy001"
                target="_blank"
                rel="noopener noreferrer"
              >

              <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
            asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">
              <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
            asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
                  <a
                href="mailto:ksidy6084@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >

              <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>

          <div
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection("skills")}
          >
            <ChevronDown className="h-8 w-8 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
