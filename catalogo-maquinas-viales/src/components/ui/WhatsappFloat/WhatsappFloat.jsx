import "./WhatsappFloat.css";
import whatsappIcon from "../../../assets/icons/WhatsApp.png"; 


export default function WhatsappFloat() {
  const phone = "543574415329"; 
  const text = "Hola! Quiero info sobre sus maquinas para mi empresa 👋";
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      className="wsp-float"
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para contactarnos"
      title="WhatsApp"
    >
      <span className="wsp-tooltip">Hablá con nosotros</span>

      <span className="wsp-btn" aria-hidden="true">
        <img className="wsp-icon" src={whatsappIcon} alt="" />
      </span>
    </a>
  );
}