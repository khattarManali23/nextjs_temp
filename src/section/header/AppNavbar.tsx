import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItemButton } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import AppDrawer from '@/components/Drawer/AppDrawer';

import Logo from '@/assets/svg/Logo';

const AppNavbar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className='flex flex-wrap w-full  items-center justify-center  '>
      <div className='flex items-center sm:w-10/12  w-full  text-blue-900 mr-6 justify-between p-6'>
        <Stack
          direction='row'
          spacing={2}
          alignItems='center'
          justifyContent='center'
        >
          <Logo />
        </Stack>
        <div className='flex md:hidden'>
          <MenuIcon onClick={toggleMenu} />
        </div>

        <div className=' text-right font-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none sm:flex hidden'>
          <a
            href='#'
            className='block md:inline-block text-black  px-3 py-3 border-b-2 text-md
          font-medium   md:border-none'
          >
            Directory
          </a>
          <a
            href='#'
            className='block md:inline-block text-black  px-3 py-3 border-b-2 text-md
          font-medium   md:border-none'
          >
            Sponsorship
          </a>
          <a
            href='#'
            className='block md:inline-block text-black  px-3 py-3 border-b-2 text-md
          font-medium   md:border-none'
          >
            Contact
          </a>
          <a
            href='#'
            className='block md:inline-block text-black  px-3 py-3 border-b-2 text-md
          font-medium   md:border-none'
          >
            Sign In
          </a>
        </div>

        <AppDrawer open={menuVisible} onClose={toggleMenu} direction='right'>
          <List className='flex justify-center items-center '>
            <ListItemButton
              component='a'
              href='#'
              className='block md:inline-block text-black hover:text-[#CF1F2F] px-[0.1px] py-6 border-b-2 text-md first-letter: font-medium md:border-none'
            >
              <Button size='sm' variant='primary'>
                Directory
              </Button>
            </ListItemButton>
            <ListItemButton
              component='a'
              href='#'
              className='block md:inline-block text-black hover:text-[#CF1F2F] px-[0.1px] py-6 border-b-2 text-md first-letter: font-medium md:border-none'
            >
              <Button size='sm' variant='primary'>
                Sponsorship
              </Button>
            </ListItemButton>
            <ListItemButton
              component='a'
              href='#'
              className='block md:inline-block text-black  px-[0.1px] py-6 border-b-2 text-md first-letter: font-medium md:border-none'
            >
              <Button size='sm' variant='primary'>
                Contact
              </Button>
            </ListItemButton>
            <ListItemButton
              component='a'
              href='#'
              className='block md:inline-block text-black  px-[0.1px] py-6 border-b-2 text-md first-letter: font-medium md:border-none'
            >
              <Button size='sm' variant='primary'>
                Sign In
              </Button>
            </ListItemButton>
          </List>
          <List className='flex justify-start items-start p-1 flex-col'>
            {list.map((item, index) => (
              <ListItemButton
                key={index}
                component='a'
                href='#'
                className='block md:inline-block text-black hover:text-[#CF1F2F] px-4 py-3 border-b-2 text-md first-letter: font-medium md:border-none '
              >
                {item}
              </ListItemButton>
            ))}
          </List>
        </AppDrawer>
      </div>
      <div className='sm:flex  hidden justify-center items-center w-full  bg-[#CF1F2F]  '>
        <div className='flex justify-center items-center w-10/12  bg-[#CF1F2F] mr-6 '>
          {list.map((item, index) => (
            <div
              key={index}
              className='flex justify-center items-center   bg-[#CF1F2F] mr-6 '
            >
              <a
                href='#'
                className='block md:inline-block text-white  px-3 py-3 border-b-2 text-lg
          font-medium   md:border-none'
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;

const list = [
  'Home',
  'Membership',
  'Events Calendar',
  'New & Updates',
  'Glimpses',
  'About IIID',
  'More',
];
