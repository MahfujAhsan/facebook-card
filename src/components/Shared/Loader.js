import React from 'react';
import loadingGif from "../../assets/css-car-preloader.gif";

const Loader = () => {
    return (
        <img className='w-full h-full' src={loadingGif} alt="spinner" />
    );
};

export default Loader;