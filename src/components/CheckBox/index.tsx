import React, { memo } from 'react';
import {
  Checkbox as MuiCheckBox,
  CheckboxProps as MuiCheckBoxProps,
} from '@mui/material';

export interface CheckBoxProps extends MuiCheckBoxProps {}

const CheckBox = (props: CheckBoxProps) => {
  return <MuiCheckBox {...props} />;
};

export default memo(CheckBox);
