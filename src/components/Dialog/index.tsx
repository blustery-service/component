import React, { memo } from 'react';
import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DialogProps extends MuiDialogProps {}

const Dialog = (props: DialogProps) => {
  const { children, ...other } = props;
  return <MuiDialog {...other}>{children}</MuiDialog>;
};

export default memo(Dialog);
