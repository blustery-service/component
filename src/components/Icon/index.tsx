import React from 'react';
import { Icon as IconReact } from '@iconify/react';
import { Box, BoxProps, PaletteColor } from '@mui/material';

type Color = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

export interface IconProps extends BoxProps {
  icon: string;
  color?: Color | string;
}

export default function Icon({ icon, color, ...other }: IconProps) {
  return (
    <Box
      component={IconReact}
      icon={icon}
      sx={{ ...(color && { color: (theme) => theme.palette[color as Color]?.main || color }) }}
      {...other}
    />
  );
}
