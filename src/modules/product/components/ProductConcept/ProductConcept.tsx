import React from 'react';
import './ProductConcept.css'
import photo from '../../../../images/productConcept.png'
import MainButton from '../../../../ui/buttons/MainButton/MainButton';
import LikeButton from '../../../../ui/buttons/LikeButton/LikeButton';

const ProductConcept = () => {
    return (
        <section className="product-concept">
            <div className="container">
                <h2 className='product-concept__upheading'>Автобусный тур</h2>
                <h1 className='product-concept__heading'>ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ (ИЗ АДЛЕРА)</h1> 
                <div className="product-concept__btns">
                    <MainButton>К другим экскурсиям</MainButton>
                    <LikeButton />
                </div>
            </div>
            <img src={photo} alt="" />
        </section>
    );
};

export default ProductConcept;