import { ShieldCheck, Menu, X } from "lucide-react";

export default function Header({ active, onNavigate, menuOpen, setMenuOpen }) {
  const links = [
    ["inicio", "Início"],
    ["animais", "Guia de animais"],
    ["prevencao", "Prevenção"],
    ["socorro", "Primeiros socorros"]
  ];

  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate("inicio")} aria-label="Ir para o início">
        <span className="brand-mark"><ShieldCheck size={24} /></span>
        <span>peçonha<span className="brand-accent">zero</span><small>PREVENÇÃO QUE PROTEGE</small></span>
      </button>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navegação principal">
        {links.map(([id, label]) => (
          <button key={id} className={active === id ? "nav-link active" : "nav-link"}
            onClick={() => { onNavigate(id); setMenuOpen(false); }}>
            {label}
          </button>
        ))}
        <button className="nav-cta" onClick={() => { onNavigate("socorro"); setMenuOpen(false); }}>Preciso de orientação</button>
      </nav>
    </header>
  );
}