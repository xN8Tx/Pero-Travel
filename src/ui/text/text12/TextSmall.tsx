import React from 'react';
import cl from './TextSmall.module.css'
import { IUI } from '../../../types/types';

const TextSmall = ({children, ...props}: IUI) => {
    return (
        <p className={cl.text} {...props}>
            {children}
        </p>
    );
};

export default TextSmall;