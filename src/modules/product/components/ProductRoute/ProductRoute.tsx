import React from 'react';
import './ProductRoute.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import TextBig from '../../../../ui/text/text14/TextBig';
import productSlider from '../../../../images/prodcutSlider.png'



const ProductRoute = () => {
    return (
        <section className='product-route'>
            <div className="product-route__wrapper">
                <div className="product-route__text">
                    <HeadingTwo>Описание маршрута</HeadingTwo>
                    <ul className="product-route__text_list">
                        <li>Город Гагра, Колоннада, ресторан "Гагрипш", Парк принца Ольденбурского;</li>
                        <li>Смотровая площадка "Прощай Родина", "Чабгарский" карниз, Подвесной мост через реку "Бзыбь";</li>
                        <li>Дегустация сыра, меда, вина, чачи (входит в стоимость экскурсии), Голубое Озеро, Юпшарский каньон ("Каменный мешок"), Озеро "Рица", Водопады "Девичьи и мужские слезы".</li>
                    </ul>
                    
                    <TextBig>Далее на выбор:</TextBig>
                    <ul className="product-route__text_list">
                        <li>Монастырь "Новый Афон", Новоафонская Пещера, "Рукотворный" водопад, храм "Симона Кананита", Лебединое озеро.</li>
                        <li>Термальный источник в с. Приморское.  </li>
                    </ul>
                </div>
                <div className="product-route__item">
                    <img src={productSlider} alt="" />
                </div>
            </div>
        </section>
    );
};

export default ProductRoute;