import React,{useState} from 'react';
import './HomeTours.css'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import SmallLink from '../../../../ui/buttons/SmallLink/SmallLink';
import MySlider from '../../../../ui/mySlider/MySlider';
import HomeSliderItem from '../HomeSliderITem/HomeSliderItem';

const HomeTours = () => {
    const [data, setData] = useState<Array<number>>([1,2,3,4,5,6,7,8])
    return (
        <section className='home-tours'>
            <div className="home-tours__title">
                <div className="container">
                    <HeadingTwo>Популярные экскурсии</HeadingTwo>
                    <SmallLink>Смотреть все</SmallLink>
                </div>
            </div>

            <MySlider slidesToShow={3}>
                {data.map((d, i) => (<HomeSliderItem key={i}/>))}
            </MySlider>
        </section>
    );
};

export default HomeTours;