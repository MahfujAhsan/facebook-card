import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Button } from '@mui/material';
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <section className='lg:w-5/12 mx-auto bg-white rounded-lg shadow-lg'>
            <nav className='py-4 flex justify-around px-4'>
                <Link to="/">
                    <Button color="primary" variant="contained"><HomeIcon fontSize='large' /></Button>
                </Link>
                <Link className='px-1' to="/pages">
                    <Button color="primary" variant="contained"><FlagIcon fontSize='large' /></Button>
                </Link>
                <Link to="/watch">
                    <Button color="primary" variant="contained"><SubscriptionsIcon fontSize='large' /></Button>
                </Link>
                <Link className='px-1' to="groups">
                    <Button color="primary" variant="contained"> <SupervisedUserCircleIcon fontSize='large' /></Button>
                </Link>
                <Link to="/gaming">
                    <Button color="primary" variant="contained">
                        <SportsEsportsIcon fontSize='large' /></Button>
                </Link>

            </nav>
        </section>
    );
};

export default Navbar;