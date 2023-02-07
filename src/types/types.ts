import React from 'react';

export interface IUI {
    children?: React.ReactNode;
    value?: string | number;
    onChange?: (e: any) => void;
    placeholder?: string;
    id?: string;
    style?: any;
    type?: string;
}