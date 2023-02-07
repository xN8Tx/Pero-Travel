import React from 'react';
import cl from './MainButton.module.css'
import { IUI } from '../../../types/types';
import { Link } from 'react-router-dom';

interface IMainButton extends IUI {
    to: string;
}

const MainButton = ({children, to, ...props}: IMainButton) => {
    return (
        <Link to={to} className={cl.MainButton} {...props}>
            <p>
                {children}
            </p>
        </Link>
    );
};

export default MainButton;