import './FiltrosCatalogo.css';

function FiltrosCatalogo({
  marcas,
  tipos,
  marcaActiva,
  tipoActivo,
  onMarcaChange,
  onTipoChange,
}) {
  return (
    <div className="filtros-catalogo">
      <div>
        <label htmlFor="marca-select">Marca</label>
        <select
          id="marca-select"
          value={marcaActiva}
          onChange={(event) => onMarcaChange(event.target.value)}
        >
          {marcas.map((marca) => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tipo-select">Tipo de máquina</label>
        <select
          id="tipo-select"
          value={tipoActivo}
          onChange={(event) => onTipoChange(event.target.value)}
        >
          {tipos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FiltrosCatalogo;
