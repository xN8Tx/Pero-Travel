import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../modules/home/Home';
import Catalog from '../modules/catalog/Catalog';
import Product from '../modules/product/Product';
import Error from '../components/erorr/Error';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="catalog" element={<Catalog/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer />
        </>
    );
};

export default App;