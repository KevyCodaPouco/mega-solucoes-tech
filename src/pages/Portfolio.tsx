import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Monitoramento de Temperatura",
      category: "Monitoramento",
      images: [
        "/images/portfolio/moni1.jpeg", // <-- Altere aqui
        "/images/portfolio/moni2.jpeg", // <-- Altere aqui
        "/images/portfolio/moni3.jpeg", // <-- E aqui
        "/images/portfolio/moni4.jpeg"
      ],
      description: "Sistema de monitoramento em tempo real com alertas automatizados para ambientes críticos"
    },
    {
      id: 2,
      title: "Peças Funcionais em Impressão 3D",
      category: "Impressão 3D",
      images: [
        "/images/portfolio/3d1.jpeg", // <-- Altere aqui
        "/images/portfolio/3d2.jpeg", // <-- Altere aqui
        "/images/portfolio/3d3.jpeg", // <-- Altere aqui
        "/images/portfolio/3d4.jpeg", // <-- Altere aqui
        "/images/portfolio/3d5.jpeg", // <-- Altere aqui
        "/images/portfolio/3d6.jpeg", // <-- Altere aqui
        "/images/portfolio/3d7.jpeg", // <-- Altere aqui
        "/images/portfolio/3d8.jpeg", // <-- Altere aqui
        "/images/portfolio/3d9.jpeg", // <-- Altere aqui
        "/images/portfolio/3d10.jpeg", // <-- Altere aqui
        "/images/portfolio/3d11.jpeg", // <-- Altere aqui
        "/images/portfolio/3d12.jpeg", // <-- Altere aqui
        "/images/portfolio/3d13.jpeg", // <-- Altere aqui
        "/images/portfolio/3d14.jpeg", // <-- Altere aqui
        "/images/portfolio/3d15.jpeg", // <-- Altere aqui
        "/images/portfolio/3d16.jpeg", // <-- Altere aqui
        "/images/portfolio/3d17.jpeg", // <-- Altere aqui
        "/images/portfolio/3d18.jpeg", // <-- Altere aqui
        "/images/portfolio/3d19.jpeg", // <-- Altere aqui
        "/images/portfolio/3d20.jpeg", // <-- Altere aqui
        "/images/portfolio/3d21.jpeg", // <-- Altere aqui
        "/images/portfolio/3d22.jpeg", // <-- Altere aqui
        "/images/portfolio/3d23.jpeg", // <-- Altere aqui
      ],
      description: "Peças funcionais customizadas e cases personalizados desenvolvidos através de impressão 3D"
    },
    {
      id: 3,
      title: "Protótipos de Equipamentos",
      category: "Protótipos",
      images: [
        "/images/portfolio/prop1.jpeg", // <-- Altere aqui
        "/images/portfolio/prop2.jpeg", // <-- Altere aqui
        "/images/portfolio/prop3.jpeg", // <-- Altere aqui
        "/images/portfolio/prop4.jpeg", // <-- Altere aqui
        "/images/portfolio/prop5.jpeg", // <-- Altere aqui
        "/images/portfolio/prop6.jpeg", // <-- Altere aqui
        "/images/portfolio/prop7.jpeg", // <-- Altere aqui
        "/images/portfolio/prop8.jpeg", // <-- Altere aqui
        "/images/portfolio/prop9.jpeg", // <-- Altere aqui
        "/images/portfolio/prop10.jpeg", // <-- Altere aqui
        "/images/portfolio/prop11.jpeg", // <-- Altere aqui
      ],
      description: "Desenvolvimento de protótipos funcionais para validação de conceitos e testes"
    },
    {
      id: 4,
      title: "Infraestrutura de Sites de Telecomunicação",
      category: "Telecomunicações",
      images: [
        "/images/portfolio/infra 1.jpeg", // <-- Altere aqui
        "/images/portfolio/infra 2.jpeg", // <-- Altere aqui
        "/images/portfolio/infra 3.jpeg", // <-- Altere aqui
        "/images/portfolio/infra 4.jpeg", // <-- Altere aqui
        "/images/portfolio/infra 5.jpeg", // <-- Altere aqui
        "/images/portfolio/infra 6.jpeg", // <-- Altere aqui
        "/images/portfolio/infra 7.jpeg", // <-- Altere aqui
        "/images/portfolio/infra 8.jpeg", // <-- Altere aqui
      ],
      description: "Sites de telefonia celular e infraestrutura completa para operadoras de telecomunicações"
    }
  ];

  const categories = ["Todos", "Monitoramento", "Impressão 3D", "Protótipos", "Telecomunicações"];

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
