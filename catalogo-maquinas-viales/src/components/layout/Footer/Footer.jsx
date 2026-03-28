import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__inner">
        <div>
          <p className="tag-pill">Catálogo web profesional</p>
          <h3>Tu proyecto empieza con la máquina correcta.</h3>
          <p>
            Te ayudamos a encontrar el equipo ideal para cada necesidad, asegurando potencia, durabilidad y el mejor rendimiento en obra.
          </p>
        </div>

        <div className="footer__contact">
          <span>Contacto</span>
          <a href="https://wa.me/543574415329" target="_blank" rel="noreferrer">
            WhatsApp comercial
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
