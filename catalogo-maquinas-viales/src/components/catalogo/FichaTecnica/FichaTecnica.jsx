import './FichaTecnica.css';

function FichaTecnica({ fichaTecnica = {} }) {
  const entries = Object.entries(fichaTecnica);

  return (
    <div className="ficha-tecnica">
      <div>
        <p className="tag-pill">Ficha técnica</p>
        <h3>Especificaciones principales</h3>
      </div>

      <div className="ficha-tecnica__grid">
        {entries.map(([clave, valor]) => (
          <div key={clave} className="ficha-tecnica__item">
            <span>{clave}</span>
            <strong>{valor}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FichaTecnica;
