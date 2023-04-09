import React from 'react';
import { Checkbox as MuiCheckBox, CheckboxProps as MuiCheckBoxProps } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckBoxProps extends MuiCheckBoxProps {}

const CheckBox = (props: CheckBoxProps) => {
  return <MuiCheckBox {...props} />;
};

export default CheckBox;
