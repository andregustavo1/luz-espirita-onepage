
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="card hover-elevate flex p-6 animate-on-scroll"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mr-4">
        <div className="p-3 rounded-full bg-secondary/20 hover-transition hover:bg-secondary/30">
          <Icon className="h-6 w-6 text-secondary-dark" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
