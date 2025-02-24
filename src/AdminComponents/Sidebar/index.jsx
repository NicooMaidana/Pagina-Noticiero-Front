import { useState, useEffect } from "react";
import { MdOutlineNavigateBefore, MdArticle, MdPeople, MdLocalPharmacy, MdPerson, MdNotifications, MdSettings, MdChurch } from "react-icons/md";
import { FaPlus, FaSignsPost, FaLocationPin, FaCalendarWeek } from "react-icons/fa6";
import { IoIosList } from "react-icons/io";
import { GoListOrdered } from "react-icons/go";
import { BsFillLayersFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSubSubMenu, setOpenSubSubMenu] = useState(null);
  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Menus = [
    {
      title: "Noticias",
      icon: MdArticle,
      subCategories: [
        { title: "Alta", icon: FaPlus, link: "/Noticias/Alta" },
        { title: "Listado", icon: IoIosList, link: "/Noticias/Listado" },
        { title: "Orden", icon: GoListOrdered, link: "/Noticias/Orden" },
        {
          title: "Ámbitos",
          icon: MdLocalPharmacy,
          subCategories: [
            { title: "Alta", icon: FaPlus, link: "/Ambitos/AltaAmbitos" },
            { title: "Listado", icon: IoIosList, link: "/Ambitos/ListadoAmbitos" }
          ]
        },
        {
          title: "Categorías",
          icon: BsFillLayersFill,
          subCategories: [
            { title: "Alta", icon: FaPlus, link: "/Categoria/Altas" },
            { title: "Listado", icon: IoIosList, link: "/Categoria/Listados" }
          ]
        }
      ]
    },
    {
      title: "Necrológicos",
      icon: MdPeople,
      subCategories: [
        { title: "Alta", icon: FaPlus, link: "/NecrologicoAlta" },
        { title: "Listado", icon: IoIosList, link: "/NecrologicoListado" },
        { title: "Gráficos", icon: MdPerson, link: "/NecrologicoGrafico" },
        {
          title: "Calles",
          icon: FaSignsPost,
          subCategories: [
            { title: "Alta", link: "/CallesAlta" },
            { title: "Listado", link: "/CallesListado" }
          ]
        },
        {
          title: "Cementerios",
          icon: FaLocationPin,
          subCategories: [
            { title: "Alta", link: "/CementerioAlta" },
            { title: "Listado", link: "/CementerioListado" }
          ]
        },
        {
          title: "Iglesias",
          icon: MdChurch,
          subCategories: [
            { title: "Alta", link: "/IglesiaAlta" },
            { title: "Listado", link: "/IglesiaListado" }
          ]
        }
      ]
    },
    {
      title: "Publicidades",
      icon: MdNotifications,
      subCategories: [
        { title: "Alta", icon: FaPlus, link: "/AltaPublicidades" },
        { title: "Listado", icon: IoIosList, link: "/" }
      ]
    },
    {
      title: "Farmacias",
      icon: MdLocalPharmacy,
      subCategories: [
        { title: "Alta", icon: FaPlus, link: "/AltaFarmacia" },
        { title: "Listado", icon: IoIosList, link: "/ListadoFarmacia" },
        { title: "Agenda", icon: FaCalendarWeek }
      ]
    },
    {
      title: "Usuarios",
      icon: MdPeople,
      subCategories: [
        { title: "Alta", icon: FaPlus, link: "/AltaUsuario" },
        { title: "Listado", icon: IoIosList, link: "/ListadoUsuario" }
      ]
    },
    { title: "Notifications", icon: MdNotifications, gap: true },
    { title: "Setting", icon: MdSettings },
  ];

  return (
    <div className="">
      <div className={`${open ? "w-60" : "w-20"} bg-black h-screen fixed p-5 pt-8 duration-300 transition-all`}>
        <MdOutlineNavigateBefore
          className={`absolute cursor-pointer -right-3 top-9 text-3xl text-white bg-slate-500 border-dark-purple border-2 rounded-full transition-transform duration-300 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <ul className="pt-0">
          {Menus.map((Menu, index) => (
            <li key={index}>
              <div
                onClick={() => setOpenSubMenu(openSubMenu === index ? null : index)}
                className={`flex justify-between rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-0"} ${index === 0 && "bg-light-white"}`}
              >
                <div className="flex items-center gap-x-4" >
                  <Menu.icon className="text-xl" />
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </div>
                {Menu.subCategories && (
                  <span className={`text-sm ${openSubMenu === index ? 'rotate-180' : ''} duration-300`}>
                    {openSubMenu === index ? '-' : '+'}
                  </span>
                )}
              </div>
              {Menu.subCategories && openSubMenu === index && (
                <ul className={`${open ? 'pl-6' : 'pl-0'} bg-slate-700 rounded-md`}>
                  {Menu.subCategories.map((subMenu, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subMenu.link} className="block">
                        <div
                          onClick={() => setOpenSubSubMenu(openSubSubMenu === subIndex ? null : subIndex)}
                          className="p-2 cursor-pointer hover:text-gray-400 text-white text-sm mt-2 flex justify-between"
                        >
                          <div className="flex items-center gap-x-4">
                            {subMenu.icon && <subMenu.icon className="text-lg" />}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                              {subMenu.title}
                            </span>
                          </div>
                          {subMenu.subCategories && (
                            <span className={`text-sm ${openSubSubMenu === subIndex ? 'rotate-180' : ''} duration-300`}>
                              {openSubSubMenu === subIndex ? '-' : '+'}
                            </span>
                          )}
                        </div>
                      </Link>
                      {subMenu.subCategories && openSubSubMenu === subIndex && (
                        <ul className={`${open ? 'pl-6' : 'pl-0'} bg-slate-600 rounded-md`}>
                          {subMenu.subCategories.map((subSubMenu, subSubIndex) => (
                            <li
                              key={subSubIndex}
                              className="p-2 cursor-pointer hover:text-gray-400 text-white text-sm mt-2 flex items-center gap-x-4"
                            >
                              <Link to={subSubMenu.link} className="block w-full">
                                {subSubMenu.icon && <subSubMenu.icon className="text-lg" />}
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                  {subSubMenu.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={`flex-1 transition-all duration-300 ${open ? 'ml-60' : 'ml-20'} main-content`}>
        <main className="flex-grow flex flex-col">
          {/* Aquí va el contenido de tu main */}
        </main>
      </div>
    </div>
  );
};

export default Sidebar;



