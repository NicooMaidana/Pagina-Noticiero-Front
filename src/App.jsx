import { useEffect, useState } from "react";
import "./App.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import Deportes from "./views/Deportes";
import Clima from "./views/Clima";
import Programas from "./views/Programas";
import Salud from "./views/Salud";
import Sociales from "./views/Sociales";
import GuiaTel from "./views/GuiaTel";
import Policiales from "./views/Policiales";
import Politica from "./views/Politica";
import Necrologico from "./views/Necrologico";
import Economia from "./views/Economia";
import Dashboard from "./components/Dashboard/index";
import Educacion from "./views/Educacion/Index";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadScreen";
import NoticiaDetallada from "./views/NoticiaDetallada";
import EnVivo from "./views/EnVivo";
import TopRating from "./views/TopRating";
import Admin from "./views/Admin";
import DashboardAdmin from "./AdminComponents/DashboardAdmin";
import Login from "./views/Login";
import NecrologicoAlta from "./views/NecrologicoAlta";
import NecrologicoListado from "./views/NecrologicoListado";
import NecrologicoGrafico from "./views/NecrologicoGrafico";
import CallesAlta from "./views/NecrologicosCalles/Alta";
import CallesListado from "./views/NecrologicosCalles/Listado";
import CementerioAlta from "./views/NecrologicosCementerio/Alta";
import CementerioListado from "./views/NecrologicosCementerio/Listado";
import IglesiaAlta from "./views/NecrologicoIglesia/Alta";
import IglesiaListado from "./views/NecrologicoIglesia/Listado";
import AltaUsuario from "./views/Usuario/AltaUsuario/index";
import ListadoUsuario from "./views/Usuario/ListadoUsuario/index";
import AltaFarmacia from "./views/Farmacia/AltaFarmacia/index";
import ListadoFarmacia from "./views/Farmacia/ListadoFarmacia/index";
import AltaPublicidades from "./views/Publicidades/AltaPublicidades/index";
import AltaAmbitos from "./views/Ambitos/AltaAmbitos/Index";
import ListadoAmbitos from "./views/Ambitos/ListadoAmbitos/Index";
import Altas from "./views/Categoria/Altas/Index";
import Listados from "./views/Categoria/Listados/Index";
import Alta from "./views/Noticias/Alta/Index";
import Listado from "./views/Noticias/Listado/Index";
import Orden from "./views/Noticias/Orden/Index";


const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    setTimeout(handleComplete, 1000);

    return () => {
      handleComplete();
    };
  }, [location.pathname]);

  return (
    <div>
      {loading && <LoadingScreen />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/Clima" element={<Clima />} />
          <Route path="/Deportes" element={<Deportes />} />
          <Route path="/Programas" element={<Programas />} />
          <Route path="/Economia" element={<Economia />} />
          <Route path="/Necrologico" element={<Necrologico />} />
          <Route path="/Politica" element={<Politica />} />
          <Route path="/Policiales" element={<Policiales />} />
          <Route path="/GuiaTel" element={<GuiaTel />} />
          <Route path="/Sociales" element={<Sociales />} />
          <Route path="/Salud" element={<Salud />} />
          <Route path="/Educacion" element={<Educacion />} />
          <Route path="/NoticiaDetallada" element={<NoticiaDetallada />} />
          <Route path="/EnVivo" element={<EnVivo />} />
          <Route path="/TopRating" element={<TopRating />} />
        </Route>
        <Route path='/' element={<DashboardAdmin />}>
          <Route path='/Admin' element={<Admin />} />
          <Route path='/NecrologicoAlta' element={<NecrologicoAlta />} />
          <Route path='/NecrologicoListado' element={<NecrologicoListado />} />
          <Route path='/NecrologicoGrafico' element={<NecrologicoGrafico />} />
          <Route path='/CallesAlta' element={<CallesAlta />} />
          <Route path='/CallesListado' element={<CallesListado />} />
          <Route path='/CementerioAlta' element={<CementerioAlta />} />
          <Route path='/CementerioListado' element={<CementerioListado />} />
          <Route path='/IglesiaAlta' element={<IglesiaAlta />} />
          <Route path='/IglesiaListado' element={<IglesiaListado />} />
          <Route path='/ListadoUsuario' element={<ListadoUsuario />} />
          <Route path='/AltaUsuario' element={<AltaUsuario />} />
          <Route path='/AltaFarmacia' element={<AltaFarmacia />} />
          <Route path='/ListadoFarmacia' element={<ListadoFarmacia />} />
          {/* <Route path='/AgendaFarmacia' element={<AgendaFarmacia />} /> */}
          <Route path='/AltaPublicidades' element={<AltaPublicidades />} />
          <Route path='/Ambitos/AltaAmbitos' element={<AltaAmbitos />} />
          <Route path='/Ambitos/ListadoAmbitos' element={<ListadoAmbitos />} />
          <Route path='/Categoria/Altas' element={<Altas />} />
          <Route path='/Categoria/Listados' element={<Listados />} />
          <Route path='/Noticias/Alta' element={<Alta />} />
          <Route path='/Noticias/Listado' element={<Listado />} />
          <Route path='/Noticias/Orden' element={<Orden />} />
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
