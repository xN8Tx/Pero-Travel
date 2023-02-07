import React from 'react';
import cl from './SmallLink.module.css'
import { IUI } from '../../../types/types';

const SmallLink = ({children, ...props}:IUI) => {
    return (
        <a className={cl.smallLink} {...props}>
            {children}
        </a>
    );
};

export default SmallLink;