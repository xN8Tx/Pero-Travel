import React from 'react';
import './ProductDescription.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import TextBig from '../../../../ui/text/text14/TextBig';
import ProductDescriptionItem from '../ProductDescriptionItem/ProductDescriptionItem';

const ProductDescription = () => {
    return (
        <section className='product-desctiption'>
            <div className="container">
                <div className="product-description__article">
                    <HeadingTwo>Описание экскурсии</HeadingTwo>
                    <TextBig>
                        Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок. 
                    </TextBig>
                </div>
                <div className="product-description__costs">
                    <ProductDescriptionItem />
                    <ProductDescriptionItem />
                    <ProductDescriptionItem />
                </div>
            </div>
        </section>
    );
};

export default ProductDescription;