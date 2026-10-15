import { useMemo, useState } from "react";
import { ArrowRight, Search, ShieldCheck, Leaf, HeartPulse, MapPin, CheckCircle2, AlertTriangle, PhoneCall, Sprout } from "lucide-react";
import Header from "./components/Header.jsx";
import AnimalCard from "./components/AnimalCard.jsx";
import { animals } from "./data/animals.js";

export default function App() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [checked, setChecked] = useState([]);

  const filteredAnimals = useMemo(() => animals.filter((animal) =>
    `${animal.name} ${animal.description}`.toLowerCase().includes(search.toLowerCase())
  ), [search]);

  function navigate(section) {
    setActive(section);
    setSelectedAnimal(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function selectAnimal(id) {
    setSelectedAnimal(id);
    setActive("animais");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const checklist = [
    "Mantenho quintal e áreas de circulação sem entulho acumulado.",
    "Uso calçados fechados e proteção adequada em áreas de risco.",
    "Verifico calçados, roupas e toalhas antes de usar.",
    "Evito colocar as mãos em buracos, frestas e pilhas de materiais.",
    "Sei que não devo capturar ou manipular animais desconhecidos."
  ];

  const selected = animals.find((animal) => animal.id === selectedAnimal);

  return (
    <div className="app-shell">
      <Header active={active} onNavigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        {active === "inicio" && !selected && (
          <>
            <section className="hero">
              <div className="hero-copy">
                <span className="eyebrow"><span className="eyebrow-dot" /> INFORMAÇÃO QUE FAZ A DIFERENÇA</span>
                <h1>Conhecer o risco é o primeiro passo para <em>se proteger.</em></h1>
                <p>Orientações simples e confiáveis para prevenir acidentes com animais peçonhentos em casa, no campo e na natureza.</p>
                <div className="hero-actions">
                  <button className="button button-primary" onClick={() => navigate("prevencao")}>Como me prevenir <ArrowRight size={18} /></button>
                  <button className="button button-quiet" onClick={() => navigate("animais")}>Explorar guia</button>
                </div>
                <div className="hero-note"><ShieldCheck size={18} /><span>Conteúdo educativo para ajudar você a tomar decisões mais seguras.</span></div>
              </div>
              <div className="hero-art" aria-label="Ilustração decorativa de folhas e serpente">
                <div className="art-circle"></div>
                <div className="art-leaf leaf-one">✳</div><div className="art-leaf leaf-two">❋</div>
                <div className="snake-illustration">🐍</div>
                <div className="art-label"><span className="label-icon"><Leaf size={17} /></span><span><strong>Prevenção começa</strong><small>no dia a dia</small></span></div>
              </div>
            </section>
            <section className="trust-strip">
              <div><ShieldCheck /><span><strong>Prevenção</strong><small>Reduza riscos no cotidiano</small></span></div>
              <div><HeartPulse /><span><strong>Orientação</strong><small>Saiba como agir com segurança</small></span></div>
              <div><Sprout /><span><strong>Educação</strong><small>Informação acessível a todos</small></span></div>
            </section>
            <section className="section section-animals">
              <div className="section-heading"><div><span className="eyebrow">GUIA EDUCATIVO</span><h2>Conheça os animais</h2><p>Aprenda a reconhecer situações de risco sem precisar se aproximar ou tocar no animal.</p></div><button className="text-link" onClick={() => navigate("animais")}>Ver todos <ArrowRight size={17} /></button></div>
              <div className="animal-grid">{animals.slice(0, 3).map((animal) => <AnimalCard key={animal.id} animal={animal} onSelect={selectAnimal} />)}</div>
            </section>
            <section className="callout"><div className="callout-icon"><HeartPulse /></div><div><span className="eyebrow">EM CASO DE ACIDENTE</span><h2>Agir com calma também é prevenção.</h2><p>Procure atendimento de saúde imediatamente. Não faça torniquetes, cortes ou sucção no local da picada.</p></div><button className="button button-light" onClick={() => navigate("socorro")}>Ver orientações <ArrowRight size={18} /></button></section>
          </>
        )}

        {active === "animais" && (
          <section className="page-section">
            <span className="eyebrow">INFORMAÇÃO PARA SE PROTEGER</span>
            <h1 className="page-title">{selected ? selected.name : "Guia de animais"}</h1>
            <p className="page-intro">{selected ? selected.description : "Consulte orientações gerais sobre animais peçonhentos e formas de reduzir o risco de acidentes."}</p>
            {selected ? (
              <div className="detail-panel">
                <div className="detail-emoji">{selected.emoji}</div><div><h2>Como prevenir acidentes</h2><ul className="prevention-list">{selected.prevention.map((item) => <li key={item}><CheckCircle2 size={19} />{item}</li>)}</ul><p className="small-note">Não tente identificar, capturar ou manipular o animal. As informações são educativas e não substituem orientação profissional.</p><button className="button button-primary" onClick={() => setSelectedAnimal(null)}>Voltar ao guia</button></div>
              </div>
            ) : (
              <>
                <label className="search-box"><Search size={20} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar animal..." aria-label="Buscar animal" /></label>
                <div className="animal-grid">{filteredAnimals.map((animal) => <AnimalCard key={animal.id} animal={animal} onSelect={selectAnimal} />)}</div>
                {filteredAnimals.length === 0 && <p>Nenhum animal encontrado. Tente outro termo.</p>}
              </>
            )}
          </section>
        )}

        {active === "prevencao" && (
          <section className="page-section">
            <span className="eyebrow">PEQUENAS AÇÕES, MAIS SEGURANÇA</span><h1 className="page-title">Checklist de prevenção</h1>
            <p className="page-intro">Use esta lista para revisar hábitos preventivos em sua casa, quintal ou ambiente de trabalho.</p>
            <div className="checklist-panel"><div className="checklist-top"><div><h2>Minha área está mais segura?</h2><p>Marque os itens que você já colocou em prática.</p></div><div className="progress-number">{checked.length}/{checklist.length}<small>concluídos</small></div></div><div className="progress-track"><div className="progress-fill" style={{ width: `${checked.length / checklist.length * 100}%` }} /></div>
              {checklist.map((item, index) => <label className="check-item" key={item}><input type="checkbox" checked={checked.includes(index)} onChange={() => setChecked((old) => old.includes(index) ? old.filter((n) => n !== index) : [...old, index])} /><span className="custom-check"><CheckCircle2 size={18} /></span><span>{item}</span></label>)}
              <div className="checklist-footer"><span>{checked.length === checklist.length ? "Ótimo! Você revisou todos os itens." : `Faltam ${checklist.length - checked.length} itens para revisar.`}</span><button className="text-link" onClick={() => setChecked([])}>Reiniciar checklist</button></div>
            </div>
            <div className="info-banner"><AlertTriangle size={22} /><p>O checklist é educativo e não garante a ausência de animais. Mantenha atenção redobrada em locais com vegetação, entulho ou materiais armazenados.</p></div>
          </section>
        )}

        {active === "socorro" && (
          <section className="page-section">
            <span className="eyebrow">ORIENTAÇÃO IMPORTANTE</span><h1 className="page-title">O que fazer em caso de acidente?</h1>
            <p className="page-intro">A prioridade é buscar atendimento de saúde rapidamente. Não espere os sintomas aparecerem.</p>
            <div className="first-aid-grid">
              <article className="aid-card aid-do"><span className="aid-symbol"><CheckCircle2 /></span><h2>O que fazer</h2><ul><li>Afaste-se do animal com segurança.</li><li>Mantenha a pessoa em repouso e evite esforços.</li><li>Lave o local com água e sabão, se possível.</li><li>Procure atendimento médico imediatamente.</li><li>Se for seguro, registre uma foto do animal à distância, sem tentar capturá-lo.</li></ul></article>
              <article className="aid-card aid-dont"><span className="aid-symbol"><AlertTriangle /></span><h2>O que não fazer</h2><ul><li>Não faça torniquete ou garrote.</li><li>Não corte, fure ou esprema o local.</li><li>Não tente sugar o veneno.</li><li>Não aplique substâncias caseiras.</li><li>Não tente capturar ou matar o animal.</li></ul></article>
            </div>
            <div className="emergency-panel"><div className="emergency-icon"><PhoneCall /></div><div><h2>Precisa de ajuda?</h2><p>Em caso de acidente, procure imediatamente um serviço de saúde. Em emergência, ligue para o SAMU (192). O Disque-Intoxicação da Anvisa atende pelo número 0800 722 6001.</p><small>Confirme a disponibilidade e as orientações do serviço na sua região.</small></div></div>
            <p className="source-note">Conteúdo educativo. Para informações atualizadas, consulte o Ministério da Saúde e os serviços oficiais de saúde.</p>
          </section>
        )}
      </main>
      <footer className="footer"><button className="brand footer-brand" onClick={() => navigate("inicio")}><span className="brand-mark"><ShieldCheck size={22} /></span><span>peçonha<span className="brand-accent">zero</span><small>PREVENÇÃO QUE PROTEGE</small></span></button><p>Informação e prevenção para comunidades mais seguras.</p><span className="footer-copy">Projeto acadêmico · Primeira versão</span></footer>
    </div>
  );
}