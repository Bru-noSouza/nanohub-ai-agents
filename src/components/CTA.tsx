import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Quer criar seu agente <span className="text-primary">agora</span>?
        </h2>
        
        <p className="text-xl text-muted-foreground">
          Fale com nossa atendente e comece em poucos minutos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full font-semibold"
            asChild
          >
            <a href="https://wa.me/558592864870" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chamar no WhatsApp
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
              Ver Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
