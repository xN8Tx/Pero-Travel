import React, {useState} from 'react';
import './Home.css'
import HomeConcept from './components/HomeConcept/HomeConcept';
import HomeTours from './components/HomeTours/HomeTours';
import HomeAbout from './components/HomeAbout/HomeAbout';
import HomeTypes from './components/HomeTypes/HomeTypes';
import HomeGallery from './components/HomeGallery/HomeGallery';
import HomeFeedback from './components/HomeFeedback/HomeFeedback';
import HomeRequest from './components/HomeRequest/HomeRequest';

const Home = () => {
    const [modalState, setModalState] = useState<number | null>(null)
    return (
        <main id='home'>
            <HomeConcept />
            <HomeTours/>
            <HomeAbout />
            <HomeTypes />
            <HomeGallery modalState={modalState} setModalState={setModalState}/>
            <HomeFeedback/>
            <HomeRequest />
        </main>
    );
};

export default Home;