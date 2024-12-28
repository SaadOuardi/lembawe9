import React, { useState } from 'react';
import { Title } from '../../components/common/Title/Title';
import merch from '../../databases/merch';
import './Merch.scss';

export const Merch = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(merch.length / itemsPerPage);

    // Extract items for the current page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = merch.slice(startIndex, endIndex);

    const [animationDirection, setAnimationDirection] = useState('');

    // Handle page change
    const handlePageChange = (direction) => {
        setAnimationDirection(direction);
        setTimeout(() => {
            if (direction === 'left' && currentPage > 0) {
                setCurrentPage(currentPage - 1);
            } else if (direction === 'right' && currentPage < totalPages - 1) {
                setCurrentPage(currentPage + 1);
            }
            setAnimationDirection('');
        }, 300);
    };

    return (
        <section className='merch' id='merch'>
            <div className="section-content">
                <Title Title='MERCH' SpanTitle='' Description='BURN IT OR BURN OUT'/>
                
                {/* Pagination Buttons */}
                <div className='pagination d-flex justify-content-end gap-4'>
                    <button 
                        className='rounded-5' 
                        onClick={() => handlePageChange('left')} 
                        disabled={currentPage === 0}
                    >
                        {"<"}
                    </button>
                    <button 
                        className='rounded-5' 
                        onClick={() => handlePageChange('right')} 
                        disabled={currentPage === totalPages - 1}
                    >
                        {">"}
                    </button>
                </div>

                {/* Display Items with Slide Animation */}
                <div className={`items-container d-flex flex-wrap justify-content-center gap-4 ${animationDirection}`}>
                    {currentItems.map((item, index) => (
                        <div className="product-card card" key={index} style={{ width: "16rem" }}>
                            <div className='card-img-container'>
                                <img src={item.image} className="card-img-top" alt={item.name}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description.slice(0, 30) + '...'}</p>
                                <div className="btn btn-secondary">${item.price} Purchase now</div>
                            </div>
                            <div className='product-badge btn btn-primary'>Comming soon...</div>
                        </div>
                    ))}
                </div>
            </div> 
        </section>
    );
};
