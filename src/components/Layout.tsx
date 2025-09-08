import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-lg">MEGA SOLUÇÕES</span>
              </div>
              <p className="text-background/80 leading-relaxed">
                Especialistas em soluções tecnológicas customizadas para o mercado brasileiro.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-background/80">
                <p>emily.fontes@hotmail.com</p>
                <p>(48)99108-0375</p>
                <p>R. Tomaz Damasio Preve Neto, 153, Casa A - Forquilhas</p>
                <p>São José - SC, 88107-612</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Soluções</h3>
              <div className="space-y-2 text-background/80">
                <p>Manufatura de Equipamentos</p>
                <p>Soluções Tecnológicas</p>
                <p>Telecomunicações</p>
                <p>Monitoramento</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">
              © 2024 MEGA SOLUÇÕES EM TECNOLOGIA LTDA. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;