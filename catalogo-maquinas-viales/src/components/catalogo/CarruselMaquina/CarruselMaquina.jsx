import { useMemo, useState } from 'react';
import { crearPlaceholder } from '../../../utils/placeholder';
import './CarruselMaquina.css';

function CarruselMaquina({ imagenes = [], nombre }) {
  const slides = useMemo(() => {
    if (imagenes.length) return imagenes;
    return [crearPlaceholder(nombre)];
  }, [imagenes, nombre]);

  const [indiceActivo, setIndiceActivo] = useState(0);

  const irA = (indice) => setIndiceActivo(indice);
  const anterior = () =>
    setIndiceActivo((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const siguiente = () =>
    setIndiceActivo((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="carrusel-maquina">
      <div className="carrusel-maquina__viewer">
        <img
          src={`${import.meta.env.BASE_URL}images/${slides[indiceActivo]}`}
          alt={`${nombre} imagen ${indiceActivo + 1}`}
        />

        {slides.length > 1 && (
          <>
            <button
              type="button"
              className="carrusel-maquina__nav carrusel-maquina__nav--prev"
              onClick={anterior}
            >
              ‹
            </button>
            <button
              type="button"
              className="carrusel-maquina__nav carrusel-maquina__nav--next"
              onClick={siguiente}
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="carrusel-maquina__thumbs">
        {slides.map((slide, index) => (
          <button
            key={`${nombre}-${index}`}
            type="button"
            className={index === indiceActivo ? 'is-active' : ''}
            onClick={() => irA(index)}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${slide}`}
              alt={`${nombre} miniatura ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default CarruselMaquina;