import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__brand">
          <span className="header__brandMark">MV</span>
          <div>
            <strong>Catálogo Vial</strong>
            <span>Equipos seleccionados</span>
          </div>
        </a>

        <nav className="header__nav">
          <a href="#catalogo">Catálogo</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
