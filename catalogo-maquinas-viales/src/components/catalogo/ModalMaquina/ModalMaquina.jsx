import { useEffect } from 'react';
import CarruselMaquina from '../CarruselMaquina/CarruselMaquina';
import FichaTecnica from '../FichaTecnica/FichaTecnica';
import { formatearWhatsapp } from '../../../utils/formatearWhatsapp';
import './ModalMaquina.css';

function ModalMaquina({ maquina, onClose }) {
  useEffect(() => {
    if (!maquina) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [maquina, onClose]);

  if (!maquina) return null;

  return (
    <div className="modal-maquina" onClick={onClose}>
      <div className="modal-maquina__dialog" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-maquina__close" onClick={onClose}>
          ×
        </button>

        <div className="modal-maquina__layout">
          <div className="modal-maquina__gallery">
            <CarruselMaquina imagenes={maquina.imagenes} nombre={maquina.nombre} />
          </div>

          <div className="modal-maquina__content">
            <div className="modal-maquina__header">
              <p>{maquina.marca} · {maquina.tipo}</p>
              <h2>{maquina.nombre}</h2>
              <span>{maquina.descripcion}</span>
            </div>

            <FichaTecnica fichaTecnica={maquina.fichaTecnica} />

            <a
              className="modal-maquina__cta"
              href={formatearWhatsapp(maquina.whatsappTexto)}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMaquina;
