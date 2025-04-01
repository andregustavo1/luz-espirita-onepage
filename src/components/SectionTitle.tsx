
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, light = false }: SectionTitleProps) => {
  return (
    <div className="mb-12 animate-on-scroll">
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${light ? 'text-white/80' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
