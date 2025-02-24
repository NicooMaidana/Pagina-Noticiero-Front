import React, { useState } from 'react';
import './NewsGrid.css'; // Importamos los estilos que definiremos a continuación

const NewsCard = ({ category, title, image }) => {
    return (
        <div className="news-card">
            <div className="news-card-media">
                <img src={image} alt={title} />
            </div>
            <div className="news-card-content">
                <span className="news-card-category">{category}</span>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

const NewsGrid = () => {
    const [news, setNews] = useState([
        {
            category: 'Sociales',
            title: 'AOITA suspende el paro de transporte interurbano: avances en la negociación...',
            image: '/path-to-image1.jpg',
        },
        {
            category: 'Educación',
            title: 'Exitoso ciclo de charlas "Sumar" realizadas por el Instituto Ezpeleta...',
            image: '/path-to-image2.jpg',
        },
        {
            category: 'Sociales',
            title: 'Incendios: hay focos activos en Capilla del Monte...',
            image: '/path-to-image3.jpg',
        },
        {
            category: 'Educación',
            title: 'Llaman a licitación para la construcción de la sede de Morteros de la Universidad...',
            image: '/path-to-image4.jpg',
        },
    ]);

    return (
        <div className="news-grid">
            {news.map((item, index) => (
                <NewsCard
                    key={index}
                    category={item.category}
                    title={item.title}
                    image={item.image}
                />
            ))}
        </div>
    );
};

export default NewsGrid;





// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const newsData = [
//     {
//         title: 'AOITA SUSPENDE EL PARO DE TRANSPORTE INTERURBANO',
//         imageUrl: '/path-to-your-image/30.png', // Aquí debes poner la ruta correcta a tus imágenes
//         category: 'Sociales',
//         link: '#',
//     },
//     {
//         title: 'INCENDIOS: HAY FOCOS ACTIVOS EN CAPILLA DEL MONTE',
//         imageUrl: '/path-to-your-image/image2.jpg', // Ajusta las imágenes
//         category: 'Sociales',
//         link: '#',
//     },
//     {
//         title: 'EDUTURISMO: UN RECORRIDO POR LA HISTORIA',
//         imageUrl: '/path-to-your-image/image3.jpg',
//         category: 'Sociales',
//         link: '#',
//     },
//     {
//         title: 'ÉXITOSO CICLO DE CHARLAS “SUMAR”',
//         imageUrl: '/path-to-your-image/image4.jpg',
//         category: 'Educación',
//         link: '#',
//     },
//     {
//         title: 'MORTEROS: PICNIC CELEBRACIÓN PRIMAVERA',
//         imageUrl: '/path-to-your-image/image5.jpg',
//         category: 'Sociales',
//         link: '#',
//     },
//     {
//         title: 'LLAMAN A LICITACIÓN PARA NUEVA SEDE',
//         imageUrl: '/path-to-your-image/image6.jpg',
//         category: 'Educación',
//         link: '#',
//     },
// ];

// const NewsCarousel = () => {
//     return (
//         <Box sx={{ maxWidth: '900px', margin: 'auto', padding: '20px' }}>
//             <Typography variant="h4" align="center" gutterBottom>
//                 Orden de Noticias
//             </Typography>
//             <Carousel
//                 showThumbs={false}
//                 showStatus={false}
//                 infiniteLoop
//                 useKeyboardArrows
//                 autoPlay
//                 interval={5000}
//                 showArrows
//             >
//                 {newsData.map((news, index) => (
//                     <Box key={index} sx={{ position: 'relative' }}>
//                         <a href={news.link} target="_blank" rel="noopener noreferrer">
//                             <img src={news.imageUrl} alt={news.title} style={{ borderRadius: '10px', width: '100%' }} />
//                             <Box
//                                 sx={{
//                                     position: 'absolute',
//                                     bottom: 0,
//                                     left: 0,
//                                     right: 0,
//                                     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//                                     color: '#fff',
//                                     padding: '10px',
//                                     borderBottomLeftRadius: '10px',
//                                     borderBottomRightRadius: '10px',
//                                 }}
//                             >
//                                 <Typography variant="subtitle2" sx={{ backgroundColor: '#f90', padding: '4px', borderRadius: '4px' }}>
//                                     {news.category}
//                                 </Typography>
//                                 <Typography variant="h6" component="div">
//                                     {news.title}
//                                 </Typography>
//                             </Box>
//                         </a>
//                     </Box>
//                 ))}
//             </Carousel>
//         </Box>
//     );
// };

// export default NewsCarousel;


// npm install @mui/material @emotion/react @emotion/styled react-responsive-carousel









