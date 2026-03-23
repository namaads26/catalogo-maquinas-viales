export function obtenerOpcionesFiltro(maquinas) {
  const marcas = ['Todas', ...new Set(maquinas.map((maquina) => maquina.marca))];
  const tipos = ['Todos', ...new Set(maquinas.map((maquina) => maquina.tipo))];

  return { marcas, tipos };
}

export function filtrarMaquinas(maquinas, filtros) {
  const { busqueda, marcaActiva, tipoActivo } = filtros;
  const termino = busqueda.trim().toLowerCase();

  return maquinas.filter((maquina) => {
    const coincideBusqueda =
      !termino ||
      [maquina.nombre, maquina.marca, maquina.modelo, maquina.tipo]
        .join(' ')
        .toLowerCase()
        .includes(termino);

    const coincideMarca = marcaActiva === 'Todas' || maquina.marca === marcaActiva;
    const coincideTipo = tipoActivo === 'Todos' || maquina.tipo === tipoActivo;

    return coincideBusqueda && coincideMarca && coincideTipo;
  });
}
