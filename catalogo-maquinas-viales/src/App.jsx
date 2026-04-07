import { useMemo, useState } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import HeroCatalogo from './components/catalogo/HeroCatalogo/HeroCatalogo';
import BuscadorCatalogo from './components/catalogo/BuscadorCatalogo/BuscadorCatalogo';
import FiltrosCatalogo from './components/catalogo/FiltrosCatalogo/FiltrosCatalogo';
import GridMaquinas from './components/catalogo/GridMaquinas/GridMaquinas';
import ModalMaquina from './components/catalogo/ModalMaquina/ModalMaquina';
import maquinas from './data/maquinas.json';
import { filtrarMaquinas, obtenerOpcionesFiltro } from './utils/filtrarMaquinas';
import WhatsappFloat from './components/ui/WhatsappFloat/WhatsappFloat';

function App() {
  const [busqueda, setBusqueda] = useState('');
  const [marcaActiva, setMarcaActiva] = useState('Todas');
  const [tipoActivo, setTipoActivo] = useState('Todos');
  const [maquinaActiva, setMaquinaActiva] = useState(null);

  const { marcas, tipos } = useMemo(() => obtenerOpcionesFiltro(maquinas), []);

  const maquinasFiltradas = useMemo(
    () => filtrarMaquinas(maquinas, { busqueda, marcaActiva, tipoActivo }),
    [busqueda, marcaActiva, tipoActivo]
  );

  return (
    <div className="app-shell">
      <Header />

      <main>
        <HeroCatalogo  />

        <section className="catalogo-panel" id="catalogo">
          <div className="catalogo-panel__top">
            <BuscadorCatalogo value={busqueda} onChange={setBusqueda} />
            <FiltrosCatalogo
              marcas={marcas}
              tipos={tipos}
              marcaActiva={marcaActiva}
              tipoActivo={tipoActivo}
              onMarcaChange={setMarcaActiva}
              onTipoChange={setTipoActivo}
            />
          </div>

          <GridMaquinas
            maquinas={maquinasFiltradas}
            onOpenDetail={setMaquinaActiva}
          />
        </section>
        <WhatsappFloat/>
      </main>

      <Footer />

      <ModalMaquina
        maquina={maquinaActiva}
        onClose={() => setMaquinaActiva(null)}
      />
    </div>
  );
}

export default App;
