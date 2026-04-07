import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" >
          <img src={`${import.meta.env.BASE_URL}logos/logo.png`} className="header__brandMark"  alt="Maquinas Viales Logo" />
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

