import React from 'react';
import './Error.css'
import HeadingTwo from '../../ui/headings/HeadingTwo/HeadingTwo';

const Error = () => {
    return (
        <main className='error'>
            <div className="container">
                <HeadingTwo>Ошибка 404</HeadingTwo>
            </div>
        </main>
    );
};

export default Error;