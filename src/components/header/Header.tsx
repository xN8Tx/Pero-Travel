import React, {useState} from 'react';
import './Header.css'
import logo from '../../images/logo.svg';

const Header = () => {
    const [burger, setBurger] = useState<boolean>(false)
    return (
        <header className={burger ? 'header active' : 'header'}>   
            <div className="container">
                <div className="header__logo">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>                    
                </div>
                <div 
                    className={burger ? 'header__burger active' : 'header__burger'}
                    onClick={() => setBurger(!burger)}
                >
                    <span></span>
                </div>
                <div className={burger ? 'header__menu active' : 'header__menu'}>
                    <ul className='header__menu_list'>
                        <li>
                            <a className='active' href="/">
                                Главная 
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Экскурсии
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Личный кабинет
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;