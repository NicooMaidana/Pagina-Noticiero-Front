import React from 'react'
import ProgramTabs from '../../components/ProgramTabs';
import ListadoProgramas from '../../components/listadoProgramas';


const Programas = () => {
  const tabsData = [
    {
      title: 'N50',
      logo: 'src/assets/img/LogoN50.png',
      url: 'https://www.youtube.com/playlist?list=PLB48JsuJ609N5HHz-AoIFPCm-YqC2KK6h',
      backgroundColor: '#18c5ff9f',
      videoBackgroundColor: '#18c5ff9f',
    },
    {
      title: 'C50Sports',
      logo: 'src/assets/img/LogoC50Sports.png',
      url: 'https://www.youtube.com/playlist?list=PLB48JsuJ609MhPj8u7kbP8tMpmkleuMce',
      backgroundColor: '#1dc200ad',
      videoBackgroundColor: '#1dc200ad',
    },
    {
      title: 'VXM',
      logo: 'src/assets/img/LogoVXM.png',
      url: 'https://www.youtube.com/playlist?list=PLB48JsuJ609PxSm632mXoinFxuTe6Odke',
      backgroundColor: '#ff1c8693',
      videoBackgroundColor: '#ff1c8693',
    },
    {
      title: 'SABORES',
      logo: 'src/assets/img/logosabores.png',
      url: 'https://youtu.be/Ap0r2eTns84?list=PLB48JsuJ609NomotyURHXgfZj9Bt1PfbU',
      backgroundColor: '#ff6b1ccd',
      videoBackgroundColor: '#ff6b1ccd',
    }
  ];
  const imgProgramas = [
    {
      title: 'Bien de Mañana',
      imagen: 'src/assets/img/BDM_3D.png',
      url: 'https://www.youtube.com/watch?v=fHsmzKuloc8&list=PLB48JsuJ609PXNQG5OTeCw1RJZALRsXuc&ab_channel=Canal50Morteros'
    },
    {
      title: 'Hablemos de Básquet',
      imagen: 'src/assets/img/HdB.png',
      url: 'https://www.youtube.com/watch?v=fHsmzKuloc8&list=PLB48JsuJ609PXNQG5OTeCw1RJZALRsXuc'
    },
    {
      title: 'A 2 Toques',
      imagen: 'src/assets/img/A2T.png',
      url: 'https://www.youtube.com/watch?v=J0ZSZP1MUvU&list=PLB48JsuJ609POjRJdXWwpgPPdZJms2hYb&ab_channel=Canal50Morteros'
    },
    {
      title: 'Parte del Aire',
      imagen: 'src/assets/img/PDA_2017.png',
      url: 'https://www.youtube.com/watch?v=uF1FahgYVMU&list=PLB48JsuJ609Mi2Aju5YNFs_yH77japEYQ'
    },
    {
      title: 'Cambio de Frente',
      imagen: 'src/assets/img/CDF.png',
      url: 'https://www.youtube.com/watch?v=-YEPqSqqI5Q&list=PLB48JsuJ609OIj11PjH_AiUmniJBnSimf'
    },
    {
      title: 'Conciertos en el Aire',
      imagen: 'src/assets/img/CONCIERTOS.png',
      url: ''
    },
    {
      title: 'Fútbol Sabatino',
      imagen: 'src/assets/img/FUTBOL_SABATINO.png',
      url: 'https://www.youtube.com/watch?v=4LKg2mPGy-I&list=PLB48JsuJ609PvhBFYez7ZWAOSp5fdI8bx'
    },
    {
      title: 'Tiempo de Bochas',
      imagen: 'src/assets/img/TDB.png',
      url: 'https://www.youtube.com/watch?v=XTkYVUYMX9w&list=PLB48JsuJ609O6VFOmHERG4vkEUg4y4kN5'
    }
  ];

  return (
    <>
      <div>
        <ProgramTabs tabsData={tabsData} />
      </div>
      <br /><br /><br />
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 relative z-0'>
        {imgProgramas.map((data, index) => (
          <ListadoProgramas
            key={index}
            title={data.titulo}
            imagen={data.imagen}
            url={data.url}
          />
        ))}
      </div>
    </>
  );
}

export default Programas