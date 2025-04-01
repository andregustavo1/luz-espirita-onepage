
import { useEffect } from 'react';
import { BookOpen, Heart, MessageSquare, Users, BookMarked, BookText, HandHeart, Baby, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import ServiceCard from '../components/ServiceCard';
import TimelineItem from '../components/TimelineItem';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import { setupAnimations } from '../utils/animations';

const Index = () => {
  useEffect(() => {
    setupAnimations();
  }, []);

  const navigateToWhatsApp = () => {
    window.open(`https://wa.me/+5577999999999?text=Olá! Gostaria de saber mais sobre a SECAL.`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Conhecimento, Amor e Caridade
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Iluminando caminhos através da doutrina espírita
          </p>
          <button 
            className="btn-primary text-lg animate-fade-in"
            style={{ animationDelay: '400ms' }}
            onClick={navigateToWhatsApp}
          >
            Conheça Nossas Atividades
          </button>
        </div>
      </section>
      
      {/* Sobre Nós */}
      <section id="sobre" className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80" 
                alt="SECAL" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Quem Somos</h2>
                <p className="text-gray-600 mb-6">
                  Somos um centro espírita dedicado à divulgação da doutrina espírita, 
                  oferecendo estudos, palestras, atendimento fraterno e atividades assistenciais. 
                  Comprometidos com a transformação moral e espiritual de todos que nos procuram.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                  <div className="flex items-center mb-2">
                    <div className="p-2 mr-3 rounded-full bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Estudo Doutrinário</h3>
                  </div>
                  <p className="text-gray-600 pl-12">
                    Grupos de estudo sistemático da doutrina espírita.
                  </p>
                </div>
                
                <div className="animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                  <div className="flex items-center mb-2">
                    <div className="p-2 mr-3 rounded-full bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Atendimento Fraterno</h3>
                  </div>
                  <p className="text-gray-600 pl-12">
                    Acolhimento e orientação espiritual individualizada.
                  </p>
                </div>
                
                <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
                  <div className="flex items-center mb-2">
                    <div className="p-2 mr-3 rounded-full bg-primary/10">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Atividades de Assistência</h3>
                  </div>
                  <p className="text-gray-600 pl-12">
                    Trabalhos assistenciais para a comunidade.
                  </p>
                </div>
                
                <div className="animate-on-scroll" style={{ transitionDelay: '400ms' }}>
                  <div className="flex items-center mb-2">
                    <div className="p-2 mr-3 rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">Palestras Públicas</h3>
                  </div>
                  <p className="text-gray-600 pl-12">
                    Palestras doutrinárias abertas à comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Diferenciais */}
      <section id="diferenciais" className="bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="O Que Oferecemos" 
            subtitle="Na SECAL, você encontrará um espaço de acolhimento e aprendizado espiritual"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Heart} 
              title="Ambiente Acolhedor" 
              description="Um espaço de paz e harmonia para todos que buscam conforto espiritual."
              delay={100}
            />
            <FeatureCard 
              icon={BookOpen} 
              title="Estudos Fundamentados" 
              description="Compromisso com o estudo sério e fundamentado da doutrina espírita."
              delay={200}
            />
            <FeatureCard 
              icon={MessageSquare} 
              title="Orientação Espiritual" 
              description="Atendimento fraterno individualizado para orientação e acolhimento."
              delay={300}
            />
            <FeatureCard 
              icon={Users} 
              title="Trabalho Voluntário" 
              description="Oportunidades de crescimento através do trabalho voluntário e assistencial."
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Nossas Atividades */}
      <section id="atividades" className="bg-white">
        <div className="container">
          <SectionTitle 
            title="Nossas Atividades" 
            subtitle="Conheça as atividades que realizamos em nossa casa espírita"
          />
          
          <div className="space-y-4">
            <ServiceCard 
              icon={BookMarked} 
              title="Estudo Sistematizado" 
              description="Grupos de estudo da doutrina espírita, com abordagem sistemática das obras básicas."
              delay={100}
            />
            <ServiceCard 
              icon={Users} 
              title="Palestras Doutrinárias" 
              description="Exposições sobre temas da doutrina espírita, abertas ao público em geral."
              delay={200}
            />
            <ServiceCard 
              icon={MessageSquare} 
              title="Atendimento Fraterno" 
              description="Atendimento individual para acolhimento, escuta e orientação espiritual."
              delay={300}
            />
            <ServiceCard 
              icon={Baby} 
              title="Evangelização Infantil" 
              description="Ensino dos princípios morais e espirituais para crianças, através de atividades lúdicas."
              delay={400}
            />
            <ServiceCard 
              icon={Sparkles} 
              title="Mocidade Espírita" 
              description="Grupo dedicado aos jovens, promovendo o estudo da doutrina e o desenvolvimento de valores morais."
              delay={500}
            />
          </div>
        </div>
      </section>
      
      {/* Programação */}
      <section id="programacao" className="bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Nossa Programação Semanal" 
            subtitle="Acompanhe nossas atividades e participe dos nossos encontros"
          />
          
          <div className="space-y-8">
            <TimelineItem 
              icon={Users}
              title="Palestras Públicas"
              description="Exposições doutrinárias abertas ao público, seguidas de passe magnético."
              day="Segunda-feira"
              delay={100}
            />
            <TimelineItem 
              icon={BookMarked}
              title="Grupos de Estudo"
              description="Estudo sistematizado da doutrina espírita em diferentes níveis."
              day="Terça e Quinta-feira"
              delay={200}
            />
            <TimelineItem 
              icon={MessageSquare}
              title="Passes e Atendimento"
              description="Atendimento fraterno e aplicação de passes para harmonização."
              day="Quarta-feira"
              delay={300}
            />
            <TimelineItem 
              icon={Heart}
              title="Assistência Social"
              description="Atividades de assistência material e espiritual à comunidade."
              day="Sábado"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Contato */}
      <section id="contato" className="bg-white">
        <div className="container">
          <SectionTitle 
            title="Entre em Contato" 
            subtitle="Estamos à disposição para receber você em nossa casa"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactInfo />
            
            <div className="h-80 md:h-full rounded-lg overflow-hidden shadow-lg animate-on-scroll">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30893.59233537018!2d-45.80359465!3d-12.0956893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934ad075e126485d%3A0x1a97d2f6a7f92b7!2sLu%C3%ADs%20Eduardo%20Magalh%C3%A3es%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1720013644209!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização SECAL"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Last CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Venha Conhecer Nossa Casa
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Estamos de portas abertas para receber você e sua família. 
              Conheça nossas atividades e participe dos nossos estudos.
            </p>
            <button 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              onClick={navigateToWhatsApp}
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
