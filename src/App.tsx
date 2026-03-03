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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788.45734 105.2268" className="h-6 md:h-8 w-auto text-white" aria-label="Hope Rise Logo"><defs><clipPath id="clipPath22"><path d="M 0,78.92 H 591.343 V 0 H 0 Z"></path></clipPath></defs><g transform="matrix(1.3333333,0,0,-1.3333333,0,105.2268)"><g transform="translate(194.0139,66.6534)"><path fill="currentColor" fillRule="nonzero" d="m 0,0 v -47.427 h -12.333 v 19.92 h -3.691 v -19.92 H -28.357 V 0 h 12.333 v -16.961 h 3.691 V 0 Z"></path></g><g><g clipPath="url(#clipPath22)"><g transform="translate(238.81,54.4665)"><path fill="currentColor" fillRule="nonzero" d="M 0,0 C 0,2.207 -0.122,3.618 -0.366,4.233 -0.611,4.849 -1.114,5.156 -1.875,5.156 -2.519,5.156 -3.013,4.907 -3.354,4.409 -3.696,3.911 -3.867,2.441 -3.867,0 v -22.146 c 0,-2.754 0.112,-4.452 0.337,-5.097 0.224,-0.644 0.747,-0.966 1.567,-0.966 0.84,0 1.377,0.37 1.612,1.113 0.234,0.742 0.351,2.509 0.351,5.302 z m 12.333,-15.584 c 0,-4.765 -0.113,-8.139 -0.337,-10.121 -0.225,-1.983 -0.928,-3.794 -2.11,-5.434 -1.181,-1.64 -2.778,-2.9 -4.789,-3.779 -2.012,-0.879 -4.355,-1.318 -7.03,-1.318 -2.539,0 -4.819,0.415 -6.841,1.245 -2.021,0.83 -3.647,2.075 -4.877,3.735 -1.23,1.66 -1.963,3.466 -2.197,5.42 -0.235,1.952 -0.352,5.369 -0.352,10.252 v 8.115 c 0,4.764 0.112,8.138 0.337,10.12 0.224,1.982 0.928,3.794 2.109,5.434 1.182,1.641 2.779,2.901 4.79,3.779 2.011,0.879 4.355,1.318 7.031,1.318 2.538,0 4.818,-0.415 6.839,-1.245 2.022,-0.83 3.648,-2.075 4.878,-3.734 1.23,-1.661 1.963,-3.467 2.197,-5.42 0.234,-1.953 0.352,-5.37 0.352,-10.252 z"></path></g><g transform="translate(292.0715,58.5389)"><path fill="currentColor" fillRule="nonzero" d="m 0,0 v -12.069 c 0.351,-0.02 0.654,-0.03 0.908,-0.03 1.133,0 1.919,0.278 2.358,0.835 0.44,0.557 0.66,1.714 0.66,3.472 v 3.896 c 0,1.62 -0.254,2.675 -0.762,3.164 C 2.656,-0.245 1.601,0 0,0 M -12.333,8.115 H 0.088 C 3.446,8.115 6.029,7.85 7.836,7.324 9.642,6.796 11,6.034 11.908,5.039 12.816,4.042 13.431,2.836 13.753,1.42 c 0.323,-1.416 0.484,-3.608 0.484,-6.576 v -4.13 c 0,-3.028 -0.313,-5.235 -0.938,-6.621 -0.625,-1.387 -1.772,-2.451 -3.442,-3.193 -1.67,-0.742 -3.852,-1.113 -6.547,-1.113 H 0 v -19.1 h -12.333 z"></path></g><g transform="translate(333.85,66.6534)"><path fill="currentColor" fillRule="nonzero" d="m 0,0 h 20.564 v -9.492 h -8.231 v -8.992 h 7.704 v -9.023 h -7.704 v -10.429 h 9.052 v -9.491 H 0 Z"></path></g><g transform="translate(429.6825,58.5389)"><path fill="currentColor" fillRule="nonzero" d="m 0,0 v -10.546 c 1.386,0 2.357,0.191 2.914,0.572 0.556,0.38 0.835,1.615 0.835,3.705 v 2.607 c 0,1.503 -0.269,2.49 -0.805,2.959 C 2.406,-0.235 1.424,0 0,0 m -12.333,8.115 h 8.729 c 5.819,0 9.76,-0.226 11.82,-0.675 2.061,-0.449 3.74,-1.597 5.039,-3.442 1.298,-1.845 1.948,-4.789 1.948,-8.832 0,-3.691 -0.459,-6.171 -1.376,-7.44 -0.919,-1.27 -2.725,-2.031 -5.42,-2.285 2.441,-0.606 4.081,-1.416 4.921,-2.432 0.839,-1.016 1.362,-1.948 1.568,-2.797 0.204,-0.85 0.307,-3.189 0.307,-7.017 V -39.313 H 3.749 v 15.761 c 0,2.538 -0.2,4.11 -0.601,4.716 -0.4,0.605 -1.45,0.908 -3.148,0.908 v -21.385 h -12.333 z"></path></g><path fill="currentColor" fillRule="nonzero" d="m 485.991,19.226 h -12.333 v 47.427 h 12.333 z"></path><g transform="translate(541.069,52.2991)"><path fill="currentColor" fillRule="nonzero" d="m 0,0 h -11.455 v 3.515 c 0,1.641 -0.146,2.685 -0.438,3.135 -0.294,0.448 -0.782,0.673 -1.466,0.673 -0.742,0 -1.303,-0.303 -1.683,-0.909 -0.381,-0.606 -0.572,-1.524 -0.572,-2.755 0,-1.583 0.214,-2.775 0.642,-3.576 0.409,-0.802 1.57,-1.769 3.485,-2.899 5.49,-3.259 8.948,-5.933 10.373,-8.023 1.425,-2.09 2.139,-5.459 2.139,-10.107 0,-3.378 -0.396,-5.868 -1.187,-7.469 -0.791,-1.601 -2.319,-2.944 -4.584,-4.028 -2.265,-1.084 -4.902,-1.625 -7.909,-1.625 -3.301,0 -6.118,0.624 -8.451,1.874 -2.335,1.249 -3.863,2.841 -4.585,4.775 -0.723,1.933 -1.084,4.677 -1.084,8.232 v 3.105 h 11.454 v -5.771 c 0,-1.778 0.161,-2.92 0.483,-3.427 0.322,-0.508 0.894,-0.762 1.714,-0.762 0.821,0 1.43,0.322 1.831,0.966 0.4,0.645 0.6,1.602 0.6,2.872 0,2.791 -0.381,4.617 -1.142,5.477 -0.782,0.859 -2.705,2.294 -5.771,4.306 -3.066,2.031 -5.097,3.506 -6.093,4.424 -0.996,0.917 -1.821,2.187 -2.475,3.808 -0.655,1.62 -0.982,3.691 -0.982,6.211 0,3.631 0.464,6.287 1.392,7.967 0.927,1.679 2.426,2.993 4.496,3.94 2.07,0.947 4.57,1.421 7.499,1.421 3.203,0 5.933,-0.518 8.188,-1.553 2.255,-1.035 3.749,-2.338 4.482,-3.911 C -0.366,8.314 0,5.644 0,1.875 Z"></path></g><g transform="translate(569.9586,66.6534)"><path fill="currentColor" fillRule="nonzero" d="m 0,0 h 20.564 v -9.492 h -8.231 v -8.992 h 7.703 v -9.023 h -7.703 v -10.429 h 9.051 v -9.491 H 0 Z"></path></g><g transform="translate(82.8373,41.2339)"><path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" d="m 0,0 c -0.801,-1.493 -1.494,-3.028 -1.757,-4.713 -0.274,-1.752 -1.095,-3.206 -2.248,-4.519 -1.689,-1.927 -3.821,-3.138 -6.21,-3.96 -0.759,-0.261 -1.505,-0.721 -2.282,-0.031 -0.086,0.077 -0.253,0.074 -0.384,0.085 -0.173,0.013 -0.295,0.044 -0.282,0.265 0.017,0.268 -0.188,0.33 -0.396,0.347 -0.209,0.016 -0.35,-0.118 -0.373,-0.308 -0.053,-0.434 -0.346,-0.566 -0.712,-0.652 -0.459,-0.107 -0.86,-0.348 -1.265,-0.58 -0.961,-0.551 -1.915,-1.117 -2.895,-1.632 -1.95,-1.024 -2.199,-1.723 -1.264,-3.727 0.028,-0.06 0.069,-0.115 0.093,-0.176 0.236,-0.596 0.699,-0.729 1.249,-0.546 2.355,0.783 4.717,1.547 7.018,2.484 0.547,0.223 0.952,0.595 1.035,1.199 0.045,0.331 0.233,0.428 0.498,0.525 2.183,0.795 4.234,1.862 6.026,3.334 2.473,2.031 4.398,4.45 4.835,7.77 0.082,0.62 0.271,1.212 0.474,1.8 0.774,2.244 1.998,4.247 3.343,6.182 0.086,0.124 0.16,0.276 0.349,0.274 0.331,-1.911 0.501,-3.823 0.435,-5.777 -0.115,-3.362 -0.909,-6.555 -2.208,-9.622 -1.761,-4.153 -4.408,-7.653 -7.924,-10.512 -3.784,-3.078 -8.09,-4.979 -12.865,-5.787 -3.181,-0.538 -6.4,-0.502 -9.571,0.133 -6.956,1.393 -12.659,4.862 -16.923,10.562 -3.29,4.398 -5.082,9.37 -5.359,14.866 -0.164,3.233 0.285,6.394 1.199,9.493 1.528,5.179 4.241,9.6 8.461,13.015 3.125,2.529 6.694,4.212 10.565,5.275 3.275,0.899 6.594,1.358 9.991,1.018 3.51,-0.351 6.816,-1.377 9.903,-3.091 C -3.732,19.823 0.648,15.419 3.167,9.308 3.544,8.392 3.993,7.49 4.073,6.474 2.66,4.351 1.208,2.253 0,0 Z"></path></g><g transform="translate(21.4898,57.9517)"><path fill="#bc1f2d" fillRule="nonzero" d="M 0,0 C -3.521,-1.39 -6.915,1.191 -6.872,4.464 -6.835,7.168 -4.68,9.263 -1.937,9.262 1.474,9.261 4.054,5.859 2.434,2.322 1.953,1.27 1.076,0.425 0,0"></path></g><g transform="translate(60.7433,39.9184)"><path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" d="M 0,0 C 0,-0.284 0.231,-0.516 0.512,-0.516 0.8,-0.517 1.033,-0.289 1.033,0.001 1.032,0.288 0.801,0.517 0.515,0.517 0.23,0.518 0,0.286 0,0 Z M 0.513,-0.533 C 0.25,-0.539 -0.018,-0.326 -0.02,-0.001 -0.021,0.313 0.237,0.538 0.518,0.535 0.814,0.532 1.052,0.295 1.051,-0.003 1.05,-0.304 0.798,-0.54 0.513,-0.533 Z"></path></g><g transform="translate(112.2481,1.5)"><path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" d="m 0,0 h -98.748 c -6.6,0 -12,5.4 -12,12 v 51.92 c 0,6.6 5.4,12 12,12 H 0 c 6.6,0 12,-5.4 12,-12 V 12 C 12,5.4 6.6,0 0,0 Z"></path></g><g transform="translate(21.4898,57.9517)"><path fill="#bc1f2d" fillRule="nonzero" d="M 0,0 C -3.521,-1.39 -6.915,1.191 -6.872,4.464 -6.835,7.168 -4.68,9.263 -1.937,9.262 1.474,9.261 4.054,5.859 2.434,2.322 1.953,1.27 1.076,0.425 0,0"></path></g><g transform="translate(61.3106,29.5876)"><path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" d="M 0,0 C 5.748,0.005 10.262,4.636 10.257,10.521 10.253,16.149 5.588,20.73 -0.13,20.722 -5.867,20.715 -10.414,16.102 -10.413,10.291 -10.412,4.54 -5.812,-0.005 0,0 Z"></path></g><g transform="translate(94.734,64.1568)"><path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" d="m 0,0 c -4.552,0.002 -8.127,-3.475 -8.187,-7.961 -0.031,-2.34 1.003,-4.46 2.651,-5.938 L 3.233,-0.66 C 2.243,-0.238 1.151,0 0,0 Z"></path></g><g transform="translate(100.1246,62.1357)"><path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" d="m 0,0 -9.043,-13.146 c 1.085,-0.529 2.301,-0.836 3.588,-0.838 4.636,-0.005 8.176,3.553 8.139,8.182 C 2.665,-3.491 1.63,-1.429 0,0 Z"></path></g></g></g></g></svg>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">Início</a>
              <a href="#sobre" className="hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">Quem Somos</a>
              <a href="#servicos" className="hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">Serviços</a>
              <a href="#depoimentos" className="hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">Depoimentos</a>
              <a href="#endereco" className="hover:text-brand transition-colors text-sm font-medium uppercase tracking-widest">Endereço</a>
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
              <a href="#depoimentos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand">Depoimentos</a>
              <a href="#endereco" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand">Endereço</a>
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
                src="https://www.hoperiseprodutora.com/fotos/IMG_0057.jpg" 
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
    name: "Rael Martins",
    text: "A Hoperise produtora é a mais completa, criativa e engajada em fazer os artistas sonharem. Conheço desde a pandemia, período difícil de se pensar em arte, mas esse lugar me deu força e energia pra permanecer.",
    image: "http://hoperiseprodutora.com/fotos/rael.png",
  },
  {
    name: "Vinicius Ferreira",
    text: "A Hope é um lugar de esperançar. Para quem vive da arte, acreditar no próprio trabalho é um desafio diário e a Hope é o espaço que nos ajuda a não desistir. A ter esperança na nossa arte. No que a gente produz. Em quem a gente é.",
    image: "http://hoperiseprodutora.com/fotos/vini.png",
  },
  {
    name: "Dan",
    text: "Crescemos juntos e é um imenso orgulho trabalhar com essa equipe durante todos esses anos, sempre preocupados em tornar os nossos sonhos realidade em um país onde pouco se apoia a música, sempre grato que Deus abençoe a nossa caminhada",
    image: "http://hoperiseprodutora.com/fotos/dan.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Vinicius Ferreira is at index 1

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="depoimentos" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Vozes da Hope</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">O que dizem nossos artistas</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons - Sides */}
          <button 
            onClick={prev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all z-40 bg-zinc-900/80 backdrop-blur-sm"
          >
            <ChevronRight size={24} className="rotate-180" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all z-40 bg-zinc-900/80 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex items-center justify-center gap-4 md:gap-8 min-h-[450px] relative">
            {TESTIMONIALS.map((testimonial, index) => {
              // Calculate relative position for the 3-card view
              let diff = index - activeIndex;
              // Handle wrap around
              if (diff > 1) diff -= TESTIMONIALS.length;
              if (diff < -1) diff += TESTIMONIALS.length;
              
              const isActive = diff === 0;
              const isVisible = Math.abs(diff) <= 1;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                    x: diff * 100 + "%",
                    zIndex: isActive ? 30 : 20,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className={cn(
                    "absolute w-full max-w-md glass-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] flex flex-col justify-center transition-shadow duration-500",
                    isActive ? "border-brand/40 shadow-[0_0_50px_-12px_rgba(56,173,191,0.3)] bg-white/5" : "pointer-events-none"
                  )}
                >
                  <div className="absolute top-6 left-6 text-brand/10 pointer-events-none">
                    <Play size={isActive ? 60 : 40} fill="currentColor" className="rotate-180" />
                  </div>
                  
                  <div className="relative z-10">
                    <blockquote className="mb-8">
                      <p className={cn(
                        "font-display italic leading-relaxed text-white/90 transition-all",
                        isActive ? "text-lg md:text-xl" : "text-base"
                      )}>
                        "{testimonial.text}"
                      </p>
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "rounded-full overflow-hidden border-2 border-brand/30 shrink-0 transition-all",
                        isActive ? "w-14 h-14" : "w-10 h-10"
                      )}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="w-8 h-[1px] bg-brand mb-1" />
                        <cite className="not-italic font-bold tracking-widest uppercase text-brand text-xs">
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
    <section id="endereco" className="py-24 bg-cinematic-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">Endereço</span>
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
                href="https://maps.app.goo.gl/ngKbZbrfKvFvwQc57" 
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
              src="https://maps.google.com/maps?q=hope%20rise%20produtora&t=&z=14&ie=UTF8&iwloc=B&output=embed" 
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
