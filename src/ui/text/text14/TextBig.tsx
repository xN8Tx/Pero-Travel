import React from 'react';
import cl from './TextBig.module.css'
import { IUI } from '../../../types/types';

const TextBig = ({children, ...props}: IUI) => {
    return (
        <p className={cl.text} {...props}>
            {children}
        </p>
    );
};

export default TextBig;