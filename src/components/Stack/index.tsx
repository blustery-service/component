import React, { memo } from 'react';
import {
  Stack as MuiStack,
  StackProps as MuiStackProps,
} from '@mui/material';

export interface StackProps
  extends MuiStackProps {}

const Stack = (props: StackProps) => {
  const { children, ...other } = props;
  return (
    <MuiStack {...other}>
      {children}
    </MuiStack>
  );
};

export default memo(Stack);
