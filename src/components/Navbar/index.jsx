import React, { useState, useEffect, useRef } from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { MdExpandMore, MdPhoneEnabled } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import BotonEnlace from "../BotonEnlaces";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [exitDirection, setExitDirection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const moreMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        if (window.scrollY > 70) {
          if (!isScrolled) {
            setExitDirection("up");
            setTimeout(() => {
              setIsScrolled(true);
              setExitDirection("");
            }, 300);
          }
        } else {
          if (isScrolled) {
            setExitDirection("left");
            setTimeout(() => {
              setIsScrolled(false);
              setExitDirection("");
            }, 300);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const toggleMore = () => setMoreOpen(!moreOpen);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
    setIsScrolled(false);
  };

  const handleMoreLinkClick = () => {
    setMoreOpen(false);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      toggleMenu(); // Cierra el menú
    }
  };

  return (
    <header>
      <nav
        className={`navbar ${isScrolled ? "scroll" : ""} ${
          exitDirection ? `exiting-${exitDirection}` : ""
        } ${menuOpen ? "active" : ""} flex`}
      >
        <img
          src="src/assets/img/Boton_EnVivo1_1.png"
          alt=""
          className={exitDirection ? `exiting-${exitDirection}` : ""}
        />
        <button className="menu-button" onClick={toggleMenu}>
          <AiOutlineMenu />
        </button>
        <div className={`h-full m-auto flex justify-center align-middle`}>
          <ul
            className={`flex List__offcanvas ${
              menuClosing ? "Salida__offcanvas" : ""
            }`}
          >
            <li onClick={handleLinkClick}>
              <Link to="/">Inicio</Link> <span className="bg-white"></span>
            </li>
            <li onClick={handleLinkClick}>
              <Link to="/Sociales">Sociales</Link>
              <span className="bg-orange-500"></span>
            </li>
            <li onClick={handleLinkClick}>
              <Link to="/Deportes">Deportes</Link>
              <span className="bg-red-700"></span>
            </li>
            <li onClick={handleLinkClick}>
              <Link to="/Policiales">Policiales</Link>
              <span className="bg-blue-700"></span>
            </li>
            <li onClick={handleLinkClick}>
              <Link to="/Politica">Política</Link>
              <span className="bg-yellow-400"></span>
            </li>
            <li onClick={handleLinkClick}>
              <Link to="/Economia">Economía</Link>
              <span className="bg-green-600"></span>
            </li>
            <li onClick={handleLinkClick}>
              <Link to="/Salud">Salud</Link>
              <span className="bg-blue-400"></span>
            </li>
            <li onClick={handleLinkClick}>
              <Link to="/Educacion">Educación</Link>
              <span className="bg-purple-700"></span>
            </li>
            <div className="more-menu" ref={moreMenuRef}>
              <button onClick={toggleMore}>
                <div className={`transition ${moreOpen ? "rotate" : ""}`}>
                  <MdExpandMore />
                </div>{" "}
                Más
              </button>
              <ul className={`dropdown ${moreOpen ? "open" : ""}`}>
                <hr />
                <li
                  onClick={() => {
                    handleMoreLinkClick();
                    handleLinkClick();
                  }}
                >
                  
                  <Link to="/GuiaTel">Guía Tel.</Link>
                </li>
                <hr />
                <li
                  onClick={() => {
                    handleMoreLinkClick();
                    handleLinkClick();
                  }}
                >
                  <Link to="/Necrologico">Necrológico</Link>
                </li>
                <hr />
                <li
                  onClick={() => {
                    handleMoreLinkClick();
                    handleLinkClick();
                  }}
                >
                  <Link to="/Clima">Clima</Link>
                </li>
                <hr />
                <li
                  onClick={() => {
                    handleMoreLinkClick();
                    handleLinkClick();
                  }}
                >
                  <Link to="/Programas">Programas</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
      <div className="fixed right-2 bottom-8" style={{ zIndex: 999 }}>
        <button
          className={`up-button ${isScrolled ? "up-button-scroll" : ""}`}
          onClick={handleScrollToTop}
        >
          <FaArrowUp />
        </button>

        <BotonEnlace color="bg-[#fcdce1]" titulo={"EnVivo"} enlace="/EnVivo">
          <img src="src/assets/img/en_vivo.gif" alt="" />
        </BotonEnlace>

        <BotonEnlace
          color="bg-[#00bb2d]"
          titulo={"WhatsApp"}
          enlace={
            "https://api.whatsapp.com/send/?phone=5403562411929&text&type=phone_number&app_absent=0"
          }
        >
          <FaWhatsapp />
        </BotonEnlace>
      </div>
    </header>
  );
};

export default Navbar;
