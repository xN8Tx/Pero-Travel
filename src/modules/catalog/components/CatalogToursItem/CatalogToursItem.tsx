import React from 'react';
import './CatalogToursItem.css'
import photo from '../../../../images/CatalogToursItemPhoto.png'
import money from '../../../../images/money2.png'
import time from '../../../../images/time2.png'
import HeadingThree from '../../../../ui/headings/HeadingThree/HeadingThree';
import TextSmall from '../../../../ui/text/text12/TextSmall'; 
import MainButton from '../../../../ui/buttons/MainButton/MainButton';
import TextBig from '../../../../ui/text/text14/TextBig';
import LikeButton from '../../../../ui/buttons/LikeButton/LikeButton';


const CatalogToursItem = () => {
    return (
        <div className='CatalogToursItem'>
            <div className='CatalogToursItemPhoto'>
                <img src={photo} alt="" />
            </div>
            <div className="CatalogToursItemWrapper">
                <div className="CatalogToursItemWrapperTitle">
                    <TextSmall>Автобусный тур</TextSmall>
                    <HeadingThree>Золотое кольцо Абхазии (из Адлера)</HeadingThree>
                </div>
                <div className="CatalogToursItemWrapperCost">
                    <span>
                        <img src={money} alt="" />
                        1 618 ₽
                    </span>
                    <span>
                        <img src={money} alt="" />
                        1 618 ₽
                    </span>
                    <span>
                        <img src={time} alt="" />
                        2,5 часа
                    </span>
                </div>
                <div className="CatalogToursItemWrapperDescription">
                    <TextBig>
                        Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...
                    </TextBig>
                </div>
                <div className="CatalogToursItemWrapperButtons">
                    <MainButton>Подробнее</MainButton>
                    <LikeButton />
                </div>
            </div>
        </div>
    );
};

export default CatalogToursItem;