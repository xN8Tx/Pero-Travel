import React from 'react';

import './HomeFeedback.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import SmallLink from '../../../../ui/buttons/BigLink/BigLink';
import MySlider from '../../../../ui/mySlider/MySlider';
import TextBig from '../../../../ui/text/text14/TextBig';
import TextSmall from '../../../../ui/text/text12/TextSmall';
import feedbackTest from '../../../../images/feedbackTest.png'


const HomeFeedback = () => {
    return (
        <section className='home-feedback'>
            <div className="home-feedback__title">
                <div className="container">
                    <HeadingTwo>Отзывы</HeadingTwo>
                    <SmallLink>Смотреть все</SmallLink>
                </div>
            </div>

            <MySlider slidesToShow={2}>
                <div className='feedback-slider__item'>
                    <div className="feedback-slider__content">
                        <div className='feedback-slider__content_image'>
                            <img src={feedbackTest} alt="" />
                        </div>
                        <div className="feedback-slider__content_text">
                            <TextBig>Name, age</TextBig>
                            <TextSmall>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </TextSmall>
                        </div>
                    </div>
                </div>
                <div className='feedback-slider__item'>
                    <div className="feedback-slider__content">
                        <div className='feedback-slider__content_image'>
                            <img src={feedbackTest} alt="" />
                        </div>
                        <div className="feedback-slider__content_text">
                            <TextBig>Name, age</TextBig>
                            <TextSmall>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </TextSmall>
                        </div>
                    </div>
                </div>
                <div className='feedback-slider__item'>
                    <div className="feedback-slider__content">
                        <div className='feedback-slider__content_image'>
                            <img src={feedbackTest} alt="" />
                        </div>
                        <div className="feedback-slider__content_text">
                            <TextBig>Name, age</TextBig>
                            <TextSmall>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </TextSmall>
                        </div>
                    </div>
                </div>
                <div className='feedback-slider__item'>
                    <div className="feedback-slider__content">
                        <div className='feedback-slider__content_image'>
                            <img src={feedbackTest} alt="" />
                        </div>
                        <div className="feedback-slider__content_text">
                            <TextBig>Name, age</TextBig>
                            <TextSmall>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </TextSmall>
                        </div>
                    </div>
                </div>
            </MySlider>
        </section>
    );
};

export default HomeFeedback;