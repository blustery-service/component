import React, { memo } from 'react';
import {
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
} from '@mui/material';

export interface CardActionsProps extends MuiCardActionsProps {}

const CardActions = (props: CardActionsProps) => {
  const { children, ...other } = props;
  return <MuiCardActions {...other}>{children}</MuiCardActions>;
};

export default memo(CardActions);
