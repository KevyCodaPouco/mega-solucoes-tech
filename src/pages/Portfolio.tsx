import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Automação Industrial",
      category: "Manufatura",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/301",
        "/api/placeholder/400/302"
      ],
      description: "Implementação de sistema automatizado para linha de produção"
    },
    {
      id: 2,
      title: "Rede de Telecomunicações Corporativa",
      category: "Telecomunicações",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/301",
        "/api/placeholder/400/302"
      ],
      description: "Infraestrutura completa de telecomunicações para empresa multinacional"
    },
    {
      id: 3,
      title: "Monitoramento de Temperatura em Data Center",
      category: "Monitoramento",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/301",
        "/api/placeholder/400/302"
      ],
      description: "Sistema de monitoramento em tempo real com alertas automatizados"
    },
    {
      id: 4,
      title: "Solução IoT para Agricultura",
      category: "Tecnologia",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/301",
        "/api/placeholder/400/302"
      ],
      description: "Sensores inteligentes para otimização de irrigação e cultivo"
    },
    {
      id: 5,
      title: "Equipamento de Teste Automatizado",
      category: "Manufatura",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/301",
        "/api/placeholder/400/302"
      ],
      description: "Desenvolvimento de equipamento personalizado para testes de qualidade"
    },
    {
      id: 6,
      title: "Sistema de Energia Solar Monitorado",
      category: "Energia",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/301",
        "/api/placeholder/400/302"
      ],
      description: "Instalação com sistema de monitoramento de performance em tempo real"
    }
  ];

  const categories = ["Todos", "Manufatura", "Telecomunicações", "Monitoramento", "Tecnologia", "Energia"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Nosso Portfólio
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Conheça alguns dos projetos e soluções que desenvolvemos para nossos clientes
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative overflow-hidden">
                            <img 
                              src={image} 
                              alt={`${project.title} - Imagem ${index + 1}`}
                              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  <Badge 
                    className="absolute top-4 left-4 bg-primary text-primary-foreground z-10"
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Gostou do que viu?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Entre em contato conosco e vamos desenvolver a solução perfeita para o seu projeto
          </p>
          <a 
            href="/contato"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Falar com Especialista
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;