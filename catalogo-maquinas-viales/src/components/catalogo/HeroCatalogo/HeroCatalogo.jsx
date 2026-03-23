import './HeroCatalogo.css';

function HeroCatalogo({ total }) {
  return (
    <section className="hero-catalogo" id="top">
      <div className="hero-catalogo__overlay" />
      <div className="hero-catalogo__inner">
        <p className="tag-pill">Estilo industrial premium</p>
        <h1>Catálogo profesional de máquinas viales</h1>
        <p>
          Equipos seleccionados para obra, movimiento de suelo y trabajo pesado.
          Explorá el catálogo, filtrá por tipo o marca y abrí la ficha completa de
          cada unidad.
        </p>

        <div className="hero-catalogo__stats">
          <div>
            <strong>{total}+</strong>
            <span>Unidades publicables</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Adaptable desde JSON</span>
          </div>
          <div>
            <strong>WhatsApp</strong>
            <span>Consulta rápida por equipo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCatalogo;
