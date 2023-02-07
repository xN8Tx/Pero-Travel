import React from 'react';
import './HomeAbout.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import TextBig from '../../../../ui/text/text14/TextBig';

const HomeAbout = () => {
    return (
        <section className='home-about'>
            <div className="home-about__wrapper">
                <div className="home-about__wrapper_big"></div>
                <div className="home-about__wrapper_small">
                    <HeadingTwo>О нас</HeadingTwo>
                    <TextBig>PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</TextBig>
                    <TextBig>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo </TextBig>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;