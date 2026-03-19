// ============================================================
//  MUNICIPALIDAD DE ESQUINA — Navegación compartida
//  Para editar el menú, modificá solo este archivo.
//  Se aplica automáticamente a todas las páginas.
// ============================================================

(function() {

  // ── CONFIGURACIÓN EDITABLE ──────────────────────────────
  const MUNICIPIO = {
    nombre:    "Municipalidad de Esquina",
    provincia: "Corrientes · Argentina",
    telefono:  "(03777) 420–000",
    email:     "info@esquinacorrientes.gob.ar",
    direccion: "25 de Mayo 511 · Esquina, Corrientes",
    horario:   "Lun–Vie · 07:00 a 13:00 hs",
    facebook:  "#",
    instagram: "#",
    twitter:   "#",
    youtube:   "#",
  };

  // ── PÁGINAS DEL SITIO ───────────────────────────────────
  // Para agregar una página nueva, agregala acá.
  const PAGES = [
    { id: "index",     label: "Inicio",    href: "index.html",     icon: "🏠" },
    { id: "gobierno",  label: "Gobierno",  href: "gobierno-esquina.html",  icon: "🏛" },
    { id: "tramites",  label: "Trámites",  href: "tramites-esquina.html",  icon: "📋" },
    { id: "servicios", label: "Servicios", href: "servicios-esquina.html", icon: "⚙️" },
    { id: "noticias",  label: "Noticias",  href: "noticias-esquina.html",  icon: "📰" },
  ];

  // ── DETECTAR PÁGINA ACTIVA ──────────────────────────────
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  const activePage  = PAGES.find(p => currentFile.includes(p.id)) || PAGES[0];

  // ── INYECTAR CSS BASE ───────────────────────────────────
  const style = document.createElement("style");
  style.textContent = `
    .muni-top-bar { background:#2b2b2b; padding:6px 0; }
    .muni-top-inner { max-width:1200px; margin:0 auto; padding:0 2rem; display:flex; justify-content:space-between; align-items:center; }
    .muni-top-inner a { color:rgba(255,255,255,.6); font-family:'Dosis',sans-serif; font-size:11px; font-weight:500; text-decoration:none; transition:color .15s; }
    .muni-top-inner a:hover { color:#ffcc00; }
    .muni-top-links { display:flex; gap:20px; align-items:center; }

    .muni-nav { background:#0077c0; position:sticky; top:0; z-index:200; box-shadow:0 3px 16px rgba(0,0,0,.2); }
    .muni-nav-inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; padding:0 2rem; height:64px; }
    .muni-logo { display:flex; align-items:center; gap:12px; text-decoration:none; }
    .muni-escudo { width:42px; height:42px; background:#ffcc00; border-radius:6px; display:flex; align-items:center; justify-content:center; font-family:'Dosis',sans-serif; font-weight:800; color:#2b2b2b; font-size:14px; flex-shrink:0; }
    .muni-logo-text strong { display:block; font-family:'Dosis',sans-serif; font-size:15px; font-weight:700; color:white; }
    .muni-logo-text span { display:block; font-family:'Dosis',sans-serif; font-size:11px; color:rgba(255,255,255,.65); text-transform:uppercase; letter-spacing:.05em; }
    .muni-nav-links { display:flex; }
    .muni-nav-links a { color:rgba(255,255,255,.85); text-decoration:none; padding:0 14px; height:64px; display:flex; align-items:center; gap:6px; font-family:'Dosis',sans-serif; font-size:13px; font-weight:600; letter-spacing:.03em; transition:background .15s; border-bottom:3px solid transparent; text-transform:uppercase; }
    .muni-nav-links a:hover { background:rgba(255,255,255,.1); color:white; }
    .muni-nav-links a.active { border-bottom-color:#ffcc00; color:white; }
    .muni-nav-turismo { background:#ffcc00 !important; color:#2b2b2b !important; border-radius:6px; margin-left:8px; height:36px !important; padding:0 14px !important; align-self:center; border-bottom:none !important; font-weight:700 !important; }
    .muni-nav-turismo:hover { background:#d4a900 !important; }
    .muni-hamburger { display:none; background:none; border:none; cursor:pointer; padding:8px; }
    .muni-mobile-menu { display:none; background:#005a91; padding:8px 0; }
    .muni-mobile-menu a { display:block; color:rgba(255,255,255,.85); text-decoration:none; padding:12px 2rem; font-family:'Dosis',sans-serif; font-size:14px; font-weight:600; border-bottom:1px solid rgba(255,255,255,.08); }
    .muni-mobile-menu a.active { background:rgba(255,204,0,.15); color:#ffcc00; }
    .muni-mobile-menu a:hover { background:rgba(255,255,255,.08); }

    .muni-breadcrumb { background:white; border-bottom:1px solid #e8e8e8; padding:10px 0; }
    .muni-bc-inner { max-width:1200px; margin:0 auto; padding:0 2rem; display:flex; align-items:center; gap:8px; font-family:'Dosis',sans-serif; font-size:12px; color:#6b6b6b; }
    .muni-bc-inner a { color:#0077c0; text-decoration:none; }
    .muni-bc-inner a:hover { text-decoration:underline; }

    .muni-footer { background:#2b2b2b; color:rgba(255,255,255,.65); padding:3rem 0 0; border-top:4px solid #0077c0; margin-top:0; }
    .muni-footer-inner { max-width:1200px; margin:0 auto; padding:0 2rem 2.5rem; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:2.5rem; }
    .muni-footer-logo-row { display:flex; align-items:center; gap:12px; margin-bottom:1rem; }
    .muni-footer-escudo { width:44px; height:44px; background:#ffcc00; border-radius:6px; display:flex; align-items:center; justify-content:center; font-family:'Dosis',sans-serif; font-weight:800; color:#2b2b2b; font-size:14px; flex-shrink:0; }
    .muni-footer-brand strong { display:block; font-family:'Dosis',sans-serif; color:white; font-size:14px; font-weight:700; }
    .muni-footer-brand span { font-family:'Dosis',sans-serif; font-size:11px; color:rgba(255,255,255,.45); text-transform:uppercase; letter-spacing:.06em; }
    .muni-footer p { font-size:12px; line-height:1.7; margin-bottom:12px; }
    .muni-footer-contact { font-size:12px; margin-bottom:14px; line-height:2; }
    .muni-footer-contact-row { display:flex; align-items:center; gap:7px; }
    .muni-footer-contact strong { color:rgba(255,255,255,.9); }
    .muni-footer-social { display:flex; gap:8px; }
    .muni-footer-social a { width:34px; height:34px; background:rgba(255,255,255,.08); border-radius:6px; display:flex; align-items:center; justify-content:center; text-decoration:none; font-family:'Dosis',sans-serif; font-size:12px; font-weight:700; color:rgba(255,255,255,.7); transition:background .15s; }
    .muni-footer-social a:hover { background:#0077c0; color:white; }
    .muni-footer-col h4 { font-family:'Dosis',sans-serif; color:white; font-size:12px; font-weight:700; margin-bottom:14px; letter-spacing:.06em; text-transform:uppercase; padding-bottom:8px; border-bottom:2px solid #ffcc00; display:inline-block; }
    .muni-footer-col a { display:block; font-family:'Dosis',sans-serif; color:rgba(255,255,255,.55); text-decoration:none; font-size:13px; font-weight:500; margin-bottom:8px; transition:color .12s; }
    .muni-footer-col a:hover { color:#ffcc00; }
    .muni-footer-bottom { max-width:1200px; margin:0 auto; padding:1.25rem 2rem; border-top:1px solid rgba(255,255,255,.1); display:flex; align-items:center; justify-content:space-between; font-family:'Dosis',sans-serif; font-size:11px; color:rgba(255,255,255,.35); text-transform:uppercase; letter-spacing:.04em; flex-wrap:wrap; gap:8px; }

    @media (max-width:900px) {
      .muni-nav-links { display:none; }
      .muni-hamburger { display:flex; }
      .muni-footer-inner { grid-template-columns:1fr 1fr; }
    }
    @media (max-width:600px) {
      .muni-footer-inner { grid-template-columns:1fr; }
    }
  `;
  document.head.appendChild(style);

  // ── TOP BAR ─────────────────────────────────────────────
  const topBar = document.createElement("div");
  topBar.className = "muni-top-bar";
  topBar.innerHTML = `
    <div class="muni-top-inner">
      <div class="muni-top-links">
        <a href="gobierno-esquina.html#sec-transparencia">Transparencia</a>
        <a href="gobierno-esquina.html#sec-transparencia">Boletín Oficial</a>
        <a href="gobierno-esquina.html#sec-concejo">Concejo Deliberante</a>
      </div>
      <div class="muni-top-links">
        <a href="tel:+543777420000">📞 ${MUNICIPIO.telefono}</a>
      </div>
    </div>`;

  // ── NAV PRINCIPAL ────────────────────────────────────────
  const navLinks = PAGES.map(p => {
    const isActive = p.id === activePage.id;
    return `<a href="${p.href}" class="${isActive ? 'active' : ''}">${p.label}</a>`;
  }).join("");

  const nav = document.createElement("nav");
  nav.className = "muni-nav";
  nav.innerHTML = `
    <div class="muni-nav-inner">
      <a href="index.html" class="muni-logo">
        <div class="muni-escudo">ME</div>
        <div class="muni-logo-text">
          <strong>${MUNICIPIO.nombre}</strong>
          <span>${MUNICIPIO.provincia}</span>
        </div>
      </a>
      <div class="muni-nav-links">
        ${navLinks}
        <a href="turismo-esquina.html" class="muni-nav-turismo ${activePage.id === 'turismo' ? 'active' : ''}">🗺 Turismo</a>
      </div>
      <button class="muni-hamburger" onclick="toggleMenu()" aria-label="Menú">
        <svg width="22" height="22" viewBox="0 0 256 256" fill="none">
          <line x1="40" y1="80" x2="216" y2="80" stroke="white" stroke-width="18" stroke-linecap="round"/>
          <line x1="40" y1="128" x2="216" y2="128" stroke="white" stroke-width="18" stroke-linecap="round"/>
          <line x1="40" y1="176" x2="216" y2="176" stroke="white" stroke-width="18" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    <div class="muni-mobile-menu" id="muni-mobile-menu">
      ${PAGES.map(p => `<a href="${p.href}" class="${p.id === activePage.id ? 'active' : ''}">${p.icon} ${p.label}</a>`).join("")}
      <a href="turismo-esquina.html">🗺 Turismo</a>
    </div>`;

  // ── BREADCRUMB ───────────────────────────────────────────
  const breadcrumb = document.createElement("div");
  breadcrumb.className = "muni-breadcrumb";
  const bcItems = activePage.id === "index"
    ? `<span>Inicio</span>`
    : `<a href="index.html">Inicio</a>
       <svg width="12" height="12" viewBox="0 0 256 256" fill="none"><polyline points="96,48 160,128 96,208" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/></svg>
       <span>${activePage.label}</span>`;
  breadcrumb.innerHTML = `<div class="muni-bc-inner">${bcItems}</div>`;

  // ── FOOTER ───────────────────────────────────────────────
  const footer = document.createElement("footer");
  footer.className = "muni-footer";
  footer.innerHTML = `
    <div class="muni-footer-inner">
      <div>
        <div class="muni-footer-logo-row">
          <div class="muni-footer-escudo">ME</div>
          <div class="muni-footer-brand">
            <strong>${MUNICIPIO.nombre}</strong>
            <span>${MUNICIPIO.provincia}</span>
          </div>
        </div>
        <p>Santa Rita de la Esquina del Río Corriente. Ciudad fundada en 1806 a orillas del Río Corriente, provincia de Corrientes, Argentina.</p>
        <div class="muni-footer-contact">
          <div class="muni-footer-contact-row">📍 <strong>${MUNICIPIO.direccion}</strong></div>
          <div class="muni-footer-contact-row">📞 <strong>${MUNICIPIO.telefono}</strong></div>
          <div class="muni-footer-contact-row">✉ <strong>${MUNICIPIO.email}</strong></div>
          <div class="muni-footer-contact-row">🕐 <strong>${MUNICIPIO.horario}</strong></div>
        </div>
        <div class="muni-footer-social">
          <a href="${MUNICIPIO.facebook}" title="Facebook">f</a>
          <a href="${MUNICIPIO.instagram}" title="Instagram">in</a>
          <a href="${MUNICIPIO.twitter}" title="X/Twitter">𝕏</a>
          <a href="${MUNICIPIO.youtube}" title="YouTube">▶</a>
        </div>
      </div>
      <div class="muni-footer-col">
        <h4>Gobierno</h4>
        <a href="gobierno-esquina.html">Intendencia</a>
        <a href="gobierno-esquina.html#sec-concejo">Concejo Deliberante</a>
        <a href="gobierno-esquina.html#sec-organigrama">Organigrama</a>
        <a href="gobierno-esquina.html#sec-transparencia">Carta Orgánica</a>
        <a href="gobierno-esquina.html#sec-transparencia">Boletín Oficial</a>
      </div>
      <div class="muni-footer-col">
        <h4>Vecinos</h4>
        <a href="tramites-esquina.html">Trámites online</a>
        <a href="servicios-esquina.html#panel-agua">Agua y saneamiento</a>
        <a href="servicios-esquina.html#panel-residuos">Recolección de residuos</a>
        <a href="servicios-esquina.html#panel-salud">Salud municipal</a>
        <a href="servicios-esquina.html#panel-denuncias">Denuncias y reclamos</a>
      </div>
      <div class="muni-footer-col">
        <h4>Turismo</h4>
        <a href="turismo-esquina.html">Qué hacer</a>
        <a href="turismo-esquina.html#sec-pacu">Fiesta del Pacú</a>
        <a href="turismo-esquina.html#sec-alojamiento">Alojamiento</a>
        <a href="turismo-esquina.html#sec-gastro">Gastronomía</a>
        <a href="turismo-esquina.html#sec-llegar">Cómo llegar</a>
      </div>
    </div>
    <div class="muni-footer-bottom">
      <span>© ${new Date().getFullYear()} ${MUNICIPIO.nombre} · Todos los derechos reservados</span>
      <span>Esquina, Corrientes, Argentina</span>
    </div>`;

  // ── INSERTAR EN EL DOM ───────────────────────────────────
  // Busca el placeholder o inserta al inicio del body
  const topPlaceholder    = document.getElementById("muni-top-bar");
  const navPlaceholder    = document.getElementById("muni-nav");
  const bcPlaceholder     = document.getElementById("muni-breadcrumb");
  const footerPlaceholder = document.getElementById("muni-footer");

  if (topPlaceholder)    topPlaceholder.replaceWith(topBar);
  else document.body.prepend(breadcrumb, nav, topBar);

  if (navPlaceholder)    navPlaceholder.replaceWith(nav);
  if (bcPlaceholder)     bcPlaceholder.replaceWith(breadcrumb);
  if (footerPlaceholder) footerPlaceholder.replaceWith(footer);
  else document.body.appendChild(footer);

  // ── MENÚ HAMBURGUESA ─────────────────────────────────────
  window.toggleMenu = function() {
    const m = document.getElementById("muni-mobile-menu");
    m.style.display = m.style.display === "block" ? "none" : "block";
  };

})();
