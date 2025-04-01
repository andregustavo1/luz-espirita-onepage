
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const navigateToWhatsApp = () => {
    window.open(`https://wa.me/+5577999999999?text=Olá! Gostaria de saber mais sobre a SECAL.`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SECAL</h3>
            <p className="text-gray-400 mb-4">
              Sociedade Espírita Caminho de Luz
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/secal.lem" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com/@secal2963" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('diferenciais')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  O Que Oferecemos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('atividades')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nossas Atividades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programacao')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Programação
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <button
              onClick={navigateToWhatsApp}
              className="mb-4 px-5 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors inline-flex items-center"
            >
              Fale Conosco
            </button>
            <p className="text-gray-400">
              Luís Eduardo Magalhães - BA
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 SECAL - Sociedade Espírita Caminho de Luz. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
