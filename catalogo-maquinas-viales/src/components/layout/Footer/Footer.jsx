import './Footer.css';
const phone = "543574415329"; 
  const text = "Hola! Quiero info sobre sus maquinas para mi empresa 👋";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

function Footer() {
  return (
    
    <footer className="footer" id="contacto">
      <div className="footer__inner">
        <div>
          
          <h3>Tu proyecto empieza con la máquina correcta.</h3>
          <p>
            Te ayudamos a encontrar el equipo ideal para cada necesidad, asegurando potencia, durabilidad y el mejor rendimiento en obra.
          </p>
        </div>

        <div className="footer__contact">
          <span>Contacto</span>
          <a href={waLink} target="_blank" rel="noreferrer">
            WhatsApp comercial
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
