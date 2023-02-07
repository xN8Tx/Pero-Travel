import React from 'react';
import cl from './BigLink.module.css'
import { IUI } from '../../../types/types';

const BigLink = ({children, ...props}: IUI) => {
    return (
        <a className={cl.bigLink} {...props}>
            {children}
        </a>
    );
};

export default BigLink;