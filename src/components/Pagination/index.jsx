import React, { useEffect } from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalCards, cardsPerPage, setCurrentPage }) => {
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    useEffect(() => {
        window.scrollTo({ top: 80, behavior: 'smooth' });
    }, [currentPage]);

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            handleClick(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            handleClick(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="pagination-button"
            >
                Anterior
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handleClick(index + 1)}
                    className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="pagination-button"
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;



