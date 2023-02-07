import React from 'react';
import cl from './SecondButton.module.css';
import { IUI } from '../../../types/types';

const SecondButton = ({children}: IUI) => {
    return (
        <button className={cl.SecondButton}>
            {children}
        </button>
    );
};

export default SecondButton;