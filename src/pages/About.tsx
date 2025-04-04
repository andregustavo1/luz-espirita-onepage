
import { BookOpen, Users, FileText, HelpCircle, Heart, History, Star, BookMarked } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const navigateToWhatsApp = () => {
    window.open(`https://wa.me/+5577999999999?text=Olá! Gostaria de saber mais sobre a SECAL.`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-r from-primary to-secondary">
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Sobre a SECAL
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Conheça a história e a estrutura da nossa instituição
          </p>
        </div>
      </section>
      
      {/* Tabs Navigation */}
      <section className="bg-white py-12">
        <div className="container">
          <Tabs defaultValue="historico" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-100 p-1 rounded-lg">
                <TabsTrigger value="historico" className="text-sm md:text-base px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md">
                  <History className="w-4 h-4 mr-2" />
                  Histórico
                </TabsTrigger>
                <TabsTrigger value="estrutura" className="text-sm md:text-base px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md">
                  <Users className="w-4 h-4 mr-2" />
                  Estrutura
                </TabsTrigger>
                <TabsTrigger value="atividades" className="text-sm md:text-base px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md">
                  <Star className="w-4 h-4 mr-2" />
                  Atividades
                </TabsTrigger>
                <TabsTrigger value="biblioteca" className="text-sm md:text-base px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md">
                  <BookMarked className="w-4 h-4 mr-2" />
                  Biblioteca
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Histórico Content */}
            <TabsContent value="historico" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>História da SECAL</CardTitle>
                    <CardDescription>História da fundação e desenvolvimento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      A Sociedade Espírita Caminho de Luz (SECAL) foi fundada com o propósito de divulgar a doutrina espírita e proporcionar um ambiente de acolhimento e estudo. Ao longo dos anos, nossa casa tem trabalhado para levar conhecimento, conforto e assistência a todos que nos procuram.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Missão e Visão</CardTitle>
                    <CardDescription>Os princípios que nos norteiam</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Missão:</h4>
                      <p className="text-gray-600">
                        Promover o estudo, a divulgação e a prática da Doutrina Espírita, contribuindo para a transformação moral da sociedade através dos princípios de amor e caridade.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Visão:</h4>
                      <p className="text-gray-600">
                        Ser referência em estudo e prática doutrinária, formando trabalhadores capazes de multiplicar os ensinamentos espíritas e acolher com fraternidade todos que buscam auxílio.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Fundadores SECAL</CardTitle>
                    <CardDescription>Homenagem aos pioneiros</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Prestamos homenagem aos pioneiros que, com dedicação e amor, fundaram nossa casa espírita. Graças ao trabalho abnegado desses trabalhadores, a SECAL pôde se desenvolver e alcançar tantos corações ao longo de sua história.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Fundadores Posto de Assistência</CardTitle>
                    <CardDescription>Braço social da SECAL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Reconhecemos com gratidão os fundadores do Posto de Assistência, braço social da SECAL. Esta importante iniciativa tem proporcionado auxílio material e espiritual a inúmeras famílias da nossa comunidade, exemplificando o verdadeiro sentido da caridade.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Mentor Bezerra de Menezes</CardTitle>
                    <CardDescription>Nosso guia espiritual</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Dr. Adolfo Bezerra de Menezes Cavalcanti, conhecido como o "médico dos pobres", é o mentor espiritual da nossa casa. Seu exemplo de dedicação à caridade e seus ensinamentos continuam a orientar os trabalhos da SECAL, incentivando-nos a praticar a medicina da alma através do amor ao próximo.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Documentação</CardTitle>
                    <CardDescription>Normas e diretrizes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-1">Regimento Interno:</h4>
                        <p className="text-gray-600">
                          Normas e diretrizes que regem o funcionamento da nossa instituição, estabelecendo os procedimentos organizacionais da casa.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Estatuto:</h4>
                        <p className="text-gray-600">
                          Documento oficial que estabelece as bases legais e organizacionais da SECAL, definindo sua natureza jurídica e objetivos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Galeria de Ex-Diretores</CardTitle>
                    <CardDescription>Trabalhadores que contribuíram para o crescimento da nossa casa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Homenageamos todos os diretores que, ao longo da história da SECAL, dedicaram seu tempo e conhecimento à administração da casa. Graças à dedicação desses trabalhadores, nossa instituição pôde se desenvolver e ampliar suas atividades, beneficiando cada vez mais pessoas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Estrutura Content */}
            <TabsContent value="estrutura" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Organograma</CardTitle>
                    <CardDescription>Estrutura organizacional da SECAL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      A SECAL se organiza em diversos departamentos, cada um com funções específicas para o bom andamento dos trabalhos da casa. Nossa estrutura é composta por diretoria executiva, conselho fiscal e departamentos especializados (doutrinário, assistencial, infância e juventude, entre outros).
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Sócio Administrativo/Contribuinte</CardTitle>
                    <CardDescription>Participe ativamente da nossa instituição</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Você pode participar ativamente da SECAL tornando-se um sócio administrativo ou contribuinte. Os sócios administrativos participam das decisões da casa, enquanto os contribuintes auxiliam financeiramente nas atividades.
                    </p>
                    <button 
                      onClick={navigateToWhatsApp} 
                      className="px-4 py-2 bg-primary text-white rounded hover-transition hover:bg-primary/90"
                    >
                      Saiba como se tornar um sócio
                    </button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Projetos Sociais</CardTitle>
                    <CardDescription>O impacto na nossa comunidade</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      A SECAL desenvolve diversos projetos sociais que beneficiam a comunidade local. Através dessas iniciativas, buscamos proporcionar auxílio material e espiritual a famílias em situação de vulnerabilidade, exemplificando a máxima de que "fora da caridade não há salvação".
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Doações</CardTitle>
                    <CardDescription>Como contribuir com nossos projetos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Você pode contribuir com os projetos e atividades da SECAL através de doações. Os recursos arrecadados são utilizados para a manutenção da casa e para o desenvolvimento de projetos sociais.
                    </p>
                    <button 
                      onClick={navigateToWhatsApp} 
                      className="px-4 py-2 bg-primary text-white rounded hover-transition hover:bg-primary/90"
                    >
                      Saiba como doar
                    </button>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Demonstração Financeira</CardTitle>
                    <CardDescription>Transparência na gestão dos recursos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      A SECAL preza pela transparência na gestão dos recursos recebidos. Periodicamente, são divulgados relatórios e demonstrativos financeiros que apresentam de forma clara como os recursos são utilizados nas atividades e projetos da casa.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Atividades Content */}
            <TabsContent value="atividades" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="bg-primary/10 rounded-t-lg">
                    <CardTitle>Passes e Atendimento Fraterno</CardTitle>
                    <CardDescription>Segunda e Quarta - 19h30</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">
                      Os passes são uma forma de auxílio energético, enquanto o atendimento fraterno proporciona um momento de escuta e acolhimento às pessoas que estão passando por dificuldades. Ambos os trabalhos são realizados por voluntários treinados e dedicados.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-primary/10 rounded-t-lg">
                    <CardTitle>Palestras Públicas</CardTitle>
                    <CardDescription>Terça e Quinta - 20h00</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">
                      As palestras públicas são momentos de estudo e reflexão sobre temas da doutrina espírita e suas aplicações no cotidiano. São abertas a todos os interessados e constituem uma excelente oportunidade para conhecer os princípios espíritas.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader className="bg-primary/10 rounded-t-lg">
                    <CardTitle>Evangelização Infantil</CardTitle>
                    <CardDescription>Sábados - 15h00</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">
                      A evangelização infantil é um trabalho voltado para crianças e adolescentes, que busca transmitir os princípios morais do Evangelho à luz da Doutrina Espírita, utilizando metodologias adequadas a cada faixa etária. É um espaço de aprendizado e convivência, onde os pequenos podem desenvolver valores como amor, respeito e solidariedade.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Biblioteca Content */}
            <TabsContent value="biblioteca" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Biblioteca/Livraria</CardTitle>
                    <CardDescription>Acervo para consulta e aquisição</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Nossa biblioteca conta com um vasto acervo de livros espíritas e afins, disponíveis para consulta e empréstimo. Também dispomos de uma livraria onde é possível adquirir obras para estudo e aprofundamento na doutrina.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Locação/Empréstimo</CardTitle>
                    <CardDescription>Sistema de empréstimo de livros</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      O sistema de empréstimo de livros e materiais da nossa biblioteca está disponível para todos os frequentadores da casa. É uma excelente oportunidade para estudo e aprofundamento doutrinário, permitindo acesso a obras que talvez não estejam facilmente disponíveis.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Feira do Livro Espírita</CardTitle>
                    <CardDescription>Eventos periódicos de divulgação</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Realizamos periodicamente feiras do livro espírita, onde é possível encontrar literatura diversificada a preços acessíveis. Estas feiras têm como objetivo difundir o conhecimento espírita e incentivar o hábito da leitura edificante.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-3">
                  <CardHeader>
                    <CardTitle>Projeto Leitura</CardTitle>
                    <CardDescription>Incentivo ao estudo e difusão da literatura espírita</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      O Projeto Leitura é uma iniciativa que incentiva o estudo e a difusão da literatura espírita através de grupos de leitura e discussão. Periodicamente, são selecionadas obras para estudo coletivo, proporcionando um aprofundamento no entendimento dos princípios espíritas e uma oportunidade de troca de conhecimentos entre os participantes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
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
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors hover-transition"
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

export default About;
