import React, { memo } from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

export interface ChipProps extends MuiChipProps {}

const Chip = (props: ChipProps) => {
  return <MuiChip {...props} />;
};

export default memo(Chip);
