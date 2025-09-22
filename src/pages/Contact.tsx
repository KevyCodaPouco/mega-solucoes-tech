import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "emily.fontes@hotmail.com",
      description: "Resposta em até 24 horas"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(48)99108-0375",
      description: "Seg-Sex: 8h às 18h"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Tomaz Damasio Preve Neto, 153, Casa A - Forquilhas",
      description: "São José - SC, 88107-612"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta",
      description: "8:00 às 18:00"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fale com um Especialista
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e propor as melhores soluções tecnológicas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Informações de Contato
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estamos aqui para ajudar. Entre em contato conosco através de qualquer um dos canais abaixo. 
                Nossa equipe responderá o mais breve possível.
              </p>
            </div>
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
