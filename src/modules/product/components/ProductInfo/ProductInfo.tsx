import React from 'react';
import './ProductInfo.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import TextBig from '../../../../ui/text/text14/TextBig';
import HeadingThree from '../../../../ui/headings/HeadingThree/HeadingThree';
import pasport from '../../../../images/pasport.png'
import important from '../../../../images/important.png'


const ProductInfo = () => {
    return (
        <section className='product-info'>
            <div className="container">
                <HeadingTwo>Важная информация</HeadingTwo>
                <div className="product-info__wrapper">
                    <div className='product-info__row'>
                        <TextBig>При пересечении границы (Россия-Абхазия) при себе иметь</TextBig>
                        <div className='product-info__row_item'>
                            <img src={pasport} alt="" />
                            <HeadingThree>Паспорт гражданина РФ</HeadingThree>
                        </div>
                        <div className='product-info__row_item'>
                            <img src={pasport} alt="" />
                            <HeadingThree>Гражданам до 14 лет свидетельство о рождении</HeadingThree>
                        </div>
                    </div>
                    <div className='product-info__row'>
                        <div className="product-info__row_import">
                            <TextBig>
                                Иностранным гражданам въезд в Абхазию <strong>ограничен</strong>, кроме граждан Украины, республик ДНР и ЛНР.
                            </TextBig>
                            <img src={important} alt="" />
                        </div>
                        <div className="product-info__row_import">
                            <TextBig>
                                При возвращении из Абхазии в Россию сдавать ПЦР-тест не нужно, на карантин помещать не будут (Постановление Правительства РФ 1996-Р от 01.08.2020).
                            </TextBig>
                            <img src={important} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInfo;