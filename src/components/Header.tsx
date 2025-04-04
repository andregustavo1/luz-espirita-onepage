
import { useState, useEffect } from 'react';
import { BookOpen, Heart, MessageSquare, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on the home page, navigate to the home page first
      navigate(`/?section=${id}`);
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
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
          <button 
            onClick={() => navigateToPage('/')}
            className={`text-xl md:text-2xl font-semibold hover-transition ${scrolled ? 'text-primary' : 'text-white'}`}
          >
            SECAL
          </button>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')} 
            className={`hover-transition hover:text-primary ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Quem Somos
          </button>
          <button 
            onClick={() => scrollToSection('diferenciais')} 
            className={`hover-transition hover:text-primary ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            O Que Oferecemos
          </button>
          <button 
            onClick={() => scrollToSection('atividades')} 
            className={`hover-transition hover:text-primary ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Nossas Atividades
          </button>
          <button 
            onClick={() => scrollToSection('programacao')} 
            className={`hover-transition hover:text-primary ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Programação
          </button>
          <button 
            onClick={() => navigateToPage('/sobre')}
            className={`hover-transition hover:text-primary ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Sobre Nós
          </button>
          <button 
            onClick={() => scrollToSection('contato')} 
            className={`hover-transition hover:text-primary ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Contato
          </button>
        </nav>
        
        <button 
          onClick={navigateToWhatsApp}
          className={`hover-transition ${scrolled ? 'btn-primary' : 'bg-white text-primary hover:bg-gray-100'} px-6 py-3 rounded-md font-medium`}
        >
          Fale Conosco
        </button>
      </div>
    </header>
  );
};

export default Header;
