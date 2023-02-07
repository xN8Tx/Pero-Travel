import React from 'react';
import cl from './HeadingThree.module.css'
import { IUI } from '../../../types/types';

const HeadingThree = ({children, ...props}:IUI) => {
    return (
        <h3 className={cl.heading} {...props}>
            {children}
        </h3>
    );
};

export default HeadingThree