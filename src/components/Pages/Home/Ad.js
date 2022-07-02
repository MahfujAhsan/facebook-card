import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PublicIcon from '@mui/icons-material/Public';
import { Button } from '@mui/material';

const Ad = ({ post, refetch }) => {
    const { brand_logo, org_name, status, quotes, director, cover_img, person_img } = post;
    refetch();
    return (
        <div className='bg-white rounded-lg shadow-lg'>
            <div className='flex justify-between items-center px-4 py-2'>
                <div className='flex items-center'>
                    <img className='rounded-full w-2/12' src={brand_logo} alt="brandLogo" />
                    <div className='flex-shrink ml-4'>
                        <div className='flex items-center'>
                            <h3 className='text-lg font-bold mr-2'>{org_name}</h3>
                            <CheckCircleIcon style={{ color: '#1A6ED8' }} fontSize='xs' />
                        </div>
                        <div className='flex items-center'>
                            <p className='text-sm' style={{ color: '#7C7C7C' }}>{status}</p>
                            <span className='mx-1'>·</span>
                            <PublicIcon fontSize='xs' />
                        </div>
                    </div>
                </div>
                <Button color="neutral">
                    <MoreHorizIcon />
                </Button>
            </div>
            <div style={{ borderBottom: "1px solid #7c7c7c" }} className='mt-2 px-4 pb-2'>
                <q>{quotes}</q> <span>- {director}</span>
            </div>
            <div className='px-6'>
                <div className='relative'>
                    <img src={cover_img} alt="cover_img" />
                    <img className='rounded-full border-8 border-white absolute top-3/4 left-3.5' width={200} src={person_img} alt="person_img" />
                </div>
            </div>
        </div>
    );
};

export default Ad;