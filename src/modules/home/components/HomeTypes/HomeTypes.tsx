import React from 'react';
import './HomeTypes.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import HeadingThree from '../../../../ui/headings/HeadingThree/HeadingThree';
import photo1 from '../../../../images/1tour.png'
import photo2 from '../../../../images/2tour.png'
import photo3 from '../../../../images/3tour.png'
import photo4 from '../../../../images/4tour.png'
import TextBig from '../../../../ui/text/text14/TextBig';
import MainButton from '../../../../ui/buttons/MainButton/MainButton';

const HomeTypes = () => {
    return (
        <section className='home-types'>
            <div className="container">
                <HeadingTwo>Виды экскурсий</HeadingTwo>
                <div className="home-types__wrapper">
                    <div className="home-types__wrapper_item">
                        <div className='image'>
                            <img src={photo1} alt="" />
                        </div>
                        <div className='text'>
                            <HeadingThree>Автобусный тур</HeadingThree>
                            <TextBig>Один из самых насыщенных впечатлениями, доступных по цене и популярных видов отдыха. Во время одной поездки можно посмотреть достопримечательности сразу нескольких городов, причем обойдется это едва ли не в разы дешевле классического экскурсионного тура с ночевками в отелях. </TextBig> 
                        </div>
                    </div>
                    <div className="home-types__wrapper_item">
                        <div className='image'>
                            <img src={photo2} alt="" />
                        </div>
                        <div className='text'>
                            <HeadingThree>Яхтинг</HeadingThree>
                            <TextBig>Это то же, что круиз на лайнере или прогулка на пароме, только на яхте больше свободы, размеры судна в разы меньше, нет назойливой команды, можно самостоятельно почувствовать себя капитаном, постоять за штурвалом. Именно здесь вы почувствуете величайшие просторы Черногор моря.</TextBig> 
                        </div>
                    </div>
                    <div className="home-types__wrapper_item">
                        <div></div>
                        <div className='image'>
                            <img src={photo3} alt="" />
                        </div>
                        <div className='text'>
                            <HeadingThree>Джиппинг</HeadingThree>
                            <TextBig>Это путешествие на автомобилях высокой проходимости с преодолением естественных препятствий, это экстремальный вид спорта и отдыха, представляющий собой прохождение туристического маршрута по бездорожью на автомобилях.</TextBig> 
                        </div>
                    </div>
                    <div className="home-types__wrapper_item">
                        <div className='image'>
                            <img src={photo4} alt="" />
                        </div>
                        <div className='text'>
                            <HeadingThree>Каньонинг</HeadingThree>
                            <TextBig>Это экстремально-спортивный вид отдыха, который заключается в преодолении каньонов (обводненных или нет) при помощи альпинистского и иного снаряжения, а иногда и вброд, но без лодок или иных плавсредств.</TextBig> 
                        </div>
                    </div>
                </div>
                <div className="home-types__undertext">
                    <TextBig style={{color: '#282828'}}>Выбирайте на нашем сайте экскурсию, которая подходит именно вам <br/> и записывайтесь онлайн без очередей, просто и быстро!</TextBig>
                    <MainButton>К экскурсиям</MainButton>
                </div>
            </div>
        </section>
    );
};

export default HomeTypes;