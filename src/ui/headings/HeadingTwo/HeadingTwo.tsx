import React from 'react';
import cl from './HeadingTwo.module.css'
import { IUI } from '../../../types/types';

const HeadingTwo = ({children, ...props}:IUI) => {
    return (
        <h2 className={cl.headingTwo} {...props}>
            {children}
        </h2>
    );
};

export default HeadingTwo;