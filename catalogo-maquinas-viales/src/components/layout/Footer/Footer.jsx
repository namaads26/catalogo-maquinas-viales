import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__inner">
        <div>
          <p className="tag-pill">Catálogo web profesional</p>
          <h3>Maquinaria vial lista para mostrar con nivel premium.</h3>
          <p>
            Diseño industrial, navegación simple, fichas técnicas claras y salida
            directa a WhatsApp para consultas comerciales.
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
