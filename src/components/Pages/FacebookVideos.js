import React from 'react';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const FacebookVideos = () => {
    return (
        <div className='w-5/12 mx-auto my-6 flex items-center justify-between'>
            <SubscriptionsIcon fontSize='large' color= "primary"/>
            <h2 className='text-6xl'>Coming <span className='text-blue-600'>Soon</span></h2>
        </div>
    );
};

export default FacebookVideos;