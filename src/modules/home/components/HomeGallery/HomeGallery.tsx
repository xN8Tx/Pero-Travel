import React from 'react';
import './HomeGallery.css'
import photo1 from '../../../../images/1gallery.png'
import photo2 from '../../../../images/2gallery.png'
import photo3 from '../../../../images/3gallery.png'
import photo4 from '../../../../images/4gallery.png'
import photo5 from '../../../../images/5gallery.png'
import photo6 from '../../../../images/6gallery.png'
import photo7 from '../../../../images/7gallery.png'
import photo8 from '../../../../images/8gallery.png'
import HeadingTwo from '../../../../ui/headings/HeadingTwo/HeadingTwo';
import SmallLink from '../../../../ui/buttons/SmallLink/SmallLink';
import TextBig from '../../../../ui/text/text14/TextBig';

const photoList = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

interface IHomeGalleryProps {
    modalState: number | null;
    setModalState: (parametr : number | null) => void;
}

const HomeGallery = ({modalState, setModalState} : IHomeGalleryProps) => {

    return (
        <section className='home-gallery'>
            <div className="home-gallery__title">
                <HeadingTwo>Галлерея</HeadingTwo>
                <SmallLink>Смотреть все</SmallLink>
            </div>
            <div className="home-gallery__wrapper">
                {photoList.map((photo, i) => {
                    i = i + 1;
                    return (
                        <div key= {i} className={'home-gallery__item item-' + i} onClick={() => setModalState(i - 1)}>
                            <img src={photo} alt="" />
                        </div>
                    )
                })}
            </div>
            {modalState !== null
                ?
                <div className="home-gaallery__module"
                    onClick={(e) => setModalState(null)}
                >
                    <div className="home-gallery__module_image" onClick={e => e.stopPropagation()}>
                        <img src={photoList[modalState]} alt="" />
                    </div>
                    <div className="home-gallery__module_navigation" onClick={e => e.stopPropagation()}>
                        <div className="prev"
                            onClick={() => {
                                if (modalState !== 0) {
                                    setModalState(modalState - 1)
                                }
                            }}
                        >
                            <svg viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#0499DD" stroke-width="2"/>
                            </svg>
                        </div>
                        <div className="count">
                            <TextBig>{modalState + 1 + ' / ' + photoList.length}</TextBig>
                        </div>
                        <div className="next"
                            onClick={() => {
                                if (modalState !== photoList.length - 1) {
                                    setModalState(modalState + 1)
                                }
                            }}
                        >
                            <svg viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 0.999998L22.5057 20.2655C23.8367 21.4579 23.8367 23.5421 22.5057 24.7345L0.999998 44" stroke="#0499DD" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </section>
    );
};

export default HomeGallery;