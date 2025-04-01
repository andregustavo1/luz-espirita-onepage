
import { MapPin, Mail, Phone, Instagram, Youtube } from 'lucide-react';

const ContactInfo = () => {
  const navigateToWhatsApp = () => {
    window.open(`https://wa.me/+5577999999999?text=Olá! Gostaria de saber mais sobre a SECAL.`, '_blank');
  };

  return (
    <div className="animate-on-scroll">
      <ul className="space-y-6">
        <li className="flex items-start">
          <div className="mt-1 mr-3 p-2 rounded-full bg-primary/10">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">WhatsApp</h3>
            <button
              onClick={navigateToWhatsApp}
              className="text-primary hover:underline"
            >
              Marcelo
            </button>
          </div>
        </li>
        
        <li className="flex items-start">
          <div className="mt-1 mr-3 p-2 rounded-full bg-primary/10">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">E-mail</h3>
            <a 
              href="mailto:mrossato@gmail.com" 
              className="text-primary hover:underline"
            >
              mrossato@gmail.com
            </a>
          </div>
        </li>
        
        <li className="flex items-start">
          <div className="mt-1 mr-3 p-2 rounded-full bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Endereço</h3>
            <p>Luís Eduardo Magalhães - BA</p>
          </div>
        </li>
        
        <li className="flex items-start">
          <div className="mt-1 mr-3 p-2 rounded-full bg-primary/10">
            <Instagram className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Instagram</h3>
            <a 
              href="https://www.instagram.com/secal.lem" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              @secal.lem
            </a>
          </div>
        </li>
        
        <li className="flex items-start">
          <div className="mt-1 mr-3 p-2 rounded-full bg-primary/10">
            <Youtube className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">YouTube</h3>
            <a 
              href="https://www.youtube.com/@secal2963" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              @secal2963
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
