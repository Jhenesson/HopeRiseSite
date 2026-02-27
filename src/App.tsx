import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Music, 
  Mic2, 
  Video, 
  Camera, 
  Film, 
  Rocket, 
  Instagram, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X,
  Play
} from 'lucide-react';
import { cn } from './lib/utils';

const SERVICES = [
  {
    title: "Produção Musical",
    description: "Produção completa de músicas, desde a pré-produção até a finalização. Arranjos, direção vocal, captação profissional, edição, mixagem e masterização.",
    icon: Music,
  },
  {
    title: "Gravação em Estúdio",
    description: "Captação profissional de voz e instrumentos em ambiente tratado acusticamente, garantindo qualidade sonora e performance refinada.",
    icon: Mic2,
  },
  {
    title: "Videoclipes",
    description: "Criação e produção de videoclipes com direção criativa, roteiro, captação cinematográfica e edição profissional.",
    icon: Video,
  },
  {
    title: "Captação de Vídeo Ao Vivo",
    description: "Gravação de sessões ao vivo, apresentações, projetos especiais e conteúdos para redes sociais.",
    icon: Camera,
  },
  {
    title: "Produção Audiovisual Completa",
    description: "Desenvolvimento de projetos audiovisuais do zero: conceito, roteiro, captação, edição e entrega final.",
    icon: Film,
  },
  {
    title: "Direção Criativa e Branding",
    description: "Posicionamento estratégico, construção de identidade visual, direcionamento artístico e desenvolvimento de marca pessoal.",
    icon: Rocket,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-display font-bold tracking-tighter text-gradient-brand">
              HOPE RISE
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">Início</a>
              <a href="#sobre" className="hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">Quem Somos</a>
              <a href="#servicos" className="hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">Serviços</a>
              <a href="#contato" className="hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">Contato</a>
              <a 
                href="https://wa.me/5527981210977" 
                target="_blank" 
                rel="noreferrer"
                className="bg-brand text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-light transition-all transform hover:scale-105"
              >
                WHATSAPP
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-cinematic-black border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand">Início</a>
              <a href="#sobre" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand">Quem Somos</a>
              <a href="#servicos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand">Serviços</a>
              <a href="#contato" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand">Contato</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-cinematic-black via-cinematic-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 border border-brand/30 rounded-full text-brand text-xs font-bold tracking-[0.3em] uppercase bg-brand/5">
            Audiovisual & Musical
          </span>
          <h1 className="text-5xl md:text-8xl font-sans font-bold mb-8 leading-[1.1] tracking-tight">
            A Hope é um <br />
            lugar de <span className="text-gradient-brand italic font-display">esperança.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Criar é um ato de coragem e todo artista precisa de um lugar para esperançar. <br />
            A Hope Rise existe para ser esse espaço: onde sua música, sua história e seu potencial encontram força para crescer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/5527981210977" 
              target="_blank" 
              rel="noreferrer"
              className="group relative px-8 py-4 bg-brand text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={20} />
              FALE CONOSCO NO WHATSAPP
            </a>
            <a 
              href="#servicos" 
              className="px-8 py-4 border border-white/20 hover:border-brand/50 hover:bg-white/5 font-bold rounded-full transition-all flex items-center gap-2"
            >
              CONHEÇA NOSSOS SERVIÇOS
              <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-12 bg-linear-to-b from-brand to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-cinematic-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1520529011842-be1b4459ce50?auto=format&fit=crop&q=80&w=1000" 
                alt="Produção Musical" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-display font-bold text-brand">100%</div>
              <div className="text-xs uppercase tracking-widest text-white/50">Compromisso Artístico</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Hope Rise não é <br />
              <span className="italic text-white/60">só uma produtora.</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
              <p>
                Desde 2010, ela tem sido o lugar onde sonhos ganham forma. Mais de 15 milhões de plays depois, seguimos fazendo o que sempre fizemos: acreditar no talento de quem chega aqui e trabalhar para que ele chegue mais longe.
              </p>
              <p>
                Fundada por Jhenesson a partir de uma paixão que não cabia só nele, a Hope Rise cresceu com um compromisso claro — oferecer o melhor para artistas, sem que o custo seja um obstáculo para o sonho. Projetos como o Hope Session Colaborativo, onde o artista grava com banda ao vivo, e dois concursos de música autoral que já levaram dezenas de pessoas a realizarem o sonho de gravar, mostram que aqui a arte é levada a sério e com coração.
              </p>
              <p>
                É o lugar onde artistas chegam com uma ideia e saem com uma identidade. Onde o som encontra a imagem, a visão encontra a estratégia, e o talento encontra o caminho.
              </p>
              <p className="font-medium text-white">
                Esse espaço é a Hope Rise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Nossa Expertise</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Serviços de Excelência</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:border-brand/30 transition-all group"
            >
              <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-black transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand transition-colors">{service.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TESTIMONIALS = [
  {
    name: "Vinicius Ferreira",
    text: "A Hope é um lugar de esperançar. Para quem vive da arte, acreditar no próprio trabalho é um desafio diário e a Hope é o espaço que nos ajuda a não desistir. A ter esperança na nossa arte. No que a gente produz. Em quem a gente é.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Leticia Santos",
    text: "Gravar na Hope foi uma virada de chave na minha carreira. A qualidade técnica e o acolhimento são incomparáveis. Me senti em casa e o resultado final superou todas as minhas expectativas.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Gabriel Lima",
    text: "O compromisso com a arte é real. A Hope Rise não entrega apenas um produto, entrega uma identidade. É o lugar onde minha visão encontrou a estratégia certa para chegar ao público.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Vozes da Hope</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">O que dizem nossos artistas</h2>
        </div>

        <div className="max-w-4xl mx-auto relative px-12 md:px-20">
          {/* Navigation Buttons - Sides */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all z-30 bg-zinc-900/50 backdrop-blur-sm"
          >
            <ChevronRight size={24} className="rotate-180" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all z-30 bg-zinc-900/50 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
            {TESTIMONIALS.map((testimonial, index) => {
              // Calculate position relative to activeIndex
              let position = index - activeIndex;
              if (position < 0) position += TESTIMONIALS.length;
              
              // We only want to show 3 cards max in the stack
              const isVisible = position <= 2;
              
              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    scale: isVisible ? 1 - position * 0.05 : 0.8,
                    y: isVisible ? position * 20 : 40,
                    opacity: isVisible ? 1 - position * 0.3 : 0,
                    zIndex: TESTIMONIALS.length - position,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={cn(
                    "absolute inset-0 glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-center",
                    !isVisible && "pointer-events-none"
                  )}
                >
                  <div className="absolute top-8 left-8 text-brand/10 pointer-events-none">
                    <Play size={80} fill="currentColor" className="rotate-180" />
                  </div>
                  
                  <div className="relative z-10">
                    <blockquote className="mb-8">
                      <p className="text-lg md:text-xl font-display italic leading-relaxed text-white/90">
                        "{testimonial.text}"
                      </p>
                    </blockquote>
                    
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-brand/30 shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="w-8 md:w-12 h-[1px] bg-brand mb-2" />
                        <cite className="not-italic font-bold tracking-widest uppercase text-brand text-xs md:text-sm">
                          {testimonial.name}
                        </cite>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section className="py-24 bg-cinematic-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Nossa Casa</span>
            <h2 className="text-4xl font-display font-bold mb-8">Onde a mágica acontece</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-medium">R. Homero Massena - Cidade Continental, Setor Europa</p>
                  <p className="text-white/60">Serra - ES, 29163-544, Brasil</p>
                </div>
              </div>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Um espaço projetado para o conforto e a melhor performance técnica. Atendemos artistas de todo o Brasil, presencialmente ou através de consultoria e produção online.
              </p>
              <a 
                href="https://maps.app.goo.gl/V17uq3rg9AhM7aCp8" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brand font-bold hover:underline"
              >
                VER NO GOOGLE MAPS <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.186663248354!2d-40.2319349!3d-20.1887955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDExJzE5LjciUyA0MMKwMTMnNTUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Hope Rise"
              className="grayscale contrast-125"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Hope Rise! Meu nome é ${formState.name} (${formState.email}). Gostaria de produzir meu projeto: ${formState.message}`;
    const whatsappUrl = `https://wa.me/5527981210977?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-8">Vamos tirar sua <br /><span className="text-gradient-brand">ideia do papel?</span></h2>
            
            <div className="space-y-8 mb-12">
              <a href="https://wa.me/5527981210977" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-xl font-bold">+55 27 98121-0977</p>
                </div>
              </a>

              <a href="https://www.instagram.com/hoperiseprodutora/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-widest">Instagram</p>
                  <p className="text-xl font-bold">@hoperiseprodutora</p>
                </div>
              </a>

              <a href="mailto:contato@hoperiseprodutora.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-widest">Email</p>
                  <p className="text-xl font-bold">contato@hoperiseprodutora.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/50 uppercase tracking-widest mb-2">Nome</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/50 uppercase tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/50 uppercase tracking-widest mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand transition-all resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand text-black font-bold py-4 rounded-xl hover:bg-brand-light transition-all transform active:scale-95"
              >
                QUERO PRODUZIR MEU PROJETO
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-cinematic-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-xl font-display font-bold tracking-tighter text-gradient-brand block mb-4">
          HOPE RISE PRODUTORA
        </span>
        <p className="text-white/40 text-sm mb-8">
          © {new Date().getFullYear()} Hope Rise Produtora. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/hoperiseprodutora/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-brand transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/5527981210977" target="_blank" rel="noreferrer" className="text-white/40 hover:text-brand transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href="mailto:contato@hoperiseprodutora.com" className="text-white/40 hover:text-brand transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
