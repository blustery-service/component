import Grid2 from '@mui/material/Unstable_Grid2';

import React from 'react';
import { GridProps as MuiGridProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GridProps extends MuiGridProps {}

const Grid = (props: GridProps) => {
  const { children, ...other } = props;
  return <Grid2 {...other}>{children}</Grid2>;
};

export default Grid;
