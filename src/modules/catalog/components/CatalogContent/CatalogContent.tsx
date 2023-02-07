import React from 'react';
import './CatalogContent.css' 
import CatalogSidebar from '../CatalogSidebar/CatalogSidebar';
import CatalogTours from '../CatalogTours/CatalogTours';

const CatalogContent = () => {
    return (
        <section className='catalog-content'>
            <div className="container">
                <CatalogSidebar />
                <CatalogTours />
            </div>
        </section>
    );
};

export default CatalogContent;
