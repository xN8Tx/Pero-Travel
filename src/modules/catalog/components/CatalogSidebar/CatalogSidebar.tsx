import React, {useState} from 'react';
import { RangeSlider } from 'rsuite';
import MainButton from '../../../../ui/buttons/MainButton/MainButton';
import SmallLink from '../../../../ui/buttons/BigLink/BigLink';
import "rsuite/dist/rsuite.min.css";
import './CatalogSidebar.css'
import HeadingThree from '../../../../ui/headings/HeadingThree/HeadingThree';
import CatalogSidebarFilter from '../CatalogSidebarFilter/CatalogSidebarFilter';
import CatalogSidebarGroupBtn from '../CatalogSidebarGroupBtn/CatalogSidebarGroupBtn';
import SecondInput from '../../../../ui/input/SecondInput/SecondInput';

const CatalogSidebar = () => {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(4000)
    const [minDur, setMinDur] = useState<number>(1)
    const [maxDur, setMaxDur] = useState<number>(7)
    const groupBtns = [
        {qnt: 1, status: false}, {qnt: 2, status: true}, {qnt: 3, status: false},
        {qnt: 4, status: false}, {qnt: 5, status: false}, {qnt: 6, status: false},
        {qnt: 7, status: false}, {qnt:8, status: false}, {qnt: 9, status: false},
        {qnt: 10, status: false}, {qnt:'Больше 10', status: false}
    ]
    return (
        <aside className='catalog-sidebar'>
            <div className="catalog-sidebar__title">
                <HeadingThree>Фильтры</HeadingThree>
            </div>

            <CatalogSidebarFilter title='Стоимость'>
                <div className="catalog-sidebar__item_shown">
                    <span className='catalog-sidebar__item_value'>{min}</span>
                    <span className='catalog-sidebar__item_value'>{max}</span>
                </div>
                <RangeSlider
                    min={0}
                    max={4000}
                    defaultValue={[1, 4000]}
                    onChange={e => {
                        setMin(e[0])
                        setMax(e[1])
                    }}
                    style={{width: '235px'}} 
                />
            </CatalogSidebarFilter>
            <div className='divider'></div>

            <CatalogSidebarFilter title='Количество человек'>
                <div className='catalog-sidebar__group'>
                    {
                        groupBtns.map((el, i) => (
                            <CatalogSidebarGroupBtn
                                key={i}
                                status={el.status}
                            >{el.qnt} чел.</CatalogSidebarGroupBtn>
                        ))
                    }
                </div>
            </CatalogSidebarFilter>
            <div className='divider'></div> {/* ЧЕРЕЗ MAP ПРОГОНЯТЬ СТАТЕ КАЖДЫЙ РАЗ ПРИ ИЗМЕНЕНИЕ ПО НОМЕРУ */}

            <CatalogSidebarFilter title={'Место'}>
            <div className='catalog-sidebar__city'>
                <div className='catalog-sidebar__item'>
                    <input type="radio" name="citySb" value="Абхазия"/>
                    <label htmlFor="citySb">Абхазия</label>
                </div>
                <div className='catalog-sidebar__item'>
                    <input type="radio" name="citySb" value="Красная поляна"/>
                    <label htmlFor="citySb">Красная поляна</label>
                </div>
                <div className='catalog-sidebar__item'>
                    <input type="radio" name="citySb" value="Сочи"/>
                    <label htmlFor="citySb">Сочи</label>
                </div>
                <div className='catalog-sidebar__item'>
                    <input type="radio" name="citySb" value="Адлер"/>
                    <label htmlFor="citySb">Адлер</label>
                </div>
            </div>
            </CatalogSidebarFilter>
            <div className='divider'></div>

            <CatalogSidebarFilter title={'Длительность'}>
            <div className="catalog-sidebar__item_shown">
                    <span className='catalog-sidebar__item_value'>{minDur} дней</span>
                    <span className='catalog-sidebar__item_value'>{maxDur} дней</span>
                </div>
                <RangeSlider
                    min={1}
                    max={7}
                    defaultValue={[1, 7]}
                    onChange={e => {
                        setMinDur(e[0])
                        setMaxDur(e[1])
                    }}
                    style={{width: '235px'}} 
                />
            </CatalogSidebarFilter>
            <div className='divider'></div>

            <CatalogSidebarFilter title={'Дата'}>
                <SecondInput type='date'/>
            </CatalogSidebarFilter>
            <div className='divider'></div>
            
            <div className="catalog-sidebar__btn">
                <MainButton to='/catalog'>Показать</MainButton>
                <SmallLink>
                    Сбросить фильтры
                </SmallLink>
            </div>
        </aside>
    );
};

export default CatalogSidebar;