import React from 'react';
import loadingGif from "../../assets/css-car-preloader.gif";

const Loader = () => {
    return (
        <div>
            <img className='w-screen' src={loadingGif} alt="" />
        </div>
    );
};

export default Loader;