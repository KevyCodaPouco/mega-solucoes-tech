import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Inovação",
      description: "Buscamos constantemente novas tecnologias e metodologias para oferecer soluções cada vez mais eficientes e modernas."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Mantemos os mais altos padrões de qualidade em todos os nossos produtos e serviços, garantindo excelência em cada entrega."
    },
    {
      icon: Heart,
      title: "Parceria",
      description: "Construímos relacionamentos duradouros com nossos clientes, atuando como verdadeiros parceiros tecnológicos."
    },
    {
      icon: Eye,
      title: "Excelência Técnica",
      description: "Nossa equipe é formada por especialistas altamente qualificados, sempre atualizados com as melhores práticas do mercado."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Inovação e Tecnologia Nacional ao Seu Alcance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça a história, missão e valores que nos tornam referência em soluções tecnológicas no Brasil.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Nossa História</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Mega Soluções Tecnológicas</strong> nasceu da missão de 
                oferecer ao mercado uma infraestrutura tecnológica de ponta, 100% brasileira. 
                Desde nossa fundação, temos o compromisso de desenvolver soluções que atendam 
                às necessidades específicas do mercado nacional.
              </p>
              <p>
                Nossa trajetória é marcada pela constante busca por inovação e pela dedicação 
                em compreender profundamente os desafios de nossos clientes. Acreditamos que 
                a tecnologia deve ser uma ferramenta para simplificar processos e potencializar resultados.
              </p>
              <p>
                Com uma equipe de especialistas altamente qualificados e infraestrutura própria 
                de desenvolvimento e produção, conseguimos oferecer soluções completas e 
                personalizadas para cada cliente.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="shadow-card border-0 bg-gradient-subtle">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transformar desafios tecnológicos em soluções eficientes e inovadoras, 
                  oferecendo infraestrutura robusta e confiável para impulsionar o crescimento 
                  e a competitividade de nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-gradient-subtle">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary" />
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser líder em soluções customizadas de hardware e monitoramento no Brasil, 
                  reconhecida pela qualidade, inovação e capacidade de antecipar as necessidades 
                  do mercado tecnológico nacional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Differentials Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Nossos Diferenciais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Produção Nacional",
                description: "100% da nossa produção é realizada no Brasil, garantindo agilidade no suporte e adequação às normas locais."
              },
              {
                title: "Soluções Customizadas",
                description: "Cada projeto é único. Desenvolvemos soluções sob medida para atender às necessidades específicas de cada cliente."
              },
              {
                title: "Suporte Especializado",
                description: "Equipe técnica qualificada disponível para suporte, manutenção e evolução contínua das soluções implementadas."
              },
              {
                title: "Integração Completa",
                description: "Oferecemos soluções integradas de hardware e software para maximizar a eficiência operacional."
              },
              {
                title: "Inovação Constante",
                description: "Investimos continuamente em pesquisa e desenvolvimento para manter nossos clientes na vanguarda tecnológica."
              },
              {
                title: "Parcerias Estratégicas",
                description: "Construímos relacionamentos de longo prazo, atuando como parceiros estratégicos no crescimento de nossos clientes."
              }
            ].map((differential, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{differential.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pronto para Ser Nosso Próximo Parceiro?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos contribuir para o sucesso da sua operação.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contato" className="flex items-center gap-2">
              Iniciar Parceria
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;