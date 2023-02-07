import React from 'react';
import './ProductList.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import ProductDescriptionItem from '../ProductDescriptionItem/ProductDescriptionItem';

const ProductList = () => {
    return (
        <section className='product-list'>
            <div className="container">
                <HeadingTwo>Дополнительные расходы (по желанию)</HeadingTwo>
                <div className="product-list__wrapper">
                    <ProductDescriptionItem />
                    <ProductDescriptionItem />
                    <ProductDescriptionItem />
                    <ProductDescriptionItem />
                    <ProductDescriptionItem />
                </div>
            </div>
        </section>
    );
};

export default ProductList;