import Grid2 from '@mui/material/Unstable_Grid2';

import React, { memo } from 'react';
import { GridProps as MuiGridProps } from '@mui/material';

export interface GridProps extends MuiGridProps {}

const Grid = (props: GridProps) => {
  const { children, ...other } = props;
  return <Grid2 {...other}>{children}</Grid2>;
};

export default memo(Grid);
