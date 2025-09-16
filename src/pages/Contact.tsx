import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase"; 

const Contact = () => {
  // A definição do formData precisa estar aqui
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    mensagem: ""
  });
  
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // A função para lidar com a mudança nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // A nova função handleSubmit que envia os dados
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { data, error } = await supabase.functions.invoke('send-contact-email', {
      body: formData,
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar a mensagem.",
        description: "Houve um problema. Por favor, tente novamente mais tarde.",
      });
    } else {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
      setFormData({ nome: "", empresa: "", email: "", mensagem: "" });
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa *</Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        required
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                      rows={6}
                    />
                  </div>
                  
                  {/* Botão de envio atualizado */}
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* ... o resto do seu código da página de contato continua aqui sem alterações ... */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Informações de Contato
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estamos aqui para ajudar. Entre em contato conosco através de qualquer um dos canais abaixo 
                ou preencha o formulário ao lado. Nossa equipe responderá o mais breve possível.
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
