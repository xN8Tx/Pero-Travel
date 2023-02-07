import React from 'react';
import cl from './SmallLink.module.css'
import { IUI } from '../../../types/types';
import { NavLink } from 'react-router-dom';

const SmallLink = ({children, ...props}:IUI) => {
    return (
        <NavLink to="/catalog" className={cl.smallLink} {...props}>
            {children}
        </NavLink>
    );
};

export default SmallLink;