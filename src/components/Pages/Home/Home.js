import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Shared/Loader';
import Ad from './Ad';

const Home = () => {
    const { data, isLoading, refetch } = useQuery("ad", () => axios.get(`http://localhost:5000/facebookAd`));
    if(isLoading) {
        return <Loader />
    }
    return (
        <div className='my-8 w-2/4 mx-auto'>
            <div>
                {
                    data.data.map(post => <Ad key={post._id} post={post} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default Home;