import { ArrowDownRight, ArrowUpRight, CalendarDays, Check, ChevronRight, Clock3, Dumbbell, HeartPulse, MapPin, Menu, MonitorSmartphone, Sparkles, UsersRound } from 'lucide-react';

const highlights = [
  ['Treino com direcao', 'Planos que acompanham seu ritmo e seus objetivos.', Dumbbell],
  ['Comunidade que impulsiona', 'Um ambiente feito para evoluir com constancia.', UsersRound],
  ['Cuidado de verdade', 'Orientacao para treinar com mais seguranca e confianca.', HeartPulse],
];

const steps = [
  ['01', 'Conheca a Dama', 'Agende uma visita e encontre o melhor horario para voce.'],
  ['02', 'Defina seu caminho', 'Converse com a equipe sobre sua rotina e seus objetivos.'],
  ['03', 'Comece a evoluir', 'Treino, acompanhamento e uma comunidade ao seu lado.'],
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell" id="inicio">
        <nav className="site-nav" aria-label="Navegacao principal">
          <a className="brand-lockup" href="#inicio" aria-label="Dama de Ferro Academia - inicio"><span className="brand-mark">DF</span><span><strong>DAMA DE FERRO</strong><small>ACADEMIA</small></span></a>
          <div className="nav-links"><a href="#academia">A academia</a><a href="#experiencia">Experiencia</a><a href="#app">Area do aluno</a></div>
          <a className="nav-cta" href="#contato">Agendar visita <ArrowUpRight size={16} /></a>
          <button className="menu-button" type="button" aria-label="Abrir menu"><Menu size={22} /></button>
        </nav>
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={15} /> Forca que se constroi todo dia</p>
            <h1>Seu proximo nivel comeca aqui.</h1>
            <p className="hero-description">Uma academia para quem quer treinar com presenca, acompanhamento e vontade de ir alem.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contato">Quero conhecer <ArrowDownRight size={19} /></a><a className="button button-quiet" href="#app"><MonitorSmartphone size={18} /> Conheca o app</a></div>
          </div>
          <div className="hero-emblem" aria-hidden="true"><img src="/dama-de-ferro.jpeg" alt="" /></div>
          <div className="hero-note"><span>Mais que treino</span><strong>Uma rotina que voce quer manter.</strong></div>
        </div>
      </section>

      <section className="intro-section" id="academia">
        <div className="section-label"><span>01</span> A DAMA</div>
        <div className="intro-grid"><h2>Forca, disciplina e pertencimento.</h2><div><p>A Dama de Ferro e um espaco para pessoas reais que decidiram cuidar de si e celebrar cada conquista no processo.</p><a className="text-link" href="#contato">Venha sentir essa energia <ChevronRight size={17} /></a></div></div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-dot" /> UMA EXPERIENCIA COMPLETA</p><h2>O seu treino merece mais intencao.</h2></div><p>Estrutura, orientacao e recursos que deixam sua rotina mais leve e consistente.</p></div>
        <div className="highlight-grid">{highlights.map(([title, text, Icon], index) => { const FeatureIcon = Icon as typeof Dumbbell; return <article className="highlight-card" key={title as string}><div className="card-top"><span>0{index + 1}</span><FeatureIcon size={25} /></div><h3>{title}</h3><p>{text}</p></article>; })}</div>
      </section>

      <section className="app-section" id="app">
        <div className="phone-panel"><div className="phone-top"><span>9:41</span><span>● ● ●</span></div><div className="phone-brand">DF</div><p>Ola, voce.</p><h3>Seu treino de hoje</h3><div className="workout-card"><span>Treino A</span><strong>Inferiores</strong><div><span>6 exercicios</span><ArrowUpRight size={16} /></div></div><div className="phone-tabs"><span>Inicio</span><span>Treino</span><span>Perfil</span></div></div>
        <div className="app-copy"><p className="eyebrow"><MonitorSmartphone size={15} /> AREA DO ALUNO</p><h2>Sua evolucao tambem cabe no bolso.</h2><p>Acompanhe seus treinos, evolucao e avisos da academia direto pelo celular. Em breve, uma experiencia pensada para fazer parte da sua rotina.</p><ul><li><Check size={18} /> Treinos e acompanhamento em um so lugar</li><li><Check size={18} /> Historico para enxergar sua evolucao</li><li><Check size={18} /> Acesso pratico pelo celular</li></ul><span className="coming-soon">EM BREVE PARA ALUNOS DA DAMA DE FERRO</span></div>
      </section>

      <section className="path-section"><div className="section-heading compact"><div><p className="eyebrow"><span className="eyebrow-dot" /> O PRIMEIRO PASSO</p><h2>Comecar pode ser simples.</h2></div></div><div className="steps-grid">{steps.map(([number, title, text]) => <article key={number} className="step-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="contact-section" id="contato"><div><p className="eyebrow"><span className="eyebrow-dot" /> VAMOS CONVERSAR</p><h2>Seu lugar de evoluir esta te esperando.</h2></div><div className="contact-actions"><button className="button button-primary" type="button" disabled>WhatsApp em breve <ArrowUpRight size={19} /></button><p><MapPin size={17} /> Endereco e WhatsApp em atualizacao</p></div></section>

      <footer><div className="footer-brand"><span>DF</span> DAMA DE FERRO <small>ACADEMIA</small></div><p>© 2026 Dama de Ferro Academia</p><div><CalendarDays size={16} /><Clock3 size={16} /> Informacoes de horarios em breve</div></footer>
    </main>
  );
}
