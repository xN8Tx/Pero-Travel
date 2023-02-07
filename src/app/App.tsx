import React from 'react';
import './App.css'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../modules/home/Home';
import Catalog from '../modules/catalog/Catalog';
import Product from '../modules/product/Product';

const App = () => {
    return (
        <>
            <Header />
            {/* <Home />   */}
            {/* <Catalog /> */}
            <Product />
            <Footer />
        </>
    );
};

export default App;