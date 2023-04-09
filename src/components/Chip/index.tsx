import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChipProps extends MuiChipProps {}

const Chip = (props: ChipProps) => {
  return <MuiChip {...props} />;
};

export default Chip;
