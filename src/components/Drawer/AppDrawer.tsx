// AppDrawer.tsx
import CancelIcon from '@mui/icons-material/Cancel';
import { Stack } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import React, { FC, ReactNode } from 'react';

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
  direction?: 'left' | 'right' | 'top' | 'bottom';

  children?: ReactNode;
}

const AppDrawer: FC<AppDrawerProps> = ({
  open,
  onClose,
  children,
  direction,
}) => {
  return (
    <Drawer
      anchor={direction}
      open={open}
      onClose={onClose}
      sx={{
        width: '90%',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '90%',
          boxSizing: 'border-box',
        },
      }}
    >
      <Stack
        direction='row'
        spacing={2}
        alignItems='center'
        justifyContent='center'
        className='flex justify-end p-2 '
      >
        <CancelIcon
          sx={{ fontSize: 30, color: 'black', bgcolor: 'white' }}
          onClick={onClose}
        />
      </Stack>

      {children}
    </Drawer>
  );
};

export default AppDrawer;
