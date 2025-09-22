import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Network, Thermometer, Radio, Box } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Cpu,
      title: "Manufatura de Equipamentos",
      description: "Projetamos e fabricamos hardware nacional sob medida. Controlamos todo o processo para entregar equipamentos robustos, com suporte local ágil e adequados às normas brasileiras.",
      features: [
        "Projetos customizados",
        "Produção 100% nacional",
        "Suporte técnico local",
        "Adequação às normas brasileiras"
      ]
    },
    {
      icon: Network,
      title: "Soluções Tecnológicas",
      description: "Analisamos seus desafios e integramos hardware e software para automatizar processos e gerar dados estratégicos, modernizando sua operação de ponta a ponta.",
      features: [
        "Integração hardware/software",
        "Automação de processos",
        "Analytics e relatórios",
        "Modernização completa"
      ]
    },
    {
      icon: Radio,
      title: "Infraestrutura de Telecomunicações",
      description: "Desenvolvemos e implementamos sites de telefonia e infraestrutura completa para telecomunicações, garantindo cobertura, qualidade de sinal e conectividade robusta.",
      features: [
        "Sites de telefonia celular",
        "Torres e estruturas de telecomunicações",
        "Infraestrutura de rede móvel",
        "Sites para operadoras de telecom",
        "Sistemas de transmissão",
        "Cobertura e qualidade de sinal"
      ]
    },
    {
      icon: Box,
      title: "Modelagem 3D e Impressão",
      description: "Criamos protótipos funcionais e peças sob medida através de modelagem 3D avançada e impressão 3D de alta precisão. Desenvolvemos desde cases personalizados até peças funcionais complexas.",
      features: [
        "Modelagem 3D para protótipos",
        "Impressão 3D sob medida",
        "Peças funcionais em 3D",
        "Cases personalizados",
        "Prototipagem rápida",
        "Desenvolvimento de produtos"
      ]
    },
    {
      icon: Thermometer,
      title: "Monitoramento de Temperatura e Energia",
      description: "Tenha controle total de ambientes críticos. Nossas soluções oferecem acompanhamento em tempo real para otimizar o consumo, evitar perdas e garantir a continuidade do seu negócio.",
      features: [
        "Monitoramento em tempo real",
        "Controle de temperatura",
        "Gestão de energia",
        "Alertas automáticos"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções Completas para a Sua Operação
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de soluções tecnológicas para transformar 
            e otimizar sua infraestrutura operacional.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{solution.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nosso Processo
            </h2>
            <p className="text-lg text-muted-foreground">
              Uma abordagem estruturada para garantir o sucesso do seu projeto
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análise", description: "Entendemos seus desafios e necessidades específicas" },
              { step: "02", title: "Projeto", description: "Desenvolvemos soluções customizadas para seu contexto" },
              { step: "03", title: "Implementação", description: "Executamos a instalação com nossa equipe especializada" },
              { step: "04", title: "Suporte", description: "Oferecemos suporte contínuo e manutenção preventiva" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vamos Conversar Sobre Seu Projeto?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e propor a melhor solução.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contato" className="flex items-center gap-2">
              Solicitar Orçamento
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;