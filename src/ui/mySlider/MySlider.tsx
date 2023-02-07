import React from 'react';
import Slider from "react-slick";
import cl from './MySlider.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface IMySlider {
    children: React.ReactNode;
    slidesToShow: number;
}

const MySlider = ({children, slidesToShow}: IMySlider) => {
    const NextArrow = ({onClick}: any) => {
        return (
            <svg onClick={onClick} className={cl.next} width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.999998L22.5057 20.2655C23.8367 21.4579 23.8367 23.5421 22.5057 24.7345L0.999998 44" stroke="#0499DD" stroke-width="2"/>
            </svg>
        );
    }

    const PrevArrow = ({onClick}: any) => {
        return (
            <svg onClick={onClick} className={cl.prev} width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#0499DD" stroke-width="2"/>
            </svg>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
            breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                }
            },
            {
            breakpoint: 428,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                    slidesToScroll: 1,
                }
            }
        ],
        style: {
            marginLeft: '10%', marginTop: '90px', marginBottom: '150px'
        }
    }


    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
};

export default MySlider;