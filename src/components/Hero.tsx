import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground mb-4">
          Simples. Rápido. Efetivo. Sem complicação.
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          Agentes Inteligentes para{" "}
          <span className="text-primary">WhatsApp</span> e{" "}
          <span className="text-primary">Instagram</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Crie seu agente personalizado em minutos. IA que vende, responde, analisa, acompanha e organiza tudo para você.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full font-semibold"
            asChild
          >
            <a href="https://wa.me/558592864870?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20criar%20meu%20agente%20IA%20na%20NanoHub.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com Atendente
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://www.instagram.com/nanohub.ia" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Instagram da NanoHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
