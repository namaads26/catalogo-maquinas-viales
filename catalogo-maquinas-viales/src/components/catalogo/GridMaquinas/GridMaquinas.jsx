import CardMaquina from '../CardMaquina/CardMaquina';
import './GridMaquinas.css';

function GridMaquinas({ maquinas, onOpenDetail }) {
  if (!maquinas.length) {
    return (
      <section className="grid-maquinas grid-maquinas--empty">
        <div className="grid-maquinas__emptyBox">
          <h2 className="section-title">No encontramos equipos con esos filtros</h2>
          <p className="section-copy">
            Probá ajustando la búsqueda o seleccionando otra marca o tipo de máquina.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="grid-maquinas">
      {maquinas.map((maquina) => (
        <CardMaquina
          key={maquina.id}
          maquina={maquina}
          onOpen={() => onOpenDetail(maquina)}
        />
      ))}
    </section>
  );
}

export default GridMaquinas;
