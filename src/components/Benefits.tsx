import { Bot, MessageSquare, Brain, Send, RefreshCw, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "Agentes Personalizados",
    description: "Sua empresa, seu tom de voz, sua estratégia — ajustado automaticamente pela IA.",
  },
  {
    icon: MessageSquare,
    title: "CRM com Chat em Tempo Real",
    description: "Acompanhe conversas ao vivo, controle leads e veja tudo centralizado.",
  },
  {
    icon: Brain,
    title: "Análise de Personalidade",
    description: "O agente entende o perfil do cliente e adapta o diálogo para aumentar conversões.",
  },
  {
    icon: Send,
    title: "Disparos com API Oficial",
    description: "Envie campanhas e mensagens com segurança, alta entrega e métricas.",
  },
  {
    icon: RefreshCw,
    title: "Follow Up + Reprocessamento",
    description: "Nunca mais perca vendas por falta de resposta ou esquecimento.",
  },
  {
    icon: Sparkles,
    title: "Criação Simplificada",
    description: "Só informe nome da empresa, segmento e seus produtos. A IA faz todo o resto.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Por que escolher o <span className="text-primary">NanoHub</span>?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
