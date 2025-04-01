
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  day: string;
  delay?: number;
}

const TimelineItem = ({ 
  icon: Icon, 
  title, 
  description, 
  day,
  delay = 0 
}: TimelineItemProps) => {
  return (
    <div 
      className="relative flex flex-col md:flex-row items-center animate-on-scroll"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="md:w-24 mb-4 md:mb-0 flex flex-col items-center">
        <div className="p-3 rounded-full bg-secondary/20 mb-2">
          <Icon className="h-6 w-6 text-secondary-dark" />
        </div>
        <span className="text-sm font-medium text-gray-500">{day}</span>
      </div>
      
      <div className="hidden md:block w-8 h-0.5 bg-gray-200"></div>
      
      <div className="card md:ml-4 flex-1">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
