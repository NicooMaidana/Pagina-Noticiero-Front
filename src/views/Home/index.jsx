import React, { useEffect, useState } from "react";
import CardInicio from "../../components/CardInicio";
import "./home.styles.css";
import { Pagination } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CardSection from "../../components/CardSectionNews";
import CardSeccionesHome from "../../components/CardSeccionesHome";
import { useLocation } from "react-router-dom";
import PaginationHome from "../../components/PaginationHome";
import NoticiaPrincipal from "../../components/NoticiaPrincipal";
import Publicidades from "../../components/BannerPublicidades";
import BannerPublicidades from "../../components/BannerPublicidades";
import CardClima from "../../components/CardClima";
import obtenerDatosClima from "../../../utils/request";

const Home = () => {
  const noticiaPrincipal = [
    {
      seccion: "Sociales",
      fecha: "17/07/2023",
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
      subtitulo:
        "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión...",
    },
  ];
  const noticiasSecundarias = [
    {
      seccion: "Sociales",
      fecha: "17/07/2023",
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
      subtitulo:
        "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión...",
    },
    {
      seccion: "Deportes",
      fecha: "12/04/2024",
      titulo:
        "Despedida prematura: Tiro no logra avanzar tras otro empate frustrante",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655c6fb9365ca-6577.jpg",
      subtitulo:
        "El equipo de Morteros no logró superar la fase de grupos al igualar 0 a 0 contra Gral. Paz Juniors...",
    },
  ];

  const noticiasData = [
    {
      seccion: "Sociales",
      fecha: "17/07/2023",
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
      subtitulo:
        "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión...",
    },
    {
      seccion: "Deportes",
      fecha: "12/04/2024",
      titulo:
        "Despedida prematura: Tiro no logra avanzar tras otro empate frustrante",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655c6fb9365ca-6577.jpg",
      subtitulo:
        "El equipo de Morteros no logró superar la fase de grupos al igualar 0 a 0 contra Gral. Paz Juniors...",
    },
    {
      seccion: "Policiales",
      fecha: "07/09/2022",
      titulo: "Morteros: Recuperaron una bicicleta robada",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655cd09cef8e7-6580.jpg",
      subtitulo:
        "Personal de Brigada de investigación tomó conocimiento por denuncia fórmula de la sustracción de una bicicleta, por lo que tras realizar averiguaciones pertinentes...",
    },
    {
      seccion: "Política",
      fecha: "11/11/2021",
      titulo: "Balojate 2023 en Morteros",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo:
        "Se desarrolla con total normalidad en todos los centros educativos...",
    },
    {
      seccion: "Salud",
      fecha: "07/21/2024",
      titulo:
        "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo:
        "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar...",
    },
    {
      seccion: "Economía",
      fecha: "01/03/2021",
      titulo:
        "Aseguran que la paralización de la obra pública no tendría impacto en Córdoba",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578580a2633b-6602.jpg",
      subtitulo:
        "El anuncio de Milei sobre la eliminación del gasto público en obras y su propuesta de modelo privado genera incertidumbre en el sector de la construcción...",
    },
    {
      seccion: "Educación",
      fecha: "03/06/2022",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo:
        "Tal como se anunció días pasados, la localidad de Freyre contará con una nueva escuela secundaria de formación profesional...",
    },
    {
      seccion: "Educación",
      fecha: "03/06/2022",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo:
        "Tal como se anunció días pasados, la localidad de Freyre contará con una nueva escuela secundaria de formación profesional...",
    },
    {
      seccion: "Educación",
      fecha: "03/06/2022",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo:
        "Tal como se anunció días pasados, la localidad de Freyre contará con una nueva escuela secundaria de formación profesional...",
    },
    {
      seccion: "Educación",
      fecha: "03/06/2022",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo:
        "Tal como se anunció días pasados, la localidad de Freyre contará con una nueva escuela secundaria de formación profesional...",
    },
    {
      seccion: "Educación",
      fecha: "03/06/2022",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo:
        "Tal como se anunció días pasados, la localidad de Freyre contará con una nueva escuela secundaria de formación profesional...",
    },
    {
      seccion: "Educación",
      fecha: "03/06/2022",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo:
        "Tal como se anunció días pasados, la localidad de Freyre contará con una nueva escuela secundaria de formación profesional...",
    },
    {
      seccion: "Educación",
      fecha: "03/06/2022",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo:
        "Tal como se anunció días pasados, la localidad de Freyre contará con una nueva escuela secundaria de formación profesional...",
    },
    {
      seccion: "Educación",
      fecha: "03/06/2022",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      subtitulo:
        "Tal como se anunció días pasados, la localidad de Freyre contará con una nueva escuela secundaria de formación profesional...",
    },
    {
      seccion: "Sociales",
      fecha: "17/07/2023",
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
      subtitulo:
        "La Municipalidad de Suardi, en conjunto con el Juzgado de Faltas, llevó a cabo una importante reunión...",
    },
    {
      seccion: "Salud",
      fecha: "07/21/2024",
      titulo:
        "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
      subtitulo:
        "Lo dijo el director del Hospital Iturraspe de San Francisco, Valentín Vicente respecto al  estado de salud del menor, “evolucionó favorablemente, se le pudo retirar...",
    },
  ];

  const articuloPrincipal = {
    imagen:
      "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
    lugar: "Morteros, Córdoba",
    titulo:
      "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
  };

  const secciones = [
    {
      seccion: "Salud",
      titulo:
        "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      fecha: "20/06/2022",
    },
    {
      seccion: "Deportes",
      titulo:
        "Triunfo contundente: 9 de Morteros y Porteña avanzan a las semifinales en el Torneo Clasificatorio.",
      fecha: "22/06/2022",
    },
    {
      seccion: "Sociales",
      titulo:
        "Centro de almaceneros de Córdoba: la inflación en noviembre superó el 14%.",
      fecha: "24/06/2022",
    },
  ];

  const otrosArticulos = [
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656f3cf8df608.jpeg",
      titulo: "La inflación en noviembre superó el 14%.",
      fecha: "hace 5 minutos",
      seccion: "Sociales",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655bc5080663c-6575.png",
      titulo: "Nueva escuela en Freyre.",
      fecha: "hace 14 minutos",
      seccion: "Educación",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578580a2633b-6602.jpg",
      titulo:
        "La paralización de la obra pública no tendría impacto en Córdoba.",
      fecha: "hace 22 minutos",
      seccion: "Economía",
    },
  ];

  const noticiasEducacion = [
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      titulo: "Nueva escuela en Freyre: “Formaremos profesionales...”",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      titulo:
        "Nueva escuela en Freyre: “Formaremos profesionales para nuestras propias empresas”",
    },
  ];

  const noticiasPoliciales = [
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655cd09cef8e7-6580.jpg",
      titulo: "Morteros: Recuperaron una bicicleta robada",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655cd09cef8e7-6580.jpg",
      titulo: "Morteros: Recuperaron una bicicleta robada",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655cd09cef8e7-6580.jpg",
      titulo: "Morteros: Recuperaron una bicicleta robada",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655cd09cef8e7-6580.jpg",
      titulo: "Morteros: Recuperaron una bicicleta robada",
    },
  ];

  const noticiasPolitica = [
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      titulo: "Balojate 2023 en Morteros",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      titulo: "Balojate 2023 en Morteros",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      titulo: "Balojate 2023 en Morteros",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656620a2b0435.jpg",
      titulo: "Balojate 2023 en Morteros",
    },
  ];

  const noticiasDeporte = [
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655c6fb9365ca-6577.jpg",
      titulo:
        "Despedida prematura: Tiro no logra avanzar tras otro empate frustrante",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655c6fb9365ca-6577.jpg",
      titulo:
        "Despedida prematura: Tiro no logra avanzar tras otro empate frustrante",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655c6fb9365ca-6577.jpg",
      titulo:
        "Despedida prematura: Tiro no logra avanzar tras otro empate frustrante",
    },
    {
      titulo:
        "Despedida prematura: Tiro no logra avanzar tras otro empate frustrante",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/0-655c6fb9365ca-6577.jpg",
    },
  ];

  const noticiasEconomia = [
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578580a2633b-6602.jpg",
      titulo:
        "Aseguran que la paralización de la obra pública no tendría impacto en Córdoba",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578580a2633b-6602.jpg",
      titulo:
        "Aseguran que la paralización de la obra pública no tendría impacto en Córdoba",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578580a2633b-6602.jpg",
      titulo:
        "Aseguran que la paralización de la obra pública no tendría impacto en Córdoba",
    },
    {
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578580a2633b-6602.jpg",
      titulo:
        "Aseguran que la paralización de la obra pública no tendría impacto en Córdoba",
    },
  ];

  const noticiasSalud = [
    {
      titulo:
        "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
    },
    {
      titulo:
        "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
    },
    {
      titulo:
        "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
    },
    {
      titulo:
        "Menor accidentado: “Evoluciona favorablemente, se encuentra estable”",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/6578797d6a3bc-6603.jpg",
    },
  ];

  const noticiasSociales = [
    {
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
    },
    {
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
    },
    {
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
    },
    {
      titulo: "Reunión para reubicar los caballos en Suardi",
      imagen:
        "https://practicas.coopmorteros.coop/public/image_news/656f4286c2792-7998.jpg",
    },
  ];

  const [datosClima, setDatosClima] = useState({});
  const [horaActual, setHoraActual] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const ciudad = "Morteros,AR";
  const API_KEY = "fc1e205c2beefe04393d1ae2a6ea1b3d";

  const obtenerDatosClima = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
      );
      const data = await response.json();

      const hora =
        new Date().toLocaleTimeString("us-AR", {
          hour: "2-digit",
          minute: "2-digit",
        }) + " hs";

      const temperatura = data.main.temp;
      const pronostico = data.weather[0].description;
      const humedad = data.main.humidity;
      const sensacion_termica = data.main.feels_like;
      const icono = data.weather[0].icon;

      setDatosClima({
        hora,
        temperatura,
        pronostico,
        humedad,
        sensacion_termica,
        icono,
      });
      setCargando(false);
    } catch (err) {
      setError("No se pudo obtener el clima.");
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerDatosClima();

    const intervalo = setInterval(() => {
      setHoraActual(
        new Date().toLocaleTimeString("us-AR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " hs"
      );
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1); // Estado para la página anterior

  const cardsPerPage = 4;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Extrae las cards para la página actual
  const currentCards = noticiasData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (event, pageNumber) => {
    setPrevPage(currentPage); // Guarda la página actual como anterior antes de cambiar
    setCurrentPage(pageNumber);
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container mx-auto mt-4 mb-10">
        <div className="flex flex-col md:flex-row md:justify-center md:items-start md:gap-4">
          <div className="flex flex-wrap lg:w-1/3 md:w-1/2 sm:w-3/4 xs:w-full">
            {noticiaPrincipal.map((data, index) => (
              <NoticiaPrincipal
                key={index}
                seccion={data.seccion}
                fecha={data.fecha}
                titulo={data.titulo}
                imagen={data.imagen}
                subtitulo={data.subtitulo}
              />
            ))}
          </div>
          <div className="flex flex-wrap lg:w-1/2 md:w-1/2 sm:w-3/4 xs:w-full justify-center">
            {noticiasSecundarias.map((datos, index) => (
              <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full" key={index}>
                <NoticiaPrincipal
                  seccion={datos.seccion}
                  fecha={datos.fecha}
                  titulo={datos.titulo}
                  imagen={datos.imagen}
                  subtitulo={datos.subtitulo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <div className="flex justify-center">
          <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCards.map((data, index) => (
              <CSSTransition
                key={`${data.titulo}-${index}`}
                timeout={300}
                classNames={currentPage > prevPage ? "card" : "card-right"}
              >
                <CardInicio
                  seccion={data.seccion}
                  fecha={data.fecha}
                  titulo={data.titulo}
                  imagen={data.imagen}
                  subtitulo={data.subtitulo}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <div className="flex justify-center mt-4">
          <PaginationHome
            count={Math.ceil(noticiasData.length / cardsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
        <div className="mt-10">
          <CardSection
            articuloPrincipal={articuloPrincipal}
            secciones={secciones}
            otrosArticulos={otrosArticulos}
          />
        </div>
        <div className="mt-3 content-center">
          <BannerPublicidades
            img="src/assets/img/Publicidades/rating9.png"
            href="/TopRating"
          />
          <div className="max-w-2xl">
          {!cargando && !error && (
            <CardClima 
              dataWeather={{
                hora: horaActual,
                temp: datosClima.temperatura + "°C",
                tiempo: datosClima.pronostico,
                humedad: datosClima.humedad + "%",
                st: datosClima.sensacion_termica + "°C",
                imgclima: `https://openweathermap.org/img/wn/${datosClima.icono}@4x.png`,
              }}
            />
          )}
          {error && <p>{error}</p>}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center mt-3 gap-4">
          <CardSeccionesHome seccion="Sociales" noticias={noticiasSociales} />
          <CardSeccionesHome seccion="Deportes" noticias={noticiasDeporte} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center mt-3 gap-4">
          <CardSeccionesHome
            seccion="Policiales"
            noticias={noticiasPoliciales}
          />
          <CardSeccionesHome seccion="Política" noticias={noticiasPolitica} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center m-5 space-y-4 lg:space-y-0">
          <div className="lg:w-1/2 xl:w-1/2 flex justify-center">
            <BannerPublicidades img="src/assets/img/Publicidades/655f633e3fa7e.png" />
          </div>
          <div className="lg:w-1/2 xl:w-1/2 flex justify-center">
            <BannerPublicidades img="src/assets/img/Publicidades/655f63ed546ef.png" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center mt-3 gap-4">
          <CardSeccionesHome seccion="Economía" noticias={noticiasEconomia} />
          <CardSeccionesHome seccion="Salud" noticias={noticiasSalud} />
        </div>
        <div className="flex flex-col lg:flex-row justify-center mt-4 gap-4">
          <CardSeccionesHome seccion="Educación" noticias={noticiasEducacion} />
        </div>
      </div>
    </>
  );
};

export default Home;
