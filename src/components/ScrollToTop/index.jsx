// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(-10, -10);
    }, 100); // Ajusta el retraso si es necesario

    return () => clearTimeout(timer); // Limpia el temporizador en caso de que el componente se desmonte
  }, [pathname]);

  return null;
};

export default ScrollToTop;