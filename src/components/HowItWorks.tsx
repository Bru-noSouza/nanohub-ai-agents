const steps = [
  {
    number: 1,
    title: "Informe os dados da empresa",
    description: "Nome, produtos e segmento. Sem formulários gigantes.",
  },
  {
    number: 2,
    title: "IA cria o prompt perfeito",
    description: "Nosso sistema gera automaticamente o melhor prompt de vendas.",
  },
  {
    number: 3,
    title: "Conecte WhatsApp e Instagram",
    description: "Integração com a API oficial e painel preparado.",
  },
  {
    number: 4,
    title: "Comece a vender em escala",
    description: "O agente responde, acompanha, analisa e impulsiona suas vendas.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Como funciona
        </h2>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
