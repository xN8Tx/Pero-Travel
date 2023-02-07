import React, {useState} from 'react';
import './CatalogNav.css'
import SecondInput from '../../../../ui/input/SecondInput/SecondInput';
import SecondButton from '../../../../ui/buttons/SecondButton/SecondButton';

const CatalogNav = () => {
    const [city, setCity] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [group, setGroup] = useState<string>('')

    const [bus, setBus] = useState<boolean>(false)
    const [jeep, setJeep] = useState<boolean>(false)
    const [yacht, setYacht] = useState<boolean>(false)
    const [canion, setCanion] = useState<boolean>(false)

    return (
        <nav className='catalog-nav'>
            <div className="container">
                <div className="catalog-nav__wrapper">
                    <div className="catalog-nav__tabs">
                        <p 
                            className={bus ? 'catalog-nav__tabs_tab active' : 'catalog-nav__tabs_tab'}
                            onClick={() =>{
                                setBus(!bus)
                                setJeep(false)
                                setYacht(false)
                                setCanion(false)
                            }}
                        >Автобусный тур</p>
                        <p 
                        className={jeep ? 'catalog-nav__tabs_tab active' : 'catalog-nav__tabs_tab'}
                        onClick={() =>{
                            setBus(false)
                            setJeep(!jeep)
                            setYacht(false)
                            setCanion(false)
                        }}
                        >Джиппинг</p>
                        <p 
                        className={yacht ? 'catalog-nav__tabs_tab active' : 'catalog-nav__tabs_tab'}
                        onClick={() =>{
                            setBus(false)
                            setJeep(false)
                            setYacht(!yacht)
                            setCanion(false)
                        }}
                        >Яхтинг</p>
                        <p 
                        className={canion ? 'catalog-nav__tabs_tab active' : 'catalog-nav__tabs_tab'}
                        onClick={() =>{
                            setBus(false)
                            setJeep(false)
                            setYacht(false)
                            setCanion(!canion)
                        }}
                        >Каньонинг</p>
                    </div>
                    <div className="catalog-nav__input">
                        <SecondInput 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            id='city' 
                            type='text' 
                            placeholder='Город'
                        />
                        <SecondInput 
                            value={date} 
                            onChange={e => setDate(e.target.value)}
                            id='date' 
                            type='date' 
                            placeholder='Дата'
                        />
                        <SecondInput 
                            value={group} 
                            onChange={e => setGroup(e.target.value + ' человек')}
                            id='group' 
                            type='text' 
                            placeholder='Группа'
                        />
                        <SecondButton>Показать</SecondButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default CatalogNav;