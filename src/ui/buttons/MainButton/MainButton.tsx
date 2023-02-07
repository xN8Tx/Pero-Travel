import React from 'react';
import cl from './MainButton.module.css'
import { IUI } from '../../../types/types';

const MainButton = ({children, ...props}: IUI) => {
    return (
        <a className={cl.MainButton} {...props}>
            <p>
                {children}
            </p>
        </a>
    );
};

export default MainButton;