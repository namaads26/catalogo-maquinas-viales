import { crearPlaceholder } from '../../../utils/placeholder';
import './CardMaquina.css';

function CardMaquina({ maquina, onOpen }) {
  const portada = maquina.imagenes?.[0] || crearPlaceholder(maquina.nombre);
  const logoMarca =  maquina.logo?.[0] || crearPlaceholder(maquina.nombre);

  return (
    <article className="card-maquina">

     
      <img
        className="card-maquina__corner-logo"
        src={`${import.meta.env.BASE_URL}logos/${logoMarca}`}
        alt="logo"
      />

      <div className="card-maquina__media">
        <img
          src={`${import.meta.env.BASE_URL}images/${portada}`}
          alt={maquina.nombre}
        />
        <span className="card-maquina__type">{maquina.tipo}</span>
      </div>

      <div className="card-maquina__body">
        <div className="card-maquina__heading">
          <p>{maquina.marca}</p>
          <h3>{maquina.nombre}</h3>
        </div>

        <ul className="card-maquina__meta">
          <li>
            <span>Modelo</span>
            <strong>{maquina.modelo}</strong>
          </li>
          <li>
            <span>MOTOR</span>
            <strong>{maquina.motor}</strong>
          </li>
        </ul>

        <button type="button" onClick={onOpen}>
          Ver ficha completa
        </button>
      </div>
    </article>
  );
}

export default CardMaquina;