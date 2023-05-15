import React from 'react';
import { CardActions as MuiCardActions, CardActionsProps as MuiCardActionsProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CardActionsProps extends MuiCardActionsProps {}

const CardActions = (props: CardActionsProps) => {
  const { children, ...other } = props;
  return <MuiCardActions {...other}>{children}</MuiCardActions>;
};

export default CardActions;
