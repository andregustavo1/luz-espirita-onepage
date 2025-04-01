
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
          <h1 className={`text-xl md:text-2xl font-semibold ${scrolled ? 'text-primary' : 'text-white'}`}>
            SECAL
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')} 
            className={`hover:text-primary transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Quem Somos
          </button>
          <button 
            onClick={() => scrollToSection('diferenciais')} 
            className={`hover:text-primary transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            O Que Oferecemos
          </button>
          <button 
            onClick={() => scrollToSection('atividades')} 
            className={`hover:text-primary transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Nossas Atividades
          </button>
          <button 
            onClick={() => scrollToSection('programacao')} 
            className={`hover:text-primary transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Programação
          </button>
          <button 
            onClick={() => scrollToSection('contato')} 
            className={`hover:text-primary transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Contato
          </button>
        </nav>
        
        <button 
          onClick={navigateToWhatsApp}
          className={`${scrolled ? 'btn-primary' : 'bg-white text-primary hover:bg-gray-100'} px-6 py-3 rounded-md font-medium transition-colors`}
        >
          Fale Conosco
        </button>
      </div>
    </header>
  );
};

export default Header;
