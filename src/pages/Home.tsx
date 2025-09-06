import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-glow/70"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Tecnologia Sob Medida para a Sua
            <span className="block text-primary-glow">Máxima Eficiência</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Fabricamos hardware e desenvolvemos soluções integradas de telecom e monitoramento 
            para garantir o controle e a performance da sua operação.
          </p>
          <Button variant="hero" size="lg" asChild className="text-lg px-8 py-4 h-auto">
            <Link to="/solucoes" className="flex items-center gap-2">
              Conheça Nossas Soluções
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Sobre Nós
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Somos especialistas em transformar desafios em soluções tecnológicas eficientes. 
              Com produção 100% nacional, oferecemos infraestrutura robusta, confiável e 
              customizada para o mercado industrial e corporativo.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Confiabilidade</h3>
                  <p className="text-muted-foreground">
                    Soluções robustas e seguras para operações críticas
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Inovação</h3>
                  <p className="text-muted-foreground">
                    Tecnologia de ponta adaptada às suas necessidades
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Suporte Local</h3>
                  <p className="text-muted-foreground">
                    Atendimento ágil e especializado em todo o Brasil
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Pronto para Transformar Sua Operação?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como podemos otimizar sua infraestrutura tecnológica.
          </p>
          <Button variant="hero" size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contato" className="flex items-center gap-2">
              Falar com Especialista
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;