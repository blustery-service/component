import React, { memo } from 'react';
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material';

export interface SelectProps extends MuiSelectProps {}

const Select = (props: SelectProps) => {
  const { children, ...other } = props;
  return <MuiSelect {...other}>{children}</MuiSelect>;
};

export default memo(Select);
