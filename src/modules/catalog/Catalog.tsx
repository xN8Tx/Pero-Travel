import React from 'react';
import './Catalog.css'
import CatalogHeading from './components/CatalogHeading/CatalogHeading';
import CatalogNav from './components/CatalogNav/CatalogNav';
import CatalogContent from './components/CatalogContent/CatalogContent';

const Catalog = () => {
    return (
        <main id='catalog'>
            <CatalogHeading />
            <CatalogNav />
            <CatalogContent />
        </main>
    );
};

export default Catalog;