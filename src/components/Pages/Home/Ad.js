import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PublicIcon from '@mui/icons-material/Public';
import { Avatar, Button } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RecommendIcon from '@mui/icons-material/Recommend';
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Ad = ({ post, refetch }) => {
    const { brand_logo, org_name, status, quotes, director, cover_img, person_img } = post;
    refetch();
    return (
        <section className='bg-white rounded-lg shadow-lg'>
            <section className='flex justify-between items-center px-4 py-2'>
                <div className='flex items-center'>
                    <img className='rounded-full w-3/12 lg:w-2/12 cursor-pointer' src={brand_logo} alt="brandLogo" />
                    <div className='ml-2 lg:ml-3'>
                        <div className='flex items-center '>
                            <h3 className='font-bold mr-2 text-lg'>{org_name}</h3>
                            <CheckCircleIcon style={{ color: '#1A6ED8' }} fontSize='xs' />
                        </div>
                        <div className='flex items-center text-gray-600'>
                            <p className='text-xs'>{status}</p>
                            <span className='mx-1'>·</span>
                            <PublicIcon fontSize='xs' />
                        </div>
                    </div>
                </div>
                <Button color="neutral">
                    <MoreHorizIcon />
                </Button>
            </section>
            <section style={{ borderBottom: "1px solid #7c7c7c" }} className='mt-2 px-4 pb-2'>
                <q className='text-sm   '>{quotes}</q> <span>- {director}</span>
            </section>
            <section className='pb-5'>
                <div className='w-10/12 mx-auto'>
                    <img src={cover_img} alt="cover_img" />
                </div>
                <div className='lg:grid grid-cols-12 gap-x-3 mx-4'>
                    <div className='rounded-full -mt-9 lg:ml-10  col-span-5 inline-block'>
                        <img className='rounded-full border-8 border-white' src={person_img} alt="person_img" />
                    </div>
                    <div className='py-3 lg:py-0 col-span-7'>
                        <q className='px-6 italic text-gray-700 text-xs'>{quotes}</q><span className='text-red-600 font-semibold mt-2'>- {director}</span>
                    </div>
                </div>
            </section>
            <section className='flex lg:items-center lg:justify-between flex-col lg:flex-row px-4 bg-gray-200 py-3 shadow-md'>
                <div className='text-center lg:text-justify'>
                    <a className='text-xs text-gray-700' href="https://www.giveindia.org">GIVEINDIA.ORG</a>
                    <h2 className='font-bold'>Help 34 abandoned children</h2>
                    <p className='text-gray-700'>Not affiliate With Facebook</p>
                </div>
                <div className='text-center lg:text-justify mt-4 lg:mt-0'>
                    <button className='px-3 py-2 bg-slate-300 hover:bg-slate-400 rounded-md font-semibold btn'>Donate Now</button>
                </div>
            </section>
            <section className='mx-4 py-3 border-b-2 border-gray-200 flex justify-between'>
                <div className='flex items-center'>
                    <div>
                        <FavoriteIcon fontSize='small' className='text-red-700 -mr-2' />
                        <RecommendIcon fontSize='small' className='text-blue-700' />
                    </div>
                    <div>
                        <a href='#' className='text-gray-600 underline text-xs'>3.2K</a>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <a href='#' className='text-gray-700 underline text-xs'>33 Comments</a>
                    </div>
                    <div>
                        <a href='#' className='text-gray-700 underline text-xs'>111 Shares</a>
                    </div>
                </div>
            </section>
            <section className='mx-4 grid grid-cols-12'>
                <div className='col-span-9 flex  justify-between'>
                    <div className='flex items-center hover:bg-slate-200 my-3 px-1 lg:px-3 py-2 rounded-md cursor-pointer text-gray-600'>
                        <ThumbUpOffAltIcon />
                        <button>Like</button>
                    </div>
                    <div className='flex items-center hover:bg-slate-200 my-3 px-1 lg:px-3 py-2 rounded-md cursor-pointer text-gray-600'>
                        <ChatBubbleOutlineIcon />
                        <button>Comment</button>
                    </div>
                    <div className='flex items-center hover:bg-slate-200 my-3 px-1 lg:px-3 py-2 rounded-md cursor-pointer text-gray-600'>
                        <ReplyIcon />
                        <button>Share</button>
                    </div>
                </div>
                <div className='col-span-3 flex justify-end items-center'>
                    <button className=''>
                        <Avatar sx={{ backgroundColor: "darkred" }}/>
                    </button>

                </div>
            </section>
        </section>
    );
};

export default Ad;