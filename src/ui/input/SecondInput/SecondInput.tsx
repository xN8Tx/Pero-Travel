import React from 'react';
import cl from './SecondInput.module.css'
import { IUI } from '../../../types/types';


const SecondInput = ({...props}:IUI) => {
    return (
        <input type="text" className={cl.SecondInput} {...props}/>
    );
};

export default SecondInput;