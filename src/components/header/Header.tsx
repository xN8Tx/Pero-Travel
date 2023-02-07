import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [burger, setBurger] = useState<boolean>(false)
    return (
        <header className={burger ? 'header active' : 'header'}>   
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>                    
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
                            <NavLink to="/">
                                Главная 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog">
                                Экскурсии
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="*">
                                Личный кабинет
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;