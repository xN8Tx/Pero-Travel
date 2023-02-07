import React, {useState} from 'react';
import ProductConcept from './components/ProductConcept/ProductConcept';
import ProductDescription from './components/ProductDescription/ProductDescription';
import ProductGallery from './components/ProductGallery/ProductGallery';
import ProductRoute from './components/ProductRoute/ProductRoute';
import ProductFeedback from './components/ProductFeedback/ProductFeedback';
import ProductList from './components/ProductList/ProductList';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ProductExpenses from './components/ProductExpenses/ProductExpenses';

const Product = () => {
    const [modalState, setModalState] = useState<number | null>(null)
    
    return (
        <main className='product'>
            <ProductConcept />
            <ProductDescription />
            <ProductRoute />
            <ProductList />
            <ProductInfo />
            <ProductGallery modalState={modalState} setModalState={setModalState}/>
            <ProductFeedback />
            <ProductExpenses />
        </main>
    );
};

export default Product;