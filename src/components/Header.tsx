
import { useState, useEffect } from 'react';
import { BookOpen, Heart, MessageSquare, Users } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToWhatsApp = () => {
    window.open(`https://wa.me/+5577999999999?text=Olá! Gostaria de saber mais sobre a SECAL.`, '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-semibold text-primary">
            SECAL
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Quem Somos
          </button>
          <button 
            onClick={() => scrollToSection('diferenciais')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            O Que Oferecemos
          </button>
          <button 
            onClick={() => scrollToSection('atividades')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Nossas Atividades
          </button>
          <button 
            onClick={() => scrollToSection('programacao')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Programação
          </button>
          <button 
            onClick={() => scrollToSection('contato')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>
        
        <button 
          onClick={navigateToWhatsApp}
          className="btn-primary"
        >
          Fale Conosco
        </button>
      </div>
    </header>
  );
};

export default Header;
