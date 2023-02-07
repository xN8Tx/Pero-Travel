import React from 'react';
import './ProductDescriptionItem.css'
import TextSmall from '../../../../ui/text/text12/TextSmall';
import money from '../../../../images/money2.png';


const ProductDescriptionItem = () => {
    return (
        <div className="product-description__costs_item">
            <div className="product-description__cost_sun"></div>
            <div className='product-description__cost_wrpapper'>
                <p className='text'>
                    <img src={money} alt="" />
                    1 618 ₽
                </p>
                <TextSmall>
                    Билет
                </TextSmall>
            </div>
        </div>
    );
};

export default ProductDescriptionItem;