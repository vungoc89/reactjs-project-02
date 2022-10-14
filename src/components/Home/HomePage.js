import React from 'react';
import videoHomepage from './../assets/video-homepage.mp4';
const HomePage = (props) => {
    return (
        <div className='homepage-container'>
           <video  autoplay='autoplay' muted loop>
            <source src={videoHomepage} type="video/mp4" />

            </video>
        </div>
    );
}

export default HomePage;
