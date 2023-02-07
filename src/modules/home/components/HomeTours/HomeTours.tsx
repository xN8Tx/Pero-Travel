import React from 'react';
import './HomeTours.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import SmallLink from '../../../../ui/buttons/SmallLink/SmallLink';
import MySlider from '../../../../ui/mySlider/MySlider';

import testImage from '../../../../images/testimage.png' // !DELETE THIS
import time from '../../../../images/time.png'
import money from '../../../../images/money.png'


import TextSmall from '../../../../ui/text/text12/TextSmall';
import TextBig from '../../../../ui/text/text14/TextBig';
import MainButton from '../../../../ui/buttons/MainButton/MainButton';

const HomeTours = () => {
    return (
        <section className='home-tours'>
            <div className="home-tours__title">
                <div className="container">
                    <HeadingTwo>Популярные экскурсии</HeadingTwo>
                    <SmallLink>Смотреть все</SmallLink>
                </div>
            </div>

            <MySlider slidesToShow={3}>
                <div className='slider-item'>
                    <div className="slider-item__content">
                        <div className='slider-item__content_title'>
                            <TextSmall>Time</TextSmall>
                            <TextBig id='name'>Name</TextBig>
                        </div>

                        <div className="slider-item__content_info">
                            <span>
                                <img src={time} alt="" />
                                <TextSmall>Time</TextSmall>
                            </span>
                            <span>
                                <img src={money} alt="" />
                                <TextSmall>Cost</TextSmall>
                            </span>
                        </div>

                        <div className='slider-item__content_description'>
                            <TextSmall>
                                Приглашаем вас на экскурсию 
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </TextSmall>
                        </div>

                        <div className='slider-item__btn'>
                            <MainButton id='btn'>Подробнее</MainButton>
                        </div>

                        <div className="slider-item__background">
                            <img src={testImage} alt="" />
                        </div>
                    </div>     
                </div>
                <div className='slider-item'>
                    <div className="slider-item__content">
                        <div className='slider-item__content_title'>
                            <TextSmall>Time</TextSmall>
                            <TextBig id='name'>Name</TextBig>
                        </div>

                        <div className="slider-item__content_info">
                            <span>
                                <img src={time} alt="" />
                                <TextSmall>Time</TextSmall>
                            </span>
                            <span>
                                <img src={money} alt="" />
                                <TextSmall>Cost</TextSmall>
                            </span>
                        </div>

                        <div className='slider-item__content_description'>
                            <TextSmall>
                                Приглашаем вас на экскурсию 
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </TextSmall>
                        </div>

                        <div className='slider-item__btn'>
                            <MainButton id='btn'>Подробнее</MainButton>
                        </div>

                        <div className="slider-item__background">
                            <img src={testImage} alt="" />
                        </div>
                    </div>     
                </div>
                <div className='slider-item'>
                    <div className="slider-item__content">
                        <div className='slider-item__content_title'>
                            <TextSmall>Time</TextSmall>
                            <TextBig id='name'>Name</TextBig>
                        </div>

                        <div className="slider-item__content_info">
                            <span>
                                <img src={time} alt="" />
                                <TextSmall>Time</TextSmall>
                            </span>
                            <span>
                                <img src={money} alt="" />
                                <TextSmall>Cost</TextSmall>
                            </span>
                        </div>

                        <div className='slider-item__content_description'>
                            <TextSmall>
                                Приглашаем вас на экскурсию 
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </TextSmall>
                        </div>

                        <div className='slider-item__btn'>
                            <MainButton id='btn'>Подробнее</MainButton>
                        </div>

                        <div className="slider-item__background">
                            <img src={testImage} alt="" />
                        </div>
                    </div>     
                </div>
                <div className='slider-item'>
                    <div className="slider-item__content">
                        <div className='slider-item__content_title'>
                            <TextSmall>Time</TextSmall>
                            <TextBig id='name'>Name</TextBig>
                        </div>

                        <div className="slider-item__content_info">
                            <span>
                                <img src={time} alt="" />
                                <TextSmall>Time</TextSmall>
                            </span>
                            <span>
                                <img src={money} alt="" />
                                <TextSmall>Cost</TextSmall>
                            </span>
                        </div>

                        <div className='slider-item__content_description'>
                            <TextSmall>
                                Приглашаем вас на экскурсию 
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </TextSmall>
                        </div>

                        <div className='slider-item__btn'>
                            <MainButton id='btn'>Подробнее</MainButton>
                        </div>

                        <div className="slider-item__background">
                            <img src={testImage} alt="" />
                        </div>
                    </div>     
                </div>
                <div className='slider-item'>
                    <div className="slider-item__content">
                        <div className='slider-item__content_title'>
                            <TextSmall>Time</TextSmall>
                            <TextBig id='name'>Name</TextBig>
                        </div>

                        <div className="slider-item__content_info">
                            <span>
                                <img src={time} alt="" />
                                <TextSmall>Time</TextSmall>
                            </span>
                            <span>
                                <img src={money} alt="" />
                                <TextSmall>Cost</TextSmall>
                            </span>
                        </div>

                        <div className='slider-item__content_description'>
                            <TextSmall>
                                Приглашаем вас на экскурсию 
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </TextSmall>
                        </div>

                        <div className='slider-item__btn'>
                            <MainButton id='btn'>Подробнее</MainButton>
                        </div>

                        <div className="slider-item__background">
                            <img src={testImage} alt="" />
                        </div>
                    </div>     
                </div>
                <div className='slider-item'>
                    <div className="slider-item__content">
                        <div className='slider-item__content_title'>
                            <TextSmall>Time</TextSmall>
                            <TextBig id='name'>Name</TextBig>
                        </div>

                        <div className="slider-item__content_info">
                            <span>
                                <img src={time} alt="" />
                                <TextSmall>Time</TextSmall>
                            </span>
                            <span>
                                <img src={money} alt="" />
                                <TextSmall>Cost</TextSmall>
                            </span>
                        </div>

                        <div className='slider-item__content_description'>
                            <TextSmall>
                                Приглашаем вас на экскурсию 
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </TextSmall>
                        </div>

                        <div className='slider-item__btn'>
                            <MainButton id='btn'>Подробнее</MainButton>
                        </div>

                        <div className="slider-item__background">
                            <img src={testImage} alt="" />
                        </div>
                    </div>     
                </div>
                <div className='slider-item'>
                    <div className="slider-item__content">
                        <div className='slider-item__content_title'>
                            <TextSmall>Time</TextSmall>
                            <TextBig id='name'>Name</TextBig>
                        </div>

                        <div className="slider-item__content_info">
                            <span>
                                <img src={time} alt="" />
                                <TextSmall>Time</TextSmall>
                            </span>
                            <span>
                                <img src={money} alt="" />
                                <TextSmall>Cost</TextSmall>
                            </span>
                        </div>

                        <div className='slider-item__content_description'>
                            <TextSmall>
                                Приглашаем вас на экскурсию 
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </TextSmall>
                        </div>

                        <div className='slider-item__btn'>
                            <MainButton id='btn'>Подробнее</MainButton>
                        </div>

                        <div className="slider-item__background">
                            <img src={testImage} alt="" />
                        </div>
                    </div>     
                </div>
                <div className='slider-item'>
                    <div className="slider-item__content">
                        <div className='slider-item__content_title'>
                            <TextSmall>Time</TextSmall>
                            <TextBig id='name'>Name</TextBig>
                        </div>

                        <div className="slider-item__content_info">
                            <span>
                                <img src={time} alt="" />
                                <TextSmall>Time</TextSmall>
                            </span>
                            <span>
                                <img src={money} alt="" />
                                <TextSmall>Cost</TextSmall>
                            </span>
                        </div>

                        <div className='slider-item__content_description'>
                            <TextSmall>
                                Приглашаем вас на экскурсию 
                                "Обзорная по Большому Сочи":
                                Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...
                            </TextSmall>
                        </div>

                        <div className='slider-item__btn'>
                            <MainButton id='btn'>Подробнее</MainButton>
                        </div>

                        <div className="slider-item__background">
                            <img src={testImage} alt="" />
                        </div>
                    </div>     
                </div>
            </MySlider>
        </section>
    );
};

export default HomeTours;