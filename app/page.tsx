const preventionTips = [
  {
    number: "01",
    title: "Proteja pés e pernas",
    description:
      "Use botas ou perneiras e calça comprida ao trabalhar ou caminhar em áreas de vegetação.",
    icon: "boot",
  },
  {
    number: "02",
    title: "Olhe antes de tocar",
    description:
      "Confira o chão, troncos e pilhas de materiais antes de sentar, apoiar as mãos ou mexer em algo.",
    icon: "eye",
  },
  {
    number: "03",
    title: "Use uma ferramenta",
    description:
      "Ao limpar folhas ou capim, use uma ferramenta de cabo longo. Nunca coloque a mão em buracos ou frestas.",
    icon: "tool",
  },
  {
    number: "04",
    title: "Cuide do entorno",
    description:
      "Mantenha quintais limpos, grama aparada e entulhos organizados. Isso reduz esconderijos e aproximação de presas.",
    icon: "home",
  },
];

function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const shared = {
    className,
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...shared}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "boot":
      return (
        <svg {...shared}>
          <path d="M7 3v9l-3 2v5a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-2a2 2 0 0 0-2-2h-5l-3-4V3" />
          <path d="M7 8h4M4 17h17" />
        </svg>
      );
    case "eye":
      return (
        <svg {...shared}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "tool":
      return (
        <svg {...shared}>
          <path d="m14.5 6.5 3 3M4 20l8.5-8.5M14 4l6 6-4 4-6-6 4-4ZM3 21l4-1 1-4-4 1-1 4Z" />
        </svg>
      );
    case "home":
      return (
        <svg {...shared}>
          <path d="m3 10 9-7 9 7M5 9v11h14V9M9 20v-6h6v6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...shared}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared}>
          <path d="M7 3H5a2 2 0 0 0-2 2 16 16 0 0 0 16 16 2 2 0 0 0 2-2v-2l-5-2-2 3a13 13 0 0 1-6-6l3-2-2-5Z" />
        </svg>
      );
    case "check":
      return (
        <svg {...shared}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    default:
      return null;
  }
}

function FieldIllustration() {
  return (
    <div className="field-illustration" role="img" aria-label="Paisagem de campo com trilha, vegetação e botas de proteção">
      <div className="illustration-sun" />
      <div className="illustration-hill illustration-hill-back" />
      <div className="illustration-hill illustration-hill-front" />
      <div className="illustration-path" />
      <div className="illustration-grass grass-one" />
      <div className="illustration-grass grass-two" />
      <div className="illustration-label">
        <span className="illustration-label-mark">
          <Icon name="check" />
        </span>
        <span>
          <strong>Prevenção começa</strong>
          <small>antes de sair de casa</small>
        </span>
      </div>
      <svg
        className="illustration-boots"
        viewBox="0 0 240 170"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M52 19v65l-28 22c-9 7-8 21 3 25 9 4 43 6 69 2 8-1 12-8 10-16l-8-24-14-15V19H52Z"
          fill="#D99454"
          stroke="#593D2B"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M57 38h26M57 52h26M57 66h26"
          stroke="#F4D3A5"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M137 8v77l-27 20c-9 7-8 21 3 25 9 4 43 6 69 2 8-1 12-8 10-16l-8-24-14-15V8h-33Z"
          fill="#C77D43"
          stroke="#593D2B"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M143 31h26M143 45h26M143 59h26"
          stroke="#F4D3A5"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Cuidado no Campo — início">
          <span className="brand-mark">
            <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path
                d="M20 4c-7 9-12 14-12 21a12 12 0 0 0 24 0c0-7-5-12-12-21Z"
                fill="currentColor"
              />
              <path
                d="M13 26c2-4 5-6 11-7-1 5-4 9-10 11"
                stroke="#F5F2E9"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="brand-name">
            cuidado<span>no campo</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#prevencao">Prevenção</a>
          <a href="#emergencia">Em caso de picada</a>
          <a href="#duvidas">Dúvidas frequentes</a>
        </nav>
        <a className="header-action" href="#emergencia">
          Precisa de ajuda?
          <Icon name="arrow" />
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <Icon name="pin" />
              <span>Informação para o Sudoeste do Paraná</span>
            </div>
            <h1>
              No campo, <span>prevenção</span> também é cuidado.
            </h1>
            <p className="hero-description">
              Orientações simples para evitar acidentes com serpentes e saber
              como agir com segurança se eles acontecerem.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#prevencao">
                Aprenda a se prevenir
                <Icon name="arrow" />
              </a>
              <a className="text-link" href="#emergencia">
                Sofreu uma picada?
              </a>
            </div>
            <div className="hero-note">
              <span className="note-check">
                <Icon name="check" />
              </span>
              <span>Conhecimento que protege você, sua família e sua comunidade.</span>
            </div>
          </div>
          <FieldIllustration />
          <div className="hero-bottom">
            <span>PREVENÇÃO NO DIA A DIA</span>
            <div className="hero-contexts">
              <span>Na lavoura</span>
              <span>Nas trilhas</span>
              <span>No quintal</span>
            </div>
          </div>
        </section>

        <section className="prevention-section section-wrap" id="prevencao">
          <div className="section-heading">
            <div>
              <span className="section-kicker">CUIDADO QUE VAI COM VOCÊ</span>
              <h2>Pequenos hábitos. Mais proteção.</h2>
            </div>
            <p>
              Serpentes podem aparecer em áreas rurais e também perto de casa.
              Algumas medidas simples ajudam a evitar encontros.
            </p>
          </div>
          <div className="tips-grid">
            {preventionTips.map((tip) => (
              <article className="tip-card" key={tip.number}>
                <div className="tip-card-top">
                  <span className="tip-number">{tip.number}</span>
                  <span className="tip-icon">
                    <Icon name={tip.icon} />
                  </span>
                </div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </article>
            ))}
          </div>
          <div className="wildlife-note">
            <span className="wildlife-note-mark">!</span>
            <p>
              <strong>Encontrou uma serpente?</strong> Afaste-se com calma,
              mantenha outras pessoas e animais longe e não tente tocar,
              capturar ou matar o animal.
            </p>
          </div>
        </section>

        <section className="emergency-section" id="emergencia">
          <div className="emergency-inner">
            <div className="emergency-heading">
              <span className="emergency-label">
                <span className="emergency-pulse" />
                ORIENTAÇÃO DE EMERGÊNCIA
              </span>
              <h2>
                Picada de serpente?
                <br />
                <span>O que fazer agora.</span>
              </h2>
              <p>
                Procure atendimento de saúde imediatamente. Não espere os
                sintomas aparecerem nem tente tratar em casa.
              </p>
              <a className="emergency-phone" href="tel:192">
                <span className="phone-icon">
                  <Icon name="phone" />
                </span>
                <span>
                  <small>Emergência médica</small>
                  <strong>Ligue 192</strong>
                </span>
                <Icon name="arrow" className="phone-arrow" />
              </a>
              <p className="poison-line">
                Orientação toxicológica:{" "}
                <a href="tel:08007226001">0800 722 6001</a>
              </p>
            </div>
            <div className="emergency-steps">
              <h3>Faça isso enquanto busca ajuda</h3>
              <ol>
                <li>
                  <span className="step-check">
                    <Icon name="check" />
                  </span>
                  <span>
                    <strong>Mantenha a pessoa calma e em repouso.</strong>
                    Evite que ela caminhe ou faça esforço.
                  </span>
                </li>
                <li>
                  <span className="step-check">
                    <Icon name="check" />
                  </span>
                  <span>
                    <strong>Lave o local com água e sabão.</strong>
                    Se possível, mantenha o membro confortável e sem apertar.
                  </span>
                </li>
                <li>
                  <span className="step-check">
                    <Icon name="check" />
                  </span>
                  <span>
                    <strong>Vá a um serviço de saúde imediatamente.</strong>
                    Se puder, informe onde e quando aconteceu.
                  </span>
                </li>
                <li>
                  <span className="step-check">
                    <Icon name="check" />
                  </span>
                  <span>
                    <strong>Não tente capturar a serpente.</strong>
                    Uma foto só deve ser feita de longe, sem se aproximar.
                  </span>
                </li>
              </ol>
              <div className="dont-do">
                <strong>Não faça torniquete, cortes ou sucção.</strong>
                Não aplique receitas caseiras, substâncias ou gelo no local.
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="duvidas">
          <div className="faq-heading">
            <span className="section-kicker">INFORMAÇÃO SEM COMPLICAÇÃO</span>
            <h2>Dúvidas frequentes</h2>
            <p>Na dúvida, priorize sempre a distância e o atendimento de saúde.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>Preciso saber qual serpente causou a picada?</summary>
              <p>
                Não. Não atrase a ida ao serviço de saúde para identificar o
                animal. Se uma foto puder ser feita com segurança e de longe,
                ela pode ajudar, mas nunca tente se aproximar ou capturá-lo.
              </p>
            </details>
            <details>
              <summary>Posso fazer um torniquete ou passar algo no local?</summary>
              <p>
                Não. Torniquetes, cortes, sucção e receitas caseiras podem
                piorar a situação. Lave com água e sabão e procure atendimento
                imediatamente.
              </p>
            </details>
            <details>
              <summary>O que fazer se encontrar uma serpente em casa?</summary>
              <p>
                Afaste-se, mantenha crianças e animais longe e não tente tocar,
                capturar ou matar. Acione o serviço ambiental ou de emergência
                do seu município para orientação.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">
            <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path
                d="M20 4c-7 9-12 14-12 21a12 12 0 0 0 24 0c0-7-5-12-12-21Z"
                fill="currentColor"
              />
              <path
                d="M13 26c2-4 5-6 11-7-1 5-4 9-10 11"
                stroke="#F5F2E9"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="brand-name">
            cuidado<span>no campo</span>
          </span>
        </a>
        <p>
          Conteúdo educativo. Em caso de acidente, procure um serviço de saúde.
        </p>
        <a
          className="source-link"
          href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/animais-peconhentos"
          target="_blank"
          rel="noreferrer"
        >
          Fontes: Ministério da Saúde e Anvisa
          <Icon name="arrow" />
        </a>
      </footer>
    </>
  );
}
