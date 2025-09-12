import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/solucoes", label: "Soluções" },
    { path: "/sobre", label: "Sobre Nós" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg text-foreground">MEGA SOLUÇÕES</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" asChild className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="http://15.228.236.17:3000/login" target="_blank" rel="noopener noreferrer">
                  Área do Cliente
                </a>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/contato">Falar com Especialista</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3">
                <Button variant="outline" size="sm" asChild className="w-fit text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="http://15.228.236.17:3000/login" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    Área do Cliente
                  </a>
                </Button>
                <Button variant="hero" size="sm" asChild className="w-fit">
                  <Link to="/contato" onClick={() => setIsOpen(false)}>
                    Falar com Especialista
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;