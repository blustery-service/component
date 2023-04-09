import React, { ReactNode, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField, { TextFieldProps } from '../TextField';

export type FormSelectProps = {
  name: string;
  children: ReactNode;
} & TextFieldProps;

const FormSelect = ({ name, children, ...other }: FormSelectProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, onBlur, onChange, ref, value }, fieldState: { error } }) => (
        <TextField
          select
          fullWidth
          error={!!error}
          helperText={error?.message}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={ref}
          value={value}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
};

export default memo(FormSelect);
