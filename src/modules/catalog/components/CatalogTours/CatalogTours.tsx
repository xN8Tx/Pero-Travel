import React from 'react';
import './CatalogTours.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import CatalogToursItem from '../CatalogToursItem/CatalogToursItem';

const CatalogTours = () => {
    return (
        <section className='catalog-tours'>
            <div className="catalog-tours__title">
                <HeadingTwo>Наши туры</HeadingTwo>
            </div>
            <CatalogToursItem />
            <div className="catalog-tours__pagination">
                <div className="catalog-tours__pagination_wrapper">
                    <div className="catalog-tours__pagination_prev">
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7L1 4L4 1" stroke="black" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <div className="catalog-tours__pagination_list">
                        <span className='active'>1</span>
                        <span>2</span>
                        <span>3</span>
                    </div>
                    <div className="catalog-tours__pagination_next">
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7L4 4L1 1" stroke="black" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatalogTours;