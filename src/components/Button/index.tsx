import { ButtonProps as MuiButtonProps, Button as MuiButton } from '@mui/material';
import React, { memo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-interface
export interface IButtonProps extends MuiButtonProps {}

const Button = (props: IButtonProps) => {
  const { children, variant = 'contained', color = 'primary', size = 'medium', ...other } = props;

  return (
    <MuiButton variant={variant} color={color} size={size} {...other}>
      {children}
    </MuiButton>
  );
};

export default memo(Button);
