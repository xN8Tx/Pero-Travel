import React from 'react';
import './CatalogHeading.css'
import video from '../../video/video2.mp4'

const CatalogHeading = () => {
    return (
        <section className='catalog-heading'>
            <div className="container">
                <h1 className='catalog-heading__title'>наши  экскурсии</h1>
            </div>
            <video className='catalog-heading__video' autoPlay={true} loop={true} muted={true} src={video}/>
        </section>
    );
};

export default CatalogHeading;