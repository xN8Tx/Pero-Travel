import React from 'react';
import cl from './MainInput.module.css'
import { IUI } from '../../../types/types';

const MainInput = ({...props}:IUI) => {
    return (
        <input className={cl.MainInput} type="text" {...props}/>
    );
};

export default MainInput;