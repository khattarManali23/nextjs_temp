/* eslint-disable @next/next/no-img-element */
/* eslint-disable unused-imports/no-unused-vars */
// Importing necessary modules from MUI
'use client';
import CloseIcon from '@mui/icons-material/Close'; // Importing the close icon
import { Dialog, DialogProps, IconButton, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IBannerResponse } from '@/services/bannerServices';

interface Props {
  data: IBannerResponse[];
}

const PopupBanner = (props: Props) => {
  const { data } = props;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');
  const [fullWidth, setFullWidth] =
    React.useState<DialogProps['fullWidth']>(true);

  const handleClose = () => {
    setOpen(false);
  };

  // Slick carousel settings
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,


  };

  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby='max-width-dialog-title'
        sx={{
          '& .MuiDialog-paper': {
            background: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',

          },
        }}
      >
        <Stack
          direction='column'
          spacing={2}
          sx={{
            width: '100%',
            justifyContent: 'flex-end',
            position: 'relative',
            p: 1,
          }}
        >
          <IconButton
            edge='end'
            color='inherit'
            onClick={handleClose}
            sx={{
              zIndex: 999,
              position: 'absolute',
              top: 0,
              right: 0,
              border: '1px solid black',

              color: 'black', // Adjust the color as needed
            }}
          >
            <CloseIcon />
          </IconButton>

          <Slider {...slickSettings}>
            {data?.map((banner) => (
              <Stack key={banner._id} sx={{
                maxHeight: '100vh', maxWidth: " 100vw"
              }}>
                <img
                  src={banner.image}
                  alt={banner.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: 'contain',

                  }}
                />
              </Stack>
            ))}
          </Slider>
        </Stack>
      </Dialog>
    </>
  );
};

export default PopupBanner;
