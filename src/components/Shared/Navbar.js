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
        <div className='w-2/4 mx-auto bg-white'>
            <div className='py-4 flex justify-around'>
                    <Button color="neutral" variant="contained">
                        <Link to="/">
                            <HomeIcon fontSize='large' />
                        </Link>
                    </Button>
                    <Button color="neutral" variant="contained">
                        <Link to="/pages">
                            <FlagIcon fontSize='large' />
                        </Link>
                    </Button>
                    <Button color="neutral" variant="contained">
                        <Link to="/watch">
                            <SubscriptionsIcon fontSize='large' />
                        </Link>
                    </Button>
                    <Button color="neutral" variant="contained">
                        <Link to="groups">
                            <SupervisedUserCircleIcon fontSize='large' />
                        </Link>
                    </Button>
                    <Button color="neutral" variant="contained">
                        <Link to="/gaming">
                            <SportsEsportsIcon fontSize='large' />
                        </Link>
                    </Button>
            </div>
        </div>
    );
};

export default Navbar;