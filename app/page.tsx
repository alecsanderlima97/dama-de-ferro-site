import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Clock3, Dumbbell, HeartPulse, MapPin, MonitorSmartphone, Sparkles, UsersRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { MobileMenu } from '@/components/mobile-menu';

const highlights: Array<[string, string, LucideIcon]> = [
  ['Treino com direção', 'Planos que acompanham seu ritmo e seus objetivos.', Dumbbell],
  ['Comunidade que impulsiona', 'Um ambiente feito para evoluir com constância.', UsersRound],
  ['Cuidado de verdade', 'Orientação para treinar com mais segurança e confiança.', HeartPulse],
];

const steps = [
  ['01', 'Conheça a Dama', 'Agende uma visita e encontre o melhor horário para você.'],
  ['02', 'Defina seu caminho', 'Converse com a equipe sobre sua rotina e seus objetivos.'],
  ['03', 'Comece a evoluir', 'Treino, acompanhamento e uma comunidade ao seu lado.'],
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell" id="inicio">
        <nav className="site-nav" aria-label="Navegação principal">
          <a className="brand-lockup" href="#inicio" aria-label="Dama de Ferro Academia - início"><span className="brand-mark">DF</span><span><strong>DAMA DE FERRO</strong><small>ACADEMIA</small></span></a>
          <div className="nav-links"><a href="#academia">A academia</a><a href="#experiencia">Experiência</a><a href="#app">Área do aluno</a></div>
          <a className="nav-cta" href="#contato">Agendar visita <ArrowUpRight size={16} /></a>
          <MobileMenu />
        </nav>
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={15} /> Força que se constrói todo dia</p>
            <h1>Seu próximo nível começa aqui.</h1>
            <p className="hero-description">Uma academia para quem quer treinar com presença, acompanhamento e vontade de ir além.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contato">Quero conhecer <ArrowDownRight size={19} /></a><a className="button button-quiet" href="#app"><MonitorSmartphone size={18} /> Conheça o app</a></div>
          </div>
          <div className="hero-emblem" aria-hidden="true"><img src="/dama-de-ferro.jpeg" alt="" /></div>
          <div className="hero-note"><span>Mais que treino</span><strong>Uma rotina que você quer manter.</strong></div>
        </div>
      </section>

      <section className="intro-section" id="academia">
        <div className="section-label"><span>01</span> A DAMA</div>
        <div className="intro-grid"><h2>Força, disciplina e pertencimento.</h2><div><p>A Dama de Ferro é um espaço para pessoas reais que decidiram cuidar de si e celebrar cada conquista no processo.</p><a className="text-link" href="#contato">Venha sentir essa energia <ChevronRight size={17} /></a></div></div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-dot" /> UMA EXPERIÊNCIA COMPLETA</p><h2>O seu treino merece mais intenção.</h2></div><p>Estrutura, orientação e recursos que deixam sua rotina mais leve e consistente.</p></div>
         <div className="highlight-grid">{highlights.map(([title, text, FeatureIcon], index) => <article className="highlight-card" key={title}><div className="card-top"><span>0{index + 1}</span><FeatureIcon size={25} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="app-section" id="app">
        <div className="phone-panel"><div className="phone-top"><span>9:41</span><span>● ● ●</span></div><div className="phone-brand">DF</div><p>Olá, você.</p><h3>Seu treino de hoje</h3><div className="workout-card"><span>Treino A</span><strong>Inferiores</strong><div><span>6 exercícios</span><ArrowUpRight size={16} /></div></div><div className="phone-tabs"><span>Início</span><span>Treino</span><span>Perfil</span></div></div>
        <div className="app-copy"><p className="eyebrow"><MonitorSmartphone size={15} /> ÁREA DO ALUNO</p><h2>Sua evolução também cabe no bolso.</h2><p>Acompanhe seus treinos, evolução e avisos da academia direto pelo celular. Em breve, uma experiência pensada para fazer parte da sua rotina.</p><ul><li><Check size={18} /> Treinos e acompanhamento em um só lugar</li><li><Check size={18} /> Histórico para enxergar sua evolução</li><li><Check size={18} /> Acesso prático pelo celular</li></ul><span className="coming-soon">EM BREVE PARA ALUNOS DA DAMA DE FERRO</span></div>
      </section>

      <section className="path-section"><div className="section-heading compact"><div><p className="eyebrow"><span className="eyebrow-dot" /> O PRIMEIRO PASSO</p><h2>Começar pode ser simples.</h2></div></div><div className="steps-grid">{steps.map(([number, title, text]) => <article key={number} className="step-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="contact-section" id="contato"><div><p className="eyebrow"><span className="eyebrow-dot" /> VAMOS CONVERSAR</p><h2>Seu lugar de evoluir está te esperando.</h2></div><div className="contact-actions"><button className="button button-primary" type="button" disabled>WhatsApp em breve <ArrowUpRight size={19} /></button><p><MapPin size={17} /> Endereço e WhatsApp em atualização</p></div></section>

      <footer><div className="footer-brand"><span>DF</span> DAMA DE FERRO <small>ACADEMIA</small></div><p>© 2026 Dama de Ferro Academia</p><div><Clock3 size={16} aria-hidden="true" /> Informações de horários em breve</div></footer>
    </main>
  );
}
