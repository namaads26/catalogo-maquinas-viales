import './BuscadorCatalogo.css';

function BuscadorCatalogo({ value, onChange }) {
  return (
    <div className="buscador-catalogo">
      <label htmlFor="busqueda-maquinas">Buscar por nombre, marca o modelo</label>
      <input
        id="busqueda-maquinas"
        type="text"
        placeholder="Ej. Hyundai 220LC-9"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default BuscadorCatalogo;
