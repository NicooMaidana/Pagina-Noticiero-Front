import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './ProgramTabs.css';

const ProgramTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [bodyBgColor, setBodyBgColor] = useState('');

  useEffect(() => {
    // Actualizar el color de fondo del body cuando cambia el tab activo
    setBodyBgColor(tabsData[activeTab].videoBackgroundColor);
    document.body.classList.add(`body-bg-${activeTab}`);
    return () => {
      // Eliminar la clase del body cuando se desmonta el componente
      document.body.classList.remove(`body-bg-${activeTab}`);
    };
  }, [activeTab, tabsData]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            style={{ backgroundColor: tab.backgroundColor }}
          >
            <div className="logo-container">
              <img src={tab.logo} alt={`${tab.title} logo`} />
            </div>
          </div>
        ))}
      </div>
      <div
        className="video-container"
        style={{ backgroundColor: bodyBgColor }}
      >
        <ReactPlayer url={tabsData[activeTab].url} controls width="100%" />
      </div>
    </div>
  );
};

export default ProgramTabs;