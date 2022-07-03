import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';


const FacebookPages = () => {
    return (
        <div className='w-5/12 mx-auto my-6 flex items-center justify-between'>
            <FlagIcon fontSize='large' color= "primary"/>
            <h2 className='text-6xl'>Coming <span className='text-blue-600'>Soon</span></h2>
        </div>
    );
};

export default FacebookPages;